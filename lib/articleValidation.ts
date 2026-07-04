import { AnswerItem, ArticleData, Question, ReviewQuestion } from '@/types/atalaya';
import { buildReferenceLookup, parseScriptureReferences, ScriptureVerse } from './resolveScriptureRef';

export type ArticleValidationSeverity = 'error' | 'warning';

export interface ArticleValidationIssue {
  severity: ArticleValidationSeverity;
  code: string;
  studyId?: string;
  path: string;
  message: string;
}

export interface ArticleValidationOptions {
  activeStudyIds?: string[];
  fileStudyIds?: string[];
  onlyActive?: boolean;
  strict?: boolean;
}

export function validateStudyRegistry(
  studiesMap: Record<string, ArticleData>,
  biblicalTextsMap: Record<string, Record<string, ScriptureVerse[]>>,
  options: ArticleValidationOptions = {}
): ArticleValidationIssue[] {
  const issues: ArticleValidationIssue[] = [];
  const activeIds = options.activeStudyIds ?? [];
  const idsToValidate = Object.keys(studiesMap)
    .filter((studyId) => !options.onlyActive || activeIds.includes(studyId))
    .sort();

  const add = issueAdder(issues, options.strict);

  for (const activeId of activeIds) {
    if (!studiesMap[activeId]) {
      add('error', 'active-study-missing', activeId, 'articlesConfig.activeStudyIds', `El estudio activo ${activeId} no existe en studiesMap.`);
    }
  }

  for (const fileStudyId of options.fileStudyIds ?? []) {
    if (!studiesMap[fileStudyId]) {
      add('error', 'study-file-not-registered', fileStudyId, `data/articles/study-${fileStudyId}.ts`, `El archivo study-${fileStudyId}.ts no está registrado en studiesMap.`);
    }
  }

  for (const studyId of idsToValidate) {
    const study = studiesMap[studyId];
    if (study.metadata.studyId !== studyId) {
      add('error', 'study-id-mismatch', studyId, 'metadata.studyId', `metadata.studyId (${study.metadata.studyId}) no coincide con la clave ${studyId}.`);
    }

    const biblicalTexts = biblicalTextsMap[studyId];
    if (!biblicalTexts) {
      add('error', 'biblical-texts-missing', studyId, 'biblicalTextsMap', `No hay entrada en biblicalTextsMap para ${studyId}.`);
      continue;
    }

    validateStudy(studyId, study, biblicalTexts, add);
  }

  return issues;
}

function validateStudy(
  studyId: string,
  study: ArticleData,
  biblicalTexts: Record<string, ScriptureVerse[]>,
  add: AddIssue
) {
  validateBiblicalTexts(studyId, biblicalTexts, add);

  const paragraphNumbers = new Set<number>();
  const paragraphsByNumber = new Map(study.paragraphs.map((paragraph, index) => {
    if (paragraphNumbers.has(paragraph.number)) {
      add('error', 'duplicate-paragraph', studyId, `paragraphs[${index}].number`, `El párrafo ${paragraph.number} está duplicado.`);
    }
    paragraphNumbers.add(paragraph.number);
    validateParagraph(studyId, paragraph, index, add);
    return [paragraph.number, paragraph] as const;
  }));

  const allBiblicalTexts = Object.values(biblicalTexts).flat();
  const biblicalTextLookup = buildReferenceLookup(allBiblicalTexts);
  let previousSection = '';

  study.questions.forEach((question, index) => {
    const path = `questions[${index}]`;
    validateQuestion(studyId, question, path, paragraphsByNumber, biblicalTexts, biblicalTextLookup, add);

    if (question.section && question.section === previousSection) {
      add('warning', 'duplicate-section', studyId, `${path}.section`, 'El subtítulo de sección se repite consecutivamente; debe ir solo en la primera pregunta del bloque.');
    }
    if (question.section) previousSection = question.section;
  });

  study.reviewQuestions.forEach((reviewQuestion, index) => {
    validateReviewQuestion(studyId, reviewQuestion, `reviewQuestions[${index}]`, add);
  });
}

