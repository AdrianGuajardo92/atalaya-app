---
name: atalaya-revista-importer
description: Importa revistas de estudio de La Atalaya por mes y año en este proyecto. Úsalo cuando el usuario pida agregar todos los estudios de una revista, por ejemplo marzo de 2026, con artículos, preguntas, párrafos, respuestas, textos bíblicos TNM, comentarios de "Cómo comentarlo", imágenes oficiales de jw.org, recuadros laterales (boxSupplement) e integración en data/articles.
---

# Importador de Revistas de La Atalaya

Esta skill reproduce el flujo usado para importar la revista de estudio de marzo de 2026. Sirve para que el usuario diga: “quiero la revista de marzo de 2026” y Codex agregue todos los artículos de estudio que falten en la app.

## Alcance

- Fuente oficial: páginas públicas de jw.org en español.
- Entrada típica: mes y año de la revista, por ejemplo `marzo 2026`.
- Salida esperada:
  - `data/articles/study-YYYY-MM-DD.ts` por cada estudio nuevo (`studyId` = fecha inicio de semana).
  - Exports: `studyYYYYMMDD` + `biblicalTextsYYYYMMDD`.
  - Imágenes oficiales en `question.image`, no en párrafos.
  - `biblicalTexts` para cada `readText` **y** refs TNM del recuadro (`sidebar`).
  - `biblicalCards` con textos reales de la Traducción del Nuevo Mundo.
  - Comentarios naturales de "Cómo comentarlo" para preguntas y `biblicalCards.purpose` enriquecido para textos bíblicos.
  - `data/articles/index.ts` actualizado (`studiesMap`, `biblicalTextsMap`).
  - `data/articles-config.ts` actualizado (`activeStudyIds`, `defaultStudyId`).

## Reglas Críticas

1. No hagas commit ni push salvo que el usuario lo pida explícitamente.
2. Usa siempre ortografía correcta en español: Jehová, Satanás, Moisés, Josué, Edén, ¿...?, ¡...!
3. No inventes textos bíblicos. Si falta un texto, vuelve a consultarlo en jw.org.
4. Las imágenes visibles van en `question.image`. Usa la URL directa de mayor tamaño disponible, normalmente `data-zoom` con `_xl.jpg`.
5. Las respuestas del conductor usan `answers: AnswerItem[]` según `.agents/skills/respuestas-conductor/SKILL.md`.
6. Los resúmenes de párrafo (`summary`) deben ser resúmenes reales, no copias ni recortes del párrafo.
7. El contenido completo del párrafo (`content`) no lleva negritas.
8. Al crear estudios nuevos, es obligatorio leer y aplicar las skills dueñas de contenido: `respuestas-conductor`, `como-comentarlo` y `box-supplement` si hay recuadros.
9. Si una revista incluye material que no sea artículo de estudio, como “Personaje bíblico”, no lo importes como artículo de estudio.

## Skills dueñas durante la importación

El importador genera borradores y estructura. El pulido de contenido se delega así:

| Contenido | Skill dueña |
|-----------|-------------|
| `answers`, principales, secundarias y `followUp` | `.agents/skills/respuestas-conductor/SKILL.md` |
| `question.commentSuggestion`, `reviewQuestions.commentSuggestion` y `biblicalCards.purpose` | `.agents/skills/como-comentarlo/SKILL.md` |
| `paragraph.sidebar`, refs clicables de recuadros y reglas de `boxSupplement` | `.agents/skills/box-supplement/SKILL.md` |

## Cómo comentarlo en artículos nuevos

Después de generar preguntas, respuestas, párrafos, resúmenes y `biblicalCards`, lee:

```text
.agents/skills/como-comentarlo/SKILL.md
```

Aplica esa skill antes de cerrar la importación:

- Crea comentarios naturales de "Yo podría comentar" para cada pregunta del artículo.
- Si el proyecto está usando `commentSuggestion` en los datos, guarda ahí los comentarios.
- Si el proyecto está usando `lib/commentGuidance.ts` como mapa central, actualiza ese mapa sin crear otra arquitectura.
- Para cada `biblicalCard`, agrega o mejora `purpose` con contexto enriquecido.
- No uses `biblicalCards.commentSuggestion`.
- No copies el `answer`, el `summary` ni frases largas del `content`.
- El comentario debe ayudar al usuario a participar en la reunión con palabras claras y humanas.
- Verifica cobertura: ninguna pregunta del artículo nuevo debe quedar sin "Cómo comentarlo".

