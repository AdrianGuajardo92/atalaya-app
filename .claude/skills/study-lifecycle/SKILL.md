---
name: study-lifecycle
description: Crear, registrar, activar y eliminar estudios de La Atalaya por studyId (fecha inicio de semana). Úsalo cuando el usuario quiera agregar, quitar o gestionar estudios en data/articles/.
---

# Ciclo de vida de estudios (studyId)

## Modelo actual

- Archivo: `data/articles/study-YYYY-MM-DD.ts` (`studyId` = fecha inicio de semana)
- Registro: `data/articles/index.ts` → `studiesMap`, `biblicalTextsMap`
- Activos: `data/articles-config.ts` → `activeStudyIds`, `defaultStudyId`
- Legacy deprecado: `article-XX.ts`, `articlesMap`

## Crear estudio

1. Copiar plantilla: `.agents/skills/article-editor/references/article-template.md`
2. Exportar `studyYYYYMMDD` + `biblicalTextsYYYYMMDD`
3. Registrar en `index.ts` y `articles-config.ts`
4. Ejecutar `npm run build`

## Eliminar estudio

```bash
npm run study:remove 2026-06-29
```

El script actualiza archivos de datos y **solo avisa** si existe `public/videos/study-YYYY-MM-DD/` (o carpeta legacy `article-XX/`); no borra los `.mp4`. Si el usuario pidió eliminar el estudio completo, borrar manualmente los videos asociados o ampliar el script antes de cerrar.

## Listar estudios

```bash
npm run study:list
```

## Limpiar KV tras eliminar

```bash
npm run cleanup-kv -- --study=2026-06-29
```

## Sincronizar skills tras editar

```bash
npm run skills:check
```
