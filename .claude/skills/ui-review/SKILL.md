---
name: ui-review
description: Especialista en revisar la interfaz de usuario, diseño visual, responsividad móvil y accesibilidad. Úsalo para auditar la UI, encontrar problemas visuales, o mejorar la experiencia de usuario.
allowed-tools: Read, Glob, Grep
---

# Revisor de UI

Revisa la interfaz de usuario del proyecto. Analiza:

## 1. Diseño visual

- Consistencia con la paleta de colores (whites, slates, amber para ejecutivo)
- Tipografía correcta (font-serif para títulos, Inter para cuerpo)
- Espaciado y alineación
- Sombras y bordes coherentes

## 2. Responsividad

- Verificar clases responsive de Tailwind (sm:, md:, lg:)
- Comprobar que modales funcionen en móvil
- Verificar que el sidebar sea overlay en móvil
- Tamaños de fuente legibles en pantallas pequeñas

## 3. Diseño ejecutivo (artículos 43+)

- Barra lateral decorativa con gradiente slate
- Labels uppercase con tracking
- Línea divisoria con símbolo ✦
- Tarjetas con min-h-[250px]
- Subtítulos con fondo slate-800

## 4. Accesibilidad

- Contraste de colores suficiente
- Textos alternativos en imágenes
- Navegación con teclado
- Tamaños de botones adecuados para touch

## Formato del reporte

Presenta los hallazgos organizados por severidad:
- **Crítico**: Problemas que rompen la funcionalidad
- **Mayor**: Problemas visuales notables
- **Menor**: Mejoras opcionales de pulido
