---
name: build-check
description: "Verificaciones ligeras del proyecto: diff, whitespace, build y lint puntual. Úsalo antes de cerrar cambios importantes o validar artículos nuevos, respetando que la validación visual la hace el usuario salvo permiso explícito."
allowed-tools: Bash(git diff *), Bash(git status *), Bash(npm run build), Bash(npm run lint), Bash(npm run test), Bash(npm run study:validate *), Bash(npm run skills:validate)
---

# Build Check

## Regla de Validación Visual

No usar Browser, Chrome ni Playwright desde esta skill salvo permiso explícito del usuario en el turno actual.

La validación visual por defecto la hace el usuario. Si el cambio parece requerir pantalla, cerrar indicando qué revisar visualmente y qué verificación ligera sí se ejecutó.

## Verificación Ligera

Usar sólo lo necesario según el alcance:

1. `git status --short` para ver si hay cambios ajenos en el alcance.
2. `git diff --check` para detectar whitespace o conflictos.
3. `git diff -- <rutas>` para revisar el cambio antes de cerrar.
4. `npm run study:validate` cuando el cambio toque estudios, textos bíblicos o skills de contenido.
5. `npm run skills:validate` cuando el cambio toque `.agents/skills/`.
6. `npm run test` cuando el cambio toque librerías, normalizadores o validadores.
7. `npm run build` cuando el cambio toque TypeScript, datos de artículos, componentes o rutas.
8. `npm run lint` si el cambio toca código con riesgo de reglas ESLint.

## Si hay errores

- Reportar archivo, línea y mensaje relevante.
- Corregir dentro del alcance autorizado si el usuario pidió implementar.
- Si el error viene de cambios ajenos o archivos fuera de alcance, no revertir; explicarlo.

## Cierre

Al finalizar, mencionar:
- rutas cambiadas.
- verificaciones ejecutadas.
- verificación visual pendiente para el usuario, si aplica.
