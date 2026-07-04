---
name: lsm-translations
description: Flujo de traducciones LSM (glosas) para preguntas, títulos y secciones. Úsalo con textLSM, LsmBulkImport y preguntas-LSM.md.
---

# Traducciones LSM

## Campos

| Campo | Ubicación |
|-------|-----------|
| `textLSM` | Cada pregunta |
| `sectionLSM` | Primera pregunta de cada bloque con `section` |
| `titleLSM` | Objeto raíz del estudio |
| `questionLSM` | Preguntas de repaso |

## Convención

- Glosas en **MAYÚSCULAS**
- Sin artículos innecesarios; orden SOV natural en LSM
- Si no hay traducción: `textLSM: ""` (UI muestra placeholder editable)

## Flujo manual

1. Usuario proporciona traducciones en `preguntas-LSM.md`
2. Agregar `textLSM` en `data/articles/study-YYYY-MM-DD.ts`
3. Persistencia editable vía `/api/lsm` (KV)

## Bulk import

Componente: `components/LsmBulkImport.tsx` — importación masiva desde texto.

## Mapa exacto KV LSM

Los campos TS son la base/fallback. En runtime, la app puede sobrescribirlos con datos editables de `/api/lsm`.

`/api/lsm` guarda un objeto JSON por estudio en:

```text
atalaya-lsm-data:${articleId}
```

`articleId` corresponde al id del estudio activo, normalmente `study-YYYY-MM-DD`. En escrituras (`POST`/`PUT`) es obligatorio; sin `articleId` solo existe compatibilidad legacy para lectura.

Dentro de ese objeto, las claves actuales son:

| Clave | Valor | Uso |
|-------|-------|-----|
| `title` | string | Override de `titleLSM` del estudio |
| `<question.number>` | string | Override de `textLSM` de la pregunta, ej. `1`, `3, 4` |
| `section-<question.number>` | string | Override de `sectionLSM` en la primera pregunta de una sección |
| `review-<index>` | string | Override de `questionLSM` en repaso; `index` es base 0 |
| `video-p<paragraphNumber>` | string URL o `""` | Override de video LSM por párrafo en `QuestionCard`; `""` elimina el override |
| `bullets-<question.number>` | JSON string | Bullets de respuesta editables; vive en el mismo KV pero no es glosa LSM |

Al auditar traducciones, revisar datos TS y KV si el usuario está usando edición en la app.

El export de `LsmBulkImport` filtra claves no-LSM como `bullets-*`, `bullet-types-*`, `flashcards-*`, `reflections-*` y `applications-*`, pero no filtra `video-p*`. Al preparar JSON de glosas, revisar manualmente que no se mezclen URLs de videos con traducciones.

## Checklist

- [ ] Todas las preguntas con `textLSM`
- [ ] Subtítulos de sección con `sectionLSM` en primera pregunta del bloque
- [ ] Título del estudio con `titleLSM`
- [ ] Repaso con `questionLSM` si aplica
- [ ] JSON de importación sin claves `video-p*` salvo que se quiera cambiar URLs de videos por KV
