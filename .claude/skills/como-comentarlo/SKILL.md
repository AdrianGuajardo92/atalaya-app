---
name: como-comentarlo
description: Especialista local de atalaya-app para crear, mejorar y mantener comentarios naturales de "Cómo comentarlo", "Yo podría comentar" y propósitos breves para textos bíblicos (`biblicalCards.purpose`). Úsalo cuando el usuario pida comentarios humanos, claros, fáciles de entender y no copiados para preguntas, párrafos, biblicalCards, commentSuggestion o preparación de respuestas de estudios de La Atalaya.
---

# Cómo Comentarlo

## Propósito

Esta skill sirve para ayudar al usuario a preparar comentarios reales para el estudio de La Atalaya. El objetivo no es resumir el artículo ni repetir el campo `answer`, sino convertir el contenido del estudio en una respuesta natural que una persona podría decir en la reunión.

## Propiedad de esta skill

Esta skill es la fuente canónica para:

- `question.commentSuggestion`
- `reviewQuestions.commentSuggestion`
- `biblicalCards.purpose`

No redacta `answers`, `AnswerItem` ni `followUp`; eso pertenece a `.agents/skills/respuestas-conductor/SKILL.md`.

## Cuándo usarla

Úsala cuando el usuario pida algo como:

- "haz los cómo comentarlo"
- "mejora los Yo podría comentar"
- "agrega comentarios sencillos"
- "comentarios naturales para este estudio"
- "cómo comentar los textos bíblicos"
- "hazlo para todos los estudios"
- "no copies la respuesta, hazlo humano"
- "quiero comentar esta pregunta en palabras sencillas"

## Archivos que debes revisar

Antes de escribir comentarios, entiende la estructura actual:

- `types/atalaya.ts`: tipos disponibles, especialmente `commentSuggestion`.
- `data/articles/study-YYYY-MM-DD.ts`: datos de cada estudio.
- `data/articles/index.ts`: `studiesMap`, `biblicalTextsMap`.
- `data/articles-config.ts`: `activeStudyIds`, estudios visibles.
- `lib/commentGuidance.ts`: generador de comentarios y mapa `QUESTION_COMMENT_SUGGESTIONS`.
- `components/CommentGuide.tsx`: presentación de "Cómo comentarlo".
- `components/SummaryView.tsx`: salida resumida o imprimible.

## Cadena de prioridad (cómo se resuelve un comentario)

En `lib/commentGuidance.ts`, `buildQuestionComment()` usa este orden:

1. **`commentSuggestion`** en los datos del artículo (`question` o `reviewQuestion`) — **preferido**
2. Entrada en `QUESTION_COMMENT_SUGGESTIONS` del mapa central (puede estar vacío)
3. **Fallback automático desde `answer`** — copia la respuesta oficial (evitar dejar esto activo en estudios nuevos)
4. Fallback desde `keyPoint` si no hay `answer`

**Importante:** Si no pones `commentSuggestion` en el artículo, `SummaryView` y el texto copiable pueden caer en un fallback desde `answers`/`answer`. Eso viola las reglas de esta skill cuando se esperan comentarios naturales. Siempre escribe `commentSuggestion` explícito en estudios nuevos.

Para textos bíblicos, `buildBiblicalComment()` usa el campo `purpose` de la `biblicalCard` como explicación breve; si falta, genera texto explicativo desde el párrafo y el versículo.

## Salida visible actual

- `question.commentSuggestion` se muestra de forma fiable en `SummaryView` y en el texto copiado desde esa vista.
- La tarjeta principal (`QuestionCard`) no tiene un bloque propio para el comentario central de la pregunta; su `CommentGuide` está enfocado en tarjetas bíblicas.
- `reviewQuestions.commentSuggestion` existe como dato editorial, pero hoy no tiene salida fiable por sí solo: `ReviewQuestionCard` llama a `CommentGuide`, y ese componente solo renderiza si hay `biblicalCards`. Si el comentario de repaso debe verse, primero confirma o ajusta la UI.
- `biblicalCards.purpose` sí se consume en tarjetas bíblicas y en `SummaryView`; es la vía fiable para explicar textos bíblicos.

## Flujo de trabajo

