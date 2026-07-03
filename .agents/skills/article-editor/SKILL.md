---
name: article-editor
description: Especialista en agregar, editar y mantener estudios de La Atalaya. Úsalo cuando el usuario quiera agregar un estudio, editar preguntas, respuestas para el conductor (answers), tarjetas bíblicas, imágenes, infografías, recuadros laterales (boxSupplement), traducciones LSM, videos LSM, resúmenes, comentarios de "Cómo comentarlo" o aplicar negritas.
---

# Editor de Estudios de La Atalaya

## Ubicación de datos

- Cada estudio: `data/articles/study-YYYY-MM-DD.ts` (fecha inicio de semana)
- Registro central: `data/articles/index.ts` (`studiesMap`, `biblicalTextsMap`, `getBiblicalTextsForStudy`)
- Estudios activos: `data/articles-config.ts` (`activeStudyIds`, `defaultStudyId`)
- Tipos: `types/atalaya.ts`
- Plantilla de referencia: [references/article-template.md](references/article-template.md)

**Legacy:** `article-XX.ts` y `articlesMap` están deprecados; no crear archivos nuevos con ese formato.

## Flujo para crear un estudio NUEVO

### Paso 1: Crear el archivo

Dos exports obligatorios: `biblicalTextsYYYYMMDD` y `studyYYYYMMDD` (ver plantilla en `references/article-template.md`).

`metadata.studyId` es obligatorio (ej. `"2026-06-29"`). `articleNumber` es opcional (legacy); si falta, el diseño ejecutivo aplica por defecto (`isExecutiveDesign(undefined) === true`).

### Paso 2: Campos OBLIGATORIOS de cada pregunta

| Campo | Descripción |
|-------|-------------|
| `number` | "1", "6, 7", etc. |
| `textEs` | Pregunta en español |
| `textLSM` | Traducción LSM (`""` si no hay) |
| `paragraphs` | Números de párrafos relacionados |
| `keyPoint` | Idea principal que no debe faltar en el comentario |
| `guidingQuestion` | Pregunta de respaldo si no mencionan el keyPoint |
| `answers` | Array de `AnswerItem` (principales + secundarias + followUp) — ver skill `respuestas-conductor` |
| `biblicalCards` | **TODOS** los textos bíblicos citados en los párrafos |

### Paso 3: Campos de cada párrafo

| Campo | Obligatorio | Descripción |
|-------|:-----------:|-------------|
| `number` | * | Número del párrafo |
| `content` | * | Texto completo (SIN negritas) |
| `summary` | * | Resumen con **negritas** (1 oración clara, 20–40 palabras) |
| `sidebar` | Si hay recuadro | `title`, `intro?`, `items?` — ver sección Recuadros |

### Paso 4: Registrar

**En `data/articles/index.ts`:** import, entrada en `studiesMap` y `biblicalTextsMap` keyed por `studyId`, re-export.

**En `data/articles-config.ts`:** agregar a `activeStudyIds`; actualizar `defaultMonth` y `defaultStudyId` si aplica.

### Paso 5: Comentarios "Cómo comentarlo"

Leer y aplicar `.agents/skills/como-comentarlo/SKILL.md`. Agregar `commentSuggestion` en cada pregunta y `reviewQuestions` cuando corresponda.

### Paso 6: Validar

```bash
npm run build
```

---

## Cómo comentarlo (OBLIGATORIO en estudios nuevos)

Reglas rápidas:
- No copies el campo `answer`.
- No copies frases completas del párrafo.
- Escribe como una persona que va a comentar en la reunión.
- Usa lenguaje sencillo, claro y fácil de entender.
- Si hay `biblicalCards`, agrega comentario de cómo usar cada texto bíblico.
- Prefiere `commentSuggestion` en los datos del estudio (ver `como-comentarlo` para la cadena de fallbacks).
- Verifica que cada pregunta y texto bíblico tengan comentario antes de cerrar.

---

## Formato de negritas (OBLIGATORIO)

Aplicar `**negritas**` en `answer`, `summary`, `answerContext` y `reviewQuestions.answer`.

Resaltar: nombres propios, conceptos clave, citas textuales, cifras, acciones importantes.

NO: frases enteras de más de 5 palabras, todo el texto, artículos/preposiciones sueltas.

> Regla de oro: "Si el conductor solo leyera las palabras en negrita, ¿captaría la idea principal?"

---

## Reglas para respuestas (answer)

- Arrays de oraciones clave, NO párrafos largos
- 3–5 oraciones, 1–2 líneas cada una
- Incluir referencias bíblicas si son parte de la respuesta

## Reglas para resúmenes (summary)

- 1 oración clara (2 solo si hay dos ideas fuertes)
- 20–40 palabras, con **negritas** en conceptos clave
- No copiar las primeras frases del párrafo

## Reglas para respuestas del conductor

Ver skill `respuestas-conductor`: usar `answers: AnswerItem[]` con principales, secundarias (`secondary: true`) y `followUp`. **Prohibido** `flashcards`.

## Reglas para biblicalCards

- **TODOS** los textos citados en los párrafos de la pregunta
- `reference`, `purpose`, `text` (TNM 2019 real, nunca resúmenes)
- `reasoningQuestion` (opcional)

## Reglas para textos bíblicos (readText)

- Clave en `biblicalTextsYYYYMMDD` debe coincidir **exactamente** con `readText`
- Un objeto por versículo; texto TNM 2019

## Reglas para imágenes

