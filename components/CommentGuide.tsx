'use client';

import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { Paragraph, Question } from '@/types/atalaya';
import { buildBiblicalComments } from '@/lib/commentGuidance';
import { copyToClipboard } from '@/lib/clipboard';

interface CommentGuideProps {
  question: Question;
  paragraphs?: Paragraph[];
  studyId?: string;
}

function favoritesCacheKey(studyId: string): string {
  return `atalaya-favorites-cache:${studyId}`;
}

function buildFavoriteId(questionNumber: string, reference: string): string {
  return `biblical-comment:${questionNumber}:${reference}`;
}

function favoriteCardClass(isFavorite: boolean): string {
  return isFavorite
    ? 'border-amber-400/80 bg-amber-50/40 shadow-md ring-2 ring-amber-400/50 dark:border-amber-500/70 dark:bg-amber-900/15 dark:ring-amber-500/40'
    : 'border-border-subtle bg-surface shadow-sm group-hover:shadow-md';
}

function favoriteBackCardClass(isFavorite: boolean): string {
  return isFavorite
    ? 'border-amber-400/80 bg-amber-50/40 shadow-lg ring-2 ring-amber-400/50 dark:border-amber-500/70 dark:bg-amber-900/15 dark:ring-amber-500/40'
    : 'border-border bg-surface-raised shadow-lg';
}

function formatBiblicalCommentCopy(item: { reference: string; contextNote: string }): string {
  return `${item.reference}\n\nPor qué está en este párrafo:\n${item.contextNote}`;
}