1. Identifica el alcance exacto: un artículo, una pregunta, todos los textos bíblicos, todos los estudios activos o una mejora general.
2. Lee la pregunta (`textEs`) y todos sus párrafos relacionados (`paragraphs`).
3. Revisa el contenido de cada párrafo, su `summary`, el `answer`, las `biblicalCards` y cualquier `commentSuggestion` existente.
4. Escribe el comentario con palabras propias. No copies el `answer` ni recortes frases del párrafo.
5. Si hay textos bíblicos, redacta o mejora `biblicalCards.purpose` con una explicación breve, directa y útil para la tarjeta.
6. Guarda el resultado siguiendo el patrón actual del proyecto:
   - **Preferir** `commentSuggestion` en `data/articles/study-YYYY-MM-DD.ts` (preguntas y `reviewQuestions`).
   - Solo usar `QUESTION_COMMENT_SUGGESTIONS` en `lib/commentGuidance.ts` si el proyecto mantiene overrides centralizados.
   - No crees una arquitectura paralela si ya existe un camino claro.
   - Para visibilidad inmediata, recuerda que `question.commentSuggestion` se revisa en `SummaryView`; no esperes un bloque propio en la tarjeta de pregunta.
7. Verifica cobertura: ninguna pregunta, repaso ni `biblicalCards.purpose` solicitado debe quedar incompleto.
8. Ejecuta verificación técnica sobre los archivos tocados y reporta cualquier falla con claridad.

## Reglas de calidad

Todo comentario debe cumplir estas reglas:

- Debe sonar como algo que una persona podría decir en voz alta.
- Debe contestar directamente la pregunta central.
- Debe usar lenguaje sencillo, claro y fácil de entender.
- Debe estar basado en el contenido real del estudio.
- Debe ayudar al usuario a saber cómo expresar la idea, no solo darle una frase decorativa.
- Debe tener normalmente de 2 a 4 oraciones.
- Puede usar primera persona cuando ayude: "Esto me ayuda a ver que..." o "Yo podría comentar que...".
- Si el párrafo usa una comparación, ejemplo o ilustración, úsala para explicar la idea con naturalidad.
- Si habla de Jehová, Jesús, la fe, la oración, el Reino, la obediencia o la lealtad, conecta la idea de forma sencilla y respetuosa.
- Usa siempre ortografía correcta en español: Jehová, Satanás, Moisés, ¿por qué?, etc.

Evita siempre:

- Copiar y pegar el campo `answer`.
- Copiar el texto completo del recuadro lateral (`paragraph.sidebar`); comenta la idea, no leas el recuadro palabra por palabra.
- Copiar frases completas del párrafo salvo una cita breve indispensable.
- Frases genéricas como "este párrafo nos enseña algo importante".
- Tono académico, artificial o de resumen escolar.
- Comentarios tan resumidos que ya no se entiendan.
- Comentarios largos que pierdan la idea principal.
- Ideas doctrinales, históricas o aplicaciones que no salgan del estudio.

## Comentarios de preguntas

Aplica también a **`reviewQuestions`** cuando tengan `commentSuggestion`, pero no prometas que se verá en la UI actual salvo que haya `biblicalCards` o se modifique la presentación.

El comentario debe sentirse como una respuesta preparada para participar. Puede empezar con:

```text
Yo podría comentar: "..."
```

Pero el contenido no debe repetir el resumen ni la respuesta oficial. Debe explicar la idea en palabras naturales.

### Ejemplo incorrecto

```text
Yo podría comentar: "Los siervos de Jehová somos como buenos conductores: nos esforzamos por tener claro qué cosas podrían distraer nuestra atención de la carretera que tenemos por delante."
```

Por qué está mal: copia el contenido casi literalmente y no ayuda al usuario a aprender cómo expresarlo.

### Ejemplo correcto

```text
Yo podría comentar: "Algo importante puede convertirse en distracción cuando ocupa el lugar que debería tener lo más importante. Es como cuando uno maneja: una llamada puede ser importante, pero en ese momento mirar el camino es más importante. De la misma manera, debo cuidar que las preocupaciones, el entretenimiento o cualquier otra cosa no me quiten la atención de servir a Jehová."
```

