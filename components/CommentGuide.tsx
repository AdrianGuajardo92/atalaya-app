'use client';

import { useState, type KeyboardEvent } from 'react';
import { Paragraph, Question } from '@/types/atalaya';
import { buildBiblicalComments, buildQuestionComment } from '@/lib/commentGuidance';
import { copyToClipboard } from '@/lib/clipboard';

interface CommentGuideProps {
  question: Question;
  paragraphs?: Paragraph[];
  studyId?: string;
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

export default function CommentGuide({ question, paragraphs, studyId }: CommentGuideProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [flippedBiblicalCards, setFlippedBiblicalCards] = useState<Set<number>>(new Set());
  const questionComment = buildQuestionComment(question, studyId);
  const biblicalComments = buildBiblicalComments(question.biblicalCards, {
    questionText: question.textEs,
    paragraphs,
  });

  if (!questionComment && biblicalComments.length === 0) return null;

  const handleCopy = async (key: string, text: string) => {
    try {
      await copyToClipboard(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 1800);
    } catch (error) {
      console.error('Error al copiar comentario:', error);
    }
  };

  const toggleBiblicalCard = (index: number) => {
    setFlippedBiblicalCards((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const handleBiblicalCardKeyDown = (event: KeyboardEvent<HTMLDivElement>, index: number) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleBiblicalCard(index);
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
        {questionComment && (
          <div className="rounded-lg border border-border-subtle bg-surface p-4">
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted">
                Pregunta central
              </span>
              <CopyButton
                text={questionComment}
                copied={copiedKey === 'question'}
                onCopy={(text) => handleCopy('question', text)}
              />
            </div>
            <p className="text-base leading-relaxed text-text-body">
              {questionComment}
            </p>
          </div>
        )}

        {biblicalComments.length > 0 && (
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted">
              Cómo comentar textos bíblicos
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {biblicalComments.map((item, index) => {
                const key = `biblical-${index}`;
                const isFlipped = flippedBiblicalCards.has(index);
                return (
                  <div
                    key={`${item.reference}-${index}`}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isFlipped}
                    aria-label={`${item.reference}. ${isFlipped ? 'Mostrando el texto bíblico' : 'Mostrando el comentario'}`}
                    className="relative h-[280px] cursor-pointer outline-none group"
                    style={{ perspective: '1000px' }}
                    onClick={() => toggleBiblicalCard(index)}
                    onKeyDown={(event) => handleBiblicalCardKeyDown(event, index)}
                  >
                    <div
                      className="relative h-full w-full transition-transform duration-700 ease-in-out"
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                      }}
                    >
                      <div
                        className="absolute inset-0 flex flex-col overflow-hidden rounded-xl border border-border-subtle bg-surface shadow-sm transition-shadow group-hover:shadow-md"
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
                          <CopyButton
                            text={formatBiblicalCommentCopy(item)}
                            copied={copiedKey === key}
                            onCopy={(text) => handleCopy(key, text)}
                          />
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
                        className="absolute inset-0 flex flex-col overflow-hidden rounded-xl border border-border bg-surface-raised shadow-lg"
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
        )}
      </div>
    </div>
  );
}
