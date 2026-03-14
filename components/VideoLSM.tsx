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

export default function VideoLSM({ src, paragraphNumber, onRemove, compact = false, questionTextLSM}: VideoLSMProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [tapFeedback, setTapFeedback] = useState<string | null>(null);
  const [playbackRate, setPlaybackRate] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const twoFingerStartTime = useRef<number | null>(null);
  const feedbackTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Reset error when src changes
  useEffect(() => { setHasError(false); }, [src]);

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

  const togglePlayPause = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      showFeedback('play');
    } else {
      video.pause();
      showFeedback('pause');
    }
  }, [showFeedback]);

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
    video.play();
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

  // Atajos de teclado globales
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      // Solo responder si este video es visible
      if (!videoRef.current) return;

      switch (e.key) {
        case ' ':
          e.preventDefault();
          togglePlayPause();
          break;
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
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlayPause, restartVideo, seekVideo, stepSpeed]);

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
      <div className="rounded-xl overflow-hidden border border-border shadow-sm bg-surface">
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
            <p className="text-xs text-text-secondary mt-1 leading-snug truncate">{questionTextLSM}</p>
          )}
        </div>
        <div className="relative">
          <video
            ref={videoRef}
            src={src}
            controls
            playsInline
            preload="metadata"
            className="w-full aspect-video bg-black"
            onError={() => setHasError(true)}
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
    <div className="mt-4" ref={containerRef}>
      {!isExpanded ? (
        // Botón colapsado
        <button
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
              <p className="text-xs text-text-secondary mt-1 leading-snug truncate">{questionTextLSM}</p>
            )}
          </div>
          <div className="relative">
            <video
              ref={videoRef}
              src={src}
              controls
              playsInline
              autoPlay
              preload="metadata"
              className="w-full aspect-video bg-black"
              onError={() => setHasError(true)}
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
