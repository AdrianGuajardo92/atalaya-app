'use client';

import { useState } from 'react';
import { Question, Paragraph } from '@/types/atalaya';

interface QuestionCardProps {
  question: Question;
  paragraphs: Paragraph[];
  lsmText?: string;
  onLSMUpdate?: (questionNumber: string, text: string) => void;
}

export default function QuestionCard({ question, paragraphs, lsmText, onLSMUpdate }: QuestionCardProps) {
  const [showParagraphs, setShowParagraphs] = useState(false);
  const [isEditingLSM, setIsEditingLSM] = useState(false);
  const [editedLSM, setEditedLSM] = useState(lsmText || question.textLSM || '');
  const [isSaving, setIsSaving] = useState(false);

  // Obtener los párrafos relacionados con esta pregunta
  const relatedParagraphs = paragraphs.filter(p =>
    question.paragraphs.includes(p.number)
  );

  // Función para formatear el contenido con textos bíblicos en azul
  const formatContent = (text: string) => {
    // Buscar patrones de referencias bíblicas entre paréntesis
    const parts = text.split(/(\([^)]+\))/g);

    return parts.map((part, index) => {
      // Si es una referencia bíblica (está entre paréntesis)
      if (part.startsWith('(') && part.endsWith(')')) {
        return (
          <span key={index} className="text-blue-600 font-medium">
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
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
    // Shift+Enter permite salto de línea normal
  };

  const currentLSMText = lsmText || question.textLSM;

  return (
    <>
      {/* Subtítulo de sección (si existe) */}
      {question.section && (
        <div className="mb-6 mt-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center uppercase tracking-wide">
              {question.section}
            </h2>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md p-6 mb-4">
        {/* Número de pregunta */}
        <div className="flex items-start gap-4 mb-4">
        <span className="text-2xl font-bold text-gray-700 min-w-[60px]">
          {question.number}.
        </span>

        {/* Preguntas en español y LSM */}
        <div className="flex-1">
          {/* Pregunta en español */}
          <div className="mb-2">
            <p className="text-xl font-semibold text-gray-800 leading-relaxed">
              {question.textEs}
            </p>
          </div>

          {/* Pregunta en LSM - Modo visualización o edición */}
          {isEditingLSM ? (
            <div className="mt-3 p-4 bg-blue-50 rounded-lg border-2 border-blue-500 shadow-sm">
              <p className="text-sm text-blue-700 mb-2 font-semibold">✍️ Editar LSM (Enter para guardar, Shift+Enter para nueva línea):</p>
              <textarea
                value={editedLSM}
                onChange={(e) => setEditedLSM(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full p-4 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-xl font-semibold text-gray-900 bg-white shadow-inner"
                rows={4}
                placeholder="Escribe la pregunta en LSM..."
                autoFocus
              />
              <div className="flex gap-2 mt-3">
                <button
                  onClick={handleSaveLSM}
                  disabled={isSaving}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors font-medium shadow-sm"
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
          ) : (
            <>
              {currentLSMText ? (
                <div className="mt-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500 shadow-sm group relative">
                  <p className="text-sm text-blue-700 mb-2 font-semibold">🤟 LSM:</p>
                  <p className="text-2xl font-bold text-gray-900 leading-relaxed">
                    {currentLSMText}
                  </p>
                  <button
                    onClick={() => setIsEditingLSM(true)}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 font-medium shadow-sm"
                  >
                    ✏️ Editar
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsEditingLSM(true)}
                  className="mt-3 w-full p-3 bg-blue-50 border-2 border-dashed border-blue-300 rounded-lg hover:bg-blue-100 transition-colors text-blue-600 font-medium"
                >
                  ➕ Agregar pregunta en LSM
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {/* Botón discreto para mostrar párrafos */}
      <div className="mt-4">
        <button
          onClick={() => setShowParagraphs(!showParagraphs)}
          className="text-sm px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600 hover:text-gray-800"
        >
          {showParagraphs ? '▼' : '▶'} Párrafos {question.paragraphs.join(', ')}
        </button>

        {/* Contenido de los párrafos */}
        {showParagraphs && (
          <div className="mt-4 space-y-4">
            {relatedParagraphs.map((paragraph) => (
              <div key={paragraph.number} className="border-l-4 border-gray-300 pl-4">
                <p className="text-base leading-relaxed text-gray-700">
                  {formatContent(paragraph.content)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
}