Por qué está bien: explica la idea, usa la comparación del estudio y suena como una respuesta humana.

## Comentarios de textos bíblicos (flip cards)

Para cada `biblicalCard`, la UI muestra **un solo bloque**: "Por qué está en este párrafo". Todo el contenido va en el campo **`purpose`**.

Estas tarjetas deben ser **resumidas**. No son mini-comentarios ni explicaciones largas; deben caber cómodamente en la tarjeta y leerse rápido.

| Campo | Etiqueta en UI | Contenido |
|-------|---------------|-----------|
| `purpose` | Por qué está en este párrafo | 1–2 oraciones breves y específicas |

**No usar** `commentSuggestion` en `biblicalCard` (obsoleto para flip cards). Las frases tipo *"Yo podría comentar..."* van solo en `question.commentSuggestion` o `reviewQuestions.commentSuggestion`.

Lee:

- `reference`
- `text`
- la pregunta relacionada
- el párrafo exacto donde aparece el texto
- el `summary` de ese párrafo, si existe

Un buen `purpose` debe responder:

- ¿Por qué el versículo está citado en este párrafo?
- ¿Qué enseña el texto bíblico?
- ¿Cómo eso ayuda a entender o aplicar lo que dice el párrafo?

Reglas de longitud y estilo:

- Normalmente debe tener 1 oración; usa 2 solo si el texto necesita una conexión adicional.
- Debe mencionar la enseñanza del texto y por qué se usa en el párrafo.
- Debe evitar detalles secundarios, aplicaciones largas o tono de discurso.
- Debe sentirse como una nota clara para ubicar el texto, no como una respuesta preparada para comentar.

### Ejemplo incorrecto

```text
Este texto muestra que debemos poner primero el Reino.
```

Por qué está mal: es demasiado genérico, no menciona el párrafo ni explica qué enseña el versículo.

### Ejemplo incorrecto

```text
Yo podría leer el versículo y comentar que un buen amigo es un regalo de Jehová.
```

Por qué está mal: estilo oral en primera persona; eso no va en flip cards bíblicas.

### Ejemplo correcto

```typescript
{
  reference: "Santiago 1:17",
  purpose: "Enseña que todo regalo bueno viene de Jehová. Se cita para mostrar que los buenos amigos son un regalo suyo, no algo que debamos dar por sentado.",
  text: "Todos los regalos buenos...",
}
```

Por qué está bien: conecta párrafo y versículo, explica la enseñanza central en una forma breve y evita frases orales.

## Cómo mejorar comentarios existentes

Cuando el usuario diga que un comentario parece copy-paste, artificial o poco útil:

1. Compara el comentario con `answer`, `summary` y `content`.
2. Si comparte frases largas o estructura casi idéntica, reescríbelo desde cero.
3. Mantén la idea bíblica, pero cambia el enfoque a explicación oral sencilla.
4. Asegúrate de que el comentario responda la pregunta y no solo repita datos.
5. Si hay una aplicación práctica clara, inclúyela sin forzarla.

## Señales de buen comentario

Antes de guardar, pregúntate:

- ¿Esto lo podría decir una persona de forma natural en la reunión?
- ¿Contesta la pregunta central?
- ¿Se entiende sin tener que releerlo varias veces?
- ¿Está basado en los párrafos y textos reales?
- ¿Evita copiar el `answer`?
- ¿Ayuda al usuario a aprender cómo expresar la idea?

Si alguna respuesta es "no", reescribe el comentario.

## Validación técnica

Después de editar, ejecuta verificaciones proporcionales al cambio:

```bash
npx eslint ARCHIVOS_TOCADOS --max-warnings=0
npx tsc --noEmit --pretty false
npm run build
```

Si `npm run lint` completo falla por errores preexistentes en archivos no relacionados, repórtalo con honestidad y no arregles esos archivos salvo que el usuario lo pida.

## Política del proyecto

- No hagas commit ni push salvo que el usuario lo pida explícitamente.
- No reviertas cambios del usuario.
- Mantén los cambios enfocados en comentarios, datos y presentación relacionada.
- Respeta siempre los acentos y la ortografía correcta en todos los textos visibles.
