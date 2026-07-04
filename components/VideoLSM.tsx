'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

interface VideoLSMProps {
  src: string;
  paragraphNumber: number | string;
  onRemove?: () => void;
  compact?: boolean; // Para usar dentro del panel lateral en desktop
  questionTextLSM?: string; // Pregunta en LSM (o español como fallback) para mostrar en el header
}

const SPEED_OPTIONS = [1, 1.1, 1.2, 1.4, 1.75, 2] as const;

const FEEDBACK_ICONS: Record<string, string> = {
  pause: '⏸️',
  play: '▶️',
  back: '⏪ -5s',
  forward: '⏩ +5s',
  restart: '⏮️',
};

const seekBtnClass = "text-white/70 hover:text-white hover:bg-white/15 px-1.5 py-0.5 rounded text-[11px] font-bold transition-all";
const LSM_VIDEO_SELECTOR = 'video[controls][aria-label^="Video LSM"]';

let activeVideoContainer: HTMLDivElement | null = null;
let activeVideoScrollGeneration = 0;
let scrollGeneration = 0;
let scrollGenerationListenerAttached = false;

type VisibleVideoCandidate = {
  video: HTMLVideoElement;
  visibleRatio: number;
  score: number;
};

type VisibleElementCandidate = {
  element: HTMLElement;
  visibleRatio: number;
  score: number;
};

type LsmPlayerHandle = {
  label: string;
  container: HTMLDivElement;
  getVideo: () => HTMLVideoElement | null;
  isCollapsed: () => boolean;
  expand: () => void;
  togglePlayPause: () => void;
  markActive: () => void;
};

const playerRegistry = new Set<LsmPlayerHandle>();
let scrollPinnedPlayer: LsmPlayerHandle | null = null;
let lastScrollPinnedLabel: string | null = null;

type AtalayaLsmWindow = Window & {
  __atalayaLsmSpaceBridge__?: { onSpace: (e: KeyboardEvent) => void };
  __atalayaLsmSpaceListener__?: (e: KeyboardEvent) => void;
  __atalayaLsmSpaceListenersAttached__?: boolean;
};

/** Puente en window para sobrevivir HMR: el listener siempre lee el mismo objeto. */
const getSpaceKeyBridge = (): { onSpace: (e: KeyboardEvent) => void } => {
  const win = window as AtalayaLsmWindow;
  if (!win.__atalayaLsmSpaceBridge__) {
    win.__atalayaLsmSpaceBridge__ = { onSpace: () => {} };
  }
  return win.__atalayaLsmSpaceBridge__;
};

const getSpaceListener = (): ((e: KeyboardEvent) => void) => {
  const win = window as AtalayaLsmWindow;
  if (!win.__atalayaLsmSpaceListener__) {
    win.__atalayaLsmSpaceListener__ = (e: KeyboardEvent) => {
      if (!isSpaceKeyEvent(e)) return;
      getSpaceKeyBridge().onSpace(e);
    };
  }
  return win.__atalayaLsmSpaceListener__;
};

const runPlayerPlayPause = (targetPlayer: LsmPlayerHandle) => {
  targetPlayer.markActive();

  if (targetPlayer.isCollapsed()) {
    targetPlayer.expand();
    return;
  }

  const video = targetPlayer.getVideo();
  if (!video) return;

  video.focus({ preventScroll: true });
  if (video.paused) {
    void video.play().catch(() => undefined);
  } else {
    video.pause();
  }
};

const handleDocumentSpaceKey = (e: KeyboardEvent) => {
  if (isTextEntryTargetElement(e.target)) return;

  const targetPlayer = getKeyboardTargetPlayer() ?? scrollPinnedPlayer;
  if (!targetPlayer) return;

  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  runPlayerPlayPause(targetPlayer);
};

const refreshSpaceKeyBridge = () => {
  getSpaceKeyBridge().onSpace = handleDocumentSpaceKey;
};

const updateScrollPinnedPlayer = () => {
  const next = getKeyboardTargetPlayer();
  const nextLabel = next?.label ?? null;
  if (nextLabel !== lastScrollPinnedLabel) {
    lastScrollPinnedLabel = nextLabel;
  }
  scrollPinnedPlayer = next;
};

