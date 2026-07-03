import { AnswerItem, Question, ReviewQuestion } from '@/types/atalaya';

export type AnswerSource = Pick<Question, 'answers' | 'answer' | 'answerContext'>;

export function getAnswerItems(source: AnswerSource): AnswerItem[] {
  if (source.answers?.length) {
    return source.answers;
  }

  const mainAnswers = !source.answer
    ? []
    : Array.isArray(source.answer)
      ? source.answer
      : [source.answer];

  return [
    ...mainAnswers.map((text) => ({ text })),
    ...(source.answerContext ?? []).map((text) => ({ text, secondary: true })),
  ];
}

export function getAnswerTexts(source: AnswerSource): string[] {
  return getAnswerItems(source).map((item) => item.text);
}

export function hasAnswerContent(source: AnswerSource): boolean {
  return getAnswerItems(source).length > 0;
}

export type ReviewAnswerSource = Pick<ReviewQuestion, 'answers' | 'answer'>;

export function getReviewAnswerItems(source: ReviewAnswerSource): AnswerItem[] {
  if (source.answers?.length) {
    return source.answers;
  }

  if (!source.answer) return [];

  return (Array.isArray(source.answer) ? source.answer : [source.answer]).map((text) => ({ text }));
}
