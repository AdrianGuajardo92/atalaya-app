export interface AnswerItem {
  text: string;
  followUp?: string;
  secondary?: boolean;
}

export interface Question {
  number: string; // e.g., "1, 2" or "3"
  textEs: string; // Pregunta en español
  textLSM?: string; // Pregunta en LSM (se agregará después)
  paragraphs: number[]; // Números de párrafos relacionados
  section?: string; // Subtítulo de sección en español (opcional)
  sectionLSM?: string; // Subtítulo de sección en LSM (opcional)
  readText?: string; // Texto bíblico a leer (ej: "LEE Ezequiel 34:15, 16") (opcional)
  preview?: string; // Adelanto del tema para el conductor del estudio (opcional)
  videoLSM?: string; // URL del video en LSM para preguntas que agrupan varios párrafos (opcional)
  questionVideoLSM?: string; // URL del video corto que muestra SOLO la pregunta señada en LSM
  image?: string; // URL de imagen ilustrativa (opcional)
  imageCaption?: string; // Leyenda de la imagen (opcional)
  supportingImages?: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>; // Imágenes complementarias que se muestran después de la imagen principal
  answer?: string | string[]; // Legacy: oraciones clave (usar answers)
  answers?: AnswerItem[]; // Respuestas principales y secundarias con followUp
  commentSuggestion?: string; // Sugerencia sencilla para comentar la pregunta central
  answerContext?: string[]; // Legacy: contexto adicional (usar answers con secondary)
  answerBullets?: string | string[]; // Puntos clave de la respuesta en formato bullets (string con \n o array)
  answerBulletsTypes?: ('direct' | 'interlaced')[]; // Tipos de cada punto clave (directo o entrelazado)
  biblicalCards?: Array<{
    reference: string; // Referencia bíblica (ej: "Proverbios 28:13")
    purpose: string; // Contexto enriquecido: por qué está en el párrafo, qué enseña y cómo ayuda (flip card)
    text: string; // Texto completo de la Traducción del Nuevo Mundo
    reasoningQuestion?: string; // Pregunta extra para conectar el texto con el párrafo
    commentSuggestion?: string; // Obsoleto en flip cards; usar solo purpose
  }>;
  reflectionQuestions?: string[]; // Preguntas de reflexión personal
  practicalApplications?: string[]; // Aplicaciones prácticas concretas
  infographic?: string; // URL de infografía relacionada con la pregunta (opcional)
  keyPoint?: string; // Idea principal que no debe faltar en el comentario
  guidingQuestion?: string; // Pregunta extra si no mencionan el punto clave
}

export interface ParagraphSidebar {
  title: string;
  intro?: string;
  items?: string[]; // Puntos del recuadro (lista numerada o con viñetas)
}

export interface Paragraph {
  number: number;
  content: string; // Contenido del párrafo con textos bíblicos
  summary?: string; // Oraciones clave del párrafo para el conductor
  image?: string; // URL de imagen ilustrativa (opcional)
  imageCaption?: string; // Leyenda de la imagen (opcional)
  videoLSM?: string; // URL del video en LSM para este párrafo (opcional)
  note?: string; // Nota al pie del párrafo (información adicional)
  sidebar?: ParagraphSidebar; // Recuadro lateral de jw.org (boxSupplement)
}

export interface ReviewQuestion {
  question: string; // Pregunta de repaso en español
  questionLSM?: string; // Pregunta de repaso en LSM
  answer?: string | string[]; // Legacy: oraciones clave (usar answers)
  answers?: AnswerItem[];
  commentSuggestion?: string; // Sugerencia sencilla para comentar la pregunta de repaso
  answerBullets?: string | string[]; // Puntos clave de la respuesta en formato bullets (string con \n o array)
  answerBulletsTypes?: ('direct' | 'interlaced')[]; // Tipos de cada punto clave (directo o entrelazado)
  biblicalCards?: Array<{
    reference: string; // Referencia bíblica (ej: "Proverbios 28:13")
    purpose: string; // Contexto enriquecido: por qué está en el párrafo, qué enseña y cómo ayuda (flip card)
    text: string; // Texto completo de la Traducción del Nuevo Mundo
    commentSuggestion?: string; // Obsoleto en flip cards; usar solo purpose
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
  paragraphSummaryMode?: 'summary' | 'objective'; // Etiqueta y propósito editorial de paragraph.summary
  headerInfographic?: string; // URL de infografía principal del artículo (aparece debajo del texto bíblico)
  overview?: ArticleOverview; // Vista previa: conexión con el anterior + lo que veremos
  questions: Question[];
  paragraphs: Paragraph[];
  reviewQuestions: ReviewQuestion[]; // Preguntas de repaso
  finalSong: string; // Canción final
}

// Metadatos de un artículo de estudio
export interface ArticleMetadata {
  studyId: string; // Identificador por fecha de inicio de semana (ej: "2026-06-29")
  articleNumber?: number; // Legacy: número impreso en revistas antiguas
  week: string; // Semana (ej: "29 Jun-5 Jul")
  month: string; // Mes (ej: "Junio")
  year: number; // Año (ej: 2026)
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
