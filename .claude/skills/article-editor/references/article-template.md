# Plantilla de estudio (referencia)

Basada en la estructura estándar de estudios nuevos (diseño ejecutivo por defecto).

## Exports obligatorios en `data/articles/study-YYYY-MM-DD.ts`

```typescript
import { ArticleData } from '@/types/atalaya';

// Claves "LEE ..." para readText de preguntas
// Claves TNM completas para refs del recuadro (sidebar) — ver sección abajo
export const biblicalTexts20260629: Record<string, { reference: string; text: string }[]> = {
  "LEE Salmo 62:8": [
    { reference: "Salmo 62:8", text: "Confíen en él en todo momento..." }
  ],
  // Refs clicables del recuadro (parentéticas en sidebar.intro / sidebar.items):
  "Filipenses 1:10": [
    { reference: "Filipenses 1:10", text: "que se aseguren de qué cosas son las más importantes..." }
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
  biblicalText: "...",
  theme: "...",
  questions: [...],
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
          "Nuestro esposo o esposa. Los dos somos \"una sola carne\" (Gén. 2:24)."
        ]
      }
    }
  ],
  reviewQuestions: [...],
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

Resolución en runtime: [`lib/resolveScriptureRef.ts`](../../../lib/resolveScriptureRef.ts) + `getBiblicalTextsForStudy(studyId)` + `biblicalCards` de la pregunta → abre `BibleVerseModal`.
