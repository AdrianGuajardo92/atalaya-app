# Patrones Tailwind — Atalaya App

Usar tokens semánticos de `app/globals.css`. Evitar `bg-white` / `text-slate-800` en componentes nuevos.

## Contenedor tarjeta de pregunta

```
bg-surface border border-border rounded-xl shadow-lg overflow-hidden relative
+ barra lateral: absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--gradient-from)] to-[var(--gradient-to)]
```

## Cabecera de pregunta

```
Label: text-xs font-bold text-text-tertiary tracking-[0.2em] uppercase
Título: text-2xl md:text-3xl font-serif text-text-primary leading-tight
```

## Sección LSM

```
px-8 py-4 bg-surface-alt border-y border-border-subtle
Texto LSM: text-text-body font-medium text-lg uppercase
```

## Respuestas numeradas

```
Número: text-text-tertiary font-mono text-sm → [1] [2] [3]
Texto: text-text-body leading-relaxed
```

## Línea divisoria decorativa

```
flex items-center gap-4
Líneas: flex-1 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent
Centro: text-amber-400 text-sm → ✦
```

## Subtítulo de sección

```
Contenedor: bg-slate-800 dark:bg-surface-raised px-8 py-4 rounded-lg shadow-lg
Texto: text-xl md:text-2xl font-bold text-white dark:text-text-primary uppercase tracking-[0.15em]
```

## Modal

```
Overlay: fixed inset-0 bg-[var(--backdrop)] backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn
Contenedor: bg-surface rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col overflow-hidden border border-border
Header: p-5 border-b border-border-subtle flex justify-between items-center bg-surface-alt
Footer: p-4 border-t border-border-subtle bg-surface-alt flex justify-end gap-3
```

## Botones

```
Primario: bg-slate-800 dark:bg-surface-raised border border-border-strong text-white dark:text-text-primary hover:opacity-90 rounded-lg px-4 py-2 font-medium text-sm shadow-sm
Secundario: bg-surface border border-border-strong text-text-body hover:bg-surface-alt rounded-lg px-4 py-2 font-medium shadow-sm
Pill: px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border border-border
```

## CommentGuide — tarjeta bíblica flip

```
Grid: grid grid-cols-1 md:grid-cols-2 gap-4
Contenedor: relative h-[250px] cursor-pointer (perspective: 1000px)
Frente: absolute w-full h-[250px] bg-surface rounded-xl shadow-sm border border-border
Reverso: absolute w-full h-[250px] bg-slate-800 dark:bg-surface-raised rounded-xl shadow-lg border border-border-strong
Flip: transition-transform duration-700 ease-in-out (rotateY 180deg)
```

## AnswerItemsList

```
Principales: numeración [n], text-lg text-text-body
Secundarias: text-lg text-text-secondary, badge "Detalle"
followUp: datos de respaldo, oculto en la UI del estudio
Detalles secundarios: siempre visibles
Click para marcar usado: ✅ en QuestionCard
```

## Badges (StudyHeader)

```
px-4 py-1.5 bg-surface border border-border rounded-lg text-text-body font-bold text-sm shadow-sm
Separador: text-text-tertiary → •
```

## Expansión de sección

```
animate-slideDown
```

Definida en `app/globals.css` (0.4s ease-out, max-height + opacity).

## Recuadro de estudio (ParagraphSidebarBox)

Orden en tarjeta: `question.image` → recuadro(s) → respuestas. Sin imagen: recuadro en flujo del párrafo (modal).

**Colocación:** `lib/sidebarPlacement.ts` — con `question.image`, no mostrar recuadro suelto tras Resumen en modal.

**Formateo:** [`lib/formatSidebarRichText.tsx`](../../lib/formatSidebarRichText.tsx) — **no** usar `formatContent` de párrafos ni `renderBoldText` de `QuestionCard`. Referencias `(Filip. 1:10)` son botones azules clicables cuando `QuestionCard` pasa `onScriptureClick` + `resolveScriptureRef` (modal `BibleVerseModal`).

```
Contenedor: mt-4 rounded-lg border-t-4 border-cyan-900 dark:border-cyan-600 bg-amber-50 dark:bg-[#332520] px-4 py-4
Título: text-base md:text-lg font-bold text-cyan-900 dark:text-cyan-300
Intro/items: text-sm text-text-body dark:text-[#C2C0B6], lista decimal ml-5 space-y-3
Prefijo de ítem (listItem): font-bold italic text-text-primary (ej. "Jehová.")
Referencias bíblicas: text-[#006FB3] dark:text-sky-400 font-medium
Tras imagen en tarjeta: className mt-0 en el recuadro
Importador: rich_text_content → ***texto*** para bold+italic en datos
```

Reglas en `lib/sidebarPlacement.ts`: con `question.image`, el recuadro va en la tarjeta; sin imagen, en el flujo del párrafo (modal/navegación).

## Modal de párrafos

```
Backdrop: paragraphs-modal-backdrop (animate-fadeIn ~0.28s) — onClick cierra
Panel: paragraphs-modal-panel
```

## BibleVerseModal (refs clicables del recuadro)

```
Overlay: fixed inset-0 z-[60] — onClick={onClose}
Contenido: bg-surface rounded-xl shadow-2xl border border-border p-6 md:p-8
Texto versículo: font-sans text-lg md:text-xl text-text-body leading-relaxed
Referencia: text-sm font-bold text-text-tertiary uppercase tracking-wider
```
