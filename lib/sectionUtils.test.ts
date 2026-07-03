import { describe, it, expect } from 'vitest';
import {
  isFirstQuestionInSection,
  countUniqueSections,
  sectionIndexAt,
} from './sectionUtils';
import { Question } from '@/types/atalaya';

const questions: Question[] = [
  { number: '1', textEs: 'Q1', paragraphs: [1] },
  { number: '2', textEs: 'Q2', paragraphs: [2], section: 'SECCIÓN A' },
  { number: '3', textEs: 'Q3', paragraphs: [3], section: 'SECCIÓN A' },
  { number: '4', textEs: 'Q4', paragraphs: [4], section: 'SECCIÓN B' },
];

describe('sectionUtils', () => {
  it('isFirstQuestionInSection detecta primera pregunta del bloque', () => {
    expect(isFirstQuestionInSection(questions, 0)).toBe(false);
    expect(isFirstQuestionInSection(questions, 1)).toBe(true);
    expect(isFirstQuestionInSection(questions, 2)).toBe(false);
    expect(isFirstQuestionInSection(questions, 3)).toBe(true);
  });

  it('countUniqueSections cuenta bloques distintos', () => {
    expect(countUniqueSections(questions)).toBe(2);
  });

  it('sectionIndexAt devuelve índice 1-based', () => {
    expect(sectionIndexAt(questions, 2)).toBe(1);
    expect(sectionIndexAt(questions, 3)).toBe(2);
  });
});
