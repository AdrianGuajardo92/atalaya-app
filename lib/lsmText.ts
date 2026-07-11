/** Convierte una glosa LSM en renglones visibles, omitiendo líneas vacías. */
export function getLsmQuestionLines(text: string): string[] {
  return text
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean);
}