- Van en **preguntas** (`question.image`), NO en párrafos
- Imgur directo: `https://i.imgur.com/XXXXX.png`

## Recuadros de estudio (`boxSupplement`) — OBLIGATORIO

Los recuadros laterales de jw.org se modelan en `paragraph.sidebar` (`ParagraphSidebar` en `types/atalaya.ts`).

### Estructura de datos

```typescript
sidebar: {
  title: string;       // título del recuadro (h2 en jw.org)
  intro?: string;      // párrafo introductorio
  items?: string[];    // lista numerada; prefijos con ***Jehová.*** si van en negrita+cursiva
}
```

- **No** poner el recuadro en `paragraph.note` ni en `question.image`.
- **No** poner la imagen ilustrativa en el párrafo; va en `question.image`.
- Vincular al **último párrafo** de la pregunta que dice «Vea el recuadro…».

### Colocación en UI (orden PDF)

La UI **no** lee un campo de posición; usa [`lib/sidebarPlacement.ts`](../../lib/sidebarPlacement.ts):

| Condición | Render |
|-----------|--------|
| `question.image` + `paragraph.sidebar` | Tarjeta: recuadro **justo después** de la imagen |
| `sidebar` sin `question.image` | Modal / flujo del párrafo, tras el contenido |
| Modal con `question.image` | **Sin** bloque suelto del recuadro tras Resumen |

### Estilo y formateo

- Componente: [`components/ParagraphSidebarBox.tsx`](../../components/ParagraphSidebarBox.tsx)
- Texto enriquecido: [`lib/formatSidebarRichText.tsx`](../../lib/formatSidebarRichText.tsx)
- `**negrita**`, `***negrita+cursiva***` en `intro`/`items`; refs `(Filip. 1:10)` → azul `#006FB3` / `dark:text-sky-400`
- **Prohibido** usar `formatContent` / `renderBoldText` de `QuestionCard` para recuadros

Al importar desde jw.org, usar el importador (`parse_box_supplement` + `rich_text_content`) para conservar `***prefijos***`.

### Refs bíblicas del recuadro (clicables)

Toda ref entre paréntesis en `sidebar.intro` / `sidebar.items` debe existir en `biblicalTextsYYYYMMDD` con clave TNM completa:

```typescript
"Filipenses 1:10": [{ reference: "Filipenses 1:10", text: "..." }],
"Mateo 6:33": [{ reference: "Mateo 6:33", text: "..." }],
```

Referencias múltiples `(Mat. 6:33; Mar. 12:30)` requieren **una entrada por referencia**.

Resolución en runtime: [`lib/resolveScriptureRef.ts`](../../lib/resolveScriptureRef.ts) + `getBiblicalTextsForStudy(studyId)` + `biblicalCards` → abre `BibleVerseModal` al hacer clic.

## Reglas para LSM

- `textLSM`, `sectionLSM`, `questionLSM` en MAYÚSCULAS (glosas)
- **`section`**: solo en la **primera pregunta** de cada subtema; no copiar el mismo subtítulo a todas las preguntas del bloque (ver [`lib/sectionUtils.ts`](../../lib/sectionUtils.ts))
- Videos en `public/videos/article-XX/` (convención actual por número de revista):
  - Párrafo: `article-XX-p01-lsm.mp4`
  - Pregunta agrupada: `article-XX-p01-p02-lsm.mp4` en `question.videoLSM`
  - Pregunta señada (art. 60+): `article-XX-q01-lsm.mp4` en `question.questionVideoLSM`
- Si una pregunta cubre 2+ párrafos, crear video unido en `question.videoLSM`; conservar clips individuales en párrafos

## Eliminar un estudio

1. Borrar `data/articles/study-YYYY-MM-DD.ts`
2. Quitar de `index.ts` (`studiesMap`, `biblicalTextsMap`) y `articles-config.ts` (`activeStudyIds`)
3. Limpiar entradas en `lib/commentGuidance.ts` si existen
4. **OBLIGATORIO:** eliminar videos LSM asociados en `public/videos/`

## Prohibiciones del proyecto

- NO crear `articleSummary`, `keyPoints` ni `centralIdea`
- NO hacer commit ni push salvo petición explícita del usuario

## Ortografía

SIEMPRE acentos correctos: Jehová, Satanás, Moisés, Josué, Edén, ¿...?, ¡...!

## Checklist final

- [ ] Cada pregunta tiene `keyPoint`, `guidingQuestion`, `textLSM`
- [ ] Cada párrafo tiene `summary` con negritas
- [ ] `biblicalCards` cubre TODOS los textos citados
- [ ] `readText` tiene entrada en `biblicalTextsYYYYMMDD`
- [ ] Cada ref del recuadro tiene entrada TNM en `biblicalTextsYYYYMMDD` y abre `BibleVerseModal` al clic
- [ ] Comentarios "Cómo comentarlo" en preguntas y textos bíblicos
- [ ] Imágenes en preguntas; Imgur formato directo
- [ ] Recuadros (`sidebar`) en el párrafo correcto; imagen en `question.image` (no en párrafo)
- [ ] Con imagen de pregunta, recuadro se ve tras la imagen en tarjeta (orden PDF); no duplicado en modal
- [ ] `intro`/`items` del recuadro usan `***prefijo***` cuando aplica; refs bíblicas con estilo azul
- [ ] `section` solo en la primera pregunta de cada bloque de subtema
- [ ] Registrado en `index.ts` (`studiesMap`) y `articles-config.ts` (`activeStudyIds`)
- [ ] `npm run build` compila sin errores
