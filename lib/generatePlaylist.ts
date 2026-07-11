import { ArticleData } from '@/types/atalaya';
import { parseScriptureReferences } from '@/lib/resolveScriptureRef';

export type PlaylistItemType = 'biblical-text' | 'paragraph' | 'read-text' | 'image';

export interface PlaylistItem {
  type: PlaylistItemType;
  label: string;
  detail?: string;
}

function joinNumbers(numbers: number[]): string {
  if (numbers.length <= 1) return String(numbers[0] ?? '');
  if (numbers.length === 2) return `${numbers[0]} y ${numbers[1]}`;
  return `${numbers.slice(0, -1).join(', ')} y ${numbers.at(-1)}`;
}

function getThematicReference(biblicalText: string): string {
  const match = biblicalText.match(/\(([^()]+)\)\.?\s*$/);
  const rawReference = match?.[1] ?? biblicalText;
  return parseScriptureReferences(rawReference)[0] ?? rawReference.trim();
}

function sentenceCase(text: string): string {
  return text
    .toLocaleLowerCase('es-MX')
    .replace(/^([¿¡]?)(\p{L})/u, (_, punctuation: string, letter: string) => (
      `${punctuation}${letter.toLocaleUpperCase('es-MX')}`
    ));
}

function getImageParagraphs(caption: string | undefined, fallback: number[]): number[] {
  const paragraphMatch = caption?.match(
    /párrafos?\s+(\d+(?:\s*(?:,|y|al|[-–—])\s*\d+)*)/i,
  );
  const numbers = paragraphMatch?.[1].match(/\d+/g)?.map(Number);
  return numbers?.length ? numbers : fallback;
}

function paragraphReference(paragraphs: number[]): string {
  return paragraphs.length === 1
    ? `párrafo ${paragraphs[0]}`
    : `párrafos ${joinNumbers(paragraphs)}`;
}

function paragraphLabel(paragraphs: number[]): string {
  const reference = paragraphReference(paragraphs);
  const label = `${reference[0].toLocaleUpperCase('es-MX')}${reference.slice(1)}`;
  return paragraphs.length === 1 ? label : `${label} — JUNTOS`;
}

function imageLabel(paragraphs: number[]): string {
  if (paragraphs.length === 1) return `Imagen del párrafo ${paragraphs[0]}`;
  return `Imagen correspondiente a los párrafos ${joinNumbers(paragraphs)}`;
}

/**
 * Genera la secuencia necesaria para preparar la playlist LSM en JW Library.
 * Solo incluye el texto temático, bloques de párrafos, lecturas e imágenes.
 */
export function generatePlaylist(article: ArticleData): PlaylistItem[] {
  const items: PlaylistItem[] = [
    {
      type: 'biblical-text',
      label: `${getThematicReference(article.biblicalText)} — texto temático`,
    },
  ];

  const imagesByQuestionIndex = new Map<number, PlaylistItem[]>();

  article.questions.forEach((question, ownerQuestionIndex) => {
    if (!question.image) return;

    const relatedParagraphs = getImageParagraphs(question.imageCaption, question.paragraphs);
    const lastRelatedParagraph = Math.max(...relatedParagraphs);
    const targetQuestionIndex = article.questions.findIndex((candidate) => (
      candidate.paragraphs.includes(lastRelatedParagraph)
    ));
    const placementIndex = targetQuestionIndex === -1 ? ownerQuestionIndex : targetQuestionIndex;
    const pendingImages = imagesByQuestionIndex.get(placementIndex) ?? [];

    pendingImages.push({
      type: 'image',
      label: imageLabel(relatedParagraphs),
    });
    imagesByQuestionIndex.set(placementIndex, pendingImages);
  });

  let sectionNumber = 0;

  article.questions.forEach((question, questionIndex) => {
    if (question.section) {
      sectionNumber += 1;
      items.push({
        type: 'paragraph',
        label: `Subtítulo ${sectionNumber} + ${paragraphReference(question.paragraphs)} — JUNTOS`,
        detail: sentenceCase(question.section),
      });
    } else {
      items.push({
        type: 'paragraph',
        label: paragraphLabel(question.paragraphs),
      });
    }

    if (question.readText) {
      items.push({ type: 'read-text', label: question.readText });
    }

    items.push(...(imagesByQuestionIndex.get(questionIndex) ?? []));
  });

  return items;
}

/** Texto canónico de un elemento, compartido por la UI y el portapapeles. */
export function playlistItemToText(item: PlaylistItem): string {
  const prefix = item.type === 'read-text'
    ? '📖 '
    : item.type === 'image'
      ? '🖼️ '
      : '';
  const detail = item.detail ? `\n“${item.detail}”` : '';
  return `${prefix}${item.label}${detail}`;
}

/** Convierte la playlist visible completa a texto plano numerado. */
export function playlistToText(items: PlaylistItem[]): string {
  return items
    .map((item, index) => `${index + 1}. ${playlistItemToText(item)}`)
    .join('\n');
}
