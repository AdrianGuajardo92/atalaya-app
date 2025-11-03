'use client';

import { useState } from 'react';

interface FlashCard {
  question: string;
  answer: string;
}

interface FlashCardsProps {
  cards: FlashCard[];
  questionNumber: string; // Para identificar a qué pregunta pertenecen estas tarjetas
  favorites: Record<string, boolean>; // Estado de favoritos
  onToggleFavorite: (favoriteId: string) => void; // Callback para marcar/desmarcar favorito
  lsmData: Record<string, string>; // Datos LSM para las tarjetas
  onLSMUpdate: (key: string, text: string) => void; // Callback para actualizar LSM
  hiddenCards: Record<string, boolean>; // Tarjetas ocultas
  onToggleHidden: (cardId: string) => void; // Callback para ocultar/mostrar tarjeta
}

export default function FlashCards({ cards, questionNumber, favorites, onToggleFavorite, lsmData, onLSMUpdate, hiddenCards, onToggleHidden }: FlashCardsProps) {
  // Estado para controlar qué tarjetas están volteadas (por índice)
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  // Estado para controlar qué tarjeta está siendo editada
  const [editingCard, setEditingCard] = useState<{index: number, side: 'question' | 'answer'} | null>(null);
  // Estado para el texto siendo editado
  const [editedText, setEditedText] = useState('');
  // Estado de guardado
  const [isSaving, setIsSaving] = useState(false);

  if (!cards || cards.length === 0) return null;

  // Filtrar tarjetas ocultas
  const visibleCards = cards.filter((_, index) => {
    const cardId = `flashcard-${questionNumber}-${index}`;
    return !hiddenCards[cardId];
  });

  if (visibleCards.length === 0) return null;

  const handleFlip = (index: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleStartEdit = (index: number, side: 'question' | 'answer', e: React.MouseEvent) => {
    e.stopPropagation();
    const key = `flashcard-${questionNumber}-${index}-${side}`;
    setEditingCard({ index, side });
    setEditedText(lsmData[key] || '');
  };

  const handleSaveLSM = async () => {
    if (!editingCard) return;

    setIsSaving(true);
    const key = `flashcard-${questionNumber}-${editingCard.index}-${editingCard.side}`;

    try {
      const response = await fetch('/api/lsm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionNumber: key,
          lsmText: editedText
        })
      });

      if (response.ok) {
        onLSMUpdate(key, editedText);
        setEditingCard(null);
      }
    } catch (error) {
      console.error('Error saving LSM:', error);
      alert('Error al guardar. Intenta de nuevo.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancelEdit = () => {
    setEditingCard(null);
    setEditedText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSaveLSM();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancelEdit();
    }
  };

  return (
    <div className="mt-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 border-2 border-orange-300">
      <div className="flex items-center justify-between mb-4">
        <div className="text-xs font-semibold text-orange-700">🎴 Tarjetas Didácticas</div>
        <div className="text-xs text-orange-600 font-medium">
          {visibleCards.length} {visibleCards.length === 1 ? 'tarjeta' : 'tarjetas'}
        </div>
      </div>

      {/* Cuadrícula de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, originalIndex) => {
          const cardId = `flashcard-${questionNumber}-${originalIndex}`;
          if (hiddenCards[cardId]) return null; // No mostrar tarjetas ocultas

          const index = originalIndex; // Mantener el índice original para los IDs
          const isFlipped = flippedCards.has(index);
          const favoriteId = `flashcard-${questionNumber}-${index}`;
          const isFavorite = favorites[favoriteId] || false;
          const questionLSM = lsmData[`flashcard-${questionNumber}-${index}-question`];
          const answerLSM = lsmData[`flashcard-${questionNumber}-${index}-answer`];
          const isEditingThisCard = editingCard?.index === index;
          const isEditingQuestion = editingCard?.index === index && editingCard?.side === 'question';
          const isEditingAnswer = editingCard?.index === index && editingCard?.side === 'answer';

          return (
            <div key={index}>
              {/* Tarjeta principal */}
              <div
                className="relative min-h-[250px] cursor-pointer group"
                style={{ perspective: '1000px' }}
                onClick={() => !isEditingThisCard && handleFlip(index)}
              >
                {/* Botones de control */}
                <div className="absolute top-2 right-2 z-10 flex gap-1">
                  {/* Botón de favorito */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(favoriteId);
                    }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-md ${
                      isFavorite
                        ? 'bg-yellow-400 hover:bg-yellow-500 scale-110'
                        : 'bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100'
                    }`}
                    title={isFavorite ? 'Quitar de favoritos' : 'Marcar como favorito'}
                  >
                    <span className="text-lg">{isFavorite ? '⭐' : '☆'}</span>
                  </button>

                  {/* Botón de borrar */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (confirm('¿Estás seguro de que quieres ocultar esta tarjeta?')) {
                        onToggleHidden(cardId);
                      }
                    }}
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-md bg-white/80 hover:bg-red-500 hover:text-white opacity-0 group-hover:opacity-100"
                    title="Ocultar tarjeta"
                  >
                    <span className="text-lg">🗑️</span>
                  </button>
                </div>

                <div
                  className="relative w-full h-full transition-transform duration-700 ease-in-out"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  {/* Frente de la tarjeta (Pregunta) */}
                  <div
                    className={`absolute w-full min-h-[250px] bg-white rounded-lg shadow-lg p-4 flex flex-col ${
                      isFavorite ? 'border-4 border-yellow-400' : 'border-2 border-orange-200'
                    }`}
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                  >
                    {/* Contenido de la pregunta */}
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <p className="text-center text-slate-800 font-medium leading-relaxed text-sm">
                        {card.question}
                      </p>
                      {/* Mostrar LSM de pregunta si existe y no está editando */}
                      {questionLSM && !isEditingQuestion && (
                        <>
                          <div className="w-12 h-px bg-slate-300 my-2"></div>
                          <p className="text-center text-indigo-600 font-bold text-base uppercase">
                            🤟 {questionLSM}
                          </p>
                        </>
                      )}
                    </div>

                    {/* Editor LSM dentro de la tarjeta */}
                    {isEditingQuestion && (
                      <div className="mt-3 p-2 bg-indigo-50 rounded border-2 border-indigo-400" onClick={(e) => e.stopPropagation()}>
                        <p className="text-xs text-indigo-700 mb-1 font-semibold">
                          ✍️ LSM (Enter: guardar | Esc: cancelar)
                        </p>
                        <textarea
                          value={editedText}
                          onChange={(e) => setEditedText(e.target.value)}
                          onKeyDown={handleKeyDown}
                          className="w-full p-2 border border-indigo-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm font-semibold text-slate-900 bg-white"
                          rows={2}
                          placeholder="Escribe en LSM..."
                          autoFocus
                        />
                        <div className="flex gap-1 mt-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSaveLSM();
                            }}
                            disabled={isSaving}
                            className="px-2 py-1 bg-indigo-600 text-white text-xs rounded hover:bg-indigo-700 disabled:bg-slate-400 font-medium"
                          >
                            {isSaving ? '...' : '💾'}
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCancelEdit();
                            }}
                            disabled={isSaving}
                            className="px-2 py-1 bg-slate-300 text-slate-700 text-xs rounded hover:bg-slate-400 font-medium"
                          >
                            ✖️
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Botón para editar pregunta */}
                    {!isEditingQuestion && (
                      <button
                        onClick={(e) => handleStartEdit(index, 'question', e)}
                        className="mt-2 py-1.5 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 text-xs rounded-lg font-medium transition-colors opacity-0 group-hover:opacity-100"
                      >
                        {questionLSM ? '✏️ Editar LSM' : '➕ Agregar LSM'}
                      </button>
                    )}
                  </div>

                  {/* Reverso de la tarjeta (Respuesta) */}
                  <div
                    className={`absolute w-full min-h-[250px] bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg shadow-lg p-4 flex flex-col ${
                      isFavorite ? 'border-4 border-yellow-400' : 'border-2 border-indigo-800'
                    }`}
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    {/* Contenido de la respuesta */}
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <div className="text-xs text-white font-semibold mb-2">💬 Respuesta</div>
                      <p className="text-center text-white font-bold leading-relaxed">
                        {card.answer}
                      </p>
                      {/* Mostrar LSM de respuesta si existe y no está editando */}
                      {answerLSM && !isEditingAnswer && (
                        <>
                          <div className="w-12 h-px bg-white/40 my-2"></div>
                          <p className="text-center text-yellow-300 font-bold text-base uppercase">
                            🤟 {answerLSM}
                          </p>
                        </>
                      )}
                    </div>

                    {/* Editor LSM dentro de la tarjeta */}
                    {isEditingAnswer && (
                      <div className="mt-3 p-2 bg-white/10 rounded border-2 border-white/40" onClick={(e) => e.stopPropagation()}>
                        <p className="text-xs text-white mb-1 font-semibold">
                          ✍️ LSM (Enter: guardar | Esc: cancelar)
                        </p>
                        <textarea
                          value={editedText}
                          onChange={(e) => setEditedText(e.target.value)}
                          onKeyDown={handleKeyDown}
                          className="w-full p-2 border border-indigo-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-300 text-sm font-semibold text-slate-900 bg-white"
                          rows={2}
                          placeholder="Escribe en LSM..."
                          autoFocus
                        />
                        <div className="flex gap-1 mt-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSaveLSM();
                            }}
                            disabled={isSaving}
                            className="px-2 py-1 bg-white text-indigo-600 text-xs rounded hover:bg-indigo-50 disabled:bg-slate-400 font-medium"
                          >
                            {isSaving ? '...' : '💾'}
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCancelEdit();
                            }}
                            disabled={isSaving}
                            className="px-2 py-1 bg-white/20 text-white text-xs rounded hover:bg-white/30 font-medium"
                          >
                            ✖️
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Botón para editar respuesta */}
                    {!isEditingAnswer && (
                      <button
                        onClick={(e) => handleStartEdit(index, 'answer', e)}
                        className="mt-2 py-1.5 bg-white/20 hover:bg-white/30 text-white text-xs rounded-lg font-medium transition-colors opacity-0 group-hover:opacity-100"
                      >
                        {answerLSM ? '✏️ Editar LSM' : '➕ Agregar LSM'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
