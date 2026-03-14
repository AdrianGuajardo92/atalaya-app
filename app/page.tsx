'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import StudyHeader from '@/components/StudyHeader';
import QuestionCard from '@/components/QuestionCard';
import ReviewQuestionCard from '@/components/ReviewQuestionCard';
import SummaryView from '@/components/SummaryView';
import Timer from '@/components/Timer';
import InstructionsButton from '@/components/InstructionsButton';
import PdfUploader from '@/components/PdfUploader';
import LsmBulkImport from '@/components/LsmBulkImport';

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
  const [viewMode, setViewMode] = useState<'study' | 'summary'>('study');
  const [navigationMode, setNavigationMode] = useState<'scroll' | 'paginated'>('scroll');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(-1);
  const [lsmData, setLsmData] = useState<Record<string, string>>({});
  const [favorites, setFavorites] = useState<Record<string, boolean>>(() => {
    if (typeof window !== 'undefined') {
      const cached = localStorage.getItem(`atalaya-favorites-cache:${currentArticleId}`);
      return cached ? JSON.parse(cached) : {};
    }
    return {};
  });
  const [hiddenCards, setHiddenCards] = useState<Record<string, boolean>>(() => {
    if (typeof window !== 'undefined') {
      const cached = localStorage.getItem(`atalaya-hidden-cache:${currentArticleId}`);
      return cached ? JSON.parse(cached) : {};
    }
    return {};
  });
  const [usedItems, setUsedItems] = useState<Record<string, boolean>>(() => {
    if (typeof window !== 'undefined') {
      const cached = localStorage.getItem(`atalaya-used-items-cache:${currentArticleId}`);
      return cached ? JSON.parse(cached) : {};
    }
    return {};
  });
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [showPdfUploader, setShowPdfUploader] = useState(false);
  const [showLsmImport, setShowLsmImport] = useState(false);
  const [showViewOptions, setShowViewOptions] = useState(false);

  // Referencia para hacer scroll al contenido
  const contentRef = useRef<HTMLDivElement>(null);

  // Referencia para el menú de opciones de vista
  const viewMenuRef = useRef<HTMLDivElement>(null);

  // Refs para debounced sync — evita race conditions en read-modify-write del KV
  const usedItemsRef = useRef(usedItems);
  usedItemsRef.current = usedItems;
  const favoritesRef = useRef(favorites);
  favoritesRef.current = favorites;
  const hiddenCardsRef = useRef(hiddenCards);
  hiddenCardsRef.current = hiddenCards;
  const articleIdRef = useRef(currentArticleId);
  articleIdRef.current = currentArticleId;

  const saveUsedItemsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const saveFavoritesTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const saveHiddenCardsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (saveUsedItemsTimer.current) clearTimeout(saveUsedItemsTimer.current);
      if (saveFavoritesTimer.current) clearTimeout(saveFavoritesTimer.current);
      if (saveHiddenCardsTimer.current) clearTimeout(saveHiddenCardsTimer.current);
    };
  }, []);

  const syncUsedItems = useCallback(() => {
    if (saveUsedItemsTimer.current) clearTimeout(saveUsedItemsTimer.current);
    saveUsedItemsTimer.current = setTimeout(async () => {
      try {
        await fetch('/api/used-items', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ articleId: articleIdRef.current, data: usedItemsRef.current })
        });
      } catch { /* localStorage cache serves as fallback */ }
    }, 300);
  }, []);

  const syncFavorites = useCallback(() => {
    if (saveFavoritesTimer.current) clearTimeout(saveFavoritesTimer.current);
    saveFavoritesTimer.current = setTimeout(async () => {
      try {
        await fetch('/api/favorites', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ articleId: articleIdRef.current, data: favoritesRef.current })
        });
      } catch { /* localStorage cache serves as fallback */ }
    }, 300);
  }, []);

  const syncHiddenCards = useCallback(() => {
    if (saveHiddenCardsTimer.current) clearTimeout(saveHiddenCardsTimer.current);
    saveHiddenCardsTimer.current = setTimeout(async () => {
      try {
        await fetch('/api/hidden-cards', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ articleId: articleIdRef.current, data: hiddenCardsRef.current })
        });
      } catch { /* localStorage cache serves as fallback */ }
    }, 300);
  }, []);

  // Función para renderizar **negrita** en texto
  const renderBoldText = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

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

  // Persistir estado en localStorage como caché (solo si hay datos)
  useEffect(() => {
    if (typeof window !== 'undefined' && currentArticleId && Object.keys(favorites).length > 0) {
      localStorage.setItem(`atalaya-favorites-cache:${currentArticleId}`, JSON.stringify(favorites));
    }
  }, [favorites, currentArticleId]);

  useEffect(() => {
    if (typeof window !== 'undefined' && currentArticleId && Object.keys(hiddenCards).length > 0) {
      localStorage.setItem(`atalaya-hidden-cache:${currentArticleId}`, JSON.stringify(hiddenCards));
    }
  }, [hiddenCards, currentArticleId]);

  useEffect(() => {
    if (typeof window !== 'undefined' && currentArticleId && Object.keys(usedItems).length > 0) {
      localStorage.setItem(`atalaya-used-items-cache:${currentArticleId}`, JSON.stringify(usedItems));
    }
  }, [usedItems, currentArticleId]);

  // Cargar datos LSM, favoritos y tarjetas ocultas cuando cambia el artículo
  useEffect(() => {
    if (!currentArticleId) return;

    // Primero: cargar caché local del artículo para mostrar datos inmediatamente
    if (typeof window !== 'undefined') {
      const cachedFavorites = localStorage.getItem(`atalaya-favorites-cache:${currentArticleId}`);
      const cachedHidden = localStorage.getItem(`atalaya-hidden-cache:${currentArticleId}`);
      const cachedUsed = localStorage.getItem(`atalaya-used-items-cache:${currentArticleId}`);
      if (cachedFavorites) setFavorites(JSON.parse(cachedFavorites));
      if (cachedHidden) setHiddenCards(JSON.parse(cachedHidden));
      if (cachedUsed) setUsedItems(JSON.parse(cachedUsed));
    }

    // Luego: sincronizar con API en background (null = fallo, no sobrescribir)
    Promise.all([
      fetch(`/api/lsm?articleId=${currentArticleId}`).then(res => res.ok ? res.json() : null).catch(() => null),
      fetch(`/api/favorites?articleId=${currentArticleId}`).then(res => res.ok ? res.json() : null).catch(() => null),
      fetch(`/api/hidden-cards?articleId=${currentArticleId}`).then(res => res.ok ? res.json() : null).catch(() => null),
      fetch(`/api/used-items?articleId=${currentArticleId}`).then(res => res.ok ? res.json() : null).catch(() => null)
    ])
      .then(([lsmDataResult, favoritesResult, hiddenCardsResult, usedItemsResult]) => {
        if (lsmDataResult !== null) setLsmData(lsmDataResult);
        if (favoritesResult !== null) setFavorites(favoritesResult);
        if (hiddenCardsResult !== null) setHiddenCards(hiddenCardsResult);
        if (usedItemsResult !== null) setUsedItems(usedItemsResult);
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

  const handleToggleFavorite = (favoriteId: string) => {
    setFavorites(prev => {
      const next = { ...prev };
      if (!prev[favoriteId]) {
        next[favoriteId] = true;
      } else {
        delete next[favoriteId];
      }
      return next;
    });
    syncFavorites();
  };

  const handleToggleHidden = (cardId: string) => {
    setHiddenCards(prev => ({
      ...prev,
      [cardId]: true
    }));
    syncHiddenCards();
  };

  const handleToggleUsedItem = (itemId: string) => {
    setUsedItems(prev => {
      const next = { ...prev };
      if (!prev[itemId]) {
        next[itemId] = true;
      } else {
        delete next[itemId];
      }
      return next;
    });
    syncUsedItems();
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
        className="hidden xl:block fixed bottom-4 right-4 z-20 bg-blue-600 dark:bg-[#D97757] hover:bg-blue-700 dark:hover:bg-[#C4694D] text-white p-3 rounded-full shadow-lg transition-all hover:scale-105"
        title="Gestionar PDFs"
      >
        <span className="text-xl">📁</span>
      </button>

      {/* Modal de gestión de PDFs */}
      <PdfUploader
        isOpen={showPdfUploader}
        onClose={() => setShowPdfUploader(false)}
      />

      {/* Modal de importación masiva de LSM */}
      <LsmBulkImport
        isOpen={showLsmImport}
        onClose={() => setShowLsmImport(false)}
        articleId={currentArticleId}
        currentLsmData={lsmData}
        onImportComplete={(newData) => setLsmData(newData)}
      />

      {/* Indicador de progreso de scroll circular (solo en modo scroll) */}
      {navigationMode === 'scroll' && showScrollIndicator && (
        <div className="fixed top-20 right-4 z-10 transition-opacity duration-300">
          <div className="relative w-11 h-11">
            <svg className="w-11 h-11 -rotate-90" viewBox="0 0 44 44">
              <circle
                cx="22" cy="22" r="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-slate-200 dark:text-[#4A4A45]"
              />
              <circle
                cx="22" cy="22" r="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="text-amber-400 dark:text-[#E09070] transition-all duration-300"
                strokeDasharray={`${2 * Math.PI * 18}`}
                strokeDashoffset={`${2 * Math.PI * 18 * (1 - scrollProgress / 100)}`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] font-bold text-slate-700 dark:text-[#C2C0B6]">{scrollProgress}%</span>
            </div>
          </div>
        </div>
      )}

      {/* Control de modo de vista y navegación - Menú colapsable */}
      <div ref={viewMenuRef} className="fixed top-4 right-4 z-50 flex items-center gap-2">
        {/* Botón de importación masiva LSM (solo dev) */}
        {process.env.NODE_ENV === 'development' && (
          <button
            onClick={() => setShowLsmImport(true)}
            className="relative w-10 h-10 flex items-center justify-center rounded-lg border border-border bg-surface hover:bg-surface-alt transition-all duration-200 shadow-sm"
            title="Importar LSM en bloque"
          >
            <span className="text-lg">🤟</span>
          </button>
        )}
        {/* Botón de tema */}
        <ThemeToggle />
        {/* Botón principal (siempre visible) */}
        <button
          onClick={() => setShowViewOptions(!showViewOptions)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-[#30302E]/80 backdrop-blur-sm shadow-lg border border-slate-200/50 dark:border-[#3A3A37]/50 hover:scale-105 active:scale-95 transition-all"
          title="Opciones de vista"
        >
          {showViewOptions ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
          )}
        </button>

        {/* Menú expandible */}
        {showViewOptions && (
          <div className="absolute top-14 right-0 bg-white/95 dark:bg-[#30302E]/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 dark:border-[#3A3A37]/50 p-4 animate-fadeIn w-[230px]">
            {/* Vista: segmented control */}
            <p className="text-[11px] font-semibold text-slate-400 dark:text-[#7D7B73] uppercase tracking-[0.15em] mb-2 px-1">Vista</p>
            <div className="bg-slate-100 dark:bg-[#3A3A37]/40 rounded-xl p-1 flex">
              <button
                onClick={() => { setViewMode('study'); setShowViewOptions(false); }}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                  viewMode === 'study'
                    ? 'bg-white dark:bg-[#4A4A45] text-slate-800 dark:text-white shadow-sm'
                    : 'text-slate-500 dark:text-[#8B8980] hover:text-slate-700 dark:hover:text-[#A9A79E]'
                }`}
              >
                Estudio
              </button>
              <button
                onClick={() => { setViewMode('summary'); setShowViewOptions(false); }}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                  viewMode === 'summary'
                    ? 'bg-white dark:bg-[#4A4A45] text-slate-800 dark:text-white shadow-sm'
                    : 'text-slate-500 dark:text-[#8B8980] hover:text-slate-700 dark:hover:text-[#A9A79E]'
                }`}
              >
                Resumen
              </button>
            </div>

            {/* Modo de navegación (solo en modo estudio) */}
            {viewMode === 'study' && (
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-[#3A3A37]/40">
                <p className="text-[11px] font-semibold text-slate-400 dark:text-[#7D7B73] uppercase tracking-[0.15em] mb-2 px-1">Modo</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => { setNavigationMode('scroll'); setShowViewOptions(false); }}
                    className={`p-3 rounded-xl text-xs font-medium transition-all flex flex-col items-center gap-2 ${
                      navigationMode === 'scroll'
                        ? 'bg-slate-800 dark:bg-[#4A4A45] text-white shadow-md'
                        : 'bg-slate-50 dark:bg-[#3A3A37]/30 text-slate-500 dark:text-[#8B8980] hover:bg-slate-100 dark:hover:bg-[#3A3A37]/50'
                    }`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                      <path d="M8 7h6" /><path d="M8 11h8" />
                    </svg>
                    Estudiar
                  </button>
                  <button
                    onClick={() => { setNavigationMode('paginated'); setShowViewOptions(false); }}
                    className={`p-3 rounded-xl text-xs font-medium transition-all flex flex-col items-center gap-2 ${
                      navigationMode === 'paginated'
                        ? 'bg-slate-800 dark:bg-[#4A4A45] text-white shadow-md'
                        : 'bg-slate-50 dark:bg-[#3A3A37]/30 text-slate-500 dark:text-[#8B8980] hover:bg-slate-100 dark:hover:bg-[#3A3A37]/50'
                    }`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 6h8" /><path d="M6 10h12" />
                      <path d="M7 10l1 10h8l1-10" /><path d="M12 6V3" />
                      <circle cx="12" cy="2" r="1" fill="currentColor" />
                    </svg>
                    Atalaya
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Contenido principal */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {viewMode === 'summary' ? (
          <SummaryView article={currentArticle} />
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
                  hiddenCards={hiddenCards}
                  onToggleHidden={handleToggleHidden}
                  usedItems={usedItems}
                  onToggleUsedItem={handleToggleUsedItem}
                  articleId={currentArticleId}
                />
              ))}
            </div>

            {/* Preguntas de Repaso */}
            <div className="mt-12">
              <div className="relative mb-8 mt-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-slate-800 dark:bg-[#1C1919] px-8 py-4 rounded-lg shadow-lg">
                    <h2 className="text-xl md:text-2xl font-bold text-white text-center uppercase tracking-[0.15em]">
                      ¿Qué responderías?
                    </h2>
                  </div>
                </div>
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

            {/* Canción Final */}
            <div className="mt-10 bg-surface-alt rounded-lg shadow-sm p-8 text-center border border-border">
              <p className="text-lg font-semibold text-text-body">
                🎵 {currentArticle.finalSong}
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
                  hiddenCards={hiddenCards}
                  onToggleHidden={handleToggleHidden}
                  usedItems={usedItems}
                  onToggleUsedItem={handleToggleUsedItem}
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
                  (() => {
                    const nextQ = currentArticle.questions[currentQuestionIndex + 1];
                    const hasSection = !!nextQ.section;

                    // Calcular número de subtema
                    let sectionNumber = 0;
                    let totalSections = 0;
                    if (hasSection) {
                      currentArticle.questions.forEach((q, i) => {
                        if (q.section) {
                          totalSections++;
                          if (i === currentQuestionIndex + 1) sectionNumber = totalSections;
                        }
                      });
                    }

                    return (
                      <div className="mt-8">
                        {/* Separador ejecutivo */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent"></div>
                          <span className="text-text-tertiary text-sm">✦</span>
                          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent"></div>
                        </div>

                        {hasSection ? (
                          /* CON SUBTEMA */
                          <div className="text-center space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
                              <span className="text-amber-400 text-[11px] font-bold tracking-[0.15em] uppercase">
                                Subtema {sectionNumber} de {totalSections}
                              </span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-text-primary uppercase tracking-wide leading-tight">
                              {nextQ.section}
                            </h2>
                            <div className="flex items-center justify-center gap-3 pt-1">
                              <div className="h-px w-12 bg-gradient-to-r from-transparent to-border-strong"></div>
                              <span className="text-text-tertiary text-xs font-bold tracking-[0.2em] uppercase">
                                Párrafo {nextQ.paragraphs.join(', ')}
                              </span>
                              <div className="h-px w-12 bg-gradient-to-l from-transparent to-border-strong"></div>
                            </div>
                          </div>
                        ) : (
                          /* SIN SUBTEMA: solo el párrafo */
                          <div className="text-center py-2">
                            <span className="text-text-tertiary text-xs font-bold tracking-[0.2em] uppercase">
                              Párrafo {nextQ.paragraphs.join(', ')}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })()
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
                        <div className="bg-surface-alt border-l-4 border-slate-700 dark:border-[#4A4A45] pl-4 py-3 rounded-r">
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
                  <div className="mt-6 bg-surface-alt border-l-2 border-border-strong p-4 rounded-lg shadow-sm">
                    <p className="text-sm font-semibold text-text-primary mb-2">📋 Siguiente:</p>
                    <div className="text-sm text-text-body">
                      <p className="font-semibold text-text-secondary">
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
                  <div className="mt-6 bg-surface-alt border-l-2 border-border-strong p-4 rounded-lg shadow-sm">
                    <p className="text-sm font-semibold text-text-primary mb-2">📋 Siguiente:</p>
                    <div className="text-sm text-text-body">
                      <p className="font-semibold text-text-secondary">
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
                      className="h-full bg-slate-500 dark:bg-[#8B8980] transition-all duration-300 ease-out"
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
                        : 'bg-slate-700 dark:bg-[#4A4A45] text-white hover:bg-slate-800 dark:hover:bg-[#4A4A45] shadow-sm'
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
                        : 'bg-slate-700 dark:bg-[#4A4A45] text-white hover:bg-slate-800 dark:hover:bg-[#4A4A45]'
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
                        : 'bg-slate-700 dark:bg-[#4A4A45] text-white hover:bg-slate-800 dark:hover:bg-[#4A4A45]'
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
