'use client';

import { useState, useEffect, useRef } from 'react';
import StudyHeader from '@/components/StudyHeader';
import QuestionCard from '@/components/QuestionCard';
import ReviewQuestionCard from '@/components/ReviewQuestionCard';
import SummaryView from '@/components/SummaryView';
import TimelineView from '@/components/TimelineView';
import Timer from '@/components/Timer';
import InstructionsButton from '@/components/InstructionsButton';
import PdfUploader from '@/components/PdfUploader';
import { ArticleSummaryCard } from '@/components/ArticleSummaryCard';
import { getArticleById, getAllActiveArticles } from '@/data/articles';
import { getDefaultArticleId } from '@/data/articles-config';
import { isExecutiveDesign } from '@/data/design-config';
import { ArticleData } from '@/types/atalaya';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  // Estado para manejo de artículos (usa la configuración centralizada)
  const [currentArticleId, setCurrentArticleId] = useState<string>(() => {
    // Intentar recuperar el artículo guardado en localStorage
    if (typeof window !== 'undefined') {
      const savedArticleId = localStorage.getItem('atalaya_current_article');
      if (savedArticleId) {
        // Verificar que el artículo guardado todavía existe
        const savedArticle = getArticleById(savedArticleId);
        if (savedArticle) {
          return savedArticleId;
        }
        // Si no existe, limpiar localStorage
        localStorage.removeItem('atalaya_current_article');
      }
    }
    return getDefaultArticleId();
  });
  const [currentArticle, setCurrentArticle] = useState<ArticleData | null>(null);
  const [monthArticles, setMonthArticles] = useState<ArticleData[]>([]);

  // Estados existentes
  const [viewMode, setViewMode] = useState<'study' | 'summary' | 'timeline'>('study');
  const [navigationMode, setNavigationMode] = useState<'scroll' | 'paginated'>('scroll');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(-1);
  const [lsmData, setLsmData] = useState<Record<string, string>>({});
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [hiddenCards, setHiddenCards] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [showPdfUploader, setShowPdfUploader] = useState(false);
  const [showViewOptions, setShowViewOptions] = useState(false);

  // Referencia para hacer scroll al contenido
  const contentRef = useRef<HTMLDivElement>(null);

  // Referencia para el menú de opciones de vista
  const viewMenuRef = useRef<HTMLDivElement>(null);

  // Cargar artículos activos al iniciar
  useEffect(() => {
    const articles = getAllActiveArticles();
    setMonthArticles(articles);

    // Cargar artículo actual
    const article = getArticleById(currentArticleId);
    if (article) {
      setCurrentArticle(article);
      setIsLoading(false); // Mostrar artículo inmediatamente
    } else {
      setIsLoading(false);
    }
  }, [currentArticleId]);

  // Cargar datos LSM, favoritos y tarjetas ocultas cuando cambia el artículo
  useEffect(() => {
    if (!currentArticleId) return;

    // Cargar datos en segundo plano SIN bloquear la UI
    Promise.all([
      fetch(`/api/lsm?articleId=${currentArticleId}`).then(res => res.json()).catch(() => ({})),
      fetch(`/api/favorites?articleId=${currentArticleId}`).then(res => res.json()).catch(() => ({})),
      fetch(`/api/hidden-cards?articleId=${currentArticleId}`).then(res => res.json()).catch(() => ({}))
    ])
      .then(([lsmDataResult, favoritesResult, hiddenCardsResult]) => {
        setLsmData(lsmDataResult);
        setFavorites(favoritesResult);
        setHiddenCards(hiddenCardsResult);
      });
  }, [currentArticleId]);

  // Hacer scroll al inicio cuando cambia la pregunta en modo paginado
  useEffect(() => {
    if (navigationMode === 'paginated' && contentRef.current) {
      // Scroll suave hacia el principio del contenido
      contentRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [currentQuestionIndex, currentReviewIndex, navigationMode]);

  // Detectar scroll y calcular progreso (solo en modo scroll)
  useEffect(() => {
    if (navigationMode !== 'scroll') return;

    let hideTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;

      setScrollProgress(Math.min(Math.round(progress), 100));
      setShowScrollIndicator(true);

      // Ocultar después de 2 segundos sin scroll
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        setShowScrollIndicator(false);
      }, 2000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(hideTimeout);
    };
  }, [navigationMode]);

  // Cerrar menú de opciones al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (viewMenuRef.current && !viewMenuRef.current.contains(e.target as Node)) {
        setShowViewOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Función para cambiar de artículo
  const handleArticleChange = (articleId: string) => {
    setCurrentArticleId(articleId);
    setCurrentQuestionIndex(0);
    setCurrentReviewIndex(-1);
    // Guardar en localStorage para persistir entre recargas
    localStorage.setItem('atalaya_current_article', articleId);
  };

  const handlePrevious = () => {
    if (!currentArticle) return;

    if (currentReviewIndex > 0) {
      // Estamos en preguntas de repaso, retroceder en ellas
      setCurrentReviewIndex(currentReviewIndex - 1);
    } else if (currentReviewIndex === 0) {
      // Estamos en la primera pregunta de repaso, volver a la última pregunta normal
      setCurrentReviewIndex(-1);
      setCurrentQuestionIndex(currentArticle.questions.length - 1);
    } else if (currentQuestionIndex > 0) {
      // Estamos en preguntas normales, retroceder
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (!currentArticle) return;

    if (currentReviewIndex >= 0) {
      // Estamos en preguntas de repaso
      if (currentReviewIndex < currentArticle.reviewQuestions.length - 1) {
        setCurrentReviewIndex(currentReviewIndex + 1);
      }
    } else if (currentQuestionIndex < currentArticle.questions.length - 1) {
      // Estamos en preguntas normales
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentQuestionIndex === currentArticle.questions.length - 1) {
      // Estamos en la última pregunta normal, pasar a preguntas de repaso
      setCurrentReviewIndex(0);
    }
  };

  const handleLSMUpdate = (questionNumber: string, text: string) => {
    setLsmData(prev => ({
      ...prev,
      [questionNumber]: text
    }));
  };

  const handleReviewLSMUpdate = (index: number, text: string) => {
    setLsmData(prev => ({
      ...prev,
      [`review-${index}`]: text
    }));
  };

  const handleTitleLSMUpdate = async (text: string) => {
    const newLsmData = {
      ...lsmData,
      'title': text
    };
    setLsmData(newLsmData);

    // Guardar en backend
    try {
      await fetch('/api/lsm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ articleId: currentArticleId, questionNumber: 'title', lsmText: text })
      });
    } catch {
      // Error silencioso
    }
  };

  const handleToggleFavorite = async (favoriteId: string) => {
    const isFavorite = !favorites[favoriteId];

    // Actualizar estado local inmediatamente para mejor UX
    setFavorites(prev => {
      const newFavorites = { ...prev };
      if (isFavorite) {
        newFavorites[favoriteId] = true;
      } else {
        delete newFavorites[favoriteId];
      }
      return newFavorites;
    });

    // Guardar en backend con articleId
    try {
      await fetch('/api/favorites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ articleId: currentArticleId, favoriteId, isFavorite })
      });
    } catch {
      // Revertir cambio si falla
      setFavorites(prev => {
        const newFavorites = { ...prev };
        if (!isFavorite) {
          newFavorites[favoriteId] = true;
        } else {
          delete newFavorites[favoriteId];
        }
        return newFavorites;
      });
    }
  };

  const handleToggleHidden = async (cardId: string) => {
    const isHidden = true; // Siempre ocultar cuando se hace clic

    // Actualizar estado local inmediatamente
    setHiddenCards(prev => ({
      ...prev,
      [cardId]: true
    }));

    // Guardar en backend con articleId
    try {
      await fetch('/api/hidden-cards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ articleId: currentArticleId, cardId, isHidden })
      });
    } catch {
      // Revertir cambio si falla
      setHiddenCards(prev => {
        const newHidden = { ...prev };
        delete newHidden[cardId];
        return newHidden;
      });
    }
  };

  if (isLoading || !currentArticle) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[var(--gradient-page-from)] to-[var(--gradient-page-to)] flex items-center justify-center">
        <div className="text-xl text-text-secondary">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--gradient-page-from)] to-[var(--gradient-page-to)]">
      {/* Temporizador flotante */}
      <Timer />

      {/* Botón de instrucciones */}
      <InstructionsButton />

      {/* Botón de gestión de PDFs - Solo visible en desktop */}
      <button
        onClick={() => setShowPdfUploader(true)}
        className="hidden xl:block fixed bottom-4 right-4 z-20 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all hover:scale-105"
        title="Gestionar PDFs"
      >
        <span className="text-xl">📁</span>
      </button>

      {/* Modal de gestión de PDFs */}
      <PdfUploader
        isOpen={showPdfUploader}
        onClose={() => setShowPdfUploader(false)}
      />

      {/* Indicador de progreso de scroll (solo en modo scroll) */}
      {navigationMode === 'scroll' && showScrollIndicator && (
        <div className="fixed top-20 right-4 z-10 bg-slate-800 dark:bg-slate-700 text-white rounded-lg shadow-lg px-4 py-2 transition-opacity duration-300">
          <div className="text-xs font-medium text-slate-300 dark:text-slate-400 mb-1">Progreso</div>
          <div className="text-2xl font-bold">{scrollProgress}%</div>
        </div>
      )}

      {/* Control de modo de vista y navegación - Menú colapsable */}
      <div ref={viewMenuRef} className="fixed top-4 right-4 z-50 flex items-center gap-2">
        {/* Botón de tema */}
        <ThemeToggle />
        {/* Botón principal (siempre visible) */}
        <button
          onClick={() => setShowViewOptions(!showViewOptions)}
          className="p-3 bg-surface rounded-full shadow-lg hover:bg-surface-alt transition-all"
          title="Opciones de vista"
        >
          <span className="text-xl">{showViewOptions ? '✕' : '⚙️'}</span>
        </button>

        {/* Menú expandible */}
        {showViewOptions && (
          <div className="absolute top-14 right-0 bg-surface rounded-xl shadow-xl p-3 animate-fadeIn min-w-[200px]">
            {/* Fila 1: Tipo de vista */}
            <div className="flex gap-2 mb-2">
              <button
                onClick={() => { setViewMode('study'); setShowViewOptions(false); }}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                  viewMode === 'study' ? 'bg-blue-600 dark:bg-blue-500 text-white' : 'bg-surface-raised text-text-body hover:bg-surface-alt'
                }`}
              >
                📖 Estudio
              </button>
              <button
                onClick={() => { setViewMode('summary'); setShowViewOptions(false); }}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                  viewMode === 'summary' ? 'bg-blue-600 dark:bg-blue-500 text-white' : 'bg-surface-raised text-text-body hover:bg-surface-alt'
                }`}
              >
                📋 Resumen
              </button>
            </div>
            <div className="flex gap-2 mb-2">
              <button
                onClick={() => { setViewMode('timeline'); setShowViewOptions(false); }}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                  viewMode === 'timeline' ? 'bg-blue-600 dark:bg-blue-500 text-white' : 'bg-surface-raised text-text-body hover:bg-surface-alt'
                }`}
              >
                📅 Timeline
              </button>
            </div>

            {/* Fila 2: Modo de navegación (solo en modo estudio) */}
            {viewMode === 'study' && (
              <div className="pt-3 border-t border-border-subtle">
                <p className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-2 px-1">Modo de estudio</p>
                <div className="flex gap-2">
                  {/* Botón ESTUDIAR (scroll) - Preparación personal */}
                  <button
                    onClick={() => { setNavigationMode('scroll'); setShowViewOptions(false); }}
                    className={`flex-1 px-3 py-3 rounded-xl text-sm font-medium transition-all flex flex-col items-center gap-1.5 ${
                      navigationMode === 'scroll'
                        ? 'bg-slate-700 dark:bg-slate-600 text-white shadow-md'
                        : 'bg-surface text-text-secondary border border-border hover:border-border-strong hover:bg-surface-alt'
                    }`}
                  >
                    {/* SVG Libro abierto con marcador - Estilo Lucide */}
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                      <path d="M8 7h6" />
                      <path d="M8 11h8" />
                    </svg>
                    <span>Estudiar</span>
                  </button>

                  {/* Botón ATALAYA (paginado) - Reunión/Conducción */}
                  <button
                    onClick={() => { setNavigationMode('paginated'); setShowViewOptions(false); }}
                    className={`flex-1 px-3 py-3 rounded-xl text-sm font-medium transition-all flex flex-col items-center gap-1.5 ${
                      navigationMode === 'paginated'
                        ? 'bg-slate-700 dark:bg-slate-600 text-white shadow-md'
                        : 'bg-surface text-text-secondary border border-border hover:border-border-strong hover:bg-surface-alt'
                    }`}
                  >
                    {/* SVG Atril con micrófono - Estilo Lucide */}
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {/* Atril/Podio */}
                      <path d="M8 6h8" />
                      <path d="M6 10h12" />
                      <path d="M7 10l1 10h8l1-10" />
                      <path d="M12 6V3" />
                      {/* Micrófono */}
                      <circle cx="12" cy="2" r="1" fill="currentColor" />
                    </svg>
                    <span>Atalaya</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Contenido principal */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Vista Timeline */}
        {viewMode === 'timeline' ? (
          <TimelineView
            article={currentArticle}
            lsmData={lsmData}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            hiddenCards={hiddenCards}
            onToggleHidden={handleToggleHidden}
            onLSMUpdate={handleLSMUpdate}
            articleId={currentArticleId}
          />
        ) : viewMode === 'summary' ? (
          <SummaryView article={currentArticle} lsmData={lsmData} />
        ) : (
          <>
            {/* Header: Siempre en Scroll, Solo en primera página en Paginado */}
            {(navigationMode === 'scroll' || (navigationMode === 'paginated' && currentQuestionIndex === 0 && currentReviewIndex === -1)) && (
              <StudyHeader
                song={currentArticle.song}
                title={currentArticle.title}
                biblicalText={currentArticle.biblicalText}
                theme={currentArticle.theme}
                articleNumber={currentArticle.metadata.articleNumber}
                week={currentArticle.metadata.week}
                month={currentArticle.metadata.month}
                year={currentArticle.metadata.year}
                articles={monthArticles}
                currentArticleId={currentArticleId}
                onArticleChange={handleArticleChange}
                titleLSM={lsmData['title']}
                onTitleLSMUpdate={handleTitleLSMUpdate}
                headerInfographic={currentArticle.headerInfographic}
                overview={currentArticle.overview}
                questions={currentArticle.questions}
                reviewQuestions={currentArticle.reviewQuestions}
                paragraphs={currentArticle.paragraphs}
                finalSong={currentArticle.finalSong}
              />
            )}

            {/* Modo Scroll - Muestra todas las preguntas */}
            {navigationMode === 'scroll' && (
          <>
            <div className="space-y-6">
              {currentArticle.questions.map((question, index) => (
                <QuestionCard
                  key={index}
                  question={question}
                  paragraphs={currentArticle.paragraphs}
                  lsmText={lsmData[question.number]}
                  sectionLsmText={lsmData[`section-${question.number}`]}
                  onLSMUpdate={handleLSMUpdate}
                  isNavigationMode={false}
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                  allLsmData={lsmData}
                  hiddenCards={hiddenCards}
                  onToggleHidden={handleToggleHidden}
                  articleId={currentArticleId}
                />
              ))}
            </div>

            {/* Preguntas de Repaso */}
            <div className="mt-12">
              <div className="bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-950 dark:to-violet-900 rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold text-violet-800 dark:text-violet-200 text-center">
                  ¿QUÉ RESPONDERÍAS?
                </h2>
              </div>
              <div className="space-y-6">
                {currentArticle.reviewQuestions.map((reviewQ, index) => (
                  <ReviewQuestionCard
                    key={index}
                    reviewQuestion={reviewQ}
                    index={index}
                    lsmText={lsmData[`review-${index}`]}
                    onLSMUpdate={handleReviewLSMUpdate}
                    allLsmData={lsmData}
                    hiddenCards={hiddenCards}
                    onToggleHidden={handleToggleHidden}
                    articleId={currentArticleId}
                  />
                ))}
              </div>
            </div>

            {/* Resumen para el Comentario Final */}
            {currentArticle.articleSummary && (
              <ArticleSummaryCard
                summary={currentArticle.articleSummary}
                articleTitle={currentArticle.title}
              />
            )}

            {/* Canción Final */}
            <div className="mt-10 bg-gradient-to-b from-surface-alt to-surface rounded-lg shadow-md p-8 text-center border border-border">
              <p className="text-lg font-semibold text-text-body">
                {currentArticle.finalSong}
              </p>
            </div>
          </>
        )}

        {/* Modo Paginado - Muestra una pregunta a la vez */}
        {navigationMode === 'paginated' && (
          <div ref={contentRef}>
            {currentReviewIndex === -1 ? (
              /* Mostrar pregunta normal */
              <>
                {/* PÁRRAFOS ANTES DE LA PREGUNTA - Solo en modo paginado para Artículos 43+ */}
                {isExecutiveDesign(currentArticle.metadata.articleNumber) && (() => {
                  const currentQuestion = currentArticle.questions[currentQuestionIndex];
                  const questionParagraphs = currentQuestion.paragraphs || [];
                  const relatedParagraphs = currentArticle.paragraphs.filter(p =>
                    questionParagraphs.includes(p.number)
                  );

                  if (relatedParagraphs.length === 0) return null;

                  // Formatear label según cantidad de párrafos
                  const paragraphLabel = questionParagraphs.length === 1
                    ? `PÁRRAFO ${questionParagraphs[0]}`
                    : `PÁRRAFOS ${questionParagraphs[0]}-${questionParagraphs[questionParagraphs.length - 1]}`;

                  return (
                    <div className="mb-6">
                      {/* Contenedor de párrafos con diseño ejecutivo */}
                      <div className="bg-surface-alt border border-border rounded-xl overflow-hidden">
                        {/* Header del párrafo */}
                        <div className="bg-surface border-b border-border px-6 md:px-8 py-4 md:py-5">
                          <span className="text-sm md:text-base font-bold text-text-secondary uppercase tracking-[0.15em]">
                            {paragraphLabel}
                          </span>
                        </div>

                        {/* Contenido de los párrafos */}
                        <div className="p-6 md:p-8 space-y-6">
                          {relatedParagraphs.map((paragraph, idx) => (
                            <div key={paragraph.number} className="relative">
                              {/* Barra lateral decorativa */}
                              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[var(--gradient-to)] to-[var(--gradient-from)] rounded-full"></div>

                              <div className="pl-6 md:pl-8">
                                {/* Número del párrafo */}
                                {questionParagraphs.length > 1 && (
                                  <span className="inline-block mb-3 px-3 py-1 bg-surface-raised text-text-body text-sm font-bold rounded">
                                    {paragraph.number}
                                  </span>
                                )}

                                {/* Contenido del párrafo - TAMAÑO GRANDE PARA TABLETS */}
                                <p className="text-text-primary leading-[1.8] text-lg md:text-xl font-normal">
                                  {paragraph.content}
                                </p>

                                {/* Resumen/Summary si existe */}
                                {paragraph.summary && (
                                  <div className="mt-5 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-700 rounded-lg px-5 py-4">
                                    <p className="text-sm font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider mb-2">💡 Resumen</p>
                                    <p className="text-base md:text-lg text-amber-900 dark:text-amber-100 italic leading-relaxed">{paragraph.summary}</p>
                                  </div>
                                )}
                              </div>

                              {/* Separador entre párrafos si hay más de uno */}
                              {idx < relatedParagraphs.length - 1 && (
                                <div className="mt-6 flex items-center gap-3">
                                  <div className="flex-1 h-px bg-border"></div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Separador ✦ entre párrafos y pregunta */}
                      <div className="flex items-center gap-4 my-8">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent"></div>
                        <span className="text-text-tertiary text-sm">✦</span>
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent"></div>
                      </div>
                    </div>
                  );
                })()}

                <QuestionCard
                  question={currentArticle.questions[currentQuestionIndex]}
                  paragraphs={currentArticle.paragraphs}
                  lsmText={lsmData[currentArticle.questions[currentQuestionIndex].number]}
                  sectionLsmText={lsmData[`section-${currentArticle.questions[currentQuestionIndex].number}`]}
                  onLSMUpdate={handleLSMUpdate}
                  isNavigationMode={true}
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                  allLsmData={lsmData}
                  hiddenCards={hiddenCards}
                  onToggleHidden={handleToggleHidden}
                  articleId={currentArticleId}
                />
              </>
            ) : (
              /* Mostrar pregunta de repaso */
              <>
                <ReviewQuestionCard
                  reviewQuestion={currentArticle.reviewQuestions[currentReviewIndex]}
                  index={currentReviewIndex}
                  lsmText={lsmData[`review-${currentReviewIndex}`]}
                  onLSMUpdate={handleReviewLSMUpdate}
                  allLsmData={lsmData}
                  hiddenCards={hiddenCards}
                  onToggleHidden={handleToggleHidden}
                  articleId={currentArticleId}
                />

                {/* Resumen para el Comentario Final - Solo en la última pregunta de repaso */}
                {currentReviewIndex === currentArticle.reviewQuestions.length - 1 &&
                 currentArticle.articleSummary && (
                  <ArticleSummaryCard
                    summary={currentArticle.articleSummary}
                    articleTitle={currentArticle.title}
                  />
                )}

                {/* Canción Final - Solo en la última pregunta de repaso */}
                {currentReviewIndex === currentArticle.reviewQuestions.length - 1 && (
                  <div className="mt-6 bg-gradient-to-b from-surface-alt to-surface rounded-lg shadow-md p-8 text-center border border-border">
                    <p className="text-lg font-semibold text-text-body">
                      {currentArticle.finalSong}
                    </p>
                  </div>
                )}
              </>
            )}

            {/* Vista previa de lo que viene */}
            {currentReviewIndex === -1 ? (
              /* Estamos en preguntas normales */
              currentQuestionIndex < currentArticle.questions.length - 1 ? (
                isExecutiveDesign(currentArticle.metadata.articleNumber) ? (
                  /* DISEÑO EJECUTIVO - Artículo 43+ */
                  <div className="mt-8">
                    {/* Separador ejecutivo */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent"></div>
                      <span className="text-text-tertiary text-sm">✦</span>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent"></div>
                    </div>

                    <div className="bg-surface border border-border rounded-xl shadow-sm p-6">
                      {/* Header ejecutivo */}
                      <p className="text-xs font-bold text-text-tertiary uppercase tracking-[0.15em] mb-4 text-center">
                        Próxima Pregunta
                      </p>

                      {/* SUBTÍTULO de sección - INTENTIONALLY DARK */}
                      {currentArticle.questions[currentQuestionIndex + 1].section && (
                        <div className="bg-slate-800 rounded-lg px-5 py-3 mb-4">
                          <h3 className="text-lg font-bold text-white uppercase tracking-wide text-center">
                            {currentArticle.questions[currentQuestionIndex + 1].section}
                          </h3>
                        </div>
                      )}

                      {/* Badge de párrafos */}
                      <div className="flex justify-center">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-surface-alt border border-border rounded-lg text-sm">
                          <span className="text-text-muted">Párrafos:</span>
                          <span className="font-bold text-text-body">
                            {currentArticle.questions[currentQuestionIndex + 1].paragraphs.join(', ')}
                          </span>
                        </span>
                      </div>

                      {/* ADELANTO del tema */}
                      {currentArticle.questions[currentQuestionIndex + 1].preview && (
                        <div className="mt-4 bg-surface-alt px-4 py-3 rounded-lg border border-border-subtle">
                          <p className="text-sm text-text-secondary text-center">
                            <span className="font-medium text-text-muted">Veremos:</span>{' '}
                            <span className="italic">{currentArticle.questions[currentQuestionIndex + 1].preview}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  /* DISEÑO ORIGINAL - Artículos anteriores */
                  <div className="mt-6 bg-surface rounded-lg shadow-md border-2 border-orange-400 dark:border-orange-600 overflow-hidden">
                    <div className="bg-orange-500 dark:bg-orange-600 px-5 py-2.5">
                      <p className="text-sm font-bold text-white flex items-center gap-2">
                        <span>⏭️</span> Próxima pregunta
                      </p>
                    </div>
                    <div className="p-5 space-y-3">
                      {currentArticle.questions[currentQuestionIndex + 1].section && (
                        <div className="bg-surface-alt border-l-4 border-slate-700 dark:border-slate-500 pl-4 py-3 rounded-r">
                          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-1.5">Sección</p>
                          <h3 className="text-xl font-extrabold text-text-primary uppercase leading-tight">
                            {currentArticle.questions[currentQuestionIndex + 1].section}
                          </h3>
                        </div>
                      )}
                      <div className="text-xs text-text-muted px-1">
                        <span className="font-medium">Párrafos del artículo: </span>
                        <span className="font-bold text-text-body">
                          {currentArticle.questions[currentQuestionIndex + 1].paragraphs.join(', ')}
                        </span>
                      </div>
                      {currentArticle.questions[currentQuestionIndex + 1].preview && (
                        <div className="mt-2 bg-orange-50 dark:bg-orange-950 px-3 py-2 rounded-lg border border-orange-200 dark:border-orange-800">
                          <p className="text-sm text-orange-800 dark:text-orange-200">
                            <span className="font-semibold">🎯 Veremos:</span>{' '}
                            <span className="italic">{currentArticle.questions[currentQuestionIndex + 1].preview}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )
              ) : (
                /* En la última pregunta normal, mostrar que vienen las preguntas de repaso */
                isExecutiveDesign(currentArticle.metadata.articleNumber) ? (
                  /* DISEÑO EJECUTIVO */
                  <div className="mt-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent"></div>
                      <span className="text-text-tertiary text-sm">✦</span>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent"></div>
                    </div>
                    <div className="bg-surface border border-border rounded-xl shadow-sm p-6 text-center">
                      <p className="text-xs font-bold text-text-tertiary uppercase tracking-[0.15em] mb-3">Siguiente</p>
                      <p className="text-lg font-semibold text-text-body">
                        ¿Qué responderías?
                      </p>
                      <p className="text-sm text-text-muted mt-1">
                        {currentArticle.reviewQuestions.length} preguntas de repaso
                      </p>
                    </div>
                  </div>
                ) : (
                  /* DISEÑO ORIGINAL */
                  <div className="mt-6 bg-violet-50 dark:bg-violet-950 border-l-2 border-violet-400 dark:border-violet-600 p-4 rounded-lg shadow-sm">
                    <p className="text-sm font-semibold text-violet-800 dark:text-violet-200 mb-2">📋 Siguiente:</p>
                    <div className="text-sm text-text-body">
                      <p className="font-semibold text-violet-700 dark:text-violet-300">
                        ¿Qué responderías? ({currentArticle.reviewQuestions.length} preguntas de repaso)
                      </p>
                    </div>
                  </div>
                )
              )
            ) : (
              /* Estamos en preguntas de repaso */
              currentReviewIndex < currentArticle.reviewQuestions.length - 1 && (
                isExecutiveDesign(currentArticle.metadata.articleNumber) ? (
                  /* DISEÑO EJECUTIVO */
                  <div className="mt-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent"></div>
                      <span className="text-text-tertiary text-sm">✦</span>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent"></div>
                    </div>
                    <div className="bg-surface border border-border rounded-xl shadow-sm p-6 text-center">
                      <p className="text-xs font-bold text-text-tertiary uppercase tracking-[0.15em] mb-3">Siguiente</p>
                      <p className="text-lg font-semibold text-text-body">
                        Pregunta de repaso {currentReviewIndex + 2}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* DISEÑO ORIGINAL */
                  <div className="mt-6 bg-violet-50 dark:bg-violet-950 border-l-2 border-violet-400 dark:border-violet-600 p-4 rounded-lg shadow-sm">
                    <p className="text-sm font-semibold text-violet-800 dark:text-violet-200 mb-2">📋 Siguiente:</p>
                    <div className="text-sm text-text-body">
                      <p className="font-semibold text-violet-700 dark:text-violet-300">
                        Pregunta de repaso {currentReviewIndex + 2}
                      </p>
                    </div>
                  </div>
                )
              )
            )}

            {/* Controles de navegación */}
            {isExecutiveDesign(currentArticle.metadata.articleNumber) ? (
              /* DISEÑO EJECUTIVO */
              <div className="mt-8 bg-surface border border-border rounded-xl shadow-sm p-6">
                {/* Contador y barra de progreso */}
                <div className="mb-5">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-xs font-bold text-text-tertiary uppercase tracking-[0.1em]">
                      {currentReviewIndex === -1 ? (
                        <>Pregunta {currentQuestionIndex + 1} de {currentArticle.questions.length}</>
                      ) : (
                        <>Repaso {currentReviewIndex + 1} de {currentArticle.reviewQuestions.length}</>
                      )}
                    </p>
                    <span className="text-sm text-text-tertiary font-medium">
                      {currentReviewIndex === -1 ? (
                        <>{Math.round(((currentQuestionIndex + 1) / currentArticle.questions.length) * 100)}%</>
                      ) : (
                        <>{Math.round(((currentReviewIndex + 1) / currentArticle.reviewQuestions.length) * 100)}%</>
                      )}
                    </span>
                  </div>

                  {/* Barra de progreso ejecutiva */}
                  <div className="w-full h-1.5 bg-surface-raised rounded-full overflow-hidden">
                    <div
                      className="h-full bg-slate-500 dark:bg-slate-400 transition-all duration-300 ease-out"
                      style={{
                        width: currentReviewIndex === -1
                          ? `${((currentQuestionIndex + 1) / currentArticle.questions.length) * 100}%`
                          : `${((currentReviewIndex + 1) / currentArticle.reviewQuestions.length) * 100}%`
                      }}
                    ></div>
                  </div>
                </div>

                {/* Botones ejecutivos */}
                <div className="flex justify-between items-center gap-4">
                  <button
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0 && currentReviewIndex === -1}
                    className={`flex-1 px-5 py-3 rounded-lg font-medium transition-all ${
                      currentQuestionIndex === 0 && currentReviewIndex === -1
                        ? 'bg-surface-alt text-text-tertiary cursor-not-allowed border border-border-subtle'
                        : 'bg-surface text-text-secondary border border-border hover:bg-surface-alt hover:border-border-strong'
                    }`}
                  >
                    ← Anterior
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={currentReviewIndex === currentArticle.reviewQuestions.length - 1}
                    className={`flex-1 px-5 py-3 rounded-lg font-medium transition-all ${
                      currentReviewIndex === currentArticle.reviewQuestions.length - 1
                        ? 'bg-surface-raised text-text-tertiary cursor-not-allowed'
                        : 'bg-slate-700 dark:bg-slate-600 text-white hover:bg-slate-800 dark:hover:bg-slate-500 shadow-sm'
                    }`}
                  >
                    Siguiente →
                  </button>
                </div>
              </div>
            ) : (
              /* DISEÑO ORIGINAL */
              <div className="mt-8 bg-surface rounded-lg shadow-md p-5 border border-border">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-lg font-semibold text-text-body">
                      {currentReviewIndex === -1 ? (
                        <>Pregunta {currentQuestionIndex + 1} de {currentArticle.questions.length}</>
                      ) : (
                        <>Repaso {currentReviewIndex + 1} de {currentArticle.reviewQuestions.length}</>
                      )}
                    </div>
                    <div className="text-sm text-text-muted font-medium">
                      {currentReviewIndex === -1 ? (
                        <>{Math.round(((currentQuestionIndex + 1) / currentArticle.questions.length) * 100)}%</>
                      ) : (
                        <>{Math.round(((currentReviewIndex + 1) / currentArticle.reviewQuestions.length) * 100)}%</>
                      )}
                    </div>
                  </div>
                  <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500 transition-all duration-300 ease-out"
                      style={{
                        width: currentReviewIndex === -1
                          ? `${((currentQuestionIndex + 1) / currentArticle.questions.length) * 100}%`
                          : `${((currentReviewIndex + 1) / currentArticle.reviewQuestions.length) * 100}%`
                      }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <button
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0 && currentReviewIndex === -1}
                    className={`px-6 py-3 rounded-lg font-medium transition-all shadow-sm ${
                      currentQuestionIndex === 0 && currentReviewIndex === -1
                        ? 'bg-surface-raised text-text-tertiary cursor-not-allowed'
                        : 'bg-slate-700 dark:bg-slate-600 text-white hover:bg-slate-800 dark:hover:bg-slate-500'
                    }`}
                  >
                    ⬅️ Anterior
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={currentReviewIndex === currentArticle.reviewQuestions.length - 1}
                    className={`px-6 py-3 rounded-lg font-medium transition-all shadow-sm ${
                      currentReviewIndex === currentArticle.reviewQuestions.length - 1
                        ? 'bg-surface-raised text-text-tertiary cursor-not-allowed'
                        : 'bg-slate-700 dark:bg-slate-600 text-white hover:bg-slate-800 dark:hover:bg-slate-500'
                    }`}
                  >
                    Siguiente ➡️
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
          </>
        )}
      </div>
    </div>
  );
}
