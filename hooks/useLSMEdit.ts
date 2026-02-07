'use client';

import { useState } from 'react';

interface UseLSMEditOptions {
  articleId: string;
  questionNumber: string;
  initialText: string;
  onSuccess?: (text: string) => void;
}

export function useLSMEdit({ articleId, questionNumber, initialText, onSuccess }: UseLSMEditOptions) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(initialText);
  const [isSaving, setIsSaving] = useState(false);

  const startEdit = () => {
    setEditedText(initialText);
    setIsEditing(true);
  };

  const save = async () => {
    setIsSaving(true);
    try {
      const response = await fetch('/api/lsm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          articleId,
          questionNumber,
          lsmText: editedText
        })
      });

      if (response.ok) {
        setIsEditing(false);
        onSuccess?.(editedText);
      } else {
        const data = await response.json();
        alert('Error al guardar: ' + (data.error || 'Error desconocido'));
      }
    } catch (error) {
      console.error('Error saving LSM:', error);
      alert('Error al guardar. Intenta de nuevo.');
    } finally {
      setIsSaving(false);
    }
  };

  const cancel = () => {
    setEditedText(initialText);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      save();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      cancel();
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (relatedTarget && relatedTarget.tagName === 'BUTTON') {
      return;
    }
    if (!isSaving) {
      save();
    }
  };

  return {
    isEditing,
    editedText,
    isSaving,
    setEditedText,
    startEdit,
    save,
    cancel,
    handleKeyDown,
    handleBlur,
  };
}
