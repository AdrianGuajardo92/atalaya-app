import { Paragraph, Question, ReviewQuestion } from '@/types/atalaya';
import { getAnswerTexts } from '@/lib/answerItems';
type Answer = Question['answer'] | ReviewQuestion['answer'];
type QuestionCommentInput = Pick<Question, 'number' | 'textEs' | 'answer' | 'answers' | 'answerContext' | 'commentSuggestion' | 'keyPoint'>;

export interface BiblicalCommentSource {
  reference: string;
  purpose: string;
  text: string;
  commentSuggestion?: string;
}

interface BiblicalCommentContext {
  questionText?: string;
  paragraphs?: Pick<Paragraph, 'number' | 'content' | 'summary'>[];
}

export interface BiblicalComment {
  reference: string;
  contextNote: string;
  text: string;
}

const PROPER_STARTS = [
  'Jehová',
  'Jesús',
  'Satanás',
  'Moisés',
  'David',
  'Pablo',
  'Pedro',
  'Job',
  'Abrahán',
  'Sara',
  'María',
  'José',
];

const GENERIC_PURPOSE_PATTERN = /^texto citado para apoyar/i;
const SCRIPTURE_BOOK_ABBREVIATIONS: Record<string, string[]> = {
  'Génesis': ['Gén.', 'Gen.'],
  'Éxodo': ['Éx.', 'Ex.'],
  'Levítico': ['Lev.'],
  'Números': ['Núm.', 'Num.'],
  'Deuteronomio': ['Deut.'],
  'Josué': ['Jos.'],
  'Jueces': ['Juec.'],
  'Rut': ['Rut'],
  '1 Samuel': ['1 Sam.'],
  '2 Samuel': ['2 Sam.'],
  '1 Reyes': ['1 Rey.'],
  '2 Reyes': ['2 Rey.'],
  '1 Crónicas': ['1 Crón.', '1 Cron.'],
  '2 Crónicas': ['2 Crón.', '2 Cron.'],
  'Esdras': ['Esd.'],
  'Nehemías': ['Neh.'],
  'Ester': ['Est.'],
  'Job': ['Job'],
  'Salmo': ['Sal.'],
  'Salmos': ['Sal.'],
  'Proverbios': ['Prov.'],
  'Eclesiastés': ['Ecl.'],
  'Cantar de los Cantares': ['Cant.'],
  'Isaías': ['Is.'],
  'Jeremías': ['Jer.'],
  'Lamentaciones': ['Lam.'],
  'Ezequiel': ['Ezeq.'],
  'Daniel': ['Dan.'],
  'Oseas': ['Os.'],
  'Joel': ['Joel'],
  'Amós': ['Amós'],
  'Abdías': ['Abd.'],
  'Jonás': ['Jon.'],
  'Miqueas': ['Miq.'],
  'Nahúm': ['Nah.'],
  'Habacuc': ['Hab.'],
  'Sofonías': ['Sof.'],
  'Ageo': ['Ageo'],
  'Zacarías': ['Zac.'],
  'Malaquías': ['Mal.'],
  'Mateo': ['Mat.'],
  'Marcos': ['Mar.'],
  'Lucas': ['Luc.'],
  'Juan': ['Juan'],
  'Hechos': ['Hech.'],
  'Romanos': ['Rom.'],
  '1 Corintios': ['1 Cor.'],
  '2 Corintios': ['2 Cor.'],
  'Gálatas': ['Gál.', 'Gal.'],
  'Efesios': ['Efes.'],
  'Filipenses': ['Filip.'],
  'Colosenses': ['Col.'],
  '1 Tesalonicenses': ['1 Tes.'],
  '2 Tesalonicenses': ['2 Tes.'],
  '1 Timoteo': ['1 Tim.'],
  '2 Timoteo': ['2 Tim.'],
  'Tito': ['Tito'],
  'Filemón': ['Filem.'],
  'Hebreos': ['Heb.'],
  'Santiago': ['Sant.'],
  '1 Pedro': ['1 Ped.'],
  '2 Pedro': ['2 Ped.'],
  '1 Juan': ['1 Juan'],
  '2 Juan': ['2 Juan'],
  '3 Juan': ['3 Juan'],
  'Judas': ['Jud.'],
  'Apocalipsis': ['Apoc.'],
};
const WEAK_OPENING_PATTERNS = [
  /^imagine\b/i,
  /^imagina\b/i,
  /^por ejemplo\b/i,
  /^así que\b/i,
  /^claro,\s/i,
  /^en una ocasión\b/i,
  /^suponga\b/i,
];
const MAIN_IDEA_TERMS = [
  'Jehová',
  'Jesús',
  'Biblia',
  'oración',
  'fe',
  'amor',
  'perdón',
  'debemos',
  'podemos',
  'necesitamos',
  'nos ayuda',
  'aprendemos',
  'es importante',
];

