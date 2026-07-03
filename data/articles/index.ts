import { ArticleData } from '@/types/atalaya';
import { isStudyActive } from '../articles-config';
import { study20260629, biblicalTexts20260629 } from './study-2026-06-29';

// ============================================
// MAPAS DE DATOS
// ============================================

export const studiesMap: Record<string, ArticleData> = {
  '2026-06-29': study20260629,
};

export const biblicalTextsMap: Record<string, Record<string, { reference: string; text: string }[]>> = {
  '2026-06-29': biblicalTexts20260629,
};

/** @deprecated Usar studiesMap */
export const articlesMap: Record<number, ArticleData> = {};

// ============================================
// FUNCIONES HELPER
// ============================================

export function getArticleById(studyId: string): ArticleData | undefined {
  return studiesMap[studyId];
}

export function getArticleId(article: ArticleData): string {
  return article.metadata.studyId;
}

export function getAllActiveArticles(): ArticleData[] {
  return Object.values(studiesMap)
    .filter(article => isStudyActive(article.metadata.studyId))
    .sort((a, b) => a.metadata.studyId.localeCompare(b.metadata.studyId));
}

export function getBiblicalTextsForStudy(studyId: string): Record<string, { reference: string; text: string }[]> {
  return biblicalTextsMap[studyId] || {};
}

/** @deprecated Usar getBiblicalTextsForStudy */
export function getBiblicalTextsForArticle(studyId: string): Record<string, { reference: string; text: string }[]> {
  return getBiblicalTextsForStudy(studyId);
}

export function getAllBiblicalTexts(): Record<string, { reference: string; text: string }[]> {
  const combined: Record<string, { reference: string; text: string }[]> = {};
  for (const studyId in biblicalTextsMap) {
    Object.assign(combined, biblicalTextsMap[studyId]);
  }
  return combined;
}

export function getAvailableStudyIds(): string[] {
  return Object.keys(studiesMap).sort();
}

export function getTotalArticles(): number {
  return Object.keys(studiesMap).length;
}

export { study20260629, biblicalTexts20260629 };
