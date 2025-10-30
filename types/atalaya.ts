export interface Question {
  number: string; // e.g., "1, 2" or "3"
  textEs: string; // Pregunta en español
  textLSM?: string; // Pregunta en LSM (se agregará después)
  paragraphs: number[]; // Números de párrafos relacionados
  section?: string; // Subtítulo de sección en español (opcional)
  sectionLSM?: string; // Subtítulo de sección en LSM (opcional)
  answer?: string; // Respuesta basada en los párrafos (lenguaje sencillo)
  answerBullets?: string; // Puntos clave de la respuesta en formato bullets
  flashcards?: Array<{
    question: string; // Pregunta de la tarjeta didáctica
    answer: string; // Respuesta de la tarjeta
  }>;
}

export interface Paragraph {
  number: number;
  content: string; // Contenido del párrafo con textos bíblicos
}

export interface ReviewQuestion {
  question: string; // Pregunta de repaso en español
  questionLSM?: string; // Pregunta de repaso en LSM
}

export interface AtalayaStudy {
  song: string;
  title: string;
  biblicalText: string; // Texto bíblico principal
  theme: string;
  questions: Question[];
  paragraphs: Paragraph[];
  reviewQuestions: ReviewQuestion[]; // Preguntas de repaso
  finalSong: string; // Canción final
}
