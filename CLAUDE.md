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
- **IMPORTANTE:** Las URLs de Imgur deben usar el formato directo:
  - ✅ Correcto: `https://i.imgur.com/XXXXX.png`
  - ❌ Incorrecto: `https://imgur.com/XXXXX`

**Textos Bíblicos (readText):**
- El campo `readText` en las preguntas indica qué texto bíblico leer (ej: "LEE Jeremías 12:1")
- El **contenido** del texto bíblico debe agregarse en `components/QuestionCard.tsx`
- Buscar el objeto `biblicalTexts` al inicio del archivo (~línea 24)
- Agregar entrada con la clave exacta del `readText`:

```typescript
// En components/QuestionCard.tsx
const biblicalTexts: Record<string, { reference: string; text: string }[]> = {
  // ... entradas existentes ...
  "LEE Jeremías 12:1": [
    { reference: "Jeremías 12:1", text: "Tú siempre eres justo, oh, Jehová..." }
  ],
  "LEE Salmo 42:1-4": [
    { reference: "Salmo 42:1", text: "Como el ciervo que brama..." },
    { reference: "Salmo 42:2", text: "Mi alma tiene sed de Dios..." },
    // ... un objeto por cada versículo
  ]
};
```

- Usar texto de la **Traducción del Nuevo Mundo (edición 2019)**
- La clave debe coincidir **exactamente** con el valor de `readText`

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

---

## Diseño "Ejecutivo" - Sistema de Diseño Premium

A partir del **Artículo 43**, se implementa un diseño visual "Ejecutivo" que es más sobrio, profesional y elegante. Este diseño debe aplicarse a **todos los artículos nuevos (43 en adelante)**.

### Cuándo Aplicar el Diseño Ejecutivo

El diseño ejecutivo se aplica **automáticamente** a todos los artículos del **43 en adelante**.

| Componente | Condición | Variable |
|------------|-----------|----------|
| `StudyHeader.tsx` | `articleNumber >= 43` | `isArticle43` |
| `QuestionCard.tsx` | `articleNum >= 43` | `isPremiumDesign` |
| `ReviewQuestionCard.tsx` | `articleNum >= 43` | `isArticle43` |

**No se requiere ningún cambio para nuevos artículos.** Al agregar el Artículo 44, 45, etc., automáticamente usarán el diseño ejecutivo.

### Paleta de Colores Ejecutivo

```
Fondos:
- Principal: white / bg-white
- Secundario: #F8FAFC / bg-slate-50
- Hover: #F1F5F9 / bg-slate-100

Textos:
- Principal: #1E293B / text-slate-800
- Secundario: #475569 / text-slate-600
- Terciario: #94A3B8 / text-slate-400

Bordes:
- Normal: #E2E8F0 / border-slate-200
- Hover: #CBD5E1 / border-slate-300
- Activo: #94A3B8 / border-slate-400

Acentos:
- Barra lateral: bg-gradient-to-b from-slate-300 to-slate-400
- Línea divisoria: bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200
```

### Tipografía Ejecutivo

```css
/* Títulos principales */
font-serif font-bold text-slate-800

/* Labels y etiquetas */
text-xs font-bold text-slate-400 uppercase tracking-[0.2em]

/* Texto de pregunta */
text-2xl md:text-3xl font-serif text-slate-800

/* Respuestas */
text-slate-700 leading-relaxed
```

### Componentes del Diseño Ejecutivo

#### 1. Contenedor Principal
```jsx
<div className="bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden relative">
  {/* Barra lateral decorativa */}
  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-300 to-slate-400"></div>

  {/* Contenido */}
</div>
```

#### 2. Cabecera de Pregunta
```jsx
<div className="p-8 pb-4">
  <span className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase">
    Pregunta {number}
  </span>
  <h2 className="text-2xl md:text-3xl font-serif text-slate-800 leading-tight mt-4">
    {texto}
  </h2>
</div>
```

