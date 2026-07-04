import { describe, expect, it } from 'vitest';
import type { Question } from '@/types/atalaya';
import {
  findQuestionIndexForParagraph,
  getActiveParagraphNumbers,
  isParagraphNavItemDisabled,
} from './studyParagraphNav';

const questions: Question[] = [
  { number: '1, 2', textEs: 'P1', paragraphs: [1, 2] },
  { number: '3', textEs: 'P2', paragraphs: [3] },
  { number: '4, 5', textEs: 'P3', paragraphs: [4, 5] },
];

describe('studyParagraphNav', () => {
  it('resuelve el índice de pregunta para un párrafo', () => {
    expect(findQuestionIndexForParagraph(questions, 1)).toBe(0);
    expect(findQuestionIndexForParagraph(questions, 2)).toBe(0);
    expect(findQuestionIndexForParagraph(questions, 3)).toBe(1);
    expect(findQuestionIndexForParagraph(questions, 4)).toBe(2);
    expect(findQuestionIndexForParagraph(questions, 99)).toBe(-1);
  });

  it('devuelve los párrafos activos de la pregunta actual', () => {
    expect(getActiveParagraphNumbers(questions, 0, -1)).toEqual([1, 2]);
    expect(getActiveParagraphNumbers(questions, 2, -1)).toEqual([4, 5]);
    expect(getActiveParagraphNumbers(questions, 1, 0)).toEqual([]);
  });

  it('marca párrafos sin pregunta como deshabilitados', () => {
    expect(isParagraphNavItemDisabled(questions, 3)).toBe(false);
    expect(isParagraphNavItemDisabled(questions, 99)).toBe(true);
  });
});
