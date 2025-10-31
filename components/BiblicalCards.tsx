'use client';

import { useState } from 'react';

interface BiblicalCard {
  reference: string;
  purpose: string;
  text: string;
}

interface BiblicalCardsProps {
  cards: BiblicalCard[];
}

export default function BiblicalCards({ cards }: BiblicalCardsProps) {
  // Estado para controlar qué tarjetas están volteadas (por índice)
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  if (!cards || cards.length === 0) return null;

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
    <div className="mt-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border-2 border-purple-300">
      <div className="flex items-center justify-between mb-4">
        <div className="text-xs font-semibold text-purple-700">📖 Textos Bíblicos</div>
        <div className="text-xs text-purple-600 font-medium">
          {cards.length} {cards.length === 1 ? 'texto' : 'textos'}
        </div>
      </div>

      {/* Cuadrícula de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, index) => {
          const isFlipped = flippedCards.has(index);

          return (
            <div
              key={index}
              className="relative h-48 cursor-pointer"
              style={{ perspective: '1000px' }}
              onClick={() => handleFlip(index)}
            >
              <div
                className="relative w-full h-full transition-transform duration-500"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Frente de la tarjeta (Referencia + Propósito) */}
                <div
                  className="absolute w-full h-full bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center border-2 border-purple-200"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  <p className="text-center text-purple-800 font-bold text-lg mb-4">
                    {card.reference}
                  </p>
                  <p className="text-center text-gray-700 text-sm leading-relaxed">
                    {card.purpose}
                  </p>
                </div>

                {/* Reverso de la tarjeta (Texto completo TNM) */}
                <div
                  className="absolute w-full h-full bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg shadow-lg border-2 border-purple-800 overflow-hidden flex flex-col"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  {/* Referencia fija arriba */}
                  <div className="text-xs text-purple-100 font-semibold text-center bg-purple-800/50 py-2 px-4 flex-shrink-0">
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
