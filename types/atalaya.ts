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
  answer?: string | string[]; // Oraciones clave de la respuesta (array o string para compatibilidad)
  answerContext?: string[]; // Contexto adicional separado de la respuesta directa
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
    reasoningQuestion?: string; // Pregunta extra para conectar el texto con el párrafo
  }>;
  reflectionQuestions?: string[]; // Preguntas de reflexión personal
  practicalApplications?: string[]; // Aplicaciones prácticas concretas
  infographic?: string; // URL de infografía relacionada con la pregunta (opcional)
  keyPoint?: string; // Idea principal que no debe faltar en el comentario
  guidingQuestion?: string; // Pregunta extra si no mencionan el punto clave
}

export interface Paragraph {
  number: number;
  content: string; // Contenido del párrafo con textos bíblicos
  summary?: string; // Oraciones clave del párrafo para el conductor
  image?: string; // URL de imagen ilustrativa (opcional)
  imageCaption?: string; // Leyenda de la imagen (opcional)
  videoLSM?: string; // URL del video en LSM para este párrafo (opcional)
}

export interface ReviewQuestion {
  question: string; // Pregunta de repaso en español
  questionLSM?: string; // Pregunta de repaso en LSM
  answer?: string | string[]; // Oraciones clave de la respuesta (array o string para compatibilidad)
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
  image?: string; // URL de imagen ilustrativa
  imageCaption?: string; // Leyenda de la imagen
  reflectionQuestions?: string[]; // Preguntas de reflexión personal
  practicalApplications?: string[]; // Aplicaciones prácticas concretas
}

// Vista previa del artículo: conexión con el anterior + lo que veremos
export interface ArticleOverview {
  previousArticle?: {
    number: number;
    topic: string;        // Tema corto del artículo anterior
    keywords: string[];   // Palabras clave
  };
  whatWellSee: {
    section: string;      // Título/tema de la sección
    keywords: string[];   // Palabras clave de esa sección
  }[];
}

export interface AtalayaStudy {
  song: string;
  title: string;
  titleLSM?: string; // Título en LSM (se agregará después)
  biblicalText: string; // Texto bíblico principal
  theme: string;
  headerInfographic?: string; // URL de infografía principal del artículo (aparece debajo del texto bíblico)
  overview?: ArticleOverview; // Vista previa: conexión con el anterior + lo que veremos
  questions: Question[];
  paragraphs: Paragraph[];
  reviewQuestions: ReviewQuestion[]; // Preguntas de repaso
  finalSong: string; // Canción final
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