const QUESTION_COMMENT_SUGGESTIONS: Record<string, string> = {};

export function cleanStudyText(text: string): string {
  return text
    .replace(/\*\*/g, '')
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function ensureFinalPunctuation(text: string): string {
  if (!text) return text;
  return /[.!?¿¡]"?$/.test(text) ? text : `${text}.`;
}

function lowerCaseFirst(text: string): string {
  if (!text) return text;
  if (PROPER_STARTS.some((name) => text.startsWith(name))) return text;
  return text.charAt(0).toLowerCase() + text.slice(1);
}

function prepareQuotedComment(text: string): string {
  return text.replace(/"/g, "'");
}

function shorten(text: string, maxLength = 260): string {
  if (text.length <= maxLength) return text;

  const trimmed = text.slice(0, maxLength);
  const lastSentence = Math.max(trimmed.lastIndexOf('.'), trimmed.lastIndexOf('?'), trimmed.lastIndexOf('!'));
  if (lastSentence > 90) return trimmed.slice(0, lastSentence + 1);

  const lastSpace = trimmed.lastIndexOf(' ');
  return `${trimmed.slice(0, lastSpace > 90 ? lastSpace : maxLength).trim()}...`;
}

export function getAnswerSentences(answer?: Answer): string[] {
  if (!answer) return [];

  if (Array.isArray(answer)) {
    return answer.map(cleanStudyText).filter(Boolean);
  }

  return (String(answer).match(/[^.!?]+[.!?]+|[^.!?]+$/g) ?? [])
    .map(cleanStudyText)
    .filter(Boolean);
}

function scoreAnswerSentence(sentence: string, index: number): number {
  const normalized = cleanStudyText(sentence);
  let score = index * 0.4;

  if (normalized.length >= 45) score += 1;
  if (normalized.length > 190) score -= 1;
  if (WEAK_OPENING_PATTERNS.some((pattern) => pattern.test(normalized))) score -= 5;

  MAIN_IDEA_TERMS.forEach((term) => {
    if (normalized.toLowerCase().includes(term.toLowerCase())) score += 1;
  });

  return score;
}

function selectBestAnswerSentence(sentences: string[]): string {
  return sentences
    .map((sentence, index) => ({ sentence, score: scoreAnswerSentence(sentence, index) }))
    .sort((a, b) => b.score - a.score)[0]?.sentence ?? '';
}

function extractBibleIdea(text: string): string {
  const cleanText = cleanStudyText(text)
    .replace(/^["'”]+/, '')
    .replace(/["'”]+$/, '')
    .replace(/^por lo tanto,\s*/i, '')
    .replace(/^porque\s+/i, '');

  const candidates = cleanText
    .split(/[.;]/)
    .map((part) => part.trim())
    .filter((part) => part.length >= 24);

  return shorten(ensureFinalPunctuation(candidates[0] || cleanText), 170);
}

function stripBibleReferences(text: string): string {
  return text
    .replace(/\((?:lea\s+)?[^)]*\d+:\d+[^)]*\)/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function removeFinalPunctuation(text: string): string {
  return text.replace(/[.!?¿¡]+$/g, '').trim();
}

function normalizeBibleIdeaForComment(text: string): string {
  const idea = removeFinalPunctuation(extractBibleIdea(text))
    .replace(/^pero debes saber que\s+/i, '')
    .replace(/^debes saber que\s+/i, '')
    .replace(/^por lo tanto,\s*/i, '')
    .replace(/^porque\s+/i, '');

  return lowerCaseFirst(idea);
}

function formatBibleInsight(idea: string): string {
  if (!idea) return 'el texto contiene una idea importante para entender el párrafo';

  if (/últimos días|tiempos críticos|profetiz|predijo|predicho/i.test(idea)) {
    return `la Biblia ya había dicho que ${idea}`;
  }

  if (/^(manténganse|vigílense|busquen|sigan|pongan|recuerden|no\s|deben\s|debemos\s|tenemos\s)/i.test(idea)) {
    return `este texto nos ayuda a recordar que ${idea}`;
  }

  return `este texto muestra que ${idea}`;
}

function getReferenceNeedles(reference: string): string[] {
  const normalizedReference = cleanStudyText(reference);
  const match = normalizedReference.match(/^(.+?)\s+(\d+)(?::|\b)/);
  if (!match) return [normalizedReference];

  const [, book, chapter] = match;
  const abbreviations = SCRIPTURE_BOOK_ABBREVIATIONS[book] ?? [];

  return Array.from(new Set([
    `${book} ${chapter}`,
    `${book} ${chapter}:`,
    ...abbreviations.flatMap((abbreviation) => [
      `${abbreviation} ${chapter}`,
      `${abbreviation} ${chapter}:`,
    ]),
  ]));
}

function findParagraphForReference(
  reference: string,
  paragraphs: BiblicalCommentContext['paragraphs'] = [],
) {
  const needles = getReferenceNeedles(reference).map((needle) => needle.toLowerCase());

  return paragraphs.find((paragraph) => {
    const content = cleanStudyText(paragraph.content).toLowerCase();
    return needles.some((needle) => content.includes(needle));
  });
}

function extractParagraphContext(
  card: BiblicalCommentSource,
  context?: BiblicalCommentContext,
): string {
  const paragraph = findParagraphForReference(card.reference, context?.paragraphs);
  const paragraphSource = paragraph?.summary || paragraph?.content;
  const questionSource = context?.questionText;
  const purpose = cleanStudyText(card.purpose);

  const source = paragraphSource || questionSource || purpose;
  const cleaned = stripBibleReferences(cleanStudyText(source))
    .replace(/^texto citado para apoyar la respuesta a la pregunta:\s*/i, '')
    .replace(/^qué\s+/i, 'lo que ')
    .replace(/^cómo\s+/i, 'la manera en que ')
    .replace(/^por qué\s+/i, 'por qué ');

  return removeFinalPunctuation(shorten(cleaned, 165));
}

function buildContextSentence(contextIdea: string): string {
  if (!contextIdea) {
    return 'Ese detalle ayuda a explicar la idea del párrafo con más claridad.';
  }

  return `El párrafo lo usa para explicar que ${lowerCaseFirst(contextIdea)}.`;
}

export function buildQuestionComment(question: QuestionCommentInput, studyId?: string): string | null {
  if (question.commentSuggestion) {
    return cleanStudyText(question.commentSuggestion);
  }

  const customComment = studyId ? QUESTION_COMMENT_SUGGESTIONS[`${studyId}:${question.number}`] : undefined;
  if (customComment) {
    return customComment;
  }

  const answerSentences = getAnswerTexts(question).map(cleanStudyText).filter(Boolean);
  const legacySentences = getAnswerSentences(question.answer);
  const sentences = answerSentences.length > 0 ? answerSentences : legacySentences;
  const source = sentences.length > 0
    ? selectBestAnswerSentence(sentences)
    : cleanStudyText(question.keyPoint ?? '');

  if (!source) return null;

  return `Yo podría comentar: "${prepareQuotedComment(shorten(ensureFinalPunctuation(source)))}"`;
}

function buildAutoContextNote(
  card: BiblicalCommentSource,
  context?: BiblicalCommentContext,
): string {
  const cleanedPurpose = cleanStudyText(card.purpose);
  const contextIdea = extractParagraphContext(card, context);
  const contextSentence = buildContextSentence(contextIdea);
  const bibleInsight = formatBibleInsight(normalizeBibleIdeaForComment(card.text));

  if (!GENERIC_PURPOSE_PATTERN.test(cleanedPurpose) && cleanedPurpose.length >= 24) {
    return cleanedPurpose;
  }

  const insightSentence = bibleInsight
    ? `${card.reference} enseña que ${removeFinalPunctuation(bibleInsight.replace(/^este texto muestra que /i, '').replace(/^la Biblia ya había dicho que /i, ''))}.`
    : '';

  return [insightSentence, contextSentence].filter(Boolean).join(' ').trim() || contextSentence;
}

export function buildBiblicalComment(card: BiblicalCommentSource, context?: BiblicalCommentContext): BiblicalComment {
  const contextNote = card.purpose
    ? cleanStudyText(card.purpose)
    : buildAutoContextNote(card, context);

  return {
    reference: card.reference,
    contextNote,
    text: cleanStudyText(card.text),
  };
}

export function buildBiblicalComments(cards?: BiblicalCommentSource[], context?: BiblicalCommentContext): BiblicalComment[] {
  return (cards ?? []).map((card) => buildBiblicalComment(card, context));
}
