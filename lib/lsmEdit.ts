/**
 * Prepara el texto LSM al entrar en modo edición:
 * - Vacío → sin cambios (placeholder intacto)
 * - Con contenido → añade espacio final si no termina ya en espacio
 */
export function prepareLSMEditText(text: string): string {
  if (!text.trim()) return '';
  return text.endsWith(' ') ? text : `${text} `;
}

/** Enfoca un textarea y coloca el cursor al final del texto. */
export function focusTextareaAtEnd(textarea: HTMLTextAreaElement): void {
  textarea.focus();
  const end = textarea.value.length;
  textarea.setSelectionRange(end, end);
}
