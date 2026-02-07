'use client';

import { useState } from 'react';
import { ArticleData } from '@/types/atalaya';
import { isExecutiveDesign as checkExecutiveDesign } from '@/data/design-config';
import { getAllBiblicalTexts } from '@/data/articles';

// Textos bíblicos centralizados
const biblicalTexts = getAllBiblicalTexts();

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
  const [expandedAnswers, setExpandedAnswers] = useState<Record<number, boolean>>({});
  const [expandedContext, setExpandedContext] = useState<Record<number, boolean>>({});
  const [expandedReadText, setExpandedReadText] = useState<Record<number, boolean>>({});
  const [expandedFlashcards, setExpandedFlashcards] = useState<Record<number, boolean>>({});
  const [revealedFlashcards, setRevealedFlashcards] = useState<Record<string, boolean>>({});
  const [expandedReview, setExpandedReview] = useState<Record<number, boolean>>({});

  // Helper para renderizar negritas (**texto**)
  const renderBoldText = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

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

  // Pre-computar límites de sección para el timeline
  const sectionBoundaries = new Map<number, { section: string; sectionIndex: number }>();
  let _currentSection = '';
  let _sectionCounter = 0;
  questionsWithContent.forEach((q, idx) => {
    if (q.section && q.section !== _currentSection) {
      _sectionCounter++;
      _currentSection = q.section;
      sectionBoundaries.set(idx, { section: q.section, sectionIndex: _sectionCounter });
    }
  });

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

        {/* Mini contador de progreso */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="px-3 py-1 bg-surface border border-border rounded-full text-xs font-medium text-text-muted shadow-sm">
            {questionsWithContent.length} preguntas
          </span>
          <span className="text-text-tertiary text-xs">|</span>
          <span className="px-3 py-1 bg-surface border border-border rounded-full text-xs font-medium text-text-muted shadow-sm">
            {article.paragraphs.length} párrafos
          </span>
          {_sectionCounter > 0 && (
            <>
              <span className="text-text-tertiary text-xs">|</span>
              <span className="px-3 py-1 bg-surface border border-border rounded-full text-xs font-medium text-text-muted shadow-sm">
                {_sectionCounter} secciones
              </span>
            </>
          )}
        </div>

        {/* Timeline Ejecutivo */}
        <div className="relative">
          {/* Línea vertical del timeline */}
          <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--gradient-from)] via-[var(--color-border)] to-[var(--gradient-from)]"></div>

          <div className="space-y-6">
            {questionsWithContent.map((question, idx) => {
              const lsmText = lsmData[question.number];
              const summary = getSummaryForQuestion(question.paragraphs);
              const isAnswerExpanded = expandedAnswers[idx] || false;
              const sectionInfo = sectionBoundaries.get(idx);

              return (
                <div key={idx}>
                  {/* Separador de sección */}
                  {sectionInfo && (
                    <div className="relative pl-14 mb-6 mt-2">
                      {/* Nodo de sección en el timeline */}
                      <div className="absolute left-[7px] top-1/2 -translate-y-1/2 w-[23px] h-[23px] bg-slate-800 dark:bg-slate-600 rounded-full flex items-center justify-center shadow-md z-10">
                        <span className="text-white text-[10px] font-bold">{sectionInfo.sectionIndex}</span>
                      </div>
                      <div className="bg-slate-800 dark:bg-slate-700 rounded-lg px-5 py-3 shadow-lg">
                        <h2 className="text-sm md:text-base font-bold text-white text-center uppercase tracking-[0.12em]">
                          {sectionInfo.section}
                        </h2>
                      </div>
                    </div>
                  )}

                  <div className="relative pl-14">
                    {/* Nodo del timeline con número */}
                    <div className="absolute left-[7px] top-6 w-[23px] h-[23px] bg-surface border-2 border-border-strong rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-[10px] font-bold text-text-muted">{idx + 1}</span>
                    </div>

                    {/* Tarjeta principal */}
                    <div className="bg-surface border border-border rounded-xl shadow-sm overflow-hidden">
                      {/* Header con párrafo + número de pregunta */}
                      <div className="px-5 py-3 bg-surface-alt border-b border-border-subtle flex items-center justify-between">
                        <span className="text-xs font-bold text-text-muted uppercase tracking-[0.1em]">
                          Párrafo{question.paragraphs.length > 1 ? 's' : ''} {question.paragraphs.join(', ')}
                        </span>
                        <span className="text-xs text-text-tertiary">
                          {idx + 1} / {questionsWithContent.length}
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
                        {/* Imagen ilustrativa de la pregunta */}
                        {question.image && (
                          <div className="rounded-lg overflow-hidden border border-border">
                            <img
                              src={question.image}
                              alt={question.imageCaption || `Ilustración - Pregunta ${question.number}`}
                              className="w-full h-auto"
                            />
                            {question.imageCaption && (
                              <p className="px-4 py-2 bg-surface-alt text-text-muted text-xs italic leading-relaxed border-t border-border-subtle">
                                {question.imageCaption}
                              </p>
                            )}
                          </div>
                        )}

                        {/* Resumen / Contenido clave */}
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
                                  {renderBoldText(summary)}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Texto bíblico a leer (readText) */}
                        {question.readText && (
                          <div className="bg-indigo-50 dark:bg-indigo-950 rounded-lg overflow-hidden border border-indigo-200 dark:border-indigo-800">
                            <button
                              onClick={() => setExpandedReadText(prev => ({ ...prev, [idx]: !prev[idx] }))}
                              className="w-full flex items-center justify-between px-4 py-3 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                            >
                              <span className="flex items-center gap-2">
                                <span className="text-lg">📖</span>
                                <span className="font-medium text-indigo-800 dark:text-indigo-200 text-sm">{question.readText}</span>
                              </span>
                              <svg
                                className={`w-4 h-4 text-indigo-500 transition-transform duration-200 ${expandedReadText[idx] ? 'rotate-180' : ''}`}
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                              >
                                <path d="M6 9l6 6 6-6"/>
                              </svg>
                            </button>
                            {expandedReadText[idx] && biblicalTexts[question.readText] && (
                              <div className="px-4 pb-4 space-y-3 animate-fadeIn">
                                <div className="h-px bg-indigo-200 dark:bg-indigo-800"></div>
                                {biblicalTexts[question.readText].map((text, tIdx) => (
                                  <div key={tIdx} className="bg-surface rounded-lg p-3 border-l-4 border-indigo-400 dark:border-indigo-600">
                                    <p className="text-xs font-bold text-indigo-700 dark:text-indigo-300 mb-1">{text.reference}</p>
                                    <p className="text-text-body text-sm italic leading-relaxed font-serif">{text.text}</p>
                                  </div>
                                ))}
                              </div>
                            )}
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
                              <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider mb-1">Pregunta {question.number}</p>
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

                        {/* Respuesta expandible */}
                        {question.answer && (
                          <div>
                            <button
                              onClick={() => setExpandedAnswers(prev => ({ ...prev, [idx]: !prev[idx] }))}
                              className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                isAnswerExpanded
                                  ? 'bg-surface-raised text-text-primary'
                                  : 'bg-surface-raised text-text-secondary hover:text-text-primary'
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                <svg
                                  className={`w-4 h-4 transition-transform duration-200 ${isAnswerExpanded ? 'rotate-90' : ''}`}
                                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                >
                                  <path d="M9 18l6-6-6-6"/>
                                </svg>
                                Respuesta
                              </span>
                              <span className="text-xs text-text-tertiary">
                                {isAnswerExpanded ? 'Ocultar' : 'Mostrar'}
                              </span>
                            </button>
                            {isAnswerExpanded && (
                              <div className="mt-3 space-y-2 animate-fadeIn">
                                {(Array.isArray(question.answer) ? question.answer : [question.answer]).map((ans, ansIdx) => (
                                  <div key={ansIdx} className="flex gap-3 px-4">
                                    <span className="text-text-tertiary font-mono text-xs flex-shrink-0 mt-1">[{ansIdx + 1}]</span>
                                    <p className="text-text-body text-sm leading-relaxed">{renderBoldText(ans)}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        {/* Contexto adicional (answerContext) */}
                        {question.answerContext && question.answerContext.length > 0 && (
                          <div>
                            <button
                              onClick={() => setExpandedContext(prev => ({ ...prev, [idx]: !prev[idx] }))}
                              className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                expandedContext[idx]
                                  ? 'bg-violet-50 dark:bg-violet-950 text-violet-700 dark:text-violet-300'
                                  : 'bg-surface-raised text-text-secondary hover:text-text-primary'
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                <svg
                                  className={`w-4 h-4 transition-transform duration-200 ${expandedContext[idx] ? 'rotate-90' : ''}`}
                                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                >
                                  <path d="M9 18l6-6-6-6"/>
                                </svg>
                                Profundizar
                              </span>
                              <span className="text-xs text-text-tertiary">
                                {expandedContext[idx] ? 'Ocultar' : 'Mostrar'}
                              </span>
                            </button>
                            {expandedContext[idx] && (
                              <div className="mt-3 space-y-2 animate-fadeIn px-4">
                                {question.answerContext.map((ctx, ctxIdx) => (
                                  <div key={ctxIdx} className="flex gap-3">
                                    <span className="text-violet-400 dark:text-violet-500 text-xs flex-shrink-0 mt-1">▸</span>
                                    <p className="text-text-muted text-sm leading-relaxed">{renderBoldText(ctx)}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        {/* Mini-quiz con flashcards */}
                        {question.flashcards && question.flashcards.length > 0 && (() => {
                          // Normalizar flashcards: pueden ser string[] o {question, answer}[]
                          const normalizedFc = question.flashcards!.map(fc =>
                            typeof fc === 'string'
                              ? { question: fc, answer: '' }
                              : fc
                          );
                          return (
                            <div>
                              <button
                                onClick={() => setExpandedFlashcards(prev => ({ ...prev, [idx]: !prev[idx] }))}
                                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                  expandedFlashcards[idx]
                                    ? 'bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300'
                                    : 'bg-surface-raised text-text-secondary hover:text-text-primary'
                                }`}
                              >
                                <span className="flex items-center gap-2">
                                  <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${expandedFlashcards[idx] ? 'rotate-90' : ''}`}
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                  >
                                    <path d="M9 18l6-6-6-6"/>
                                  </svg>
                                  Ponme a prueba
                                  <span className="text-xs bg-surface border border-border rounded-full px-2 py-0.5 text-text-tertiary">{normalizedFc.length}</span>
                                </span>
                                <span className="text-xs text-text-tertiary">
                                  {expandedFlashcards[idx] ? 'Ocultar' : 'Mostrar'}
                                </span>
                              </button>
                              {expandedFlashcards[idx] && (
                                <div className="mt-3 space-y-3 animate-fadeIn">
                                  {normalizedFc.map((fc, fcIdx) => {
                                    const fcKey = `${idx}-${fcIdx}`;
                                    const isRevealed = revealedFlashcards[fcKey] || false;
                                    return (
                                      <div key={fcIdx} className="mx-4 bg-surface-alt rounded-lg border border-border overflow-hidden">
                                        <div className="px-4 py-3">
                                          <p className="text-text-body text-sm font-medium">{fc.question}</p>
                                        </div>
                                        {fc.answer && (
                                          <>
                                            <button
                                              onClick={() => setRevealedFlashcards(prev => ({ ...prev, [fcKey]: !prev[fcKey] }))}
                                              className="w-full px-4 py-2 bg-surface-raised border-t border-border text-xs font-medium text-text-muted hover:text-text-primary transition-colors"
                                            >
                                              {isRevealed ? 'Ocultar respuesta' : 'Ver respuesta'}
                                            </button>
                                            {isRevealed && (
                                              <div className="px-4 py-3 bg-cyan-50 dark:bg-cyan-950 border-t border-cyan-200 dark:border-cyan-800 animate-fadeIn">
                                                <p className="text-cyan-800 dark:text-cyan-200 text-sm leading-relaxed">{fc.answer}</p>
                                              </div>
                                            )}
                                          </>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Canción final - Ejecutivo */}
        <div className="mt-10 bg-surface-alt border border-border rounded-xl p-5 text-center shadow-sm">
          <p className="text-xs font-bold text-text-tertiary uppercase tracking-wider mb-2">Canción Final</p>
          <p className="text-text-body font-medium">{article.finalSong}</p>
        </div>

        {/* Bloque de Repaso Final */}
        {article.reviewQuestions && article.reviewQuestions.length > 0 && (
          <div className="mt-10">
            {/* Separador decorativo */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300 dark:via-amber-600 to-transparent"></div>
              <span className="text-amber-400 dark:text-amber-500 text-sm">✦</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300 dark:via-amber-600 to-transparent"></div>
            </div>

            <div className="bg-surface border border-border rounded-xl shadow-sm overflow-hidden">
              <div className="px-6 py-4 bg-slate-800 dark:bg-slate-700">
                <h2 className="text-base font-bold text-white text-center uppercase tracking-[0.15em]">
                  Repaso
                </h2>
                <p className="text-slate-400 text-xs text-center mt-1">{article.reviewQuestions.length} preguntas de repaso</p>
              </div>

              <div className="divide-y divide-border">
                {article.reviewQuestions.map((rq, rIdx) => {
                  const isExpanded = expandedReview[rIdx] || false;
                  return (
                    <div key={rIdx} className="px-5 py-4">
                      <div className="flex items-start gap-3">
                        <span className="text-text-tertiary font-mono text-xs flex-shrink-0 mt-1 w-5 text-center">{rIdx + 1}</span>
                        <div className="flex-1">
                          <p className="text-text-body text-sm leading-relaxed font-medium">{rq.question}</p>
                          {rq.answer && (
                            <button
                              onClick={() => setExpandedReview(prev => ({ ...prev, [rIdx]: !prev[rIdx] }))}
                              className="mt-2 text-xs font-medium text-text-muted hover:text-text-primary transition-colors flex items-center gap-1"
                            >
                              <svg
                                className={`w-3 h-3 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                              >
                                <path d="M9 18l6-6-6-6"/>
                              </svg>
                              {isExpanded ? 'Ocultar' : 'Ver respuesta'}
                            </button>
                          )}
                          {isExpanded && rq.answer && (
                            <div className="mt-3 space-y-2 animate-fadeIn">
                              {(Array.isArray(rq.answer) ? rq.answer : [rq.answer]).map((ans, ansIdx) => (
                                <div key={ansIdx} className="flex gap-2">
                                  <span className="text-text-tertiary font-mono text-xs flex-shrink-0 mt-0.5">[{ansIdx + 1}]</span>
                                  <p className="text-text-muted text-sm leading-relaxed">{renderBoldText(ans)}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

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
                        {renderBoldText(summary)}
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