const getVisibleElementCandidate = (element: HTMLElement): VisibleElementCandidate | null => {
  const rect = element.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) return null;

  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const visibleLeft = Math.max(0, rect.left);
  const visibleRight = Math.min(viewportWidth, rect.right);
  const visibleTop = Math.max(0, rect.top);
  const visibleBottom = Math.min(viewportHeight, rect.bottom);
  const visibleWidth = Math.max(0, visibleRight - visibleLeft);
  const visibleHeight = Math.max(0, visibleBottom - visibleTop);
  if (visibleWidth < 80 || visibleHeight < 48) return null;

  const visibleArea = visibleWidth * visibleHeight;
  const totalArea = rect.width * rect.height;
  const visibleRatio = visibleArea / totalArea;
  const hasMeaningfulVisibility = visibleRatio >= 0.12 || visibleHeight >= Math.min(120, rect.height * 0.2);
  if (!hasMeaningfulVisibility) return null;

  const centerY = rect.top + rect.height / 2;
  const viewportCenterY = viewportHeight / 2;
  const centerDistance = Math.abs(centerY - viewportCenterY);
  const centerScore = 1 - Math.min(centerDistance / Math.max(viewportCenterY, 1), 1);

  return {
    element,
    visibleRatio,
    score: visibleRatio * 2 + centerScore,
  };
};

const isSpaceKeyEvent = (e: KeyboardEvent | React.KeyboardEvent<Element>) => (
  e.key === ' ' || e.key === 'Space' || e.key === 'Spacebar' || e.code === 'Space'
);

const isTextEntryTargetElement = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target.isContentEditable;
};

const getKeyboardTargetPlayer = (): LsmPlayerHandle | null => {
  if (typeof document === 'undefined') return null;

  const handles = Array.from(playerRegistry);
  const candidates = handles
    .map((handle) => {
      const candidate = getVisibleElementCandidate(handle.container);
      if (!candidate) return null;
      return { handle, score: candidate.score, visibleRatio: candidate.visibleRatio };
    })
    .filter((candidate): candidate is { handle: LsmPlayerHandle; score: number; visibleRatio: number } => Boolean(candidate))
    .sort((a, b) => b.score - a.score);

  if (candidates.length === 0) return null;

  const activeHandle = handles.find((handle) => handle.container === activeVideoContainer);
  const activeCandidate = candidates.find((candidate) => candidate.handle === activeHandle);
  if (activeCandidate && activeVideoScrollGeneration === scrollGeneration) {
    return activeCandidate.handle;
  }

  const playingCandidate = candidates.find((candidate) => {
    const video = candidate.handle.getVideo();
    return video && !video.paused && !video.ended;
  });
  if (playingCandidate) return playingCandidate.handle;

  const pinnedCandidate = scrollPinnedPlayer
    ? candidates.find((candidate) => candidate.handle === scrollPinnedPlayer)
    : null;
  if (pinnedCandidate) return pinnedCandidate.handle;

  return candidates[0].handle;
};

const ensureGlobalKeyboardListener = () => {
  if (typeof document === 'undefined') return;

  refreshSpaceKeyBridge();

  const win = window as AtalayaLsmWindow;
  const listener = getSpaceListener();
  if (!win.__atalayaLsmSpaceListenersAttached__) {
    document.addEventListener('keydown', listener, { capture: true });
    win.__atalayaLsmSpaceListenersAttached__ = true;
  }
};

const ensureScrollGenerationListener = () => {
  if (scrollGenerationListenerAttached || typeof window === 'undefined') return;

  window.addEventListener('scroll', () => {
    scrollGeneration += 1;
    requestAnimationFrame(updateScrollPinnedPlayer);
  }, { capture: true, passive: true });

  scrollGenerationListenerAttached = true;
  requestAnimationFrame(updateScrollPinnedPlayer);
};

const getVisibleVideoCandidate = (video: HTMLVideoElement): VisibleVideoCandidate | null => {
  const rect = video.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) return null;

  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const visibleLeft = Math.max(0, rect.left);
  const visibleRight = Math.min(viewportWidth, rect.right);
  const visibleTop = Math.max(0, rect.top);
  const visibleBottom = Math.min(viewportHeight, rect.bottom);
  const visibleWidth = Math.max(0, visibleRight - visibleLeft);
  const visibleHeight = Math.max(0, visibleBottom - visibleTop);
  if (visibleWidth < 80 || visibleHeight < 80) return null;

  const visibleArea = visibleWidth * visibleHeight;
  const totalArea = rect.width * rect.height;
  const visibleRatio = visibleArea / totalArea;
  const hasMeaningfulVisibility = visibleRatio >= 0.12 || visibleHeight >= Math.min(160, rect.height * 0.2);
  if (!hasMeaningfulVisibility) return null;

  const videoCenterY = rect.top + rect.height / 2;
  const viewportCenterY = viewportHeight / 2;
  const centerDistance = Math.abs(videoCenterY - viewportCenterY);
  const centerScore = 1 - Math.min(centerDistance / Math.max(viewportCenterY, 1), 1);

  return {
    video,
    visibleRatio,
    score: visibleRatio * 2 + centerScore,
  };
};

