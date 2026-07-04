# Plantilla de estudio (referencia)

Basada en la estructura estándar de estudios nuevos (diseño ejecutivo por defecto).

## Exports obligatorios en `data/articles/study-YYYY-MM-DD.ts`

```typescript
import { ArticleData } from '@/types/atalaya';

// Claves "LEE ..." para readText de preguntas
// Claves TNM individuales para toda ref clicable entre paréntesis en párrafos/recuadros
export const biblicalTexts20260629: Record<string, { reference: string; text: string }[]> = {
  "LEE Salmo 62:8": [
    { reference: "Salmo 62:8", text: "Confíen en él en todo momento..." }
  ],
  // Refs clicables en paragraph.content o recuadro:
  "Filipenses 1:10": [
    { reference: "Filipenses 1:10", text: "que se aseguren de qué cosas son las más importantes..." }
  ],
  // Referencias compuestas: una entrada por versículo.
  "Isaías 48:17": [
    { reference: "Isaías 48:17", text: "..." }
  ],
  "Isaías 48:18": [
    { reference: "Isaías 48:18", text: "..." }
  ],
  "Mateo 6:33": [
    { reference: "Mateo 6:33", text: "Por lo tanto, sigan buscando primero el Reino..." }
  ],
};

export const study20260629: ArticleData = {
  metadata: {
    studyId: "2026-06-29", // fecha inicio de semana (YYYY-MM-DD)
    week: "29 Jun-5 Jul",
    month: "Junio",
    year: 2026,
    // articleNumber?: number — opcional (legacy revistas antiguas)
  },
  song: "Canción 131: Título",
  title: "...",
  titleLSM: "", // opcional; /api/lsm puede sobrescribir con clave "title"
  biblicalText: "...",
  theme: "...",
  headerInfographic: "", // opcional; imagen superior del StudyHeader
  overview: {
    previousArticle: {
      number: 42,
      topic: "Tema anterior",
      keywords: ["palabra clave"],
    },
    whatWellSee: [
      { section: "Lo que veremos", keywords: ["idea clave"] },
    ],
  }, // opcional
  questions: [
    {
      number: "1",
      textEs: "Pregunta en español...",
      textLSM: "",
      paragraphs: [1],
      keyPoint: "Idea principal que no debe faltar.",
      guidingQuestion: "Pregunta de apoyo si no mencionan la idea.",
      commentSuggestion: "Yo podría comentar: \"...\"",
      answers: [
        {
          text: "Respuesta principal con **concepto clave**.",
          followUp: "¿Qué detalle apoya esta idea?",
        },
      ],
      biblicalCards: [
        {
          reference: "Salmo 62:8",
          purpose: "Propósito enriquecido según la skill como-comentarlo: explica por qué este texto está en el párrafo y cómo ayuda a entenderlo.",
          text: "Confíen en él en todo momento...",
        },
      ],
    },
  ],
  paragraphs: [
    {
      number: 13,
      content: "Texto del párrafo sin negritas...",
      summary: "Resumen breve con **conceptos clave**.",
      sidebar: {
        title: "¿Qué lugar ocupa en nuestra vida?",
        intro: "Hay muchas amistades importantes... (Filip. 1:10).",
        items: [
          "***Jehová.*** Nuestra amistad con Jehová ocupa el primer lugar (Mat. 6:33; Mar. 12:30).",
          "Nuestro esposo o esposa. Los dos somos \"una sola carne\" (Gén. 2:24).",
        ],
      },
    },
  ],
  reviewQuestions: [
    {
      question: "Pregunta de repaso...",
      commentSuggestion: "Yo podría comentar: \"...\"",
      answers: [
        {
          text: "Respuesta de repaso con **concepto clave**.",
          followUp: "¿Cómo lo explicaríamos en pocas palabras?",
        },
      ],
    },
  ],
  finalSong: "Canción 131: Título"
};
```

## Registro

1. `data/articles/index.ts` — import, entrada en `studiesMap` y `biblicalTextsMap` keyed por `studyId`, re-export
2. `data/articles-config.ts` — `activeStudyIds`, `defaultStudyId`, `defaultMonth`

## Refs bíblicas del recuadro (clicables)

Toda referencia entre paréntesis en `sidebar.intro` o `sidebar.items` debe tener entrada TNM 2019 en el mismo archivo de estudio:

| En recuadro | Clave en `biblicalTexts` | Ejemplo |
|-------------|--------------------------|---------|
| `(Filip. 1:10)` | `"Filipenses 1:10"` | Texto TNM completo del versículo |
| `(Mat. 6:33; Mar. 12:30)` | `"Mateo 6:33"`, `"Marcos 12:30"` | Una entrada por referencia |
| `(lea Proverbios 18:22; Is. 48:17, 18)` | `"Proverbios 18:22"`, `"Isaías 48:17"`, `"Isaías 48:18"` | Una entrada por versículo |

Resolución en runtime: [`lib/resolveScriptureRef.ts`](../../../lib/resolveScriptureRef.ts) + `getBiblicalTextsForStudy(studyId)` + `biblicalCards` de la pregunta → abre `BibleVerseModal`.

Después de tocar textos bíblicos, correr:

```bash
npm run study:audit:bible-modals
```

Este comando detecta refs faltantes, texto vacío y duplicados como el caso de dos versículos distintos mostrando el mismo texto.

## Responsabilidades de contenido

- `answers`, principales, secundarias y `followUp`: ver `../../respuestas-conductor/SKILL.md`.
- `question.commentSuggestion`, `reviewQuestions.commentSuggestion` y `biblicalCards.purpose`: ver `../../como-comentarlo/SKILL.md`. Hoy `question.commentSuggestion` se ve en `SummaryView` y copiado; la tarjeta principal muestra `biblicalCards.purpose`; `reviewQuestions.commentSuggestion` no tiene salida fiable por sí solo salvo que haya `biblicalCards`.
- `paragraph.sidebar` y refs de recuadros: ver `../../box-supplement/SKILL.md`.
- No usar `biblicalCards.commentSuggestion`.
