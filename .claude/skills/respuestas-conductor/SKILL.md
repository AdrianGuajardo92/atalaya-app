---
name: respuestas-conductor
description: Respuestas enriquecidas para conducir el estudio — AnswerItem con respuestas principales y detalles secundarios visibles para formular preguntas de apoyo. Úsalo al redactar, enriquecer o migrar answers en estudios de La Atalaya. Prohibido flashcards.
---

# Respuestas para el conductor

## Propósito

Las respuestas ayudan al **conductor** a guiar la congregación: ideas principales que contestan la pregunta impresa y detalles secundarios visibles que salen del párrafo para formular preguntas de apoyo si alguien no menciona un punto.

**No usar tarjetas didácticas (`flashcards`).** Ese modelo fue eliminado.

## Propiedad de esta skill

Esta skill es la fuente canónica para:

- `answers`
- `AnswerItem`
- respuestas principales
- respuestas secundarias (`secondary: true`)
- `followUp`
- migración desde `answer` / `answerContext` legacy hacia `answers`

No redacta `commentSuggestion` ni `biblicalCards.purpose`; eso pertenece a `.agents/skills/como-comentarlo/SKILL.md`.

## Modelo de datos

```typescript
export interface AnswerItem {
  text: string;        // 1–2 líneas con **negritas** en el concepto clave
  followUp?: string;   // Respaldo/compatibilidad; no se renderiza en la UI principal
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
- **Sin colapsable:** las secundarias se muestran en la misma lista plana; no documentar ni esperar bloque “Detalles del párrafo” ocultable.
- **followUp:** se conserva en datos para respaldo del conductor, pero no se renderiza en la UI del estudio
- **Marcar usado:** click en fila (✅/⬜) solo en preguntas normales, cuando `QuestionCard` pasa `itemIdPrefix`, `usedItems` y `onToggleUsed`; `ReviewQuestionCard` y `SummaryView` no lo usan.

`SummaryView` imprime la misma numeración continua con prefijo “Detalle” en secundarias (sin followUp).

## Reglas de redacción

### Cantidad por pregunta

| Tipo | Cantidad |
|------|----------|
| Principales | 2–3 |
| Secundarias | 1–4 si aportan algo único |
| Agrupadas / recuadro | 4–8 secundarias si cada una aporta algo distinto |

### Principales

- Contestan **directamente** la pregunta impresa
- Orden según el párrafo
- 1–2 líneas, lenguaje simple
- **Negritas** solo en el concepto clave

### Secundarias (`secondary: true`)

- Detalles, ejemplos y experiencias del párrafo
- Textos bíblicos, advertencias, consecuencias, aplicaciones y frases clave
- Datos que enriquecen pero no son la respuesta central
- **No duplicar** una idea principal ya cubierta
- **No** incluir frases meta del artículo (“En este artículo veremos…”)
- Como el `followUp` no se muestra en la UI, estas secundarias son el material visible para formular preguntas si nadie menciona un punto
- Prohibido meter “relleno”: si no ayuda a conducir, no va
- Ejemplos: Sarah (p.8), Leah/Roxanne/Damien/Katie (p.12), Myriam (p.13)

### Límite de la fuente (obligatorio)

- Cada respuesta principal, secundaria y `followUp` debe poder justificarse con una frase o idea explícita de los párrafos asignados en `question.paragraphs`, o con un texto bíblico citado dentro de esos mismos párrafos.
- No adelantar detalles que aparecen por primera vez en párrafos posteriores, aunque sean correctos dentro del artículo completo o expliquen un anuncio como “veamos tres ejemplos”.
- No completar listas, ejemplos, nombres, resultados o aplicaciones usando conocimiento general, el repaso, el título, una imagen o el contexto de preguntas posteriores si el párrafo asignado todavía no los menciona.
- Antes de conservar una respuesta, hacer la comprobación: “¿Qué oración del párrafo asignado sostiene esta idea?”. Si no se puede señalar una, eliminarla o moverla a la pregunta cuyos párrafos sí la sostienen.
- Cuando el párrafo solo anuncia lo que se verá después, la respuesta puede repetir el anuncio general, pero no revelar por anticipado el contenido de esos ejemplos.

### followUp

- Mantenerlo solo como respaldo/compatibilidad en respuestas principales
- No depender de `followUp` para que el conductor vea el material de apoyo
- Si se redacta, debe ser breve y anclado al párrafo o texto bíblico citado
- **No** usar estilo "Yo podría comentar" (eso va en `commentSuggestion`)

### Ejemplo

```typescript
answers: [
  {
    text: "Sacar **tiempo para estar juntos** fortalece la amistad y el matrimonio aunque estén muy ocupados.",
    followUp: "¿Qué fortalece el tiempo que pasan juntos?",
  },
  {
    text: "Ese tiempo les permite **hablar de lo que pasó durante el día** y mantenerse cerca.",
    followUp: "¿Qué pueden compartir cuando apartan tiempo juntos?",
  },
  {
    text: "También les permite contarse sus **pensamientos y sentimientos más profundos**.",
    secondary: true,
  },
  {
    text: "Pueden mostrarse **cariño** y hacer cosas divertidas juntos.",
    secondary: true,
  },
],
```

## Flujo para estudios nuevos

1. Leer párrafos de la pregunta
2. Delimitar la fuente a `question.paragraphs` y a los textos bíblicos citados dentro de esos párrafos
3. Redactar 2–3 principales que contesten directamente la pregunta
4. Extraer detalles secundarios relevantes: textos bíblicos, ejemplos, advertencias, consecuencias, aplicaciones y frases clave
5. Verificar cada `text` y `followUp` contra una oración concreta de la fuente delimitada; quitar cualquier adelanto de párrafos posteriores
6. Usar solo `answers` — **no** `answer`, `answerContext` ni `flashcards`
7. Mantener `keyPoint` y `guidingQuestion` solo como respaldo de datos; no se muestran en la UI principal
8. Revisar que ningún detalle secundario sea relleno ni repita una principal
9. Si hace falta una frase oral tipo "Yo podría comentar", pasar a `como-comentarlo`; no mezclarla en `answers`.

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

- [ ] `answers` con 2–3 principales + secundarias útiles, sin ruido visual
- [ ] followUp en cada principal (no en secundarias)
- [ ] Negritas en conceptos clave
- [ ] Acentos y signos correctos en español
- [ ] Sin `flashcards`
- [ ] Experiencias del párrafo como secundarias cuando aplique
- [ ] Cada respuesta y `followUp` está respaldado por los párrafos de `question.paragraphs` o por un texto bíblico citado allí
- [ ] Sin detalles adelantados desde párrafos o preguntas posteriores
