import type { Question } from '@/types/atalaya';

export type StudyNavTarget =
  | { kind: 'question'; questionIndex: number }
  | { kind: 'review'; reviewIndex: number };

export const NAV_SIDEBAR_OPEN_STORAGE_KEY = 'atalaya-nav-sidebar-open';

export function isTabletPortraitViewport(width: number, height: number): boolean {
  return width >= 768 && width <= 1023 && height >= width;
}

export function findQuestionIndexForParagraph(
  questions: Question[],
  paragraphNumber: number,
): number {
  return questions.findIndex((question) => question.paragraphs.includes(paragraphNumber));
}

export function getActiveParagraphNumbers(
  questions: Question[],
  currentQuestionIndex: number,
  currentReviewIndex: number,
): number[] {
  if (currentReviewIndex >= 0) return [];

  const question = questions[currentQuestionIndex];
  return question?.paragraphs ?? [];
}

export function isParagraphNavItemDisabled(
  questions: Question[],
  paragraphNumber: number,
): boolean {
  return findQuestionIndexForParagraph(questions, paragraphNumber) === -1;
}
