---
name: como-comentarlo
description: Especialista local de atalaya-app para crear, mejorar y mantener comentarios naturales de "Cómo comentarlo", "Yo podría comentar" y comentarios sencillos para textos bíblicos. Úsalo cuando el usuario pida comentarios humanos, claros, fáciles de entender y no copiados para preguntas, párrafos, biblicalCards, commentSuggestion o preparación de respuestas de estudios de La Atalaya.
---

# Cómo Comentarlo

## Propósito

Esta skill sirve para ayudar al usuario a preparar comentarios reales para el estudio de La Atalaya. El objetivo no es resumir el artículo ni repetir el campo `answer`, sino convertir el contenido del estudio en una respuesta natural que una persona podría decir en la reunión.

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
- `data/articles/`: datos de cada artículo.
- `data/articles/index.ts`: artículos exportados.
- `data/articles-config.ts`: artículos visibles o activos.
- `lib/commentGuidance.ts`: lógica o mapas centrales de comentarios, si existen.
- `components/CommentGuide.tsx`: presentación de "Cómo comentarlo", si existe.
- `components/SummaryView.tsx`: salida resumida o imprimible, si se ve afectada.

## Flujo de trabajo

1. Identifica el alcance exacto: un artículo, una pregunta, todos los textos bíblicos, todos los estudios activos o una mejora general.
2. Lee la pregunta (`textEs`) y todos sus párrafos relacionados (`paragraphs`).
3. Revisa el contenido de cada párrafo, su `summary`, el `answer`, las `biblicalCards` y cualquier `commentSuggestion` existente.
4. Escribe el comentario con palabras propias. No copies el `answer` ni recortes frases del párrafo.
5. Si hay textos bíblicos, escribe también cómo podría comentarse cada texto de forma sencilla.
6. Guarda el resultado siguiendo el patrón actual del proyecto:
   - Si el artículo ya usa `commentSuggestion`, ponlo en los datos.
   - Si el proyecto usa un mapa central en `lib/commentGuidance.ts`, mantenlo ahí.
   - No crees una arquitectura paralela si ya existe un camino claro.
7. Verifica cobertura: ninguna pregunta o texto bíblico solicitado debe quedar sin comentario.
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
- Copiar frases completas del párrafo salvo una cita breve indispensable.
- Frases genéricas como "este párrafo nos enseña algo importante".
- Tono académico, artificial o de resumen escolar.
- Comentarios tan resumidos que ya no se entiendan.
- Comentarios largos que pierdan la idea principal.
- Ideas doctrinales, históricas o aplicaciones que no salgan del estudio.

## Comentarios de preguntas

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

## Comentarios de textos bíblicos

Para cada `biblicalCard`, el comentario debe explicar cómo usar ese texto en la respuesta según lo que dice el párrafo donde aparece. No basta con repetir el `purpose`, citar el texto o decir que "apoya la respuesta".

Lee:

- `reference`
- `purpose`
- `text`
- la pregunta relacionada
- el párrafo exacto donde aparece el texto
- el `summary` de ese párrafo, si existe

La idea central es esta: el texto bíblico está ahí por una razón. El comentario debe mostrar esa razón con palabras sencillas.

Un buen comentario de texto bíblico debe responder:

- ¿Qué idea del versículo conviene destacar?
- ¿Qué parte del párrafo está explicando o reforzando ese texto?
- ¿Cómo puedo decirlo en voz alta de forma natural?
- ¿Qué ayuda a entender mejor este texto dentro de esta pregunta?

### Ejemplo incorrecto

```text
Este texto muestra que debemos poner primero el Reino.
```

Por qué está mal: es demasiado genérico, no menciona el párrafo y no explica por qué ese texto está ahí.

### Ejemplo incorrecto

```text
De este texto destacaría esta idea: Pero debes saber que en los últimos días vendrán tiempos críticos y difíciles de soportar. Eso apoya la respuesta de una manera sencilla.
```

Por qué está mal: solo repite el versículo y termina con una frase genérica. No ayuda al usuario a comentar el texto conforme al punto del párrafo.

### Ejemplo correcto

```text
Con Mateo 6:33 podría comentar que Jesús no solo dijo que el Reino era importante, sino que había que buscarlo primero. Eso me ayuda a revisar si algo bueno, como el trabajo o el entretenimiento, está ocupando el lugar que le corresponde a Jehová.
```

Por qué está bien: conecta el texto con la pregunta y muestra una forma natural de explicarlo.

### Ejemplo correcto

```text
Con 2 Timoteo 3:1 destacaría que la Biblia ya había dicho que en los últimos días vendrían tiempos críticos y difíciles de soportar. El párrafo lo usa para explicar por qué la inestabilidad política, los problemas económicos, las enfermedades y la violencia pueden cargarnos la mente. Por eso este texto me ayuda a ver que la preocupación puede convertirse en una distracción real si no cuido mi enfoque espiritual.
```

Por qué está bien: no solo cita el texto; lo conecta con lo que menciona el párrafo y muestra cómo comentarlo de forma clara.

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
