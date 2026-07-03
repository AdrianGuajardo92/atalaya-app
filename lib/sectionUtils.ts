import { Question } from '@/types/atalaya';

/** True when this question should show the section banner (first in a consecutive block). */
export function isFirstQuestionInSection(questions: Question[], index: number): boolean {
  const section = questions[index]?.section;
  if (!section) return false;
  return index === 0 || questions[index - 1]?.section !== section;
}

/** Count distinct section blocks in the article. */
export function countUniqueSections(questions: Question[]): number {
  return questions.filter((_, i) => isFirstQuestionInSection(questions, i)).length;
}

/** 1-based index of the section block that contains this question. */
export function sectionIndexAt(questions: Question[], index: number): number {
  let sectionNum = 0;
  for (let i = 0; i <= index; i++) {
    if (isFirstQuestionInSection(questions, i)) {
      sectionNum++;
    }
  }
  return sectionNum;
}
