export const CURRENT_ARTICLE_STORAGE_KEY = 'atalaya_current_article';
export const AUTO_STUDY_STORAGE_KEY = 'atalaya_auto_study_id';

const MS_PER_DAY = 24 * 60 * 60 * 1000;

const parseStudyIdAsLocalDate = (studyId: string) => {
  const [year, month, day] = studyId.split('-').map(Number);
  if (!year || !month || !day) return null;

  return new Date(year, month - 1, day);
};

const startOfLocalDay = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

const getStudyEffectiveStart = (studyId: string) => {
  const startDate = parseStudyIdAsLocalDate(studyId);
  if (!startDate) return null;

  return new Date(startDate.getTime() - MS_PER_DAY);
};

const isActiveStudyId = (studyId: string | null | undefined, activeStudyIds: string[]) =>
  Boolean(studyId && activeStudyIds.includes(studyId));

export function getCurrentStudyIdForDate(
  activeStudyIds: string[],
  date = new Date(),
): string | null {
  const sortedStudyIds = [...activeStudyIds].sort();
  if (sortedStudyIds.length === 0) return null;

  const today = startOfLocalDay(date).getTime();
  let currentStudyId: string | null = null;

  for (const studyId of sortedStudyIds) {
    const effectiveStart = getStudyEffectiveStart(studyId);
    if (!effectiveStart) continue;
    if (effectiveStart.getTime() <= today) {
      currentStudyId = studyId;
    }
  }

  return currentStudyId ?? sortedStudyIds[0];
}

export function getMillisecondsUntilNextLocalDay(date = new Date()): number {
  const nextDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  return Math.max(nextDay.getTime() - date.getTime(), 1000);
}

export interface ResolveInitialStudyIdOptions {
  activeStudyIds: string[];
  fallbackStudyId: string;
  storedArticleId: string | null;
  storedAutoStudyId: string | null;
  currentStudyId: string | null;
}

export function resolveInitialStudyId({
  activeStudyIds,
  fallbackStudyId,
  storedArticleId,
  storedAutoStudyId,
  currentStudyId,
}: ResolveInitialStudyIdOptions): string {
  const validFallback = isActiveStudyId(fallbackStudyId, activeStudyIds)
    ? fallbackStudyId
    : activeStudyIds[0] ?? '';

  if (!currentStudyId || !isActiveStudyId(currentStudyId, activeStudyIds)) {
    return storedArticleId && isActiveStudyId(storedArticleId, activeStudyIds)
      ? storedArticleId
      : validFallback;
  }

  if (storedAutoStudyId !== currentStudyId) {
    return currentStudyId;
  }

  return storedArticleId && isActiveStudyId(storedArticleId, activeStudyIds)
    ? storedArticleId
    : currentStudyId;
}
