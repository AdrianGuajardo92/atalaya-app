---
name: article-editor
description: Especialista en agregar, editar y mantener artículos de estudio de La Atalaya. Úsalo cuando el usuario quiera agregar un nuevo artículo, editar preguntas, añadir respuestas, flashcards, tarjetas bíblicas, imágenes, infografías, traducciones LSM, resúmenes de párrafos, comentarios de "Cómo comentarlo" o aplicar formato de negritas.
---

# Editor de Artículos de La Atalaya

## Ubicación de datos

Cada artículo vive en su propio archivo: `data/articles/article-XX.ts` (ej: `article-48.ts`).
La configuración de artículos activos está en `data/articles-config.ts`.
Los tipos están en `types/atalaya.ts`.

## Cómo comentarlo (OBLIGATORIO en estudios nuevos)

Cuando agregues un artículo nuevo o modifiques preguntas, respuestas, párrafos o `biblicalCards`, también debes revisar y aplicar la skill local:

```text
.agents/skills/como-comentarlo/SKILL.md
```

Úsala para crear o mejorar comentarios naturales de "Yo podría comentar" y comentarios sencillos para textos bíblicos. Estos comentarios son parte del contenido de estudio, no un extra opcional.

Reglas rápidas:
- No copies el campo `answer`.
- No copies frases completas del párrafo.
- Escribe como una persona que va a comentar en la reunión.
- Usa lenguaje sencillo, claro y fácil de entender.
- Si hay `biblicalCards`, agrega o mejora también el comentario de cómo usar cada texto bíblico.
- Guarda los comentarios siguiendo el patrón actual del proyecto: `commentSuggestion` en los datos o el mapa central de `lib/commentGuidance.ts`, según corresponda.
- Antes de cerrar, verifica que cada pregunta y cada texto bíblico solicitado tengan comentario.

## Formato de negritas (OBLIGATORIO)

Aplicar `**negritas**` en estos campos para resaltar palabras clave:

### En `answer` (respuestas de preguntas y reviewQuestions)
```typescript
answer: [
  "Debemos evitar sacar **conclusiones precipitadas** sin conocer los hechos.",
  "**Jehová** dijo que los tres conocidos **no habían dicho la verdad**."
]
```

### En `summary` (resúmenes de párrafos)
```typescript
summary: "**Jehová** es humilde y está **dispuesto a ceder**. Castigó a **Miriam** con **lepra** pero cuando Moisés le rogó, **la curó**."
```

### Qué resaltar en negrita
- **Nombres propios**: Jehová, Jesús, Moisés, Satanás, personajes mencionados
- **Conceptos clave**: ideas principales, cualidades, principios
- **Citas textuales**: frases entre comillas del párrafo
- **Cifras y datos**: cantidades, años, datos específicos
- **Acciones importantes**: verbos o frases que transmiten la idea central

### Qué NO poner en negrita
- Artículos, preposiciones, conjunciones sueltas
- Frases enteras de más de 5 palabras
- Todo el texto (pierde el propósito de resaltar)

## Reglas para respuestas (answer)

Arrays de oraciones clave, NO párrafos largos:
- Cada oración = una idea completa (1-2 líneas máximo)
- 3-5 oraciones por respuesta
- Incluir **negritas** en palabras clave
- Incluir referencias bíblicas si son parte de la respuesta

## Reglas para resúmenes de párrafos (summary)

- 2-4 oraciones que condensan las ideas clave del párrafo
- Con **negritas** en palabras clave
- Para uso del conductor del estudio

## Reglas para tarjetas didácticas (flashcards)

SÍ: profundizar en el tema del párrafo, ejemplos mencionados, aplicaciones prácticas.
NO: repetir la pregunta principal, datos bíblicos irrelevantes, info fuera del párrafo.

## Reglas para tarjetas bíblicas (biblicalCards)

- `reference`: referencia completa (ej: "Proverbios 28:13")
- `purpose`: por qué se incluye este texto
- `text`: texto completo de la TNM 2019

## Reglas para imágenes

- Van en las PREGUNTAS (`question.image`), NO en los párrafos
- URLs de Imgur: `https://i.imgur.com/XXXXX.png` (formato directo)

## Reglas para LSM

- `textLSM` en preguntas, `sectionLSM` en secciones, `questionLSM` en repaso
- Se escriben en MAYÚSCULAS (convención de glosas)

## Ortografía

SIEMPRE acentos correctos: Jehová, Satanás, Moisés, Josué, Edén, etc.
