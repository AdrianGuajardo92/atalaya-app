import { ArticleData } from '@/types/atalaya';
import { isStudyActive } from '../articles-config';
import { study20260629, biblicalTexts20260629 } from './study-2026-06-29';
import { study20260706, biblicalTexts20260706 } from './study-2026-07-06';
import { study20260713, biblicalTexts20260713 } from './study-2026-07-13';
import { study20260720, biblicalTexts20260720 } from './study-2026-07-20';
import { study20260727, biblicalTexts20260727 } from './study-2026-07-27';
import { study20260803, biblicalTexts20260803 } from './study-2026-08-03';
// ============================================
// MAPAS DE DATOS
// ============================================

export const studiesMap: Record<string, ArticleData> = {
  '2026-06-29': study20260629,
  '2026-07-06': study20260706,
  '2026-07-13': study20260713,
  '2026-07-20': study20260720,
  '2026-07-27': study20260727,
  '2026-08-03': study20260803,
};

export const biblicalTextsMap: Record<string, Record<string, { reference: string; text: string }[]>> = {
  '2026-06-29': biblicalTexts20260629,
  '2026-07-06': biblicalTexts20260706,
  '2026-07-13': biblicalTexts20260713,
  '2026-07-20': biblicalTexts20260720,
  '2026-07-27': biblicalTexts20260727,
  '2026-08-03': biblicalTexts20260803,
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

export {
  study20260629, biblicalTexts20260629,
  study20260706, biblicalTexts20260706,
  study20260713, biblicalTexts20260713,
  study20260720, biblicalTexts20260720,
  study20260727, biblicalTexts20260727,
  study20260803, biblicalTexts20260803,
};
