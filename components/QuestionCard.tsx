'use client';

import { useState, useEffect } from 'react';
import { Question, Paragraph } from '@/types/atalaya';
import FlashCards from './FlashCards';
import BiblicalCards from './BiblicalCards';

interface QuestionCardProps {
  question: Question;
  paragraphs: Paragraph[];
  lsmText?: string;
  sectionLsmText?: string;
  onLSMUpdate?: (questionNumber: string, text: string) => void;
  isNavigationMode?: boolean; // Nueva prop para saber si estamos en modo navegación
  favorites: Record<string, boolean>; // Estado de favoritos
  onToggleFavorite: (favoriteId: string) => void; // Callback para marcar/desmarcar favorito
  allLsmData: Record<string, string>; // Todos los datos LSM (incluye flashcards)
  hiddenCards: Record<string, boolean>; // Tarjetas ocultas
  onToggleHidden: (cardId: string) => void; // Callback para ocultar/mostrar tarjeta
}

export default function QuestionCard({ question, paragraphs, lsmText, sectionLsmText, onLSMUpdate, isNavigationMode = false, favorites, onToggleFavorite, allLsmData, hiddenCards, onToggleHidden }: QuestionCardProps) {
  const [showParagraphsModal, setShowParagraphsModal] = useState(false);
  const [isExpanded, setIsExpanded] = useState(isNavigationMode); // Expandido por defecto en modo navegación
  const [showFlashcards, setShowFlashcards] = useState(isNavigationMode); // Flashcards visibles en navegación
  const [isEditingLSM, setIsEditingLSM] = useState(false);
  const [editedLSM, setEditedLSM] = useState(lsmText || question.textLSM || '');
  const [isEditingSectionLSM, setIsEditingSectionLSM] = useState(false);
  const [editedSectionLSM, setEditedSectionLSM] = useState(sectionLsmText || question.sectionLSM || '');
  const [isSaving, setIsSaving] = useState(false);
  const [isSavingSection, setIsSavingSection] = useState(false);

  // Sincronizar estados cuando cambia la pregunta o el modo de navegación
  useEffect(() => {
    setEditedLSM(lsmText || question.textLSM || '');
    setEditedSectionLSM(sectionLsmText || question.sectionLSM || '');
    setIsExpanded(isNavigationMode);
    setShowFlashcards(isNavigationMode);
  }, [question.number, lsmText, sectionLsmText, isNavigationMode, question.textLSM, question.sectionLSM]);

  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showParagraphsModal) {
        setShowParagraphsModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showParagraphsModal]);

  // Obtener los párrafos relacionados con esta pregunta
  const relatedParagraphs = paragraphs.filter(p =>
    question.paragraphs.includes(p.number)
  );

  // Función para formatear el contenido con textos bíblicos
  const formatContent = (text: string) => {
    // Buscar patrones de referencias bíblicas entre paréntesis
    const parts = text.split(/(\([^)]+\))/g);

    return parts.map((part, index) => {
      // Si es una referencia bíblica (está entre paréntesis)
      if (part.startsWith('(') && part.endsWith(')')) {
        return (
          <span key={index} className="text-slate-700 font-medium">
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  // Función para formatear texto LSM con líneas divisorias
  const formatLSMText = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim() !== '');

    return lines.map((line, index) => (
      <div key={index}>
        <p className="text-lg font-semibold text-slate-900 leading-relaxed uppercase mb-0">
          {line}
        </p>
        {index < lines.length - 1 && (
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent my-3"></div>
        )}
      </div>
    ));
  };

  // Función para formatear texto LSM de secciones con líneas divisorias
  const formatSectionLSMText = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim() !== '');

    return lines.map((line, index) => (
      <div key={index}>
        <h3 className="text-xl font-bold tracking-wide uppercase mb-0">
          {line}
        </h3>
        {index < lines.length - 1 && (
          <div className="w-24 h-px bg-white/40 mx-auto my-2"></div>
        )}
      </div>
    ));
  };

  const handleSaveLSM = async () => {
    setIsSaving(true);
    try {
      const response = await fetch('/api/lsm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionNumber: question.number,
          lsmText: editedLSM
        })
      });

      if (response.ok) {
        setIsEditingLSM(false);
        if (onLSMUpdate) {
          onLSMUpdate(question.number, editedLSM);
        }
      }
    } catch (error) {
      console.error('Error saving LSM:', error);
      alert('Error al guardar. Intenta de nuevo.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancelEdit = () => {
    setEditedLSM(lsmText || question.textLSM || '');
    setIsEditingLSM(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Si presiona Enter sin Shift, guardar
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Evitar salto de línea
      handleSaveLSM();
    }
    // Si presiona Escape, cancelar
    else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancelEdit();
    }
    // Shift+Enter permite salto de línea normal
  };

  const handleSaveSectionLSM = async () => {
    setIsSavingSection(true);
    try {
      const response = await fetch('/api/lsm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionNumber: `section-${question.number}`,
          lsmText: editedSectionLSM
        })
      });

      if (response.ok) {
        setIsEditingSectionLSM(false);
        if (onLSMUpdate) {
          onLSMUpdate(`section-${question.number}`, editedSectionLSM);
        }
      }
    } catch (error) {
      console.error('Error saving section LSM:', error);
      alert('Error al guardar. Intenta de nuevo.');
    } finally {
      setIsSavingSection(false);
    }
  };

  const handleCancelSectionEdit = () => {
    setEditedSectionLSM(sectionLsmText || question.sectionLSM || '');
    setIsEditingSectionLSM(false);
  };

  const handleSectionKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSaveSectionLSM();
    }
    // Si presiona Escape, cancelar
    else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancelSectionEdit();
    }
  };

  const currentLSMText = lsmText || question.textLSM;
  const currentSectionLSMText = sectionLsmText || question.sectionLSM;

  return (
    <>
      {/* Subtítulo de sección (si existe) */}
      {question.section && (
        <div className="mb-6 mt-8">
          <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white px-6 py-6 rounded-lg shadow-lg group relative">
            {/* Subtítulo en español */}
            <h2 className="text-2xl font-bold text-center uppercase tracking-wide mb-4">
              {question.section}
            </h2>

            {/* Línea divisoria decorativa */}
            <div className="w-20 h-1 bg-white/30 mx-auto mb-4"></div>

            {/* Subtítulo en LSM - Modo visualización */}
            {!isEditingSectionLSM && currentSectionLSMText ? (
              <>
                <div className="text-center">
                  <p className="text-sm mb-3 font-semibold opacity-80">🤟 LSM</p>
                  <div>
                    {formatSectionLSMText(currentSectionLSMText)}
                  </div>
                </div>
                <button
                  onClick={() => setIsEditingSectionLSM(true)}
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 bg-white text-slate-700 text-sm rounded-lg hover:bg-slate-50 font-medium shadow-sm"
                >
                  ✏️ Editar LSM
                </button>
              </>
            ) : !isEditingSectionLSM ? (
              <button
                onClick={() => setIsEditingSectionLSM(true)}
                className="w-full py-2 bg-white/10 border-2 border-dashed border-white/30 rounded-lg hover:bg-white/20 transition-colors text-white font-semibold text-sm"
              >
                ➕ Agregar subtítulo en LSM
              </button>
            ) : null}
          </div>

          {/* Modo edición LSM - Fuera del banner principal */}
          {isEditingSectionLSM && (
            <div className="mt-3 p-4 bg-indigo-50 rounded-lg border-2 border-indigo-400 shadow-sm">
              <p className="text-sm text-indigo-700 mb-2 font-semibold">✍️ Editar Subtítulo LSM (Enter: guardar | Esc: cancelar | Shift+Enter: nueva línea):</p>
              <textarea
                value={editedSectionLSM}
                onChange={(e) => setEditedSectionLSM(e.target.value)}
                onKeyDown={handleSectionKeyDown}
                className="w-full p-4 border-2 border-indigo-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-xl font-semibold text-slate-900 bg-white shadow-inner"
                rows={3}
                placeholder="Escribe el subtítulo en LSM..."
                autoFocus
              />
              <div className="flex gap-2 mt-3">
                <button
                  onClick={handleSaveSectionLSM}
                  disabled={isSavingSection}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-slate-400 transition-colors font-medium shadow-sm"
                >
                  {isSavingSection ? 'Guardando...' : '💾 Guardar'}
                </button>
                <button
                  onClick={handleCancelSectionEdit}
                  disabled={isSavingSection}
                  className="px-4 py-2 bg-slate-300 text-slate-700 rounded-lg hover:bg-slate-400 transition-colors font-medium"
                >
                  ✖️ Cancelar
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* OPCIÓN 2: Tarjetas Compactas */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-4">
        {/* Número flotante */}
        <div
          className={`flex items-start gap-4 p-6 ${!isNavigationMode ? 'cursor-pointer' : ''}`}
          onClick={() => {
            if (!isNavigationMode) {
              setIsExpanded(!isExpanded);
            }
          }}
        >
          <div className="flex-shrink-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowParagraphsModal(true);
              }}
              className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center shadow-md hover:from-slate-700 hover:to-slate-800 transition-all cursor-pointer"
              title="Ver párrafos"
            >
              <span className="text-white font-semibold text-lg">{question.number}</span>
            </button>
          </div>

          {/* Contenido lado a lado */}
          <div className="flex-1 space-y-4">
            {/* Español - SIEMPRE VISIBLE */}
            <div className="bg-slate-50 rounded-lg p-4 border-l-2 border-slate-300 group relative">
              <div className="text-xs font-medium text-slate-500 mb-1.5">Español</div>
              <p className="text-base text-slate-800 leading-relaxed">
                {question.textEs}
              </p>
            </div>

            {/* LSM - SIEMPRE VISIBLE */}
            <div className="bg-indigo-50 rounded-lg p-4 border-l-2 border-indigo-400 group relative">
              {!isEditingLSM && currentLSMText ? (
                <>
                  <div className="text-xs font-semibold text-indigo-700 mb-3">🤟 LSM</div>
                  <div>
                    {formatLSMText(currentLSMText)}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsEditingLSM(true);
                    }}
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 font-medium shadow-sm"
                  >
                    ✏️ Editar
                  </button>
                </>
              ) : !isEditingLSM ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsEditingLSM(true);
                  }}
                  className="w-full py-2 bg-indigo-50 border-2 border-dashed border-indigo-300 rounded-lg hover:bg-indigo-100 transition-colors text-indigo-600 font-medium text-sm"
                >
                  ➕ Agregar pregunta en LSM
                </button>
              ) : null}
            </div>

            {/* Modo edición LSM */}
            {isEditingLSM && (
              <div className="p-4 bg-indigo-50 rounded-lg border-2 border-indigo-400 shadow-sm" onClick={(e) => e.stopPropagation()}>
                <p className="text-sm text-indigo-700 mb-2 font-semibold">✍️ Editar LSM (Enter: guardar | Esc: cancelar | Shift+Enter: nueva línea):</p>
                <textarea
                  value={editedLSM}
                  onChange={(e) => setEditedLSM(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full p-4 border-2 border-indigo-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-xl font-semibold text-slate-900 bg-white shadow-inner"
                  rows={4}
                  placeholder="Escribe la pregunta en LSM..."
                  autoFocus
                />
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={handleSaveLSM}
                    disabled={isSaving}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-slate-400 transition-colors font-medium shadow-sm"
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

            {/* IMAGEN ILUSTRATIVA - Si existe */}
            {question.image && (
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={question.image}
                  alt="Ilustración de la pregunta"
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* IMÁGENES DE LOS PÁRRAFOS RELACIONADOS */}
            {relatedParagraphs.filter(p => p.image).length > 0 && (
              <div className="space-y-4">
                {relatedParagraphs
                  .filter(p => p.image)
                  .map((paragraph) => (
                    <div key={paragraph.number} className="rounded-lg overflow-hidden shadow-md bg-slate-50 p-4">
                      <img
                        src={paragraph.image}
                        alt={paragraph.imageCaption || `Imagen del párrafo ${paragraph.number}`}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                      {paragraph.imageCaption && (
                        <p className="text-sm text-slate-600 italic mt-3 text-center">
                          {paragraph.imageCaption}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
            )}

            {/* RESPUESTA - Colapsable solo en modo scroll */}
            {!isNavigationMode && (
              <div
                className="cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <div className="text-sm text-slate-600 flex items-center gap-2 mb-2">
                  <span>{isExpanded ? '▼' : '▶'}</span>
                  <span className="font-medium">
                    {isExpanded ? 'Ocultar respuesta' : 'Ver respuesta'}
                  </span>
                </div>
              </div>
            )}

            {/* Contenido de la respuesta */}
            {(isExpanded || isNavigationMode) && (question.answer || question.answerBullets) && (
              <div className="bg-emerald-50 rounded-lg p-4 border-l-2 border-emerald-500">
                <div className="text-xs font-semibold text-emerald-700 mb-3">💡 Respuesta</div>

                {/* Respuesta en lenguaje sencillo */}
                {question.answer && (
                  <p className="text-base text-slate-800 leading-relaxed mb-4">
                    {question.answer}
                  </p>
                )}

                {/* Puntos clave en bullets */}
                {question.answerBullets && (
                  <>
                    <div className="border-t border-emerald-200 pt-3 mt-3">
                      <div className="text-xs font-semibold text-emerald-700 mb-2">🔑 Puntos Clave</div>
                      <div className="text-sm text-slate-800 leading-relaxed whitespace-pre-line">
                        {question.answerBullets.split('\n').map((line, idx) => {
                          // Detectar líneas con negrita (entre **)
                          if (line.includes('**')) {
                            const parts = line.split(/(\*\*.*?\*\*)/g);
                            return (
                              <div key={idx} className="mb-2 font-semibold text-slate-900">
                                {parts.map((part, partIdx) => {
                                  if (part.startsWith('**') && part.endsWith('**')) {
                                    return (
                                      <span key={partIdx}>
                                        {part.slice(2, -2)}
                                      </span>
                                    );
                                  }
                                  return <span key={partIdx}>{part}</span>;
                                })}
                              </div>
                            );
                          }
                          // Líneas normales con viñetas
                          return <div key={idx} className="mb-1">{line}</div>;
                        })}
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Tarjetas Didácticas - Después de las respuestas */}
            {(isExpanded || isNavigationMode) && question.flashcards && question.flashcards.length > 0 && (
              <div className="mt-4" onClick={(e) => e.stopPropagation()}>
                {/* Mostrar tarjetas siempre (sin botón) */}
                <FlashCards
                  cards={question.flashcards}
                  questionNumber={question.number}
                  favorites={favorites}
                  onToggleFavorite={onToggleFavorite}
                  lsmData={allLsmData}
                  onLSMUpdate={onLSMUpdate || (() => {})}
                  hiddenCards={hiddenCards}
                  onToggleHidden={onToggleHidden}
                />
              </div>
            )}

            {/* Tarjetas de Textos Bíblicos - Después de las flashcards */}
            {(isExpanded || isNavigationMode) && question.biblicalCards && question.biblicalCards.length > 0 && (
              <div className="mt-4" onClick={(e) => e.stopPropagation()}>
                {/* Mostrar tarjetas bíblicas siempre (sin botón) */}
                <BiblicalCards
                  cards={question.biblicalCards}
                  questionNumber={question.number}
                  favorites={favorites}
                  onToggleFavorite={onToggleFavorite}
                  hiddenCards={hiddenCards}
                  onToggleHidden={onToggleHidden}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal de párrafos */}
      {showParagraphsModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.15)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)'
          }}
          onClick={() => setShowParagraphsModal(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="sticky top-0 bg-gradient-to-r from-slate-700 to-slate-900 text-white p-6 rounded-t-xl flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">
                  Párrafo{relatedParagraphs.length > 1 ? 's' : ''} {question.paragraphs.join(', ')}
                </h3>
                <p className="text-sm text-slate-300 mt-1">Pregunta {question.number}</p>
              </div>
              <button
                onClick={() => setShowParagraphsModal(false)}
                className="w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all"
                title="Cerrar"
              >
                <span className="text-2xl font-bold">×</span>
              </button>
            </div>

            {/* Contenido de los párrafos */}
            <div className="p-6 space-y-6">
              {relatedParagraphs.map((paragraph) => (
                <div key={paragraph.number} className="bg-slate-50 rounded-lg p-5 border-l-2 border-indigo-400">
                  {/* Número de párrafo */}
                  <div className="flex items-start gap-4">
                    <span className="bg-gradient-to-br from-slate-600 to-slate-700 text-white font-bold text-base w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0">
                      {paragraph.number}
                    </span>
                    {/* Contenido del párrafo */}
                    <div className="flex-1">
                      <p className="text-base leading-relaxed text-slate-700">
                        {formatContent(paragraph.content)}
                      </p>
                      {/* Imagen del párrafo (si existe) */}
                      {paragraph.image && (
                        <div className="mt-4">
                          <img
                            src={paragraph.image}
                            alt={paragraph.imageCaption || `Imagen del párrafo ${paragraph.number}`}
                            className="w-full rounded-lg shadow-md"
                          />
                          {paragraph.imageCaption && (
                            <p className="text-sm text-slate-600 italic mt-2 text-center">
                              {paragraph.imageCaption}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer del modal */}
            <div className="sticky bottom-0 bg-slate-50 p-4 rounded-b-xl border-t border-slate-200 text-center">
              <button
                onClick={() => setShowParagraphsModal(false)}
                className="px-6 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors font-medium shadow-sm"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
