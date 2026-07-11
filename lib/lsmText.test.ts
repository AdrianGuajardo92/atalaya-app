import { describe, expect, it } from 'vitest';
import { getLsmQuestionLines } from './lsmText';

describe('getLsmQuestionLines', () => {
  it('separa y limpia los renglones de una pregunta LSM', () => {
    expect(getLsmQuestionLines('  PRIMERA PREGUNTA?\nSEGUNDA PREGUNTA?  ')).toEqual([
      'PRIMERA PREGUNTA?',
      'SEGUNDA PREGUNTA?',
    ]);
  });

  it('omite renglones vacíos para mantener una numeración consecutiva', () => {
    expect(getLsmQuestionLines('UNO\n\n  \nDOS')).toEqual(['UNO', 'DOS']);
  });

  it('acepta saltos de línea de Windows', () => {
    expect(getLsmQuestionLines('UNO\r\nDOS')).toEqual(['UNO', 'DOS']);
  });
});
