export interface Question {
  number: string; // e.g., "1, 2" or "3"
  textEs: string; // Pregunta en español
  textLSM?: string; // Pregunta en LSM (se agregará después)
  paragraphs: number[]; // Números de párrafos relacionados
  section?: string; // Subtítulo de sección en español (opcional)
  sectionLSM?: string; // Subtítulo de sección en LSM (opcional)
  readText?: string; // Texto bíblico a leer (ej: "LEE Ezequiel 34:15, 16") (opcional)
  preview?: string; // Adelanto del tema para el conductor del estudio (opcional)
  image?: string; // URL de imagen ilustrativa (opcional)
  imageCaption?: string; // Leyenda de la imagen (opcional)
  answer?: string; // Respuesta basada en los párrafos (lenguaje sencillo)
  answerBullets?: string | string[]; // Puntos clave de la respuesta en formato bullets (string con \n o array)
  answerBulletsTypes?: ('direct' | 'interlaced')[]; // Tipos de cada punto clave (directo o entrelazado)
  flashcards?: string[] | Array<{
    question: string; // Pregunta de la tarjeta didáctica
    answer: string; // Respuesta de la tarjeta
    questionLSM?: string; // Pregunta en LSM
    answerLSM?: string; // Respuesta en LSM
  }>; // Puede ser array de strings o array de objetos (para retrocompatibilidad)
  biblicalCards?: Array<{
    reference: string; // Referencia bíblica (ej: "Proverbios 28:13")
    purpose: string; // Por qué está este texto / para qué sirve
    text: string; // Texto completo de la Traducción del Nuevo Mundo
  }>;
  reflectionQuestions?: string[]; // Preguntas de reflexión personal
  practicalApplications?: string[]; // Aplicaciones prácticas concretas
  infographic?: string; // URL de infografía relacionada con la pregunta (opcional)
}

export interface Paragraph {
  number: number;
  content: string; // Contenido del párrafo con textos bíblicos
  summary?: string; // Oraciones clave del párrafo para el conductor
  image?: string; // URL de imagen ilustrativa (opcional)
  imageCaption?: string; // Leyenda de la imagen (opcional)
}

export interface ReviewQuestion {
  question: string; // Pregunta de repaso en español
  questionLSM?: string; // Pregunta de repaso en LSM
  answer?: string; // Respuesta basada en los párrafos (lenguaje sencillo)
  answerBullets?: string | string[]; // Puntos clave de la respuesta en formato bullets (string con \n o array)
  answerBulletsTypes?: ('direct' | 'interlaced')[]; // Tipos de cada punto clave (directo o entrelazado)
  flashcards?: string[] | Array<{
    question: string; // Pregunta de la tarjeta didáctica
    answer: string; // Respuesta de la tarjeta
    questionLSM?: string; // Pregunta en LSM
    answerLSM?: string; // Respuesta en LSM
  }>; // Puede ser array de strings o array de objetos (para retrocompatibilidad)
  biblicalCards?: Array<{
    reference: string; // Referencia bíblica (ej: "Proverbios 28:13")
    purpose: string; // Por qué está este texto / para qué sirve
    text: string; // Texto completo de la Traducción del Nuevo Mundo
  }>;
  reflectionQuestions?: string[]; // Preguntas de reflexión personal
  practicalApplications?: string[]; // Aplicaciones prácticas concretas
}

// Resumen del artículo para el comentario final de la reunión
export interface ArticleSummary {
  keyPoints: {
    order: number;           // Orden cronológico en el artículo
    statement: string;       // Oración clave
    bibleReference?: string; // Referencia bíblica si aplica
    paragraphSource?: number; // De qué párrafo viene
  }[];
  centralIdea: string;       // Idea principal del artículo
}

export interface AtalayaStudy {
  song: string;
  title: string;
  titleLSM?: string; // Título en LSM (se agregará después)
  biblicalText: string; // Texto bíblico principal
  theme: string;
  questions: Question[];
  paragraphs: Paragraph[];
  reviewQuestions: ReviewQuestion[]; // Preguntas de repaso
  finalSong: string; // Canción final
  articleSummary?: ArticleSummary; // Resumen para el comentario final
}

// Metadatos de un artículo de estudio
export interface ArticleMetadata {
  articleNumber: number; // Número de artículo (ej: 34, 35)
  week: string; // Semana (ej: "4-10 Nov")
  month: string; // Mes (ej: "Noviembre")
  year: number; // Año (ej: 2025)
}

// Artículo completo con metadatos
export interface ArticleData extends AtalayaStudy {
  metadata: ArticleMetadata;
}

// Datos de un mes (contiene múltiples artículos)
export interface MonthData {
  articles: ArticleData[];
}

// Base de datos completa de artículos organizados por año-mes
export interface AtalayaDatabase {
  [yearMonth: string]: MonthData; // Clave: "2025-08", "2025-09", etc.
}
