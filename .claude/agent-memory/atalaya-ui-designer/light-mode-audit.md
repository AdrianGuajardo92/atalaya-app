# Light Mode Audit Findings (2026-02-07)

## Issues Found: 11 total (3 Alta, 5 Media, 3 Baja)

### Alta Priority
1. **Banner "QUE RESPONDERIAS?"** - Uses violet gradient (from-violet-50 to-violet-100) instead of Executive Design slate. File: `app/page.tsx` line 525. Fix: Replace with bg-slate-800 centered badge pattern.
2. **"Ocultar Respuesta" button** - bg-surface on bg-surface-alt is invisible (white-on-white). Files: QuestionCard.tsx:1173, ReviewQuestionCard.tsx:186. Fix: Use bg-surface-raised.
3. **Scroll progress circle** - Background circle uses text-slate-600 in light mode (too dark). File: page.tsx:322. Fix: text-slate-200 dark:text-slate-600.

### Media Priority
4. **Amber divider lines** - to-amber-300/50 too subtle in light mode. Fix: bump to /70.
5. **LSM placeholder text** - text-text-tertiary (#94a3b8) fails WCAG AA. Fix: text-text-muted (#64748b).
6. **Context numbering [1][2]** - Uses text-border-strong (slate-300 for text = ~1.8:1 contrast). Fix: text-text-tertiary.
7. **ArticleSummaryCard** - Blue/indigo palette outside Executive Design. Optional fix.
8. **Final song gradient** - from-surface-alt to-surface is imperceptible (~2pts luminance). Fix: solid bg-surface-alt.

### Baja Priority
9. **Bullet hover** - Uses blue-500 instead of slate palette.
10. **LSM save buttons** - Uses blue-600 instead of slate-800.
11. **Section LSM edit borders** - Uses blue-200/500 borders.

## Color Contrast Notes (Light Mode)
- text-text-tertiary (#94a3b8) vs white: ~2.8:1 (FAILS WCAG AA)
- text-text-muted (#64748b) vs white: ~4.6:1 (PASSES WCAG AA)
- text-border-strong (#cbd5e1) as text vs surface-alt (#f8fafc): ~1.8:1 (FAILS badly)
- amber-300/50 on white: barely visible
- amber-300/70 on white: visible but subtle (good for decorative)