function validateBiblicalTexts(
  studyId: string,
  biblicalTexts: Record<string, ScriptureVerse[]>,
  add: AddIssue
) {
  for (const [key, verses] of Object.entries(biblicalTexts)) {
    if (!verses.length) {
      add('error', 'empty-biblical-text-entry', studyId, `biblicalTexts["${key}"]`, 'La entrada bíblica no contiene versículos.');
      continue;
    }

    verses.forEach((verse, index) => {
      if (!verse.reference.trim()) {
        add('error', 'empty-biblical-reference', studyId, `biblicalTexts["${key}"][${index}].reference`, 'La referencia bíblica está vacía.');
      }
      if (!verse.text.trim()) {
        add('error', 'empty-biblical-text', studyId, `biblicalTexts["${key}"][${index}].text`, 'El texto bíblico está vacío.');
      }
    });
  }
}

function validateParagraph(
  studyId: string,
  paragraph: ArticleData['paragraphs'][number],
  index: number,
  add: AddIssue
) {
  const path = `paragraphs[${index}]`;
  if (!paragraph.content.trim()) {
    add('error', 'empty-paragraph-content', studyId, `${path}.content`, 'El contenido del párrafo está vacío.');
  }
  if (hasBold(paragraph.content)) {
    add('warning', 'paragraph-content-bold', studyId, `${path}.content`, 'El contenido completo del párrafo no debe llevar negritas.');
  }
  if (!paragraph.summary?.trim()) {
    add('warning', 'missing-summary', studyId, `${path}.summary`, 'El párrafo no tiene summary.');
  } else {
    validateSummary(studyId, paragraph.summary, `${path}.summary`, add);
  }
  if (paragraph.image) {
    add('warning', 'paragraph-image', studyId, `${path}.image`, 'Las imágenes visibles del estudio deben ir en question.image; paragraph.image solo se ve en el modal.');
  }
}

function validateSummary(studyId: string, summary: string, path: string, add: AddIssue) {
  if (!hasBold(summary)) {
    add('warning', 'summary-without-bold', studyId, path, 'El summary debería resaltar 1 a 3 conceptos clave con negritas.');
  }
  if (/^\s*¿/.test(summary)) {
    add('warning', 'summary-starts-with-question', studyId, path, 'El summary no debe ser una pregunta.');
  }
  if (summary.trim().endsWith('...')) {
    add('warning', 'summary-truncated', studyId, path, 'El summary parece truncado porque termina con puntos suspensivos.');
  }
  if (countWords(summary) > 55) {
    add('warning', 'summary-too-long', studyId, path, 'El summary debería ser breve y fácil de escanear.');
  }
}

function validateQuestion(
  studyId: string,
  question: Question,
  path: string,
  paragraphsByNumber: Map<number, ArticleData['paragraphs'][number]>,
  biblicalTexts: Record<string, ScriptureVerse[]>,
  biblicalTextLookup: Map<string, ScriptureVerse>,
  add: AddIssue
) {
  if (!question.textEs.trim()) {
    add('error', 'empty-question-text', studyId, `${path}.textEs`, 'La pregunta no tiene texto en español.');
  }
  if (!question.paragraphs.length) {
    add('error', 'question-without-paragraphs', studyId, `${path}.paragraphs`, 'La pregunta no apunta a ningún párrafo.');
  }

  const questionParagraphs = question.paragraphs
    .map((number) => {
      const paragraph = paragraphsByNumber.get(number);
      if (!paragraph) {
        add('error', 'question-missing-paragraph', studyId, `${path}.paragraphs`, `La pregunta apunta al párrafo ${number}, pero ese párrafo no existe.`);
      }
      return paragraph;
    })
    .filter((paragraph): paragraph is ArticleData['paragraphs'][number] => Boolean(paragraph));

  validateLsmText(studyId, question.textLSM, `${path}.textLSM`, add);
  validateLsmText(studyId, question.sectionLSM, `${path}.sectionLSM`, add);
  validateReadText(studyId, question.readText, `${path}.readText`, biblicalTexts, add);
  validateAnswerItems(studyId, question.answers, path, add);
  validateLegacyFields(studyId, question, path, add);
  validateCommentSuggestion(studyId, question.commentSuggestion, `${path}.commentSuggestion`, add);
  validateBiblicalCards(studyId, question.biblicalCards, `${path}.biblicalCards`, add);
  validateQuestionBiblicalCoverage(studyId, question, path, questionParagraphs, add);
  validateSidebarReferences(studyId, question, path, questionParagraphs, biblicalTextLookup, add);
}

