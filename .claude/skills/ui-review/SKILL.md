---
name: ui-review
description: Especialista en revisar la interfaz de usuario, diseño visual, responsividad móvil, dark mode y accesibilidad. Úsalo para auditar la UI, encontrar problemas visuales o verificar dispositivos (Samsung Galaxy Z Fold 6, iPhone, tablets).
---

# Revisor de UI

Revisa la interfaz del proyecto. Consulta también `.agents/skills/design-system/SKILL.md`.

## 1. Diseño visual

- Tokens CSS semánticos (`bg-surface`, `text-text-primary`, `border-border`)
- **Dark mode:** verificar con `ThemeToggle` — paleta cálida en `.dark`
- Tipografía: Geist (UI) + Playfair Display (`font-serif` en títulos)
- Espaciado, sombras y bordes coherentes
- Acentos amber en líneas divisorias y followUps de respuestas

## 2. Responsividad

Breakpoints Tailwind:
- `sm` (640px): layouts móvil grande
- `md` (768px): tablet; CommentGuide grid 2 columnas
- `lg` (1024px): desktop

Dispositivos clave:
- **Samsung Galaxy Z Fold 6**: ~674px CSS (entre sm y md)
- Modales usables en móvil; cierre con clic en backdrop (párrafos + `BibleVerseModal`)
- Fuentes legibles en pantallas pequeñas
- `VideoLSM` compact en tarjetas de pregunta

## 3. Diseño ejecutivo (artículos 43+)

- Barra lateral con gradiente en tarjetas
- Labels uppercase con `tracking-[0.2em]`
- Línea divisoria con símbolo `✦`
- CommentGuide flip cards: `h-[250px]`, grid `md:grid-cols-2`
- Subtítulos con fondo oscuro centrado
- Expansión de secciones: `animate-slideDown`

## 4. Componentes a revisar

| Componente | Qué verificar |
|------------|---------------|
| `QuestionCard.tsx` | Tokens light/dark, LSM, videos, imágenes, modal párrafos, `BibleVerseModal` |
| `ParagraphSidebarBox.tsx` | Orden imagen→recuadro, refs azules clicables, dark mode amber/cyan |
| `ReviewQuestionCard.tsx` | Consistencia con QuestionCard |
| `CommentGuide.tsx` | Flip cards, comentarios, accesibilidad |
| `StudyHeader.tsx` | Badges, selector de artículos |
| `VideoLSM.tsx` | Controles, modo compact |
| `Timer.tsx` | Drag, dark mode |

## 5. Accesibilidad

- Contraste suficiente (especialmente dark mode y negritas `#E8A68B`)
- Textos alternativos en imágenes
- Flip cards con `role="button"` y `aria-pressed` en CommentGuide
- Botones touch ≥44×44px

## Formato del reporte

Presentar hallazgos por severidad:
- **Crítico**: Problemas que rompen la funcionalidad
- **Mayor**: Problemas visuales notables
- **Menor**: Mejoras opcionales de pulido
