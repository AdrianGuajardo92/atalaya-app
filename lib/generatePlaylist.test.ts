import { describe, expect, it } from 'vitest';
import { study20260706 } from '@/data/articles/study-2026-07-06';
import type { ArticleData } from '@/types/atalaya';
import {
  generatePlaylist,
  playlistItemToText,
  playlistToText,
} from './generatePlaylist';

const expectedStudyPlaylist = [
  'Romanos 12:1 — texto temático',
  'Párrafos 1 y 2 — JUNTOS',
  'Párrafo 3',
  'Subtítulo 1 + párrafo 4 — JUNTOS\n“¿Qué son los principios bíblicos?”',
  'Párrafo 5',
  '🖼️ Imagen del párrafo 5',
  'Subtítulo 2 + párrafo 6 — JUNTOS\n“¿Por qué son importantes los principios bíblicos?”',
  'Párrafo 7',
  '🖼️ Imagen del párrafo 7',
  'Párrafo 8',
  '📖 LEE Romanos 12:1, 2',
  'Párrafo 9',
  '📖 LEE Hebreos 5:13, 14',
  'Subtítulo 3 + párrafo 10 — JUNTOS\n“¿Cómo podemos identificar los principios bíblicos?”',
  'Párrafo 11',
  '🖼️ Imagen del párrafo 11',
  'Párrafo 12',
  '📖 LEE Mateo 5:21, 22',
  'Párrafo 13',
  '🖼️ Imagen correspondiente a los párrafos 12 y 13',
  'Párrafo 14',
  '📖 LEE Mateo 5:27, 28',
  'Párrafo 15',
  '🖼️ Imagen correspondiente a los párrafos 14 y 15',
  'Párrafo 16',
  '📖 LEE Mateo 5:43, 44',
  'Párrafo 17',
  '🖼️ Imagen correspondiente a los párrafos 16 y 17',
  'Subtítulo 4 + párrafo 18 — JUNTOS\n“Decididos a vivir de acuerdo con los principios bíblicos”',
];

describe('generatePlaylist', () => {
  it('genera la secuencia completa del estudio 2026-07-06', () => {
    const playlist = generatePlaylist(study20260706);

    expect(playlist.map(playlistItemToText)).toEqual(expectedStudyPlaylist);
    expect(playlist).toHaveLength(29);
  });

  it('coloca una imagen después del último párrafo indicado en su leyenda', () => {
    const visibleItems = generatePlaylist(study20260706).map(playlistItemToText);

    expect(visibleItems.indexOf('🖼️ Imagen correspondiente a los párrafos 16 y 17'))
      .toBe(visibleItems.indexOf('Párrafo 17') + 1);
  });

  it('excluye canciones, título, tema, preguntas y repaso', () => {
    const playlist = generatePlaylist(study20260706);
    const copiedText = playlistToText(playlist);

    expect(playlist.every((item) => (
      ['biblical-text', 'paragraph', 'read-text', 'image'].includes(item.type)
    ))).toBe(true);
    expect(playlist[0].label).not.toBe(study20260706.title);
    expect(copiedText).not.toContain(study20260706.song);
    expect(copiedText).not.toContain(study20260706.theme);
    expect(copiedText).not.toContain(study20260706.questions[0].textEs);
    expect(copiedText).not.toContain(study20260706.reviewQuestions[0].question);
    expect(copiedText).not.toContain(study20260706.finalSong);
  });

  it('copia exactamente todos los elementos visibles con su numeración', () => {
    const expectedCopy = expectedStudyPlaylist
      .map((item, index) => `${index + 1}. ${item}`)
      .join('\n');

    expect(playlistToText(generatePlaylist(study20260706))).toBe(expectedCopy);
  });

  it('coloca una imagen sin referencia explícita después de su propia pregunta', () => {
    const article: ArticleData = {
      metadata: { studyId: 'test', week: 'Test', month: 'Test', year: 2026 },
      song: 'Canción inicial',
      title: 'Título',
      biblicalText: '“Texto” (PROV. 1:1).',
      theme: 'Tema',
      questions: [
        {
          number: '1, 2',
          textEs: 'Pregunta',
          paragraphs: [1, 2],
          image: '/imagen.jpg',
          imageCaption: 'Una imagen sin referencia de párrafo.',
        },
      ],
      paragraphs: [
        { number: 1, content: 'Párrafo 1' },
        { number: 2, content: 'Párrafo 2' },
      ],
      reviewQuestions: [{ question: 'Repaso' }],
      finalSong: 'Canción final',
    };

    expect(generatePlaylist(article).map(playlistItemToText)).toEqual([
      'Proverbios 1:1 — texto temático',
      'Párrafos 1 y 2 — JUNTOS',
      '🖼️ Imagen correspondiente a los párrafos 1 y 2',
    ]);
  });
});
