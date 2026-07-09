'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { focusTextareaAtEnd } from '@/lib/lsmEdit';

interface PersonalAnswersListProps {
  answers: string[];
  startNumber: number;
  itemIdPrefix: string;
  usedItems?: Record<string, boolean>;
  onToggleUsed?: (itemId: string) => void;
  onChange: (answers: string[]) => void;
  onPersist: (answers: string[]) => Promise<void>;
  renderBoldText: (text: string) => ReactNode;
}

function usedItemClass(isUsed: boolean): string {
  return isUsed
    ? 'outline outline-2 outline-emerald-400/70 dark:outline-emerald-600/60 bg-emerald-50/50 dark:bg-emerald-900/15'
    : 'hover:bg-amber-50/60 dark:hover:bg-amber-950/30';
}

function UsedBadge() {
  return (
    <span className="text-xl select-none leading-none">✅</span>
  );
}

function HoverHint() {
  return (
    <span className="text-xl select-none leading-none opacity-30 group-hover/personal:opacity-60 transition-opacity">⬜</span>
  );
}

function PersonalBadge() {
  return (
    <span className="inline-flex items-center rounded-md border border-amber-300/80 dark:border-amber-700/60 bg-amber-100/80 dark:bg-amber-950/40 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-amber-700 dark:text-amber-400">
      Personal
    </span>
  );
}

