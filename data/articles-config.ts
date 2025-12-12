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
  defaultMonth: "2025-10", // Octubre 2025

  // Artículos activos (visibles) - solo pon los números de los artículos que quieres mostrar
  activeArticles: [
    // 36,  // "Que llame a los ancianos" (10-16 Nov)
    37,  // "La mejor manera de reaccionar ante las injusticias" (17-23 Nov)
    38,  // "Mostremos que respetamos a los demás" (24-30 Nov)
    39,  // "Ayudemos de inmediato a quienes tienen 'la actitud correcta'" (1-7 Dic)
    40,  // "Jehová es nuestra 'máxima alegría'" (8-14 Dic)
    41,  // "El amor de Dios dura para siempre" (15-21 Dic)
    42,  // "Cómo mejorar las oraciones" (22-28 Dic)
    43,  // "No nos olvidemos de orar por otros" (29 Dic - 4 Ene)
  ],

  // Artículo que se mostrará por defecto al cargar la app
  // Si es null, se usará el primer artículo activo
  defaultArticleNumber: 40,
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
