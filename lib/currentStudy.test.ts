import { describe, expect, it } from 'vitest';
import {
  getCurrentStudyIdForDate,
  getMillisecondsUntilNextLocalDay,
  resolveInitialStudyId,
} from './currentStudy';

const activeStudyIds = [
  '2026-06-29',
  '2026-07-06',
  '2026-07-13',
  '2026-07-20',
];

describe('currentStudy', () => {
  it('mantiene el estudio anterior hasta el sábado', () => {
    expect(getCurrentStudyIdForDate(activeStudyIds, new Date(2026, 6, 4))).toBe('2026-06-29');
  });

  it('cambia al siguiente estudio desde el domingo', () => {
    expect(getCurrentStudyIdForDate(activeStudyIds, new Date(2026, 6, 5))).toBe('2026-07-06');
  });

  it('mantiene el estudio actual durante la semana hasta el sábado', () => {
    expect(getCurrentStudyIdForDate(activeStudyIds, new Date(2026, 6, 11))).toBe('2026-07-06');
  });

  it('cambia otra vez el domingo siguiente', () => {
    expect(getCurrentStudyIdForDate(activeStudyIds, new Date(2026, 6, 12))).toBe('2026-07-13');
  });

  it('respeta la selección manual mientras no cambie la semana actual', () => {
    expect(
      resolveInitialStudyId({
        activeStudyIds,
        fallbackStudyId: '2026-07-06',
        storedArticleId: '2026-06-29',
        storedAutoStudyId: '2026-07-06',
        currentStudyId: '2026-07-06',
      }),
    ).toBe('2026-06-29');
  });

  it('reemplaza la selección manual cuando cambia la semana actual', () => {
    expect(
      resolveInitialStudyId({
        activeStudyIds,
        fallbackStudyId: '2026-07-06',
        storedArticleId: '2026-06-29',
        storedAutoStudyId: '2026-06-29',
        currentStudyId: '2026-07-06',
      }),
    ).toBe('2026-07-06');
  });

  it('calcula el tiempo hasta el siguiente día local', () => {
    expect(getMillisecondsUntilNextLocalDay(new Date(2026, 6, 4, 23, 59, 59))).toBe(1000);
    expect(getMillisecondsUntilNextLocalDay(new Date(2026, 6, 4, 12, 0, 0))).toBe(12 * 60 * 60 * 1000);
  });
});
