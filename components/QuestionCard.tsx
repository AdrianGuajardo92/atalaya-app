'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Question, Paragraph } from '@/types/atalaya';
import { getAllBiblicalTexts } from '@/data/articles';
import { copyToClipboard } from '@/lib/clipboard';
import FlashCards from './FlashCards';
import BiblicalCards from './BiblicalCards';
import VideoLSM from './VideoLSM';

// ─── Componente compartido para mostrar versículos bíblicos ───────────────────
function BibleVerseModal({ title, label, verses, onClose, zIndex = 50 }: {
  title: string;
  label: string;
  verses: { reference: string; text: string }[];
  onClose: () => void;
  zIndex?: number;
}) {
  return (
    <div className="fixed inset-0 bg-[var(--backdrop)] backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn" style={{ zIndex }}>
      <div className="bg-surface rounded-2xl shadow-2xl max-w-xl w-full max-h-[85vh] flex flex-col overflow-hidden border border-border">
        <div className="relative px-7 pt-6 pb-5 bg-surface-alt border-b border-border-subtle">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60" />
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-amber-600 dark:text-amber-500 uppercase tracking-[0.2em] mb-1.5">{label}</p>
              <h3 className="text-xl font-serif font-bold text-text-primary leading-tight">{title}</h3>
            </div>
            <button onClick={onClose} className="flex-shrink-0 mt-0.5 p-1.5 rounded-lg text-text-tertiary hover:text-text-secondary hover:bg-surface-raised transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar overscroll-contain px-7 py-6 space-y-5 bg-surface">
          {verses.map((verse, i) => (
            <div key={i}>
              <p className="text-xs font-bold text-amber-600 dark:text-amber-500 uppercase tracking-widest mb-2">{verse.reference}</p>
              <p className="font-serif text-xl leading-[1.85] text-text-body">
                <span className="text-amber-500 dark:text-amber-400 mr-1 select-none">&ldquo;</span>
                {verse.text}
                {i === verses.length - 1 && <span className="text-amber-500 dark:text-amber-400 ml-0.5 select-none">&rdquo;</span>}
              </p>
              {i < verses.length - 1 && (
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex-1 h-px bg-border-subtle" />
                  <span className="text-amber-400 dark:text-amber-500 text-xs opacity-60">✦</span>
                  <div className="flex-1 h-px bg-border-subtle" />
                </div>
              )}
            </div>
          ))}
          <p className="text-xs text-text-tertiary text-center pt-2 border-t border-border-subtle">Traducción del Nuevo Mundo — 2019</p>
        </div>
        <div className="px-7 py-3.5 border-t border-border-subtle bg-surface-alt flex justify-end">
          <button onClick={onClose} className="px-5 py-2 bg-slate-800 dark:bg-[#1C1919] text-white rounded-lg hover:bg-slate-900 dark:hover:bg-[#141212] transition-colors font-medium text-sm">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

interface QuestionCardProps {
  question: Question;
  paragraphs: Paragraph[];
  lsmText?: string;
  sectionLsmText?: string;
  onLSMUpdate?: (questionNumber: string, text: string) => void;
  isNavigationMode?: boolean; // Nueva prop para saber si estamos en modo navegación
  allLsmData: Record<string, string>; // Todos los datos LSM (incluye flashcards)
  hiddenCards: Record<string, boolean>; // Tarjetas ocultas
  onToggleHidden: (cardId: string) => void; // Callback para ocultar/mostrar tarjeta
  usedItems: Record<string, boolean>; // Items marcados como "voy a usar"
  onToggleUsedItem: (itemId: string) => void; // Callback para marcar/desmarcar item
  onToggleFlashcardUsed: (qId: string, aId: string) => void; // Callback para flashcards (Q+A juntas)
  articleId: string; // ID del artículo actual
}

// Textos bíblicos cargados desde el sistema centralizado de artículos
const biblicalTexts = getAllBiblicalTexts();

export default function QuestionCard({ question, paragraphs, lsmText, sectionLsmText, onLSMUpdate, isNavigationMode = false, allLsmData, hiddenCards, onToggleHidden, usedItems, onToggleUsedItem, onToggleFlashcardUsed, articleId }: QuestionCardProps) {
  const [showParagraphsModal, setShowParagraphsModal] = useState(false);
  const [showParagraphImageModal, setShowParagraphImageModal] = useState<string | null>(null);
  const [expandedParaImages, setExpandedParaImages] = useState<Set<number>>(new Set());
  const paraImageRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const [showInfographicModal, setShowInfographicModal] = useState(false);
  const [showReadTextModal, setShowReadTextModal] = useState(false);
  const [inlineRefModal, setInlineRefModal] = useState<{ title: string; verses: { reference: string; text: string }[] } | null>(null);
  const [paragraphCopied, setParagraphCopied] = useState(false);
  const [copiedAnswerId, setCopiedAnswerId] = useState<string | null>(null);
  const [infographicCopied, setInfographicCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(isNavigationMode); // Expandido por defecto en modo navegación
  const [isEditingLSM, setIsEditingLSM] = useState(false);
  const [editedLSM, setEditedLSM] = useState(lsmText || question.textLSM || '');
  const lsmTextareaRef = useRef<HTMLTextAreaElement>(null);
  const [isEditingSectionLSM, setIsEditingSectionLSM] = useState(false);
  const [editedSectionLSM, setEditedSectionLSM] = useState(sectionLsmText || question.sectionLSM || '');
  const sectionLsmTextareaRef = useRef<HTMLTextAreaElement>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isSavingSection, setIsSavingSection] = useState(false);

  // Estado para editar puntos clave
  const [editingBulletIndex, setEditingBulletIndex] = useState<number | null>(null);
  const [editedBulletText, setEditedBulletText] = useState('');
  const [customBullets, setCustomBullets] = useState<string[]>([]);
  const [isAddingBullet, setIsAddingBullet] = useState(false);
  const [newBulletText, setNewBulletText] = useState('');
  // Estado para marcar bullets como respuesta directa o entrelazados
  const [bulletTypes, setBulletTypes] = useState<Record<number, 'direct' | 'interlaced'>>({});

  // Estado para preguntas de reflexión
  const [editingReflectionIndex, setEditingReflectionIndex] = useState<number | null>(null);
  const [editedReflectionText, setEditedReflectionText] = useState('');
  const [customReflections, setCustomReflections] = useState<string[]>([]);
  const [isAddingReflection, setIsAddingReflection] = useState(false);
  const [newReflectionText, setNewReflectionText] = useState('');

  // Estado para aplicaciones prácticas
  const [editingApplicationIndex, setEditingApplicationIndex] = useState<number | null>(null);
  const [editedApplicationText, setEditedApplicationText] = useState('');
  const [customApplications, setCustomApplications] = useState<string[]>([]);
  const [isAddingApplication, setIsAddingApplication] = useState(false);
  const [newApplicationText, setNewApplicationText] = useState('');

  // Estado para flashcards personalizadas
  const [customFlashcards, setCustomFlashcards] = useState<Array<{ question: string; answer: string; isCustom?: boolean }>>([]);
  // Estado para flashcards slide-down (tarjetas expandidas)
  const [expandedFlashcards, setExpandedFlashcards] = useState<Set<number>>(new Set());

  // Estado para videos LSM de párrafos
  const [videoUrls, setVideoUrls] = useState<Record<number, string>>({});
  const [activeVideoParaNum, setActiveVideoParaNum] = useState<number | null>(null);
  const [isAddingVideoUrl, setIsAddingVideoUrl] = useState<number | null>(null); // párrafo al que se le está agregando video
  const [newVideoUrl, setNewVideoUrl] = useState('');


  // Bloquear scroll del body cuando hay un modal abierto
  const scrollLocked = useRef(false);

  useEffect(() => {
    const anyModalOpen = showParagraphsModal || showInfographicModal || showReadTextModal || !!showParagraphImageModal || !!inlineRefModal;

    if (typeof window === 'undefined') return;

    if (anyModalOpen && !scrollLocked.current) {
      // Primera apertura: guardar posición y bloquear
      const currentScrollY = window.scrollY;
      document.body.style.setProperty('--scroll-y', `${currentScrollY}px`);
      document.body.style.position = 'fixed';
      document.body.style.top = `-${currentScrollY}px`;
      document.body.style.width = '100%';
      scrollLocked.current = true;
    } else if (!anyModalOpen && scrollLocked.current) {
      // Todos cerrados: restaurar posición
      const scrollY = document.body.style.getPropertyValue('--scroll-y');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      scrollLocked.current = false;

      if (scrollY) {
        setTimeout(() => {
          window.scrollTo(0, parseInt(scrollY || '0'));
        }, 0);
      }
    }
    // Sin cleanup aquí: el cleanup de useEffect se ejecuta en cada cambio de
    // dependencia, lo cual interfiere con modales anidados (ej: texto bíblico
    // dentro de párrafos). El cleanup de unmount se maneja por separado.
  }, [showParagraphsModal, showInfographicModal, showReadTextModal, showParagraphImageModal, inlineRefModal]);

  // Cleanup solo al desmontar el componente (no en cambios de dependencias)
  useEffect(() => {
    return () => {
      if (scrollLocked.current) {
        const scrollY = document.body.style.getPropertyValue('--scroll-y');
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        scrollLocked.current = false;
        if (scrollY) {
          window.scrollTo(0, parseInt(scrollY || '0'));
        }
      }
    };
  }, []);

  // usedItems, onToggleUsedItem y onToggleFlashcardUsed ahora vienen de props (persistidos vía API)
  const toggleUsedItem = onToggleUsedItem;
  const toggleFlashcardUsed = onToggleFlashcardUsed;

  // Helper: clases para un bloque seleccionable/marcado
  const usedItemClass = (itemId: string) =>
    usedItems[itemId]
      ? 'cursor-pointer rounded-lg transition-all outline outline-2 outline-emerald-400/70 dark:outline-emerald-600/60 bg-emerald-50/50 dark:bg-emerald-900/15 relative pl-9 pr-9'
      : 'cursor-pointer rounded-lg transition-all hover:bg-surface-raised dark:hover:bg-slate-700/25 relative pl-9 pr-9 group/usable';

  // Badge: checkbox + bookmark cuando el ítem está marcado
  const UsedBadge = () => (
    <>
      <span className="absolute top-1/2 -translate-y-1/2 left-1.5 text-xl select-none leading-none">✅</span>
      <span className="absolute top-1/2 -translate-y-1/2 right-1.5 text-lg select-none leading-none">🔖</span>
    </>
  );

  // Tooltip hover cuando no está marcado
  const HoverHint = () => (
    <>
      <span className="absolute top-1/2 -translate-y-1/2 left-1.5 text-xl select-none leading-none opacity-10 group-hover/usable:opacity-50 transition-opacity">⬜</span>
      <span className="absolute top-1/2 -translate-y-1/2 right-1.5 text-lg select-none leading-none opacity-0 group-hover/usable:opacity-30 transition-opacity">🔖</span>
    </>
  );

  // --- Selección de items ---
  const isSelectableQ = !!(question.keyPoint || question.guidingQuestion);

  // Cargar puntos clave personalizados desde Vercel KV
  useEffect(() => {
    const loadCustomBullets = async () => {
      try {
        const response = await fetch(`/api/lsm?articleId=${articleId}&questionNumber=bullets-${question.number}`);
        if (response.ok) {
          const data = await response.json();
          if (data.lsmText !== undefined && data.lsmText !== null) {
            // Si hay bullets personalizados guardados (incluso si es array vacío), usarlos
            setCustomBullets(JSON.parse(data.lsmText));
          } else {
            // Solo usar los originales si nunca se ha guardado nada
            setCustomBullets(question.answerBullets ?
              (Array.isArray(question.answerBullets) ? question.answerBullets : question.answerBullets.split('\n').filter(b => b.trim()))
              : []
            );
          }
        }
      } catch (error) {
        console.error('Error loading custom bullets:', error);
        // En caso de error, usar los originales
        setCustomBullets(question.answerBullets ?
          (Array.isArray(question.answerBullets) ? question.answerBullets : question.answerBullets.split('\n').filter(b => b.trim()))
          : []
        );
      }
    };
    loadCustomBullets();
  }, [articleId, question.number, question.answerBullets]);

  // Cargar tipos de bullets (directo/entrelazado) desde Vercel KV
  useEffect(() => {
    const loadBulletTypes = async () => {
      try {
        const response = await fetch(`/api/lsm?articleId=${articleId}&questionNumber=bullet-types-${question.number}`);
        if (response.ok) {
          const data = await response.json();
          if (data.lsmText !== undefined && data.lsmText !== null && data.lsmText !== '') {
            setBulletTypes(JSON.parse(data.lsmText));
          }
        }
      } catch (error) {
        console.error('Error loading bullet types:', error);
      }
    };
    loadBulletTypes();
  }, [articleId, question.number]);



  // Cargar preguntas de reflexión personalizadas desde Vercel KV
  useEffect(() => {
    const loadCustomReflections = async () => {
      try {
        const response = await fetch(`/api/lsm?articleId=${articleId}&questionNumber=reflections-${question.number}`);
        if (response.ok) {
          const data = await response.json();
          // Check if lsmText exists and is not empty string
          if (data.lsmText !== undefined && data.lsmText !== null && data.lsmText !== '') {
            const parsed = JSON.parse(data.lsmText);
            setCustomReflections(parsed);
          } else {
            // Solo usar originales si nunca se ha guardado nada
            setCustomReflections(question.reflectionQuestions || []);
          }
        }
      } catch (error) {
        console.error('Error loading custom reflections:', error);
        setCustomReflections(question.reflectionQuestions || []);
      }
    };
    loadCustomReflections();
  }, [articleId, question.number, question.reflectionQuestions]);

  // Cargar aplicaciones prácticas personalizadas desde Vercel KV
  useEffect(() => {
    const loadCustomApplications = async () => {
      try {
        const response = await fetch(`/api/lsm?articleId=${articleId}&questionNumber=applications-${question.number}`);
        if (response.ok) {
          const data = await response.json();
          // Check if lsmText exists and is not empty string
          if (data.lsmText !== undefined && data.lsmText !== null && data.lsmText !== '') {
            const parsed = JSON.parse(data.lsmText);
            setCustomApplications(parsed);
          } else {
            // Solo usar originales si nunca se ha guardado nada
            setCustomApplications(question.practicalApplications || []);
          }
        }
      } catch (error) {
        console.error('Error loading custom applications:', error);
        setCustomApplications(question.practicalApplications || []);
      }
    };
    loadCustomApplications();
  }, [articleId, question.number, question.practicalApplications]);

  // Cargar flashcards personalizadas desde Vercel KV
  useEffect(() => {
    const loadCustomFlashcards = async () => {
      try {
        const response = await fetch(`/api/lsm?articleId=${articleId}&questionNumber=flashcards-${question.number}`);
        if (response.ok) {
          const data = await response.json();
          if (data.lsmText !== undefined && data.lsmText !== null) {
            // Si hay datos guardados (incluso si es array vacío), usarlos
            setCustomFlashcards(JSON.parse(data.lsmText));
          } else {
            // Solo usar originales si nunca se ha guardado nada
            const originalFlashcards = question.flashcards || [];
            // Normalizar al formato de objetos
            const normalized = Array.isArray(originalFlashcards) && typeof originalFlashcards[0] === 'string'
              ? (originalFlashcards as string[]).map((q: string) => ({ question: q, answer: '' }))
              : originalFlashcards as Array<{ question: string; answer: string }>;
            setCustomFlashcards(normalized);
          }
        }
      } catch (error) {
        console.error('Error loading custom flashcards:', error);
        const originalFlashcards = question.flashcards || [];
        const normalized = Array.isArray(originalFlashcards) && typeof originalFlashcards[0] === 'string'
          ? (originalFlashcards as string[]).map((q: string) => ({ question: q, answer: '' }))
          : originalFlashcards as Array<{ question: string; answer: string }>;
        setCustomFlashcards(normalized);
      }
    };
    loadCustomFlashcards();
  }, [articleId, question.number, question.flashcards]);

  // Cargar URLs de videos LSM desde Vercel KV cuando se abre el modal de párrafos
  useEffect(() => {
    if (!showParagraphsModal) return;
    const loadVideoUrls = async () => {
      const urls: Record<number, string> = {};
      for (const p of relatedParagraphs) {
        try {
          const response = await fetch(`/api/lsm?articleId=${articleId}&questionNumber=video-p${p.number}`);
          if (response.ok) {
            const data = await response.json();
            if (data.lsmText && data.lsmText.trim()) {
              urls[p.number] = data.lsmText;
            }
          }
        } catch (error) {
          console.error(`Error loading video URL for paragraph ${p.number}:`, error);
        }
      }
      setVideoUrls(urls);
      // Auto-seleccionar el primer párrafo con video para el panel desktop
      const firstWithVideo = relatedParagraphs.find(p => urls[p.number] || p.videoLSM);
      if (firstWithVideo) setActiveVideoParaNum(firstWithVideo.number);
    };
    loadVideoUrls();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showParagraphsModal, articleId]);

  // Sincronizar estados cuando cambia la pregunta o el modo de navegación
  useEffect(() => {
    setEditedLSM(lsmText || question.textLSM || '');
    setEditedSectionLSM(sectionLsmText || question.sectionLSM || '');
    setIsExpanded(isNavigationMode);
  }, [question.number, lsmText, sectionLsmText, isNavigationMode, question.textLSM, question.sectionLSM]);

  // Enfocar y posicionar cursor al final SOLO al entrar en modo edición LSM
  useEffect(() => {
    if (isEditingLSM && lsmTextareaRef.current) {
      const el = lsmTextareaRef.current;
      el.focus();
      el.setSelectionRange(el.value.length, el.value.length);
    }
  }, [isEditingLSM]);

  // Enfocar y posicionar cursor al final SOLO al entrar en modo edición sección LSM
  useEffect(() => {
    if (isEditingSectionLSM && sectionLsmTextareaRef.current) {
      const el = sectionLsmTextareaRef.current;
      el.focus();
      el.setSelectionRange(el.value.length, el.value.length);
    }
  }, [isEditingSectionLSM]);

  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showParagraphsModal) {
        setShowParagraphsModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showParagraphsModal]);





  // Obtener los párrafos relacionados con esta pregunta
  const relatedParagraphs = paragraphs.filter(p =>
    question.paragraphs.includes(p.number)
  );

  // Función para renderizar **negrita** en texto
  const renderBoldText = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  // Índice de versículos pre-construido para búsqueda O(1) en lugar de O(N) por render
  const verseIndex = useMemo(() => {
    const map = new Map<string, { reference: string; text: string }[]>();
    for (const card of (question.biblicalCards ?? [])) {
      const nums = card.reference.match(/\d+:\d+/g) ?? [];
      for (const n of nums) {
        const existing = map.get(n) ?? [];
        existing.push({ reference: card.reference, text: card.text });
        map.set(n, existing);
      }
    }
    return map;
  }, [question.biblicalCards]);

  // Función para formatear el contenido con textos bíblicos
  const formatContent = useCallback((text: string) => {
    const parts = text.split(/(\([^)]+\))/g);
    const btnCls = 'inline text-amber-700 dark:text-amber-500 font-semibold underline decoration-dotted underline-offset-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer';

    return parts.map((part, index) => {
      if (!part.startsWith('(') || !part.endsWith(')')) {
        return <span key={index}>{part}</span>;
      }

      const inner = part.slice(1, -1).trim();

      // Caso 1: "(lea X)" → buscar en biblicalTexts por clave "LEE X"
      const leaMatch = inner.match(/^lea\s+(.+)$/i);
      if (leaMatch) {
        const verses = biblicalTexts[`LEE ${leaMatch[1].trim()}`];
        if (verses) {
          return (
            <button key={index} onClick={() => setInlineRefModal({ title: leaMatch[1].trim(), verses })} className={btnCls}>
              {part}
            </button>
          );
        }
      }

      // Caso 2: cualquier referencia con patrón capítulo:versículo — búsqueda O(1) con índice
      const verseNums = inner.match(/\d+:\d+/g);
      if (verseNums?.length) {
        const seen = new Set<string>();
        const matched: { reference: string; text: string }[] = [];
        for (const v of verseNums) {
          for (const card of (verseIndex.get(v) ?? [])) {
            if (!seen.has(card.reference)) { seen.add(card.reference); matched.push(card); }
          }
        }
        if (matched.length) {
          const title = matched.length === 1 ? matched[0].reference : inner;
          return (
            <button key={index} onClick={() => setInlineRefModal({ title, verses: matched })} className={btnCls}>
              {part}
            </button>
          );
        }
      }

      // Sin coincidencia: estilo neutro
      return <span key={index} className="text-text-body font-medium">{part}</span>;
    });
  }, [verseIndex, setInlineRefModal]);

  const handleSaveLSM = async () => {
    setIsSaving(true);
    try {
      const response = await fetch('/api/lsm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          articleId: articleId,
          questionNumber: question.number,
          lsmText: editedLSM
        })
      });

      if (response.ok) {
        setIsEditingLSM(false);
        if (onLSMUpdate) {
          onLSMUpdate(question.number, editedLSM);
        }
      } else {
        const responseData = await response.json();
        alert('Error al guardar: ' + (responseData.error || 'Error desconocido'));
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
    // Si presiona Escape, cancelar
    else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancelEdit();
    }
    // Shift+Enter permite salto de línea normal
  };

  // Guardar al perder foco (clic fuera)
  const handleBlurLSM = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    // Verificar que el nuevo elemento con foco no sea un botón dentro del mismo contenedor
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (relatedTarget && (relatedTarget.tagName === 'BUTTON')) {
      return; // No guardar si se hizo clic en un botón (Guardar o Cancelar)
    }
    // Guardar automáticamente
    if (!isSaving) {
      handleSaveLSM();
    }
  };

  const handleSaveSectionLSM = async () => {
    setIsSavingSection(true);
    try {
      const response = await fetch('/api/lsm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          articleId: articleId,
          questionNumber: `section-${question.number}`,
          lsmText: editedSectionLSM
        })
      });

      if (response.ok) {
        setIsEditingSectionLSM(false);
        if (onLSMUpdate) {
          onLSMUpdate(`section-${question.number}`, editedSectionLSM);
        }
      } else {
        const responseData = await response.json();
        alert('Error al guardar: ' + (responseData.error || 'Error desconocido'));
      }
    } catch (error) {
      console.error('Error saving section LSM:', error);
      alert('Error al guardar. Intenta de nuevo.');
    } finally {
      setIsSavingSection(false);
    }
  };

  const handleCancelSectionEdit = () => {
    setEditedSectionLSM(sectionLsmText || question.sectionLSM || '');
    setIsEditingSectionLSM(false);
  };

  const handleSectionKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSaveSectionLSM();
    }
    // Si presiona Escape, cancelar
    else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancelSectionEdit();
    }
  };

  // Funciones para editar puntos clave
  const saveBulletsToKV = async (bullets: string[]) => {
    try {
      const response = await fetch('/api/lsm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          articleId: articleId,
          questionNumber: `bullets-${question.number}`,
          lsmText: JSON.stringify(bullets)
        })
      });

      if (!response.ok) {
        throw new Error('Error al guardar');
      }
      return true;
    } catch (error) {
      console.error('Error saving bullets:', error);
      alert('Error al guardar. Intenta de nuevo.');
      return false;
    }
  };

  const saveBulletTypesToKV = async (types: Record<number, 'direct' | 'interlaced'>) => {
    try {
      await fetch('/api/lsm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          articleId: articleId,
          questionNumber: `bullet-types-${question.number}`,
          lsmText: JSON.stringify(types)
        })
      });
    } catch (error) {
      console.error('Error saving bullet types:', error);
    }
  };

  const handleSaveBullet = async () => {
    if (editingBulletIndex === null) return;

    const newBullets = [...customBullets];
    newBullets[editingBulletIndex] = editedBulletText.trim();

    const success = await saveBulletsToKV(newBullets);
    if (success) {
      setCustomBullets(newBullets);
      setEditingBulletIndex(null);
      setEditedBulletText('');
    }
  };

  const handleCancelEditBullet = () => {
    setEditingBulletIndex(null);
    setEditedBulletText('');
  };

  const handleDeleteBullet = async (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm('¿Eliminar este punto clave?')) return;

    const newBullets = customBullets.filter((_, i) => i !== index);
    const success = await saveBulletsToKV(newBullets);
    if (success) {
      setCustomBullets(newBullets);

      // Reajustar los índices de bulletTypes
      const newTypes: Record<number, 'direct' | 'interlaced'> = {};
      Object.keys(bulletTypes).forEach(key => {
        const oldIndex = parseInt(key);
        if (oldIndex < index) {
          // Los índices menores al eliminado se mantienen igual
          newTypes[oldIndex] = bulletTypes[oldIndex];
        } else if (oldIndex > index) {
          // Los índices mayores al eliminado se mueven una posición hacia atrás
          newTypes[oldIndex - 1] = bulletTypes[oldIndex];
        }
        // El índice eliminado simplemente no se copia
      });

      setBulletTypes(newTypes);
      await saveBulletTypesToKV(newTypes);
    }
  };

  const handleAddBullet = async () => {
    if (!newBulletText.trim()) return;

    const newBullets = [...customBullets, newBulletText.trim()];
    const success = await saveBulletsToKV(newBullets);
    if (success) {
      setCustomBullets(newBullets);
      setNewBulletText('');
      setIsAddingBullet(false);
    }
  };

  const handleBulletKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (editingBulletIndex !== null) {
        handleSaveBullet();
      } else if (isAddingBullet) {
        handleAddBullet();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      if (editingBulletIndex !== null) {
        handleCancelEditBullet();
      } else if (isAddingBullet) {
        setIsAddingBullet(false);
        setNewBulletText('');
      }
    }
  };

  // Funciones para manejar preguntas de reflexión
  const saveReflectionsToKV = async (reflections: string[]) => {
    try {
      const response = await fetch('/api/lsm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          articleId: articleId,
          questionNumber: `reflections-${question.number}`,
          lsmText: JSON.stringify(reflections)
        })
      });
      if (!response.ok) throw new Error('Error al guardar');
      return true;
    } catch (error) {
      console.error('Error saving reflections:', error);
      alert('Error al guardar. Intenta de nuevo.');
      return false;
    }
  };

  const handleStartEditReflection = (index: number, text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingReflectionIndex(index);
    setEditedReflectionText(text);
  };

  const handleSaveReflection = async () => {
    if (editingReflectionIndex === null) return;
    const newReflections = [...customReflections];
    newReflections[editingReflectionIndex] = editedReflectionText.trim();
    const success = await saveReflectionsToKV(newReflections);
    if (success) {
      setCustomReflections(newReflections);
      setEditingReflectionIndex(null);
      setEditedReflectionText('');
    }
  };

  const handleCancelEditReflection = () => {
    setEditingReflectionIndex(null);
    setEditedReflectionText('');
  };

  const handleDeleteReflection = async (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm('¿Eliminar esta pregunta de reflexión?')) return;
    const newReflections = customReflections.filter((_, i) => i !== index);
    const success = await saveReflectionsToKV(newReflections);
    if (success) setCustomReflections(newReflections);
  };

  const handleAddReflection = async () => {
    if (!newReflectionText.trim()) return;
    const newReflections = [...customReflections, newReflectionText.trim()];
    const success = await saveReflectionsToKV(newReflections);
    if (success) {
      setCustomReflections(newReflections);
      setNewReflectionText('');
      setIsAddingReflection(false);
    }
  };

  const handleReflectionKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (editingReflectionIndex !== null) {
        handleSaveReflection();
      } else if (isAddingReflection) {
        handleAddReflection();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      if (editingReflectionIndex !== null) {
        handleCancelEditReflection();
      } else if (isAddingReflection) {
        setIsAddingReflection(false);
        setNewReflectionText('');
      }
    }
  };

  // Funciones para manejar aplicaciones prácticas
  const saveApplicationsToKV = async (applications: string[]) => {
    try {
      const response = await fetch('/api/lsm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          articleId: articleId,
          questionNumber: `applications-${question.number}`,
          lsmText: JSON.stringify(applications)
        })
      });
      if (!response.ok) throw new Error('Error al guardar');
      return true;
    } catch (error) {
      console.error('Error saving applications:', error);
      alert('Error al guardar. Intenta de nuevo.');
      return false;
    }
  };

  const handleStartEditApplication = (index: number, text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingApplicationIndex(index);
    setEditedApplicationText(text);
  };

  const handleSaveApplication = async () => {
    if (editingApplicationIndex === null) return;
    const newApplications = [...customApplications];
    newApplications[editingApplicationIndex] = editedApplicationText.trim();
    const success = await saveApplicationsToKV(newApplications);
    if (success) {
      setCustomApplications(newApplications);
      setEditingApplicationIndex(null);
      setEditedApplicationText('');
    }
  };

  const handleCancelEditApplication = () => {
    setEditingApplicationIndex(null);
    setEditedApplicationText('');
  };

  const handleDeleteApplication = async (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm('¿Eliminar esta aplicación práctica?')) return;
    const newApplications = customApplications.filter((_, i) => i !== index);
    const success = await saveApplicationsToKV(newApplications);
    if (success) setCustomApplications(newApplications);
  };

  const handleAddApplication = async () => {
    if (!newApplicationText.trim()) return;
    const newApplications = [...customApplications, newApplicationText.trim()];
    const success = await saveApplicationsToKV(newApplications);
    if (success) {
      setCustomApplications(newApplications);
      setNewApplicationText('');
      setIsAddingApplication(false);
    }
  };

  const handleApplicationKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (editingApplicationIndex !== null) {
        handleSaveApplication();
      } else if (isAddingApplication) {
        handleAddApplication();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      if (editingApplicationIndex !== null) {
        handleCancelEditApplication();
      } else if (isAddingApplication) {
        setIsAddingApplication(false);
        setNewApplicationText('');
      }
    }
  };

  // Funciones para manejar flashcards
  const saveFlashcardsToKV = async (flashcards: Array<{ question: string; answer: string; isCustom?: boolean }>) => {
    try {
      const response = await fetch('/api/lsm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          articleId: articleId,
          questionNumber: `flashcards-${question.number}`,
          lsmText: JSON.stringify(flashcards)
        })
      });
      if (!response.ok) throw new Error('Error al guardar');
      return true;
    } catch (error) {
      console.error('Error saving flashcards:', error);
      alert('Error al guardar. Intenta de nuevo.');
      return false;
    }
  };

  const handleDeleteFlashcard = async (index: number) => {
    const newFlashcards = customFlashcards.filter((_, i) => i !== index);
    const success = await saveFlashcardsToKV(newFlashcards);
    if (success) {
      setCustomFlashcards(newFlashcards);
    }
  };

  const handleAddFlashcard = async (card: { question: string; answer: string; isCustom?: boolean }) => {
    const newCard = { question: card.question, answer: card.answer, isCustom: true };
    const newFlashcards = [...customFlashcards, newCard];
    const success = await saveFlashcardsToKV(newFlashcards);
    if (success) {
      setCustomFlashcards(newFlashcards);
    }
  };

  const handleEditFlashcard = async (index: number, card: { question: string; answer: string; isCustom?: boolean }) => {
    const newFlashcards = [...customFlashcards];
    newFlashcards[index] = { question: card.question, answer: card.answer, isCustom: customFlashcards[index].isCustom };
    const success = await saveFlashcardsToKV(newFlashcards);
    if (success) {
      setCustomFlashcards(newFlashcards);
    }
  };

  const currentLSMText = lsmText || question.textLSM;
  const currentSectionLSMText = sectionLsmText || question.sectionLSM;

  // RENDERIZADO PREMIUM/EJECUTIVO
  const articleNum = parseInt(articleId.split('-').pop() || '0');

  return (
    <>
      {/* Lightbox infografía de párrafo (mobile) */}
      {showParagraphImageModal && (
        <div
          className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setShowParagraphImageModal(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setShowParagraphImageModal(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={showParagraphImageModal}
            alt="Infografía"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      {/* Modals (Mismos que el diseño original) */}
      {showParagraphsModal && (
        <div className="fixed inset-0 bg-[var(--backdrop)] backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-surface rounded-xl shadow-2xl max-w-2xl md:max-w-6xl xl:max-w-[90vw] 2xl:max-w-[85vw] w-full max-h-[85vh] flex flex-col overflow-hidden border border-border">
            <div className="py-2.5 px-5 border-b border-border-subtle flex justify-between items-center bg-surface-alt">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                <span>📖</span> Párrafos de Estudio
              </h3>
              <div className="flex items-center gap-2">
                {/* Botón infografía: solo mobile, solo si hay imagen en algún párrafo */}
                {relatedParagraphs.some(p => p.image) && (
                  <button
                    onClick={() => {
                      const img = relatedParagraphs.find(p => p.image)?.image!;
                      setShowParagraphImageModal(img);
                    }}
                    className="md:hidden p-1.5 rounded-lg bg-blue-50 dark:bg-[#332520] border border-blue-200 dark:border-[#5C3828] text-blue-700 dark:text-[#E8A68B] transition-colors"
                    title="Ver infografía"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>
                )}
                <button
                  onClick={() => setShowParagraphsModal(false)}
                  className="text-text-tertiary hover:text-text-secondary transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar bg-surface md:overflow-hidden md:flex md:gap-6">
              {/* Panel izquierdo: Párrafos */}
              <div className="flex-1 min-w-0 md:overflow-y-auto md:custom-scrollbar md:overscroll-contain p-6">
                {/* Sección RESUMEN (si algún párrafo tiene summary) */}
                {relatedParagraphs.some(p => p.summary) && (
                  <div className="mb-6 bg-amber-50 dark:bg-[#332520] border border-amber-200 dark:border-[#5C3828] rounded-xl p-5">
                    <h4 className="text-xs font-bold text-amber-700 dark:text-[#E09070] uppercase tracking-[0.15em] mb-3">Resumen</h4>
                    <div className="space-y-2">
                      {relatedParagraphs
                        .filter(p => p.summary)
                        .map((p, i) => (
                          <div key={i} className="flex gap-2">
                            <span className="font-bold text-amber-800 dark:text-[#E09070] text-sm flex-shrink-0">[{p.number}]</span>
                            <span className="text-base text-text-body leading-relaxed">{renderBoldText(p.summary!)}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
                <div className="space-y-6">
                  {relatedParagraphs.map((paragraph, index) => {
                    const paraVideoUrl = videoUrls[paragraph.number] || paragraph.videoLSM;
                    return (
                      <div key={index} className="leading-relaxed text-text-body text-lg">
                        {/* Encabezado del párrafo con botón de video */}
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <span className="font-bold text-text-primary mr-2">[{paragraph.number}]</span>
                            {formatContent(paragraph.content)}
                          </div>
                        </div>
                        {/* Nota al pie del párrafo (si existe) */}
                        {paragraph.note && (
                          <div className="mt-4 flex gap-2.5 rounded-lg border border-border-subtle bg-surface-alt px-4 py-3">
                            <span className="mt-0.5 flex-shrink-0 text-sm text-text-tertiary">📝</span>
                            <p className="text-sm text-text-secondary leading-relaxed italic">{paragraph.note}</p>
                          </div>
                        )}
                        {/* Infografía en acordeón: solo desktop, al fondo del párrafo */}
                        {paragraph.image && (
                          <div
                            ref={el => { if (el) paraImageRefs.current.set(paragraph.number, el); }}
                            className="hidden md:block mt-4"
                          >
                            <button
                              onClick={() => {
                                const isOpening = !expandedParaImages.has(paragraph.number);
                                setExpandedParaImages(prev => {
                                  const next = new Set(prev);
                                  next.has(paragraph.number) ? next.delete(paragraph.number) : next.add(paragraph.number);
                                  return next;
                                });
                                if (isOpening) {
                                  setTimeout(() => {
                                    paraImageRefs.current.get(paragraph.number)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                  }, 50);
                                }
                              }}
                              className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg border border-border bg-surface-alt hover:bg-surface-raised transition-colors text-sm font-bold text-text-secondary"
                            >
                              <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>Infografía</span>
                              </div>
                              <svg
                                className={`w-4 h-4 text-text-tertiary transition-transform duration-200 ${expandedParaImages.has(paragraph.number) ? 'rotate-180' : ''}`}
                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            {expandedParaImages.has(paragraph.number) && (
                              <div className="mt-3 animate-fadeIn">
                                <img
                                  src={paragraph.image}
                                  alt={paragraph.imageCaption || `Infografía del párrafo ${paragraph.number}`}
                                  className="w-full rounded-xl shadow-lg border border-border"
                                />
                                {paragraph.imageCaption && (
                                  <p className="text-sm text-text-secondary italic mt-3 text-center bg-surface-alt p-3 rounded-lg">
                                    {paragraph.imageCaption}
                                  </p>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                        {/* Video LSM inline (solo mobile < md) */}
                        {paraVideoUrl && (
                          <div className="md:hidden">
                            <VideoLSM src={paraVideoUrl} paragraphNumber={paragraph.number} onRemove={async () => {
                              const newUrls = { ...videoUrls };
                              delete newUrls[paragraph.number];
                              setVideoUrls(newUrls);
                              try {
                                await fetch('/api/lsm', {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/json' },
                                  body: JSON.stringify({ articleId, questionNumber: `video-p${paragraph.number}`, lsmText: '' })
                                });
                              } catch (e) { console.error('Error removing video URL:', e); }
                            }} />
                          </div>
                        )}
                        {/* Botón agregar video (solo si no tiene, mobile) */}
                        {!paraVideoUrl && (
                          <div className="md:hidden mt-3">
                            {isAddingVideoUrl === paragraph.number ? (
                              <div className="flex gap-2 items-center animate-fadeIn">
                                <input
                                  type="url"
                                  value={newVideoUrl}
                                  onChange={(e) => setNewVideoUrl(e.target.value)}
                                  placeholder="Pega la URL del video..."
                                  className="flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-surface text-text-body focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  autoFocus
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter' && newVideoUrl.trim()) {
                                      const url = newVideoUrl.trim();
                                      setVideoUrls(prev => ({ ...prev, [paragraph.number]: url }));
                                      fetch('/api/lsm', {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify({ articleId, questionNumber: `video-p${paragraph.number}`, lsmText: url })
                                      }).catch(err => console.error('Error saving video URL:', err));
                                      setNewVideoUrl('');
                                      setIsAddingVideoUrl(null);
                                    } else if (e.key === 'Escape') {
                                      setNewVideoUrl('');
                                      setIsAddingVideoUrl(null);
                                    }
                                  }}
                                />
                                <button onClick={() => { setNewVideoUrl(''); setIsAddingVideoUrl(null); }} className="text-text-tertiary hover:text-text-secondary text-sm">✕</button>
                              </div>
                            ) : (
                              <button
                                onClick={() => setIsAddingVideoUrl(paragraph.number)}
                                className="text-xs text-text-muted hover:text-blue-600 dark:hover:text-[#D97757] transition-colors flex items-center gap-1"
                              >
                                <span>🤟</span> Agregar video LSM...
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Panel derecho: Video LSM sticky (solo desktop >= md) */}
              {(() => {
                const hasAnyVideo = relatedParagraphs.some(p => videoUrls[p.number] || p.videoLSM);
                // Determinar el párrafo activo para el video
                const effectiveParaNum = activeVideoParaNum ?? relatedParagraphs.find(p => videoUrls[p.number] || p.videoLSM)?.number ?? null;
                const activeVideoUrl = effectiveParaNum ? (videoUrls[effectiveParaNum] || relatedParagraphs.find(p => p.number === effectiveParaNum)?.videoLSM) : null;

                return (
                  <div className="hidden md:flex md:w-[40%] xl:w-[45%] md:flex-shrink-0 flex-col p-6 pl-0">
                    <div className="space-y-4">
                      {activeVideoUrl && effectiveParaNum ? (
                        <VideoLSM
                          key={effectiveParaNum}
                          src={activeVideoUrl}
                          paragraphNumber={effectiveParaNum}
                          compact
                          onRemove={async () => {
                            const newUrls = { ...videoUrls };
                            delete newUrls[effectiveParaNum];
                            setVideoUrls(newUrls);
                            setActiveVideoParaNum(null);
                            try {
                              await fetch('/api/lsm', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ articleId, questionNumber: `video-p${effectiveParaNum}`, lsmText: '' })
                              });
                            } catch (e) { console.error('Error removing video URL:', e); }
                          }}
                        />
                      ) : (
                        <div className="rounded-xl border border-dashed border-border p-6 flex flex-col items-center justify-center text-center bg-surface-alt min-h-[200px]">
                          <span className="text-3xl mb-2">🤟</span>
                          <p className="text-sm text-text-muted">
                            {hasAnyVideo
                              ? 'Selecciona un párrafo con 🤟 para ver su video'
                              : 'Aún no hay videos LSM para estos párrafos'
                            }
                          </p>
                        </div>
                      )}

                      {/* Agregar video (desktop) */}
                      <div className="border-t border-border-subtle pt-3">
                        {isAddingVideoUrl !== null ? (
                          <div className="space-y-2 animate-fadeIn">
                            <label className="text-xs font-bold text-text-tertiary uppercase tracking-wider">Agregar video al párrafo {isAddingVideoUrl}</label>
                            <div className="flex gap-2">
                              <input
                                type="url"
                                value={newVideoUrl}
                                onChange={(e) => setNewVideoUrl(e.target.value)}
                                placeholder="URL del video..."
                                className="flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-surface text-text-body focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                autoFocus
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter' && newVideoUrl.trim()) {
                                    const pNum = isAddingVideoUrl;
                                    const url = newVideoUrl.trim();
                                    setVideoUrls(prev => ({ ...prev, [pNum]: url }));
                                    setActiveVideoParaNum(pNum);
                                    fetch('/api/lsm', {
                                      method: 'POST',
                                      headers: { 'Content-Type': 'application/json' },
                                      body: JSON.stringify({ articleId, questionNumber: `video-p${pNum}`, lsmText: url })
                                    }).catch(err => console.error('Error saving video URL:', err));
                                    setNewVideoUrl('');
                                    setIsAddingVideoUrl(null);
                                  } else if (e.key === 'Escape') {
                                    setNewVideoUrl('');
                                    setIsAddingVideoUrl(null);
                                  }
                                }}
                              />
                              <button onClick={() => { setNewVideoUrl(''); setIsAddingVideoUrl(null); }} className="text-text-tertiary hover:text-text-secondary">✕</button>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-wrap gap-2">
                            {relatedParagraphs
                              .filter(p => !videoUrls[p.number] && !p.videoLSM)
                              .map(p => (
                                <button
                                  key={p.number}
                                  onClick={() => setIsAddingVideoUrl(p.number)}
                                  className="text-xs text-text-muted hover:text-blue-600 dark:hover:text-[#D97757] transition-colors flex items-center gap-1 px-2 py-1 rounded border border-dashed border-border hover:border-blue-300 dark:hover:border-[#5C3828]"
                                >
                                  + Párrafo {p.number}
                                </button>
                              ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
            <div className="py-2.5 px-4 border-t border-border-subtle bg-surface-alt flex justify-end gap-3">
              <button
                onClick={async () => {
                  const paragraphsText = relatedParagraphs.map(p => {
                    let text = `[${p.number}] ${p.content}`;
                    if (p.note) text += `\n\nNota: ${p.note}`;
                    return text;
                  }).join('\n\n');
                  let answersText = '';
                  if (question.answer) {
                    const answers = Array.isArray(question.answer)
                      ? question.answer
                      : typeof question.answer === 'string'
                        ? question.answer.split('.').filter(s => s.trim().length > 0).map(s => s.trim() + '.')
                        : [String(question.answer)];
                    answersText = '\n\nRESPUESTA:\n' + answers.map((a, i) => `[${i + 1}] ${a}`).join('\n');
                  }
                  await copyToClipboard(paragraphsText + answersText);
                  setParagraphCopied(true);
                  setTimeout(() => setParagraphCopied(false), 2000);
                }}
                className="px-4 py-2 bg-surface border border-border-strong text-text-body rounded-lg hover:bg-surface-alt transition-colors font-medium flex items-center gap-2 shadow-sm"
              >
                {paragraphCopied ? '✅ Copiado' : '📋 Copiar'}
              </button>
              <button
                onClick={() => setShowParagraphsModal(false)}
                className="px-4 py-2 bg-slate-800 dark:bg-[#1C1919] text-white rounded-lg hover:bg-slate-900 dark:hover:bg-[#141212] transition-colors font-medium shadow-sm"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modales de texto bíblico — usan el componente BibleVerseModal compartido */}
      {inlineRefModal && (
        <BibleVerseModal
          title={inlineRefModal.title}
          label="Texto Bíblico"
          verses={inlineRefModal.verses}
          onClose={() => setInlineRefModal(null)}
          zIndex={55}
        />
      )}
      {showReadTextModal && question.readText && biblicalTexts[question.readText] && (
        <BibleVerseModal
          title={question.readText.replace(/^LEA\s+/i, '')}
          label="Lectura Bíblica"
          verses={biblicalTexts[question.readText]}
          onClose={() => setShowReadTextModal(false)}
          zIndex={50}
        />
      )}

      {/* Subtítulo de Sección - Diseño Ejecutivo */}
      {question.section && (
        <div className="mb-8 mt-12">
          {/* Contenedor del subtítulo */}
          <div className="relative">
            {/* Líneas decorativas laterales */}
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-border"></div>
            </div>

            {/* Subtítulo centrado */}
            <div className="relative flex justify-center">
              <div className="bg-slate-800 dark:bg-[#1C1919] px-8 py-4 rounded-lg shadow-lg">
                <h2 className="text-xl md:text-2xl font-bold text-white text-center uppercase tracking-[0.15em]">
                  {question.section}
                </h2>
              </div>
            </div>
          </div>

          {/* Sección LSM del subtítulo */}
          <div className="mt-4 flex justify-center">
            {isEditingSectionLSM ? (
              <div className="w-full max-w-xl bg-surface p-4 rounded-lg border border-blue-200 dark:border-[#3E2E28] shadow-md animate-fadeIn">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🤟</span>
                  <span className="text-xs font-bold text-blue-600 dark:text-[#D97757] uppercase tracking-wider">Editando LSM</span>
                </div>
                <textarea
                  ref={sectionLsmTextareaRef}
                  value={editedSectionLSM}
                  onChange={(e) => setEditedSectionLSM(e.target.value)}
                  onKeyDown={handleSectionKeyDown}
                  className="w-full p-3 text-text-body border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg resize-none uppercase bg-surface"
                  rows={2}
                  placeholder="Escribe el subtítulo en LSM..."
                />
                <div className="flex justify-end gap-2 mt-3">
                  <button
                    onClick={handleSaveSectionLSM}
                    disabled={isSavingSection}
                    className="text-sm bg-blue-600 dark:bg-[#D97757] text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-[#C4694D] transition-colors disabled:opacity-50 font-medium"
                  >
                    {isSavingSection ? 'Guardando...' : '💾 Guardar'}
                  </button>
                  <button
                    onClick={handleCancelSectionEdit}
                    className="text-sm text-text-muted px-4 py-2 hover:text-text-body"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <div
                onClick={() => setIsEditingSectionLSM(true)}
                className="group/section cursor-pointer px-6 py-3 rounded-lg border border-transparent hover:bg-surface-alt hover:border-border transition-all max-w-xl w-full"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-lg">🤟</span>
                  <span className="text-xs font-bold text-text-tertiary uppercase tracking-wider group-hover/section:text-blue-600 dark:group-hover/section:text-[#D97757]">LSM</span>
                  <span className="opacity-0 group-hover/section:opacity-100 text-blue-500 dark:text-[#D97757] text-xs transition-opacity">✏️</span>
                </div>
                <p className="text-text-secondary font-medium text-lg text-center uppercase">
                  {currentSectionLSMText || <span className="text-text-muted italic font-normal text-sm normal-case">Toca para agregar traducción LSM...</span>}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* DISEÑO PREMIUM */}
      <div id={`question-${question.number}`} className="mb-12 scroll-mt-24 transform transition-all duration-500 ease-out">

        {/* Tarjeta Principal */}
        <div className="bg-surface border border-border rounded-xl shadow-lg overflow-hidden relative group hover:shadow-xl transition-shadow duration-300">

          {/* Barra lateral decorativa */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--gradient-from)] to-[var(--gradient-to)]"></div>

          {/* Cabecera de la Pregunta */}
          <div className="p-8 pb-4">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-text-tertiary tracking-[0.2em] uppercase dark:text-[#8B8980]">
                Pregunta {question.number}
              </span>
              <div className="flex items-center gap-2">
                {/* Botón Infografía */}
                {question.infographic && (
                  <button
                    onClick={() => setShowInfographicModal(true)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-[#332520] text-blue-600 dark:text-[#D97757] hover:bg-blue-100 dark:hover:bg-[#3E2E28] hover:text-blue-700 dark:hover:text-[#E8A68B] transition-colors text-xs font-bold uppercase tracking-wide border border-blue-200 dark:border-[#3E2E28]"
                    title="Ver infografía"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Infografía</span>
                  </button>
                )}
                {/* Botón Párrafos (Diseño Minimalista) */}
                <button
                  onClick={() => setShowParagraphsModal(true)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-alt text-text-secondary hover:bg-surface-raised hover:text-text-primary transition-colors text-xs font-bold uppercase tracking-wide border border-border"
                >
                  <span>Párrafos</span>
                  <span className="bg-surface-raised text-text-body px-1.5 py-0.5 rounded text-[10px]">
                    {question.paragraphs.join(', ')}
                  </span>
                </button>
              </div>
            </div>

            {/* Texto de la Pregunta */}
            <h2 className="text-2xl md:text-3xl font-serif text-text-primary leading-tight mb-2">
              {question.textEs}
            </h2>

            {/* Lectura Bíblica (Si existe) */}
            {question.readText && (
              <div className="mt-4">
                <button
                  onClick={() => setShowReadTextModal(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 dark:bg-[#1C1919] text-white rounded-lg hover:bg-slate-900 dark:hover:bg-[#141212] transition-transform active:scale-95 shadow-md group/btn"
                >
                  <span className="text-lg">📖</span>
                  <span className="font-medium tracking-wide">{question.readText}</span>
                  <span className="opacity-0 group-hover/btn:opacity-100 transition-opacity ml-1">→</span>
                </button>
              </div>
            )}
          </div>

          {/* Sección Intermedia: LSM y Herramientas */}
          <div className="px-8 py-4 bg-surface-alt border-y border-border-subtle dark:border-border flex flex-wrap items-center gap-4">

            {/* Botón LSM */}
            <div className="flex-1 min-w-[200px]">
              {isEditingLSM ? (
                <div className="bg-surface p-2 rounded-lg border border-blue-200 dark:border-[#3E2E28] shadow-sm animate-fadeIn">
                  <textarea
                    ref={lsmTextareaRef}
                    value={editedLSM}
                    onChange={(e) => setEditedLSM(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onBlur={handleBlurLSM}
                    className="w-full p-2 text-text-body border-none focus:ring-0 text-sm resize-none bg-surface"
                    rows={2}
                    placeholder="Escribe la traducción LSM..."
                  />
                  <div className="flex justify-end gap-2 mt-2">
                    <button onMouseDown={handleSaveLSM} className="text-xs bg-blue-600 dark:bg-[#D97757] text-white px-2 py-1 rounded">Guardar</button>
                    <button onMouseDown={handleCancelEdit} className="text-xs text-text-muted px-2 py-1">Cancelar</button>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => setIsEditingLSM(true)}
                  className="group/lsm cursor-pointer p-3 rounded-lg border border-transparent hover:bg-surface hover:border-border hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">🤟</span>
                    <span className="text-xs font-bold text-text-muted uppercase tracking-wider group-hover/lsm:text-blue-600 dark:group-hover/lsm:text-[#D97757]">LSM</span>
                  </div>
                  <p className="text-text-body font-medium text-lg leading-snug min-h-[1.5rem] uppercase">
                    {lsmText || question.textLSM || <span className="text-text-muted italic font-normal text-sm">Agregar traducción...</span>}
                  </p>
                </div>
              )}
            </div>

            {/* Botones de Acción */}
            <div className="flex gap-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all shadow-sm border ${isExpanded
                  ? 'bg-surface-raised border-border-strong text-text-body'
                  : 'bg-slate-800 dark:bg-[#1C1919] border-slate-800 dark:border-[#1C1919] text-white hover:bg-slate-900 dark:hover:bg-[#141212]'
                  }`}
              >
                {isExpanded ? 'Ocultar Respuesta' : 'Ver Respuesta'}
              </button>
            </div>
          </div>

          {/* IMAGEN ILUSTRATIVA - Si existe (Diseño Premium) */}
          {question.image && (
            <div className="px-8 py-6 bg-surface">
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img
                  src={question.image}
                  alt={question.imageCaption || "Ilustración de la pregunta"}
                  className="w-full h-auto object-cover"
                />
                {question.imageCaption && (
                  <p className="text-sm text-text-secondary italic p-4 bg-surface-alt text-center border-t border-border-subtle">
                    {question.imageCaption}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Contenido Expandible (Respuesta y Tarjetas) */}
          {isExpanded && (
            <div className="animate-slideDown">

              {/* Sección de Respuesta */}
              <div className="p-8 bg-surface">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-[#3E2E28] text-amber-600 dark:text-[#E09070] flex items-center justify-center text-lg shadow-sm border border-amber-200 dark:border-[#8B5A40]">
                      💡
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">

                    {/* Label RESPUESTA (solo si hay answerContext) */}
                    {question.answerContext && question.answerContext.length > 0 && (
                      <div className="mb-3">
                        <span className="text-xs font-bold text-text-tertiary uppercase tracking-[0.2em]">Respuesta</span>
                      </div>
                    )}

                    {/* Respuesta Principal con click para marcar */}
                    <div className="prose prose-slate max-w-none">
                      {question.answer && (
                        Array.isArray(question.answer)
                          ? question.answer.map((paragraph, idx) => {
                            const itemId = `answer-${articleId}-${question.number}-${idx}`;
                            const copyId = `copy-${question.number}-${idx}`;
                            const isUsed = usedItems[itemId];
                            return (
                              <div
                                key={idx}
                                className={`group/answer mb-3 pl-2 pr-2 py-1 flex items-start gap-1 ${usedItemClass(itemId)}`}
                                onClick={() => isSelectableQ && toggleUsedItem(itemId)}
                              >
                                <div className="flex-1 min-w-0">
                                  {isUsed && <UsedBadge />}
                                  {!isUsed && isSelectableQ && <HoverHint />}
                                  <p className="text-lg text-text-body leading-relaxed m-0">
                                    <span className="text-text-tertiary font-medium">[{idx + 1}]</span> {renderBoldText(paragraph)}
                                  </p>
                                </div>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    const cleanText = paragraph.replace(/\*\*/g, '');
                                    copyToClipboard(cleanText);
                                    setCopiedAnswerId(copyId);
                                    setTimeout(() => setCopiedAnswerId(null), 1500);
                                  }}
                                  className="flex-shrink-0 mt-1 p-1.5 rounded-lg opacity-0 group-hover/answer:opacity-100 focus:opacity-100 transition-opacity text-text-tertiary hover:text-text-primary hover:bg-surface-alt"
                                  title="Copiar respuesta"
                                >
                                  {copiedAnswerId === copyId ? (
                                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                  ) : (
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                  )}
                                </button>
                              </div>
                            );
                          })
                          : typeof question.answer === 'string'
                            ? question.answer.split('.').filter(s => s.trim().length > 0).map((sentence, idx) => {
                              const copyId = `copy-str-${question.number}-${idx}`;
                              const sentenceText = sentence.trim() + '.';
                              return (
                                <div key={idx} className="group/answer mb-4 flex items-start gap-1">
                                  <p className="flex-1 min-w-0 text-lg text-text-body leading-relaxed m-0">
                                    <span className="text-text-tertiary font-medium">[{idx + 1}]</span> {renderBoldText(sentenceText)}
                                  </p>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      copyToClipboard(sentenceText.replace(/\*\*/g, ''));
                                      setCopiedAnswerId(copyId);
                                      setTimeout(() => setCopiedAnswerId(null), 1500);
                                    }}
                                    className="flex-shrink-0 mt-1 p-1.5 rounded-lg opacity-40 md:opacity-0 group-hover/answer:opacity-100 focus:opacity-100 transition-opacity text-text-tertiary hover:text-text-primary hover:bg-surface-alt"
                                    title="Copiar respuesta"
                                  >
                                    {copiedAnswerId === copyId ? (
                                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    ) : (
                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                    )}
                                  </button>
                                </div>
                              );
                            })
                            : <p className="text-lg text-text-body leading-relaxed">{renderBoldText(String(question.answer))}</p>
                      )}
                    </div>

                    {/* Sección CONTEXTO (solo si existe answerContext) */}
                    {question.answerContext && question.answerContext.length > 0 && (
                      <div className="mt-6 border-l-2 border-border dark:border-border-strong bg-surface-alt rounded-r-lg p-5">
                        <div className="mb-3">
                          <span className="text-xs font-bold text-text-tertiary uppercase tracking-[0.2em]">Contexto</span>
                        </div>
                        <div className="space-y-3">
                          {question.answerContext.map((ctx, idx) => (
                            <p key={idx} className="text-base text-text-secondary leading-relaxed">
                              <span className="text-text-tertiary font-medium">[{idx + 1}]</span> {renderBoldText(ctx)}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Puntos Clave */}
                    {(question.answerBullets || customBullets.length > 0) && (
                      <div className="mt-6 space-y-3">
                        {(customBullets.length > 0 ? customBullets : question.answerBullets as string[]).map((bullet, idx) => (
                          <div key={idx} className="flex gap-3 group/bullet">
                            <div className="w-1.5 h-1.5 rounded-full bg-border-strong mt-2.5 group-hover/bullet:bg-blue-500 dark:group-hover/bullet:bg-[#D97757] transition-colors"></div>
                            <p className="text-text-secondary group-hover/bullet:text-text-primary transition-colors">{bullet}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Enfoque del Párrafo (Tips para el conductor) - Solo en modo Estudiar */}
                {!isNavigationMode && (question.keyPoint || question.guidingQuestion) && (
                  <div className="mt-8 p-5 rounded-xl border border-amber-200/50 bg-amber-50/50 dark:border-[#3A3A37] dark:bg-[#30302E]/40 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500 dark:bg-[#C49A6C]"></div>
                    <div className="flex items-start gap-4">
                      <div className="text-2xl mt-0.5 drop-shadow-sm flex-shrink-0">💡</div>
                      <div className="flex-1 space-y-4">
                        <h3 className="text-sm font-extrabold text-amber-800 dark:text-[#D97757] uppercase tracking-widest flex items-center gap-2">
                          Enfoque del Párrafo
                          <span className="text-[10px] font-medium bg-amber-200 dark:bg-[#3E2E28]/60 text-amber-800 dark:text-[#E09070] px-2 py-0.5 rounded-full border dark:border-[#8B5A40]/50">Exclusivo Conductor</span>
                        </h3>

                        {question.keyPoint && (() => {
                          const itemId = `keypoint-${articleId}-${question.number}`;
                          const isUsed = usedItems[itemId];
                          return (
                            <div className="space-y-1.5">
                              <div className="flex items-center gap-1.5">
                                <span className="text-base">🎯</span>
                                <span className="text-[11px] font-bold text-amber-700/80 dark:text-[#8B8980] uppercase tracking-wider">Punto Clave</span>
                              </div>
                              <div
                                className={`${usedItemClass(itemId)} px-1 py-1`}
                                onClick={() => toggleUsedItem(itemId)}
                              >
                                {isUsed && <UsedBadge />}
                                {!isUsed && <HoverHint />}
                                <p className="text-base md:text-lg font-medium text-amber-900 dark:text-[#C2C0B6] leading-relaxed bg-white/40 dark:bg-[#262624]/50 p-3 rounded-lg border border-amber-100 dark:border-[#3A3A37] shadow-inner dark:shadow-black/20 m-0">
                                  {question.keyPoint}
                                </p>
                              </div>
                            </div>
                          );
                        })()}

                        {question.guidingQuestion && (() => {
                          const itemId = `guiding-${articleId}-${question.number}`;
                          const isUsed = usedItems[itemId];
                          return (
                            <div className="space-y-1.5">
                              <div className="flex items-center gap-1.5">
                                <span className="text-base">🆘</span>
                                <span className="text-[11px] font-bold text-amber-700/80 dark:text-[#8B8980] uppercase tracking-wider">Si no lo mencionan, pregunta:</span>
                              </div>
                              <div
                                className={`${usedItemClass(itemId)} px-1 py-1`}
                                onClick={() => toggleUsedItem(itemId)}
                              >
                                {isUsed && <UsedBadge />}
                                {!isUsed && <HoverHint />}
                                <p className="text-base md:text-lg text-amber-800 dark:text-[#A9A79E] italic font-serif leading-relaxed px-3 py-1 border-l-2 border-amber-300 dark:border-[#4A4A45] m-0">
                                  "{question.guidingQuestion}"
                                </p>
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                )}

                {/* Línea divisoria entre Enfoque del Párrafo y Textos Clave */}
                {!isNavigationMode && (question.keyPoint || question.guidingQuestion) && question.biblicalCards && question.biblicalCards.length > 0 && (
                  <div className="flex items-center gap-3 mt-5">
                    <div className="flex-1 h-px bg-gradient-to-r from-amber-300/60 via-border-subtle to-blue-300/60 dark:from-[#8B5A40]/40 dark:via-[#3A3A37] dark:to-[#3E2E28]/40"></div>
                    <span className="text-text-tertiary text-[11px] font-bold uppercase tracking-widest px-1 select-none">Textos</span>
                    <div className="flex-1 h-px bg-gradient-to-l from-amber-300/60 via-border-subtle to-blue-300/60 dark:from-[#8B5A40]/40 dark:via-[#3A3A37] dark:to-[#3E2E28]/40"></div>
                  </div>
                )}

                {/* Textos Clave en panel (para preguntas con keyPoint/guidingQuestion) */}
                {(question.keyPoint || question.guidingQuestion) && question.biblicalCards && question.biblicalCards.length > 0 && (
                  <div className="mt-3 p-5 rounded-xl border border-blue-200/50 bg-blue-50/30 dark:border-[#3A3A37] dark:bg-[#30302E]/30 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500 dark:bg-[#8FA7A0]"></div>
                    <div className="flex items-start gap-4">
                      <div className="text-2xl mt-0.5 drop-shadow-sm flex-shrink-0">📖</div>
                      <div className="flex-1 space-y-5">
                        <h3 className="text-sm font-extrabold text-blue-800 dark:text-[#D97757] uppercase tracking-widest flex items-center gap-2">
                          Textos Clave
                          <span className="text-[10px] font-medium bg-blue-200 dark:bg-[#3E2E28]/60 text-blue-800 dark:text-[#E8A68B] px-2 py-0.5 rounded-full border dark:border-[#D97757]/50">Razona con la Biblia</span>
                        </h3>
                        {question.biblicalCards.map((card, idx) => {
                          const itemId = `biblical-panel-${articleId}-${question.number}-${idx}`;
                          const rId = `biblical-reason-${articleId}-${question.number}-${idx}`;
                          const isUsed = usedItems[itemId];
                          return (
                            <div key={idx} className="space-y-2">
                              {/* Referencia + propósito */}
                              <div className="flex items-start gap-2">
                                <span className="text-base mt-0.5">📌</span>
                                <div>
                                  <span className="font-bold text-base text-blue-900 dark:text-[#E8A68B] font-serif">{card.reference}</span>
                                  <span className="text-text-secondary dark:text-[#8B8980] text-sm ml-2 italic">— {card.purpose}</span>
                                </div>
                              </div>
                              {/* Texto bíblico clicable */}
                              <div
                                className={`ml-6 ${usedItemClass(itemId)}`}
                                onClick={() => toggleUsedItem(itemId)}
                              >
                                {isUsed && <UsedBadge />}
                                {!isUsed && <HoverHint />}
                                  <p className="text-base text-text-body dark:text-[#C2C0B6] leading-relaxed bg-white/40 dark:bg-[#262624]/50 p-3 rounded-lg border border-blue-100 dark:border-[#3A3A37] italic m-0">
                                    "{card.text}"
                                  </p>
                                </div>
                              {/* Razonamiento */}
                              {card.reasoningQuestion && (() => {
                                const rUsed = usedItems[rId];
                                return (
                                  <div className="ml-6 space-y-1">
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-base">🗣️</span>
                                      <span className="text-[11px] font-bold text-blue-700/80 dark:text-[#8B8980] uppercase tracking-wider">Razona con la congregación:</span>
                                    </div>
                                    <div
                                      className={`${usedItemClass(rId)}`}
                                      onClick={() => toggleUsedItem(rId)}
                                    >
                                      {rUsed && <UsedBadge />}
                                      {!rUsed && <HoverHint />}
                                      <p className="text-base text-blue-800 dark:text-[#A9A79E] italic font-serif leading-relaxed px-3 py-1 border-l-2 border-blue-300 dark:border-[#4A4A45] m-0">
                                        "{card.reasoningQuestion}"
                                      </p>
                                    </div>
                                  </div>
                                );
                              })()}
                              {idx < (question.biblicalCards?.length ?? 0) - 1 && (
                                <div className="ml-6 mt-3 h-px bg-blue-100 dark:bg-[#3A3A37]"></div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Divisor Textos Clave → Tarjetas */}
                {(question.keyPoint || question.guidingQuestion) && customFlashcards.length > 0 && (
                  <div className="flex items-center gap-3 mt-5">
                    <div className="flex-1 h-px bg-gradient-to-r from-blue-300/60 via-border-subtle to-purple-300/60 dark:from-[#3E2E28]/40 dark:via-[#3A3A37] dark:to-purple-800/40"></div>
                    <span className="text-text-tertiary text-[11px] font-bold uppercase tracking-widest px-1 select-none">Tarjetas</span>
                    <div className="flex-1 h-px bg-gradient-to-l from-blue-300/60 via-border-subtle to-purple-300/60 dark:from-[#3E2E28]/40 dark:via-[#3A3A37] dark:to-purple-800/40"></div>
                  </div>
                )}

                {/* Tarjetas Didácticas en panel (para preguntas con keyPoint/guidingQuestion) - Solo en modo Estudiar */}
                {!isNavigationMode && (question.keyPoint || question.guidingQuestion) && customFlashcards.length > 0 && (
                  <div className="mt-3 p-5 rounded-xl border border-purple-200/50 bg-purple-50/30 dark:border-[#3A3A37] dark:bg-[#1C1919]/60 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-purple-400 dark:bg-[#D97757]"></div>
                    <div className="flex items-start gap-4">
                      <div className="text-2xl mt-0.5 drop-shadow-sm flex-shrink-0">🏂</div>
                      <div className="flex-1 space-y-5">
                        <h3 className="text-sm font-extrabold text-purple-800 dark:text-[#E8A68B] uppercase tracking-widest">
                          Tarjetas Didácticas
                        </h3>
                        {customFlashcards.map((card, idx) => {
                          const qId = `fc-q-${articleId}-${question.number}-${idx}`;
                          const aId = `fc-a-${articleId}-${question.number}-${idx}`;
                          const qUsed = usedItems[qId];
                          return (
                            <div key={idx} className="space-y-2">
                              {/* Pregunta - con checkbox único que controla pregunta + respuesta */}
                              <div
                                className={`flex items-start gap-2 px-2 py-1 ${usedItemClass(qId)}`}
                                onClick={() => toggleFlashcardUsed(qId, aId)}
                              >
                                {qUsed && <UsedBadge />}
                                {!qUsed && <HoverHint />}
                                <span className="text-base mt-0.5 flex-shrink-0">❓</span>
                                <p className="font-semibold text-base text-purple-900 dark:text-[#C2C0B6] leading-relaxed m-0">{card.question}</p>
                              </div>
                              {/* Respuesta - sin checkbox propio, sigue a la pregunta */}
                              {card.answer && (
                                <div className="ml-6 rounded-lg px-1 py-1">
                                  <p className="text-base text-text-body dark:text-[#A9A79E] leading-relaxed bg-white/40 dark:bg-[#262624]/40 p-3 rounded-lg border border-purple-100 dark:border-[#30302E] m-0">
                                    {card.answer}
                                  </p>
                                </div>
                              )}
                              {idx < customFlashcards.length - 1 && (
                                <div className="ml-6 mt-3 h-px bg-purple-100 dark:bg-[#30302E]"></div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Línea divisoria elegante */}
              <div className="px-8 py-4 bg-surface">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-300/70" />
                  <span className="text-amber-400 dark:text-[#E09070] text-sm">✦</span>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-300/70" />
                </div>
              </div>

              {/* Grid de Tarjetas (Fondo sutil) */}
              <div className="bg-surface-alt p-8">

                {/* Flashcards Slide-Down (prueba: artículo 48, pregunta 1,2) */}
                {articleNum === 48 && (question.flashcards || customFlashcards.length > 0) && (
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4 min-h-[40px]">
                      <div className="text-xs font-bold text-text-muted uppercase tracking-wider">🎴 Tarjetas Didácticas</div>
                      <div className="text-xs text-text-tertiary font-medium">
                        {customFlashcards.length} {customFlashcards.length === 1 ? 'tarjeta' : 'tarjetas'}
                      </div>
                    </div>
                    <div className="space-y-3">
                      {customFlashcards.map((card, index) => {
                        const cardId = `flashcard-${question.number}-${index}`;
                        if (hiddenCards[cardId]) return null;
                        const isOpen = expandedFlashcards.has(index);
                        return (
                          <div
                            key={index}
                            className="bg-surface rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                          >
                            {/* Pregunta (siempre visible) */}
                            <button
                              onClick={() => {
                                setExpandedFlashcards(prev => {
                                  const next = new Set(prev);
                                  if (next.has(index)) next.delete(index);
                                  else next.add(index);
                                  return next;
                                });
                              }}
                              className="w-full text-left px-5 py-4 flex items-start gap-3 group"
                            >
                              <span className={`text-text-tertiary mt-0.5 text-sm transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
                                ▸
                              </span>
                              <span className="text-text-body font-sans font-semibold text-base leading-relaxed flex-1">
                                {card.question}
                              </span>
                              <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full transition-colors ${isOpen ? 'bg-slate-800 text-white' : 'bg-surface-raised text-text-secondary'}`}>
                                {isOpen ? 'Ocultar' : 'Ver'}
                              </span>
                            </button>

                            {/* Respuesta (slide-down) */}
                            <div
                              className={`overflow-hidden transition-all duration-400 ease-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                              <div className="px-5 pb-4 pt-0">
                                <div className="ml-6 pl-4 border-l-2 border-amber-300">
                                  <p className="text-text-secondary leading-relaxed text-[15px]">
                                    {card.answer}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">

                  {/* Tarjetas Didácticas (flip cards): solo para preguntas SIN panel de conductor - Solo en modo Estudiar */}
                  {!isNavigationMode && !(articleNum === 48) && (question.flashcards || customFlashcards.length > 0) && !(question.keyPoint || question.guidingQuestion) && (
                    <div className="space-y-4">

                      <FlashCards
                        cards={customFlashcards}
                        questionNumber={question.number}
                        lsmData={allLsmData}
                        onLSMUpdate={onLSMUpdate || (() => { })}
                        hiddenCards={hiddenCards}
                        onToggleHidden={onToggleHidden}
                        articleId={articleId}
                        onAddCard={handleAddFlashcard}
                        onEditCard={handleEditFlashcard}
                        onDeleteCard={handleDeleteFlashcard}
                      />
                    </div>
                  )}

                  {/* Textos Bíblicos (flip cards): solo para preguntas SIN panel de conductor) */}
                  {question.biblicalCards && !(question.keyPoint || question.guidingQuestion) && (
                    <div className="space-y-4">

                      <BiblicalCards
                        cards={question.biblicalCards}
                        questionNumber={question.number}
                        hiddenCards={hiddenCards}
                        onToggleHidden={onToggleHidden}
                      />
                    </div>
                  )}
                </div>
              </div>

            </div>
          )}

        </div>
      </div>

      {/* Modal de infografía para diseño premium */}
      {showInfographicModal && question.infographic && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col"
          onClick={() => setShowInfographicModal(false)}
        >
          {/* Header compacto */}
          <div className="flex-shrink-0 h-12 bg-slate-800 dark:bg-[#1C1919] px-4 flex items-center justify-between">
            <span className="text-white text-sm font-medium flex items-center gap-2">
              Infografía - Pregunta {question.number}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={async (e) => {
                  e.stopPropagation();
                  const textToCopy = `Infografía - Pregunta ${question.number}\n\n${question.textEs}\n\nURL: ${question.infographic}`;
                  await copyToClipboard(textToCopy);
                  setInfographicCopied(true);
                  setTimeout(() => setInfographicCopied(false), 2000);
                }}
                className={`p-2 rounded-lg ${infographicCopied ? 'bg-green-500' : 'bg-white/20 hover:bg-white/30'} transition-all`}
                title={infographicCopied ? '¡Copiado!' : 'Copiar enlace'}
              >
                {infographicCopied ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
              <button
                onClick={() => setShowInfographicModal(false)}
                className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* BOTÓN GRANDE DE CERRAR - Fácil de tocar en móvil/tablet */}
          <div className="flex-shrink-0 px-4 py-2 bg-black">
            <button
              onClick={() => setShowInfographicModal(false)}
              className="w-full py-4 bg-red-600 hover:bg-red-500 active:bg-red-700
                           text-white font-semibold text-lg rounded-xl
                           flex items-center justify-center gap-3
                           transition-all duration-150
                           shadow-lg hover:shadow-xl
                           touch-manipulation
                           min-h-[56px]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>CERRAR INFOGRAFÍA</span>
            </button>
          </div>

          {/* Contenedor de imagen */}
          <div
            className="flex-1 overflow-hidden flex items-center justify-center p-2 bg-surface"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={question.infographic}
              alt={`Infografía para la pregunta ${question.number}`}
              className="max-w-full object-contain"
              style={{ maxHeight: 'calc(100vh - 140px)' }}
            />
          </div>
        </div>
      )}
    </>
  );
}

