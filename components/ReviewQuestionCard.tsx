'use client';

import { useState } from 'react';
import { ReviewQuestion } from '@/types/atalaya';
import { isExecutiveDesign } from '@/data/design-config';
import FlashCards from './FlashCards';
import BiblicalCards from './BiblicalCards';

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
  favorites = {},
  onToggleFavorite = () => { },
  allLsmData = {},
  hiddenCards = {},
  onToggleHidden = () => { },
  isNavigationMode = false,
  articleId
}: ReviewQuestionCardProps) {
  const [isEditingLSM, setIsEditingLSM] = useState(false);
  const [editedLSM, setEditedLSM] = useState(lsmText || reviewQuestion.questionLSM || '');
  const [isSaving, setIsSaving] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true); // Expandido por defecto siempre

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

  // Detectar si aplica diseño ejecutivo (usando configuración centralizada)
  const articleNum = parseInt(articleId.split('-').pop() || '0');
  const isArticle43 = isExecutiveDesign(articleNum);

  // ═══════════════════════════════════════════════════════════════════════════
  // DISEÑO EJECUTIVO (Artículo 43 en adelante)
  // ═══════════════════════════════════════════════════════════════════════════
  if (isArticle43) {
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
                                <span className="text-slate-400 font-medium">[{idx + 1}]</span> {paragraph}
                              </p>
                            ))
                          : <p className="text-lg text-slate-700 leading-relaxed">{reviewQuestion.answer}</p>
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

  // ═══════════════════════════════════════════════════════════════════════════
  // DISEÑO NORMAL (Otros artículos)
  // ═══════════════════════════════════════════════════════════════════════════
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
          {/* Respuesta */}
          {reviewQuestion.answer && (
            <div className="mt-4 p-4 bg-emerald-50 rounded-lg border-l-2 border-emerald-500">
              <p className="text-sm font-semibold text-emerald-700 mb-2">💡 Respuesta:</p>
              {Array.isArray(reviewQuestion.answer) ? (
                <div className="space-y-2">
                  {reviewQuestion.answer.map((sentence, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 bg-white rounded-lg border border-emerald-100"
                    >
                      <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {i + 1}
                      </span>
                      <p className="text-slate-800 leading-relaxed">{sentence}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-800 leading-relaxed">{reviewQuestion.answer}</p>
              )}
            </div>
          )}

          {/* Puntos clave como tarjetas pequeñas */}
          {reviewQuestion.answerBullets && (
            <div className="mt-4 p-4 bg-emerald-50 rounded-lg border-l-2 border-emerald-500">
              <div className="border-t border-emerald-200 pt-3">
                <div className="text-xs font-semibold text-emerald-700 mb-3">🔑 Puntos Clave</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {(Array.isArray(reviewQuestion.answerBullets)
                    ? reviewQuestion.answerBullets
                    : reviewQuestion.answerBullets.split('\n').filter(b => b.trim())
                  ).map((bullet, idx) => {
                    // Limpiar línea vacía
                    if (!bullet.trim()) return null;

                    return (
                      <div
                        key={idx}
                        className="border rounded-lg p-3 transition-all bg-emerald-50 border-emerald-200 hover:bg-emerald-100"
                      >
                        <div className="flex items-start gap-2">
                          <span className="text-emerald-600 text-xs flex-shrink-0 mt-0.5 font-bold">●</span>
                          <p className="text-xs text-slate-800 leading-relaxed font-semibold">
                            {bullet.split(/(\*\*.*?\*\*)/g).map((part, partIdx) => {
                              if (part.startsWith('**') && part.endsWith('**')) {
                                return (
                                  <strong key={partIdx} className="font-bold text-slate-900 block mb-1">
                                    {part.slice(2, -2)}
                                  </strong>
                                );
                              }
                              // Quitar el bullet point si existe al principio
                              const cleanedPart = part.replace(/^[•·]\s*/, '');
                              return <span key={partIdx}>{cleanedPart}</span>;
                            })}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Tarjetas didácticas */}
          {reviewQuestion.flashcards && reviewQuestion.flashcards.length > 0 && (
            <FlashCards
              cards={
                typeof reviewQuestion.flashcards[0] === 'string'
                  ? (reviewQuestion.flashcards as string[]).map((q) => ({ question: q, answer: '' }))
                  : reviewQuestion.flashcards as Array<{ question: string; answer: string; questionLSM?: string; answerLSM?: string }>
              }
              questionNumber={`review-${index}`}
              lsmData={allLsmData}
              onLSMUpdate={(key, text) => {
                // Guardar directamente en la API
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
          )}

          {/* Textos bíblicos */}
          {reviewQuestion.biblicalCards && reviewQuestion.biblicalCards.length > 0 && (
            <BiblicalCards
              cards={reviewQuestion.biblicalCards}
              questionNumber={`review-${index}`}
              hiddenCards={hiddenCards}
              onToggleHidden={onToggleHidden}
            />
          )}
        </>
      )}
    </div>
  );
}
