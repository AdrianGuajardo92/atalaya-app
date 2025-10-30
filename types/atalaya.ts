export interface Question {
  number: string; // e.g., "1, 2" or "3"
  textEs: string; // Pregunta en español
  textLSM?: string; // Pregunta en LSM (se agregará después)
  paragraphs: number[]; // Números de párrafos relacionados
  section?: string; // Subtítulo de sección en español (opcional)
  sectionLSM?: string; // Subtítulo de sección en LSM (opcional)
}

export interface Paragraph {
  number: number;
  content: string; // Contenido del párrafo con textos bíblicos
}

export interface AtalayaStudy {
  song: string;
  title: string;
  biblicalText: string; // Texto bíblico principal
  theme: string;
  questions: Question[];
  paragraphs: Paragraph[];
}