## Resúmenes de Párrafos

El campo `summary` es para que el conductor vea de un vistazo qué aporta ese párrafo a la respuesta. No debe parecer el párrafo repetido en corto.

Reglas obligatorias:

- Escribe cada `summary` en lenguaje sencillo, como explicación para estudiar, no como copia editorial.
- Hazlo de 1 oración clara; usa 2 solo si el párrafo tiene dos ideas fuertes.
- Manténlo normalmente entre 20 y 40 palabras.
- Conecta el resumen con la pregunta y con las ideas principales de `answers`.
- En preguntas con varios párrafos, cada `summary` debe explicar qué aporta ese párrafo específico, no repetir el mismo resumen general.
- Usa negritas útiles en 1 a 3 conceptos clave: `**Jehová**`, `**confianza**`, `**Palabra de Dios**`, etc.
- No copies las primeras frases del párrafo como resumen.
- No dejes preguntas como resumen, por ejemplo `¿Cómo demostramos...?`.
- No dejes frases cortadas, puntos suspensivos por truncamiento ni resúmenes que terminen en `...`.

Ejemplo correcto:
```typescript
summary: "Para enseñar mejor, debemos **comprender las preocupaciones** de las personas y pensar en cómo la esperanza bíblica puede ayudarlas."
```

Ejemplo incorrecto:
```typescript
summary: "¿Cómo demostramos que nos interesamos por las personas? Tratando de comprender sus preocupaciones."
```

## Subtítulos de sección (`section`)

Un `h2` en jw.org marca un subtema dentro del artículo (por ejemplo, "CÓMO ELEGIR UN AMIGO PARA TODA LA VIDA").

Reglas obligatorias:

- El campo `section` va **solo en la primera pregunta** de cada bloque consecutivo con ese subtítulo.
- **No** dupliques `section` en las preguntas siguientes del mismo subtema.
- La UI deduplica por si acaso (`lib/sectionUtils.ts`), pero los datos deben exportarse correctamente desde el importador.
- La traducción LSM del subtítulo se guarda con la clave `section-{number}` de esa **primera** pregunta del bloque.

Ejemplo correcto (bloque de 4 preguntas bajo el mismo subtítulo):

```typescript
{ number: "3, 4", section: "CÓMO ELEGIR UN AMIGO PARA TODA LA VIDA", ... },
{ number: "5", ... }, // sin section
{ number: "6, 7", ... }, // sin section
{ number: "8, 9", ... }, // sin section
```

## Recuadros (`boxSupplement`) — OBLIGATORIO

En jw.org, los recuadros laterales viven en `div.boxSupplement` (no tienen `data-rel-pid` ni `parNum`).

### Datos (importador → `paragraph.sidebar`)

- El importador extrae `title`, `intro` y `items` con `parse_box_supplement()`.
- Guardar en `paragraph.sidebar` del párrafo vinculado (normalmente el **último** párrafo de la pregunta que lo referencia).
- Vincular por ancla interna (`#link0`, `#link1` en la pregunta) o, en fallback, por el último `parNum` antes del recuadro en el DOM.
- **No** confundir con `paragraph.note` (nota al pie) ni con el bloque de repaso `blockTeach`.
- La imagen ilustrativa va en `question.image`, **no** en el párrafo. El recuadro **siempre** en `paragraph.sidebar`.

Ejemplo:

```typescript
{
  number: 13,
  content: "...",
  summary: "...",
  sidebar: {
    title: "¿Qué lugar ocupa en nuestra vida?",
    intro: "Hay muchas amistades importantes... (Filip. 1:10).",
    items: [
      "***Jehová.*** ...",
      "***Nuestro esposo o esposa.*** ...",
      "Otras personas y responsabilidades. ..."
    ]
  }
}
```

### Énfasis en intro/items (`rich_text_content`)

En `parse_box_supplement`, `intro` e `items` pasan por `rich_text_content()`:

| HTML en jw.org | Marcado en datos | Render en UI |
|----------------|------------------|--------------|
| `<strong>` solo | `**texto**` | negrita |
| `<em>` + `<strong>` anidados | `***texto***` | negrita + cursiva (prefijos de lista, ej. «Jehová.») |
| Referencias entre paréntesis `(Filip. 1:10)` | texto plano | azul `#006FB3` / `dark:text-sky-400`, clicables → `BibleVerseModal` vía `QuestionCard` + `lib/resolveScriptureRef.ts` |

