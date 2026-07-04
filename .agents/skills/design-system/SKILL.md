---
name: design-system
description: Sistema de diseño del proyecto atalaya-app. Úsalo al crear o modificar componentes visuales, modales, tarjetas, botones, dark mode o cualquier UI. Referencia obligatoria para consistencia visual.
---

# Sistema de Diseño — Atalaya App

Patrones extraídos de los componentes reales. Para clases exactas, consulta [patterns.md](patterns.md).

## Reglas fundamentales

1. **SIEMPRE** revisar componentes existentes antes de crear algo nuevo
2. Usar **tokens CSS semánticos** (`bg-surface`, `text-text-primary`) — no clases slate/white fijas salvo acentos puntuales
3. **Dark mode:** todos los componentes deben verse bien con `.dark` (`ThemeProvider`)
4. Artículos 43+ activan estilo ejecutivo vía `isExecutiveDesign()` en [`data/design-config.ts`](../../data/design-config.ts); la UI principal ya usa tokens unificados en [`QuestionCard.tsx`](../../components/QuestionCard.tsx) (un solo bloque de render)
5. Tarjetas bíblicas con flip 3D viven en [`CommentGuide.tsx`](../../components/CommentGuide.tsx), no en un componente `BiblicalCards.tsx` separado

## Tokens CSS (fuente: `app/globals.css`)

| Token | Clase Tailwind | Uso |
|-------|----------------|-----|
| `--surface` | `bg-surface` | Fondo principal |
| `--surface-alt` | `bg-surface-alt` | Fondos secundarios, headers |
| `--surface-raised` | `bg-surface-raised` | Hover, elevación |
| `--text-primary` | `text-text-primary` | Títulos |
| `--text-body` | `text-text-body` | Cuerpo |
| `--text-secondary` | `text-text-secondary` | Secundario |
| `--text-tertiary` | `text-text-tertiary` | Labels, hints |
| `--border` | `border-border` | Bordes normales |
| `--border-strong` | `border-border-strong` | Bordes activos |

Dark mode: paleta cálida (`#262624`, `#D97757`, `#C2C0B6`). Negritas en `.dark strong` usan `#E8A68B`.

## Tipografía

| Uso | Fuente / clases |
|-----|-----------------|
| UI general | Geist (`--font-geist-sans`) |
| Títulos serif | Playfair Display (`font-serif`, `--font-playfair`) |
| Labels | `text-xs font-bold text-text-tertiary uppercase tracking-[0.2em]` |
| LSM | `font-medium text-lg uppercase` |
| Texto bíblico en tarjetas / CommentGuide | `text-lg italic font-serif text-text-secondary` |
| Texto bíblico en `BibleVerseModal` (refs del recuadro) | `font-sans text-lg md:text-xl text-text-body` — legible, no serif |

## Acentos decorativos (ejecutivo)

- Barra lateral: `w-1 bg-gradient-to-b from-[var(--gradient-from)] to-[var(--gradient-to)]`
- Línea divisoria: gradiente amber + símbolo `✦`
- Subtítulos de sección: fondo oscuro, texto blanco, uppercase

## Componentes clave

| Componente | Notas |
|------------|-------|
| `QuestionCard.tsx` | Tarjeta principal; tokens semánticos; expansión `animate-slideDown` |
| `ReviewQuestionCard.tsx` | Mismo lenguaje visual |
| `CommentGuide.tsx` | Flip cards bíblicas `h-[250px]`, grid `md:grid-cols-2` |
| `AnswerItemsList.tsx` | Respuestas principales/secundarias; `followUp` queda oculto en la UI |
| `VideoLSM.tsx` | Reproductor LSM (compact + full) |
| `ThemeToggle.tsx` | Toggle dark/light |
| `StudyHeader.tsx` | Header del estudio |
| `ParagraphSidebarBox.tsx` | Recuadros `boxSupplement`; orden PDF: tras `question.image` |

## Recuadros de estudio (boxSupplement)

Orden visual obligatorio cuando hay imagen de pregunta: **imagen → recuadro** (como en el PDF de La Atalaya).

- **Datos:** `question.image` + `paragraph.sidebar` (campos separados; no mezclar con `note`)
- **Colocación:** [`lib/sidebarPlacement.ts`](../../lib/sidebarPlacement.ts)
  - Con `question.image` → `ParagraphSidebarBox` en tarjeta, tras la imagen (`className="mt-0"`)
  - Sin imagen → recuadro en flujo del párrafo (modal / navegación inline)
  - Con imagen → **no** bloque suelto del recuadro tras Resumen en modal
- **Render:** [`components/ParagraphSidebarBox.tsx`](../../components/ParagraphSidebarBox.tsx) + [`lib/formatSidebarRichText.tsx`](../../lib/formatSidebarRichText.tsx)
- **Prohibido:** `formatContent` / `renderBoldText` de párrafos para recuadros
- **Marcado en datos:** `**negrita**`, `***negrita+cursiva***` (prefijos de lista); importador: `rich_text_content()` en `parse_box_supplement`
- **Refs bíblicas:** `text-[#006FB3] dark:text-sky-400 font-medium` en paréntesis detectados
- **Estilos caja:** `border-t-4 border-cyan-900`, `bg-amber-50 dark:bg-[#332520]`, título `text-cyan-900 dark:text-cyan-300`

Ver clases exactas en [patterns.md](patterns.md) → «Recuadro de estudio».

## Animaciones (`app/globals.css`)

- `animate-fadeIn` — overlays genéricos (0.2s)
- `paragraphs-modal-backdrop` / `paragraphs-modal-panel` — modal de párrafos (~0.28s apertura desktop)
- `animate-slideDown` — expansión de secciones en QuestionCard/ReviewQuestionCard (0.4s)
- `animate-slideUp` — entradas suaves
- Hover: `transition-shadow duration-300`; click: `active:scale-95`

## Modales de estudio

### Modal de párrafos

- Backdrop: `paragraphs-modal-backdrop` + clic fuera cierra
- Panel: `paragraphs-modal-panel`
- No duplicar recuadro tras Resumen si ya está en tarjeta (`sidebarPlacement`)

### BibleVerseModal (refs del recuadro)

- Componente inline en `QuestionCard.tsx`
- Tipografía **sans** (`font-sans text-lg md:text-xl`) para lectura rápida
- Overlay con `onClick={onClose}` — clic fuera cierra
- Se abre al clic en refs azules de `formatSidebarRichText`

## Modal genérico (patrón)

```
Overlay: fixed inset-0 z-50 backdrop + animate-fadeIn
Contenedor: bg-surface rounded-xl shadow-2xl border border-border
Header: bg-surface-alt border-b border-border-subtle
Footer: bg-surface-alt border-t border-border-subtle
```

## Regla al agregar funcionalidad UI

Implementar en los componentes que realmente renderizan la feature (normalmente `QuestionCard.tsx` y `ReviewQuestionCard.tsx` si aplica a ambos). Verificar **light y dark mode**.
