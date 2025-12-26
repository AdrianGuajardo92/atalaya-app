# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Git Policy

**NO hacer commit ni push automáticamente.** Esperar a que el usuario lo ordene explícitamente.

## Development Commands

```bash
npm run dev      # Start dev server on port 9000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture Overview

### Tech Stack
- **Next.js 16** with App Router
- **React 19** with Client Components (`'use client'`)
- **TypeScript 5** with strict mode
- **Tailwind CSS 4** for styling
- **Vercel KV** (Redis) for persistence
- **PWA** with next-pwa and Workbox

### Project Structure

```
app/
├── api/                  # REST API endpoints
│   ├── favorites/        # Bookmark management
│   ├── hidden-cards/     # Card visibility
│   ├── lsm/              # Mexican Sign Language texts
│   └── pdfs/             # PDF upload/management
├── page.tsx              # Main study page
└── layout.tsx            # Root layout with PWA config

components/
├── QuestionCard.tsx      # Primary study card (largest component)
├── TimelineView.tsx      # Timeline accordion view
├── SummaryView.tsx       # Print-friendly summary view
├── FlashCards.tsx        # Interactive flashcards with flip
├── BiblicalCards.tsx     # Scripture reference cards
├── ReviewQuestionCard.tsx
├── StudyHeader.tsx
├── Timer.tsx
├── PdfUploader.tsx
└── InstructionsButton.tsx

data/
├── atalaya-data.ts       # Article database (~4600 lines)
└── articles-config.ts    # Active articles configuration

