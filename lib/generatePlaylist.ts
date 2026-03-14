import { ArticleData } from '@/types/atalaya';

export type PlaylistItemType = 'song' | 'title' | 'biblical-text' | 'section' | 'paragraph' | 'read-text' | 'image';

export interface PlaylistItem {
  type: PlaylistItemType;
  content: string;
  indent: boolean;
  imageUrl?: string;
}

/**
 * Genera la lista de reproducción ordenada a partir de los datos del artículo.
 * El orden sigue la estructura del estudio de La Atalaya:
 * Canción → Título → Texto bíblico → Preguntas/Párrafos → Canción final
 */
export function generatePlaylist(article: ArticleData): PlaylistItem[] {
  const items: PlaylistItem[] = [];

  // 1. Canción inicial
  items.push({ type: 'song', content: article.song, indent: false });

  // 2. Título
  items.push({ type: 'title', content: article.title, indent: false });

  // 3. Texto bíblico
  items.push({ type: 'biblical-text', content: article.biblicalText, indent: false });

  // 4. Recorrer preguntas en orden
  let isFirstAfterSection = false;

  for (const question of article.questions) {
    // Si la pregunta tiene subtítulo de sección
    if (question.section) {
      items.push({ type: 'section', content: question.section, indent: false });
      isFirstAfterSection = true;
    }

    // Párrafos de esta pregunta
    const paragraphLabel = question.paragraphs.length === 1
      ? `Párrafo ${question.paragraphs[0]}`
      : `Párrafos ${question.paragraphs.join(', ')}`;

    items.push({
      type: 'paragraph',
      content: paragraphLabel,
      indent: isFirstAfterSection,
    });

    if (isFirstAfterSection) isFirstAfterSection = false;

    // Texto bíblico para leer (LEE...)
    if (question.readText) {
      items.push({ type: 'read-text', content: question.readText, indent: false });
    }

    // Imagen de la pregunta (NO del párrafo)
    if (question.image) {
      items.push({
        type: 'image',
        content: question.imageCaption || 'Imagen',
        indent: false,
        imageUrl: question.image,
      });
    }
  }

  // 5. Canción final
  items.push({ type: 'song', content: article.finalSong, indent: false });

  return items;
}

/**
 * Convierte la playlist a texto plano para copiar al portapapeles.
 */
export function playlistToText(items: PlaylistItem[]): string {
  return items.map((item) => {
    const prefix = item.indent ? '   - ' : '';

    switch (item.type) {
      case 'song':
        return `🎵 ${item.content}`;
      case 'title':
        return item.content;
      case 'biblical-text':
        return item.content;
      case 'section':
        return `\n📌 ${item.content}`;
      case 'paragraph':
        return `${prefix}${item.content}`;
      case 'read-text':
        return `📖 ${item.content}`;
      case 'image':
        return `🖼️ Imagen`;
      default:
        return item.content;
    }
  }).join('\n');
}
