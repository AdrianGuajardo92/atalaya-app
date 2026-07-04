---
name: article-editor
description: Especialista en agregar, editar y mantener estudios de La Atalaya. Úsalo cuando el usuario quiera agregar un estudio, editar preguntas, respuestas para el conductor (answers), tarjetas bíblicas, imágenes, infografías, recuadros laterales (boxSupplement), traducciones LSM, videos LSM, resúmenes, comentarios de "Cómo comentarlo" o aplicar negritas.
---

# Editor de Estudios de La Atalaya

## Rol de esta skill

`article-editor` es el **orquestador** para crear, editar y mantener estudios. Debe decidir qué partes del estudio hay que tocar, leer las skills dueñas correspondientes y coordinar el cierre, pero no duplicar sus reglas internas.

### Skills dueñas obligatorias

| Área | Skill dueña |
|------|-------------|
| `answers`, `AnswerItem`, principales, secundarias y `followUp` | `.agents/skills/respuestas-conductor/SKILL.md` |
| `question.commentSuggestion`, `reviewQuestions.commentSuggestion` y `biblicalCards.purpose` | `.agents/skills/como-comentarlo/SKILL.md` |
| `paragraph.sidebar`, refs clicables de recuadros y colocación de `boxSupplement` | `.agents/skills/box-supplement/SKILL.md` |
| Importación completa de revistas desde jw.org | `.agents/skills/atalaya-revista-importer/SKILL.md` |

Cuando una tarea toque una de esas áreas, lee y aplica la skill dueña antes de editar. Esta skill solo conserva reglas de estructura general, registro, cobertura y cierre.

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

### Paso 2: Campos de cada pregunta

El tipo permite algunos campos opcionales para compatibilidad, pero en estudios nuevos la convención editorial del proyecto exige completar los campos de conducción aunque el validador los reporte sólo como warning o no los revise aún.

| Campo | Descripción |
|-------|-------------|
| `number` | "1", "6, 7", etc. |
| `textEs` | Pregunta en español |
| `paragraphs` | Números de párrafos relacionados |
| `textLSM` | Convención editorial: glosa LSM o `""` si no hay |
| `keyPoint` | Convención editorial: idea principal que no debe faltar en el comentario |
| `guidingQuestion` | Convención editorial: pregunta de respaldo si no mencionan el keyPoint |
| `answers` | Convención editorial; ver skill dueña `respuestas-conductor` |
| `commentSuggestion` | Convención editorial; lo usa `SummaryView` y copiado, no es bloque propio en la tarjeta principal |
| `biblicalCards` | Convención editorial: textos bíblicos citados en los párrafos; `purpose` lo redacta `como-comentarlo` |

### Paso 3: Campos de cada párrafo

| Campo | Obligatorio | Descripción |
|-------|:-----------:|-------------|
| `number` | * | Número del párrafo |
| `content` | * | Texto completo (SIN negritas) |
| `summary` | * | Resumen con **negritas** (1 oración clara, 20–40 palabras) |
| `sidebar` | Si hay recuadro | `title`, `intro?`, `items?` — ver sección Recuadros |

### Campos opcionales que la UI sí renderiza

- `titleLSM`: glosa LSM del título; puede venir de datos o de `/api/lsm` con clave `title`.
- `headerInfographic`: infografía superior del estudio en `StudyHeader`.
- `overview`: vista previa del artículo anterior y lo que se verá.
- `question.image` / `imageCaption`: imagen visible en la tarjeta; si hay recuadro, el orden visual es imagen → recuadro.
- `question.videoLSM`, `question.questionVideoLSM` y `paragraph.videoLSM`: ver skills LSM.

### Paso 4: Registrar

**En `data/articles/index.ts`:** import, entrada en `studiesMap` y `biblicalTextsMap` keyed por `studyId`, re-export.

**En `data/articles-config.ts`:** agregar a `activeStudyIds`; actualizar `defaultMonth` y `defaultStudyId` si aplica.

### Paso 5: Contenido especializado

Antes de cerrar un estudio nuevo o editado, aplica las skills dueñas según el contenido tocado:

- Respuestas del conductor: `.agents/skills/respuestas-conductor/SKILL.md`.
- Comentarios naturales y propósitos de textos bíblicos: `.agents/skills/como-comentarlo/SKILL.md`.
- Recuadros laterales: `.agents/skills/box-supplement/SKILL.md`.

### Paso 6: Validar

```bash
npm run study:validate
npm run study:audit:bible-modals
npm run build
```

---

## Cómo comentarlo

Ver skill dueña: `.agents/skills/como-comentarlo/SKILL.md`.

Regla de propiedad: esta área incluye `question.commentSuggestion`, `reviewQuestions.commentSuggestion` y `biblicalCards.purpose`. No usar `biblicalCards.commentSuggestion`.

Estado UI actual: `commentSuggestion` se muestra en `SummaryView` y en el texto copiable. En la tarjeta principal, `CommentGuide` muestra tarjetas bíblicas (`biblicalCards.purpose`); no muestra un bloque propio para `question.commentSuggestion`. En repaso, `reviewQuestions.commentSuggestion` no tiene salida fiable si no hay `biblicalCards`.

---

## Formato de negritas (OBLIGATORIO)

Aplicar `**negritas**` en `summary` y, mediante `respuestas-conductor`, en `answers[].text` y `reviewQuestions.answers[].text`.

Resaltar: nombres propios, conceptos clave, citas textuales, cifras, acciones importantes.

NO: frases enteras de más de 5 palabras, todo el texto, artículos/preposiciones sueltas.

> Regla de oro: "Si el conductor solo leyera las palabras en negrita, ¿captaría la idea principal?"

---

## Reglas para resúmenes (summary)

