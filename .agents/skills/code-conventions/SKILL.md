---
name: code-conventions
description: Convenciones de código del proyecto atalaya-app. Referencia sobre patrones, estructura, tipos, APIs y estilo. Úsalo para entender cómo está organizado el proyecto o qué patrones seguir.
user-invocable: false
---

# Convenciones del Proyecto Atalaya-App

## Stack

- Next.js 16 (App Router)
- React 19 — mayoría Client Components (`'use client'`)
- TypeScript 5 strict
- Tailwind CSS 4 + tokens en `app/globals.css`
- Vercel KV (`lib/kv-store.ts`) con fallback en memoria
- PWA (`next-pwa` en `next.config.ts`; deshabilitada en dev)
- Dev server: **`npm run dev`** → `http://localhost:9000`

## Estructura de datos

| Ruta | Propósito |
|------|-----------|
| `data/articles/study-YYYY-MM-DD.ts` | Un estudio por archivo (`metadata.studyId`) |
| `data/articles/index.ts` | `studiesMap`, `biblicalTextsMap`, `getBiblicalTextsForStudy()` |
| `data/articles-config.ts` | `activeStudyIds`, `defaultStudyId`, `defaultMonth` |
| `data/design-config.ts` | `isExecutiveDesign()` (umbral artículo 43+; sin `articleNumber` → ejecutivo) |
| `types/atalaya.ts` | Interfaces core |
| `lib/commentGuidance.ts` | Comentarios "Cómo comentarlo" |
| `lib/generatePlaylist.ts` | Playlist del estudio |
| `lib/sectionUtils.ts` | Subtítulos `section` solo en 1ª pregunta del bloque |
| `lib/sidebarPlacement.ts` | Dónde renderizar `paragraph.sidebar` (tarjeta vs flujo de párrafo) |
| `lib/formatSidebarRichText.tsx` | Marcado `**` / `***` y refs bíblicas azules en recuadros |
| `lib/resolveScriptureRef.ts` | Resuelve refs parentéticas TNM (sidebar → `BibleVerseModal`) |
| `components/ParagraphSidebarBox.tsx` | UI del recuadro `boxSupplement` |

## Componentes principales

| Componente | Rol |
|------------|-----|
| `QuestionCard.tsx` | Tarjeta de pregunta (~1900 líneas, diseño unificado con tokens) |
| `ReviewQuestionCard.tsx` | Preguntas de repaso |
| `CommentGuide.tsx` | "Cómo comentarlo" + flip cards bíblicas |
| `AnswerItemsList.tsx` | Respuestas para el conductor |
| `VideoLSM.tsx` | Reproductor LSM |
| `StudyHeader.tsx` | Header (sin `'use client'` explícito) |
| `SummaryView.tsx` | Vista imprimible |
| `ThemeProvider.tsx` / `ThemeToggle.tsx` | Dark mode |
| `Timer.tsx`, `PlaylistModal.tsx` | Utilidades de estudio |
| `ParagraphSidebarBox.tsx` | Recuadros laterales (`boxSupplement`) |

## Diseño ejecutivo (artículos 43+)

- Umbral en `data/design-config.ts` (`executiveDesignStartsAt: 43`)
- `isExecutiveDesign()` en `app/page.tsx` condiciona previews de navegación
- Componentes principales ya usan tokens CSS unificados (no hay dos bloques separados en QuestionCard)

## Patrones de código

- Estado con hooks (`useState`, `useEffect`)
- API: `fetch` + JSON
- Estilos: Tailwind + tokens (`bg-surface`, `text-text-primary`, etc.)
- Textos bíblicos: export `biblicalTextsYYYYMMDD` por estudio en el mismo archivo; `getBiblicalTextsForStudy(studyId)` en runtime. Refs del recuadro usan claves TNM (`"Filipenses 1:10"`), no solo `LEE ...`

## Formato de texto en datos

- `**negritas**` en `answer`, `summary`, `answerContext`, `reviewQuestions.answer`
- Ortografía con acentos: Jehová, Satanás, Moisés, Josué, Edén
- `content` de párrafos **sin** negritas
- `paragraph.sidebar` (`ParagraphSidebar`): `title`, `intro?`, `items?` — recuadros de jw.org; `**` / `***` en intro/items; imagen en `question.image`, no en párrafo

### Recuadros (`boxSupplement`) en UI

| Archivo | Responsabilidad |
|---------|-----------------|
| `lib/sidebarPlacement.ts` | `shouldShowSidebarOnQuestionCard` (imagen → recuadro en tarjeta) vs `shouldShowSidebarInParagraphFlow` |
| `lib/formatSidebarRichText.tsx` | Prefijos bold+italic, refs `(Filip. 1:10)` en azul clicables |
| `lib/resolveScriptureRef.ts` | Lookup TNM desde `biblicalTexts` del estudio + `biblicalCards`; usado por `QuestionCard` |
| `components/ParagraphSidebarBox.tsx` | Caja visual amber/cyan; usa `formatSidebarRichText` |
| Importador `parse_box_supplement` | `rich_text_content()` → `***texto***` desde HTML jw.org |

### Modales de estudio

| Modal | Comportamiento |
|-------|----------------|
| Modal de párrafos (`QuestionCard`) | Clases `paragraphs-modal-backdrop` / `paragraphs-modal-panel` (~0.28s); cierre con clic en backdrop |
| `BibleVerseModal` (inline en `QuestionCard`) | `font-sans text-lg md:text-xl`; overlay con `onClick={onClose}`; refs del recuadro abren aquí |

## API Endpoints (GET / POST / PUT)

| Endpoint | Uso |
|----------|-----|
| `/api/favorites` | Favoritos por artículo |
| `/api/lsm` | Textos LSM editables |
| `/api/hidden-cards` | Visibilidad de tarjetas |
| `/api/used-items` | Items marcados como usados |

## Scripts npm útiles

```bash
npm run dev          # puerto 9000
npm run build
npm run lint         # eslint
npm run article:list
npm run article:remove
npm run cleanup-kv
./scripts/sync-skills.sh   # .agents/skills → .claude/skills
```

## Skills del proyecto

- Canónica: `.agents/skills/`
- Espejo Cursor: `.claude/skills/` (sincronizar con `sync-skills.sh`)

## Breakpoints responsive

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
