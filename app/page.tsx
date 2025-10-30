'use client';

import { useState, useEffect } from 'react';
import StudyHeader from '@/components/StudyHeader';
import QuestionCard from '@/components/QuestionCard';
import { atalayaData } from '@/data/atalaya-data';

export default function Home() {
  const [navigationMode, setNavigationMode] = useState<'scroll' | 'paginated'>('scroll');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [lsmData, setLsmData] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Cargar datos LSM al iniciar
  useEffect(() => {
    fetch('/api/lsm')
      .then(res => res.json())
      .then(data => {
        setLsmData(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error loading LSM data:', err);
        setIsLoading(false);
      });
  }, []);

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < atalayaData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleLSMUpdate = (questionNumber: string, text: string) => {
    setLsmData(prev => ({
      ...prev,
      [questionNumber]: text
    }));
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
          <div className="space-y-4">
            {atalayaData.questions.map((question, index) => (
              <QuestionCard
                key={index}
                question={question}
                paragraphs={atalayaData.paragraphs}
                lsmText={lsmData[question.number]}
                sectionLsmText={lsmData[`section-${question.number}`]}
                onLSMUpdate={handleLSMUpdate}
              />
            ))}
          </div>
        )}

        {/* Modo Paginado - Muestra una pregunta a la vez */}
        {navigationMode === 'paginated' && (
          <div>
            <QuestionCard
              question={atalayaData.questions[currentQuestionIndex]}
              paragraphs={atalayaData.paragraphs}
              lsmText={lsmData[atalayaData.questions[currentQuestionIndex].number]}
              sectionLsmText={lsmData[`section-${atalayaData.questions[currentQuestionIndex].number}`]}
              onLSMUpdate={handleLSMUpdate}
            />

            {/* Controles de navegación */}
            <div className="flex justify-between items-center mt-6 bg-white rounded-lg shadow-md p-4">
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  currentQuestionIndex === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                ⬅️ Anterior
              </button>

              <div className="text-lg font-semibold text-gray-700">
                Pregunta {currentQuestionIndex + 1} de {atalayaData.questions.length}
              </div>

              <button
                onClick={handleNext}
                disabled={currentQuestionIndex === atalayaData.questions.length - 1}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  currentQuestionIndex === atalayaData.questions.length - 1
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