- 1 oración clara (2 solo si hay dos ideas fuertes)
- 20–40 palabras, con **negritas** en conceptos clave
- No copiar las primeras frases del párrafo

## Reglas para respuestas del conductor

Ver skill `respuestas-conductor`: usar `answers: AnswerItem[]` con principales, secundarias (`secondary: true`) y `followUp`. **Prohibido** `flashcards`.

## Reglas para biblicalCards

- **TODOS** los textos citados en los párrafos de la pregunta
- `reference`, `purpose`, `text` (TNM 2019 real, nunca resúmenes)
- `purpose` pertenece a la skill `como-comentarlo`: debe explicar por qué el texto está en el párrafo y cómo ayuda a entenderlo.
- No usar `commentSuggestion` dentro de `biblicalCards`.
- `reasoningQuestion` (opcional)

## Reglas para textos bíblicos (readText)

- Clave en `biblicalTextsYYYYMMDD` debe coincidir **exactamente** con `readText`
- Un objeto por versículo; texto TNM 2019
- Cada referencia bíblica clicable en paréntesis de `paragraph.content`, `sidebar.intro` o `sidebar.items` debe tener entrada individual en `biblicalTextsYYYYMMDD`.
- Para referencias compuestas (`lea Proverbios 18:22; Is. 48:17, 18`, `Col. 3:9, 10`, `compare con Génesis 2:16, 17; 3:6`), registrar cada versículo por separado, no solo una tarjeta combinada.
- Después de tocar textos bíblicos, correr `npm run study:audit:bible-modals`; este comando simula `BibleVerseModal` y falla si falta una referencia, si queda texto vacío o si dos versículos distintos muestran el mismo texto.

## Reglas para imágenes

- Van en **preguntas** (`question.image`), NO en párrafos
- Imgur directo: `https://i.imgur.com/XXXXX.png`

## Recuadros de estudio (`boxSupplement`)

Ver skill dueña: `.agents/skills/box-supplement/SKILL.md`.

Reglas de propiedad:

- Los recuadros se modelan en `paragraph.sidebar`.
- Las refs del recuadro requieren entradas TNM en `biblicalTextsYYYYMMDD`.
- La cobertura de textos citados en párrafos sigue en `biblicalCards`, pero los comentarios de esos textos van en `biblicalCards.purpose` según `como-comentarlo`.
- No usar `biblicalCards.commentSuggestion`.

## Reglas para LSM

- `textLSM`, `sectionLSM`, `questionLSM` en MAYÚSCULAS (glosas)
- **`section`**: solo en la **primera pregunta** de cada subtema; no copiar el mismo subtítulo a todas las preguntas del bloque (ver [`lib/sectionUtils.ts`](../../lib/sectionUtils.ts))
- Videos en `public/videos/study-YYYY-MM-DD/` (preferido por `studyId`; `article-XX/` solo legacy):
  - Párrafo: `study-YYYY-MM-DD-p01-lsm.mp4`
  - Pregunta agrupada: `study-YYYY-MM-DD-p01-p02-lsm.mp4` en `question.videoLSM`
  - Pregunta señada: `study-YYYY-MM-DD-q01-lsm.mp4` en `question.questionVideoLSM`
- Si una pregunta cubre 2+ párrafos, crear video unido en `question.videoLSM`; conservar clips individuales en párrafos

## Eliminar un estudio

1. Borrar `data/articles/study-YYYY-MM-DD.ts`
2. Quitar de `index.ts` (`studiesMap`, `biblicalTextsMap`) y `articles-config.ts` (`activeStudyIds`)
3. Limpiar entradas en `lib/commentGuidance.ts` si existen
4. **OBLIGATORIO:** eliminar manualmente videos LSM asociados en `public/videos/`; `npm run study:remove` sólo avisa si encuentra la carpeta.

## Prohibiciones del proyecto

- NO crear `articleSummary`, `keyPoints` ni `centralIdea`
- NO hacer commit ni push salvo petición explícita del usuario

## Ortografía

SIEMPRE acentos correctos: Jehová, Satanás, Moisés, Josué, Edén, ¿...?, ¡...!

## Checklist final

- [ ] Cada pregunta tiene `keyPoint`, `guidingQuestion`, `textLSM`
- [ ] Cada párrafo tiene `summary` con negritas
- [ ] `answers` cumple `respuestas-conductor`
- [ ] `commentSuggestion` y `biblicalCards.purpose` cumplen `como-comentarlo`
- [ ] `biblicalCards` cubre TODOS los textos citados
- [ ] `readText` tiene entrada en `biblicalTextsYYYYMMDD`
- [ ] Cada ref clicable de párrafos y recuadros tiene entrada individual en `biblicalTextsYYYYMMDD`
- [ ] Cada ref del recuadro tiene entrada TNM en `biblicalTextsYYYYMMDD` y abre `BibleVerseModal` al clic
- [ ] Imágenes en preguntas; Imgur formato directo
- [ ] Recuadros (`sidebar`) en el párrafo correcto; imagen en `question.image` (no en párrafo)
- [ ] Con imagen de pregunta, recuadro se ve tras la imagen en tarjeta (orden PDF); no duplicado en modal
- [ ] `intro`/`items` del recuadro usan `***prefijo***` cuando aplica; refs bíblicas con estilo azul
- [ ] `section` solo en la primera pregunta de cada bloque de subtema
- [ ] Registrado en `index.ts` (`studiesMap`) y `articles-config.ts` (`activeStudyIds`)
- [ ] `npm run study:validate` no reporta errores estructurales
- [ ] `npm run study:audit:bible-modals` no reporta refs faltantes, texto vacío ni duplicados en modales
- [ ] `npm run build` compila sin errores
