'use client';

import { useState, useEffect, useRef } from 'react';
import StudyHeader from '@/components/StudyHeader';
import QuestionCard from '@/components/QuestionCard';
import ReviewQuestionCard from '@/components/ReviewQuestionCard';
import Timer from '@/components/Timer';
import InstructionsButton from '@/components/InstructionsButton';
import { atalayaDatabase, getArticleById, getMonthArticles } from '@/data/atalaya-data';
import { articlesConfig, getDefaultArticleId } from '@/data/articles-config';
import { ArticleData } from '@/types/atalaya';

export default function Home() {
  // Estado para manejo de artículos (usa la configuración centralizada)
  const [currentMonth] = useState<string>(articlesConfig.defaultMonth);
  const [currentArticleId, setCurrentArticleId] = useState<string>(getDefaultArticleId());
  const [currentArticle, setCurrentArticle] = useState<ArticleData | null>(null);
  const [monthArticles, setMonthArticles] = useState<ArticleData[]>([]);

  // Estados existentes
  const [navigationMode, setNavigationMode] = useState<'scroll' | 'paginated'>('scroll');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(-1);
  const [lsmData, setLsmData] = useState<Record<string, string>>({});
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [hiddenCards, setHiddenCards] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  // Referencia para hacer scroll al contenido
  const contentRef = useRef<HTMLDivElement>(null);

  // Cargar artículos del mes al iniciar
  useEffect(() => {
    console.log('🔍 Cargando artículos del mes:', currentMonth);
    const articles = getMonthArticles(currentMonth);
    console.log('📚 Artículos encontrados:', articles.length);
    setMonthArticles(articles);

    // Cargar artículo actual
    console.log('🔍 Buscando artículo ID:', currentArticleId);
    const article = getArticleById(currentArticleId);
    console.log('📄 Artículo encontrado:', article ? article.title : 'NO ENCONTRADO');
    if (article) {
      setCurrentArticle(article);
    } else {
      // Si no se encuentra el artículo, desactivar loading para mostrar error
      console.error('❌ No se encontró el artículo con ID:', currentArticleId);
      setIsLoading(false);
    }
  }, [currentMonth, currentArticleId]);

  // Cargar datos LSM, favoritos y tarjetas ocultas cuando cambia el artículo
  useEffect(() => {
    if (!currentArticleId) {
      console.log('⚠️ No hay currentArticleId, saltando carga de datos');
      return;
    }

    console.log('🔄 Iniciando carga de datos para artículo:', currentArticleId);
    setIsLoading(true);
    Promise.all([
      fetch(`/api/lsm?articleId=${currentArticleId}`).then(res => res.json()),
      fetch(`/api/favorites?articleId=${currentArticleId}`).then(res => res.json()),
      fetch(`/api/hidden-cards?articleId=${currentArticleId}`).then(res => res.json())
    ])
      .then(([lsmDataResult, favoritesResult, hiddenCardsResult]) => {
        console.log('✅ Datos cargados exitosamente');
        setLsmData(lsmDataResult);
        setFavorites(favoritesResult);
        setHiddenCards(hiddenCardsResult);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('❌ Error loading data:', err);
        setIsLoading(false);
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

  // Función para cambiar de artículo
  const handleArticleChange = (articleId: string) => {
    setCurrentArticleId(articleId);
    setCurrentQuestionIndex(0);
    setCurrentReviewIndex(-1);
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
    } catch (error) {
      console.error('Error saving title LSM:', error);
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
    } catch (error) {
      console.error('Error saving favorite:', error);
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
    } catch (error) {
      console.error('Error hiding card:', error);
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-xl text-slate-600">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Temporizador flotante */}
      <Timer />

      {/* Botón de instrucciones */}
      <InstructionsButton />

      {/* Indicador de progreso de scroll (solo en modo scroll) */}
      {navigationMode === 'scroll' && showScrollIndicator && (
        <div className="fixed top-20 right-4 z-10 bg-slate-800 text-white rounded-lg shadow-lg px-4 py-2 transition-opacity duration-300">
          <div className="text-xs font-medium text-slate-300 mb-1">Progreso</div>
          <div className="text-2xl font-bold">{scrollProgress}%</div>
        </div>
      )}

      {/* Control de modo de navegación */}
      <div className="fixed top-4 right-4 z-10 bg-white rounded-lg shadow-lg p-2">
        <div className="flex gap-2">
          <button
            onClick={() => setNavigationMode('scroll')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              navigationMode === 'scroll'
                ? 'bg-slate-700 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            📜 Scroll
          </button>
          <button
            onClick={() => setNavigationMode('paginated')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              navigationMode === 'paginated'
                ? 'bg-slate-700 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            ⏮️⏭️ Navegación
          </button>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-5xl mx-auto px-6 py-12">
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
        />

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
              <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold text-violet-800 text-center">
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
                    favorites={favorites}
                    onToggleFavorite={handleToggleFavorite}
                    allLsmData={lsmData}
                    hiddenCards={hiddenCards}
                    onToggleHidden={handleToggleHidden}
                    isNavigationMode={false}
                    articleId={currentArticleId}
                  />
                ))}
              </div>
            </div>

            {/* Canción Final */}
            <div className="mt-10 bg-gradient-to-b from-slate-50 to-white rounded-lg shadow-md p-8 text-center border border-slate-200">
              <p className="text-lg font-semibold text-slate-700">
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
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                  allLsmData={lsmData}
                  hiddenCards={hiddenCards}
                  onToggleHidden={handleToggleHidden}
                  isNavigationMode={true}
                  articleId={currentArticleId}
                />

                {/* Canción Final - Solo en la última pregunta de repaso */}
                {currentReviewIndex === currentArticle.reviewQuestions.length - 1 && (
                  <div className="mt-6 bg-gradient-to-b from-slate-50 to-white rounded-lg shadow-md p-8 text-center border border-slate-200">
                    <p className="text-lg font-semibold text-slate-700">
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
                <div className="mt-6 bg-white rounded-lg shadow-md border-2 border-orange-400 overflow-hidden">
                  {/* Header con color sólido */}
                  <div className="bg-orange-500 px-5 py-2.5">
                    <p className="text-sm font-bold text-white flex items-center gap-2">
                      <span>⏭️</span> Próxima pregunta
                    </p>
                  </div>

                  <div className="p-5 space-y-3">
                    {/* SUBTÍTULO muy destacado con fondo de énfasis */}
                    {currentArticle.questions[currentQuestionIndex + 1].section && (
                      <div className="bg-slate-50 border-l-4 border-slate-700 pl-4 py-3 rounded-r">
                        <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                          Sección
                        </p>
                        <h3 className="text-xl font-extrabold text-slate-900 uppercase leading-tight">
                          {currentArticle.questions[currentQuestionIndex + 1].section}
                        </h3>
                      </div>
                    )}

                    {/* PÁRRAFOS muy discreto */}
                    <div className="text-xs text-slate-500 px-1">
                      <span className="font-medium">Párrafos del artículo: </span>
                      <span className="font-bold text-slate-700">
                        {currentArticle.questions[currentQuestionIndex + 1].paragraphs.join(', ')}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                /* En la última pregunta normal, mostrar que vienen las preguntas de repaso */
                <div className="mt-6 bg-violet-50 border-l-2 border-violet-400 p-4 rounded-lg shadow-sm">
                  <p className="text-sm font-semibold text-violet-800 mb-2">📋 Siguiente:</p>
                  <div className="text-sm text-slate-700">
                    <p className="font-semibold text-violet-700">
                      ¿Qué responderías? ({currentArticle.reviewQuestions.length} preguntas de repaso)
                    </p>
                  </div>
                </div>
              )
            ) : (
              /* Estamos en preguntas de repaso */
              currentReviewIndex < currentArticle.reviewQuestions.length - 1 && (
                <div className="mt-6 bg-violet-50 border-l-2 border-violet-400 p-4 rounded-lg shadow-sm">
                  <p className="text-sm font-semibold text-violet-800 mb-2">📋 Siguiente:</p>
                  <div className="text-sm text-slate-700">
                    <p className="font-semibold text-violet-700">
                      Pregunta de repaso {currentReviewIndex + 2}
                    </p>
                  </div>
                </div>
              )
            )}

            {/* Controles de navegación */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-5 border border-slate-200">
              {/* Contador y barra de progreso */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-lg font-semibold text-slate-700">
                    {currentReviewIndex === -1 ? (
                      <>Pregunta {currentQuestionIndex + 1} de {currentArticle.questions.length}</>
                    ) : (
                      <>Repaso {currentReviewIndex + 1} de {currentArticle.reviewQuestions.length}</>
                    )}
                  </div>
                  <div className="text-sm text-slate-500 font-medium">
                    {currentReviewIndex === -1 ? (
                      <>{Math.round(((currentQuestionIndex + 1) / currentArticle.questions.length) * 100)}%</>
                    ) : (
                      <>{Math.round(((currentReviewIndex + 1) / currentArticle.reviewQuestions.length) * 100)}%</>
                    )}
                  </div>
                </div>

                {/* Barra de progreso */}
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 transition-all duration-300 ease-out"
                    style={{
                      width: currentReviewIndex === -1
                        ? `${((currentQuestionIndex + 1) / currentArticle.questions.length) * 100}%`
                        : `${((currentReviewIndex + 1) / currentArticle.reviewQuestions.length) * 100}%`
                    }}
                  ></div>
                </div>
              </div>

              {/* Botones */}
              <div className="flex justify-between items-center">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0 && currentReviewIndex === -1}
                  className={`px-6 py-3 rounded-lg font-medium transition-all shadow-sm ${
                    currentQuestionIndex === 0 && currentReviewIndex === -1
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-slate-700 text-white hover:bg-slate-800'
                  }`}
                >
                  ⬅️ Anterior
                </button>

                <button
                  onClick={handleNext}
                  disabled={currentReviewIndex === currentArticle.reviewQuestions.length - 1}
                  className={`px-6 py-3 rounded-lg font-medium transition-all shadow-sm ${
                    currentReviewIndex === currentArticle.reviewQuestions.length - 1
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-slate-700 text-white hover:bg-slate-800'
                  }`}
                >
                  Siguiente ➡️
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