types/
└── atalaya.ts            # Core TypeScript interfaces
```

### Data Flow

1. Articles stored in `data/atalaya-data.ts` indexed by year-month (e.g., "2025-10")
2. User selections persist to localStorage (article ID)
3. Favorites, LSM texts, hidden cards persist to Vercel KV via API routes
4. Components fetch/update via `/api/*` endpoints

### Key Type Interfaces

```typescript
interface Question {
  number: string;                    // ej: "1, 2" o "3"
  textEs: string;                    // Pregunta en español
  textLSM?: string;                  // Pregunta en LSM
  paragraphs: number[];              // Números de párrafos relacionados
  section?: string;                  // Subtítulo de sección en español
  sectionLSM?: string;               // Subtítulo de sección en LSM
  readText?: string;                 // Texto bíblico a leer (ej: "LEE Salmo 119:145")
  image?: string;                    // URL de imagen ilustrativa
  imageCaption?: string;             // Leyenda de la imagen
  answer?: string | string[];        // Oraciones clave (array para nuevos, string para antiguos)
  flashcards?: FlashCard[];          // Tarjetas didácticas
  biblicalCards?: BiblicalCard[];    // Tarjetas bíblicas
  reflectionQuestions?: string[];    // Preguntas de reflexión personal
  practicalApplications?: string[];  // Aplicaciones prácticas
  infographic?: string;              // URL de infografía (botón en UI)
}

interface Paragraph {
  number: number;
  content: string;                   // Contenido con textos bíblicos
  summary?: string;                  // Oraciones clave para el conductor
  image?: string;                    // URL de imagen ilustrativa
  imageCaption?: string;             // Leyenda de la imagen
}

interface ReviewQuestion {
  question: string;                  // Pregunta de repaso en español
  questionLSM?: string;              // Pregunta en LSM
  answer?: string | string[];        // Oraciones clave de la respuesta
  flashcards?: FlashCard[];
  biblicalCards?: BiblicalCard[];
}

interface FlashCard {
  question: string;
  answer: string;
  questionLSM?: string;
  answerLSM?: string;
}

interface BiblicalCard {
  reference: string;                 // ej: "Proverbios 28:13"
  purpose: string;                   // Por qué está este texto
  text: string;                      // Texto completo TNM
}

interface ArticleData {
  metadata: { articleNumber, week, month, year };
  song: string;
  title: string;
  titleLSM?: string;                 // Título en LSM
  biblicalText: string;              // Texto bíblico principal
  theme: string;                     // Tema del artículo
  questions: Question[];
  paragraphs: Paragraph[];
  reviewQuestions: ReviewQuestion[];
  finalSong: string;                 // Canción final
  articleSummary?: ArticleSummary;   // Resumen para comentario final
}

interface ArticleSummary {
  keyPoints: { order, statement, bibleReference?, paragraphSource? }[];
  centralIdea: string;               // Idea principal del artículo
}
```

### Component Patterns

- All components use `'use client'` directive
- State managed with React hooks (useState, useEffect)
- API calls use fetch with JSON responses
- Tailwind classes for all styling (no CSS modules)

### UI Features

**Modal de Párrafos:**
- Encabezado: "Párrafos X, Y" con botones copiar/cerrar
- Sección "RESUMEN" al inicio muestra `summary` de cada párrafo con su número
- Contenido completo de cada párrafo debajo
- Soporte para imágenes en párrafos

**Infografías:**
- Botón azul circular junto a la pregunta cuando tiene `infographic`
- Click abre modal con imagen ampliada
- Botón para copiar enlace de la infografía

**Secciones LSM:**
- Campo `sectionLSM` para subtítulos en Lengua de Señas Mexicana
- Se muestra junto al subtítulo en español

### API Endpoints

| Endpoint | GET | POST |
|----------|-----|------|
| `/api/favorites` | Get favorites for article | Toggle favorite |
| `/api/lsm` | Get LSM texts | Save LSM text |
| `/api/hidden-cards` | Get hidden cards | Toggle visibility |
| `/api/pdfs` | List PDFs | Upload PDF |

### PWA Configuration

Service worker caching strategies:
- API routes: NetworkFirst (24h TTL)
- Images: CacheFirst (30 days)
- Static assets: StaleWhileRevalidate

---

## Content Guidelines

### Formato de Respuestas (answer)

Las respuestas deben ser **arrays de oraciones clave**, no párrafos largos.

**Reglas:**
1. Cada oración = **una idea completa y directa**
2. Máximo **1-2 líneas** por oración
3. Lenguaje **simple y claro**
4. Incluir **referencias bíblicas** si son parte de la respuesta
5. Típicamente **3-5 oraciones** por respuesta

**Ejemplo CORRECTO:**
```typescript
answer: [
  "Nuestras oraciones pueden volverse monótonas por el ajetreo de la vida.",
  "Lo más importante para Jehová es que le hablemos desde el corazón.",
  "No hay que preocuparnos por usar palabras elegantes.",
  "Jehová escucha «el ruego de los mansos» porque se preocupa por nosotros."
],
```

**Ejemplo INCORRECTO:**
```typescript
// ❌ Párrafo largo difícil de leer rápido
answer: "Nuestras oraciones pueden volverse monótonas o superficiales por el ajetreo de la vida (haciendo solo oraciones breves) o porque nos sentimos indignos de contarle a Jehová todo lo que sentimos. Sin embargo, lo más importante para Jehová es que le hablemos desde el corazón y con humildad..."
```

### Tarjetas Didácticas - Reglas Estrictas

**Las tarjetas didácticas SÍ son:**
- ✅ Preguntas que profundizan en el **TEMA del párrafo**
- ✅ Preguntas sobre ejemplos o historias **mencionadas en el párrafo**
- ✅ Preguntas sobre aplicaciones prácticas **basadas en el párrafo**
- ✅ Detalles específicos del contenido que vale la pena recordar

**Las tarjetas didácticas NO son:**
- ❌ Repetición de la pregunta principal
- ❌ Datos bíblicos irrelevantes al tema (ej: "¿Quién escribió el Salmo X?")
- ❌ Información que no está en el contenido del párrafo
- ❌ Preguntas genéricas sobre textos citados

**Regla de oro:**
> "¿Esta pregunta me ayuda a entender o recordar algo específico del párrafo?"
> - SÍ → Es una buena tarjeta didáctica
> - NO → No debe ser una tarjeta didáctica

**Ejemplo CORRECTO** (Párrafo sobre ver a Jehová como amigo):
```
P: ¿Cómo debemos ver a Jehová para que sea más fácil hablarle?
R: Como un amigo fiel que quiere lo mejor para nosotros.

P: ¿Qué problemas enfrentó el salmista según el párrafo?
R: Dijeron mentiras de él y tuvo que cargar con sus imperfecciones.
```

**Ejemplo INCORRECTO:**
```
❌ "¿Quién escribió el Salmo 119?" - Irrelevante al tema
❌ "¿Qué nos ayudará a abrirle nuestro corazón?" - Es la pregunta principal
```