function CopyButton({ text, copied, onCopy }: { text: string; copied: boolean; onCopy: (text: string) => void }) {
  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        onCopy(text);
      }}
      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border transition-all ${
        copied
          ? 'border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-400'
          : 'border-border bg-surface text-text-tertiary hover:border-border-strong hover:bg-surface-raised hover:text-text-body'
      }`}
      title={copied ? 'Copiado' : 'Copiar comentario'}
    >
      {copied ? (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )}
    </button>
  );
}

function FavoriteButton({
  isFavorite,
  onToggle,
}: {
  isFavorite: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={isFavorite}
      onClick={(event) => {
        event.stopPropagation();
        onToggle();
      }}
      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border transition-all ${
        isFavorite
          ? 'border-amber-300 bg-amber-50 text-amber-600 dark:border-amber-600/70 dark:bg-amber-900/30 dark:text-amber-400'
          : 'border-border bg-surface text-text-tertiary hover:border-amber-300/60 hover:bg-amber-50/50 hover:text-amber-600 dark:hover:border-amber-600/40 dark:hover:bg-amber-900/20 dark:hover:text-amber-400'
      }`}
      title={isFavorite ? 'Quitar de favoritos' : 'Marcar como favorito'}
    >
      <svg
        className="h-4 w-4"
        fill={isFavorite ? 'currentColor' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={isFavorite ? 0 : 2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
}

export default function CommentGuide({ question, paragraphs, studyId }: CommentGuideProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [flippedBiblicalCards, setFlippedBiblicalCards] = useState<Set<string>>(new Set());
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const favoritesRef = useRef(favorites);
  const studyIdRef = useRef(studyId);
  const saveFavoritesTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const biblicalComments = buildBiblicalComments(question.biblicalCards, {
    questionText: question.textEs,
    paragraphs,
  });

  const commentEntries = useMemo(
    () =>
      biblicalComments.map((item, index) => ({
        item,
        index,
        favoriteId: buildFavoriteId(question.number, item.reference),
      })),
    [biblicalComments, question.number],
  );

  const sortedCommentEntries = useMemo(() => {
    return [...commentEntries].sort((a, b) => {
      const aFavorite = favorites[a.favoriteId] ? 1 : 0;
      const bFavorite = favorites[b.favoriteId] ? 1 : 0;
      if (aFavorite !== bFavorite) return bFavorite - aFavorite;
      return a.index - b.index;
    });
  }, [commentEntries, favorites]);

  useEffect(() => {
    favoritesRef.current = favorites;
  }, [favorites]);

  useEffect(() => {
    studyIdRef.current = studyId;
  }, [studyId]);

  useEffect(() => {
    return () => {
      if (saveFavoritesTimer.current) clearTimeout(saveFavoritesTimer.current);
    };
  }, []);

  const persistFavoritesCache = useCallback((nextFavorites: Record<string, boolean>) => {
    if (typeof window === 'undefined' || !studyId) return;
    localStorage.setItem(favoritesCacheKey(studyId), JSON.stringify(nextFavorites));
  }, [studyId]);

  const syncFavorites = useCallback(() => {
    if (!studyId) return;
    if (saveFavoritesTimer.current) clearTimeout(saveFavoritesTimer.current);
    saveFavoritesTimer.current = setTimeout(async () => {
      try {
        await fetch('/api/favorites', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            articleId: studyIdRef.current,
            data: favoritesRef.current,
          }),
        });
      } catch {
        /* localStorage cache serves as fallback */
      }
    }, 300);
  }, [studyId]);

  useEffect(() => {
    if (!studyId) return;

    let cancelled = false;

    const loadFavorites = async () => {
      let cachedFavorites: Record<string, boolean> = {};

      if (typeof window !== 'undefined') {
        const cached = localStorage.getItem(favoritesCacheKey(studyId));
        if (cached) {
          try {
            cachedFavorites = JSON.parse(cached);
          } catch {
            cachedFavorites = {};
          }
        }
      }

      if (!cancelled) setFavorites(cachedFavorites);

      try {
        const res = await fetch(`/api/favorites?articleId=${studyId}`);
        const result = res.ok ? await res.json() : null;
        if (!cancelled && result !== null) setFavorites(result);
      } catch {
        /* localStorage cache serves as fallback */
      }
    };

    void loadFavorites();

    return () => {
      cancelled = true;
    };
  }, [studyId]);

  useEffect(() => {
    if (typeof window !== 'undefined' && studyId && Object.keys(favorites).length > 0) {
      localStorage.setItem(favoritesCacheKey(studyId), JSON.stringify(favorites));
    }
  }, [favorites, studyId]);

  if (biblicalComments.length === 0) return null;

  const handleCopy = async (key: string, text: string) => {
    try {
      await copyToClipboard(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 1800);
    } catch (error) {
      console.error('Error al copiar comentario:', error);
    }
  };

  const toggleFavorite = (favoriteId: string) => {
    setFavorites((prev) => {
      const next = { ...prev };
      if (!prev[favoriteId]) {
        next[favoriteId] = true;
      } else {
        delete next[favoriteId];
      }
      persistFavoritesCache(next);
      return next;
    });
    syncFavorites();
  };

  const toggleBiblicalCard = (favoriteId: string) => {
    setFlippedBiblicalCards((prev) => {
      const next = new Set(prev);
      if (next.has(favoriteId)) {
        next.delete(favoriteId);
      } else {
        next.add(favoriteId);
      }
      return next;
    });
  };

  const handleBiblicalCardKeyDown = (event: KeyboardEvent<HTMLDivElement>, favoriteId: string) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleBiblicalCard(favoriteId);
    }
  };

  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-border bg-surface-alt">
      <div className="border-b border-border-subtle bg-surface px-5 py-3">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-tertiary">
          Cómo comentarlo
        </p>
      </div>

      <div className="space-y-5 p-5">
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted">
            Cómo comentar textos bíblicos
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {sortedCommentEntries.map(({ item, favoriteId }) => {
              const key = favoriteId;
              const isFlipped = flippedBiblicalCards.has(favoriteId);
              const isFavorite = Boolean(studyId && favorites[favoriteId]);
              return (
                <div
                  key={favoriteId}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isFlipped}
                  aria-label={`${item.reference}. ${isFlipped ? 'Mostrando el texto bíblico' : 'Mostrando el comentario'}${isFavorite ? '. Favorito' : ''}`}
                  className="relative h-[280px] cursor-pointer outline-none group"
                  style={{ perspective: '1000px' }}
                  onClick={() => toggleBiblicalCard(favoriteId)}
                  onKeyDown={(event) => handleBiblicalCardKeyDown(event, favoriteId)}
                >
                  <div
                    className="relative h-full w-full transition-transform duration-700 ease-in-out"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                  >
                    <div
                      className={`absolute inset-0 flex flex-col overflow-hidden rounded-xl border transition-shadow ${favoriteCardClass(isFavorite)}`}
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                    >
                      <div className="flex items-start justify-between gap-3 border-b border-border-subtle bg-surface-alt px-4 py-3">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-tertiary">
                            Texto bíblico
                          </span>
                          <p className="mt-1 font-serif text-base font-bold text-text-primary">
                            {item.reference}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5">
                          {studyId && (
                            <FavoriteButton
                              isFavorite={isFavorite}
                              onToggle={() => toggleFavorite(favoriteId)}
                            />
                          )}
                          <CopyButton
                            text={formatBiblicalCommentCopy(item)}
                            copied={copiedKey === key}
                            onCopy={(text) => handleCopy(key, text)}
                          />
                        </div>
                      </div>
                      <div className="flex-1 overflow-y-auto p-4 hide-scrollbar">
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted mb-1.5">
                          Por qué está en este párrafo
                        </p>
                        <p className="text-sm leading-relaxed text-text-secondary">
                          {item.contextNote}
                        </p>
                      </div>
                      <div className="border-t border-border-subtle bg-surface-alt px-4 py-2">
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted">
                          Toca para ver el texto
                        </p>
                      </div>
                    </div>

                    <div
                      className={`absolute inset-0 flex flex-col overflow-hidden rounded-xl border transition-shadow ${favoriteBackCardClass(isFavorite)}`}
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      <div className="border-b border-border-subtle bg-surface-alt px-4 py-3 text-center">
                        <span className="font-serif text-sm font-bold uppercase tracking-[0.15em] text-text-primary">
                          {item.reference}
                        </span>
                      </div>
                      <div className="flex-1 overflow-y-auto px-5 py-4 hide-scrollbar">
                        <p className="text-base leading-7 text-text-body md:text-lg">
                          &ldquo;{item.text || 'Texto bíblico no disponible.'}&rdquo;
                        </p>
                      </div>
                      <div className="border-t border-border-subtle bg-surface-alt px-4 py-2">
                        <p className="text-center text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted">
                          Toca para volver al comentario
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
