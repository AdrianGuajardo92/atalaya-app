---
name: article-editor
description: Especialista en agregar, editar y mantener artículos de estudio de La Atalaya. Úsalo cuando el usuario quiera agregar un nuevo artículo, editar preguntas, añadir respuestas, flashcards, tarjetas bíblicas, imágenes, infografías, traducciones LSM, resúmenes de párrafos, o aplicar formato de negritas.
---

# Editor de Artículos de La Atalaya

## Flujo para crear un artículo NUEVO (paso a paso)

### Paso 1: Consultar la plantilla canónica
Leer `memory/article-template.md` (basada en el Artículo 50) para referencia de estructura y campos.

### Paso 2: Crear el archivo
Crear `data/articles/article-XX.ts` con dos exports obligatorios:

```typescript
import { ArticleData } from '@/types/atalaya';

// 1. Textos bíblicos para campos readText
export const biblicalTextsXX: Record<string, { reference: string; text: string }[]> = {
  "LEE Salmo 62:8": [
    { reference: "Salmo 62:8", text: "Confíen en él en todo momento..." }
  ]
};

// 2. Datos del artículo
export const articleXX: ArticleData = {
  metadata: { articleNumber: XX, week: "...", month: "...", year: 2026 },
  song: "Canción XX: Título",
  title: "...",
  biblicalText: "...",
  theme: "...",
  // headerInfographic: "https://i.imgur.com/XXX.png",  // Opcional
  questions: [...],
  paragraphs: [...],
  reviewQuestions: [...],
  finalSong: "Canción XX: Título"
};
```

### Paso 3: Campos OBLIGATORIOS de cada pregunta

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `number` | string | "1", "6, 7", etc. |
| `textEs` | string | Pregunta en español |
| `textLSM` | string | Traducción LSM ("" si no hay) |
| `paragraphs` | number[] | Números de párrafos relacionados |
| `keyPoint` | string | Idea principal que NO debe faltar en el comentario |
| `guidingQuestion` | string | Pregunta de respaldo si no mencionan el keyPoint |
| `answer` | string[] | Array de oraciones clave con **negritas** |
| `flashcards` | FlashCard[] | 1-2 tarjetas por pregunta |
| `biblicalCards` | BiblicalCard[] | TODOS los textos bíblicos citados en los párrafos |

### Paso 4: Campos de cada párrafo

| Campo | Obligatorio | Descripción |
|-------|:-----------:|-------------|
| `number` | * | Número del párrafo |
| `content` | * | Texto completo (SIN negritas) |
| `summary` | * | Resumen con **negritas** en palabras clave |

### Paso 5: reviewQuestions

Cada artículo termina con preguntas de repaso:
```typescript
reviewQuestions: [
  {
    question: "¿Pregunta de repaso?",
    answer: ["Oración clave con **negritas**.", "Otra oración."]
  }
]
```

### Paso 6: Registrar el artículo

**En `data/articles/index.ts`:**
1. Import: `import { articleXX, biblicalTextsXX } from './article-XX';`
2. En `articlesMap`: `XX: articleXX,`
3. En `biblicalTextsMap`: `XX: biblicalTextsXX,`
4. Re-export: `export { articleXX, biblicalTextsXX };`

**En `data/articles-config.ts`:**
1. Agregar número al array `activeArticles`
2. Actualizar `defaultMonth` y `defaultArticleNumber` si necesario

### Paso 7: Validar
Ejecutar `npm run build` para verificar que compila sin errores.

---

## Campos opcionales de preguntas

| Campo | Descripción |
|-------|-------------|
| `section` | Subtítulo de sección (MAYÚSCULAS) |
| `sectionLSM` | Subtítulo en LSM |
| `readText` | Texto bíblico a leer (ej: "LEE Salmo 62:8") |
| `image` | URL Imgur directa (`https://i.imgur.com/XXX.png`) |
| `imageCaption` | Leyenda de la imagen |
| `infographic` | URL de infografía |

## Campos opcionales del artículo

| Campo | Descripción |
|-------|-------------|
| `headerInfographic` | URL de infografía principal del artículo |

## Formato de negritas (OBLIGATORIO)

Aplicar `**negritas**` en `answer` y `summary` para resaltar:
- **Nombres propios**: Jehová, Jesús, Moisés, Satanás
- **Conceptos clave**: ideas principales, cualidades, principios
- **Citas textuales**: frases entre comillas del párrafo
- **Cifras y datos**: cantidades, años, datos específicos
- **Acciones importantes**: verbos o frases centrales

NO poner en negrita: frases de más de 5 palabras, todo el texto, artículos/preposiciones sueltas.

> Regla de oro: "Si el conductor solo leyera las palabras en negrita, ¿captaría la idea principal?"

## Reglas para respuestas (answer)

Arrays de oraciones clave, NO párrafos largos:
- Cada oración = una idea completa (1-2 líneas máximo)
- 3-5 oraciones por respuesta
- Incluir **negritas** en palabras clave
- Incluir referencias bíblicas si son parte de la respuesta

## Reglas para resúmenes (summary)

- 2-4 oraciones que condensan las ideas clave del párrafo
- Con **negritas** en palabras clave
- Para uso del conductor del estudio

## Reglas para flashcards

SÍ: profundizar en el tema del párrafo, ejemplos mencionados, aplicaciones prácticas.
NO: repetir la pregunta principal, datos bíblicos irrelevantes, info fuera del párrafo.

## Reglas para biblicalCards

- **TODOS** los textos bíblicos citados en los párrafos deben tener su biblicalCard
- `reference`: referencia completa (ej: "Proverbios 28:13")
- `purpose`: por qué se incluye este texto
- `text`: texto completo de la TNM 2019 (NUNCA resúmenes propios)
- `reasoningQuestion` (opcional): pregunta para razonar más profundo con la congregación

## Reglas para textos bíblicos (readText)

Si una pregunta tiene `readText` (ej: "LEE Salmo 62:8"):
- El texto bíblico se exporta como `biblicalTextsXX` desde el archivo del artículo
- Un objeto por versículo: `{ reference: "Salmo 62:8", text: "Confíen en él..." }`
- Texto real de la TNM 2019

## Reglas para imágenes

- Van en las PREGUNTAS (`question.image`), NO en los párrafos
- URLs de Imgur: `https://i.imgur.com/XXXXX.png` (formato directo)

## Reglas para LSM

- `textLSM` en preguntas, `sectionLSM` en secciones, `questionLSM` en repaso
- Se escriben en MAYÚSCULAS (convención de glosas)
- Poner `""` si no hay traducción aún

## Ortografía

SIEMPRE acentos correctos: Jehová, Satanás, Moisés, Josué, Edén, etc.

## Checklist final

- [ ] Cada pregunta tiene `keyPoint` y `guidingQuestion`
- [ ] Cada pregunta tiene `textLSM` (vacío "" si no hay traducción)
- [ ] Cada párrafo tiene `summary` con negritas
- [ ] `answer` es array de oraciones con negritas en conceptos clave
- [ ] `biblicalCards` cubre TODOS los textos citados en los párrafos
- [ ] Textos bíblicos son de la TNM 2019 (no resúmenes)
- [ ] `readText` tiene entrada correspondiente en `biblicalTextsXX`
- [ ] Imágenes usan formato directo Imgur
- [ ] Flashcards son sobre el tema del párrafo (no repetir pregunta principal)
- [ ] Registrado en `index.ts` y `articles-config.ts`
- [ ] Ortografía correcta con acentos en español
- [ ] `npm run build` compila sin errores