function renderPersonalAnswerContent(
  answer: string,
  renderBoldText: (text: string) => ReactNode,
): ReactNode {
  const trimmed = answer.trim();
  if (!trimmed) return null;

  const lines = trimmed.split('\n').map((line) => line.trim()).filter(Boolean);

  if (lines.length <= 1) {
    return (
      <p className="text-lg text-text-body leading-relaxed m-0">
        {renderBoldText(lines[0] ?? trimmed)}
      </p>
    );
  }

  return (
    <div className="space-y-1.5">
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="flex gap-2 items-start">
          <span className="text-sm text-amber-600/70 dark:text-amber-500/70 font-medium flex-shrink-0 pt-0.5 tabular-nums">
            {lineIndex + 1}.
          </span>
          <p className="text-lg text-text-body leading-relaxed m-0 flex-1 min-w-0">
            {renderBoldText(line)}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function PersonalAnswersList({
  answers,
  startNumber,
  itemIdPrefix,
  usedItems,
  onToggleUsed,
  onChange,
  onPersist,
  renderBoldText,
}: PersonalAnswersListProps) {
  const enableMarking = Boolean(itemIdPrefix && usedItems && onToggleUsed);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [draft, setDraft] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const pendingFocusIndex = useRef<number | null>(null);

  useEffect(() => {
    if (editingIndex !== null && textareaRef.current) {
      focusTextareaAtEnd(textareaRef.current);
    }
  }, [editingIndex]);

  useEffect(() => {
    if (pendingFocusIndex.current !== null) {
      const idx = pendingFocusIndex.current;
      pendingFocusIndex.current = null;
      setEditingIndex(idx);
      setDraft(answers[idx] ?? '');
    }
  }, [answers]);

  const persistAnswers = async (nextAnswers: string[]) => {
    const trimmed = nextAnswers.map((a) => a.trim()).filter(Boolean);
    onChange(trimmed);
    setIsSaving(true);
    try {
      await onPersist(trimmed);
    } finally {
      setIsSaving(false);
    }
  };

  const startEditing = (index: number) => {
    setEditingIndex(index);
    setDraft(answers[index] ?? '');
  };

  const cancelEditing = () => {
    setEditingIndex(null);
    setDraft('');
  };

  const commitEditing = async (index: number) => {
    const trimmed = draft.trim();
    if (!trimmed) {
      const next = answers.filter((_, i) => i !== index);
      cancelEditing();
      await persistAnswers(next);
      return;
    }

    const next = answers.map((answer, i) => (i === index ? trimmed : answer));
    cancelEditing();
    await persistAnswers(next);
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>, index: number) => {
    const relatedTarget = e.relatedTarget as HTMLElement | null;
    if (relatedTarget?.tagName === 'BUTTON') {
      return;
    }
    if (isSaving) {
      return;
    }
    void commitEditing(index);
  };

  const handleAdd = () => {
    const next = [...answers, ''];
    pendingFocusIndex.current = next.length - 1;
    onChange(next);
  };

  const handleDelete = async (index: number) => {
    if (editingIndex === index) cancelEditing();
    const next = answers.filter((_, i) => i !== index);
    await persistAnswers(next);
  };

  const handleToggle = (itemId: string) => {
    onToggleUsed?.(itemId);
  };

  return (
    <div className="space-y-3">
      {answers.length > 0 && (
        <div className="space-y-2">
          {answers.map((answer, index) => {
            const itemId = `${itemIdPrefix}-${index}`;
            const isUsed = enableMarking ? Boolean(usedItems?.[itemId]) : false;
            const label = String(startNumber + index + 1);
            const isEditing = editingIndex === index;

            return (
              <div
                key={`personal-${index}`}
                className={`group/personal relative rounded-lg border border-dashed border-amber-300/70 dark:border-amber-700/50 bg-amber-50/30 dark:bg-amber-950/15 pl-9 pr-10 py-2 transition-all ${enableMarking ? usedItemClass(isUsed) : ''}`}
              >
                {enableMarking && (
                  <button
                    type="button"
                    className="absolute top-1/2 -translate-y-1/2 left-1.5 p-0.5"
                    onClick={() => handleToggle(itemId)}
                    aria-label={isUsed ? 'Marcar como no usada' : 'Marcar como usada'}
                  >
                    {isUsed ? <UsedBadge /> : <HoverHint />}
                  </button>
                )}

                <button
                  type="button"
                  className="absolute top-2 right-2 p-1 rounded-md text-text-tertiary hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 opacity-0 group-hover/personal:opacity-100 focus:opacity-100 transition-all"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => void handleDelete(index)}
                  aria-label="Eliminar respuesta personal"
                  title="Eliminar"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>

                <div className="grid grid-cols-[auto_1fr] items-start gap-x-2">
                  <span className="text-lg text-amber-600/80 dark:text-amber-500/80 font-medium pt-0.5">[{label}]</span>
                  <div className="min-w-0">
                    {isEditing ? (
                      <textarea
                        ref={textareaRef}
                        value={draft}
                        onChange={(e) => setDraft(e.target.value)}
                        onBlur={(e) => handleBlur(e, index)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            void commitEditing(index);
                          } else if (e.key === 'Escape') {
                            e.preventDefault();
                            if (!answer.trim()) {
                              void handleDelete(index);
                            } else {
                              cancelEditing();
                            }
                          }
                        }}
                        rows={Math.max(2, draft.split('\n').length + 1)}
                        placeholder="Escribe tu nota o glosa LSM..."
                        className="w-full resize-none rounded-lg border border-amber-300/80 dark:border-amber-700/60 bg-surface px-3 py-2 text-lg text-text-body leading-relaxed focus:outline-none focus:ring-2 focus:ring-amber-400/50 dark:focus:ring-amber-600/40"
                      />
                    ) : (
                      <div
                        onClick={() => startEditing(index)}
                        className="w-full cursor-text text-left"
                      >
                        {answer.trim() ? (
                          renderPersonalAnswerContent(answer, renderBoldText)
                        ) : (
                          <p className="text-lg text-text-muted italic leading-relaxed m-0">
                            Toca para escribir...
                          </p>
                        )}
                      </div>
                    )}
                    <div className="mt-1.5 flex items-center gap-2">
                      <PersonalBadge />
                      <span className="text-[10px] text-text-tertiary uppercase tracking-wider">✏️ Nota tuya</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <button
        type="button"
        onClick={handleAdd}
        disabled={isSaving}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 transition-colors disabled:opacity-50"
      >
        <span className="text-base">+</span>
        Agregar respuesta personal
        {isSaving && <span className="text-xs text-text-tertiary">(guardando…)</span>}
      </button>
    </div>
  );
}
