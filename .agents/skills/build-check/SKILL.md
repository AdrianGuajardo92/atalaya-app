---
name: build-check
description: Compila el proyecto y verifica errores de TypeScript, build y lint. Úsalo antes de cerrar cambios importantes o al validar artículos nuevos.
allowed-tools: Bash(npm run build), Bash(npm run lint), Bash(npm run dev *)
---

# Verificar Build del Proyecto

## Pasos

1. `npm run build` — compilar Next.js + TypeScript
2. Si falla, mostrar cada error con archivo y línea
3. Opcional: `npm run lint` (eslint directo, no `next lint`)
4. Si todo pasa, confirmar build limpio

## Tras cambios UI de estudio

Verificar manualmente en light y dark mode:
- Modal de párrafos: animación y cierre con clic en backdrop
- Refs azules del recuadro abren `BibleVerseModal` con texto TNM
- Recuadro tras imagen (orden PDF) sin duplicado en modal

## Dev server

```bash
npm run dev   # http://localhost:9000
```

## Si hay errores

- Resumen claro por error
- Sugerir corrección
- Preguntar si el usuario quiere corrección automática

## Scripts relacionados

```bash
npm run article:list
npm run article:remove
npm run cleanup-kv
./scripts/sync-skills.sh
```