const getKeyboardTargetVideo = (): HTMLVideoElement | null => {
  const player = getKeyboardTargetPlayer();
  if (player) {
    const video = player.getVideo();
    if (video) return video;
  }

  if (typeof document === 'undefined') return null;

  const videos = Array.from(document.querySelectorAll<HTMLVideoElement>(LSM_VIDEO_SELECTOR));
  const candidates = videos
    .map(getVisibleVideoCandidate)
    .filter((candidate): candidate is VisibleVideoCandidate => Boolean(candidate))
    .sort((a, b) => b.score - a.score);

  if (candidates.length === 0) return null;

  const activeVideo = activeVideoContainer?.querySelector<HTMLVideoElement>(LSM_VIDEO_SELECTOR);
  const activeCandidate = candidates.find((candidate) => candidate.video === activeVideo);
  if (activeCandidate && activeVideoScrollGeneration === scrollGeneration) {
    return activeCandidate.video;
  }

  const playingCandidate = candidates.find((candidate) => (
    !candidate.video.paused && !candidate.video.ended
  ));
  if (playingCandidate) return playingCandidate.video;

  return candidates[0].video;
};

export default function VideoLSM({ src, paragraphNumber, onRemove, compact = false, questionTextLSM}: VideoLSMProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [tapFeedback, setTapFeedback] = useState<string | null>(null);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [shouldPreload, setShouldPreload] = useState(compact);
  const videoRef = useRef<HTMLVideoElement>(null);
  const preloadVideoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pendingSpacePlayRef = useRef(false);
  const isCollapsedRef = useRef(false);
  const playerApiRef = useRef({
    expand: () => {},
    togglePlayPause: () => {},
    markActive: () => {},
  });
  const [isVisible, setIsVisible] = useState(false);
  const twoFingerStartTime = useRef<number | null>(null);
  const feedbackTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  isCollapsedRef.current = !compact && !isExpanded;

  useEffect(() => {
    ensureScrollGenerationListener();
    ensureGlobalKeyboardListener();
  }, []);

  useEffect(() => {
    if (!isExpanded || !pendingSpacePlayRef.current) return;

    const tryPlay = () => {
      const video = videoRef.current;
      if (!video) return false;
      pendingSpacePlayRef.current = false;
      void video.play().catch(() => undefined);
      return true;
    };

    if (tryPlay()) return;

    const raf = requestAnimationFrame(() => {
      if (tryPlay()) return;
      window.setTimeout(tryPlay, 80);
    });
    return () => cancelAnimationFrame(raf);
  }, [isExpanded, paragraphNumber, shouldPreload]);

  // Reset error when src changes
  useEffect(() => {
    setHasError(false);
    setShouldPreload(compact);
  }, [src, compact]);

  // Precargar videos que ya son visibles o que están cerca de entrar en pantalla.
  useEffect(() => {
    if (compact || isExpanded) {
      setShouldPreload(true);
      return;
    }

    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldPreload(true);
          observer.disconnect();
        }
      },
      { rootMargin: '800px 0px', threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [compact, isExpanded, src]);

  useEffect(() => {
    if (!shouldPreload) return;

    const video = videoRef.current || preloadVideoRef.current;
    if (!video) return;

    video.load();
  }, [shouldPreload, src, isExpanded, compact]);

  // Auto-scroll para centrar el dropdown cuando se expande en móvil
  useEffect(() => {
    if (isExpanded && !compact && containerRef.current) {
      setTimeout(() => {
        containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [isExpanded, compact]);

  const showFeedback = useCallback((type: string) => {
    clearTimeout(feedbackTimerRef.current);
    setTapFeedback(type);
    feedbackTimerRef.current = setTimeout(() => setTapFeedback(null), 700);
  }, []);

  // Cleanup timer on unmount
  useEffect(() => () => clearTimeout(feedbackTimerRef.current), []);

  const isSpaceKey = useCallback((e: KeyboardEvent | React.KeyboardEvent<Element>) => (
    isSpaceKeyEvent(e)
  ), []);

  const isTextEntryTarget = useCallback((target: EventTarget | null) => (
    isTextEntryTargetElement(target)
  ), []);

  const markActivePlayer = useCallback(() => {
    if (containerRef.current) {
      activeVideoContainer = containerRef.current;
      activeVideoScrollGeneration = scrollGeneration;
    }
  }, []);

  const clearActivePlayer = useCallback(() => {
    const container = containerRef.current;
    const activeElement = document.activeElement;
    const focusStillInside = container && activeElement instanceof Node && container.contains(activeElement);

    if (activeVideoContainer === container && !focusStillInside) {
      activeVideoContainer = null;
    }
  }, []);

  const togglePlayPause = useCallback((options: { showVisualFeedback?: boolean } = {}) => {
    const { showVisualFeedback = true } = options;
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play().catch(() => undefined);
      if (showVisualFeedback) showFeedback('play');
    } else {
      video.pause();
      if (showVisualFeedback) showFeedback('pause');
    }
  }, [showFeedback]);

  playerApiRef.current.expand = () => {
    pendingSpacePlayRef.current = true;
    setShouldPreload(true);
    setIsExpanded(true);
  };
  playerApiRef.current.togglePlayPause = () => togglePlayPause({ showVisualFeedback: false });
  playerApiRef.current.markActive = markActivePlayer;

  useEffect(() => {
    let cancelled = false;
    let handle: LsmPlayerHandle | null = null;

    const tryRegister = () => {
      if (cancelled) return;
      const container = containerRef.current;
      if (!container) return;

      if (handle) playerRegistry.delete(handle);

      handle = {
        label: `${paragraphNumber}${compact ? ':compact' : ':inline'}`,
        container,
        getVideo: () => videoRef.current,
        isCollapsed: () => isCollapsedRef.current,
        expand: () => playerApiRef.current.expand(),
        togglePlayPause: () => playerApiRef.current.togglePlayPause(),
        markActive: () => playerApiRef.current.markActive(),
      };
      playerRegistry.add(handle);
    };

    tryRegister();
    const raf = requestAnimationFrame(() => {
      tryRegister();
      updateScrollPinnedPlayer();
      refreshSpaceKeyBridge();
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      if (handle) playerRegistry.delete(handle);
    };
  }, [paragraphNumber, compact, src]);

  const handleVideoKeyDown = useCallback((e: React.KeyboardEvent<HTMLVideoElement>) => {
    if (!isSpaceKey(e)) return;
    e.preventDefault();
    e.stopPropagation();
    togglePlayPause({ showVisualFeedback: false });
  }, [isSpaceKey, togglePlayPause]);

  const focusPlayerContainer = useCallback(() => {
    markActivePlayer();
    containerRef.current?.focus({ preventScroll: true });
  }, [markActivePlayer]);

  const handleVideoPointerDown = useCallback(() => {
    focusPlayerContainer();
  }, [focusPlayerContainer]);

  const handleVideoClick = useCallback(() => {
    window.setTimeout(() => focusPlayerContainer(), 0);
  }, [focusPlayerContainer]);

  const handlePlayerKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (isTextEntryTarget(e.target)) return;
    if (!isSpaceKey(e)) return;
    if (e.defaultPrevented) return;

    e.preventDefault();
    e.stopPropagation();
    togglePlayPause({ showVisualFeedback: false });
  }, [isSpaceKey, isTextEntryTarget, togglePlayPause]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      twoFingerStartTime.current = Date.now();
    } else {
      twoFingerStartTime.current = null;
    }
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (twoFingerStartTime.current === null) return;
    const elapsed = Date.now() - twoFingerStartTime.current;
    twoFingerStartTime.current = null;
    if (elapsed < 300 && e.changedTouches.length > 0) {
      togglePlayPause();
    }
  }, [togglePlayPause]);

  const seekVideo = useCallback((seconds: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.max(0, Math.min(video.duration || 0, video.currentTime + seconds));
    showFeedback(seconds < 0 ? 'back' : 'forward');
  }, [showFeedback]);

  const restartVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    void video.play().catch(() => undefined);
    showFeedback('restart');
  }, [showFeedback]);

  const changeSpeed = useCallback((rate: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
      setPlaybackRate(rate);
    }
  }, []);

  const stepSpeed = useCallback((direction: 'up' | 'down') => {
    setPlaybackRate((current) => {
      const idx = Math.max(0, SPEED_OPTIONS.indexOf(current as typeof SPEED_OPTIONS[number]));
      const newIndex = direction === 'up'
        ? Math.min(idx + 1, SPEED_OPTIONS.length - 1)
        : Math.max(idx - 1, 0);
      const newRate = SPEED_OPTIONS[newIndex];
      if (videoRef.current) {
        videoRef.current.playbackRate = newRate;
      }
      return newRate;
    });
  }, []);

  // Atajos de teclado solo cuando el reproductor es visible en pantalla
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting && entry.intersectionRatio > 0.25),
      { threshold: [0, 0.25, 0.5] }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isSpaceKey(e)) return;

      const video = videoRef.current;
      if (!video || !isVisible) return;
      if (isTextEntryTarget(e.target)) return;
      if (getKeyboardTargetVideo() !== video) return;

      switch (e.key) {
        case 'Home':
          e.preventDefault();
          restartVideo();
          break;
        case 'ArrowLeft':
          if (!e.ctrlKey) { e.preventDefault(); seekVideo(-5); }
          break;
        case 'ArrowRight':
          if (!e.ctrlKey) { e.preventDefault(); seekVideo(5); }
          break;
        case 'ArrowUp':
          if (e.ctrlKey) { e.preventDefault(); stepSpeed('up'); }
          break;
        case 'ArrowDown':
          if (e.ctrlKey) { e.preventDefault(); stepSpeed('down'); }
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, [isSpaceKey, isTextEntryTarget, restartVideo, seekVideo, stepSpeed, isVisible]);

  const feedbackOverlay = tapFeedback && (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="bg-black/50 rounded-full p-4 animate-fadeIn">
        <span className="text-4xl">{FEEDBACK_ICONS[tapFeedback]}</span>
      </div>
    </div>
  );

  const controlBar = (
    <div className="flex items-center gap-1 px-3 py-1.5 bg-black/90 border-t border-white/10">
      <button
        onClick={restartVideo}
        className={seekBtnClass}
        title="Reiniciar (Home)"
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
        </svg>
      </button>
      <button onClick={() => seekVideo(-5)} className={seekBtnClass} title="Retroceder 5s">
        -5s
      </button>
      <button onClick={() => seekVideo(5)} className={seekBtnClass} title="Adelantar 5s">
        +5s
      </button>

      <div className="w-px h-4 bg-white/20 mx-1" />

      <span className="text-[10px] text-white/50 font-medium mr-0.5 uppercase tracking-wider">Vel</span>
      {SPEED_OPTIONS.map((rate) => (
        <button
          key={rate}
          onClick={() => changeSpeed(rate)}
          className={`px-2 py-0.5 rounded text-xs font-bold transition-all ${
            playbackRate === rate
              ? 'bg-white text-black shadow-sm'
              : 'text-white/70 hover:text-white hover:bg-white/15'
          }`}
        >
          {rate === 1 ? '1x' : `${rate}x`}
        </button>
      ))}
    </div>
  );

  if (hasError) {
    return (
      <div className="mt-3 p-3 rounded-lg border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10 text-sm text-red-600 dark:text-red-400 flex items-center gap-2">
        <span>⚠️</span>
        <span>No se pudo cargar el video LSM</span>
        {onRemove && (
          <button
            onClick={onRemove}
            className="ml-auto text-xs text-red-400 hover:text-red-600 dark:hover:text-red-300"
          >
            Eliminar
          </button>
        )}
      </div>
    );
  }

  // Modo compacto: siempre expandido (para panel lateral)
  if (compact) {
    return (
      <div
        ref={containerRef}
        tabIndex={0}
        onMouseEnter={markActivePlayer}
        onMouseLeave={clearActivePlayer}
        onPointerDownCapture={markActivePlayer}
        onFocusCapture={markActivePlayer}
        onKeyDown={handlePlayerKeyDown}
        className="rounded-xl overflow-hidden border border-border shadow-sm bg-surface"
      >
        <div className="px-3 py-2 bg-surface-alt border-b border-border-subtle">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-base">🤟</span>
              <span className="text-xs font-bold text-text-tertiary uppercase tracking-wider">
                LSM — {String(paragraphNumber).includes(',') ? 'Párrafos' : 'Párrafo'} {paragraphNumber}
              </span>
            </div>
            {onRemove && (
              <button
                onClick={onRemove}
                className="text-text-tertiary hover:text-red-500 dark:hover:text-red-400 transition-colors text-xs"
                title="Eliminar video"
              >
                🗑️
              </button>
            )}
          </div>
          {questionTextLSM && (
            <p className="text-xs text-text-secondary mt-1 leading-snug whitespace-pre-line break-words">{questionTextLSM}</p>
          )}
        </div>
        <div className="relative">
          <video
            ref={videoRef}
            src={src}
            controls
            playsInline
            preload="auto"
            tabIndex={0}
            aria-label={`Video LSM ${paragraphNumber}`}
            className="w-full aspect-video bg-black"
            onError={() => setHasError(true)}
            onPlay={markActivePlayer}
            onKeyDown={handleVideoKeyDown}
            onPointerDown={handleVideoPointerDown}
            onClick={handleVideoClick}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            Tu navegador no soporta la reproducción de video.
          </video>
          {feedbackOverlay}
        </div>
        {controlBar}
      </div>
    );
  }

  // Modo normal: colapsable (para inline debajo de párrafos)
  return (
    <div
      className="mt-4"
      ref={containerRef}
      tabIndex={0}
      onMouseEnter={markActivePlayer}
      onMouseLeave={clearActivePlayer}
      onPointerDownCapture={markActivePlayer}
      onFocusCapture={markActivePlayer}
      onKeyDown={handlePlayerKeyDown}
    >
      {!isExpanded ? (
        <>
          {/* Botón colapsado */}
          <button
            onMouseEnter={() => setShouldPreload(true)}
            onFocus={() => setShouldPreload(true)}
            onTouchStart={() => setShouldPreload(true)}
            onClick={() => setIsExpanded(true)}
            className="group/video w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-surface-alt hover:bg-surface-raised hover:border-border-strong transition-all shadow-sm hover:shadow-md"
          >
            <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-[#332520] text-blue-600 dark:text-[#D97757] flex items-center justify-center text-lg shadow-sm border border-blue-200 dark:border-[#3E2E28] flex-shrink-0">
              🤟
            </div>
            <span className="text-sm font-bold text-text-secondary uppercase tracking-wider group-hover/video:text-text-primary transition-colors">
              Ver en LSM — {String(paragraphNumber).includes(',') ? 'Párrafos' : 'Párrafo'} {paragraphNumber}
            </span>
            <svg className="w-4 h-4 text-text-tertiary ml-auto group-hover/video:text-text-secondary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          {shouldPreload && (
            <video
              ref={preloadVideoRef}
              src={src}
              preload="auto"
              muted
              playsInline
              aria-hidden="true"
              tabIndex={-1}
              className="absolute h-0 w-0 opacity-0 pointer-events-none"
              onError={() => setHasError(true)}
            />
          )}
        </>
      ) : (
        // Video expandido
        <div className="rounded-xl overflow-hidden border border-border shadow-lg bg-surface animate-fadeIn">
          <div className="px-4 py-2.5 bg-surface-alt border-b border-border-subtle">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-base">🤟</span>
                <span className="text-xs font-bold text-text-tertiary uppercase tracking-wider">
                  LSM — {String(paragraphNumber).includes(',') ? 'Párrafos' : 'Párrafo'} {paragraphNumber}
                </span>
              </div>
              <div className="flex items-center gap-2">
              {onRemove && (
                <button
                  onClick={onRemove}
                  className="text-text-tertiary hover:text-red-500 dark:hover:text-red-400 transition-colors text-xs"
                  title="Eliminar video"
                >
                  🗑️
                </button>
              )}
              <button
                onClick={() => setIsExpanded(false)}
                className="text-text-tertiary hover:text-text-secondary transition-colors"
                title="Colapsar video"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
            </div>
            </div>
            {questionTextLSM && (
              <p className="text-xs text-text-secondary mt-1 leading-snug whitespace-pre-line break-words">{questionTextLSM}</p>
            )}
          </div>
          <div className="relative">
            <video
              ref={videoRef}
              src={src}
              controls
              playsInline
              autoPlay
              preload="auto"
              tabIndex={0}
              aria-label={`Video LSM ${paragraphNumber}`}
              className="w-full aspect-video bg-black"
              onError={() => setHasError(true)}
              onPlay={markActivePlayer}
              onKeyDown={handleVideoKeyDown}
              onPointerDown={handleVideoPointerDown}
              onClick={handleVideoClick}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              Tu navegador no soporta la reproducción de video.
            </video>
            {feedbackOverlay}
          </div>
          {controlBar}
        </div>
      )}
    </div>
  );
}
