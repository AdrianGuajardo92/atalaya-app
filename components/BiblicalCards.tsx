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

  hiddenCards: Record<string, boolean>; // Tarjetas ocultas
  onToggleHidden: (cardId: string) => void; // Callback para ocultar/mostrar tarjeta
}

export default function BiblicalCards({ cards, questionNumber, hiddenCards, onToggleHidden }: BiblicalCardsProps) {
  // Estado para controlar qué tarjetas están volteadas (por índice)
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  // Estado para mostrar feedback de copiado
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

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

  const handleCopyWithContext = async (card: BiblicalCard, index: number) => {
    const textToCopy = `Dame mas contexto de este texto biblico: ${card.reference}\n\n"${card.text}"`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  return (
    <div className="mt-4">
      {/* Header con altura fija para alineación con Tarjetas Didácticas */}
      <div className="flex items-center justify-between mb-4 min-h-[40px]">
        <div className="text-xs font-bold text-text-muted uppercase tracking-wider">📖 Textos Clave</div>
        <div className="text-xs text-text-tertiary font-medium">
          {visibleCards.length} {visibleCards.length === 1 ? 'texto' : 'textos'}
        </div>
      </div>

      {/* Cuadrícula de tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((card, originalIndex) => {
          const cardId = `biblical-${questionNumber}-${originalIndex}`;
          if (hiddenCards[cardId]) return null; // No mostrar tarjetas ocultas

          const index = originalIndex; // Mantener el índice original para los IDs
          const isFlipped = flippedCards.has(index);

          return (
            <div
              key={index}
              className="relative h-[200px] cursor-pointer group"
              style={{ perspective: '1000px' }}
              onClick={() => handleFlip(index)}
            >
              {/* Botones de control */}
              <div className="absolute top-3 right-3 z-10 flex gap-2">
                {/* Botón de copiar con contexto */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopyWithContext(card, index);
                  }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-sm border ${copiedIndex === index
                      ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 scale-110'
                      : 'bg-surface text-text-tertiary border-border hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 opacity-0 group-hover:opacity-100'
                    }`}
                  title="Copiar texto bíblico con pregunta de contexto"
                >
                  <span className="text-sm">{copiedIndex === index ? '✓' : '📋'}</span>
                </button>

                {/* Botón de borrar */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (confirm('¿Estás seguro de que quieres ocultar este texto bíblico?')) {
                      onToggleHidden(cardId);
                    }
                  }}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-sm border bg-surface text-text-tertiary border-border hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 opacity-0 group-hover:opacity-100"
                  title="Ocultar texto bíblico"
                >
                  <span className="text-sm">🗑️</span>
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
                  className="absolute w-full h-[200px] bg-surface rounded-xl shadow-sm border border-border overflow-hidden flex flex-col"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  {/* Contenido con scroll */}
                  <div className="flex-1 overflow-y-auto hide-scrollbar p-6 flex flex-col items-center justify-center">
                    <p className="text-center text-text-primary font-bold text-lg mb-3 font-serif">
                      {card.reference}
                    </p>
                    <p className="text-center text-text-muted text-sm leading-relaxed max-w-[90%]">
                      {card.purpose}
                    </p>
                  </div>
                </div>

                {/* Reverso de la tarjeta (Texto completo TNM) - Stays dark intentionally */}
                <div
                  className="absolute w-full h-[200px] bg-slate-800 rounded-xl shadow-lg border border-slate-700 overflow-hidden flex flex-col"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  {/* Referencia fija arriba */}
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] text-center bg-slate-900/50 py-2 flex-shrink-0">
                    {card.reference}
                  </div>

                  {/* Texto con scroll */}
                  <div className="flex-1 overflow-y-auto px-6 py-4 hide-scrollbar flex flex-col items-center">
                    <p className="text-center text-white font-medium text-sm leading-relaxed italic">
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
