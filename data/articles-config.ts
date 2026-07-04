/**
 * CONFIGURACIÓN DE ESTUDIOS
 *
 * Los estudios se identifican por fecha de inicio de semana (studyId).
 * Ejemplo: "2026-06-29" = semana 29 Jun-5 Jul 2026
 */

export const articlesConfig: {
  defaultMonth: string;
  activeStudyIds: string[];
  defaultStudyId: string | null;
} = {
  defaultMonth: "2026-07",

  activeStudyIds: [
    "2026-06-29",
    "2026-07-06",  // "¿Por qué son importantes los principios bíblicos?" (6-12 Jul)
    "2026-07-13",  // "Cómo utilizar los principios bíblicos para educar la conciencia" (13-19 Jul)
    "2026-07-20",  // "Cómo tomar buenas decisiones sobre los estudios adicionales" (20-26 Jul)
    "2026-07-27",  // "Cuida tu espiritualidad mientras cursas estudios adicionales" (27 Jul-2 Ago)
    "2026-08-03",  // "Respetemos las decisiones de los demás" (3-9 Ago)
  ],

  defaultStudyId: "2026-07-06",
};

export function getDefaultArticleId(): string {
  return articlesConfig.defaultStudyId || articlesConfig.activeStudyIds[0] || "";
}

export function isStudyActive(studyId: string): boolean {
  return articlesConfig.activeStudyIds.includes(studyId);
}

/** @deprecated Usar isStudyActive */
export function isArticleActive(studyId: string): boolean {
  return isStudyActive(studyId);
}
