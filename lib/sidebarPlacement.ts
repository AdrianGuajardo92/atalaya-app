import { Paragraph, Question } from '@/types/atalaya';

/** Párrafos relacionados con la pregunta que tienen recuadro (`sidebar`). */
export function getParagraphsWithSidebar(paragraphs: Paragraph[]): Paragraph[] {
  return paragraphs.filter((p) => p.sidebar);
}

/**
 * Recuadro en la tarjeta de pregunta, inmediatamente después de `question.image`
 * (orden PDF: imagen → recuadro).
 */
export function shouldShowSidebarOnQuestionCard(
  question: Question,
  paragraphsWithSidebar: Paragraph[]
): boolean {
  return paragraphsWithSidebar.length > 0 && Boolean(question.image);
}

/**
 * Recuadro en el flujo del párrafo (modal / navegación inline)
 * cuando no hay imagen de pregunta que ancle el recuadro en la tarjeta.
 */
export function shouldShowSidebarInParagraphFlow(
  question: Question,
  paragraphsWithSidebar: Paragraph[]
): boolean {
  return paragraphsWithSidebar.length > 0 && !question.image;
}
