---
name: clean-code
description: Especialista en eliminar código muerto, imports no usados, variables sin usar y archivos innecesarios. Úsalo para limpiar el codebase.
allowed-tools: Read, Edit, Glob, Grep, Bash(npm run build), Bash(npm run lint)
---

# Limpiador de Código

## Qué buscar

1. **Imports no usados**
2. **Variables y funciones sin usar**
3. **Props no usados**
4. **Archivos huérfanos** (no importados)
5. **Estilos / tokens CSS sin uso**
6. **Comentarios obsoletos** (referencias a `atalaya-data.ts`, `BiblicalCards.tsx`, dual-block QuestionCard)

## Proceso

1. `npm run lint` — warnings de unused
2. Grep para confirmar que no se usa
3. Eliminar código muerto
4. `npm run build` para verificar

## Regla crítica al eliminar estudios

Al borrar `data/articles/study-YYYY-MM-DD.ts`:
- Quitar de `studiesMap` / `biblicalTextsMap` en `data/articles/index.ts`
- Quitar de `activeStudyIds` en `data/articles-config.ts`
- Limpiar entradas en `lib/commentGuidance.ts`
- **Eliminar** videos LSM asociados en `public/videos/` (convención actual `article-XX/`)

## Scripts útiles

```bash
npm run article:list
npm run article:remove
npm run cleanup-kv
```

## Reglas

- NUNCA eliminar código en uso — verificar con Grep
- Si hay duda, preguntar al usuario
- Reportar resumen de lo eliminado
