'use client';

import { useState } from 'react';

interface FlashCard {
  question: string;
  answer: string;
}

interface FlashCardsProps {
  cards: FlashCard[];
}

export default function FlashCards({ cards }: FlashCardsProps) {
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
    <div className="mt-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-4 border-2 border-amber-300">
      <div className="flex items-center justify-between mb-4">
        <div className="text-xs font-semibold text-amber-700">🎴 Tarjetas Didácticas</div>
        <div className="text-xs text-amber-600 font-medium">
          {cards.length} {cards.length === 1 ? 'tarjeta' : 'tarjetas'}
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
                {/* Frente de la tarjeta (Pregunta) */}
                <div
                  className="absolute w-full h-full bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center border-2 border-amber-200"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  <div className="text-xs text-amber-600 font-semibold mb-2">❓ Pregunta</div>
                  <p className="text-center text-gray-800 font-medium leading-relaxed text-sm">
                    {card.question}
                  </p>
                  <div className="text-xs text-gray-500 mt-3 italic">Click para ver respuesta</div>
                </div>

                {/* Reverso de la tarjeta (Respuesta) */}
                <div
                  className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center border-2 border-blue-700"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div className="text-xs text-white font-semibold mb-2">💬 Respuesta</div>
                  <p className="text-center text-white font-bold leading-relaxed">
                    {card.answer}
                  </p>
                  <div className="text-xs text-blue-100 mt-3 italic">Click para volver</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
