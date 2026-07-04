import { describe, expect, it } from 'vitest';
import { ArticleData } from '@/types/atalaya';
import { validateStudyRegistry } from './articleValidation';

const validStudy: ArticleData = {
  metadata: {
    studyId: '2026-01-05',
    week: '5-11 enero',
    month: 'Enero',
    year: 2026,
  },
  song: 'Canción 1',
  title: 'Título',
  biblicalText: 'Texto base',
  theme: 'Tema',
  questions: [
    {
      number: '1',
      textEs: '¿Qué aprendemos?',
      textLSM: '',
      paragraphs: [1],
      readText: 'LEE Santiago 1:17',
      answers: [
        { text: 'Los regalos buenos vienen de **Jehová**.', followUp: '¿De dónde vienen?' },
        { text: 'Eso nos ayuda a **confiar** en él.', followUp: '¿Qué efecto tiene?' },
        { text: 'El texto habla de los “**regalos buenos**”.', secondary: true },
      ],
      biblicalCards: [
        {
          reference: 'Santiago 1:17',
          purpose: 'El párrafo cita este texto para mostrar que los regalos buenos vienen de Jehová. Eso apoya directamente la respuesta de la pregunta.',
          text: 'Todos los regalos buenos vienen de arriba.',
        },
      ],
      commentSuggestion: 'Yo podría comentar que Jehová es la fuente de todo lo bueno.',
    },
  ],
  paragraphs: [
    {
      number: 1,
      content: 'Jehová nos da regalos buenos (Sant. 1:17).',
      summary: 'Jehová es la fuente de los **regalos buenos**.',
    },
  ],
  reviewQuestions: [
    {
      question: '¿Qué recordamos?',
      answers: [
        { text: 'Recordamos que Jehová da **regalos buenos**.', followUp: '¿Qué recordamos?' },
        { text: 'Eso fortalece nuestra **confianza**.', followUp: '¿Qué fortalece?' },
      ],
      commentSuggestion: 'Yo podría comentar que Jehová siempre nos da lo que nos ayuda.',
    },
  ],
  finalSong: 'Canción 2',
};

describe('articleValidation', () => {
  it('acepta un estudio con contrato actual', () => {
    const issues = validateStudyRegistry(
      { '2026-01-05': validStudy },
      {
        '2026-01-05': {
          'LEE Santiago 1:17': [{ reference: 'Santiago 1:17', text: 'Todos los regalos buenos vienen de arriba.' }],
        },
      },
      { activeStudyIds: ['2026-01-05'], fileStudyIds: ['2026-01-05'] }
    );

    expect(issues.filter((issue) => issue.severity === 'error')).toEqual([]);
  });

  it('detecta readText y biblicalCards faltantes', () => {
    const brokenStudy = {
      ...validStudy,
      questions: [
        {
          ...validStudy.questions[0],
          readText: 'LEE Mateo 6:33',
          biblicalCards: [],
        },
      ],
    };

    const issues = validateStudyRegistry(
      { '2026-01-05': brokenStudy },
      { '2026-01-05': {} },
      { activeStudyIds: ['2026-01-05'] }
    );

    expect(issues.map((issue) => issue.code)).toContain('read-text-missing');
    expect(issues.map((issue) => issue.code)).toContain('missing-biblical-card');
  });

  it('convierte warnings en errores con strict', () => {
    const issues = validateStudyRegistry(
      {
        '2026-01-05': {
          ...validStudy,
          paragraphs: [{ ...validStudy.paragraphs[0], summary: 'Resumen sin negritas.' }],
        },
      },
      {
        '2026-01-05': {
          'LEE Santiago 1:17': [{ reference: 'Santiago 1:17', text: 'Todos los regalos buenos vienen de arriba.' }],
        },
      },
      { strict: true }
    );

    expect(issues.some((issue) => issue.code === 'summary-without-bold' && issue.severity === 'error')).toBe(true);
  });
});
