---
name: fix-bug
description: Especialista en encontrar y corregir bugs. Úsalo cuando algo no funcione, haya errores en consola, la app no compile o el comportamiento no sea el esperado.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash(npm run build), Bash(npm run lint)
---

# Corrector de Bugs

Sigue estos pasos:

1. **Entender el problema**: Lee la descripción y reproduce el bug
2. **Localizar el código**: Grep y Glob en `components/`, `app/`, `data/articles/`, `lib/`
3. **Analizar la causa raíz**: Lee el código relevante
4. **Corregir con cambio mínimo**: No refactorizar de más
5. **Verificar**: `npm run build` (y `npm run lint` si aplica)

## Reglas

- Cambio **mínimo** necesario; no agregar features
- Datos de estudios: `data/articles/study-YYYY-MM-DD.ts`, no `atalaya-data.ts` (eliminado)
- Verificar **light y dark mode** si el bug es visual (tokens en `app/globals.css`)
- Ortografía con acentos en textos visibles al usuario
- Dev server: `http://localhost:9000`
- Explicar causa y corrección al usuario

## Áreas frecuentes

| Síntoma | Revisar |
|---------|---------|
| Comentarios copian respuesta | `commentSuggestion` en datos vs fallback en `lib/commentGuidance.ts` |
| Texto bíblico no aparece (`readText`) | `biblicalTexts` en `study-*.ts` + `biblicalTextsMap` en `index.ts` |
| Ref azul del recuadro abre modal vacío | Entrada TNM en `biblicalTexts` del estudio (ej. `"Filipenses 1:10"`) + `lib/resolveScriptureRef.ts` |
| Recuadro duplicado en modal | `lib/sidebarPlacement.ts` — con `question.image` no mostrar en flujo de párrafo |
| Subtítulo de sección repetido | `section` solo en 1ª pregunta del bloque; `lib/sectionUtils.ts` |
| Animación no funciona | `app/globals.css` (`animate-fadeIn`, `paragraphs-modal-*`, `animate-slideDown`) |
| Modal no cierra al clic fuera | Backdrop `onClick` en modal párrafos / `BibleVerseModal` |
| KV no persiste | Variables `KV_*` y rutas `/api/*` |
