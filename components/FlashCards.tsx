'use client';

import { useState, useEffect } from 'react';

interface FlashCard {
  question: string;
  answer: string;
  isCustom?: boolean; // Para distinguir tarjetas personalizadas
}

interface FlashCardsProps {
  cards: FlashCard[];
  questionNumber: string; // Para identificar a qué pregunta pertenecen estas tarjetas

  lsmData: Record<string, string>; // Datos LSM para las tarjetas
  onLSMUpdate: (key: string, text: string) => void; // Callback para actualizar LSM
  hiddenCards: Record<string, boolean>; // Tarjetas ocultas
  onToggleHidden: (cardId: string) => void; // Callback para ocultar/mostrar tarjeta
  articleId: string; // ID del artículo actual
  onAddCard?: (card: FlashCard) => void; // Callback para agregar tarjeta
  onEditCard?: (index: number, card: FlashCard) => void; // Callback para editar tarjeta
  onDeleteCard?: (index: number) => void; // Callback para eliminar tarjeta
}

export default function FlashCards({ cards, questionNumber, lsmData, onLSMUpdate, hiddenCards, onToggleHidden, articleId, onAddCard, onEditCard, onDeleteCard }: FlashCardsProps) {
  // Estado para controlar qué tarjetas están volteadas (por índice)
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  // Estado para controlar qué tarjeta está siendo editada
  const [editingCard, setEditingCard] = useState<{ index: number, side: 'question' | 'answer' } | null>(null);
  // Estado para el texto siendo editado
  const [editedText, setEditedText] = useState('');
  // Estado de guardado
  const [isSaving, setIsSaving] = useState(false);
  // Estado para controlar qué botón de borrar está en modo de confirmación
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  // Estados para el modal de crear/editar tarjeta
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newCardQuestion, setNewCardQuestion] = useState('');
  const [newCardAnswer, setNewCardAnswer] = useState('');
  const [editingCustomCard, setEditingCustomCard] = useState<number | null>(null);
  const [isSavingCard, setIsSavingCard] = useState(false);

  // Efecto para resetear confirmación de borrado al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = () => {
      if (deleteConfirm) {
        setDeleteConfirm(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [deleteConfirm]);

  // Filtrar tarjetas ocultas
  const visibleCards = (cards || []).filter((_, index) => {
    const cardId = `flashcard-${questionNumber}-${index}`;
    return !hiddenCards[cardId];
  });

  // Si no hay tarjetas y no hay callback para agregar, no mostrar nada
  if (visibleCards.length === 0 && !onAddCard) return null;

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
          articleId: articleId,
          questionNumber: key,
          lsmText: editedText
        })
      });

      if (response.ok) {
        onLSMUpdate(key, editedText);
        setEditingCard(null);
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

  // Funciones para manejar el modal de crear/editar tarjeta
  const handleOpenCreateModal = () => {
    setNewCardQuestion('');
    setNewCardAnswer('');
    setEditingCustomCard(null);
    setShowCreateModal(true);
  };

  const handleOpenEditModal = (index: number, card: FlashCard) => {
    setNewCardQuestion(card.question);
    setNewCardAnswer(card.answer);
    setEditingCustomCard(index);
    setShowCreateModal(true);
  };

  const handleCloseModal = () => {
    setShowCreateModal(false);
    setNewCardQuestion('');
    setNewCardAnswer('');
    setEditingCustomCard(null);
  };

  const handleSaveCard = async () => {
    if (!newCardQuestion.trim() || !newCardAnswer.trim()) {
      alert('Por favor completa la pregunta y la respuesta');
      return;
    }

    setIsSavingCard(true);

    const newCard: FlashCard = {
      question: newCardQuestion.trim(),
      answer: newCardAnswer.trim(),
      isCustom: true
    };

    try {
      if (editingCustomCard !== null && onEditCard) {
        await onEditCard(editingCustomCard, newCard);
      } else if (onAddCard) {
        await onAddCard(newCard);
      }
      handleCloseModal();
    } catch (error) {
      console.error('Error saving card:', error);
      alert('Error al guardar la tarjeta');
    } finally {
      setIsSavingCard(false);
    }
  };

  const handleDeleteCustomCard = async (index: number) => {
    if (!confirm('¿Eliminar esta tarjeta?')) return;
    if (onDeleteCard) {
      await onDeleteCard(index);
    }
  };

  return (
    <div className="mt-4">
      {/* Header con altura fija para alineación con Textos Clave */}
      <div className="flex items-center justify-between mb-4 min-h-[40px]">
        <div className="text-xs font-bold text-text-muted uppercase tracking-wider">🎴 Tarjetas Didácticas</div>
        <div className="flex items-center gap-3">
          <div className="text-xs text-text-tertiary font-medium">
            {visibleCards.length} {visibleCards.length === 1 ? 'tarjeta' : 'tarjetas'}
          </div>
          {onAddCard && (
            <button
              onClick={handleOpenCreateModal}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs rounded-lg font-medium transition-colors shadow-sm flex items-center gap-1"
            >
              <span>+</span> Agregar
            </button>
          )}
        </div>
      </div>

      {/* Cuadrícula de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, originalIndex) => {
          const cardId = `flashcard-${questionNumber}-${originalIndex}`;
          if (hiddenCards[cardId]) return null; // No mostrar tarjetas ocultas

          const index = originalIndex; // Mantener el índice original para los IDs
          const isFlipped = flippedCards.has(index);
          const questionLSM = lsmData[`flashcard-${questionNumber}-${index}-question`];
          const answerLSM = lsmData[`flashcard-${questionNumber}-${index}-answer`];
          const isEditingThisCard = editingCard?.index === index;
          const isEditingQuestion = editingCard?.index === index && editingCard?.side === 'question';
          const isEditingAnswer = editingCard?.index === index && editingCard?.side === 'answer';

          return (
            <div key={index}>
              {/* Tarjeta principal */}
              <div
                className="relative h-[250px] cursor-pointer group"
                style={{ perspective: '1000px' }}
                onClick={() => {
                  if (!isEditingThisCard) {
                    handleFlip(index);
                    // Resetear confirmación de borrado al hacer clic en la tarjeta
                    if (deleteConfirm) setDeleteConfirm(null);
                  }
                }}
              >
                {/* Indicador de tarjeta personalizada */}
                {card.isCustom && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-surface-raised text-text-secondary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide border border-border">
                      Personal
                    </span>
                  </div>
                )}

                {/* Botones de control */}
                <div className="absolute top-3 right-3 z-10 flex gap-2">
                  {/* Botón de editar (solo para tarjetas personalizadas) */}
                  {card.isCustom && onEditCard && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenEditModal(index, card);
                      }}
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all bg-surface text-text-tertiary hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 shadow-sm border border-border opacity-0 group-hover:opacity-100"
                      title="Editar tarjeta"
                    >
                      <span className="text-sm">✏️</span>
                    </button>
                  )}

                  {/* Botón de borrar - Para personalizadas elimina, para normales oculta */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (card.isCustom && onDeleteCard) {
                        // Para tarjetas personalizadas, eliminar directamente con confirmación
                        if (deleteConfirm === cardId) {
                          handleDeleteCustomCard(index);
                          setDeleteConfirm(null);
                        } else {
                          setDeleteConfirm(cardId);
                        }
                      } else {
                        // Para tarjetas normales, ocultar
                        if (deleteConfirm === cardId) {
                          onToggleHidden(cardId);
                          setDeleteConfirm(null);
                        } else {
                          setDeleteConfirm(cardId);
                        }
                      }
                    }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-sm border ${deleteConfirm === cardId
                      ? 'bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800 scale-110 opacity-100'
                      : 'bg-surface text-text-tertiary border-border hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 opacity-0 group-hover:opacity-100'
                      }`}
                    title={deleteConfirm === cardId ? 'Clic de nuevo para confirmar' : (card.isCustom ? 'Eliminar tarjeta' : 'Ocultar tarjeta')}
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
                  {/* Frente de la tarjeta (Pregunta) */}
                  <div
                    className="absolute w-full h-[250px] bg-surface rounded-xl shadow-sm border border-border overflow-hidden flex flex-col"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                  >
                    {/* Contenido de la pregunta con scroll */}
                    <div className="flex-1 overflow-y-auto hide-scrollbar p-6 flex flex-col items-center">
                      <p className="text-center text-text-body font-serif text-lg leading-relaxed">
                        {card.question}
                      </p>
                      {/* Mostrar LSM de pregunta si existe y no está editando */}
                      {questionLSM && !isEditingQuestion && (
                        <>
                          <div className="w-8 h-px bg-border my-4"></div>
                          <p className="text-center text-text-muted font-bold text-sm uppercase tracking-wider">
                            🤟 {questionLSM}
                          </p>
                        </>
                      )}
                    </div>

                    {/* Editor LSM dentro de la tarjeta */}
                    {isEditingQuestion && (
                      <div className="flex-shrink-0 p-3 mx-6 mb-6 bg-surface-alt rounded border border-border shadow-inner" onClick={(e) => e.stopPropagation()}>
                        <p className="text-[10px] text-text-muted mb-1 font-bold uppercase tracking-wider">
                          Editar LSM
                        </p>
                        <textarea
                          value={editedText}
                          onChange={(e) => setEditedText(e.target.value)}
                          onKeyDown={handleKeyDown}
                          className="w-full p-2 border border-border-strong rounded focus:outline-none focus:ring-1 focus:ring-slate-500 text-sm font-medium text-text-body bg-surface"
                          rows={2}
                          placeholder="Escribe en LSM..."
                          autoFocus
                        />
                        <div className="flex gap-2 mt-2 justify-end">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCancelEdit();
                            }}
                            disabled={isSaving}
                            className="px-2 py-1 text-text-muted text-xs hover:text-text-body font-medium"
                          >
                            Cancelar
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSaveLSM();
                            }}
                            disabled={isSaving}
                            className="px-3 py-1 bg-slate-700 text-white text-xs rounded hover:bg-slate-800 disabled:opacity-50 font-medium"
                          >
                            Guardar
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Botón para editar pregunta */}
                    {!isEditingQuestion && (
                      <div className="flex-shrink-0 pb-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={(e) => handleStartEdit(index, 'question', e)}
                          className="text-xs font-bold text-text-tertiary hover:text-text-secondary uppercase tracking-wider flex items-center gap-1"
                        >
                          {questionLSM ? '✏️ Editar LSM' : '➕ Agregar LSM'}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Reverso de la tarjeta (Respuesta) - Stays dark intentionally */}
                  <div
                    className="absolute w-full h-[250px] bg-slate-800 rounded-xl shadow-lg border border-slate-700 overflow-hidden flex flex-col"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    {/* Header fijo */}
                    <div className="flex-shrink-0 text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] text-center bg-slate-900/50 py-2">Respuesta</div>

                    {/* Contenido de la respuesta con scroll */}
                    <div className="flex-1 overflow-y-auto hide-scrollbar p-6 flex flex-col items-center text-center">
                      <p className="text-white font-medium text-lg leading-relaxed">
                        {card.answer}
                      </p>
                      {/* Mostrar LSM de respuesta si existe y no está editando */}
                      {answerLSM && !isEditingAnswer && (
                        <>
                          <div className="w-8 h-px bg-slate-600 my-4"></div>
                          <p className="text-slate-300 font-bold text-sm uppercase tracking-wider">
                            🤟 {answerLSM}
                          </p>
                        </>
                      )}
                    </div>

                    {/* Editor LSM dentro de la tarjeta */}
                    {isEditingAnswer && (
                      <div className="flex-shrink-0 p-3 mx-6 mb-6 bg-slate-700/50 rounded border border-slate-600" onClick={(e) => e.stopPropagation()}>
                        <p className="text-[10px] text-slate-300 mb-1 font-bold uppercase tracking-wider">
                          Editar LSM
                        </p>
                        <textarea
                          value={editedText}
                          onChange={(e) => setEditedText(e.target.value)}
                          onKeyDown={handleKeyDown}
                          className="w-full p-2 border border-slate-500 rounded focus:outline-none focus:ring-1 focus:ring-slate-400 text-sm font-medium text-white bg-slate-800"
                          rows={2}
                          placeholder="Escribe en LSM..."
                          autoFocus
                        />
                        <div className="flex gap-2 mt-2 justify-end">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCancelEdit();
                            }}
                            disabled={isSaving}
                            className="px-2 py-1 text-slate-400 text-xs hover:text-slate-200 font-medium"
                          >
                            Cancelar
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSaveLSM();
                            }}
                            disabled={isSaving}
                            className="px-3 py-1 bg-white text-slate-900 text-xs rounded hover:bg-slate-100 disabled:opacity-50 font-medium"
                          >
                            Guardar
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Botón para editar respuesta */}
                    {!isEditingAnswer && (
                      <div className="flex-shrink-0 pb-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={(e) => handleStartEdit(index, 'answer', e)}
                          className="text-xs font-bold text-slate-500 hover:text-slate-300 uppercase tracking-wider flex items-center gap-1"
                        >
                          {answerLSM ? '✏️ Editar LSM' : '➕ Agregar LSM'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal para crear/editar tarjeta */}
      {showCreateModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)'
          }}
          onClick={handleCloseModal}
        >
          <div
            className="bg-surface rounded-xl shadow-2xl max-w-lg w-full overflow-hidden border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="bg-surface-alt border-b border-border p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xl">🎴</span>
                <h3 className="text-lg font-bold text-text-primary">
                  {editingCustomCard !== null ? 'Editar Tarjeta' : 'Crear Tarjeta Didáctica'}
                </h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-surface-raised transition-colors text-text-muted"
                title="Cerrar"
              >
                <span className="text-xl">×</span>
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="p-6 space-y-5">
              {/* Campo de pregunta */}
              <div>
                <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">
                  Pregunta (Frente)
                </label>
                <textarea
                  value={newCardQuestion}
                  onChange={(e) => setNewCardQuestion(e.target.value)}
                  placeholder="Escribe la pregunta..."
                  className="w-full p-3 border border-border-strong rounded-lg focus:outline-none focus:ring-2 focus:ring-border focus:border-border-strong text-text-body bg-surface resize-none transition-all"
                  rows={3}
                  autoFocus
                />
              </div>

              {/* Campo de respuesta */}
              <div>
                <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">
                  Respuesta (Reverso)
                </label>
                <textarea
                  value={newCardAnswer}
                  onChange={(e) => setNewCardAnswer(e.target.value)}
                  placeholder="Escribe la respuesta..."
                  className="w-full p-3 border border-border-strong rounded-lg focus:outline-none focus:ring-2 focus:ring-border focus:border-border-strong text-text-body bg-surface resize-none transition-all"
                  rows={4}
                />
              </div>
            </div>

            {/* Footer del modal */}
            <div className="bg-surface-alt p-4 flex justify-end gap-3 border-t border-border">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 text-text-secondary hover:text-text-primary font-medium transition-colors text-sm"
              >
                Cancelar
              </button>
              <button
                onClick={handleSaveCard}
                disabled={isSavingCard || !newCardQuestion.trim() || !newCardAnswer.trim()}
                className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors disabled:bg-slate-300 dark:disabled:bg-slate-600 disabled:cursor-not-allowed flex items-center gap-2 text-sm shadow-sm"
              >
                {isSavingCard ? 'Guardando...' : (editingCustomCard !== null ? 'Guardar cambios' : 'Crear tarjeta')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