#### 3. Sección LSM Editable
```jsx
<div className="px-8 py-4 bg-slate-50 border-y border-slate-100">
  <div className="flex items-center gap-2 mb-1">
    <span className="text-lg">🤟</span>
    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">LSM</span>
  </div>
  <p className="text-slate-700 font-medium text-lg uppercase">
    {textoLSM}
  </p>
</div>
```

#### 4. Respuestas con Numeración
```jsx
<div className="space-y-3">
  {answers.map((answer, index) => (
    <div key={index} className="flex gap-3">
      <span className="text-slate-400 font-mono text-sm flex-shrink-0 mt-0.5">
        [{index + 1}]
      </span>
      <p className="text-slate-700 leading-relaxed flex-1">
        {answer}
      </p>
    </div>
  ))}
</div>
```

#### 5. Línea Divisoria Decorativa
```jsx
<div className="my-6 flex items-center gap-4">
  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
  <span className="text-amber-400 text-sm">✦</span>
  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
</div>
```

#### 6. Subtítulos de Sección
```jsx
<div className="mb-8 mt-12">
  <div className="relative">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-slate-200"></div>
    </div>
    <div className="relative flex justify-center">
      <div className="bg-slate-800 px-8 py-4 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl font-bold text-white text-center uppercase tracking-[0.15em]">
          {section}
        </h2>
      </div>
    </div>
  </div>
</div>
```

#### 7. Badges de Información
```jsx
<div className="flex flex-wrap items-center justify-center gap-3">
  <span className="px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-bold text-sm shadow-sm">
    Artículo {number}
  </span>
  <span className="text-slate-300">•</span>
  <span className="px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-600 font-medium text-sm shadow-sm">
    {week}
  </span>
</div>
```

#### 8. Selector de Artículos
```jsx
<div className="relative">
  <select className="appearance-none pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-slate-200 cursor-pointer hover:border-slate-300 hover:shadow-md transition-all text-sm shadow-sm min-w-[320px]">
    {/* opciones */}
  </select>
  {/* Flecha SVG personalizada */}
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
    <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</div>
```

#### 9. Tarjetas (FlashCards / BiblicalCards)
```jsx
{/* Tarjeta con flip */}
<div className="min-h-[250px]" style={{ perspective: '1000px' }}>
  {/* Frente */}
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
    {/* contenido */}
  </div>
  {/* Reverso */}
  <div className="bg-slate-800 rounded-xl shadow-lg border border-slate-700 p-6">
    {/* contenido */}
  </div>
</div>
```

### Comparación Visual: Normal vs Ejecutivo

| Elemento | Diseño Normal | Diseño Ejecutivo |
|----------|---------------|------------------|
| Contenedor | `rounded-lg shadow-sm` | `rounded-xl shadow-lg` + barra lateral |
| Títulos | `font-semibold` | `font-serif font-bold` |
| Labels | `text-sm text-slate-600` | `text-xs uppercase tracking-[0.2em] text-slate-400` |
| Fondos | Azul/púrpura gradientes | Blanco/slate sobrios |
| Bordes | Colores variados | `border-slate-200` consistente |
| Sombras | Básicas | Suaves y profesionales |
| Hover | Cambio de color | Sombra + borde sutil |

### Animaciones del Diseño Ejecutivo

```css
/* En globals.css - ya incluidas */
@keyframes slideDown {
  from { opacity: 0; max-height: 0; }
  to { opacity: 1; max-height: 2000px; }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-slideDown { animation: slideDown 0.4s ease-out forwards; }
.animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
```

### Checklist para Nuevos Artículos con Diseño Ejecutivo

Al crear un nuevo artículo (44, 45, etc.) verificar:

- [ ] `StudyHeader.tsx`: Header con barra lateral y badges separados
- [ ] `QuestionCard.tsx`: Tipografía serif, numeración [1][2][3], línea divisoria ✦
- [ ] `ReviewQuestionCard.tsx`: Mismo estilo ejecutivo
- [ ] Subtítulos con fondo `slate-800` centrados
- [ ] Selector de artículos con flecha SVG personalizada
- [ ] LSM con fondo `slate-50` y borde sutil
- [ ] Tarjetas con `min-h-[250px]` y headers alineados
