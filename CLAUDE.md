# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Git Policy

**NO hacer commit ni push automáticamente.** Esperar a que el usuario lo ordene explícitamente.

## Comentarios Finales (ELIMINADO)

**NO crear `articleSummary` ni comentarios finales.** Esta funcionalidad fue eliminada. No agregar `ArticleSummary`, `keyPoints` ni `centralIdea` a los artículos.

## Ortografía y Acentos (OBLIGATORIO)

**SIEMPRE escribir con ortografía correcta en español, incluyendo todos los acentos.** Esto aplica a TODOS los textos en archivos de datos (`data/`), componentes, y cualquier contenido visible al usuario.

**Reglas:**
1. **Usar acentos correctamente** en todas las palabras: á, é, í, ó, ú, ü, ñ
2. **Signos de interrogación y exclamación** de apertura y cierre: ¿...? ¡...!
3. **Nombres propios bíblicos** con acentos: Jehová, Satanás, Moisés, Josué, Edén, etc.
4. **Verificar la ortografía** antes de guardar cualquier texto en español
5. **No usar transliteraciones sin acentos** (❌ "Jehova" → ✅ "Jehová", ❌ "Satanas" → ✅ "Satanás")

**Ejemplos:**
```
❌ "Jehova permitio que Job sufriera"
✅ "Jehová permitió que Job sufriera"

❌ "¿Por que permite Dios el sufrimiento?"
✅ "¿Por qué permite Dios el sufrimiento?"

❌ "Moises escribio este libro"
✅ "Moisés escribió este libro"
```

## Gestión de Artículos y Videos LSM (Regla Crítica)

**Cuando se elimine un artículo de estudio antiguo, ES OBLIGATORIO eliminar también todos los videos LSM asociados a ese artículo.**
- Los videos de la aplicación se alojan localmente y se envían a GitHub/Vercel (usualmente en la ruta `public/videos/`).
- Al borrar el archivo de datos principal del artículo (ej. `article-43.ts`), debes **SIEMPRE** buscar y eliminar los archivos de video `.mp4` correspondientes a esa semana.
- **Propósito:** Evitar que el repositorio crezca indefinidamente, ya que GitHub y Vercel tienen límites estrictos de almacenamiento y ancho de banda. No dejar videos "fantasma".

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
│   ├── favorites/        # Bookmark management (GET/POST/PUT)
│   ├── hidden-cards/     # Card visibility (GET/POST/PUT)
│   ├── lsm/              # Mexican Sign Language texts (GET/POST/PUT)
│   └── used-items/       # Tracking de items usados (GET/POST/PUT)
├── page.tsx              # Main study page
└── layout.tsx            # Root layout with PWA config

components/
├── QuestionCard.tsx      # Primary study card (largest component)
├── SummaryView.tsx       # Print-friendly summary view
├── FlashCards.tsx        # Interactive flashcards with flip
├── BiblicalCards.tsx     # Scripture reference cards
├── ReviewQuestionCard.tsx
├── StudyHeader.tsx
├── Timer.tsx             # Timer flotante con drag, edición de tiempo y dark mode
├── PlaylistModal.tsx     # Modal de playlist del artículo (canciones, párrafos, imágenes)
├── VideoLSM.tsx          # Reproductor de video LSM con controles (play/pause, velocidad, seek)
├── LsmBulkImport.tsx     # Importación masiva de traducciones LSM
├── ThemeProvider.tsx      # Proveedor de tema (dark/light)
├── ThemeToggle.tsx        # Toggle de tema
├── ConsoleFilter.tsx     # Filtro de consola
├── DevClickToSource.tsx  # Herramienta de desarrollo
└── InstructionsButton.tsx

data/
├── articles/             # Artículos individuales
│   ├── article-53.ts     # Artículo 53 (ejemplo actual)
│   └── index.ts          # Registro central de artículos (articlesMap + biblicalTextsMap)
├── articles-config.ts    # Configuración de artículos activos y mes por defecto
├── biblical-texts.ts     # Textos bíblicos compartidos
└── design-config.ts      # Configuración de diseño ejecutivo (umbral artículo 43+)

