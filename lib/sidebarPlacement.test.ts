import { describe, it, expect } from 'vitest';
import {
  getParagraphsWithSidebar,
  shouldShowSidebarOnQuestionCard,
  shouldShowSidebarInParagraphFlow,
} from './sidebarPlacement';
import { Paragraph, Question } from '@/types/atalaya';

const withSidebar: Paragraph = {
  number: 13,
  content: '...',
  sidebar: { title: 'Recuadro', items: ['Item'] },
};

describe('sidebarPlacement', () => {
  it('filtra párrafos con sidebar', () => {
    expect(getParagraphsWithSidebar([{ number: 1, content: 'x' }, withSidebar])).toHaveLength(1);
  });

  it('muestra recuadro en tarjeta cuando hay imagen', () => {
    const q: Question = { number: '12', textEs: 'Q', paragraphs: [13], image: 'https://example.com/a.jpg' };
    expect(shouldShowSidebarOnQuestionCard(q, [withSidebar])).toBe(true);
    expect(shouldShowSidebarInParagraphFlow(q, [withSidebar])).toBe(false);
  });

  it('muestra recuadro en flujo de párrafo sin imagen', () => {
    const q: Question = { number: '12', textEs: 'Q', paragraphs: [13] };
    expect(shouldShowSidebarOnQuestionCard(q, [withSidebar])).toBe(false);
    expect(shouldShowSidebarInParagraphFlow(q, [withSidebar])).toBe(true);
  });
});
