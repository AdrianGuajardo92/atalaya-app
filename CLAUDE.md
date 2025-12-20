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
├── FlashCards.tsx        # Interactive flashcards with flip
├── BiblicalCards.tsx     # Scripture reference cards
├── ReviewQuestionCard.tsx
├── StudyHeader.tsx
├── SummaryView.tsx
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
  number: string;
  textEs: string;
  textLSM?: string;
  paragraphs: number[];
  section?: string;
  answer?: string;
  flashcards?: FlashCard[];
  biblicalCards?: BiblicalCard[];
  infographic?: string;
}

interface Paragraph {
  number: number;
  content: string;
  summary?: string;  // Key ideas for conductor
}

interface ArticleData {
  metadata: { articleNumber, week, month, year };
  song: string;
  title: string;
  questions: Question[];
  paragraphs: Paragraph[];
  reviewQuestions: ReviewQuestion[];
}
```

### Component Patterns

- All components use `'use client'` directive
- State managed with React hooks (useState, useEffect)
- API calls use fetch with JSON responses
- Tailwind classes for all styling (no CSS modules)

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
