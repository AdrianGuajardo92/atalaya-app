---
name: optimize
description: Especialista en refactorizar y optimizar código. Úsalo para dividir componentes grandes, extraer hooks, consolidar APIs, memoización y rendimiento.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash(npm run build)
---

# Optimizador de Código

## 1. Rendimiento de componentes

- Re-renders innecesarios → `useMemo`, `useCallback`
- Dependencias de `useEffect`
- Lazy loading de componentes pesados

## 2. Tamaño de bundle

- Imports dinámicos donde aplique
- Evitar importar librerías completas por una función
- Code splitting por rutas (App Router)

## 3. Estructura de componentes

Candidatos actuales por tamaño:
- `QuestionCard.tsx` (~1500 líneas) — principal candidato a dividir
- `CommentGuide.tsx` — lógica flip + comentarios

Extraer hooks reutilizables de lógica duplicada entre QuestionCard y ReviewQuestionCard.

## 4. Datos

- Artículos en `data/articles/study-YYYY-MM-DD.ts`; registro en `studiesMap` (`index.ts`)
- Solo cargar estudios activos vía `activeStudyIds` en `articles-config.ts`
- Textos bíblicos por estudio: `getBiblicalTextsForStudy(studyId)`

## Reglas

- `npm run build` después de cambios
- No romper funcionalidad existente
- Verificar light y dark mode tras cambios UI
- Explicar cada optimización y su impacto esperado
