import { articlesConfig } from '../data/articles-config';
import { biblicalTextsMap, getAllBiblicalTexts, studiesMap } from '../data/articles';
import {
  buildReferenceLookup,
  buildVerseIndex,
  parseScriptureReferences,
  resolveScriptureFromParenthetical,
  ScriptureVerse,
} from '../lib/resolveScriptureRef';
import { ArticleData } from '../types/atalaya';

type AuditIssue = {
  studyId: string;
  path: string;
  code: string;
  message: string;
};

const args = process.argv.slice(2);
const onlyActive = args.includes('--active');
const studyArg = args.find((arg) => arg.startsWith('--study='));
const requestedStudyId = studyArg?.slice('--study='.length);

const allBiblicalTexts = getAllBiblicalTexts();
const issues: AuditIssue[] = [];

const studyIds = Object.keys(studiesMap)
  .filter((studyId) => !onlyActive || articlesConfig.activeStudyIds.includes(studyId))
  .filter((studyId) => !requestedStudyId || studyId === requestedStudyId)
  .sort();

if (requestedStudyId && !studiesMap[requestedStudyId]) {
  issues.push({
    studyId: requestedStudyId,
    path: 'studiesMap',
    code: 'study-not-found',
    message: `No existe el estudio ${requestedStudyId}.`,
  });
}

for (const studyId of studyIds) {
  const study = studiesMap[studyId];
  const biblicalTexts = biblicalTextsMap[studyId];
  if (!biblicalTexts) {
    issues.push({
      studyId,
      path: 'biblicalTextsMap',
      code: 'biblical-texts-missing',
      message: `No hay biblicalTexts para ${studyId}.`,
    });
    continue;
  }

  auditStudy(studyId, study, biblicalTexts);
}

printIssues(issues);

if (issues.length > 0) {
  console.error(`\nstudy:audit:bible-modals falló: ${issues.length} problema(s).`);
  process.exit(1);
}

console.log(`\nstudy:audit:bible-modals limpio: ${studyIds.length} estudio(s) auditado(s).`);

function auditStudy(
  studyId: string,
  study: ArticleData,
  biblicalTexts: Record<string, ScriptureVerse[]>
) {
  const paragraphsByNumber = new Map(study.paragraphs.map((paragraph) => [paragraph.number, paragraph]));
  const exactStudyLookup = buildReferenceLookup(Object.values(biblicalTexts).flat());

  study.questions.forEach((question, questionIndex) => {
    const resolverSources = [
      ...Object.values(biblicalTexts).flat(),
      ...Object.values(allBiblicalTexts).flat(),
      ...(question.biblicalCards ?? []),
    ];
    const refLookup = buildReferenceLookup(resolverSources);
    const verseIndex = buildVerseIndex(resolverSources);
    const questionPath = `questions[${questionIndex}]`;

    for (const paragraphNumber of question.paragraphs) {
      const paragraph = paragraphsByNumber.get(paragraphNumber);
      if (!paragraph) continue;

      const contexts = [
        {
          path: `${questionPath}.paragraphs[p${paragraphNumber}].content`,
          text: paragraph.content,
        },
        ...(paragraph.sidebar
          ? [
              {
                path: `${questionPath}.paragraphs[p${paragraphNumber}].sidebar.intro`,
                text: paragraph.sidebar.intro ?? '',
              },
              ...(paragraph.sidebar.items ?? []).map((item, itemIndex) => ({
                path: `${questionPath}.paragraphs[p${paragraphNumber}].sidebar.items[${itemIndex}]`,
                text: item,
              })),
            ]
          : []),
      ];

      for (const context of contexts) {
        for (const inner of extractParentheticalScriptureTexts(context.text)) {
          auditParenthetical({
            studyId,
            path: context.path,
            inner,
            exactStudyLookup,
            biblicalTexts,
            refLookup,
            verseIndex,
          });
        }
      }
    }
  });
}

function auditParenthetical(options: {
  studyId: string;
  path: string;
  inner: string;
  exactStudyLookup: Map<string, ScriptureVerse>;
  biblicalTexts: Record<string, ScriptureVerse[]>;
  refLookup: Map<string, ScriptureVerse>;
  verseIndex: Map<string, ScriptureVerse[]>;
}) {
  const {
    studyId,
    path,
    inner,
    exactStudyLookup,
    biblicalTexts,
    refLookup,
    verseIndex,
  } = options;
  const expectedRefs = parseScriptureReferences(inner);
  if (expectedRefs.length === 0) return;

  const resolved = resolveScriptureFromParenthetical(inner, verseIndex, biblicalTexts, refLookup, {
    fallbackToReference: true,
  });

  if (!resolved) {
    addIssue(studyId, path, 'modal-ref-unresolved', `No se pudo resolver el texto bíblico: (${inner}).`);
    return;
  }

  const resolvedRefs = new Set(resolved.verses.map((verse) => verse.reference.trim()));
  for (const ref of expectedRefs) {
    if (!resolvedRefs.has(ref)) {
      addIssue(
        studyId,
        path,
        'modal-ref-missing',
        `El modal de (${inner}) no incluye la referencia esperada: ${ref}.`
      );
    }
    if (!exactStudyLookup.get(ref)) {
      addIssue(
        studyId,
        path,
        'modal-ref-without-exact-biblical-text',
        `Falta entrada individual en biblicalTexts para que el modal no dependa de tarjetas combinadas: ${ref}.`
      );
    }
  }

  const emptyVerses = resolved.verses.filter((verse) => !verse.text.trim());
  if (emptyVerses.length > 0) {
    addIssue(
      studyId,
      path,
      'modal-empty-verse-text',
      `El modal de (${inner}) tiene texto vacío en: ${emptyVerses.map((verse) => verse.reference).join(', ')}.`
    );
  }

  const duplicateTextRefs = findDuplicateTextRefs(resolved.verses);
  if (duplicateTextRefs.length > 0) {
    addIssue(
      studyId,
      path,
      'modal-duplicate-verse-text',
      `El modal de (${inner}) muestra el mismo texto para referencias distintas: ${duplicateTextRefs.join(' / ')}.`
    );
  }
}

function extractParentheticalScriptureTexts(text: string): string[] {
  return [...text.matchAll(/\(([^)]*\d+:\d+[^)]*)\)/g)]
    .map((match) => match[1].trim())
    .filter(Boolean);
}

function findDuplicateTextRefs(verses: ScriptureVerse[]): string[] {
  const refsByText = new Map<string, string[]>();
  for (const verse of verses) {
    const normalizedText = verse.text.trim().replace(/\s+/g, ' ');
    if (!normalizedText) continue;
    const refs = refsByText.get(normalizedText) ?? [];
    refs.push(verse.reference);
    refsByText.set(normalizedText, refs);
  }

  return [...refsByText.values()]
    .filter((refs) => new Set(refs).size > 1)
    .map((refs) => refs.join(', '));
}

function addIssue(studyId: string, path: string, code: string, message: string) {
  issues.push({ studyId, path, code, message });
}

function printIssues(auditIssues: AuditIssue[]) {
  if (!auditIssues.length) {
    console.log('study:audit:bible-modals no encontró problemas.');
    return;
  }

  for (const issue of auditIssues) {
    console.log(`ERROR ${issue.studyId} ${issue.path} [${issue.code}] ${issue.message}`);
  }
}
