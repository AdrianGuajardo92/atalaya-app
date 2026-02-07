'use client';

import { useState } from 'react';
import { ReviewQuestion } from '@/types/atalaya';
import FlashCards from './FlashCards';
import BiblicalCards from './BiblicalCards';

interface ReviewQuestionCardProps {
  reviewQuestion: ReviewQuestion;
  index: number;
  lsmText?: string;
  onLSMUpdate?: (index: number, text: string) => void;
  allLsmData?: Record<string, string>;
  hiddenCards?: Record<string, boolean>;
  onToggleHidden?: (cardId: string) => void;
  articleId: string;
}

export default function ReviewQuestionCard({
  reviewQuestion,
  index,
  lsmText,
  onLSMUpdate,
  allLsmData = {},
  hiddenCards = {},
  onToggleHidden = () => { },
  articleId
}: ReviewQuestionCardProps) {
  const [isEditingLSM, setIsEditingLSM] = useState(false);
  const [editedLSM, setEditedLSM] = useState(lsmText || reviewQuestion.questionLSM || '');
  const [isSaving, setIsSaving] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true); // Expandido por defecto siempre

  // Función para renderizar **negrita** en texto
  const renderBoldText = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
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
      <div className="mb-8">
        <div className="bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden relative group hover:shadow-xl transition-shadow duration-300">

          {/* Barra lateral decorativa */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-300 to-slate-400"></div>

          {/* Cabecera de la Pregunta */}
          <div className="p-8 pb-4">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase">
                Pregunta de Repaso {index + 1}
              </span>
            </div>

            {/* Texto de la Pregunta */}
            <h2 className="text-2xl md:text-3xl font-serif text-slate-800 leading-tight mb-2">
              {reviewQuestion.question}
            </h2>

            {/* Imagen ilustrativa */}
            {reviewQuestion.image && (
              <div className="mt-4 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                <img
                  src={reviewQuestion.image}
                  alt={reviewQuestion.imageCaption || 'Imagen ilustrativa'}
                  className="w-full h-auto"
                />
                {reviewQuestion.imageCaption && (
                  <p className="text-xs text-slate-500 italic px-3 py-2 bg-slate-50 border-t border-slate-100">
                    {reviewQuestion.imageCaption}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Sección Intermedia: LSM y Herramientas */}
          <div className="px-8 py-4 bg-slate-50 border-y border-slate-100 flex flex-wrap items-center gap-4">

            {/* Área LSM */}
            <div className="flex-1 min-w-[200px]">
              {isEditingLSM ? (
                <div className="bg-white p-2 rounded-lg border border-blue-200 shadow-sm animate-fadeIn">
                  <textarea
                    value={editedLSM}
                    onChange={(e) => setEditedLSM(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onBlur={handleBlurLSM}
                    className="w-full p-2 text-slate-700 border-none focus:ring-0 text-sm resize-none"
                    rows={2}
                    placeholder="Escribe la traducción LSM..."
                    autoFocus
                  />
                  <div className="flex justify-end gap-2 mt-2">
                    <button onMouseDown={handleSaveLSM} className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                      {isSaving ? 'Guardando...' : 'Guardar'}
                    </button>
                    <button onMouseDown={handleCancelEdit} className="text-xs text-slate-500 px-2 py-1">Cancelar</button>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => setIsEditingLSM(true)}
                  className="group/lsm cursor-pointer p-3 rounded-lg border border-transparent hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">🤟</span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider group-hover/lsm:text-blue-600">LSM</span>
                  </div>
                  <p className="text-slate-700 font-medium text-lg leading-snug min-h-[1.5rem] uppercase">
                    {currentLSMText || <span className="text-slate-400 italic font-normal text-sm">Agregar traducción...</span>}
                  </p>
                </div>
              )}
            </div>

            {/* Botón de Acción */}
            <div className="flex gap-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all shadow-sm border ${isExpanded
                  ? 'bg-white border-slate-300 text-slate-700'
                  : 'bg-slate-800 border-slate-800 text-white hover:bg-slate-900'
                }`}
              >
                {isExpanded ? 'Ocultar Respuesta' : 'Ver Respuesta'}
              </button>
            </div>
          </div>

          {/* Contenido Expandible (Respuesta y Tarjetas) */}
          {isExpanded && (
            <div className="animate-slideDown">

              {/* Sección de Respuesta */}
              {reviewQuestion.answer && (
                <div className="p-8 bg-white">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-lg shadow-sm border border-amber-200">
                        💡
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="prose prose-slate max-w-none">
                        {Array.isArray(reviewQuestion.answer)
                          ? reviewQuestion.answer.map((paragraph, idx) => (
                              <p key={idx} className="text-lg text-slate-700 leading-relaxed mb-4">
                                <span className="text-slate-400 font-medium">[{idx + 1}]</span> {renderBoldText(paragraph)}
                              </p>
                            ))
                          : <p className="text-lg text-slate-700 leading-relaxed">{renderBoldText(String(reviewQuestion.answer))}</p>
                        }
                      </div>

                      {/* Puntos Clave */}
                      {reviewQuestion.answerBullets && (
                        <div className="mt-6 space-y-3">
                          {(Array.isArray(reviewQuestion.answerBullets)
                            ? reviewQuestion.answerBullets
                            : reviewQuestion.answerBullets.split('\n').filter(b => b.trim())
                          ).map((bullet, idx) => {
                            if (!bullet.trim()) return null;
                            return (
                              <div key={idx} className="flex gap-3 group/bullet">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 group-hover/bullet:bg-blue-500 transition-colors"></div>
                                <p className="text-slate-600 group-hover/bullet:text-slate-800 transition-colors">{bullet}</p>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Línea divisoria elegante */}
              <div className="px-8 py-4 bg-white">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-300/50" />
                  <span className="text-amber-400 text-sm">✦</span>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-300/50" />
                </div>
              </div>

              {/* Grid de Tarjetas */}
              {(reviewQuestion.flashcards || reviewQuestion.biblicalCards) && (
                <div className="bg-slate-50 p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Tarjetas Didácticas */}
                    {reviewQuestion.flashcards && reviewQuestion.flashcards.length > 0 && (
                      <div className="space-y-4">
                        <FlashCards
                          cards={
                            typeof reviewQuestion.flashcards[0] === 'string'
                              ? (reviewQuestion.flashcards as string[]).map((q) => ({ question: q, answer: '' }))
                              : reviewQuestion.flashcards as Array<{ question: string; answer: string; questionLSM?: string; answerLSM?: string }>
                          }
                          questionNumber={`review-${index}`}
                          lsmData={allLsmData}
                          onLSMUpdate={(key, text) => {
                            fetch('/api/lsm', {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({ articleId: articleId, questionNumber: key, lsmText: text })
                            });
                          }}
                          hiddenCards={hiddenCards}
                          onToggleHidden={onToggleHidden}
                          articleId={articleId}
                        />
                      </div>
                    )}

                    {/* Textos Bíblicos */}
                    {reviewQuestion.biblicalCards && reviewQuestion.biblicalCards.length > 0 && (
                      <div className="space-y-4">
                        <BiblicalCards
                          cards={reviewQuestion.biblicalCards}
                          questionNumber={`review-${index}`}
                          hiddenCards={hiddenCards}
                          onToggleHidden={onToggleHidden}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
}
