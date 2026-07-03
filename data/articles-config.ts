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
  defaultMonth: "2026-06",

  activeStudyIds: ["2026-06-29"],

  defaultStudyId: "2026-06-29",
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
