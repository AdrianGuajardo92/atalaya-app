'use client';

import { useState, useEffect } from 'react';
import { Question, Paragraph } from '@/types/atalaya';
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
  articleId: string; // ID del artículo actual
}

export default function QuestionCard({ question, paragraphs, lsmText, sectionLsmText, onLSMUpdate, isNavigationMode = false, favorites, onToggleFavorite, allLsmData, hiddenCards, onToggleHidden, articleId }: QuestionCardProps) {
  const [showParagraphsModal, setShowParagraphsModal] = useState(false);
  const [isExpanded, setIsExpanded] = useState(isNavigationMode); // Expandido por defecto en modo navegación
  const [showFlashcards, setShowFlashcards] = useState(isNavigationMode); // Flashcards visibles en navegación
  const [showSummary, setShowSummary] = useState(false); // Estado para mostrar resumen
  const [isEditingLSM, setIsEditingLSM] = useState(false);
  const [editedLSM, setEditedLSM] = useState(lsmText || question.textLSM || '');
  const [isEditingSectionLSM, setIsEditingSectionLSM] = useState(false);
  const [editedSectionLSM, setEditedSectionLSM] = useState(sectionLsmText || question.sectionLSM || '');
  const [isSaving, setIsSaving] = useState(false);
  const [isSavingSection, setIsSavingSection] = useState(false);


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
  const [customFlashcards, setCustomFlashcards] = useState<Array<{ question: string; answer: string }>>([]);

  // Estado para notas personales por pregunta (array de notas)
  const [personalNotes, setPersonalNotes] = useState<Record<string, string[]>>({});
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [editingNoteIndex, setEditingNoteIndex] = useState<number | null>(null);
  const [currentNoteText, setCurrentNoteText] = useState('');
  const [confirmingDeleteNote, setConfirmingDeleteNote] = useState<number | null>(null);

  // Estado para oraciones de respuesta completadas (comentadas en la reunión)
  const [completedSentences, setCompletedSentences] = useState<Record<string, boolean>>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`completed-sentences-${articleId}`);
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

  // Cargar notas personales desde localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`personal-notes-${articleId}`);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          // Migrar formato antiguo (string) a nuevo formato (array)
          const migrated: Record<string, string[]> = {};
          for (const key in parsed) {
            const value = parsed[key];
            if (Array.isArray(value)) {
              migrated[key] = value;
            } else if (typeof value === 'string' && value.trim()) {
              // Convertir string antiguo a array con un elemento
              migrated[key] = [value];
            }
          }
          setPersonalNotes(migrated);
        } catch (e) {
          console.error('Error parsing personal notes:', e);
        }
      }
    }
  }, [articleId]);

  // Guardar notas personales en localStorage
  useEffect(() => {
    if (typeof window !== 'undefined' && Object.keys(personalNotes).length > 0) {
      localStorage.setItem(`personal-notes-${articleId}`, JSON.stringify(personalNotes));
    }
  }, [personalNotes, articleId]);

  // Guardar oraciones completadas en localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(`completed-sentences-${articleId}`, JSON.stringify(completedSentences));
    }
  }, [completedSentences, articleId]);

  // Funciones para manejar notas personales (múltiples por pregunta)
  const noteKey = `q${question.number}`;
  const rawNotes = personalNotes[noteKey];
  const questionNotes = Array.isArray(rawNotes) ? rawNotes : [];

  const handleAddNote = () => {
    if (currentNoteText.trim()) {
      setPersonalNotes(prev => ({
        ...prev,
        [noteKey]: [...(prev[noteKey] || []), currentNoteText.trim()]
      }));
      setCurrentNoteText('');
      setIsAddingNote(false);
    }
  };

  const handleStartEditNote = (index: number) => {
    setEditingNoteIndex(index);
    setCurrentNoteText(questionNotes[index]);
  };

  const handleSaveEditedNote = () => {
    if (editingNoteIndex === null) return;

    if (currentNoteText.trim()) {
      setPersonalNotes(prev => {
        const newNotes = [...(prev[noteKey] || [])];
        newNotes[editingNoteIndex] = currentNoteText.trim();
        return { ...prev, [noteKey]: newNotes };
      });
    }
    setEditingNoteIndex(null);
    setCurrentNoteText('');
  };

  const handleCancelNote = () => {
    setIsAddingNote(false);
    setEditingNoteIndex(null);
    setCurrentNoteText('');
    setConfirmingDeleteNote(null);
  };

  const handleDeleteNoteClick = (index: number) => {
    if (confirmingDeleteNote === index) {
      // Segundo clic: ejecutar el borrado
      setPersonalNotes(prev => {
        const newNotes = (prev[noteKey] || []).filter((_, i) => i !== index);
        if (newNotes.length === 0) {
          const updated = { ...prev };
          delete updated[noteKey];
          return updated;
        }
        return { ...prev, [noteKey]: newNotes };
      });
      setConfirmingDeleteNote(null);
    } else {
      // Primer clic: activar modo confirmación
      setConfirmingDeleteNote(index);
      // Auto-cancelar después de 3 segundos
      setTimeout(() => {
        setConfirmingDeleteNote(prev => prev === index ? null : prev);
      }, 3000);
    }
  };

  // Función para marcar/desmarcar una oración de respuesta como comentada
  const toggleSentenceCompleted = (sentenceId: string) => {
    setCompletedSentences(prev => ({
      ...prev,
      [sentenceId]: !prev[sentenceId]
    }));
  };

  // Función para dividir la respuesta en oraciones
  const splitAnswerIntoSentences = (answer: string): string[] => {
    if (!answer) return [];
    // Dividir por puntos, signos de interrogación y exclamación, pero mantener las oraciones limpias
    const sentences = answer
      .split(/(?<=[.!?])\s+/)
      .map(s => s.trim())
      .filter(s => s.length > 10); // Filtrar oraciones muy cortas
    return sentences;
  };

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
    setShowSummary(false); // Cerrar resumen al cambiar de pregunta
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

  // Obtener los párrafos relacionados con esta pregunta
  const relatedParagraphs = paragraphs.filter(p =>
    question.paragraphs.includes(p.number)
  );

  // Función para formatear el contenido con textos bíblicos
  const formatContent = (text: string) => {
    // Buscar patrones de referencias bíblicas entre paréntesis
    const parts = text.split(/(\([^)]+\))/g);

    return parts.map((part, index) => {
      // Si es una referencia bíblica (está entre paréntesis)
      if (part.startsWith('(') && part.endsWith(')')) {
        return (
          <span key={index} className="text-slate-700 font-medium">
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
        <p className="text-lg font-semibold text-slate-900 leading-relaxed uppercase mb-0">
          {line}
        </p>
        {index < lines.length - 1 && (
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent my-3"></div>
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
  const saveFlashcardsToKV = async (flashcards: Array<{ question: string; answer: string }>) => {
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

  const currentLSMText = lsmText || question.textLSM;
  const currentSectionLSMText = sectionLsmText || question.sectionLSM;

  // Función para generar el resumen del párrafo
  const generateSummary = () => {
    const summaryParts: string[] = [];

    // 1. Tema principal (de la sección o respuesta resumida)
    if (question.section) {
      summaryParts.push(`📌 Tema: ${question.section}`);
    }

    // 2. Extraer experiencias de las flashcards
    const experiences: string[] = [];
    const biblicalStories: string[] = [];

    if (question.flashcards && Array.isArray(question.flashcards)) {
      question.flashcards.forEach((card) => {
        if (typeof card === 'object' && card.question) {
          if (card.question.includes('EXPERIENCIA:')) {
            // Extraer nombre de la experiencia
            const match = card.question.match(/EXPERIENCIA:.*?(\w+)/i);
            if (match) {
              const name = card.question.replace('EXPERIENCIA:', '').trim().split('?')[0].split(',')[0];
              experiences.push(name);
            }
          } else if (card.question.includes('HISTORIA BÍBLICA:')) {
            const name = card.question.replace('HISTORIA BÍBLICA:', '').trim().split('?')[0].split(',')[0];
            biblicalStories.push(name);
          }
        }
      });
    }

    if (experiences.length > 0) {
      summaryParts.push(`👤 Experiencias: ${experiences.join(', ')}`);
    }

    if (biblicalStories.length > 0) {
      summaryParts.push(`📖 Historias bíblicas: ${biblicalStories.join(', ')}`);
    }

    // 3. Resumen de la respuesta (primeras 2 oraciones)
    if (question.answer) {
      const sentences = question.answer.split(/[.!?]+/).filter(s => s.trim());
      const shortAnswer = sentences.slice(0, 2).join('. ').trim();
      if (shortAnswer) {
        summaryParts.push(`💡 ${shortAnswer}.`);
      }
    }

    // 4. Referencias bíblicas mencionadas
    if (question.biblicalCards && question.biblicalCards.length > 0) {
      const refs = question.biblicalCards.map(card => card.reference).slice(0, 3);
      summaryParts.push(`📜 Textos: ${refs.join(', ')}`);
    }

    return summaryParts;
  };

  return (
    <>
      {/* Subtítulo de sección (si existe) */}
      {question.section && (
        <div className="mb-6 mt-8">
          <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white px-6 py-6 rounded-lg shadow-lg group relative">
            {/* Subtítulo en español */}
            <h2 className="text-2xl font-bold text-center uppercase tracking-wide mb-4">
              {question.section}
            </h2>

            {/* Línea divisoria decorativa */}
            <div className="w-20 h-1 bg-white/30 mx-auto mb-4"></div>

            {/* Subtítulo en LSM - Modo visualización */}
            {!isEditingSectionLSM && currentSectionLSMText ? (
              <>
                <div className="text-center">
                  <p className="text-sm mb-3 font-semibold opacity-80">🤟 LSM</p>
                  <div>
                    {formatSectionLSMText(currentSectionLSMText)}
                  </div>
                </div>
                <button
                  onClick={() => setIsEditingSectionLSM(true)}
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 bg-white text-slate-700 text-sm rounded-lg hover:bg-slate-50 font-medium shadow-sm"
                >
                  ✏️ Editar LSM
                </button>
              </>
            ) : !isEditingSectionLSM ? (
              <button
                onClick={() => setIsEditingSectionLSM(true)}
                className="w-full py-2 bg-white/10 border-2 border-dashed border-white/30 rounded-lg hover:bg-white/20 transition-colors text-white font-semibold text-sm"
              >
                ➕ Agregar subtítulo en LSM
              </button>
            ) : null}
          </div>

          {/* Modo edición LSM - Fuera del banner principal */}
          {isEditingSectionLSM && (
            <div className="mt-3 p-4 bg-indigo-50 rounded-lg border-2 border-indigo-400 shadow-sm">
              <p className="text-sm text-indigo-700 mb-2 font-semibold">✍️ Editar Subtítulo LSM (Enter: guardar | Esc: cancelar | Shift+Enter: nueva línea):</p>
              <textarea
                value={editedSectionLSM}
                onChange={(e) => setEditedSectionLSM(e.target.value)}
                onKeyDown={handleSectionKeyDown}
                onBlur={handleBlurSectionLSM}
                className="w-full p-4 border-2 border-indigo-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-xl font-semibold text-slate-900 bg-white shadow-inner"
                rows={3}
                placeholder="Escribe el subtítulo en LSM..."
                autoFocus
              />
              <div className="flex gap-2 mt-3">
                <button
                  onClick={handleSaveSectionLSM}
                  disabled={isSavingSection}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-slate-400 transition-colors font-medium shadow-sm"
                >
                  {isSavingSection ? 'Guardando...' : '💾 Guardar'}
                </button>
                <button
                  onClick={handleCancelSectionEdit}
                  disabled={isSavingSection}
                  className="px-4 py-2 bg-slate-300 text-slate-700 rounded-lg hover:bg-slate-400 transition-colors font-medium"
                >
                  ✖️ Cancelar
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* OPCIÓN 2: Tarjetas Compactas */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-4">
        {/* Número flotante */}
        <div
          className={`flex items-start gap-4 p-6 ${!isNavigationMode ? 'cursor-pointer' : ''}`}
          onClick={() => {
            if (!isNavigationMode) {
              setIsExpanded(!isExpanded);
            }
          }}
        >
          <div className="flex-shrink-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowParagraphsModal(true);
              }}
              className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center shadow-md hover:from-slate-700 hover:to-slate-800 transition-all cursor-pointer"
              title="Ver párrafos"
            >
              <span className="text-white font-semibold text-lg">{question.number}</span>
            </button>
          </div>

          {/* Contenido lado a lado */}
          <div className="flex-1 space-y-4">
            {/* Español - SIEMPRE VISIBLE */}
            <div className="bg-slate-50 rounded-lg p-4 border-l-2 border-slate-300 group relative">
              <div className="text-xs font-medium text-slate-500 mb-1.5">Español</div>
              <p className="text-base text-slate-800 leading-relaxed">
                {question.textEs}
              </p>
              {question.readText && (
                <div className="mt-3 pt-3 border-t border-slate-200">
                  <p className="text-sm font-bold text-blue-700 uppercase">
                    📖 {question.readText}
                  </p>
                </div>
              )}
            </div>

            {/* LSM - SIEMPRE VISIBLE */}
            <div className="bg-indigo-50 rounded-lg p-4 border-l-2 border-indigo-400 group relative">
              {!isEditingLSM && currentLSMText ? (
                <>
                  <div className="text-xs font-semibold text-indigo-700 mb-3">🤟 LSM</div>
                  <div>
                    {formatLSMText(currentLSMText)}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsEditingLSM(true);
                    }}
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 font-medium shadow-sm"
                  >
                    ✏️ Editar
                  </button>
                </>
              ) : !isEditingLSM ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsEditingLSM(true);
                  }}
                  className="w-full py-2 bg-indigo-50 border-2 border-dashed border-indigo-300 rounded-lg hover:bg-indigo-100 transition-colors text-indigo-600 font-medium text-sm"
                >
                  ➕ Agregar pregunta en LSM
                </button>
              ) : null}
            </div>

            {/* Modo edición LSM */}
            {isEditingLSM && (
              <div className="p-4 bg-indigo-50 rounded-lg border-2 border-indigo-400 shadow-sm" onClick={(e) => e.stopPropagation()}>
                <p className="text-sm text-indigo-700 mb-2 font-semibold">✍️ Editar LSM (Enter: guardar | Esc: cancelar | Shift+Enter: nueva línea):</p>
                <textarea
                  value={editedLSM}
                  onChange={(e) => setEditedLSM(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onBlur={handleBlurLSM}
                  className="w-full p-4 border-2 border-indigo-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-xl font-semibold text-slate-900 bg-white shadow-inner"
                  rows={4}
                  placeholder="Escribe la pregunta en LSM..."
                  autoFocus
                />
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={handleSaveLSM}
                    disabled={isSaving}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-slate-400 transition-colors font-medium shadow-sm"
                  >
                    {isSaving ? 'Guardando...' : '💾 Guardar'}
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    disabled={isSaving}
                    className="px-4 py-2 bg-slate-300 text-slate-700 rounded-lg hover:bg-slate-400 transition-colors font-medium"
                  >
                    ✖️ Cancelar
                  </button>
                </div>
              </div>
            )}

            {/* IMAGEN ILUSTRATIVA - Si existe */}
            {question.image && (
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={question.image}
                  alt="Ilustración de la pregunta"
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* IMÁGENES DE LOS PÁRRAFOS RELACIONADOS */}
            {relatedParagraphs.filter(p => p.image).length > 0 && (
              <div className="space-y-4">
                {relatedParagraphs
                  .filter(p => p.image)
                  .map((paragraph) => (
                    <div key={paragraph.number} className="rounded-lg overflow-hidden shadow-md bg-slate-50 p-4">
                      <img
                        src={paragraph.image}
                        alt={paragraph.imageCaption || `Imagen del párrafo ${paragraph.number}`}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                      {paragraph.imageCaption && (
                        <p className="text-sm text-slate-600 italic mt-3 text-center">
                          {paragraph.imageCaption}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
            )}

            {/* RESPUESTA - Colapsable solo en modo scroll */}
            {!isNavigationMode && (
              <div
                className="cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <div className="text-sm text-slate-600 flex items-center gap-2 mb-2">
                  <span>{isExpanded ? '▼' : '▶'}</span>
                  <span className="font-medium">
                    {isExpanded ? 'Ocultar respuesta' : 'Ver respuesta'}
                  </span>
                </div>
              </div>
            )}

            {/* Contenido de la respuesta */}
            {(isExpanded || isNavigationMode) && (question.answer || question.answerBullets) && (
              <div className="bg-emerald-50 rounded-lg p-4 border-l-2 border-emerald-500">
                <div className="text-xs font-semibold text-emerald-700 mb-3">💡 Respuesta</div>

                {/* Respuesta en oraciones separadas - interactivas */}
                {question.answer && (
                  <div className="space-y-2 mb-4">
                    {splitAnswerIntoSentences(question.answer).map((sentence, idx) => {
                      const sentenceId = `q${question.number}-sentence${idx}`;
                      const isCommented = completedSentences[sentenceId];

                      return (
                        <div
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSentenceCompleted(sentenceId);
                          }}
                          className={`
                            flex items-start gap-3 p-2 rounded-lg cursor-pointer transition-all
                            ${isCommented
                              ? 'bg-emerald-200/50 border border-emerald-300'
                              : 'bg-white/50 border border-emerald-100 hover:bg-emerald-100/50'
                            }
                          `}
                        >
                          <span className={`
                            flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5
                            ${isCommented
                              ? 'bg-emerald-500 text-white'
                              : 'bg-emerald-200 text-emerald-700'
                            }
                          `}>
                            {isCommented ? '✓' : idx + 1}
                          </span>
                          <p className={`
                            text-sm leading-relaxed flex-1
                            ${isCommented
                              ? 'text-emerald-700 line-through opacity-70'
                              : 'text-slate-700'
                            }
                          `}>
                            {sentence}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Mis notas personales - Múltiples */}
                <div className="border-t border-emerald-200 pt-3 mt-3" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs font-semibold text-slate-500">📝 Mis notas</div>
                    {!isAddingNote && (
                      <button
                        onClick={() => setIsAddingNote(true)}
                        className="px-2 py-1 text-xs bg-amber-100 hover:bg-amber-200 text-amber-700 rounded font-medium transition-colors"
                      >
                        + Añadir
                      </button>
                    )}
                  </div>

                  {/* Lista de notas existentes */}
                  {questionNotes.length > 0 && (
                    <div className="space-y-2 mb-2">
                      {questionNotes.map((note, idx) => {
                        const isEditingThis = editingNoteIndex === idx;
                        const isConfirmingDelete = confirmingDeleteNote === idx;

                        return (
                          <div
                            key={idx}
                            className={`group bg-amber-50 border rounded-lg p-3 ${isEditingThis ? 'border-amber-400 ring-2 ring-amber-300' : 'border-amber-200'}`}
                          >
                            {!isEditingThis ? (
                              <div className="flex items-start justify-between gap-2">
                                <p className="text-sm text-slate-700 whitespace-pre-wrap flex-1">{note}</p>
                                <div className={`flex gap-1 flex-shrink-0 transition-opacity ${isConfirmingDelete ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                  <button
                                    onClick={() => handleStartEditNote(idx)}
                                    className="px-2 py-1 text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 rounded transition-colors"
                                  >
                                    ✏️
                                  </button>
                                  <button
                                    onClick={() => handleDeleteNoteClick(idx)}
                                    className={`px-2 py-1 text-xs rounded transition-all ${
                                      isConfirmingDelete
                                        ? 'bg-red-500 text-white animate-pulse'
                                        : 'bg-red-50 hover:bg-red-100 text-red-600'
                                    }`}
                                    title={isConfirmingDelete ? 'Clic para confirmar' : 'Eliminar'}
                                  >
                                    {isConfirmingDelete ? '¿Borrar?' : '🗑️'}
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div>
                                <textarea
                                  value={currentNoteText}
                                  onChange={(e) => setCurrentNoteText(e.target.value)}
                                  className="w-full p-2 border-2 border-amber-300 rounded text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                                  rows={2}
                                  autoFocus
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                      e.preventDefault();
                                      handleSaveEditedNote();
                                    } else if (e.key === 'Escape') {
                                      handleCancelNote();
                                    }
                                  }}
                                />
                                <div className="flex gap-2 mt-2">
                                  <button
                                    onClick={handleSaveEditedNote}
                                    className="px-3 py-1 bg-amber-500 text-white text-xs rounded hover:bg-amber-600 font-medium"
                                  >
                                    💾 Guardar
                                  </button>
                                  <button
                                    onClick={handleCancelNote}
                                    className="px-3 py-1 bg-slate-200 text-slate-600 text-xs rounded hover:bg-slate-300"
                                  >
                                    Cancelar
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Formulario para añadir nueva nota */}
                  {isAddingNote && (
                    <div className="bg-white border-2 border-dashed border-amber-300 rounded-lg p-3">
                      <textarea
                        value={currentNoteText}
                        onChange={(e) => setCurrentNoteText(e.target.value)}
                        className="w-full p-2 border border-amber-200 rounded text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                        rows={2}
                        placeholder="Escribe tu nota aquí..."
                        autoFocus
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleAddNote();
                          } else if (e.key === 'Escape') {
                            handleCancelNote();
                          }
                        }}
                      />
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={handleAddNote}
                          className="px-3 py-1 bg-amber-500 text-white text-xs rounded hover:bg-amber-600 font-medium"
                        >
                          ✅ Añadir
                        </button>
                        <button
                          onClick={handleCancelNote}
                          className="px-3 py-1 bg-slate-200 text-slate-600 text-xs rounded hover:bg-slate-300"
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Mensaje si no hay notas y no está añadiendo */}
                  {questionNotes.length === 0 && !isAddingNote && (
                    <p className="text-xs text-slate-400 italic">Sin notas</p>
                  )}
                </div>
              </div>
            )}

            {/* Tarjetas Didácticas - Después de las respuestas */}
            {(isExpanded || isNavigationMode) && question.flashcards && question.flashcards.length > 0 && (
              <div className="mt-4" onClick={(e) => e.stopPropagation()}>
                {/* Mostrar tarjetas siempre (sin botón) */}
                <FlashCards
                  cards={
                    // Normalizar flashcards: si es array de strings, convertir a objetos
                    Array.isArray(question.flashcards) && typeof question.flashcards[0] === 'string'
                      ? (question.flashcards as string[]).map((q) => ({ question: q, answer: '' }))
                      : (question.flashcards as Array<{ question: string; answer: string }>)
                  }
                  questionNumber={question.number}
                  favorites={favorites}
                  onToggleFavorite={onToggleFavorite}
                  lsmData={allLsmData}
                  onLSMUpdate={onLSMUpdate || (() => { })}
                  hiddenCards={hiddenCards}
                  onToggleHidden={onToggleHidden}
                  articleId={articleId}
                />
              </div>
            )}

            {/* Tarjetas de Textos Bíblicos - Después de las flashcards */}
            {(isExpanded || isNavigationMode) && question.biblicalCards && question.biblicalCards.length > 0 && (
              <div className="mt-4" onClick={(e) => e.stopPropagation()}>
                {/* Mostrar tarjetas bíblicas siempre (sin botón) */}
                <BiblicalCards
                  cards={question.biblicalCards}
                  questionNumber={question.number}
                  favorites={favorites}
                  onToggleFavorite={onToggleFavorite}
                  hiddenCards={hiddenCards}
                  onToggleHidden={onToggleHidden}
                />
              </div>
            )}

            {/* Preguntas de Reflexión Personal */}
            {(isExpanded || isNavigationMode) && (customReflections.length > 0 || isAddingReflection) && (
              <div className="mt-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border-2 border-purple-300" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-semibold text-purple-700">💭 Preguntas de Reflexión Personal</div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsAddingReflection(true);
                    }}
                    className="px-2 py-1 bg-purple-200 hover:bg-purple-300 text-purple-700 text-xs rounded font-medium transition-colors"
                  >
                    ➕ Agregar
                  </button>
                </div>
                <div className="space-y-2">
                  {customReflections.map((reflection, idx) => {
                    const isEditingThis = editingReflectionIndex === idx;
                    return (
                      <div
                        key={idx}
                        className={`
                          border rounded-lg p-3 bg-white transition-all group relative
                          ${isEditingThis ? 'ring-2 ring-purple-500' : 'border-purple-200 hover:border-purple-300'}
                        `}
                      >
                        {!isEditingThis ? (
                          <>
                            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button
                                onClick={(e) => handleStartEditReflection(idx, reflection, e)}
                                className="w-6 h-6 bg-blue-500 hover:bg-blue-600 text-white rounded flex items-center justify-center text-xs"
                                title="Editar"
                              >
                                ✏️
                              </button>
                              <button
                                onClick={(e) => handleDeleteReflection(idx, e)}
                                className="w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded flex items-center justify-center text-xs"
                                title="Eliminar"
                              >
                                🗑️
                              </button>
                            </div>
                            <p className="text-sm text-purple-900 leading-relaxed font-medium pr-16">{reflection}</p>
                          </>
                        ) : (
                          <div>
                            <input
                              type="text"
                              value={editedReflectionText}
                              onChange={(e) => setEditedReflectionText(e.target.value)}
                              onKeyDown={handleReflectionKeyDown}
                              className="w-full p-2 border-2 border-purple-400 rounded text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                              placeholder="Editar pregunta de reflexión..."
                              autoFocus
                            />
                            <div className="flex gap-1 mt-2">
                              <button
                                onClick={handleSaveReflection}
                                disabled={isSavingReflections}
                                className="flex-1 px-2 py-1 bg-purple-600 text-white text-xs rounded hover:bg-purple-700 disabled:bg-slate-400 font-medium"
                              >
                                {isSavingReflections ? '...' : '💾'}
                              </button>
                              <button
                                onClick={handleCancelEditReflection}
                                disabled={isSavingReflections}
                                className="flex-1 px-2 py-1 bg-slate-300 text-slate-700 text-xs rounded hover:bg-slate-400 font-medium"
                              >
                                ✖️
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {isAddingReflection && (
                    <div className="border-2 border-dashed border-purple-400 rounded-lg p-3 bg-white">
                      <input
                        type="text"
                        value={newReflectionText}
                        onChange={(e) => setNewReflectionText(e.target.value)}
                        onKeyDown={handleReflectionKeyDown}
                        className="w-full p-2 border-2 border-purple-400 rounded text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Nueva pregunta de reflexión..."
                        autoFocus
                      />
                      <div className="flex gap-1 mt-2">
                        <button
                          onClick={handleAddReflection}
                          disabled={isSavingReflections}
                          className="flex-1 px-2 py-1 bg-purple-600 text-white text-xs rounded hover:bg-purple-700 disabled:bg-slate-400 font-medium"
                        >
                          {isSavingReflections ? '...' : '✅ Agregar'}
                        </button>
                        <button
                          onClick={() => {
                            setIsAddingReflection(false);
                            setNewReflectionText('');
                          }}
                          disabled={isSavingReflections}
                          className="flex-1 px-2 py-1 bg-slate-300 text-slate-700 text-xs rounded hover:bg-slate-400 font-medium"
                        >
                          ✖️
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Aplicaciones Prácticas */}
            {(isExpanded || isNavigationMode) && (customApplications.length > 0 || isAddingApplication) && (
              <div className="mt-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-2 border-blue-300" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-semibold text-blue-700">💡 Aplicaciones Prácticas</div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsAddingApplication(true);
                    }}
                    className="px-2 py-1 bg-blue-200 hover:bg-blue-300 text-blue-700 text-xs rounded font-medium transition-colors"
                  >
                    ➕ Agregar
                  </button>
                </div>
                <div className="space-y-2">
                  {customApplications.map((application, idx) => {
                    const isEditingThis = editingApplicationIndex === idx;
                    return (
                      <div
                        key={idx}
                        className={`
                          border rounded-lg p-3 bg-white transition-all group relative
                          ${isEditingThis ? 'ring-2 ring-blue-500' : 'border-blue-200 hover:border-blue-300'}
                        `}
                      >
                        {!isEditingThis ? (
                          <>
                            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button
                                onClick={(e) => handleStartEditApplication(idx, application, e)}
                                className="w-6 h-6 bg-blue-500 hover:bg-blue-600 text-white rounded flex items-center justify-center text-xs"
                                title="Editar"
                              >
                                ✏️
                              </button>
                              <button
                                onClick={(e) => handleDeleteApplication(idx, e)}
                                className="w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded flex items-center justify-center text-xs"
                                title="Eliminar"
                              >
                                🗑️
                              </button>
                            </div>
                            <p className="text-sm text-blue-900 leading-relaxed font-medium pr-16">{application}</p>
                          </>
                        ) : (
                          <div>
                            <input
                              type="text"
                              value={editedApplicationText}
                              onChange={(e) => setEditedApplicationText(e.target.value)}
                              onKeyDown={handleApplicationKeyDown}
                              className="w-full p-2 border-2 border-blue-400 rounded text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Editar aplicación práctica..."
                              autoFocus
                            />
                            <div className="flex gap-1 mt-2">
                              <button
                                onClick={handleSaveApplication}
                                disabled={isSavingApplications}
                                className="flex-1 px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 disabled:bg-slate-400 font-medium"
                              >
                                {isSavingApplications ? '...' : '💾'}
                              </button>
                              <button
                                onClick={handleCancelEditApplication}
                                disabled={isSavingApplications}
                                className="flex-1 px-2 py-1 bg-slate-300 text-slate-700 text-xs rounded hover:bg-slate-400 font-medium"
                              >
                                ✖️
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {isAddingApplication && (
                    <div className="border-2 border-dashed border-blue-400 rounded-lg p-3 bg-white">
                      <input
                        type="text"
                        value={newApplicationText}
                        onChange={(e) => setNewApplicationText(e.target.value)}
                        onKeyDown={handleApplicationKeyDown}
                        className="w-full p-2 border-2 border-blue-400 rounded text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Nueva aplicación práctica..."
                        autoFocus
                      />
                      <div className="flex gap-1 mt-2">
                        <button
                          onClick={handleAddApplication}
                          disabled={isSavingApplications}
                          className="flex-1 px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 disabled:bg-slate-400 font-medium"
                        >
                          {isSavingApplications ? '...' : '✅ Agregar'}
                        </button>
                        <button
                          onClick={() => {
                            setIsAddingApplication(false);
                            setNewApplicationText('');
                          }}
                          disabled={isSavingApplications}
                          className="flex-1 px-2 py-1 bg-slate-300 text-slate-700 text-xs rounded hover:bg-slate-400 font-medium"
                        >
                          ✖️
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal de párrafos */}
      {showParagraphsModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.15)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)'
          }}
          onClick={() => setShowParagraphsModal(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="sticky top-0 bg-gradient-to-r from-slate-700 to-slate-900 text-white p-6 rounded-t-xl flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">
                  Párrafo{relatedParagraphs.length > 1 ? 's' : ''} {question.paragraphs.join(', ')}
                </h3>
                <p className="text-sm text-slate-300 mt-1">Pregunta {question.number}</p>
              </div>
              <button
                onClick={() => setShowParagraphsModal(false)}
                className="w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all"
                title="Cerrar"
              >
                <span className="text-2xl font-bold">×</span>
              </button>
            </div>

            {/* Resumen del contenido */}
            {generateSummary().length > 0 && (
              <div className="mx-6 mt-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-4 border border-amber-200">
                <div className="text-xs font-bold text-amber-800 mb-3 uppercase tracking-wide">
                  📋 Vista Previa
                </div>
                <div className="space-y-2">
                  {generateSummary().map((part, idx) => (
                    <p key={idx} className="text-sm text-slate-700 leading-relaxed">
                      {part}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Contenido de los párrafos */}
            <div className="p-6 space-y-6">
              {relatedParagraphs.map((paragraph) => (
                <div key={paragraph.number} className="bg-slate-50 rounded-lg p-5 border-l-2 border-indigo-400">
                  {/* Número de párrafo */}
                  <div className="flex items-start gap-4">
                    <span className="bg-gradient-to-br from-slate-600 to-slate-700 text-white font-bold text-base w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0">
                      {paragraph.number}
                    </span>
                    {/* Contenido del párrafo */}
                    <div className="flex-1">
                      <p className="text-base leading-relaxed text-slate-700">
                        {formatContent(paragraph.content)}
                      </p>
                      {/* Imagen del párrafo (si existe) */}
                      {paragraph.image && (
                        <div className="mt-4">
                          <img
                            src={paragraph.image}
                            alt={paragraph.imageCaption || `Imagen del párrafo ${paragraph.number}`}
                            className="w-full rounded-lg shadow-md"
                          />
                          {paragraph.imageCaption && (
                            <p className="text-sm text-slate-600 italic mt-2 text-center">
                              {paragraph.imageCaption}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer del modal */}
            <div className="sticky bottom-0 bg-slate-50 p-4 rounded-b-xl border-t border-slate-200 text-center">
              <button
                onClick={() => setShowParagraphsModal(false)}
                className="px-6 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors font-medium shadow-sm"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
