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

## Estructura clave

- `data/atalaya-data.ts`: Base de datos de artículos (~4600 líneas)
- `data/articles-config.ts`: Configuración de artículos activos
- `components/QuestionCard.tsx`: Componente principal más grande
- `types/atalaya.ts`: Interfaces TypeScript

## Patrones de código

- Todos los componentes usan `'use client'`
- Estado con React hooks (useState, useEffect)
- Fetch con JSON para API calls
- Tailwind para todos los estilos (sin CSS modules)
- Variables CSS para colores del tema

## Diseño ejecutivo (artículos 43+)

- Se activa automáticamente cuando `articleNumber >= 43`
- `QuestionCard.tsx` tiene dos bloques de renderizado: premium (línea ~1026) y original (después)
- Cualquier nueva funcionalidad debe implementarse en AMBOS bloques
- Paleta: whites, slates, amber para acentos
- Tipografía: font-serif para títulos, uppercase tracking para labels

## Ortografía

SIEMPRE acentos correctos en español: á, é, í, ó, ú, ü, ñ
Nombres bíblicos: Jehová, Satanás, Moisés, Josué, Edén, etc.

## API Endpoints

- `/api/favorites`: GET/POST favoritos
- `/api/lsm`: GET/POST textos LSM
- `/api/hidden-cards`: GET/POST tarjetas ocultas
- `/api/pdfs`: GET/POST PDFs
