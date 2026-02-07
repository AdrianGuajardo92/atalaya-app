---
name: optimize
description: Especialista en refactorizar y optimizar el código de la app. Úsalo para dividir componentes grandes, extraer hooks reutilizables, consolidar llamadas API, agregar memoización y mejorar el rendimiento.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash(npm run build)
---

# Optimizador de Código

Analiza y optimiza el código del proyecto. Enfócate en:

## 1. Rendimiento de componentes

- Identificar re-renders innecesarios
- Agregar `useMemo` y `useCallback` donde sea necesario
- Verificar dependencias de `useEffect`
- Lazy loading de componentes pesados

## 2. Tamaño de bundle

- Identificar imports grandes que podrían ser dinámicos
- Verificar que no se importen librerías completas cuando solo se usa una función
- Code splitting por rutas

## 3. Estructura de componentes

- Si un componente tiene más de 500 líneas, sugerir dividirlo
- Extraer hooks reutilizables de lógica duplicada
- Consolidar llamadas API similares

## 4. Datos

- `data/atalaya-data.ts` es el archivo más grande (~4600 líneas)
- Verificar que no se carguen artículos innecesarios en memoria
- Optimizar búsquedas en los datos

## Reglas

- SIEMPRE ejecutar `npm run build` después de cambios para verificar
- No romper funcionalidad existente
- Mantener compatibilidad con diseño normal y ejecutivo (artículos 43+)
- Explicar cada optimización y su impacto esperado