**Post-import TNM del recuadro:** cada ref entre paréntesis en `sidebar.intro` / `sidebar.items` necesita entrada en `biblicalTextsYYYYMMDD` con clave TNM completa (ej. `"Filipenses 1:10"`). El script emite **ADVERTENCIA** listando refs faltantes; completar manualmente desde jw.org TNM 2019.

**No** editar manualmente los recuadros con `formatContent` de párrafos ni con negritas `**` en `content`.

### Colocación en UI (orden PDF)

Los datos siguen separados (`question.image` + `paragraph.sidebar`). La app decide **dónde renderizar** con [`lib/sidebarPlacement.ts`](../../../lib/sidebarPlacement.ts):

| Condición | Dónde se muestra el recuadro |
|-----------|------------------------------|
| Pregunta con `image` + párrafo con `sidebar` | **Tarjeta de pregunta**: inmediatamente **después** de la imagen (orden PDF: imagen → recuadro) |
| Sidebar sin `question.image` | Tras el contenido del párrafo vinculado (modal / navegación inline) |
| Modal de párrafos con `question.image` | **No** mostrar recuadro suelto tras el bloque Resumen ni duplicar en flujo de párrafo |

Componente visual: [`components/ParagraphSidebarBox.tsx`](../../../components/ParagraphSidebarBox.tsx) + [`lib/formatSidebarRichText.tsx`](../../../lib/formatSidebarRichText.tsx). **Nunca** usar `formatContent` de `QuestionCard` para recuadros.

Cuando la pregunta dice «Vea también la imagen» y «Vea el recuadro…», el importador debe asignar la imagen a `question.image` (`assign_images`) y el recuadro a `paragraph.sidebar` del párrafo referenciado.

## Flujo Recomendado

1. Inspecciona el estado actual:
   - `git status --short`
   - `ls data/articles`
   - `sed -n '1,220p' data/articles/index.ts`
   - `sed -n '1,180p' data/articles-config.ts`

2. Ejecuta el importador en modo diagnóstico:
   ```bash
   python3 .agents/skills/atalaya-revista-importer/scripts/import_watchtower_issue.py --month marzo --year 2026 --dry-run
   ```

3. Verifica la numeración antes de escribir:
   - Cada revista en jw.org tiene documentos con numeración propia; infiere el rango con `--dry-run` o `--issue-url`.
   - Si la inferencia automática no coincide con el repo, pasa `--first-article-number`.
   - Si ya existe el primer artículo de la revista, el script debe saltarlo y escribir solo los faltantes.
   - **Ejemplo ilustrativo** (marzo 2026): documentos `2026320`–`2026324` → artículos 60–64. Ajusta según la revista actual.

4. Escribe los artículos:
   ```bash
   python3 .agents/skills/atalaya-revista-importer/scripts/import_watchtower_issue.py --month marzo --year 2026 --write
   ```

5. Revisa y pule el resultado antes de cerrar:
   - Abre cada archivo `study-YYYY-MM-DD.ts` y confirma título, semana, canción, tema, preguntas, párrafos, imágenes y repaso.
   - Asegúrate de que todos los `readText` tengan entrada en `biblicalTexts`.
   - **Completa entradas TNM** para refs del recuadro (warnings del script) y aplica `box-supplement`.
   - Asegúrate de que todos los textos citados en los párrafos estén en `biblicalCards`.
   - Reescribe todos los `summary` como resúmenes reales: sencillos, breves, ligados a la respuesta y con negritas útiles.
   - Verifica que ningún `summary` sea una copia larga del `content`, una pregunta, una frase cortada o un recorte con `...`.
   - Aplica `respuestas-conductor` para `answers`.
   - Aplica `como-comentarlo` para comentarios naturales de preguntas y `biblicalCards.purpose`.

## Post-import obligatorio (el script NO genera todo)

El script `import_watchtower_issue.py` produce borradores. **Completar manualmente:**

