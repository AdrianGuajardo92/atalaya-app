---
name: box-supplement
description: Recuadros laterales boxSupplement de jw.org — parseo, sidebar en datos, colocación UI y refs bíblicas clicables.
---

# Recuadros laterales (boxSupplement)

## Datos

```typescript
sidebar: {
  title: "¿Qué lugar ocupa en nuestra vida?",
  intro: "Texto introductorio (Filip. 1:10).",
  items: ["Jehová. Nuestra amistad... (Mat. 6:33; Mar. 12:30).", "..."]
}
```

Campo en `paragraph.sidebar` (no en pregunta).

## Textos bíblicos del recuadro

1. Extraer refs de `intro` e `items`
2. Agregar entradas en `biblicalTextsYYYYMMDD` (clave = referencia normalizada). Esto es bloqueante: sin TNM, `BibleVerseModal` no puede resolver la ref.
3. Agregar `biblicalCards` en la pregunta relacionada cuando el texto también se quiere explicar en tarjetas. Esto es cobertura editorial y el validador lo reporta como warning.
4. Redactar o mejorar `biblicalCards.purpose` con la skill `como-comentarlo`

No usar `biblicalCards.commentSuggestion`. Las frases tipo "Yo podría comentar..." pertenecen a `question.commentSuggestion` o `reviewQuestions.commentSuggestion`; los textos bíblicos usan `purpose`.

## Severidad

- Ref clicable del recuadro sin entrada TNM en `biblicalTextsYYYYMMDD`: **error bloqueante**.
- Ref del recuadro sin `biblicalCard`: **warning editorial**; completar si el usuario quiere cobertura total de tarjetas.
- Recuadro en `paragraph.note`, en pregunta o en párrafo equivocado: corregir antes de cerrar.
- Imagen del recuadro en `paragraph`: corregir; la imagen visible va en `question.image`.

## Colocación UI — `lib/sidebarPlacement.ts`

| Condición | Dónde se muestra |
|-----------|------------------|
| Pregunta tiene `image` | Tarjeta de pregunta, después de imagen |
| Sin imagen | Flujo del párrafo (modal / inline) |

Orden PDF: **imagen → recuadro**

## Componentes

- `ParagraphSidebarBox.tsx` — UI del recuadro
- `lib/formatSidebarRichText.tsx` — negritas + refs azules clicables
- `lib/resolveScriptureRef.ts` — parseo `(Filip. 1:10)`, rangos, `compare con`

## Importador

Skill `atalaya-revista-importer` parsea `boxSupplement` de jw.org y genera `sidebar` automáticamente.
