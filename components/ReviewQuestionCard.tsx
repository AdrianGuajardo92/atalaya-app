'use client';

import { useState, useEffect } from 'react';
import { ReviewQuestion } from '@/types/atalaya';

interface ReviewQuestionCardProps {
  reviewQuestion: ReviewQuestion;
  index: number;
  lsmText?: string;
  onLSMUpdate?: (index: number, text: string) => void;
  favorites?: Record<string, boolean>;
  onToggleFavorite?: (favoriteId: string) => void;
  allLsmData?: Record<string, string>;
  hiddenCards?: Record<string, boolean>;
  onToggleHidden?: (cardId: string) => void;
  isNavigationMode?: boolean; // Para saber si está en modo paginado o scroll
  articleId: string; // ID del artículo actual
}

export default function ReviewQuestionCard({
  reviewQuestion,
  index,
  lsmText,
  onLSMUpdate,
  isNavigationMode = false,
  articleId
}: ReviewQuestionCardProps) {
  const [isEditingLSM, setIsEditingLSM] = useState(false);
  const [editedLSM, setEditedLSM] = useState(lsmText || reviewQuestion.questionLSM || '');
  const [isSaving, setIsSaving] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true); // Expandido por defecto siempre

  // Estado para oraciones de respuesta completadas (comentadas en la reunión)
  const [completedSentences, setCompletedSentences] = useState<Record<string, boolean>>({});

  // Estado para notas personales
  const [personalNotes, setPersonalNotes] = useState<string[]>([]);
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [editingNoteIndex, setEditingNoteIndex] = useState<number | null>(null);
  const [currentNoteText, setCurrentNoteText] = useState('');
  const [confirmingDeleteNote, setConfirmingDeleteNote] = useState<number | null>(null);

  // Cargar estado de oraciones completadas desde localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`completed-sentences-${articleId}`);
      if (saved) {
        setCompletedSentences(JSON.parse(saved));
      }
    }
  }, [articleId]);

  // Guardar oraciones completadas en localStorage
  useEffect(() => {
    if (typeof window !== 'undefined' && Object.keys(completedSentences).length > 0) {
      localStorage.setItem(`completed-sentences-${articleId}`, JSON.stringify(completedSentences));
    }
  }, [completedSentences, articleId]);

  // Cargar notas personales desde localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`review-notes-${articleId}`);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          const notes = parsed[`review-${index}`];
          if (Array.isArray(notes)) {
            setPersonalNotes(notes);
          }
        } catch (e) {
          console.error('Error parsing review notes:', e);
        }
      }
    }
  }, [articleId, index]);

  // Guardar notas personales en localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`review-notes-${articleId}`);
      const allNotes = saved ? JSON.parse(saved) : {};
      allNotes[`review-${index}`] = personalNotes;
      localStorage.setItem(`review-notes-${articleId}`, JSON.stringify(allNotes));
    }
  }, [personalNotes, articleId, index]);

  // Función para dividir la respuesta en oraciones
  const splitAnswerIntoSentences = (answer: string): string[] => {
    if (!answer) return [];
    const sentences = answer
      .split(/(?<=[.!?])\s+/)
      .map(s => s.trim())
      .filter(s => s.length > 10);
    return sentences;
  };

  // Toggle para marcar oración como completada
  const toggleSentenceCompleted = (sentenceId: string) => {
    setCompletedSentences(prev => ({
      ...prev,
      [sentenceId]: !prev[sentenceId]
    }));
  };

  // Funciones para notas personales
  const handleAddNote = () => {
    if (currentNoteText.trim()) {
      setPersonalNotes(prev => [...prev, currentNoteText.trim()]);
      setCurrentNoteText('');
      setIsAddingNote(false);
    }
  };

  const handleStartEditNote = (idx: number) => {
    setEditingNoteIndex(idx);
    setCurrentNoteText(personalNotes[idx]);
  };

  const handleSaveEditedNote = () => {
    if (editingNoteIndex === null) return;
    if (currentNoteText.trim()) {
      setPersonalNotes(prev => {
        const newNotes = [...prev];
        newNotes[editingNoteIndex] = currentNoteText.trim();
        return newNotes;
      });
    }
    setEditingNoteIndex(null);
    setCurrentNoteText('');
  };

  const handleCancelNote = () => {
    setIsAddingNote(false);
    setEditingNoteIndex(null);
    setCurrentNoteText('');
    setConfirmingDeleteNote(null);
  };

  const handleDeleteNoteClick = (idx: number) => {
    if (confirmingDeleteNote === idx) {
      setPersonalNotes(prev => prev.filter((_, i) => i !== idx));
      setConfirmingDeleteNote(null);
    } else {
      setConfirmingDeleteNote(idx);
      setTimeout(() => {
        setConfirmingDeleteNote(prev => prev === idx ? null : prev);
      }, 3000);
    }
  };

  const handleNoteKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>, isEditing: boolean) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (isEditing) {
        handleSaveEditedNote();
      } else {
        handleAddNote();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancelNote();
    }
  };

  const handleSaveLSM = async () => {
    setIsSaving(true);
    try {
      const response = await fetch('/api/lsm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          articleId: articleId,
          questionNumber: `review-${index}`,
          lsmText: editedLSM
        })
      });

      if (response.ok) {
        setIsEditingLSM(false);
        if (onLSMUpdate) {
          onLSMUpdate(index, editedLSM);
        }
      } else {
        const responseData = await response.json();
        alert('Error al guardar: ' + (responseData.error || 'Error desconocido'));
      }
    } catch (error) {
      console.error('Error saving LSM:', error);
      alert('Error al guardar. Intenta de nuevo.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancelEdit = () => {
    setEditedLSM(lsmText || reviewQuestion.questionLSM || '');
    setIsEditingLSM(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSaveLSM();
    }
    // Si presiona Escape, cancelar
    else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancelEdit();
    }
  };

  // Guardar al perder foco (clic fuera)
  const handleBlurLSM = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (relatedTarget && (relatedTarget.tagName === 'BUTTON')) {
      return; // No guardar si se hizo clic en un botón
    }
    if (!isSaving) {
      handleSaveLSM();
    }
  };

  const currentLSMText = lsmText || reviewQuestion.questionLSM;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 border-l-2 border-violet-500">
      {/* Botón para expandir/colapsar (solo en modo scroll) */}
      {!isNavigationMode && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mb-4 flex items-center justify-between px-4 py-3 bg-violet-50 hover:bg-violet-100 rounded-lg transition-colors"
        >
          <span className="font-semibold text-violet-800">
            {isExpanded ? '▼ Ocultar contenido' : '▶ Mostrar contenido'}
          </span>
          <span className="text-sm text-violet-600">
            {isExpanded ? 'Colapsar' : 'Expandir'}
          </span>
        </button>
      )}

      {/* Contenedor unificado de pregunta de repaso */}
      <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-lg p-5 shadow-sm group relative">
        {/* Pregunta en español */}
        <div className="mb-3">
          <p className="text-sm text-violet-700 mb-1 font-medium">Pregunta de Repaso</p>
          <p className="text-xl font-semibold text-slate-800 leading-relaxed">
            {reviewQuestion.question}
          </p>
        </div>

        {/* Línea divisoria */}
        <div className="w-16 h-0.5 bg-violet-300 my-3"></div>

        {/* Pregunta en LSM - Modo visualización */}
        {!isEditingLSM && currentLSMText ? (
          <>
            <div>
              <p className="text-sm text-violet-700 mb-2 font-semibold">🤟 LSM</p>
              <p className="text-2xl font-bold text-slate-900 leading-relaxed uppercase">
                {currentLSMText.toUpperCase()}
              </p>
            </div>
            <button
              onClick={() => setIsEditingLSM(true)}
              className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 bg-violet-600 text-white text-sm rounded-lg hover:bg-violet-700 font-medium shadow-sm"
            >
              ✏️ Editar LSM
            </button>
          </>
        ) : !isEditingLSM ? (
          <button
            onClick={() => setIsEditingLSM(true)}
            className="w-full py-2 bg-violet-50 border-2 border-dashed border-violet-300 rounded-lg hover:bg-violet-100 transition-colors text-violet-600 font-medium text-sm"
          >
            ➕ Agregar pregunta en LSM
          </button>
        ) : null}
      </div>

      {/* Modo edición LSM - Fuera del contenedor unificado */}
      {isEditingLSM && (
        <div className="mt-3 p-4 bg-violet-50 rounded-lg border-2 border-violet-400 shadow-sm">
          <p className="text-sm text-violet-700 mb-2 font-semibold">✍️ Editar LSM (Enter: guardar | Esc: cancelar | Shift+Enter: nueva línea):</p>
          <textarea
            value={editedLSM}
            onChange={(e) => setEditedLSM(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleBlurLSM}
            className="w-full p-4 border-2 border-violet-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-violet-600 text-xl font-semibold text-slate-900 bg-white shadow-inner"
            rows={4}
            placeholder="Escribe la pregunta en LSM..."
            autoFocus
          />
          <div className="flex gap-2 mt-3">
            <button
              onClick={handleSaveLSM}
              disabled={isSaving}
              className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 disabled:bg-slate-400 transition-colors font-medium shadow-sm"
            >
              {isSaving ? 'Guardando...' : '💾 Guardar'}
            </button>
            <button
              onClick={handleCancelEdit}
              disabled={isSaving}
              className="px-4 py-2 bg-slate-300 text-slate-700 rounded-lg hover:bg-slate-400 transition-colors font-medium"
            >
              ✖️ Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Contenido expandible - solo se muestra si isExpanded es true */}
      {isExpanded && (
        <>
          {/* Respuesta en oraciones numeradas */}
          {reviewQuestion.answer && (
            <div className="mt-4 p-4 bg-emerald-50 rounded-lg border-l-2 border-emerald-500">
              <div className="text-xs font-semibold text-emerald-700 mb-3">💡 Respuesta</div>

              <div className="space-y-2">
                {splitAnswerIntoSentences(reviewQuestion.answer).map((sentence, idx) => {
                  const sentenceId = `review-${index}-sentence${idx}`;
                  const isCommented = completedSentences[sentenceId];

                  return (
                    <div
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSentenceCompleted(sentenceId);
                      }}
                      className={`
                        flex items-start gap-3 p-2 rounded-lg cursor-pointer transition-all
                        ${isCommented
                          ? 'bg-emerald-200/50 border border-emerald-300'
                          : 'bg-white/50 border border-emerald-100 hover:bg-emerald-100/50'
                        }
                      `}
                    >
                      <span className={`
                        flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5
                        ${isCommented
                          ? 'bg-emerald-500 text-white'
                          : 'bg-emerald-100 text-emerald-600'
                        }
                      `}>
                        {idx + 1}
                      </span>
                      <p className={`
                        text-sm leading-relaxed flex-1
                        ${isCommented
                          ? 'text-emerald-800'
                          : 'text-slate-700'
                        }
                      `}>
                        {sentence}
                      </p>
                      {isCommented && (
                        <span className="text-emerald-500 text-sm">✓</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Sección de notas personales */}
          <div className="mt-4 p-4 bg-amber-50 rounded-lg border-l-2 border-amber-400">
            <div className="text-xs font-semibold text-amber-700 mb-3">📝 Mis Notas</div>

            {/* Lista de notas existentes */}
            {personalNotes.length > 0 && (
              <div className="space-y-2 mb-3">
                {personalNotes.map((note, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-3 border border-amber-200 group/note">
                    {editingNoteIndex === idx ? (
                      <div>
                        <textarea
                          value={currentNoteText}
                          onChange={(e) => setCurrentNoteText(e.target.value)}
                          onKeyDown={(e) => handleNoteKeyDown(e, true)}
                          className="w-full p-2 border border-amber-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500 text-sm text-slate-800"
                          rows={2}
                          autoFocus
                        />
                        <div className="flex gap-1 mt-2">
                          <button
                            onClick={handleSaveEditedNote}
                            className="px-2 py-1 bg-amber-500 text-white text-xs rounded hover:bg-amber-600"
                          >
                            💾
                          </button>
                          <button
                            onClick={handleCancelNote}
                            className="px-2 py-1 bg-slate-300 text-slate-700 text-xs rounded hover:bg-slate-400"
                          >
                            ✖️
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start justify-between">
                        <p className="text-sm text-slate-700 flex-1">{note}</p>
                        <div className="flex gap-1 opacity-0 group-hover/note:opacity-100 transition-opacity ml-2">
                          <button
                            onClick={() => handleStartEditNote(idx)}
                            className="p-1 text-amber-600 hover:bg-amber-100 rounded"
                            title="Editar"
                          >
                            ✏️
                          </button>
                          <button
                            onClick={() => handleDeleteNoteClick(idx)}
                            className={`p-1 rounded transition-all ${
                              confirmingDeleteNote === idx
                                ? 'bg-red-500 text-white animate-pulse'
                                : 'text-red-500 hover:bg-red-100'
                            }`}
                            title={confirmingDeleteNote === idx ? '¿Borrar?' : 'Eliminar'}
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Agregar nueva nota */}
            {isAddingNote ? (
              <div>
                <textarea
                  value={currentNoteText}
                  onChange={(e) => setCurrentNoteText(e.target.value)}
                  onKeyDown={(e) => handleNoteKeyDown(e, false)}
                  className="w-full p-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 text-sm text-slate-800"
                  rows={2}
                  placeholder="Escribe tu nota..."
                  autoFocus
                />
                <div className="flex gap-1 mt-2">
                  <button
                    onClick={handleAddNote}
                    className="px-3 py-1 bg-amber-500 text-white text-xs rounded hover:bg-amber-600"
                  >
                    💾 Guardar
                  </button>
                  <button
                    onClick={handleCancelNote}
                    className="px-3 py-1 bg-slate-300 text-slate-700 text-xs rounded hover:bg-slate-400"
                  >
                    ✖️ Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setIsAddingNote(true)}
                className="w-full py-2 bg-amber-100 border-2 border-dashed border-amber-300 rounded-lg hover:bg-amber-200 transition-colors text-amber-700 font-medium text-sm"
              >
                ➕ Agregar nota
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
