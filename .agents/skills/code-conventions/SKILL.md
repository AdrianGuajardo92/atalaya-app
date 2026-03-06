---
name: code-conventions
description: Convenciones de código del proyecto atalaya-app. Referencia automática sobre patrones, estructura, tipos y estilo del proyecto. Úsalo cuando necesites entender cómo está organizado el proyecto o qué patrones seguir.
user-invocable: false
---

# Convenciones del Proyecto Atalaya-App

## Stack

- Next.js 16 con App Router
- React 19 con Client Components (`'use client'`)
- TypeScript 5 strict mode
- Tailwind CSS 4
- Vercel KV (Redis) para persistencia
- PWA con next-pwa

## Estructura de datos

### Artículos de estudio
- Cada artículo en su propio archivo: `data/articles/article-XX.ts`
- Configuración de artículos activos: `data/articles-config.ts`
- Datos legacy (artículos antiguos): `data/atalaya-data.ts`
- Interfaces: `types/atalaya.ts`

### Componentes principales
- `components/QuestionCard.tsx`: Componente principal (~2500 líneas, tiene dos bloques: premium y original)
- `components/ReviewQuestionCard.tsx`: Preguntas de repaso
- `components/BiblicalCards.tsx`: Tarjetas bíblicas con flip 3D
- `components/FlashCards.tsx`: Tarjetas didácticas

## Patrones de código

- Todos los componentes usan `'use client'`
- Estado con React hooks (useState, useEffect)
- Fetch con JSON para API calls
- Tailwind para todos los estilos (sin CSS modules)
- Variables CSS para colores del tema

## Diseño ejecutivo (artículos 43+)

- Se activa automáticamente cuando `articleNumber >= 43`
- `QuestionCard.tsx` tiene dos bloques de renderizado: premium (~línea 1026) y original (después)
- Cualquier nueva funcionalidad debe implementarse en AMBOS bloques
- Paleta: whites, slates, amber para acentos
- Tipografía: font-serif para títulos, uppercase tracking para labels

## Formato de texto en datos

- `**negritas**` en campos `answer` y `summary` para resaltar palabras clave
- Nombres propios, conceptos clave, citas textuales y cifras van en negrita
- Ortografía con acentos correctos: Jehová, Satanás, Moisés, Josué, Edén

## API Endpoints

- `/api/favorites`: GET/POST favoritos por artículo
- `/api/lsm`: GET/POST textos en Lengua de Señas Mexicana
- `/api/hidden-cards`: GET/POST tarjetas ocultas
- `/api/pdfs`: GET/POST archivos PDF

## Breakpoints responsive

- `sm`: 640px (grid 2 columnas para BiblicalCards)
- `md`: 768px (layouts de tablet)
- `lg`: 1024px (layouts de desktop)