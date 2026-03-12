'use client';

import { useState, useRef, useCallback } from 'react';

interface VideoLSMProps {
  src: string;
  paragraphNumber: number | string;
  onRemove?: () => void;
  compact?: boolean; // Para usar dentro del panel lateral en desktop
}

export default function VideoLSM({ src, paragraphNumber, onRemove, compact = false }: VideoLSMProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [tapFeedback, setTapFeedback] = useState<'play' | 'pause' | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const twoFingerStartTime = useRef<number | null>(null);

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
    // Solo si fue un toque rápido (< 300ms) con 2 dedos
    if (elapsed < 300 && e.changedTouches.length > 0) {
      const video = videoRef.current;
      if (!video) return;
      if (video.paused) {
        video.play();
        setTapFeedback('play');
      } else {
        video.pause();
        setTapFeedback('pause');
      }
      setTimeout(() => setTapFeedback(null), 700);
    }
  }, []);

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
        <div className="flex items-center justify-between px-3 py-2 bg-surface-alt border-b border-border-subtle">
          <div className="flex items-center gap-2">
            <span className="text-base">🤟</span>
            <span className="text-xs font-bold text-text-tertiary uppercase tracking-wider">
              LSM — Párrafo {paragraphNumber}
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
          {tapFeedback && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-black/50 rounded-full p-4 animate-fadeIn">
                <span className="text-4xl">{tapFeedback === 'pause' ? '⏸️' : '▶️'}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Modo normal: colapsable (para inline debajo de párrafos)
  return (
    <div className="mt-4">
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
            Ver en LSM — Párrafo {paragraphNumber}
          </span>
          <svg className="w-4 h-4 text-text-tertiary ml-auto group-hover/video:text-text-secondary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      ) : (
        // Video expandido
        <div className="rounded-xl overflow-hidden border border-border shadow-lg bg-surface animate-fadeIn">
          <div className="flex items-center justify-between px-4 py-2.5 bg-surface-alt border-b border-border-subtle">
            <div className="flex items-center gap-2">
              <span className="text-base">🤟</span>
              <span className="text-xs font-bold text-text-tertiary uppercase tracking-wider">
                LSM — Párrafo {paragraphNumber}
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
            {tapFeedback && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-black/50 rounded-full p-4 animate-fadeIn">
                  <span className="text-4xl">{tapFeedback === 'pause' ? '⏸️' : '▶️'}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
