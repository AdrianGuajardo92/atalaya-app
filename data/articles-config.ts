/**
 * CONFIGURACIÓN SIMPLE DE ARTÍCULOS
 *
 * Para agregar o quitar artículos del estudio:
 * 1. Simplemente agrega o elimina el número del artículo del array
 * 2. Los artículos deben existir en atalaya-data.ts
 *
 * Ejemplo:
 * - Para mostrar solo el artículo 36: activeArticles: [36]
 * - Para mostrar artículos 36 y 37: activeArticles: [36, 37]
 * - Para ocultar el artículo 36: quita el 36 del array
 */

export const articlesConfig = {
  // Mes actual que se mostrará por defecto
  defaultMonth: "2026-01", // Enero 2026

  // Artículos activos (visibles) - solo pon los números de los artículos que quieres mostrar
  activeArticles: [
    52,  // "Sigamos satisfaciendo nuestras 'necesidades espirituales'" (2-8 Mar)
    53,  // "Cómo vencer los sentimientos negativos" (9-15 Mar)
  ],

  // Artículo que se mostrará por defecto al cargar la app
  // Si es null, se usará el primer artículo activo
  defaultArticleNumber: 53,
};

/**
 * FUNCIÓN HELPER: Obtiene el ID del artículo por defecto
 */
export function getDefaultArticleId(): string {
  const month = articlesConfig.defaultMonth;
  const articleNum = articlesConfig.defaultArticleNumber || articlesConfig.activeArticles[0];
  return `${month}-article-${articleNum}`;
}

/**
 * FUNCIÓN HELPER: Verifica si un artículo está activo
 */
export function isArticleActive(articleNumber: number): boolean {
  return articlesConfig.activeArticles.includes(articleNumber);
}