lib/
├── kv-store.ts           # Abstracción de almacenamiento KV (Vercel KV con fallback a memoria)
├── clipboard.ts          # Utilidad de copiar al portapapeles
└── generatePlaylist.ts   # Genera estructura de playlist desde datos del artículo

types/
└── atalaya.ts            # Core TypeScript interfaces

public/
└── videos/               # Videos LSM por párrafo (Parrafo_X.mp4, Parrafos_X_y_Y.mp4)
```

### Data Flow

1. Cada artículo vive en su propio archivo: `data/articles/article-XX.ts`
2. Los artículos se registran en `data/articles/index.ts` (articlesMap + biblicalTextsMap)
3. La configuración de artículos activos está en `data/articles-config.ts`
4. User selections persist to localStorage (article ID)
5. Favorites, LSM texts, hidden cards, used items persist to Vercel KV via API routes
6. Components fetch/update via `/api/*` endpoints

### Key Type Interfaces

```typescript
interface Question {
  number: string;                    // ej: "1, 2" o "3"
  textEs: string;                    // Pregunta en español
  textLSM?: string;                  // Pregunta en LSM ("" si no hay traducción)
  paragraphs: number[];              // Números de párrafos relacionados
  keyPoint?: string;                 // Idea principal (OBLIGATORIO en artículos nuevos)
  guidingQuestion?: string;          // Pregunta de respaldo (OBLIGATORIO en artículos nuevos)
  section?: string;                  // Subtítulo de sección en español
  sectionLSM?: string;               // Subtítulo de sección en LSM
  readText?: string;                 // Texto bíblico a leer (ej: "LEE Salmo 119:145")
  preview?: string;                  // Adelanto del tema para el conductor del estudio
  image?: string;                    // URL de imagen ilustrativa
  imageCaption?: string;             // Leyenda de la imagen
  answer?: string | string[];        // Oraciones clave (array para nuevos, string para antiguos)
  answerContext?: string[];          // Contexto adicional separado de la respuesta directa
  answerBullets?: string | string[]; // Puntos clave en formato bullets (editables en UI)
  answerBulletsTypes?: ('direct' | 'interlaced')[]; // Tipo de cada bullet (directo o entrelazado)
  flashcards?: string[] | FlashCard[]; // Tarjetas didácticas (string[] o objetos para retrocompatibilidad)
  biblicalCards?: BiblicalCard[];    // Tarjetas bíblicas
  reflectionQuestions?: string[];    // Preguntas de reflexión personal (editables en UI)
  practicalApplications?: string[];  // Aplicaciones prácticas (editables en UI)
  infographic?: string;              // URL de infografía (botón en UI)
}

interface Paragraph {
  number: number;
  content: string;                   // Contenido con textos bíblicos (SIN negritas)
  summary?: string;                  // Resumen con **negritas** para el conductor
  image?: string;                    // URL de imagen (solo visible en modal de párrafos)
  imageCaption?: string;             // Leyenda de la imagen
  videoLSM?: string;                 // URL del video LSM para este párrafo (ej: "/videos/Parrafo_3.mp4")
  note?: string;                     // Nota al pie del párrafo (información adicional)
}

interface ReviewQuestion {
  question: string;                  // Pregunta de repaso en español
  questionLSM?: string;              // Pregunta en LSM
  answer?: string | string[];        // Oraciones clave de la respuesta
  answerBullets?: string | string[]; // Puntos clave en formato bullets
  answerBulletsTypes?: ('direct' | 'interlaced')[]; // Tipo de cada bullet
  flashcards?: string[] | FlashCard[]; // Tarjetas didácticas (string[] o objetos)
  biblicalCards?: BiblicalCard[];
  image?: string;                    // URL de imagen ilustrativa
  imageCaption?: string;             // Leyenda de la imagen
  reflectionQuestions?: string[];    // Preguntas de reflexión personal
  practicalApplications?: string[];  // Aplicaciones prácticas
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
  text: string;                      // Texto completo TNM 2019
  reasoningQuestion?: string;        // Pregunta para razonar con la congregación
}

// Vista previa del artículo: conexión con el anterior + lo que veremos
interface ArticleOverview {
  previousArticle?: {
    number: number;
    topic: string;                   // Tema corto del artículo anterior
    keywords: string[];              // Palabras clave
  };
  whatWellSee: {
    section: string;                 // Título/tema de la sección
    keywords: string[];              // Palabras clave de esa sección
  }[];
}

interface AtalayaStudy {
  song: string;
  title: string;
  titleLSM?: string;                 // Título en LSM
  biblicalText: string;              // Texto bíblico principal
  theme: string;                     // Tema del artículo
  headerInfographic?: string;        // URL de infografía principal del artículo
  overview?: ArticleOverview;        // Vista previa: conexión con el anterior + lo que veremos
  questions: Question[];
  paragraphs: Paragraph[];
  reviewQuestions: ReviewQuestion[];
  finalSong: string;                 // Canción final
}

interface ArticleData extends AtalayaStudy {
  metadata: {
    articleNumber: number;
    week: string;                    // ej: "9-15 Mar"
    month: string;                   // ej: "Enero"
    year: number;                    // ej: 2026
  };
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
- El **contenido** del texto bíblico se exporta desde el archivo del artículo como `biblicalTextsXX`:

```typescript
// En data/articles/article-XX.ts
export const biblicalTextsXX: Record<string, { reference: string; text: string }[]> = {
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

- Se registra en `data/articles/index.ts` dentro de `biblicalTextsMap`
- Usar texto de la **Traducción del Nuevo Mundo (edición 2019)**
- La clave debe coincidir **exactamente** con el valor de `readText`

**Secciones LSM:**
- Campo `sectionLSM` para subtítulos en Lengua de Señas Mexicana
- Se muestra junto al subtítulo en español

**Traducciones LSM en Preguntas:**
- El usuario proporciona las traducciones LSM en el archivo `preguntas-LSM.md`
- El campo `textLSM` en cada pregunta contiene la traducción en Lengua de Señas Mexicana
- Agregar el campo `textLSM` a cada pregunta en `data/articles/article-XX.ts`

```typescript
// En data/articles/article-XX.ts - dentro del artículo correspondiente
{
  number: "1, 2",
  textEs: "¿Qué piensa Jehová de sus esfuerzos por cuidar de un ser querido?",
  textLSM: "JEHOVÁ ¿QUÉ PENSAR ESFUERZO TUYO CUIDAR PERSONA QUERER?",  // ✅ Agregar aquí
  paragraphs: [1, 2],
  // ...
}
```

- Las traducciones LSM se muestran en MAYÚSCULAS (convención de glosas)
- Se muestra debajo de la pregunta en español con el icono 🤟
- Si no hay `textLSM`, se muestra "AGREGAR TRADUCCIÓN" como placeholder editable

**Notas al pie de párrafo (note):**
- El campo `note` en párrafos contiene información adicional que aparece como nota al pie
- Se usa para aclaraciones, datos extra o explicaciones que complementan el contenido
- Ejemplo: aclarar qué pudo haber sido "la espina en la carne" de Pablo

**Answer Bullets (answerBullets):**
- Puntos clave adicionales que complementan la respuesta (`answer`)
- Editables en la UI por el usuario
- Cada bullet puede marcarse como `'direct'` o `'interlaced'` con `answerBulletsTypes`
- Se persisten en Vercel KV via `/api/lsm`

**Reflexiones y Aplicaciones (reflectionQuestions / practicalApplications):**
- Preguntas de reflexión personal y aplicaciones prácticas editables en la UI
- Disponibles tanto en `Question` como en `ReviewQuestion`
- Se persisten en Vercel KV via `/api/lsm`

### API Endpoints

| Endpoint | GET | POST | PUT |
|----------|-----|------|-----|
| `/api/favorites` | Get favorites for article | Toggle favorite | Update |
| `/api/lsm` | Get LSM texts | Save LSM text | Update LSM text |
| `/api/hidden-cards` | Get hidden cards | Toggle visibility | Update |
| `/api/used-items` | Get used items | Toggle used state | Update |

### Videos LSM por Párrafo

Cada párrafo del artículo puede tener un video en Lengua de Señas Mexicana (LSM). Los videos se almacenan localmente en `public/videos/` y se referencian en el campo `videoLSM` de cada párrafo.

**Convención de nombres:**
- Prefijo de artículo: `aXX_` (ej: `a54_`) para evitar conflictos entre artículos
- Párrafo individual: `aXX_Parrafo_X.mp4` (ej: `a54_Parrafo_3.mp4`)
- Párrafos compartidos: `aXX_Parrafos_X_y_Y.mp4` (ej: `a54_Parrafos_1_y_2.mp4`)

**REGLA: Párrafos agrupados en una misma pregunta DEBEN compartir un solo video.**
Cuando una pregunta cubre varios párrafos (ej: "1, 2"), se deben **unir los videos individuales** en uno solo con ffmpeg y ambos párrafos deben apuntar al mismo archivo:

```bash
# Instalar ffmpeg temporalmente
npm install --save-dev ffmpeg-static

# Unir videos (ejemplo: párrafos 1 y 2)
FFMPEG=$(node -e "console.log(require('ffmpeg-static'))")
echo "file 'a54_Parrafo_1.mp4'" > concat.txt
echo "file 'a54_Parrafo_2.mp4'" >> concat.txt
"$FFMPEG" -y -f concat -safe 0 -i concat.txt -c copy a54_Parrafos_1_y_2.mp4

# Eliminar los individuales y desinstalar ffmpeg
rm a54_Parrafo_1.mp4 a54_Parrafo_2.mp4
npm uninstall ffmpeg-static
```

**Referencia en datos (párrafos compartidos):**
```typescript
// Ambos párrafos apuntan al MISMO video
{ number: 1, content: "...", summary: "...", videoLSM: "/videos/a54_Parrafos_1_y_2.mp4" },
{ number: 2, content: "...", summary: "...", videoLSM: "/videos/a54_Parrafos_1_y_2.mp4" },
```

**Referencia en datos (párrafo individual):**
```typescript
{ number: 3, content: "...", summary: "...", videoLSM: "/videos/a54_Parrafo_3.mp4" },
```

**Componente VideoLSM.tsx:**
- Reproductor con controles: play/pause, velocidad (1x-2x), seek +-5s, reiniciar
- Toque con dos dedos en móvil para play/pause
- Auto-scroll al centro en móvil
- Modo compacto para sidebar
- Soporte dark mode

**REGLA CRÍTICA:** Al eliminar un artículo, SIEMPRE eliminar también sus videos de `public/videos/`.

### Sistema de Playlist

El `PlaylistModal.tsx` genera una lista ordenada de todos los elementos del artículo:
- Canciones (inicial y final)
- Título y texto bíblico
- Tema del artículo
- Párrafos con sus imágenes
- Textos bíblicos a leer (readText)

Se puede copiar al portapapeles para referencia rápida.

### Dark Mode

La app soporta modo oscuro/claro:
- `ThemeProvider.tsx` gestiona el tema con React Context
- `ThemeToggle.tsx` es el botón de toggle
- Tema persistido en localStorage
- Variables CSS en `globals.css` para ambos temas
- Todos los componentes (Timer, VideoLSM, modals, tarjetas) soportan dark mode

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
  "Nuestras oraciones pueden volverse **monótonas** por el ajetreo de la vida.",
  "Lo más importante para Jehová es que le hablemos **desde el corazón**.",
  "No hay que preocuparnos por usar **palabras elegantes**.",
  "Jehová escucha **«el ruego de los mansos»** porque se preocupa por nosotros."
],
```

**Ejemplo INCORRECTO:**
```typescript
// ❌ Párrafo largo difícil de leer rápido
answer: "Nuestras oraciones pueden volverse monótonas o superficiales por el ajetreo de la vida (haciendo solo oraciones breves) o porque nos sentimos indignos de contarle a Jehová todo lo que sentimos. Sin embargo, lo más importante para Jehová es que le hablemos desde el corazón y con humildad..."
```

### Negritas en Contenido (OBLIGATORIO para artículos nuevos)

**TODOS los artículos nuevos DEBEN usar negritas (`**texto**`) para resaltar palabras y frases clave.** Esto mejora la lectura rápida y ayuda al conductor del estudio a identificar los puntos principales de un vistazo.

#### Dónde aplicar negritas

| Campo | Usa Negritas | Propósito |
|-------|:---:|-----------|
| `answer` (respuestas) | ✅ | Conceptos clave de cada oración |
| `summary` (resumen de párrafo) | ✅ | Datos, nombres y eventos principales |
| `answerContext` | ✅ | Ideas que profundizan la respuesta |
| `reviewQuestions.answer` | ✅ | Conceptos finales de repaso |
| `content` (párrafo completo) | ❌ | El texto completo se deja sin negritas |
| `flashcard.answer` | ❌ | Las respuestas de flashcards son directas |

#### Qué resaltar en negritas

1. **Conceptos teológicos centrales**: `**la santificación del nombre de Jehová**`
2. **Citas o paráfrasis bíblicas**: `**'No hay nadie como él en la tierra'**`
3. **Números y datos específicos**: `**3.500 años**`, `**10 hijos**`, `**140 años**`
4. **Nombres propios importantes**: `**Satanás**`, `**Moisés**`, `**Job**`
5. **Cualidades o atributos**: `**amor**`, `**sabiduría**`, `**justicia**`, `**poder**`
6. **Acciones o decisiones clave**: `**se mantuvo fiel**`, `**adoraban ídolos**`
7. **Contrastes importantes**: `**Satanás, no Dios**`
8. **Comparaciones o analogías**: `**subir a lo alto de una montaña**`

#### Ejemplo CORRECTO con negritas

```typescript
// ✅ answer con negritas en palabras clave
answer: [
  "Nos ayuda a entender **por qué permite Dios el sufrimiento** y responde otras grandes preguntas de la vida.",
  "Trata la cuestión más importante: **la santificación del nombre de Jehová**.",
  "Nos enseña sobre las **cualidades de Dios**, como el **amor**, la **sabiduría** y la **justicia**.",
]

// ✅ summary con negritas en datos y nombres
summary: "**Satanás** afirmó que Job le daría la espalda a Jehová si sufría. Jehová le **permitió** ponerlo a prueba. El Diablo le quitó sus **rebaños**, mató a sus **10 hijos** y le envió una **terrible enfermedad**. Pero Job se mantuvo **leal**."

// ✅ reviewQuestions.answer con negritas
answer: [
  "Nos ayuda a entender quién es el principal causante del sufrimiento: **Satanás, no Dios**.",
  "Comprendemos mejor **por qué permite Dios el sufrimiento**.",
  "Aprendemos lo importantes que son para Jehová **la integridad y la fidelidad**.",
]
```

#### Ejemplo INCORRECTO

```typescript
// ❌ Sin negritas - difícil de escanear visualmente
answer: [
  "Nos ayuda a entender por qué permite Dios el sufrimiento.",
  "Trata la cuestión más importante: la santificación del nombre de Jehová.",
]

// ❌ Demasiadas negritas - pierde el propósito
answer: [
  "**Nos ayuda a entender por qué permite Dios el sufrimiento y responde otras grandes preguntas de la vida.**",
]

// ❌ Negritas en content del párrafo - NO hacer esto
content: "Job fue un hombre **fiel** que vivió en **Uz**..."  // El content va sin negritas
```

#### Regla de oro para negritas

> Pregúntate: "Si el conductor solo leyera las palabras en negrita, ¿captaría la idea principal?"
> - SÍ → Las negritas están bien aplicadas
> - NO → Falta resaltar el concepto clave o se resaltó lo incorrecto

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

### Textos Clave (biblicalCards) - OBLIGATORIO

**ABSOLUTAMENTE TODOS los textos bíblicos citados en los párrafos de cada pregunta deben tener un `biblicalCard` correspondiente.** Cero excepciones. Si un párrafo cita 5 textos bíblicos, la pregunta debe tener 5 biblicalCards.

#### Proceso paso a paso

1. **Leer el párrafo** (campo `content` en los datos del artículo)
2. **Extraer TODAS las referencias bíblicas** del texto:
   - Entre paréntesis: `(Sal. 113:5-8)`, `(Luc. 15:17-20)`
   - Con "lea": `(lea Salmo 62:8)`
   - Múltiples separadas por punto y coma: `(Gen. 3:4, 5; Job 1:11; Apoc. 12:10)`
3. **Buscar el texto TNM 2019** en jw.org para cada referencia
4. **Crear un `biblicalCard`** para cada una con texto real y propósito
5. **Verificar** que no falte ninguna referencia

#### Fuente de los textos bíblicos

Buscar en la **Traducción del Nuevo Mundo 2019** desde jw.org:
```
https://www.jw.org/es/biblioteca/biblia/biblia-estudio/libros/{libro}/{capítulo}/
```

Ejemplos de URLs:
- Génesis 3: `.../genesis/3/`
- 1 Timoteo 3: `.../1-timoteo/3/`
- 2 Samuel 22: `.../2-samuel/22/`
- Apocalipsis 12: `.../apocalipsis/12/`

#### Formato de cada biblicalCard

```typescript
{
  reference: "Libro capítulo:versículos",  // ej: "Génesis 3:4, 5"
  purpose: "Descripción breve de por qué es texto clave en este párrafo",
  text: "Texto exacto de la TNM 2019 (versículos clave)"
}
```

#### Reglas importantes

| Regla | Detalle |
|-------|---------|
| **Cobertura** | TODOS los textos del párrafo, sin excepción |
| **Texto** | TNM 2019 real, NUNCA resúmenes propios |
| **Pasajes largos** | Incluir solo versículos clave (ej: Núm. 12:1-15 → usar v.9, 10, 13) |
| **Orden** | Seguir el orden en que aparecen en el párrafo |
| **Purpose** | Frase breve que explique por qué este texto es relevante aquí |
| **Preguntas múltiples** | Si una pregunta cubre párrafos 6 y 7, incluir textos de AMBOS párrafos |

#### Ejemplo CORRECTO

Párrafo menciona: `Gen. 3:4, 5; Job 1:11; Apoc. 12:10`, `1 Juan 3:8`, `Hech. 1:7`

```typescript
biblicalCards: [
  {
    reference: "Génesis 3:4, 5",
    purpose: "Satanás esparció mentiras terribles sobre Dios",
    text: "La serpiente le dijo a la mujer: 'De ningún modo morirán. De hecho, Dios sabe que el mismo día en que coman de él se les abrirán los ojos y serán como Dios: conocerán lo bueno y lo malo'."
  },
  {
    reference: "Job 1:11",
    purpose: "Satanás acusó a los siervos fieles de Dios",
    text: "'Pero ahora extiende tu mano y golpea todo lo que tiene, y seguro que te maldice en tu misma cara'."
  },
  {
    reference: "Apocalipsis 12:10",
    purpose: "Satanás acusa a los siervos de Dios día y noche",
    text: "Ha sido arrojado hacia abajo el acusador de nuestros hermanos, que los acusa día y noche delante de nuestro Dios."
  },
  {
    reference: "1 Juan 3:8",
    purpose: "Jesús deshará las obras del Diablo",
    text: "El que practica el pecado se origina del Diablo... Para esto se manifestó el Hijo de Dios: para deshacer las obras del Diablo."
  },
  {
    reference: "Hechos 1:7",
    purpose: "Le corresponde a Jehová decidir cuándo actuar",
    text: "Él les dijo: 'No les corresponde a ustedes conocer los tiempos ni las épocas que el Padre ha colocado en su propia jurisdicción'."
  }
]
```

#### Ejemplo INCORRECTO

```typescript
// ❌ Solo 2 de 5 textos del párrafo
biblicalCards: [
  { reference: "1 Juan 3:8", purpose: "...", text: "..." },
  { reference: "Hechos 1:7", purpose: "...", text: "..." }
]
// Faltan Génesis 3:4,5 · Job 1:11 · Apocalipsis 12:10

// ❌ Resumen propio en vez de texto TNM
{ reference: "Números 12:1-15", text: "Miriam fue castigada con lepra y Moisés le rogó a Jehová que la curara." }
// Debe ser el texto real de la Biblia, no un resumen
```

---

## Diseño "Ejecutivo" - Sistema de Diseño Premium

A partir del **Artículo 43**, se implementa un diseño visual "Ejecutivo" que es más sobrio, profesional y elegante. Este diseño debe aplicarse a **todos los artículos nuevos (43 en adelante)**.

### Cuándo Aplicar el Diseño Ejecutivo

El diseño ejecutivo se aplica **automáticamente** a todos los artículos del **43 en adelante**. El umbral se configura en `data/design-config.ts`:

```typescript
export const designConfig = {
  executiveDesignStartsAt: 43,
};

export function isExecutiveDesign(articleNumber: number): boolean {
  return articleNumber >= designConfig.executiveDesignStartsAt;
}
```

| Componente | Condición | Variable |
|------------|-----------|----------|
| `StudyHeader.tsx` | `articleNumber >= 43` | `isArticle43` |
| `QuestionCard.tsx` | `articleNum >= 43` | `articleNum` (parseado de articleId) |
| `ReviewQuestionCard.tsx` | `articleNum >= 43` | `isArticle43` |

**No se requiere ningún cambio para nuevos artículos.** Al agregar el Artículo 44, 45, etc., automáticamente usarán el diseño ejecutivo.

### IMPORTANTE: Imágenes en Preguntas vs Párrafos

**Las imágenes ilustrativas van en las PREGUNTAS, no en los párrafos.**

| Campo | Ubicación | Uso |
|-------|-----------|-----|
| `question.image` | En el objeto de la pregunta | ✅ Imagen visible en la tarjeta de pregunta |
| `paragraph.image` | En el objeto del párrafo | Solo visible en el modal de párrafos |

**Ejemplo CORRECTO** - Agregar imagen a pregunta 10:
```typescript
{
  number: "10",
  textEs: "¿Por qué...? (Vea también la imagen).",
  paragraphs: [10],
  image: "https://i.imgur.com/XXXXX.png",  // ✅ Va aquí
  answer: [...]
}
```

**Ejemplo INCORRECTO** - NO agregar a párrafos:
```typescript
// ❌ Esto solo se verá en el modal de párrafos, no en la tarjeta
{ number: 10, content: "...", image: "https://..." }
```

### IMPORTANTE: Diseño Ejecutivo (Artículos 43+)

El diseño Ejecutivo tiene su **propio bloque de renderizado** separado en `QuestionCard.tsx`. Cuando se agreguen nuevas funcionalidades, deben implementarse en **AMBOS** bloques:

- El bloque Premium se activa cuando `articleNum >= 43`
- Buscar el condicional que separa ambos bloques de renderizado
- Si agregas una funcionalidad al diseño original, **TAMBIÉN debes agregarla al bloque Premium**

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
