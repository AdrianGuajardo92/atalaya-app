---
name: fix-bug
description: Especialista en encontrar y corregir bugs. Úsalo cuando algo no funcione correctamente, haya errores en la consola, la app no compile, o el comportamiento no sea el esperado.
disable-model-invocation: true
allowed-tools: Read, Write, Edit, Glob, Grep, Bash(npm run build), Bash(npm run lint)
---

# Corrector de Bugs

Sigue estos pasos para diagnosticar y corregir bugs:

1. **Entender el problema**: Lee la descripción del usuario y reproduce mentalmente el bug
2. **Localizar el código**: Usa Grep y Glob para encontrar los archivos relevantes
3. **Analizar la causa raíz**: Lee el código y entiende por qué falla
4. **Implementar la corrección**: Haz el cambio mínimo necesario para corregir el bug
5. **Verificar**: Ejecuta `npm run build` para asegurar que no hay errores nuevos

## Reglas

- Haz el cambio MÍNIMO necesario, no refactorices código que no está roto
- No agregues features nuevas mientras corriges un bug
- Si el bug está en `data/atalaya-data.ts`, verifica la ortografía con acentos
- Si el bug está en un componente, verifica que funcione tanto en diseño normal como ejecutivo (artículos 43+)
- Explica qué causaba el bug y cómo lo corregiste
