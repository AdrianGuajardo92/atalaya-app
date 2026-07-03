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

## Checklist

- [ ] Todas las preguntas con `textLSM`
- [ ] Subtítulos de sección con `sectionLSM` en primera pregunta del bloque
- [ ] Título del estudio con `titleLSM`
- [ ] Repaso con `questionLSM` si aplica
