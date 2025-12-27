'use client';

import { useState } from 'react';
import { ArticleData } from '@/types/atalaya';

interface TimelineViewProps {
  article: ArticleData;
  lsmData: Record<string, string>;
  favorites: Record<string, boolean>;
  onToggleFavorite: (favoriteId: string) => void;
  hiddenCards: Record<string, boolean>;
  onToggleHidden: (cardId: string) => void;
  onLSMUpdate: (questionNumber: string, text: string) => void;
  articleId: string;
}

export default function TimelineView({
  article,
  lsmData,
}: TimelineViewProps) {
  // Estado para modal de infografía
  const [selectedInfographic, setSelectedInfographic] = useState<string | null>(null);
  const [selectedQuestionNumber, setSelectedQuestionNumber] = useState<string>('');
  const [infographicCopied, setInfographicCopied] = useState(false);

  // Obtener resumen/oraciones clave de los párrafos relacionados
  const getSummaryForQuestion = (paragraphNumbers: number[]): string => {
    const relatedParagraphs = article.paragraphs.filter(p =>
      paragraphNumbers.includes(p.number)
    );

    const summaries = relatedParagraphs
      .filter(p => p.summary)
      .map(p => p.summary);

    if (summaries.length > 0) {
      return summaries.join(' ');
    }

    if (relatedParagraphs.length > 0 && relatedParagraphs[0].content) {
      const content = relatedParagraphs[0].content;
      return content.length > 150 ? content.substring(0, 150) + '...' : content;
    }

    return '';
  };

  // Solo mostrar preguntas normales (no de repaso) - Timeline es para infografías
  const questionsWithContent = article.questions.filter(q =>
    q.infographic || q.paragraphs.length > 0
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-8 text-center">
        <p className="text-sm text-slate-500 mb-1">
          Artículo {article.metadata.articleNumber} | {article.metadata.week}
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          {article.title}
        </h1>
        <p className="text-slate-600">{article.theme}</p>
      </div>

      {/* Canción inicial */}
      <div className="mb-8 p-3 bg-amber-50 rounded-lg text-center border border-amber-200">
        <p className="text-amber-800 font-medium text-sm">{article.song}</p>
      </div>

      {/* Galería de Infografías */}
      <div className="space-y-8">
        {questionsWithContent.map((question, idx) => {
          const lsmText = lsmData[question.number];
          const summary = getSummaryForQuestion(question.paragraphs);

          return (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-200 hover:-translate-y-1"
            >
              {/* INFOGRAFÍA - Elemento principal */}
              {question.infographic ? (
                <div
                  className="relative cursor-pointer group"
                  onClick={() => {
                    setSelectedInfographic(question.infographic!);
                    setSelectedQuestionNumber(question.number);
                  }}
                >
                  <img
                    src={question.infographic}
                    alt={`Infografía - Párrafos ${question.paragraphs.join(', ')}`}
                    className="w-full h-auto"
                  />
                  {/* Overlay para indicar que es clickeable */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
                      <span>🔍</span> Ver más grande
                    </span>
                  </div>
                </div>
              ) : (
                <div className="h-32 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <span className="text-slate-400 text-sm">📄 Sin infografía disponible</span>
                </div>
              )}

              {/* Información del párrafo - Debajo de la infografía */}
              <div className="p-5 space-y-4">
                {/* Número de párrafos */}
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold">
                    📍 Párrafo{question.paragraphs.length > 1 ? 's' : ''} {question.paragraphs.join(', ')}
                  </span>
                </div>

                {/* Oración clave / Resumen */}
                {summary && (
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-500 flex-shrink-0">📝</span>
                      <p className="text-blue-800 font-medium text-sm leading-relaxed">
                        {summary}
                      </p>
                    </div>
                  </div>
                )}

                {/* Pregunta en español */}
                <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-slate-300">
                  <div className="flex items-start gap-2">
                    <span className="text-slate-500 flex-shrink-0">❓</span>
                    <p className="text-slate-700 leading-relaxed">
                      {question.textEs}
                    </p>
                  </div>
                </div>

                {/* Pregunta en LSM */}
                {lsmText && (
                  <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-400">
                    <div className="flex items-start gap-2">
                      <span className="flex-shrink-0">🤟</span>
                      <div>
                        <span className="text-xs text-indigo-600 font-semibold uppercase">LSM</span>
                        <p className="text-indigo-800 font-bold mt-1 whitespace-pre-line">
                          {lsmText}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Canción final */}
      <div className="mt-8 p-4 bg-amber-50 rounded-lg text-center border border-amber-200">
        <p className="text-amber-800 font-medium">{article.finalSong}</p>
      </div>

      {/* Modal para ver infografía en grande */}
      {selectedInfographic && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
          onClick={() => setSelectedInfographic(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <span className="text-xl">🖼️</span>
                <h3 className="text-lg font-bold">Infografía - Pregunta {selectedQuestionNumber}</h3>
              </div>
              <div className="flex items-center gap-2">
                {/* Botón copiar */}
                <button
                  onClick={async () => {
                    const question = article.questions.find(q => q.number === selectedQuestionNumber);
                    const textToCopy = `Infografía - Pregunta ${selectedQuestionNumber}\n\n${question?.textEs || ''}\n\nURL: ${selectedInfographic}`;
                    await navigator.clipboard.writeText(textToCopy);
                    setInfographicCopied(true);
                    setTimeout(() => setInfographicCopied(false), 2000);
                  }}
                  className={`w-10 h-10 ${infographicCopied ? 'bg-green-500' : 'bg-white/20 hover:bg-white/30'} rounded-lg flex items-center justify-center transition-all`}
                  title={infographicCopied ? '¡Copiado!' : 'Copiar enlace'}
                >
                  {infographicCopied ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  )}
                </button>
                {/* Botón cerrar */}
                <button
                  onClick={() => setSelectedInfographic(null)}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all"
                  title="Cerrar"
                >
                  <span className="text-2xl font-bold text-white">×</span>
                </button>
              </div>
            </div>

            {/* Imagen */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-4 flex items-center justify-center bg-slate-100">
              <img
                src={selectedInfographic}
                alt="Infografía"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
