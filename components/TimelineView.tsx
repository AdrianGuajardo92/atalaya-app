'use client';

import { useState, useEffect } from 'react';
import { ArticleData, Question, ReviewQuestion, Paragraph } from '@/types/atalaya';
import FlashCards from './FlashCards';
import BiblicalCards from './BiblicalCards';

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

// Tipo unificado para preguntas normales y de repaso
interface TimelineQuestion {
  number: string;
  textEs?: string;
  question?: string;
  paragraphs: number[];
  answer?: string | string[];
  biblicalCards?: Array<{ reference: string; purpose: string; text: string }>;
  flashcards?: string[] | Array<{ question: string; answer: string }>;
  infographic?: string;
  reflectionQuestions?: string[];
  practicalApplications?: string[];
  isReview?: boolean;
}

export default function TimelineView({
  article,
  lsmData,
  favorites,
  onToggleFavorite,
  hiddenCards,
  onToggleHidden,
  onLSMUpdate,
  articleId
}: TimelineViewProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showAnswers, setShowAnswers] = useState<Record<number, boolean>>({});


  // Estado para flashcards personalizadas
  const [customFlashcardsMap, setCustomFlashcardsMap] = useState<Record<string, Array<{ question: string; answer: string; isCustom?: boolean }>>>({});

  // Estado para modal de infografía
  const [showInfographicModal, setShowInfographicModal] = useState(false);
  const [currentInfographicQuestion, setCurrentInfographicQuestion] = useState<TimelineQuestion | null>(null);
  const [infographicCopied, setInfographicCopied] = useState(false);

  // Combinar preguntas normales y de repaso
  const allQuestions: TimelineQuestion[] = [
    ...article.questions.map(q => ({
      ...q,
      isReview: false
    })),
    ...article.reviewQuestions.map((rq, idx) => ({
      number: `R${idx + 1}`,
      question: rq.question,
      paragraphs: [],
      answer: rq.answer,
      biblicalCards: rq.biblicalCards,
      flashcards: rq.flashcards,
      reflectionQuestions: rq.reflectionQuestions,
      practicalApplications: rq.practicalApplications,
      isReview: true
    }))
  ];

  // Cargar datos personalizados cuando se expande una pregunta
  useEffect(() => {
    if (expandedIndex === null) return;

    const question = allQuestions[expandedIndex];
    if (!question) return;

    const loadCustomData = async () => {
      const questionKey = question.isReview
        ? `review-${parseInt(question.number.replace('R', '')) - 1}`
        : question.number;

      // Cargar flashcards personalizadas
      try {
        const flashcardsResponse = await fetch(`/api/lsm?articleId=${articleId}&questionNumber=flashcards-${questionKey}`);
        if (flashcardsResponse.ok) {
          const data = await flashcardsResponse.json();
          if (data.lsmText) {
            setCustomFlashcardsMap(prev => ({
              ...prev,
              [questionKey]: JSON.parse(data.lsmText)
            }));
          }
        }
      } catch (error) {
        console.error('Error loading flashcards:', error);
      }
    };

    loadCustomData();
  }, [expandedIndex, articleId]);

  // Obtener resumen de los párrafos relacionados
  const getSummaryForQuestion = (question: TimelineQuestion): string => {
    if (question.isReview) {
      return question.question || '';
    }

    const relatedParagraphs = article.paragraphs.filter(p =>
      question.paragraphs.includes(p.number)
    );

    const summaries = relatedParagraphs
      .filter(p => p.summary)
      .map(p => p.summary);

    if (summaries.length > 0) {
      return summaries[0] || '';
    }

    if (relatedParagraphs.length > 0 && relatedParagraphs[0].content) {
      const content = relatedParagraphs[0].content;
      return content.length > 100 ? content.substring(0, 100) + '...' : content;
    }

    return question.textEs || '';
  };

  // Obtener texto LSM para una pregunta
  const getLsmText = (question: TimelineQuestion, idx: number): string | undefined => {
    if (question.isReview) {
      return lsmData[`review-${idx - article.questions.length}`];
    }
    return lsmData[question.number];
  };

  // Toggle respuesta
  const toggleAnswer = (idx: number) => {
    setShowAnswers(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // Obtener flashcards para una pregunta
  const getFlashcardsForQuestion = (question: TimelineQuestion): Array<{ question: string; answer: string; isCustom?: boolean }> => {
    const questionKey = question.isReview
      ? `review-${parseInt(question.number.replace('R', '')) - 1}`
      : question.number;

    // Primero intentar obtener flashcards personalizadas
    if (customFlashcardsMap[questionKey]) {
      return customFlashcardsMap[questionKey];
    }

    // Si no hay personalizadas, usar las originales
    if (!question.flashcards) return [];

    // Normalizar al formato de objetos
    if (Array.isArray(question.flashcards) && typeof question.flashcards[0] === 'string') {
      return (question.flashcards as string[]).map(q => ({ question: q, answer: '' }));
    }
    return question.flashcards as Array<{ question: string; answer: string }>;
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
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
      <div className="mb-6 p-3 bg-amber-50 rounded-lg text-center border border-amber-200">
        <p className="text-amber-800 font-medium text-sm">{article.song}</p>
      </div>

      {/* Timeline */}
      <div className="relative pl-8">
        {/* Línea vertical */}
        <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-300 via-blue-400 to-violet-400" />

        {allQuestions.map((question, idx) => {
          const isExpanded = expandedIndex === idx;
          const lsmText = getLsmText(question, idx);
          const paragraphNumbers = question.paragraphs?.join(', ') || '';
          const summary = getSummaryForQuestion(question);
          const isReviewSection = question.isReview && idx === article.questions.length;
          const questionKey = question.isReview
            ? `review-${parseInt(question.number.replace('R', '')) - 1}`
            : question.number;

          const flashcards = getFlashcardsForQuestion(question);

          return (
            <div key={idx}>
              {/* Separador de sección de repaso */}
              {isReviewSection && (
                <div className="relative mb-6 mt-8">
                  <div className="absolute left-0 w-6 h-6 rounded-full bg-violet-600 border-2 border-violet-600 flex items-center justify-center">
                    <span className="text-xs text-white font-bold">?</span>
                  </div>
                  <div className="ml-10 bg-gradient-to-r from-violet-100 to-violet-50 rounded-lg p-3 border border-violet-200">
                    <h3 className="font-bold text-violet-800 text-sm uppercase tracking-wide">
                      ¿Qué responderías?
                    </h3>
                  </div>
                </div>
              )}

              <div className="relative mb-4">
                {/* Punto del timeline */}
                <div
                  className={`absolute left-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer ${
                    isExpanded
                      ? question.isReview
                        ? 'bg-violet-600 border-violet-600 scale-110'
                        : 'bg-blue-600 border-blue-600 scale-110'
                      : question.isReview
                        ? 'bg-white border-violet-300 hover:border-violet-400'
                        : 'bg-white border-blue-300 hover:border-blue-400'
                  }`}
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                >
                  {isExpanded ? (
                    <span className="text-xs text-white font-bold">✓</span>
                  ) : (
                    <span className={`text-xs font-bold ${question.isReview ? 'text-violet-400' : 'text-blue-400'}`}>
                      {question.isReview ? question.number.replace('R', '') : question.number.split(',')[0]}
                    </span>
                  )}
                </div>

                {/* Contenido colapsable */}
                <div className="ml-10">
                  {/* Header - Siempre visible */}
                  <div
                    className={`flex items-center justify-between p-3 rounded-lg transition-colors cursor-pointer ${
                      isExpanded
                        ? question.isReview
                          ? 'bg-violet-100'
                          : 'bg-blue-100'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold text-sm ${question.isReview ? 'text-violet-800' : 'text-gray-800'}`}>
                        {question.isReview
                          ? `Repaso ${question.number.replace('R', '')}`
                          : paragraphNumbers
                            ? `Párrafo${question.paragraphs.length > 1 ? 's' : ''} ${paragraphNumbers}`
                            : `Pregunta ${question.number}`
                        }
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">{summary}</p>
                    </div>
                    <span className={`text-lg ml-2 flex-shrink-0 ${isExpanded ? 'text-gray-600' : 'text-gray-400'}`}>
                      {isExpanded ? '▼' : '▶'}
                    </span>
                  </div>

                  {/* Contenido expandido - IGUAL QUE ESTUDIO */}
                  {isExpanded && (
                    <div className="mt-3 space-y-4">
                      {/* Pregunta en español */}
                      <div className="bg-slate-50 rounded-lg p-4 border-l-2 border-slate-300">
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="text-xs font-medium text-slate-500">Español</div>
                          {question.infographic && (
                            <button
                              onClick={() => {
                                setCurrentInfographicQuestion(question);
                                setShowInfographicModal(true);
                              }}
                              className="w-7 h-7 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-all shadow-sm hover:shadow-md"
                              title="Ver infografía"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </button>
                          )}
                        </div>
                        <p className="text-base text-slate-800 leading-relaxed">
                          {question.textEs || question.question}
                        </p>
                      </div>

                      {/* LSM */}
                      {lsmText && (
                        <div className="bg-indigo-50 rounded-lg p-4 border-l-2 border-indigo-400">
                          <div className="text-xs font-semibold text-indigo-700 mb-2">🤟 LSM</div>
                          <p className="text-base text-indigo-800 font-medium leading-relaxed whitespace-pre-line">
                            {lsmText}
                          </p>
                        </div>
                      )}

                      {/* Respuesta (expandible) */}
                      {question.answer && (
                        <div className="bg-emerald-50 rounded-lg p-4 border-l-2 border-emerald-500">
                          {/* Toggle para mostrar/ocultar respuesta */}
                          <div
                            className="cursor-pointer mb-3"
                            onClick={() => toggleAnswer(idx)}
                          >
                            <div className="text-sm text-emerald-700 flex items-center gap-2">
                              <span>{showAnswers[idx] ? '▼' : '▶'}</span>
                              <span className="font-medium">
                                {showAnswers[idx] ? 'Ocultar respuesta' : 'Ver respuesta'}
                              </span>
                            </div>
                          </div>

                          {showAnswers[idx] && (
                            <>
                              <div className="text-xs font-semibold text-emerald-700 mb-3">💡 Respuesta</div>

                              {/* Respuesta en oraciones clave */}
                              {question.answer && (
                                Array.isArray(question.answer) ? (
                                  question.answer.length > 0 && (
                                    <div className="space-y-2 mb-4">
                                      {question.answer.map((sentence, i) => (
                                        <div
                                          key={i}
                                          className="flex items-start gap-3 p-3 bg-white rounded-lg border border-emerald-100"
                                        >
                                          <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                            {i + 1}
                                          </span>
                                          <p className="text-slate-800 leading-relaxed">
                                            {sentence}
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                  )
                                ) : (
                                  <p className="text-base text-slate-800 leading-relaxed mb-4">
                                    {question.answer}
                                  </p>
                                )
                              )}

                            </>
                          )}
                        </div>
                      )}

                      {/* Tarjetas Didácticas */}
                      {flashcards.length > 0 && (
                        <FlashCards
                          cards={flashcards}
                          questionNumber={questionKey}
                          favorites={favorites}
                          onToggleFavorite={onToggleFavorite}
                          lsmData={lsmData}
                          onLSMUpdate={onLSMUpdate}
                          hiddenCards={hiddenCards}
                          onToggleHidden={onToggleHidden}
                          articleId={articleId}
                        />
                      )}

                      {/* Textos Bíblicos */}
                      {question.biblicalCards && question.biblicalCards.length > 0 && (
                        <BiblicalCards
                          cards={question.biblicalCards}
                          questionNumber={questionKey}
                          favorites={favorites}
                          onToggleFavorite={onToggleFavorite}
                          hiddenCards={hiddenCards}
                          onToggleHidden={onToggleHidden}
                        />
                      )}

                      {/* Preguntas de Reflexión Personal */}
                      {question.reflectionQuestions && question.reflectionQuestions.length > 0 && (
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border-2 border-purple-300">
                          <div className="text-xs font-semibold text-purple-700 mb-3">💭 Preguntas de Reflexión Personal</div>
                          <div className="space-y-2">
                            {question.reflectionQuestions.map((reflection, rIdx) => (
                              <div
                                key={rIdx}
                                className="border rounded-lg p-3 bg-white border-purple-200"
                              >
                                <p className="text-sm text-purple-900 leading-relaxed font-medium">{reflection}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Aplicaciones Prácticas */}
                      {question.practicalApplications && question.practicalApplications.length > 0 && (
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-2 border-blue-300">
                          <div className="text-xs font-semibold text-blue-700 mb-3">✅ Aplicaciones Prácticas</div>
                          <div className="space-y-2">
                            {question.practicalApplications.map((application, aIdx) => (
                              <div
                                key={aIdx}
                                className="border rounded-lg p-3 bg-white border-blue-200"
                              >
                                <p className="text-sm text-blue-900 leading-relaxed font-medium">{application}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Canción final */}
      <div className="mt-8 p-4 bg-amber-50 rounded-lg text-center border border-amber-200">
        <p className="text-amber-800 font-medium">{article.finalSong}</p>
      </div>

      {/* Modal de infografía */}
      {showInfographicModal && currentInfographicQuestion?.infographic && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
          onClick={() => setShowInfographicModal(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 rounded-t-xl flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-bold">Infografía - Pregunta {currentInfographicQuestion.number}</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={async () => {
                    const textToCopy = `Infografía - Pregunta ${currentInfographicQuestion.number}\n\n${currentInfographicQuestion.textEs || currentInfographicQuestion.question}\n\nURL: ${currentInfographicQuestion.infographic}`;
                    await navigator.clipboard.writeText(textToCopy);
                    setInfographicCopied(true);
                    setTimeout(() => setInfographicCopied(false), 2000);
                  }}
                  className={`w-10 h-10 ${infographicCopied ? 'bg-green-500 border-green-400' : 'bg-white/20 hover:bg-white/30 border-white/40'} rounded-lg flex items-center justify-center transition-all border shadow-sm`}
                  title={infographicCopied ? '¡Copiado!' : 'Copiar enlace'}
                  style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))' }}
                >
                  {infographicCopied ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={() => setShowInfographicModal(false)}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 border border-white/40 rounded-lg flex items-center justify-center transition-all shadow-sm"
                  title="Cerrar"
                  style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))' }}
                >
                  <span className="text-2xl font-bold text-white">×</span>
                </button>
              </div>
            </div>

            {/* Contenido - Imagen de la infografía */}
            <div className="p-4">
              <img
                src={currentInfographicQuestion.infographic}
                alt={`Infografía para la pregunta ${currentInfographicQuestion.number}`}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Footer del modal */}
            <div className="sticky bottom-0 bg-slate-50 p-4 rounded-b-xl border-t border-slate-200 text-center">
              <button
                onClick={() => setShowInfographicModal(false)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
