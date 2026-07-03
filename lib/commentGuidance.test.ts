import { describe, it, expect } from 'vitest';
import { buildQuestionComment, buildBiblicalComments } from './commentGuidance';

describe('commentGuidance', () => {
  it('prioriza commentSuggestion explícito', () => {
    const comment = buildQuestionComment(
      {
        number: '1',
        textEs: '¿Por qué?',
        commentSuggestion: 'Yo podría comentar que Jehová nos cuida.',
        keyPoint: 'Idea clave',
      },
      '2026-06-29'
    );
    expect(comment).toBe('Yo podría comentar que Jehová nos cuida.');
  });

  it('usa purpose enriquecido como contextNote en biblicalCard', () => {
    const comments = buildBiblicalComments(
      [
        {
          reference: 'Mateo 6:33',
          purpose: 'El recuadro dice que nuestra amistad con Jehová ocupa el primer lugar. Mateo 6:33 enseña que debemos buscar primero el Reino y la justicia de Dios. Esto nos ayuda a recordar que nada, ni siquiera el matrimonio, debe estar por encima de Jehová.',
          text: 'Busquen primero el Reino...',
        },
      ],
      { questionText: '¿Qué lugar ocupa Jehová?' }
    );
    expect(comments[0].contextNote).toContain('Jehová');
    expect(comments[0].contextNote).toContain('Reino');
  });

  it('genera contextNote explicativo cuando falta purpose', () => {
    const comments = buildBiblicalComments([
      {
        reference: 'Santiago 1:17',
        purpose: '',
        text: 'Todos los regalos buenos y todos los dones perfectos vienen de arriba, descienden del Padre de las luces celestes.',
      },
    ], {
      questionText: '¿Por qué son un regalo de Jehová los buenos amigos?',
      paragraphs: [{
        number: 1,
        content: 'LOS buenos amigos son un regalo de Jehová (Sant. 1:17).',
        summary: 'Los buenos amigos son un regalo de Jehová.',
      }],
    });
    expect(comments[0].contextNote.length).toBeGreaterThan(20);
    expect(comments[0].contextNote).not.toContain('Yo podría comentar');
  });
});
