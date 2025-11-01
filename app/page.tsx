'use client';

import { useState, useEffect, useRef } from 'react';
import StudyHeader from '@/components/StudyHeader';
import QuestionCard from '@/components/QuestionCard';
import ReviewQuestionCard from '@/components/ReviewQuestionCard';
import Timer from '@/components/Timer';
import InstructionsButton from '@/components/InstructionsButton';
import { atalayaData } from '@/data/atalaya-data';

export default function Home() {
  const [navigationMode, setNavigationMode] = useState<'scroll' | 'paginated'>('scroll');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(-1); // -1 significa que no estamos en preguntas de repaso
  const [lsmData, setLsmData] = useState<Record<string, string>>({});
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [hiddenCards, setHiddenCards] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Referencia para hacer scroll al contenido
  const contentRef = useRef<HTMLDivElement>(null);

  // Cargar datos LSM, favoritos y tarjetas ocultas al iniciar
  useEffect(() => {
    Promise.all([
      fetch('/api/lsm').then(res => res.json()),
      fetch('/api/favorites').then(res => res.json()),
      fetch('/api/hidden-cards').then(res => res.json())
    ])
      .then(([lsmDataResult, favoritesResult, hiddenCardsResult]) => {
        setLsmData(lsmDataResult);
        setFavorites(favoritesResult);
        setHiddenCards(hiddenCardsResult);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error loading data:', err);
        setIsLoading(false);
      });
  }, []);

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

  const handlePrevious = () => {
    if (currentReviewIndex > 0) {
      // Estamos en preguntas de repaso, retroceder en ellas
      setCurrentReviewIndex(currentReviewIndex - 1);
    } else if (currentReviewIndex === 0) {
      // Estamos en la primera pregunta de repaso, volver a la última pregunta normal
      setCurrentReviewIndex(-1);
      setCurrentQuestionIndex(atalayaData.questions.length - 1);
    } else if (currentQuestionIndex > 0) {
      // Estamos en preguntas normales, retroceder
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentReviewIndex >= 0) {
      // Estamos en preguntas de repaso
      if (currentReviewIndex < atalayaData.reviewQuestions.length - 1) {
        setCurrentReviewIndex(currentReviewIndex + 1);
      }
    } else if (currentQuestionIndex < atalayaData.questions.length - 1) {
      // Estamos en preguntas normales
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentQuestionIndex === atalayaData.questions.length - 1) {
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

    // Guardar en backend
    try {
      await fetch('/api/favorites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ favoriteId, isFavorite })
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

    // Guardar en backend
    try {
      await fetch('/api/hidden-cards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cardId, isHidden })
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Temporizador flotante */}
      <Timer />

      {/* Botón de instrucciones */}
      <InstructionsButton />

      {/* Control de modo de navegación */}
      <div className="fixed top-4 right-4 z-10 bg-white rounded-lg shadow-lg p-2">
        <div className="flex gap-2">
          <button
            onClick={() => setNavigationMode('scroll')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              navigationMode === 'scroll'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            📜 Scroll
          </button>
          <button
            onClick={() => setNavigationMode('paginated')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              navigationMode === 'paginated'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            ⏮️⏭️ Navegación
          </button>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <StudyHeader
          song={atalayaData.song}
          title={atalayaData.title}
          biblicalText={atalayaData.biblicalText}
          theme={atalayaData.theme}
        />

        {/* Modo Scroll - Muestra todas las preguntas */}
        {navigationMode === 'scroll' && (
          <>
            <div className="space-y-4">
              {atalayaData.questions.map((question, index) => (
                <QuestionCard
                  key={index}
                  question={question}
                  paragraphs={atalayaData.paragraphs}
                  lsmText={lsmData[question.number]}
                  sectionLsmText={lsmData[`section-${question.number}`]}
                  onLSMUpdate={handleLSMUpdate}
                  isNavigationMode={false}
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                  allLsmData={lsmData}
                  hiddenCards={hiddenCards}
                  onToggleHidden={handleToggleHidden}
                />
              ))}
            </div>

            {/* Preguntas de Repaso */}
            <div className="mt-8">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-bold text-purple-800 text-center">
                  ¿QUÉ RESPONDERÍAS?
                </h2>
              </div>
              <div className="space-y-4">
                {atalayaData.reviewQuestions.map((reviewQ, index) => (
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
                  />
                ))}
              </div>
            </div>

            {/* Canción Final */}
            <div className="mt-8 bg-gradient-to-b from-blue-50 to-white rounded-lg shadow-md p-8 text-center">
              <p className="text-lg font-semibold text-gray-600">
                {atalayaData.finalSong}
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
                  question={atalayaData.questions[currentQuestionIndex]}
                  paragraphs={atalayaData.paragraphs}
                  lsmText={lsmData[atalayaData.questions[currentQuestionIndex].number]}
                  sectionLsmText={lsmData[`section-${atalayaData.questions[currentQuestionIndex].number}`]}
                  onLSMUpdate={handleLSMUpdate}
                  isNavigationMode={true}
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                  allLsmData={lsmData}
                  hiddenCards={hiddenCards}
                  onToggleHidden={handleToggleHidden}
                />
              </>
            ) : (
              /* Mostrar pregunta de repaso */
              <>
                <ReviewQuestionCard
                  reviewQuestion={atalayaData.reviewQuestions[currentReviewIndex]}
                  index={currentReviewIndex}
                  lsmText={lsmData[`review-${currentReviewIndex}`]}
                  onLSMUpdate={handleReviewLSMUpdate}
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                  allLsmData={lsmData}
                  hiddenCards={hiddenCards}
                  onToggleHidden={handleToggleHidden}
                  isNavigationMode={true}
                />

                {/* Canción Final - Solo en la última pregunta de repaso */}
                {currentReviewIndex === atalayaData.reviewQuestions.length - 1 && (
                  <div className="mt-6 bg-gradient-to-b from-blue-50 to-white rounded-lg shadow-md p-8 text-center">
                    <p className="text-lg font-semibold text-gray-600">
                      {atalayaData.finalSong}
                    </p>
                  </div>
                )}
              </>
            )}

            {/* Vista previa de lo que viene */}
            {currentReviewIndex === -1 ? (
              /* Estamos en preguntas normales */
              currentQuestionIndex < atalayaData.questions.length - 1 ? (
                <div className="mt-6 bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg shadow-sm">
                  <p className="text-sm font-semibold text-amber-800 mb-2">📋 Siguiente:</p>
                  <div className="text-sm text-gray-700">
                    {/* Si hay subtítulo, mostrarlo primero */}
                    {atalayaData.questions[currentQuestionIndex + 1].section && (
                      <div className="mb-3 pb-2 border-b border-amber-200">
                        <p className="font-semibold text-blue-700 mb-1">
                          Subtítulo:
                        </p>
                        <p className="text-gray-800 font-medium text-xs uppercase">
                          {atalayaData.questions[currentQuestionIndex + 1].section}
                        </p>
                      </div>
                    )}
                    {/* Después mostrar solo los párrafos */}
                    <p className="font-semibold text-gray-800">
                      Párrafo{atalayaData.questions[currentQuestionIndex + 1].paragraphs.length > 1 ? 's' : ''}: {atalayaData.questions[currentQuestionIndex + 1].paragraphs.join(', ')}
                    </p>
                  </div>
                </div>
              ) : (
                /* En la última pregunta normal, mostrar que vienen las preguntas de repaso */
                <div className="mt-6 bg-purple-50 border-l-4 border-purple-400 p-4 rounded-lg shadow-sm">
                  <p className="text-sm font-semibold text-purple-800 mb-2">📋 Siguiente:</p>
                  <div className="text-sm text-gray-700">
                    <p className="font-semibold text-purple-700">
                      ¿Qué responderías? ({atalayaData.reviewQuestions.length} preguntas de repaso)
                    </p>
                  </div>
                </div>
              )
            ) : (
              /* Estamos en preguntas de repaso */
              currentReviewIndex < atalayaData.reviewQuestions.length - 1 && (
                <div className="mt-6 bg-purple-50 border-l-4 border-purple-400 p-4 rounded-lg shadow-sm">
                  <p className="text-sm font-semibold text-purple-800 mb-2">📋 Siguiente:</p>
                  <div className="text-sm text-gray-700">
                    <p className="font-semibold text-purple-700">
                      Pregunta de repaso {currentReviewIndex + 2}
                    </p>
                  </div>
                </div>
              )
            )}

            {/* Controles de navegación */}
            <div className="flex justify-between items-center mt-6 bg-white rounded-lg shadow-md p-4">
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0 && currentReviewIndex === -1}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  currentQuestionIndex === 0 && currentReviewIndex === -1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                ⬅️ Anterior
              </button>

              <div className="text-lg font-semibold text-gray-700">
                {currentReviewIndex === -1 ? (
                  <>Pregunta {currentQuestionIndex + 1} de {atalayaData.questions.length}</>
                ) : (
                  <>Repaso {currentReviewIndex + 1} de {atalayaData.reviewQuestions.length}</>
                )}
              </div>

              <button
                onClick={handleNext}
                disabled={currentReviewIndex === atalayaData.reviewQuestions.length - 1}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  currentReviewIndex === atalayaData.reviewQuestions.length - 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Siguiente ➡️
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