function validateReviewQuestion(
  studyId: string,
  reviewQuestion: ReviewQuestion,
  path: string,
  add: AddIssue
) {
  if (!reviewQuestion.question.trim()) {
    add('error', 'empty-review-question', studyId, `${path}.question`, 'La pregunta de repaso está vacía.');
  }
  validateLsmText(studyId, reviewQuestion.questionLSM, `${path}.questionLSM`, add);
  validateAnswerItems(studyId, reviewQuestion.answers, path, add);
  validateCommentSuggestion(studyId, reviewQuestion.commentSuggestion, `${path}.commentSuggestion`, add);
  validateBiblicalCards(studyId, reviewQuestion.biblicalCards, `${path}.biblicalCards`, add);
}

function validateReadText(
  studyId: string,
  readText: string | undefined,
  path: string,
  biblicalTexts: Record<string, ScriptureVerse[]>,
  add: AddIssue
) {
  if (!readText) return;
  const verses = biblicalTexts[readText];
  if (!verses?.length) {
    add('error', 'read-text-missing', studyId, path, `readText debe coincidir exactamente con una clave en biblicalTexts: ${readText}.`);
  }
}

function validateAnswerItems(
  studyId: string,
  answers: AnswerItem[] | undefined,
  path: string,
  add: AddIssue
) {
  if (!answers?.length) {
    add('warning', 'missing-answers', studyId, `${path}.answers`, 'Los estudios nuevos deben usar answers: AnswerItem[].');
    return;
  }

  const main = answers.filter((answer) => !answer.secondary);
  const secondary = answers.filter((answer) => answer.secondary);

  if (main.length < 2 || main.length > 3) {
    add('warning', 'answer-main-count', studyId, `${path}.answers`, 'Conviene tener 2 a 3 respuestas principales.');
  }
  if (secondary.length > 8) {
    add('warning', 'answer-secondary-count', studyId, `${path}.answers`, 'Hay demasiadas respuestas secundarias; conserva solo puntos relevantes, sin ruido visual.');
  }

  answers.forEach((answer, index) => {
    const itemPath = `${path}.answers[${index}]`;
    if (!answer.text.trim()) {
      add('error', 'empty-answer-text', studyId, `${itemPath}.text`, 'La respuesta está vacía.');
    }
    if (!hasBold(answer.text)) {
      add('warning', 'answer-without-bold', studyId, `${itemPath}.text`, 'La respuesta debería resaltar el concepto clave con negritas.');
    }
    if (!answer.secondary && !answer.followUp?.trim()) {
      add('warning', 'missing-follow-up', studyId, `${itemPath}.followUp`, 'Cada respuesta principal debe tener followUp.');
    }
    if (answer.secondary && answer.followUp) {
      add('warning', 'secondary-with-follow-up', studyId, `${itemPath}.followUp`, 'Las respuestas secundarias no deben tener followUp.');
    }
  });
}

function validateLegacyFields(
  studyId: string,
  question: Question,
  path: string,
  add: AddIssue
) {
  const legacyQuestion = question as Question & {
    flashcards?: unknown;
  };
  if (question.answer) {
    add('warning', 'legacy-answer', studyId, `${path}.answer`, 'answer es legacy; usar answers en estudios nuevos.');
  }
  if (question.answerContext?.length) {
    add('warning', 'legacy-answer-context', studyId, `${path}.answerContext`, 'answerContext es legacy; usar answers con secondary: true.');
  }
  if (question.answerBullets) {
    add('warning', 'legacy-answer-bullets', studyId, `${path}.answerBullets`, 'answerBullets no debe ser el camino principal para estudios nuevos.');
  }
  if (legacyQuestion.flashcards) {
    add('warning', 'legacy-flashcards', studyId, `${path}.flashcards`, 'flashcards está prohibido; usar answers con secondary y followUp.');
  }
}

function validateCommentSuggestion(
  studyId: string,
  commentSuggestion: string | undefined,
  path: string,
  add: AddIssue
) {
  if (!commentSuggestion?.trim()) {
    add('warning', 'missing-comment-suggestion', studyId, path, 'Falta commentSuggestion natural para la pregunta o repaso.');
  }
}

