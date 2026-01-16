import { ArticleData } from '@/types/atalaya';
import { isArticleActive } from '../articles-config';

// ============================================
// IMPORTAR TODOS LOS ARTÍCULOS
// ============================================
import { article44, biblicalTexts44 } from './article-44';
import { article45, biblicalTexts45 } from './article-45';
import { article46, biblicalTexts46 } from './article-46';
import { article47, biblicalTexts47 } from './article-47';
import { article48, biblicalTexts48 } from './article-48';
import { article49, biblicalTexts49 } from './article-49';
import { article50, biblicalTexts50 } from './article-50';
import { article51, biblicalTexts51 } from './article-51';

// ============================================
// MAPAS DE DATOS
// ============================================

// Mapa de todos los artículos por número
export const articlesMap: Record<number, ArticleData> = {
  44: article44,
  45: article45,
  46: article46,
  47: article47,
  48: article48,
  49: article49,
  50: article50,
  51: article51,
};

// Mapa de textos bíblicos por artículo
export const biblicalTextsMap: Record<number, Record<string, { reference: string; text: string }[]>> = {
  44: biblicalTexts44,
  45: biblicalTexts45,
  46: biblicalTexts46,
  47: biblicalTexts47,
  48: biblicalTexts48,
  49: biblicalTexts49,
  50: biblicalTexts50,
  51: biblicalTexts51,
};

// ============================================
// FUNCIONES HELPER
// ============================================

/**
 * Obtener artículo por ID
 * @param articleId ID en formato "2025-11-article-44"
 */
export function getArticleById(articleId: string): ArticleData | undefined {
  const parts = articleId.split('-');
  if (parts.length < 4) return undefined;
  const articleNum = parseInt(parts[3]);
  return articlesMap[articleNum];
}

/**
 * Obtener ID de un artículo
 */
export function getArticleId(article: ArticleData): string {
  const monthMap: Record<string, string> = {
    "Enero": "01", "Febrero": "02", "Marzo": "03", "Abril": "04",
    "Mayo": "05", "Junio": "06", "Julio": "07", "Agosto": "08",
    "Septiembre": "09", "Octubre": "10", "Noviembre": "11", "Diciembre": "12"
  };
  const monthNum = monthMap[article.metadata.month] || "01";
  return `${article.metadata.year}-${monthNum}-article-${article.metadata.articleNumber}`;
}

/**
 * Obtener todos los artículos activos
 */
export function getAllActiveArticles(): ArticleData[] {
  return Object.values(articlesMap)
    .filter(article => isArticleActive(article.metadata.articleNumber))
    .sort((a, b) => a.metadata.articleNumber - b.metadata.articleNumber);
}

/**
 * Obtener textos bíblicos de un artículo específico
 */
export function getBiblicalTextsForArticle(articleNumber: number): Record<string, { reference: string; text: string }[]> {
  return biblicalTextsMap[articleNumber] || {};
}

/**
 * Obtener todos los textos bíblicos combinados (para compatibilidad)
 */
export function getAllBiblicalTexts(): Record<string, { reference: string; text: string }[]> {
  const combined: Record<string, { reference: string; text: string }[]> = {};
  for (const articleNum in biblicalTextsMap) {
    Object.assign(combined, biblicalTextsMap[articleNum]);
  }
  return combined;
}

/**
 * Listar números de artículos disponibles
 */
export function getAvailableArticleNumbers(): number[] {
  return Object.keys(articlesMap).map(Number).sort((a, b) => a - b);
}

/**
 * Obtener total de artículos en el sistema
 */
export function getTotalArticles(): number {
  return Object.keys(articlesMap).length;
}

// Re-exportar los artículos individuales para acceso directo si es necesario
export {
  article44, biblicalTexts44,
  article45, biblicalTexts45,
  article46, biblicalTexts46,
  article47, biblicalTexts47,
  article48, biblicalTexts48,
  article49, biblicalTexts49,
  article50, biblicalTexts50,
  article51, biblicalTexts51,
};