| Campo | Script | Acción post-import |
|-------|:------:|-------------------|
| `keyPoint` | Parcial | Verificar cada pregunta |
| `guidingQuestion` | No | Agregar en cada pregunta |
| `answers` | Sí | Ver skill `respuestas-conductor` — principales + secundarias + followUp |
| `commentSuggestion` | No | Aplicar skill `como-comentarlo` |
| `summary` | Borrador genérico | Reescribir (20–40 palabras, no copia del párrafo) |
| `biblicalCards.purpose` | Genérico | Reescribir propósito específico con `como-comentarlo` |
| `paragraph.sidebar` | Sí (`parse_box_supplement`) | Verificar título, intro, items; prefijos `***` en ítems; imagen en `question.image` |
| Videos LSM | No | Agregar en `public/videos/` si aplica |

6. Ejecuta verificación técnica automatizada:
   ```bash
   npm run study:validate
   npx tsc --noEmit
   npm run build
   npm run lint
   ```

7. Si `npm run lint` falla por errores preexistentes en componentes que no tocaste, repórtalo con claridad y no lo mezcles con la importación.

## Comandos Útiles

Importar una revista por mes y año:
```bash
python3 .agents/skills/atalaya-revista-importer/scripts/import_watchtower_issue.py --month marzo --year 2026 --write
```

Usar URL explícita:
```bash
python3 .agents/skills/atalaya-revista-importer/scripts/import_watchtower_issue.py --issue-url https://www.jw.org/es/biblioteca/revistas/atalaya-estudio-marzo-2026/ --write
```

Forzar número inicial si hace falta:
```bash
python3 .agents/skills/atalaya-revista-importer/scripts/import_watchtower_issue.py --month marzo --year 2026 --first-article-number 60 --write
```

Generar solo archivos en una carpeta temporal para inspección:
```bash
python3 .agents/skills/atalaya-revista-importer/scripts/import_watchtower_issue.py --month marzo --year 2026 --write --output-dir /tmp/atalaya-import-test --no-integrate
```

## Checks automatizados

Estos checks se pueden ejecutar con comandos o scripts y deben reportarse como verificación técnica:

- [ ] `npx tsc --noEmit` pasa.
- [ ] `npm run study:validate` no reporta errores estructurales.
- [ ] `npm run build` pasa.
- [ ] `npm run lint` pasa o se reportan errores preexistentes no relacionados.
- [ ] El script no sobrescribió estudios existentes ni cambios del usuario.
- [ ] `index.ts` importa, mapea en `studiesMap` / `biblicalTextsMap` y reexporta.
- [ ] `articles-config.ts` tiene `activeStudyIds` y `defaultStudyId` correctos.
- [ ] Cada archivo nuevo exporta `biblicalTextsYYYYMMDD` y `studyYYYYMMDD` con `metadata.studyId`.

## Checklist humano final

Este checklist requiere lectura y criterio editorial; no lo declares como "pasó" solo porque compiló:

- [ ] Se agregaron solo artículos de estudio (`docClass-40`).
- [ ] Se omitieron artículos no estudiables (`docClass-79` u otros).
- [ ] No se sobrescribieron cambios del usuario.
- [ ] Cada ref bíblica del recuadro tiene entrada TNM en `biblicalTexts` (claves como `"Filipenses 1:10"`).
- [ ] Cada párrafo tiene un `summary` real, breve, sencillo y conectado con su pregunta.
- [ ] Ningún `summary` es una copia de las primeras frases del párrafo ni termina con `...`.
- [ ] Se leyó y aplicó `.agents/skills/respuestas-conductor/SKILL.md`.
- [ ] Se leyó y aplicó `.agents/skills/como-comentarlo/SKILL.md`.
- [ ] Si hubo recuadros, se leyó y aplicó `.agents/skills/box-supplement/SKILL.md`.
- [ ] Cada pregunta nueva tiene `guidingQuestion` y `answers` (skill `respuestas-conductor`).
- [ ] Cada pregunta nueva tiene `commentSuggestion` (comentario natural).
- [ ] Cada `biblicalCards.purpose` explica por qué el texto está en el párrafo.
- [ ] No existe `biblicalCards.commentSuggestion`.
- [ ] Los textos bíblicos nuevos tienen `biblicalCards.purpose` enriquecido según `como-comentarlo`.
- [ ] Cada `boxSupplement` de jw.org tiene `paragraph.sidebar` en el párrafo correcto (no en `note`).
- [ ] Si la pregunta referencia imagen + recuadro, `question.image` está asignada y el recuadro no se duplica en modal.
- [ ] Prefijos de lista del recuadro conservan `***texto***` cuando jw.org usa negrita+cursiva.
- [ ] Referencias bíblicas del recuadro se ven azules en light/dark y abren `BibleVerseModal` al clic.
