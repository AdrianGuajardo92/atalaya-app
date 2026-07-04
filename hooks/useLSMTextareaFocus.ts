'use client';

import { useEffect, useRef } from 'react';
import { focusTextareaAtEnd } from '@/lib/lsmEdit';

/** Enfoca el textarea LSM y posiciona el cursor al final al entrar en modo edición. */
export function useLSMTextareaFocus(isEditing: boolean) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      focusTextareaAtEnd(textareaRef.current);
    }
  }, [isEditing]);

  return textareaRef;
}
