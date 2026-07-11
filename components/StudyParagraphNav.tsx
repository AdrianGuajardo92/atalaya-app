'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { ArticleData } from '@/types/atalaya';
import { copyToClipboard } from '@/lib/clipboard';
import {
  generatePlaylist,
  playlistItemToText,
  playlistToText,
} from '@/lib/generatePlaylist';
import {
  findQuestionIndexForParagraph,
  getActiveParagraphNumbers,
  isParagraphNavItemDisabled,
  type StudyNavTarget,
} from '@/lib/studyParagraphNav';

interface StudyParagraphNavProps {
  article: ArticleData;
  currentQuestionIndex: number;
  currentReviewIndex: number;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: (target: StudyNavTarget) => void;
}

function NavItemButton({
  label,
  isActive,
  disabled,
  onClick,
  itemRef,
}: {
  label: string;
  isActive: boolean;
  disabled?: boolean;
  onClick: () => void;
  itemRef?: React.RefObject<HTMLButtonElement | null>;
}) {
  return (
    <button
      ref={itemRef}
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-all ${
        disabled
          ? 'cursor-not-allowed text-slate-300 dark:text-[#5A5850]'
          : isActive
            ? 'bg-slate-800 dark:bg-[#4A4A45] text-white shadow-sm'
            : 'text-slate-600 dark:text-[#A9A79E] hover:bg-slate-50 dark:hover:bg-[#3A3A37]/50 hover:text-slate-800 dark:hover:text-white'
      }`}
    >
      {label}
    </button>
  );
}

export default function StudyParagraphNav({
  article,
  currentQuestionIndex,
  currentReviewIndex,
  isOpen,
  onToggle,
  onNavigate,
}: StudyParagraphNavProps) {
  const activeItemRef = useRef<HTMLButtonElement>(null);
  const copyStatusTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeTab, setActiveTab] = useState<'navigation' | 'playlist'>('navigation');
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { paragraphs, questions, reviewQuestions } = article;
  const playlist = useMemo(() => generatePlaylist(article), [article]);
  const reviewCount = reviewQuestions.length;
  const activeParagraphNumbers = getActiveParagraphNumbers(
    questions,
    currentQuestionIndex,
    currentReviewIndex,
  );

  useEffect(() => {
    if (!isOpen || !activeItemRef.current) return;
    activeItemRef.current.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [isOpen, currentQuestionIndex, currentReviewIndex]);

  useEffect(() => () => {
    if (copyStatusTimeout.current) clearTimeout(copyStatusTimeout.current);
  }, []);

  const handleParagraphClick = (paragraphNumber: number) => {
    const questionIndex = findQuestionIndexForParagraph(questions, paragraphNumber);
    if (questionIndex === -1) return;
    onNavigate({ kind: 'question', questionIndex });
  };

  const handleCopyPlaylist = async () => {
    const success = await copyToClipboard(playlistToText(playlist));
    setCopyStatus(success ? 'success' : 'error');

    if (copyStatusTimeout.current) clearTimeout(copyStatusTimeout.current);
    copyStatusTimeout.current = setTimeout(() => setCopyStatus('idle'), 2500);
  };

  return (
    <>
      {/* Tab para reabrir cuando está colapsado */}
      {!isOpen && (
        <button
          type="button"
          onClick={onToggle}
          className="fixed left-0 top-1/2 z-50 hidden -translate-y-1/2 rounded-r-xl border border-l-0 border-slate-200/50 bg-white/95 px-2 py-4 shadow-lg backdrop-blur-sm transition-all hover:bg-slate-50 dark:border-[#3A3A37]/50 dark:bg-[#30302E]/95 dark:hover:bg-[#3A3A37]/80 md:block"
          title="Abrir navegación (Ctrl+B)"
          aria-label="Abrir navegación"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-slate-500 dark:text-[#8B8980]"
            aria-hidden="true"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}

      {isOpen && (
        <button
          type="button"
          onClick={onToggle}
          className="tablet-portrait-nav-backdrop fixed inset-0 z-40 cursor-default bg-transparent"
          aria-label="Cerrar navegación"
        />
      )}

      {/* Panel lateral */}
      <aside
        className={`fixed left-4 top-4 z-50 hidden w-[240px] transition-all duration-300 md:block ${
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-[calc(100%+1rem)] opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex max-h-[calc(100vh-2rem)] flex-col rounded-2xl border border-border bg-surface/95 shadow-2xl backdrop-blur-xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 dark:border-[#3A3A37]/40">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-tertiary">
                Panel lateral
              </p>
              <p className="mt-0.5 text-[10px] text-text-tertiary">
                Ctrl / ⌘ + B
              </p>
            </div>
            <button
              type="button"
              onClick={onToggle}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-[#3A3A37]/50 dark:hover:text-[#C2C0B6]"
              title="Cerrar navegación (Ctrl+B)"
              aria-label="Cerrar navegación"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="border-b border-border px-3 py-2">
            <div
              role="tablist"
              aria-label="Contenido del panel lateral"
              className="grid grid-cols-2 rounded-lg bg-surface-alt p-1"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'navigation'}
                onClick={() => setActiveTab('navigation')}
                className={`rounded-md px-2 py-1.5 text-xs font-semibold transition-all ${
                  activeTab === 'navigation'
                    ? 'bg-surface-raised text-text-primary shadow-sm'
                    : 'text-text-tertiary hover:text-text-body'
                }`}
              >
                Navegación
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'playlist'}
                onClick={() => setActiveTab('playlist')}
                className={`rounded-md px-2 py-1.5 text-xs font-semibold transition-all ${
                  activeTab === 'playlist'
                    ? 'bg-surface-raised text-text-primary shadow-sm'
                    : 'text-text-tertiary hover:text-text-body'
                }`}
              >
                Playlist
              </button>
            </div>
          </div>

          {/* Lista scrollable */}
          <div className="hide-scrollbar min-h-0 flex-1 overflow-y-auto px-3 py-3">
            {activeTab === 'navigation' ? (
              <>
                <p className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-text-tertiary">
                  Párrafos
                </p>
                <div className="space-y-1">
                  {paragraphs.map((paragraph) => {
                    const isActive =
                      currentReviewIndex === -1 &&
                      activeParagraphNumbers.includes(paragraph.number);
                    const disabled = isParagraphNavItemDisabled(questions, paragraph.number);
                    const isPrimaryActive =
                      isActive &&
                      paragraph.number === activeParagraphNumbers[0];

                    return (
                      <NavItemButton
                        key={paragraph.number}
                        label={`Párrafo ${paragraph.number}`}
                        isActive={isActive}
                        disabled={disabled}
                        itemRef={isPrimaryActive ? activeItemRef : undefined}
                        onClick={() => handleParagraphClick(paragraph.number)}
                      />
                    );
                  })}
                </div>

                {reviewCount > 0 && (
                  <>
                    <div className="my-4 flex items-center gap-2 px-1">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
                      <span className="text-xs text-text-tertiary">✦</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
                    </div>

                    <p className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-text-tertiary">
                      Repaso
                    </p>
                    <div className="space-y-1">
                      {Array.from({ length: reviewCount }, (_, index) => {
                        const isActive = currentReviewIndex === index;
                        return (
                          <NavItemButton
                            key={`review-${index}`}
                            label={`Repaso ${index + 1}`}
                            isActive={isActive}
                            itemRef={isActive ? activeItemRef : undefined}
                            onClick={() => onNavigate({ kind: 'review', reviewIndex: index })}
                          />
                        );
                      })}
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <p className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-text-tertiary">
                  Orden para JW Library
                </p>
                <ol className="space-y-1.5">
                  {playlist.map((item, index) => (
                    <li
                      key={`${item.type}-${index}`}
                      className={`flex gap-2 rounded-lg border px-2.5 py-2 text-xs leading-relaxed ${
                        item.detail
                          ? 'border-border-strong bg-surface-alt text-text-primary'
                          : 'border-transparent text-text-body'
                      }`}
                    >
                      <span className="w-5 flex-shrink-0 font-mono text-[10px] text-text-tertiary">
                        {index + 1}.
                      </span>
                      <span className="whitespace-pre-line font-medium">
                        {playlistItemToText(item)}
                      </span>
                    </li>
                  ))}
                </ol>
              </>
            )}
          </div>

          {activeTab === 'playlist' && (
            <div className="border-t border-border bg-surface-alt p-3">
              <button
                type="button"
                onClick={handleCopyPlaylist}
                className={`w-full rounded-lg border px-3 py-2.5 text-sm font-semibold shadow-sm transition-all active:scale-[0.98] ${
                  copyStatus === 'error'
                    ? 'border-red-400 bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-300'
                    : 'border-border-strong bg-slate-800 text-white hover:opacity-90 dark:bg-surface-raised dark:text-text-primary'
                }`}
                aria-live="polite"
              >
                {copyStatus === 'success'
                  ? '✓ Playlist copiada'
                  : copyStatus === 'error'
                    ? 'No se pudo copiar'
                    : 'Copiar todo'}
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
