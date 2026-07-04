---
name: atalaya-quality-gate
description: Auditoría final de estudios de atalaya-app antes de cerrar cambios. Úsalo al validar estudios nuevos o editados, importaciones de revista, cobertura de textos bíblicos, answers/followUp, commentSuggestion, recuadros sidebar, LSM básico y sincronización de skills.
---

# Atalaya Quality Gate

## Propósito

Esta skill es el cierre integral de calidad para estudios de La Atalaya. Separa lo que puede verificar un script de lo que requiere juicio humano del conductor o del editor.

No reemplaza a las skills dueñas:

- `article-editor`: estructura y edición de estudios.
- `respuestas-conductor`: `answers`, principales, secundarias y `followUp`.
- `como-comentarlo`: `commentSuggestion` y `biblicalCards.purpose`.
- `box-supplement`: `paragraph.sidebar` y refs del recuadro.
- `lsm-translations`, `lsm-video`, `lsm-question-clips`: LSM y videos.

## Flujo

1. Revisar `git status --short` para no mezclar cambios ajenos.
2. Correr el validador de estudios:

```bash
npm run study:validate
npm run study:audit:bible-modals
```

Usar `npm run study:validate:active` si solo importa lo visible en la app.
Usar `npm run study:validate -- --strict` para tratar warnings editoriales como errores.
Usar `npm run study:audit:bible-modals:active` si solo importa lo visible en la app.

3. Si se editaron skills, correr:

```bash
npm run skills:check
```

4. Ejecutar pruebas proporcionales:

```bash
npm run test
npm run build
git diff --check
```

## Qué valida el script

`scripts/validate-study-data.ts` usa `lib/articleValidation.ts` y revisa datos registrados en `studiesMap` / `biblicalTextsMap`.

Interpretación:

- **Error automático:** corregir antes de cerrar salvo instrucción explícita del usuario.
- **Warning automático:** revisar; puede bloquear si se corre `--strict` o si afecta al alcance pedido.
- **Convención editorial:** requiere lectura y criterio; no declararla aprobada solo porque el comando pasó.

Errores estructurales:

- `metadata.studyId` no coincide con la clave del mapa.
- `activeStudyIds` apunta a estudios inexistentes.
- `study-YYYY-MM-DD.ts` existe pero no está registrado.
- Falta entrada en `biblicalTextsMap`.
- Una pregunta apunta a párrafos inexistentes.
- `readText` no coincide exactamente con una clave de `biblicalTexts`.
- Entradas bíblicas sin `reference` o sin `text`.
- Faltan entradas TNM para refs del recuadro (`sidebar`).
- Falta `biblicalCard` para una referencia bíblica citada en el párrafo.

Warnings editoriales:

- Falta `answers`, `followUp`, `commentSuggestion` o `summary`.
- Cantidad de principales/secundarias fuera de la convención.
- Falta negrita útil en `answers[].text` o `summary`.
- `paragraph.content` tiene negritas.
- `biblicalCards.purpose` está vacío.
- Aparece `biblicalCards.commentSuggestion` legacy.
- Refs del recuadro no están cubiertas por `biblicalCards`.
- LSM no está en MAYÚSCULAS cuando existe.
- Campos legacy (`answer`, `answerContext`, `answerBullets`, `flashcards`) aparecen en preguntas nuevas.

Convenciones editoriales que pueden no ser errores técnicos todavía:

- `keyPoint`, `guidingQuestion`, `textLSM`, `answers`, `commentSuggestion` y `biblicalCards` son esperados en estudios nuevos aunque TypeScript permita omitir algunos.
- `question.commentSuggestion` se verifica como contenido para `SummaryView`/copiado; la tarjeta principal muestra sobre todo `biblicalCards.purpose`.
- En repaso, `reviewQuestions.commentSuggestion` puede no verse en tarjeta si no hay `biblicalCards`; no declararlo validado visualmente sin revisar la UI o ajustar el componente.

## Qué valida la auditoría de modales bíblicos

`scripts/audit-bible-modals.ts` simula el resolver de `BibleVerseModal` para referencias entre paréntesis en párrafos y recuadros.

Errores que debe bloquear antes de cerrar:

- Una referencia clicable no se resuelve.
- El modal no incluye una referencia esperada en expresiones compuestas como `lea Proverbios 18:22; Is. 48:17, 18`.
- Falta entrada individual en `biblicalTextsYYYYMMDD` para una referencia clicable y el modal dependería de `biblicalCards` combinadas.
- Algún versículo resuelto tiene texto vacío.
- Dos referencias distintas muestran el mismo texto dentro del mismo modal.

## Checklist humano

El script no puede garantizar estas cosas; revisarlas antes de cerrar:

- El texto bíblico TNM 2019 es exacto y no un resumen.
- `biblicalCards.purpose` explica por qué el texto está en ese párrafo.
- `commentSuggestion` suena natural y no copia `answer`, `summary` ni `content`.
- `summary` ayuda al conductor y no solo pasa reglas mecánicas.
- Las referencias largas usan los versículos clave correctos.
- Cada recuadro está asociado al párrafo correcto si jw.org usa anclas ambiguas.

## Política de validación visual

Por regla del repo, no usar Browser, Chrome ni Playwright por iniciativa propia. Si hace falta ver la UI, pedir permiso explícito o cerrar indicando qué debe revisar visualmente el usuario.
