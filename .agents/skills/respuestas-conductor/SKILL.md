---
name: respuestas-conductor
description: Respuestas enriquecidas para conducir el estudio — AnswerItem con principales, secundarias y followUp. Úsalo al redactar o migrar answers en estudios de La Atalaya. Prohibido flashcards.
---

# Respuestas para el conductor

## Propósito

Las respuestas ayudan al **conductor** a guiar la congregación: ideas principales que contestan la pregunta impresa, detalles secundarios del párrafo y una pregunta de seguimiento si nadie menciona cada idea.

**No usar tarjetas didácticas (`flashcards`).** Ese modelo fue eliminado.

## Modelo de datos

```typescript
export interface AnswerItem {
  text: string;        // 1–2 líneas con **negritas** en el concepto clave
  followUp?: string;   // Pregunta si nadie menciona esta idea (~12 palabras máx.)
  secondary?: boolean; // true = detalle/ejemplo del párrafo
}

interface Question {
  answers?: AnswerItem[];     // OBLIGATORIO en estudios nuevos
  answer?: string | string[]; // legacy — solo lectura (fallback)
  answerContext?: string[];   // legacy — solo lectura (fallback)
}
```

`ReviewQuestion` también usa `answers?: AnswerItem[]`.

## Normalizador

`lib/answerItems.ts`:

- `getAnswerItems(q)` — preguntas normales
- `getReviewAnswerItems(rq)` — repaso
- `hasAnswerContent(q)` — ¿hay respuestas?
- Fallback: `answer[]` → principales, `answerContext[]` → secundarias

Tests: `lib/answerItems.test.ts`

## UI

`components/AnswerItemsList.tsx` — usado en `QuestionCard`, `ReviewQuestionCard`.

- **Lista unificada:** sin caja “Del párrafo”; una sola columna
- **Numeración continua:** `[1…n]` principales, luego `[n+1…]` secundarias
- **Pill “Detalle”** junto al número en secundarias; tipografía más pequeña
- **Colapsable:** si hay 2+ secundarias, bloque “Ver más detalles del párrafo” (cerrado por defecto)
- **followUp:** solo en principales, etiqueta ámbar “Si no lo mencionan”
- **Marcar usado:** click en fila (✅/🔖), IDs KV por índice global

`SummaryView` imprime la misma numeración continua con prefijo “Detalle” en secundarias (sin followUp).

## Reglas de redacción

### Cantidad por pregunta

| Tipo | Cantidad |
|------|----------|
| Principales | 2–3 |
| Secundarias | 0–2 (solo si aportan algo único) |

### Principales

- Contestan **directamente** la pregunta impresa
- Orden según el párrafo
- 1–2 líneas, lenguaje simple
- **Negritas** solo en el concepto clave

### Secundarias (`secondary: true`)

- Detalles, ejemplos y experiencias del párrafo
- Datos que enriquecen pero no son la respuesta central
- **No duplicar** lo que ya cubre un followUp de una principal
- **No** incluir frases meta del artículo (“En este artículo veremos…”)
- Ejemplos: Sarah (p.8), Leah/Roxanne/Damien/Katie (p.12), Myriam (p.13)

### followUp

- Máximo ~12 palabras
- Pregunta natural que el conductor puede hacer si la congregación no mencionó la idea
- Anclada al párrafo o al texto bíblico citado
- **No** usar estilo "Yo podría comentar" (eso va en `commentSuggestion`)

### Ejemplo

```typescript
answers: [
  {
    text: "Los buenos amigos son un **regalo de Jehová** (Sant. 1:17).",
    followUp: "¿Qué dice Santiago sobre todo don bueno?",
  },
  {
    text: "Son **leales** y confiables; nos consuelan y aconsejan con franqueza.",
    followUp: "¿Qué hacen cuando estamos tristes?",
  },
  {
    text: "Sin duda, los amigos así “**alegran el corazón**” (Prov. 27:9).",
    secondary: true,
  },
],
```

## Flujo para estudios nuevos

1. Leer párrafos de la pregunta
2. Redactar 2–3 principales con followUp
3. Extraer 1–3 secundarias (experiencias, detalles)
4. Usar solo `answers` — **no** `answer`, `answerContext` ni `flashcards`
5. Mantener `keyPoint` y `guidingQuestion` como respaldo global

## Migración de estudios legacy

1. Convertir cada oración de `answer[]` → principal con followUp
2. Convertir `answerContext[]` → secundarias
3. Incorporar ideas útiles de `flashcards` como secundarias o principales
4. Eliminar `answer`, `answerContext` y `flashcards`

## Archivos relacionados

| Archivo | Rol |
|---------|-----|
| `types/atalaya.ts` | `AnswerItem`, `answers` |
| `lib/answerItems.ts` | Normalizador |
| `components/AnswerItemsList.tsx` | Render compartido |
| `components/QuestionCard.tsx` | Tarjeta principal |
| `components/ReviewQuestionCard.tsx` | Repaso |
| `components/SummaryView.tsx` | Vista imprimible |
| `lib/commentGuidance.ts` | Usa `getAnswerTexts()` si falta `answer` |

## Checklist

- [ ] `answers` con 2–3 principales + 0–2 secundarias únicas
- [ ] followUp en cada principal (no en secundarias)
- [ ] Negritas en conceptos clave
- [ ] Acentos y signos correctos en español
- [ ] Sin `flashcards`
- [ ] Experiencias del párrafo como secundarias cuando aplique
