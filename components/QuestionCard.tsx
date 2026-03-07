'use client';

import { useState, useEffect } from 'react';
import { Question, Paragraph } from '@/types/atalaya';
import { getAllBiblicalTexts } from '@/data/articles';
import { copyToClipboard } from '@/lib/clipboard';
import FlashCards from './FlashCards';
import BiblicalCards from './BiblicalCards';

interface QuestionCardProps {
  question: Question;
  paragraphs: Paragraph[];
  lsmText?: string;
  sectionLsmText?: string;
  onLSMUpdate?: (questionNumber: string, text: string) => void;
  isNavigationMode?: boolean; // Nueva prop para saber si estamos en modo navegación
  favorites: Record<string, boolean>; // Estado de favoritos
  onToggleFavorite: (favoriteId: string) => void; // Callback para marcar/desmarcar favorito
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

export default function QuestionCard({ question, paragraphs, lsmText, sectionLsmText, onLSMUpdate, isNavigationMode = false, favorites, onToggleFavorite, allLsmData, hiddenCards, onToggleHidden, usedItems, onToggleUsedItem, onToggleFlashcardUsed, articleId }: QuestionCardProps) {
  const [showParagraphsModal, setShowParagraphsModal] = useState(false);
  const [showInfographicModal, setShowInfographicModal] = useState(false);
  const [showReadTextModal, setShowReadTextModal] = useState(false);
  const [paragraphCopied, setParagraphCopied] = useState(false);
  const [infographicCopied, setInfographicCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(isNavigationMode); // Expandido por defecto en modo navegación
  const [showFlashcards, setShowFlashcards] = useState(isNavigationMode); // Flashcards visibles en navegación
  const [isEditingLSM, setIsEditingLSM] = useState(false);
  const [editedLSM, setEditedLSM] = useState(lsmText || question.textLSM || '');
  const [isEditingSectionLSM, setIsEditingSectionLSM] = useState(false);
  const [editedSectionLSM, setEditedSectionLSM] = useState(sectionLsmText || question.sectionLSM || '');
  const [isSaving, setIsSaving] = useState(false);
  const [isSavingSection, setIsSavingSection] = useState(false);

  // Estado para editar puntos clave
  const [editingBulletIndex, setEditingBulletIndex] = useState<number | null>(null);
  const [editedBulletText, setEditedBulletText] = useState('');
  const [customBullets, setCustomBullets] = useState<string[]>([]);
  const [isAddingBullet, setIsAddingBullet] = useState(false);
  const [newBulletText, setNewBulletText] = useState('');
  const [isSavingBullets, setIsSavingBullets] = useState(false);
  // Estado para marcar bullets como respuesta directa o entrelazados
  const [bulletTypes, setBulletTypes] = useState<Record<number, 'direct' | 'interlaced'>>({});

  // Estado para preguntas de reflexión
  const [editingReflectionIndex, setEditingReflectionIndex] = useState<number | null>(null);
  const [editedReflectionText, setEditedReflectionText] = useState('');
  const [customReflections, setCustomReflections] = useState<string[]>([]);
  const [isAddingReflection, setIsAddingReflection] = useState(false);
  const [newReflectionText, setNewReflectionText] = useState('');
  const [isSavingReflections, setIsSavingReflections] = useState(false);

  // Estado para aplicaciones prácticas
  const [editingApplicationIndex, setEditingApplicationIndex] = useState<number | null>(null);
  const [editedApplicationText, setEditedApplicationText] = useState('');
  const [customApplications, setCustomApplications] = useState<string[]>([]);
  const [isAddingApplication, setIsAddingApplication] = useState(false);
  const [newApplicationText, setNewApplicationText] = useState('');
  const [isSavingApplications, setIsSavingApplications] = useState(false);

  // Estado para flashcards personalizadas
  const [customFlashcards, setCustomFlashcards] = useState<Array<{ question: string; answer: string; isCustom?: boolean }>>([]);
  // Estado para flashcards slide-down (tarjetas expandidas)
  const [expandedFlashcards, setExpandedFlashcards] = useState<Set<number>>(new Set());


  // Estado para puntos clave completados
  const [completedBullets, setCompletedBullets] = useState<Record<string, boolean>>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`completed-bullets-${articleId}`);
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

  // Bloquear scroll del body cuando hay un modal abierto (funciona en iOS/móviles)
  useEffect(() => {
    const anyModalOpen = showParagraphsModal || showInfographicModal || showReadTextModal;
    if (anyModalOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY, 10) * -1);
      }
    }
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY, 10) * -1);
      }
    };
  }, [showParagraphsModal, showInfographicModal, showReadTextModal]);

  // Guardar puntos clave completados en localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(`completed-bullets-${articleId}`, JSON.stringify(completedBullets));
    }
  }, [completedBullets, articleId]);

  // Función para marcar/desmarcar un punto clave como completado
  const toggleBulletCompleted = (bulletId: string) => {
    setCompletedBullets(prev => ({
      ...prev,
      [bulletId]: !prev[bulletId]
    }));
  };

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

  // Sincronizar estados cuando cambia la pregunta o el modo de navegación
  useEffect(() => {
    setEditedLSM(lsmText || question.textLSM || '');
    setEditedSectionLSM(sectionLsmText || question.sectionLSM || '');
    setIsExpanded(isNavigationMode);
    setShowFlashcards(isNavigationMode);
  }, [question.number, lsmText, sectionLsmText, isNavigationMode, question.textLSM, question.sectionLSM]);

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

  // Bloquear scroll del body cuando el modal de infografía está abierto
  useEffect(() => {
    if (showInfographicModal) {
      const scrollY = window.scrollY;

      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';

      return () => {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [showInfographicModal]);

  // Bloquear scroll del body cuando el modal de párrafos está abierto
  useEffect(() => {
    if (showParagraphsModal) {
      const scrollY = window.scrollY;

      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';

      return () => {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
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

  // Función para formatear el contenido con textos bíblicos
  const formatContent = (text: string) => {
    // Buscar patrones de referencias bíblicas entre paréntesis
    const parts = text.split(/(\([^)]+\))/g);

    return parts.map((part, index) => {
      // Si es una referencia bíblica (está entre paréntesis)
      if (part.startsWith('(') && part.endsWith(')')) {
        return (
          <span key={index} className="text-text-body font-medium">
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  // Función para formatear texto LSM con líneas divisorias
  const formatLSMText = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim() !== '');

    return lines.map((line, index) => (
      <div key={index}>
        <p className="text-lg font-semibold text-text-primary leading-relaxed uppercase mb-0">
          {line}
        </p>
        {index < lines.length - 1 && (
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border-strong to-transparent my-3"></div>
        )}
      </div>
    ));
  };

  // Función para formatear texto LSM de secciones con líneas divisorias
  const formatSectionLSMText = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim() !== '');

    return lines.map((line, index) => (
      <div key={index}>
        <h3 className="text-xl font-bold tracking-wide uppercase mb-0">
          {line}
        </h3>
        {index < lines.length - 1 && (
          <div className="w-24 h-px bg-white/40 mx-auto my-2"></div>
        )}
      </div>
    ));
  };

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

  // Guardar sección al perder foco (clic fuera)
  const handleBlurSectionLSM = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (relatedTarget && (relatedTarget.tagName === 'BUTTON')) {
      return;
    }
    if (!isSavingSection) {
      handleSaveSectionLSM();
    }
  };

  // Funciones para editar puntos clave
  const saveBulletsToKV = async (bullets: string[]) => {
    setIsSavingBullets(true);
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
    } finally {
      setIsSavingBullets(false);
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

  const toggleDirectType = async (index: number) => {
    // Función para marcar/desmarcar como respuesta directa
    let newTypesResult: Record<number, 'direct' | 'interlaced'> = {};

    setBulletTypes(prevTypes => {
      const currentType = prevTypes[index];
      let newType: 'direct' | 'interlaced' | undefined;

      // Si es directa, desmarcar. Si no es directa, marcar como directa
      if (currentType === 'direct') {
        newType = undefined;
      } else {
        newType = 'direct';
      }

      const newTypes = { ...prevTypes };
      if (newType === undefined) {
        delete newTypes[index];
      } else {
        newTypes[index] = newType;
      }

      newTypesResult = newTypes;
      return newTypes;
    });

    // Guardar después de actualizar el estado
    await saveBulletTypesToKV(newTypesResult);
  };

  const toggleInterlacedType = async (index: number) => {
    // Función para marcar/desmarcar como entrelazado
    let newTypesResult: Record<number, 'direct' | 'interlaced'> = {};

    setBulletTypes(prevTypes => {
      const currentType = prevTypes[index];
      let newType: 'direct' | 'interlaced' | undefined;

      // Si es entrelazado, desmarcar. Si no es entrelazado, marcar como entrelazado
      if (currentType === 'interlaced') {
        newType = undefined;
      } else {
        newType = 'interlaced';
      }

      const newTypes = { ...prevTypes };
      if (newType === undefined) {
        delete newTypes[index];
      } else {
        newTypes[index] = newType;
      }

      newTypesResult = newTypes;
      return newTypes;
    });

    // Guardar después de actualizar el estado
    await saveBulletTypesToKV(newTypesResult);
  };

  const handleStartEditBullet = (index: number, text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingBulletIndex(index);
    setEditedBulletText(text);
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
    setIsSavingReflections(true);
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
    } finally {
      setIsSavingReflections(false);
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
    setIsSavingApplications(true);
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
    } finally {
      setIsSavingApplications(false);
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
      {/* Modals (Mismos que el diseño original) */}
      {showParagraphsModal && (
        <div className="fixed inset-0 bg-[var(--backdrop)] backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-surface rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col overflow-hidden border border-border">
            <div className="p-5 border-b border-border-subtle flex justify-between items-center bg-surface-alt">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                <span>📖</span> Párrafos de Estudio
              </h3>
              <button
                onClick={() => setShowParagraphsModal(false)}
                className="text-text-tertiary hover:text-text-secondary transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 overflow-y-auto custom-scrollbar bg-surface overscroll-contain">
              {/* Sección RESUMEN (si algún párrafo tiene summary) */}
              {relatedParagraphs.some(p => p.summary) && (
                <div className="mb-6 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
                  <h4 className="text-xs font-bold text-amber-700 dark:text-amber-300 uppercase tracking-[0.15em] mb-3">Resumen</h4>
                  <div className="space-y-2">
                    {relatedParagraphs
                      .filter(p => p.summary)
                      .map((p, i) => (
                        <div key={i} className="flex gap-2">
                          <span className="font-bold text-amber-800 dark:text-amber-300 text-sm flex-shrink-0">[{p.number}]</span>
                          <span className="text-base text-text-body leading-relaxed">{renderBoldText(p.summary!)}</span>
                        </div>
                      ))}
                  </div>
                </div>
              )}
              <div className="space-y-6">
                {relatedParagraphs.map((paragraph, index) => (
                  <div key={index} className="leading-relaxed text-text-body text-lg">
                    <span className="font-bold text-text-primary mr-2">[{paragraph.number}]</span>
                    {formatContent(paragraph.content)}
                    {/* Imagen del párrafo (si existe) - Diseño Premium */}
                    {paragraph.image && (
                      <div className="mt-4">
                        <img
                          src={paragraph.image}
                          alt={paragraph.imageCaption || `Imagen del párrafo ${paragraph.number}`}
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
                ))}
              </div>
            </div>
            <div className="p-4 border-t border-border-subtle bg-surface-alt flex justify-end gap-3">
              <button
                onClick={async () => {
                  const paragraphsText = relatedParagraphs.map(p => `[${p.number}] ${p.content}`).join('\n\n');
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
                className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors font-medium shadow-sm"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Helper para renderizar modales de textos bíblicos */}
      {showReadTextModal && question.readText && biblicalTexts[question.readText] && (
        <div className="fixed inset-0 bg-[var(--backdrop)] backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-surface rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col overflow-hidden border border-border">
            <div className="p-5 border-b border-border-subtle flex justify-between items-center bg-surface-alt">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                <span>📖</span> Lectura Bíblica
              </h3>
              <button
                onClick={() => setShowReadTextModal(false)}
                className="text-text-tertiary hover:text-text-secondary transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 overflow-y-auto custom-scrollbar bg-surface overscroll-contain">
              <div className="space-y-6">
                {biblicalTexts[question.readText].map((text, index) => (
                  <div key={index} className="bg-surface-alt rounded-lg p-5 border-l-4 border-text-secondary">
                    <h4 className="font-bold text-text-primary mb-2 font-serif">{text.reference}</h4>
                    <p className="text-text-body italic leading-relaxed font-serif text-lg">
                      &quot;{text.text}&quot;
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 border-t border-border-subtle bg-surface-alt flex justify-end">
              <button
                onClick={() => setShowReadTextModal(false)}
                className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors font-medium"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
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
              <div className="bg-slate-800 px-8 py-4 rounded-lg shadow-lg">
                <h2 className="text-xl md:text-2xl font-bold text-white text-center uppercase tracking-[0.15em]">
                  {question.section}
                </h2>
              </div>
            </div>
          </div>

          {/* Sección LSM del subtítulo */}
          <div className="mt-4 flex justify-center">
            {isEditingSectionLSM ? (
              <div className="w-full max-w-xl bg-surface p-4 rounded-lg border border-blue-200 dark:border-blue-800 shadow-md animate-fadeIn">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🤟</span>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Editando LSM</span>
                </div>
                <textarea
                  ref={(el) => { if (el) { el.focus(); el.setSelectionRange(el.value.length, el.value.length); } }}
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
                    className="text-sm bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors disabled:opacity-50 font-medium"
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
                  <span className="text-xs font-bold text-text-tertiary uppercase tracking-wider group-hover/section:text-blue-600 dark:group-hover/section:text-blue-400">LSM</span>
                  <span className="opacity-0 group-hover/section:opacity-100 text-blue-500 dark:text-blue-400 text-xs transition-opacity">✏️</span>
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
              <span className="text-xs font-bold text-text-tertiary tracking-[0.2em] uppercase dark:text-slate-400">
                Pregunta {question.number}
              </span>
              <div className="flex items-center gap-2">
                {/* Botón Infografía */}
                {question.infographic && (
                  <button
                    onClick={() => setShowInfographicModal(true)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-xs font-bold uppercase tracking-wide border border-blue-200 dark:border-blue-800"
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
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-transform active:scale-95 shadow-md group/btn"
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
                <div className="bg-surface p-2 rounded-lg border border-blue-200 dark:border-blue-800 shadow-sm animate-fadeIn">
                  <textarea
                    ref={(el) => { if (el) { el.focus(); el.setSelectionRange(el.value.length, el.value.length); } }}
                    value={editedLSM}
                    onChange={(e) => setEditedLSM(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onBlur={handleBlurLSM}
                    className="w-full p-2 text-text-body border-none focus:ring-0 text-sm resize-none bg-surface"
                    rows={2}
                    placeholder="Escribe la traducción LSM..."
                  />
                  <div className="flex justify-end gap-2 mt-2">
                    <button onMouseDown={handleSaveLSM} className="text-xs bg-blue-600 dark:bg-blue-500 text-white px-2 py-1 rounded">Guardar</button>
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
                    <span className="text-xs font-bold text-text-muted uppercase tracking-wider group-hover/lsm:text-blue-600 dark:group-hover/lsm:text-blue-400">LSM</span>
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
                  : 'bg-slate-800 border-slate-800 text-white hover:bg-slate-900'
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
                    <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-300 flex items-center justify-center text-lg shadow-sm border border-amber-200 dark:border-amber-700">
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
                            const isUsed = usedItems[itemId];
                            return (
                              <div
                                key={idx}
                                className={`mb-3 pl-2 pr-10 py-1 ${usedItemClass(itemId)}`}
                                onClick={() => isSelectableQ && toggleUsedItem(itemId)}
                              >
                                {isUsed && <UsedBadge />}
                                {!isUsed && isSelectableQ && <HoverHint />}
                                <p className="text-lg text-text-body leading-relaxed m-0">
                                  <span className="text-text-tertiary font-medium">[{idx + 1}]</span> {renderBoldText(paragraph)}
                                </p>
                              </div>
                            );
                          })
                          : typeof question.answer === 'string'
                            ? question.answer.split('.').filter(s => s.trim().length > 0).map((sentence, idx) => (
                              <p key={idx} className="text-lg text-text-body leading-relaxed mb-4 block">
                                <span className="text-text-tertiary font-medium">[{idx + 1}]</span> {renderBoldText(sentence.trim() + '.')}
                              </p>
                            ))
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
                            <div className="w-1.5 h-1.5 rounded-full bg-border-strong mt-2.5 group-hover/bullet:bg-blue-500 dark:group-hover/bullet:bg-blue-400 transition-colors"></div>
                            <p className="text-text-secondary group-hover/bullet:text-text-primary transition-colors">{bullet}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Enfoque del Párrafo (Tips para el conductor) - Solo en modo Estudiar */}
                {!isNavigationMode && (question.keyPoint || question.guidingQuestion) && (
                  <div className="mt-8 p-5 rounded-xl border border-amber-200/50 bg-amber-50/50 dark:border-slate-700 dark:bg-slate-800/40 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-amber-400 to-amber-600 dark:from-amber-500 dark:to-orange-500"></div>
                    <div className="flex items-start gap-4">
                      <div className="text-2xl mt-0.5 drop-shadow-sm flex-shrink-0">💡</div>
                      <div className="flex-1 space-y-4">
                        <h3 className="text-sm font-extrabold text-amber-800 dark:text-amber-400 uppercase tracking-widest flex items-center gap-2">
                          Enfoque del Párrafo
                          <span className="text-[10px] font-medium bg-amber-200 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded-full border dark:border-amber-700/50">Exclusivo Conductor</span>
                        </h3>

                        {question.keyPoint && (() => {
                          const itemId = `keypoint-${articleId}-${question.number}`;
                          const isUsed = usedItems[itemId];
                          return (
                            <div className="space-y-1.5">
                              <div className="flex items-center gap-1.5">
                                <span className="text-base">🎯</span>
                                <span className="text-[11px] font-bold text-amber-700/80 dark:text-slate-400 uppercase tracking-wider">Punto Clave</span>
                              </div>
                              <div
                                className={`${usedItemClass(itemId)} px-1 py-1`}
                                onClick={() => toggleUsedItem(itemId)}
                              >
                                {isUsed && <UsedBadge />}
                                {!isUsed && <HoverHint />}
                                <p className="text-base md:text-lg font-medium text-amber-900 dark:text-slate-200 leading-relaxed bg-white/40 dark:bg-slate-900/50 p-3 rounded-lg border border-amber-100 dark:border-slate-700 shadow-inner dark:shadow-black/20 m-0">
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
                                <span className="text-[11px] font-bold text-amber-700/80 dark:text-slate-400 uppercase tracking-wider">Si no lo mencionan, pregunta:</span>
                              </div>
                              <div
                                className={`${usedItemClass(itemId)} px-1 py-1`}
                                onClick={() => toggleUsedItem(itemId)}
                              >
                                {isUsed && <UsedBadge />}
                                {!isUsed && <HoverHint />}
                                <p className="text-base md:text-lg text-amber-800 dark:text-slate-300 italic font-serif leading-relaxed px-3 py-1 border-l-2 border-amber-300 dark:border-slate-600 m-0">
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
                    <div className="flex-1 h-px bg-gradient-to-r from-amber-300/60 via-border-subtle to-blue-300/60 dark:from-amber-700/40 dark:via-slate-700 dark:to-blue-800/40"></div>
                    <span className="text-text-tertiary text-[11px] font-bold uppercase tracking-widest px-1 select-none">Textos</span>
                    <div className="flex-1 h-px bg-gradient-to-l from-amber-300/60 via-border-subtle to-blue-300/60 dark:from-amber-700/40 dark:via-slate-700 dark:to-blue-800/40"></div>
                  </div>
                )}

                {/* Textos Clave en panel (para preguntas con keyPoint/guidingQuestion) */}
                {(question.keyPoint || question.guidingQuestion) && question.biblicalCards && question.biblicalCards.length > 0 && (
                  <div className="mt-3 p-5 rounded-xl border border-blue-200/50 bg-blue-50/30 dark:border-slate-700 dark:bg-slate-800/30 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-400 to-indigo-600 dark:from-blue-500 dark:to-indigo-700"></div>
                    <div className="flex items-start gap-4">
                      <div className="text-2xl mt-0.5 drop-shadow-sm flex-shrink-0">📖</div>
                      <div className="flex-1 space-y-5">
                        <h3 className="text-sm font-extrabold text-blue-800 dark:text-blue-400 uppercase tracking-widest flex items-center gap-2">
                          Textos Clave
                          <span className="text-[10px] font-medium bg-blue-200 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded-full border dark:border-blue-700/50">Razona con la Biblia</span>
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
                                  <span className="font-bold text-base text-blue-900 dark:text-blue-300 font-serif">{card.reference}</span>
                                  <span className="text-text-secondary dark:text-slate-400 text-sm ml-2 italic">— {card.purpose}</span>
                                </div>
                              </div>
                              {/* Texto bíblico clicable */}
                              <div
                                className={`ml-6 ${usedItemClass(itemId)}`}
                                onClick={() => toggleUsedItem(itemId)}
                              >
                                {isUsed && <UsedBadge />}
                                {!isUsed && <HoverHint />}
                                  <p className="text-base text-text-body dark:text-slate-200 leading-relaxed bg-white/40 dark:bg-slate-900/50 p-3 rounded-lg border border-blue-100 dark:border-slate-700 italic m-0">
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
                                      <span className="text-[11px] font-bold text-blue-700/80 dark:text-slate-400 uppercase tracking-wider">Razona con la congregación:</span>
                                    </div>
                                    <div
                                      className={`${usedItemClass(rId)}`}
                                      onClick={() => toggleUsedItem(rId)}
                                    >
                                      {rUsed && <UsedBadge />}
                                      {!rUsed && <HoverHint />}
                                      <p className="text-base text-blue-800 dark:text-slate-300 italic font-serif leading-relaxed px-3 py-1 border-l-2 border-blue-300 dark:border-slate-600 m-0">
                                        "{card.reasoningQuestion}"
                                      </p>
                                    </div>
                                  </div>
                                );
                              })()}
                              {idx < (question.biblicalCards?.length ?? 0) - 1 && (
                                <div className="ml-6 mt-3 h-px bg-blue-100 dark:bg-slate-700"></div>
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
                    <div className="flex-1 h-px bg-gradient-to-r from-blue-300/60 via-border-subtle to-purple-300/60 dark:from-blue-800/40 dark:via-slate-700 dark:to-purple-800/40"></div>
                    <span className="text-text-tertiary text-[11px] font-bold uppercase tracking-widest px-1 select-none">Tarjetas</span>
                    <div className="flex-1 h-px bg-gradient-to-l from-blue-300/60 via-border-subtle to-purple-300/60 dark:from-blue-800/40 dark:via-slate-700 dark:to-purple-800/40"></div>
                  </div>
                )}

                {/* Tarjetas Didácticas en panel (para preguntas con keyPoint/guidingQuestion) - Solo en modo Estudiar */}
                {!isNavigationMode && (question.keyPoint || question.guidingQuestion) && customFlashcards.length > 0 && (
                  <div className="mt-3 p-5 rounded-xl border border-purple-200/50 bg-purple-50/30 dark:border-slate-700 dark:bg-slate-800/25 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-purple-400 to-violet-600 dark:from-purple-500 dark:to-violet-700"></div>
                    <div className="flex items-start gap-4">
                      <div className="text-2xl mt-0.5 drop-shadow-sm flex-shrink-0">🏂</div>
                      <div className="flex-1 space-y-5">
                        <h3 className="text-sm font-extrabold text-purple-800 dark:text-purple-400 uppercase tracking-widest">
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
                                <p className="font-semibold text-base text-purple-900 dark:text-purple-200 leading-relaxed m-0">{card.question}</p>
                              </div>
                              {/* Respuesta - sin checkbox propio, sigue a la pregunta */}
                              {card.answer && (
                                <div className="ml-6 rounded-lg px-1 py-1">
                                  <p className="text-base text-text-body dark:text-slate-200 leading-relaxed bg-white/40 dark:bg-slate-900/50 p-3 rounded-lg border border-purple-100 dark:border-slate-700 m-0">
                                    {card.answer}
                                  </p>
                                </div>
                              )}
                              {idx < customFlashcards.length - 1 && (
                                <div className="ml-6 mt-3 h-px bg-purple-100 dark:bg-slate-700"></div>
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
                  <span className="text-amber-400 dark:text-amber-300 text-sm">✦</span>
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
          <div className="flex-shrink-0 h-12 bg-slate-800 px-4 flex items-center justify-between">
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

