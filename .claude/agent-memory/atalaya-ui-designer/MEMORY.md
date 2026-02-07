# UI Designer Agent Memory

## Dark Mode Migration

### Semantic Token System (globals.css)
- CSS variables defined in `:root` (light) and `.dark` (dark) blocks
- Registered in `@theme inline` block (~line 101) for Tailwind utility generation
- Token classes: `bg-surface`, `bg-surface-alt`, `bg-surface-raised`, `text-text-primary`, `text-text-secondary`, `text-text-tertiary`, `text-text-body`, `text-text-muted`, `border-border`, `border-border-strong`, `border-border-subtle`

### Migration Rules
- `bg-slate-800` dark accent blocks must NOT be migrated (keep as-is)
- `text-white` on dark backgrounds stays as-is
- Gradients use `from-[var(--gradient-from)]` / `to-[var(--gradient-to)]`
- Decorative lines with `via-slate-200` become `via-[var(--border)]`
- Green accent states need `dark:` variants: `dark:bg-green-950 dark:border-green-800 dark:text-green-400`
- Cancel button hover: `hover:bg-[var(--border)]` maps slate-200 hover nicely
- Textarea/input elements need explicit `bg-surface` for dark mode
- Number circles hover: `group-hover:bg-[var(--border)]` for slightly darker surface

### Components Migrated
- [x] `app/page.tsx` - Fully migrated (2026-02-07)
- [x] `StudyHeader.tsx` - Fully migrated (2026-02-07)
- [x] `TimelineView.tsx` - Both executive and original blocks migrated (2026-02-07)
- [x] `PdfUploader.tsx` - Modals, forms, overlays, file list, amber instructions (2026-02-07)
- [x] `SummaryView.tsx` - Cards, question headers, amber sections, footer (2026-02-07)
- [x] `Timer.tsx` - No changes needed (intentionally dark floating widget) (2026-02-07)
- [x] `ArticleSummaryCard.tsx` - Gradient bg, blue accents, idea central card (2026-02-07)
- [x] `InstructionsButton.tsx` - No changes needed (intentionally dark menu) (2026-02-07)

### Components Migrated (continued)
- [x] `FlashCards.tsx` - Card fronts use `bg-surface`, backs stay `bg-slate-800`; modal uses surface tokens; accent dark variants for red/blue (2026-02-07)
- [x] `ReviewQuestionCard.tsx` - Gradient bar via `--gradient-from/to`; amber icon dark variants; bullet dots use `bg-border-strong`; LSM blue hover dark variant (2026-02-07)
- [x] `BiblicalCards.tsx` - Card fronts `bg-surface`, backs `bg-slate-800`; emerald/blue/red dark variants for action buttons (2026-02-07)

### Components Fully Migrated (all complete)
- All components have been migrated to semantic tokens for dark mode.

### page.tsx Migration Details
- Page gradient: `from-slate-50 to-slate-100` -> `from-[var(--gradient-page-from)] to-[var(--gradient-page-to)]`
- Settings menu: `bg-white` -> `bg-surface`, `hover:bg-gray-50` -> `hover:bg-surface-alt`
- View mode buttons inactive: `bg-gray-100 text-gray-700 hover:bg-gray-200` -> `bg-surface-raised text-text-body hover:bg-surface-alt`
- Estudiar/Atalaya inactive buttons: `bg-white text-slate-600 border-slate-200` -> `bg-surface text-text-secondary border-border`
- Separator border-t: `border-gray-100` -> `border-border-subtle`
- Executive paragraph container: `bg-slate-50 border-slate-200` -> `bg-surface-alt border-border`
- Decorative bar: `from-slate-500 to-slate-400` -> `from-[var(--gradient-to)] to-[var(--gradient-from)]`
- Paragraph number badge: `bg-slate-200 text-slate-700` -> `bg-surface-raised text-text-body`
- Amber summary: added `dark:bg-amber-950 dark:border-amber-700 dark:text-amber-300 dark:text-amber-100`
- Violet review header: added `dark:from-violet-950 dark:to-violet-900 dark:text-violet-200`
- Orange preview: added `dark:bg-orange-950 dark:border-orange-800 dark:text-orange-200`
- Indigo progress bar: added `dark:from-indigo-400 dark:to-indigo-500`
- Disabled buttons: `bg-slate-200 text-slate-400` -> `bg-surface-raised text-text-tertiary`
- Progress bar background: `bg-slate-100` -> `bg-surface-raised`, `bg-slate-200` -> `bg-border`

### TimelineView.tsx Migration Details
- Executive block: lines 60-278; Original block: lines 283-462
- Intentionally dark elements kept as-is: modal header `bg-slate-800` (executive), blue gradient header (original)
- Buttons inside dark headers (`bg-slate-700 hover:bg-slate-600`) and label text (`text-slate-400`) kept
- Accent colors with `dark:` variants added for: emerald (pregunta), amber (LSM/songs), blue (summary), indigo (LSM original)
- Original design gradient fallback: `from-slate-100 to-slate-200` -> `from-surface-raised to-[var(--color-border)]`

