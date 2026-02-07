---
name: clean-code
description: Especialista en encontrar y eliminar código muerto, imports no usados, variables sin usar, diseños obsoletos y archivos innecesarios. Úsalo para limpiar el codebase.
disable-model-invocation: true
allowed-tools: Read, Edit, Glob, Grep, Bash(npm run build), Bash(npm run lint)
---

# Limpiador de Código

Busca y elimina código muerto en el proyecto.

## Qué buscar

1. **Imports no usados**: Variables o componentes importados que no se usan
2. **Variables sin usar**: Variables declaradas pero nunca referenciadas
3. **Funciones muertas**: Funciones definidas pero nunca llamadas
4. **Props no usados**: Props declarados en interfaces pero nunca pasados
5. **Archivos huérfanos**: Archivos que no son importados por nadie
6. **Estilos no usados**: Clases CSS o variables CSS sin uso
7. **Comentarios obsoletos**: Código comentado que ya no es relevante

## Proceso

1. Ejecuta `npm run lint` para detectar warnings de imports/variables no usados
2. Usa Grep para verificar que el código realmente no se usa en ningún lado
3. Elimina el código muerto
4. Ejecuta `npm run build` para verificar que nada se rompió

## Reglas

- NUNCA eliminar código que SÍ se usa, verificar siempre con Grep
- Si no estás seguro, pregunta al usuario antes de eliminar
- Ejecutar build después de cada eliminación significativa
- Reportar un resumen de todo lo eliminado al final
