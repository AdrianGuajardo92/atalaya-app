import { describe, expect, it } from 'vitest';
import {
  clampStudyPosition,
  parseNavigationMode,
  parseStoredStudyPosition,
  parseViewMode,
} from './studyNavigationState';

describe('studyNavigationState', () => {
  it('valida la vista guardada', () => {
    expect(parseViewMode('summary')).toBe('summary');
    expect(parseViewMode('study')).toBe('study');
    expect(parseViewMode('otro')).toBe('study');
    expect(parseViewMode(null)).toBe('study');
  });

  it('valida el modo de navegación guardado', () => {
    expect(parseNavigationMode('paginated')).toBe('paginated');
    expect(parseNavigationMode('scroll')).toBe('scroll');
    expect(parseNavigationMode('otro')).toBe('scroll');
    expect(parseNavigationMode(null)).toBe('scroll');
  });

  it('lee una posición guardada válida', () => {
    expect(parseStoredStudyPosition('{"currentQuestionIndex":4,"currentReviewIndex":-1}')).toEqual({
      currentQuestionIndex: 4,
      currentReviewIndex: -1,
    });
  });

  it('ignora posiciones corruptas o incompletas', () => {
    expect(parseStoredStudyPosition('sin-json')).toEqual({
      currentQuestionIndex: 0,
      currentReviewIndex: -1,
    });
    expect(parseStoredStudyPosition('{"currentQuestionIndex":"4"}')).toEqual({
      currentQuestionIndex: 0,
      currentReviewIndex: -1,
    });
  });

  it('ajusta la posición a la cantidad real de preguntas', () => {
    expect(
      clampStudyPosition({ currentQuestionIndex: 40, currentReviewIndex: 10 }, 17, 3),
    ).toEqual({
      currentQuestionIndex: 16,
      currentReviewIndex: 2,
    });

    expect(
      clampStudyPosition({ currentQuestionIndex: -5, currentReviewIndex: -8 }, 17, 3),
    ).toEqual({
      currentQuestionIndex: 0,
      currentReviewIndex: -1,
    });
  });

  it('vuelve a preguntas normales cuando no hay repaso', () => {
    expect(
      clampStudyPosition({ currentQuestionIndex: 5, currentReviewIndex: 1 }, 6, 0),
    ).toEqual({
      currentQuestionIndex: 5,
      currentReviewIndex: -1,
    });
  });
});
