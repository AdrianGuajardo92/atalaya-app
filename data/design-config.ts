/**
 * CONFIGURACIÓN DE DISEÑO
 *
 * El diseño "Ejecutivo" se aplica a partir del artículo 43.
 * Para cambiar cuándo aplica, solo modifica este número.
 */
export const designConfig = {
  // Artículo desde donde aplica el diseño ejecutivo/premium
  executiveDesignStartsAt: 43,
};

/**
 * Verifica si un artículo usa el diseño ejecutivo
 */
export function isExecutiveDesign(articleNumber: number): boolean {
  return articleNumber >= designConfig.executiveDesignStartsAt;
}
