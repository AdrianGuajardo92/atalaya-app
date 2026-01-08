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
  defaultMonth: "2025-11", // Noviembre 2025

  // Artículos activos (visibles) - solo pon los números de los artículos que quieres mostrar
  activeArticles: [
    44,  // "Cómo mantener la alegría en la vejez" (5-11 Ene)
    45,  // "Cómo mantener la alegría al cuidar de un ser querido" (12-18 Ene)
    46,  // "Jesús es un Sumo Sacerdote compasivo" (19-25 Ene)
    47,  // "Tú eres muy valioso" (26 Ene-1 Feb)
    48,  // "Cómo nos ayuda el libro de Job cuando estamos sufriendo" (2-8 Feb)
    49,  // "Cómo nos ayuda el libro de Job a dar buenos consejos" (9-15 Feb)
    50,  // "Imitemos la humildad de Jehová" (16-22 Feb)
    51,  // "Cómo planear una boda que honre a Jehová" (23 Feb-1 Mar)
  ],

  // Artículo que se mostrará por defecto al cargar la app
  // Si es null, se usará el primer artículo activo
  defaultArticleNumber: 44,
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
