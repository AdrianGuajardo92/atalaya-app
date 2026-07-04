'use client';

import { useEffect, useRef } from 'react';
import type { Paragraph, Question } from '@/types/atalaya';
import {
  findQuestionIndexForParagraph,
  getActiveParagraphNumbers,
  isParagraphNavItemDisabled,
  type StudyNavTarget,
} from '@/lib/studyParagraphNav';

interface StudyParagraphNavProps {
  paragraphs: Paragraph[];
  questions: Question[];
  reviewCount: number;
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
  paragraphs,
  questions,
  reviewCount,
  currentQuestionIndex,
  currentReviewIndex,
  isOpen,
  onToggle,
  onNavigate,
}: StudyParagraphNavProps) {
  const activeItemRef = useRef<HTMLButtonElement>(null);
  const activeParagraphNumbers = getActiveParagraphNumbers(
    questions,
    currentQuestionIndex,
    currentReviewIndex,
  );

  useEffect(() => {
    if (!isOpen || !activeItemRef.current) return;
    activeItemRef.current.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [isOpen, currentQuestionIndex, currentReviewIndex]);

  const handleParagraphClick = (paragraphNumber: number) => {
    const questionIndex = findQuestionIndexForParagraph(questions, paragraphNumber);
    if (questionIndex === -1) return;
    onNavigate({ kind: 'question', questionIndex });
  };

  return (
    <>
      {/* Tab para reabrir cuando está colapsado */}
      {!isOpen && (
        <button
          type="button"
          onClick={onToggle}
          className="fixed left-0 top-1/2 z-50 hidden -translate-y-1/2 rounded-r-xl border border-l-0 border-slate-200/50 bg-white/95 px-2 py-4 shadow-lg backdrop-blur-sm transition-all hover:bg-slate-50 dark:border-[#3A3A37]/50 dark:bg-[#30302E]/95 dark:hover:bg-[#3A3A37]/80 lg:block"
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

      {/* Panel lateral */}
      <aside
        className={`fixed left-4 top-4 z-50 hidden w-[240px] transition-all duration-300 lg:block ${
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-[calc(100%+1rem)] opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex max-h-[calc(100vh-2rem)] flex-col rounded-2xl border border-slate-200/50 bg-white/95 shadow-2xl backdrop-blur-xl dark:border-[#3A3A37]/50 dark:bg-[#30302E]/95">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 dark:border-[#3A3A37]/40">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 dark:text-[#7D7B73]">
                Navegación
              </p>
              <p className="mt-0.5 text-[10px] text-slate-400 dark:text-[#7D7B73]">
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

          {/* Lista scrollable */}
          <div className="overflow-y-auto px-3 py-3">
            <p className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 dark:text-[#7D7B73]">
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
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-[#3A3A37]" />
                  <span className="text-xs text-slate-300 dark:text-[#5A5850]">✦</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-[#3A3A37]" />
                </div>

                <p className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 dark:text-[#7D7B73]">
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
          </div>
        </div>
      </aside>
    </>
  );
}