### PdfUploader.tsx Migration Details
- Overlay: `bg-black/50` -> `bg-[var(--backdrop)]`, inner PDF viewer `bg-black/70` -> `bg-[var(--backdrop)]`
- Modal body: `bg-white` -> `bg-surface`
- Upload form area: `bg-slate-50` -> `bg-surface-alt`, `border-slate-300` -> `border-border-strong`
- File inputs: text `text-slate-600` -> `text-text-secondary`, name input `text-slate-900` -> `text-text-primary`
- Selected files container: `bg-white` -> `bg-surface`, `border-slate-200` -> `border-border`
- PDF list items: `bg-slate-50` -> `bg-surface-alt`, hover `hover:bg-slate-100` -> `hover:bg-surface-raised`
- Blue buttons: added `dark:bg-blue-700` / `dark:hover:bg-blue-600`
- Amber instructions box: `bg-amber-50 dark:bg-amber-950`, `border-amber-200 dark:border-amber-700`
- PDF viewer bg: `bg-slate-200` -> `bg-surface-raised`
- PDF viewer header `from-slate-700 to-slate-800` kept (intentionally dark)
- Disabled upload: `disabled:bg-slate-400` -> `disabled:bg-text-tertiary`

### SummaryView.tsx Migration Details
- Header gradient `from-blue-600 to-blue-700` kept as-is (intentionally colored)
- Action buttons: `bg-slate-100 hover:bg-slate-200 text-slate-700` -> `bg-surface-raised hover:bg-border text-text-body`
- Question cards: `bg-white border-slate-200` -> `bg-surface border-border`
- Question header: `bg-slate-50 border-slate-200` -> `bg-surface-alt border-border`
- Question text: `text-slate-800` -> `text-text-primary`
- Answers: `text-slate-700` -> `text-text-body`
- No answer: `text-slate-500` -> `text-text-muted`
- Section bar: amber `dark:bg-amber-950 dark:text-amber-200`
- Review questions: `bg-amber-50 dark:bg-amber-950`, `border-amber-200 dark:border-amber-700`
- Footer: `border-slate-200 text-slate-500` -> `border-border text-text-muted`

### ArticleSummaryCard.tsx Migration Details
- Gradient: `from-blue-50 to-indigo-50` kept + added `dark:from-blue-950 dark:to-indigo-950`
- Border: `border-blue-100` + `dark:border-blue-800`
- Title: `text-blue-900` + `dark:text-blue-100`
- Copy button border: `border-blue-200` + `dark:border-blue-700`
- List text: `text-gray-700` -> `text-text-body`
- Idea central bg: `bg-white/60` -> `bg-surface/60`
- Central idea text: `text-gray-800` -> `text-text-primary`
- Blue refs: `text-blue-600` + `dark:text-blue-400`

### Timer.tsx & InstructionsButton.tsx
- Both are intentionally dark widgets; no token changes needed
- Timer: `bg-slate-800` with `text-white` and darker slate button variants
- InstructionsButton: `bg-slate-700` menu with `hover:bg-slate-600` items

## Component Architecture Notes
- `QuestionCard.tsx` now has a SINGLE rendering path (~1467 lines). The dual-block Premium/Original design was consolidated in earlier refactors. The `articleNum` is still parsed but only used for conditional flashcard display (articleNum === 48 gets slide-down, others get flip cards).
- All components use `'use client'` directive
- Tailwind CSS 4 with `@theme inline` for custom tokens
- `--backdrop` CSS var is NOT registered in `@theme inline`, so must use `bg-[var(--backdrop)]` syntax

### Bold Text Dark Mode Fix (2026-02-07, updated)
- Problem: `<strong>` tags from `renderBoldText()` had same color as surrounding text in dark mode
- First attempt: `#ffffff` (pure white) -- FAILED: luminance step from slate-200 (#e2e8f0) too subtle
- Final solution: `#fcd34d` (amber-300) -- adds BOTH hue shift AND luminance change
  - vs #0f172a (surface): ~12.7:1 contrast (WCAG AAA)
  - vs #1e293b (surface-alt): ~10.2:1 contrast (WCAG AAA)
  - Amber family already in Executive Design (decorative dividers), so feels native
- Global CSS rule `.dark strong, .dark b { color: #fcd34d; }` in globals.css (~line 106)
- `renderBoldText()` exists in both `QuestionCard.tsx` (line 274) and `ReviewQuestionCard.tsx` (line 35)
- It renders plain `<strong>` tags with no class -- CSS rule catches all instances globally
- Safe because all other bold UI uses Tailwind `font-bold` class on `<span>`/`<h2>` etc., not `<strong>` tags
- `SummaryView.tsx` does NOT parse bold markdown (renders raw `{sentence}`) -- separate issue
- LESSON: For dark mode emphasis, luminance-only changes (white vs light gray) are often imperceptible. A hue shift is required for reliable scannability.

### QuestionCard.tsx Migration Details (2026-02-07)
- Modals (paragraphs, read text): `bg-slate-900/40` -> `bg-[var(--backdrop)]`, modal body `bg-white` -> `bg-surface`, headers `bg-slate-50` -> `bg-surface-alt`
- Section header: `border-slate-200` -> `border-border` (bg-slate-800 kept as intentional dark)
- LSM editing: blue borders get `dark:border-blue-800`, buttons get `dark:bg-blue-500`
- Main card: `bg-white border-slate-200` -> `bg-surface border-border`, gradient bar uses `var(--gradient-from/to)`
- Answer section: all text uses `text-text-body`/`text-text-tertiary` tokens
- Context area: `bg-slate-50 border-slate-200` -> `bg-surface-alt border-border`
- Flashcard slide-down: cards use `bg-surface border-border`, open badge stays `bg-slate-800 text-white`
- Infographic modal: bg-black/95 kept as-is, image container uses `bg-surface`, white/20 overlays kept
- Amber accents: added `dark:` variants for bg/text/border on summary section
- 8 intentional dark elements preserved (bg-slate-800 buttons, headers, badges)
