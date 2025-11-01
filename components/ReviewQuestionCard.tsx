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
  favorites?: Record<string, boolean>;
  onToggleFavorite?: (favoriteId: string) => void;
  allLsmData?: Record<string, string>;
  hiddenCards?: Record<string, boolean>;
  onToggleHidden?: (cardId: string) => void;
  isNavigationMode?: boolean; // Para saber si está en modo paginado o scroll
}

export default function ReviewQuestionCard({
  reviewQuestion,
  index,
  lsmText,
  onLSMUpdate,
  favorites = {},
  onToggleFavorite = () => {},
  allLsmData = {},
  hiddenCards = {},
  onToggleHidden = () => {},
  isNavigationMode = false
}: ReviewQuestionCardProps) {
  const [isEditingLSM, setIsEditingLSM] = useState(false);
  const [editedLSM, setEditedLSM] = useState(lsmText || reviewQuestion.questionLSM || '');
  const [isSaving, setIsSaving] = useState(false);
  const [isExpanded, setIsExpanded] = useState(isNavigationMode); // Expandido por defecto en modo paginado

  const handleSaveLSM = async () => {
    setIsSaving(true);
    try {
      const response = await fetch('/api/lsm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionNumber: `review-${index}`,
          lsmText: editedLSM
        })
      });

      if (response.ok) {
        setIsEditingLSM(false);
        if (onLSMUpdate) {
          onLSMUpdate(index, editedLSM);
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

  const currentLSMText = lsmText || reviewQuestion.questionLSM;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 border-l-4 border-purple-500">
      {/* Botón para expandir/colapsar (solo en modo scroll) */}
      {!isNavigationMode && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mb-4 flex items-center justify-between px-4 py-3 bg-purple-100 hover:bg-purple-200 rounded-lg transition-colors"
        >
          <span className="font-semibold text-purple-800">
            {isExpanded ? '▼ Ocultar contenido' : '▶ Mostrar contenido'}
          </span>
          <span className="text-sm text-purple-600">
            {isExpanded ? 'Colapsar' : 'Expandir'}
          </span>
        </button>
      )}

      {/* Contenedor unificado de pregunta de repaso */}
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-5 shadow-sm group relative">
        {/* Pregunta en español */}
        <div className="mb-3">
          <p className="text-sm text-purple-700 mb-1 font-medium">Pregunta de Repaso</p>
          <p className="text-xl font-semibold text-gray-800 leading-relaxed">
            {reviewQuestion.question}
          </p>
        </div>

        {/* Línea divisoria */}
        <div className="w-16 h-0.5 bg-purple-300 my-3"></div>

        {/* Pregunta en LSM - Modo visualización */}
        {!isEditingLSM && currentLSMText ? (
          <>
            <div>
              <p className="text-sm text-purple-700 mb-2 font-semibold">🤟 LSM</p>
              <p className="text-2xl font-bold text-gray-900 leading-relaxed uppercase">
                {currentLSMText.toUpperCase()}
              </p>
            </div>
            <button
              onClick={() => setIsEditingLSM(true)}
              className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 font-medium shadow-sm"
            >
              ✏️ Editar LSM
            </button>
          </>
        ) : !isEditingLSM ? (
          <button
            onClick={() => setIsEditingLSM(true)}
            className="w-full py-2 bg-purple-50 border-2 border-dashed border-purple-300 rounded-lg hover:bg-purple-100 transition-colors text-purple-600 font-medium text-sm"
          >
            ➕ Agregar pregunta en LSM
          </button>
        ) : null}
      </div>

      {/* Modo edición LSM - Fuera del contenedor unificado */}
      {isEditingLSM && (
        <div className="mt-3 p-4 bg-purple-50 rounded-lg border-2 border-purple-500 shadow-sm">
          <p className="text-sm text-purple-700 mb-2 font-semibold">✍️ Editar LSM (Enter: guardar | Esc: cancelar | Shift+Enter: nueva línea):</p>
          <textarea
            value={editedLSM}
            onChange={(e) => setEditedLSM(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full p-4 border-2 border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 text-xl font-semibold text-gray-900 bg-white shadow-inner"
            rows={4}
            placeholder="Escribe la pregunta en LSM..."
            autoFocus
          />
          <div className="flex gap-2 mt-3">
            <button
              onClick={handleSaveLSM}
              disabled={isSaving}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-400 transition-colors font-medium shadow-sm"
            >
              {isSaving ? 'Guardando...' : '💾 Guardar'}
            </button>
            <button
              onClick={handleCancelEdit}
              disabled={isSaving}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors font-medium"
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
            <div className="mt-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <p className="text-sm font-semibold text-green-700 mb-2">💡 Respuesta:</p>
              <p className="text-gray-800 leading-relaxed">{reviewQuestion.answer}</p>
            </div>
          )}

          {/* Puntos clave */}
          {reviewQuestion.answerBullets && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm font-semibold text-blue-700 mb-2">📌 Puntos clave:</p>
              <div className="text-gray-800 leading-relaxed whitespace-pre-line">
                {reviewQuestion.answerBullets}
              </div>
            </div>
          )}

          {/* Tarjetas didácticas */}
          {reviewQuestion.flashcards && reviewQuestion.flashcards.length > 0 && (
            <FlashCards
              cards={reviewQuestion.flashcards}
              questionNumber={`review-${index}`}
              favorites={favorites}
              onToggleFavorite={onToggleFavorite}
              lsmData={allLsmData}
              onLSMUpdate={(key, text) => {
                // Guardar directamente en la API
                fetch('/api/lsm', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ questionNumber: key, lsmText: text })
                });
              }}
              hiddenCards={hiddenCards}
              onToggleHidden={onToggleHidden}
            />
          )}

          {/* Textos bíblicos */}
          {reviewQuestion.biblicalCards && reviewQuestion.biblicalCards.length > 0 && (
            <BiblicalCards
              cards={reviewQuestion.biblicalCards}
              questionNumber={`review-${index}`}
              favorites={favorites}
              onToggleFavorite={onToggleFavorite}
              hiddenCards={hiddenCards}
              onToggleHidden={onToggleHidden}
            />
          )}
        </>
      )}
    </div>
  );
}
