---
name: build-check
description: Compila el proyecto y verifica que no haya errores de TypeScript o de build.
allowed-tools: Bash(npm run build), Bash(npm run lint)
---

# Verificar Build del Proyecto

Ejecuta estos pasos en orden:

1. Ejecuta `npm run build` para compilar el proyecto
2. Si hay errores de TypeScript, muestra cada error con su archivo y línea
3. Si hay errores de lint, ejecuta `npm run lint` y muestra los problemas
4. Si todo pasa correctamente, confirma que el build está limpio

Si hay errores:
- Muestra un resumen claro de cada error
- Sugiere cómo corregirlos
- Pregunta al usuario si quiere que los corrija automáticamente
