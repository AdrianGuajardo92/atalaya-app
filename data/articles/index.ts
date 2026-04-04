import { ArticleData } from '@/types/atalaya';
import { isArticleActive } from '../articles-config';

// ============================================
// IMPORTAR TODOS LOS ARTÍCULOS
// ============================================
import { article53, biblicalTexts53 } from './article-53';
import { article54, biblicalTexts54 } from './article-54';
import { article55, biblicalTexts55 } from './article-55';

// ============================================
// MAPAS DE DATOS
// ============================================

// Mapa de todos los artículos por número
export const articlesMap: Record<number, ArticleData> = {
  53: article53,
  54: article54,
  55: article55,
};

// Mapa de textos bíblicos por artículo
export const biblicalTextsMap: Record<number, Record<string, { reference: string; text: string }[]>> = {
  53: biblicalTexts53,
  54: biblicalTexts54,
  55: biblicalTexts55,
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
  article53, biblicalTexts53,
  article54, biblicalTexts54,
  article55, biblicalTexts55,
};

