import { describe, it, expect } from 'vitest';
import { getAnswerItems, getAnswerTexts, hasAnswerContent, getReviewAnswerItems } from './answerItems';

describe('answerItems', () => {
  it('prioriza answers cuando existe', () => {
    const items = getAnswerItems({
      answers: [
        { text: 'Principal', followUp: '¿Por qué?' },
        { text: 'Secundaria', secondary: true },
      ],
      answer: ['Legacy'],
    });
    expect(items).toHaveLength(2);
    expect(items[0].followUp).toBe('¿Por qué?');
    expect(items[1].secondary).toBe(true);
  });

  it('convierte answer array a principales', () => {
    const items = getAnswerItems({
      answer: ['Uno', 'Dos'],
    });
    expect(items).toEqual([{ text: 'Uno' }, { text: 'Dos' }]);
  });

  it('convierte answer string y answerContext a secundarias', () => {
    const items = getAnswerItems({
      answer: 'Principal',
      answerContext: ['Detalle del párrafo'],
    });
    expect(items).toEqual([
      { text: 'Principal' },
      { text: 'Detalle del párrafo', secondary: true },
    ]);
  });

  it('getAnswerTexts devuelve solo textos', () => {
    expect(getAnswerTexts({ answers: [{ text: 'A' }, { text: 'B', secondary: true }] })).toEqual(['A', 'B']);
  });

  it('hasAnswerContent detecta vacío', () => {
    expect(hasAnswerContent({})).toBe(false);
    expect(hasAnswerContent({ answer: ['Algo'] })).toBe(true);
  });

  it('getReviewAnswerItems usa answers o fallback', () => {
    expect(getReviewAnswerItems({ answers: [{ text: 'Repaso nuevo' }] })).toHaveLength(1);
    expect(getReviewAnswerItems({ answer: ['Repaso legacy'] })[0].text).toBe('Repaso legacy');
  });
});
