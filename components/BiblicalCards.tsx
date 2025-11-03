'use client';

import { useState } from 'react';

interface BiblicalCard {
  reference: string;
  purpose: string;
  text: string;
}

interface BiblicalCardsProps {
  cards: BiblicalCard[];
  questionNumber: string; // Para identificar a qué pregunta pertenecen estas tarjetas
  favorites: Record<string, boolean>; // Estado de favoritos
  onToggleFavorite: (favoriteId: string) => void; // Callback para marcar/desmarcar favorito
  hiddenCards: Record<string, boolean>; // Tarjetas ocultas
  onToggleHidden: (cardId: string) => void; // Callback para ocultar/mostrar tarjeta
}

export default function BiblicalCards({ cards, questionNumber, favorites, onToggleFavorite, hiddenCards, onToggleHidden }: BiblicalCardsProps) {
  // Estado para controlar qué tarjetas están volteadas (por índice)
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  if (!cards || cards.length === 0) return null;

  // Filtrar tarjetas ocultas
  const visibleCards = cards.filter((_, index) => {
    const cardId = `biblical-${questionNumber}-${index}`;
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

  return (
    <div className="mt-4 bg-gradient-to-br from-violet-50 to-violet-100 rounded-lg p-4 border-2 border-violet-300">
      <div className="flex items-center justify-between mb-4">
        <div className="text-xs font-semibold text-violet-700">📖 Textos Bíblicos</div>
        <div className="text-xs text-violet-600 font-medium">
          {visibleCards.length} {visibleCards.length === 1 ? 'texto' : 'textos'}
        </div>
      </div>

      {/* Cuadrícula de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, originalIndex) => {
          const cardId = `biblical-${questionNumber}-${originalIndex}`;
          if (hiddenCards[cardId]) return null; // No mostrar tarjetas ocultas

          const index = originalIndex; // Mantener el índice original para los IDs
          const isFlipped = flippedCards.has(index);
          const favoriteId = `biblical-${questionNumber}-${index}`;
          const isFavorite = favorites[favoriteId] || false;

          return (
            <div
              key={index}
              className="relative h-48 cursor-pointer group"
              style={{ perspective: '1000px' }}
              onClick={() => handleFlip(index)}
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
                    if (confirm('¿Estás seguro de que quieres ocultar este texto bíblico?')) {
                      onToggleHidden(cardId);
                    }
                  }}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-md bg-white/80 hover:bg-red-500 hover:text-white opacity-0 group-hover:opacity-100"
                  title="Ocultar texto bíblico"
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
                {/* Frente de la tarjeta (Referencia + Propósito) */}
                <div
                  className={`absolute w-full h-full bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center ${
                    isFavorite ? 'border-4 border-yellow-400' : 'border-2 border-violet-200'
                  }`}
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  <p className="text-center text-violet-800 font-bold text-lg mb-4">
                    {card.reference}
                  </p>
                  <p className="text-center text-slate-700 text-sm leading-relaxed">
                    {card.purpose}
                  </p>
                </div>

                {/* Reverso de la tarjeta (Texto completo TNM) */}
                <div
                  className={`absolute w-full h-full bg-gradient-to-br from-violet-600 to-violet-700 rounded-lg shadow-lg overflow-hidden flex flex-col ${
                    isFavorite ? 'border-4 border-yellow-400' : 'border-2 border-violet-800'
                  }`}
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  {/* Referencia fija arriba */}
                  <div className="text-xs text-violet-100 font-semibold text-center bg-violet-800/50 py-2 px-4 flex-shrink-0">
                    {card.reference}
                  </div>

                  {/* Texto con scroll */}
                  <div className="flex-1 overflow-y-auto px-4 py-3 hide-scrollbar">
                    <p className="text-center text-white font-medium text-sm leading-relaxed">
                      "{card.text}"
                    </p>
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
