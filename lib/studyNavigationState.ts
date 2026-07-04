export type StudyViewMode = 'study' | 'summary';
export type StudyNavigationMode = 'scroll' | 'paginated';

export interface StudyNavigationPosition {
  currentQuestionIndex: number;
  currentReviewIndex: number;
}

export const VIEW_MODE_STORAGE_KEY = 'atalaya-view-mode';
export const NAVIGATION_MODE_STORAGE_KEY = 'atalaya-navigation-mode';

export const studyNavigationPositionKey = (articleId: string) =>
  `atalaya-navigation-position:${articleId}`;

const DEFAULT_POSITION: StudyNavigationPosition = {
  currentQuestionIndex: 0,
  currentReviewIndex: -1,
};

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

const toInteger = (value: unknown, fallback: number) =>
  typeof value === 'number' && Number.isInteger(value) ? value : fallback;

export function parseViewMode(value: string | null): StudyViewMode {
  return value === 'summary' ? 'summary' : 'study';
}

export function parseNavigationMode(value: string | null): StudyNavigationMode {
  return value === 'paginated' ? 'paginated' : 'scroll';
}

export function parseStoredStudyPosition(value: string | null): StudyNavigationPosition {
  if (!value) return DEFAULT_POSITION;

  try {
    const parsed = JSON.parse(value);
    if (!isObject(parsed)) return DEFAULT_POSITION;

    return {
      currentQuestionIndex: toInteger(parsed.currentQuestionIndex, DEFAULT_POSITION.currentQuestionIndex),
      currentReviewIndex: toInteger(parsed.currentReviewIndex, DEFAULT_POSITION.currentReviewIndex),
    };
  } catch {
    return DEFAULT_POSITION;
  }
}

export function clampStudyPosition(
  position: StudyNavigationPosition,
  questionCount: number,
  reviewQuestionCount: number,
): StudyNavigationPosition {
  const maxQuestionIndex = Math.max(questionCount - 1, 0);
  const maxReviewIndex = reviewQuestionCount > 0 ? reviewQuestionCount - 1 : -1;

  const currentQuestionIndex = Math.min(
    Math.max(position.currentQuestionIndex, 0),
    maxQuestionIndex,
  );

  const currentReviewIndex = Math.min(
    Math.max(position.currentReviewIndex, -1),
    maxReviewIndex,
  );

  return {
    currentQuestionIndex,
    currentReviewIndex,
  };
}