function validateBiblicalCards(
  studyId: string,
  cards: Question['biblicalCards'],
  path: string,
  add: AddIssue
) {
  cards?.forEach((card, index) => {
    const cardPath = `${path}[${index}]`;
    if (!card.reference.trim()) {
      add('error', 'empty-card-reference', studyId, `${cardPath}.reference`, 'La tarjeta bíblica no tiene referencia.');
    }
    if (!card.text.trim()) {
      add('error', 'empty-card-text', studyId, `${cardPath}.text`, 'La tarjeta bíblica no tiene texto TNM.');
    }
    if (!card.purpose.trim()) {
      add('warning', 'empty-card-purpose', studyId, `${cardPath}.purpose`, 'La tarjeta bíblica necesita purpose enriquecido.');
    }
    if (card.commentSuggestion) {
      add('warning', 'legacy-card-comment-suggestion', studyId, `${cardPath}.commentSuggestion`, 'biblicalCards.commentSuggestion está obsoleto; usar purpose.');
    }
  });
}

function validateQuestionBiblicalCoverage(
  studyId: string,
  question: Question,
  path: string,
  paragraphs: ArticleData['paragraphs'],
  add: AddIssue
) {
  const cards = question.biblicalCards ?? [];
  const cardLookup = buildReferenceLookup(cards.map(({ reference, text }) => ({ reference, text })));
  const refs = uniqueRefs(paragraphs.flatMap((paragraph) => extractScriptureRefs(paragraph.content)));

  for (const ref of refs) {
    if (!cardLookup.get(ref)) {
      add('error', 'missing-biblical-card', studyId, `${path}.biblicalCards`, `Falta biblicalCard para la referencia citada en el párrafo: ${ref}.`);
    }
  }
}

function validateSidebarReferences(
  studyId: string,
  question: Question,
  path: string,
  paragraphs: ArticleData['paragraphs'],
  biblicalTextLookup: Map<string, ScriptureVerse>,
  add: AddIssue
) {
  const cardLookup = buildReferenceLookup((question.biblicalCards ?? []).map(({ reference, text }) => ({ reference, text })));
  const sidebarRefs = uniqueRefs(paragraphs.flatMap((paragraph) => {
    const sidebarTexts = [paragraph.sidebar?.intro, ...(paragraph.sidebar?.items ?? [])].filter(Boolean) as string[];
    return sidebarTexts.flatMap(extractScriptureRefs);
  }));

  for (const ref of sidebarRefs) {
    if (!biblicalTextLookup.get(ref)) {
      add('error', 'missing-sidebar-biblical-text', studyId, `${path}.paragraphs.sidebar`, `La referencia del recuadro necesita entrada TNM en biblicalTexts: ${ref}.`);
    }
    if (!cardLookup.get(ref)) {
      add('warning', 'sidebar-ref-without-card', studyId, `${path}.biblicalCards`, `La referencia del recuadro no está cubierta por biblicalCards de la pregunta: ${ref}.`);
    }
  }
}

function validateLsmText(
  studyId: string,
  value: string | undefined,
  path: string,
  add: AddIssue
) {
  if (!value?.trim()) return;
  if (value !== value.toUpperCase()) {
    add('warning', 'lsm-not-uppercase', studyId, path, 'Las glosas LSM deben escribirse en MAYÚSCULAS.');
  }
}

function extractScriptureRefs(text: string): string[] {
  return [...text.matchAll(/\(([^)]*\d+:\d+[^)]*)\)/g)]
    .flatMap((match) => parseScriptureReferences(match[1].replace(/^lea\s+/i, '').replace(/\bcompare\s+con\s+/gi, '')));
}

function uniqueRefs(refs: string[]): string[] {
  return [...new Set(refs.map((ref) => ref.trim()).filter(Boolean))];
}

function hasBold(text: string): boolean {
  return /\*\*[^*]+\*\*/.test(text);
}

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

type AddIssue = (
  severity: ArticleValidationSeverity,
  code: string,
  studyId: string | undefined,
  path: string,
  message: string
) => void;

function issueAdder(issues: ArticleValidationIssue[], strict = false): AddIssue {
  return (severity, code, studyId, path, message) => {
    issues.push({
      severity: strict && severity === 'warning' ? 'error' : severity,
      code,
      studyId,
      path,
      message,
    });
  };
}
