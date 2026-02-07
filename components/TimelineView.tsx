'use client';

import { useState } from 'react';
import { ArticleData } from '@/types/atalaya';
import { isExecutiveDesign as checkExecutiveDesign } from '@/data/design-config';

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

  // Determinar si usar diseño ejecutivo (usando configuración centralizada)
  const isExecutiveDesign = checkExecutiveDesign(article.metadata.articleNumber);

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

  // ═══════════════════════════════════════════════════════════════════════════
  // DISEÑO EJECUTIVO (Artículos 43+)
  // ═══════════════════════════════════════════════════════════════════════════
  if (isExecutiveDesign) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header Ejecutivo */}
        <div className="mb-10 text-center">
          <p className="text-xs font-bold text-text-tertiary uppercase tracking-[0.2em] mb-3">
            Artículo {article.metadata.articleNumber} • {article.metadata.week}
          </p>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-text-primary mb-3">
            {article.title}
          </h1>
          <p className="text-text-muted text-sm">{article.theme}</p>
        </div>

        {/* Canción inicial - Ejecutivo */}
        <div className="mb-10 bg-surface border border-border rounded-xl p-4 text-center shadow-sm">
          <p className="text-xs font-bold text-text-tertiary uppercase tracking-wider mb-1">Canción</p>
          <p className="text-text-body font-medium">{article.song}</p>
        </div>

        {/* Timeline Ejecutivo */}
        <div className="relative">
          {/* Línea vertical del timeline */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--gradient-from)] via-[var(--color-border)] to-[var(--gradient-from)]"></div>

          <div className="space-y-8">
            {questionsWithContent.map((question, idx) => {
              const lsmText = lsmData[question.number];
              const summary = getSummaryForQuestion(question.paragraphs);

              return (
                <div key={idx} className="relative pl-16">
                  {/* Nodo del timeline */}
                  <div className="absolute left-4 top-6 w-5 h-5 bg-surface border-2 border-border-strong rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-text-tertiary rounded-full"></div>
                  </div>

                  {/* Tarjeta principal */}
                  <div className="bg-surface border border-border rounded-xl shadow-sm overflow-hidden">
                    {/* Badge de párrafo */}
                    <div className="px-5 py-3 bg-surface-alt border-b border-border-subtle">
                      <span className="text-xs font-bold text-text-muted uppercase tracking-[0.1em]">
                        Párrafo{question.paragraphs.length > 1 ? 's' : ''} {question.paragraphs.join(', ')}
                      </span>
                    </div>

                    {/* INFOGRAFÍA */}
                    {question.infographic ? (
                      <div
                        className="relative cursor-pointer group border-b border-border-subtle"
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
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-surface text-text-body px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2 border border-border">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="11" cy="11" r="8"/>
                              <path d="m21 21-4.3-4.3"/>
                              <path d="M11 8v6"/>
                              <path d="M8 11h6"/>
                            </svg>
                            Ampliar
                          </span>
                        </div>
                      </div>
                    ) : null}

                    {/* Contenido */}
                    <div className="p-5 space-y-4">
                      {/* Resumen / Oración clave */}
                      {summary && (
                        <div className="bg-surface-alt rounded-lg p-4 border-l-4 border-border-strong">
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-text-muted flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                              <polyline points="14,2 14,8 20,8"/>
                              <line x1="16" y1="13" x2="8" y2="13"/>
                              <line x1="16" y1="17" x2="8" y2="17"/>
                            </svg>
                            <div>
                              <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">Contenido clave</p>
                              <p className="text-text-body text-sm leading-relaxed">
                                {summary}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Pregunta en español */}
                      <div className="bg-emerald-50 dark:bg-emerald-950 rounded-lg p-4 border-l-4 border-emerald-500">
                        <div className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                            <path d="M12 17h.01"/>
                          </svg>
                          <div>
                            <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider mb-1">Pregunta</p>
                            <p className="text-text-body leading-relaxed">
                              {question.textEs}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Pregunta en LSM */}
                      {lsmText && (
                        <div className="bg-amber-50 dark:bg-amber-950 rounded-lg p-4 border-l-4 border-amber-500">
                          <div className="flex items-start gap-3">
                            <span className="text-lg flex-shrink-0">🤟</span>
                            <div>
                              <p className="text-xs font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider mb-1">LSM</p>
                              <p className="text-text-body font-medium whitespace-pre-line">
                                {lsmText}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Canción final - Ejecutivo */}
        <div className="mt-10 bg-surface border border-border rounded-xl p-5 text-center shadow-sm">
          <p className="text-xs font-bold text-text-tertiary uppercase tracking-wider mb-2">Canción Final</p>
          <p className="text-text-body font-medium">{article.finalSong}</p>
        </div>

        {/* Modal para ver infografía - Ejecutivo */}
        {selectedInfographic && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)'
            }}
            onClick={() => setSelectedInfographic(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] bg-surface rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header del modal - Ejecutivo (intentionally dark bg-slate-800) */}
              <div className="sticky top-0 bg-slate-800 text-white p-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="9" cy="9" r="2"/>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                  </svg>
                  <div>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Infografía</p>
                    <p className="font-semibold">Pregunta {selectedQuestionNumber}</p>
                  </div>
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
                    className={`w-10 h-10 ${infographicCopied ? 'bg-emerald-500' : 'bg-slate-700 hover:bg-slate-600'} rounded-lg flex items-center justify-center transition-all`}
                    title={infographicCopied ? '¡Copiado!' : 'Copiar enlace'}
                  >
                    {infographicCopied ? (
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    )}
                  </button>
                  {/* Botón cerrar */}
                  <button
                    onClick={() => setSelectedInfographic(null)}
                    className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-all"
                    title="Cerrar"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Imagen */}
              <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-4 flex items-center justify-center bg-surface-alt">
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

  // ═══════════════════════════════════════════════════════════════════════════
  // DISEÑO ORIGINAL (Artículos anteriores al 43)
  // ═══════════════════════════════════════════════════════════════════════════
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-8 text-center">
        <p className="text-sm text-text-muted mb-1">
          Artículo {article.metadata.articleNumber} | {article.metadata.week}
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
          {article.title}
        </h1>
        <p className="text-text-secondary">{article.theme}</p>
      </div>

      {/* Canción inicial */}
      <div className="mb-8 p-3 bg-amber-50 dark:bg-amber-950 rounded-lg text-center border border-amber-200 dark:border-amber-800">
        <p className="text-amber-800 dark:text-amber-300 font-medium text-sm">{article.song}</p>
      </div>

      {/* Galería de Infografías */}
      <div className="space-y-8">
        {questionsWithContent.map((question, idx) => {
          const lsmText = lsmData[question.number];
          const summary = getSummaryForQuestion(question.paragraphs);

          return (
            <div
              key={idx}
              className="bg-surface rounded-2xl shadow-lg overflow-hidden transition-transform duration-200 hover:-translate-y-1"
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
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-black/70 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
                      <span>🔍</span> Ver más grande
                    </span>
                  </div>
                </div>
              ) : (
                <div className="h-32 bg-gradient-to-br from-surface-raised to-[var(--color-border)] flex items-center justify-center">
                  <span className="text-text-tertiary text-sm">📄 Sin infografía disponible</span>
                </div>
              )}

              {/* Información del párrafo - Debajo de la infografía */}
              <div className="p-5 space-y-4">
                {/* Número de párrafos */}
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-300 rounded-full text-sm font-semibold">
                    📍 Párrafo{question.paragraphs.length > 1 ? 's' : ''} {question.paragraphs.join(', ')}
                  </span>
                </div>

                {/* Oración clave / Resumen */}
                {summary && (
                  <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4 border-l-4 border-blue-400 dark:border-blue-600">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-500 dark:text-blue-400 flex-shrink-0">📝</span>
                      <p className="text-blue-800 dark:text-blue-200 font-medium text-sm leading-relaxed">
                        {summary}
                      </p>
                    </div>
                  </div>
                )}

                {/* Pregunta en español */}
                <div className="bg-surface-alt rounded-lg p-4 border-l-4 border-border-strong">
                  <div className="flex items-start gap-2">
                    <span className="text-text-muted flex-shrink-0">❓</span>
                    <p className="text-text-body leading-relaxed">
                      {question.textEs}
                    </p>
                  </div>
                </div>

                {/* Pregunta en LSM */}
                {lsmText && (
                  <div className="bg-indigo-50 dark:bg-indigo-950 rounded-lg p-4 border-l-4 border-indigo-400 dark:border-indigo-600">
                    <div className="flex items-start gap-2">
                      <span className="flex-shrink-0">🤟</span>
                      <div>
                        <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold uppercase">LSM</span>
                        <p className="text-indigo-800 dark:text-indigo-200 font-bold mt-1 whitespace-pre-line">
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
      <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-950 rounded-lg text-center border border-amber-200 dark:border-amber-800">
        <p className="text-amber-800 dark:text-amber-300 font-medium">{article.finalSong}</p>
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
            className="relative max-w-4xl w-full max-h-[90vh] bg-surface rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal (intentionally dark gradient) */}
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
            <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-4 flex items-center justify-center bg-surface-raised">
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
