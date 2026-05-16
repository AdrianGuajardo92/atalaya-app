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

export const articlesConfig: {
  defaultMonth: string;
  activeArticles: number[];
  defaultArticleNumber: number | null;
} = {
  // Mes actual que se mostrará por defecto
  defaultMonth: "2026-05", // Mayo 2026

  // Artículos activos (visibles) - solo pon los números de los artículos que quieres mostrar
  activeArticles: [
    62,  // "Cómo luchar contra las distracciones" (18-24 May)
    63,  // "Sea perspicaz y tendrá éxito" (25-31 May)
    64,  // "Por qué somos felices aunque nos odien" (1-7 Jun)
  ],

  // Artículo que se mostrará por defecto al cargar la app
  // Si es null, se usará el primer artículo activo
  defaultArticleNumber: 62,
};

/**
 * FUNCIÓN HELPER: Obtiene el ID del artículo por defecto
 */
export function getDefaultArticleId(): string {
  const month = articlesConfig.defaultMonth;
  const articleNum = articlesConfig.defaultArticleNumber || articlesConfig.activeArticles[0];
  if (!articleNum) return "";
  return `${month}-article-${articleNum}`;
}

/**
 * FUNCIÓN HELPER: Verifica si un artículo está activo
 */
export function isArticleActive(articleNumber: number): boolean {
  return articlesConfig.activeArticles.includes(articleNumber);
}
