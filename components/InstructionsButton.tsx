'use client';

import { useState, useEffect, useRef } from 'react';
import { copyToClipboard } from '@/lib/clipboard';

export default function InstructionsButton() {
  const [showCopied, setShowCopied] = useState(false);
  const [showCopiedStudy, setShowCopiedStudy] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const promptInstructions = `# Instrucciones - Aplicación Atalaya

App Next.js para dirigir estudios de La Atalaya en español con apoyo LSM.

## Fuente de verdad

Antes de editar, lee \`AGENTS.md\` y la skill que corresponda:
- \`.agents/skills/article-editor/SKILL.md\` para artículos.
- \`.agents/skills/respuestas-conductor/SKILL.md\` para \`answers\`.
- \`.agents/skills/como-comentarlo/SKILL.md\` para \`commentSuggestion\`.
- \`.agents/skills/box-supplement/SKILL.md\` para recuadros laterales.
- \`.agents/skills/lsm-translations/SKILL.md\` para glosas LSM.

## Archivos actuales

- Un estudio por archivo: \`data/articles/study-YYYY-MM-DD.ts\`.
- Registro: \`data/articles/index.ts\` con \`studiesMap\`, \`biblicalTextsMap\` y \`getBiblicalTextsForStudy()\`.
- Activación: \`data/articles-config.ts\` con \`activeStudyIds\` y \`defaultStudyId\`.
- Tipos: \`types/atalaya.ts\`.

No uses modelos legacy ni campos antiguos como camino nuevo.

## Modelo de datos

\`\`\`typescript
export const studyYYYYMMDD: ArticleData = {
  metadata: {
    studyId: "YYYY-MM-DD",
    articleNumber: 44,
    week: "Semana del estudio",
    month: "Mes",
    year: 2026,
  },
  song: "Canción 1",
  title: "Título",
  titleLSM: "GLOSA LSM",
  biblicalText: "Texto bíblico principal",
  theme: "Tema",
  questions: [
    {
      number: "1, 2",
      textEs: "¿Pregunta?",
      textLSM: "GLOSA LSM",
      paragraphs: [1, 2],
      readText: "LEE Salmo 119:145",
      answers: [
        {
          text: "Una respuesta con **concepto clave**.",
          followUp: "¿Qué detalle ayuda a verlo?",
        },
        {
          text: "Un detalle del párrafo con **valor para conducir**.",
          secondary: true,
        },
      ],
      commentSuggestion: "Yo podría comentar que...",
      biblicalCards: [],
    },
  ],
  paragraphs: [
    {
      number: 1,
      content: "Texto completo del párrafo sin negritas añadidas.",
      summary: "Resumen con **ideas clave** para el conductor.",
      sidebar: {
        title: "Título del recuadro",
        intro: "Introducción opcional",
        items: [],
      },
    },
  ],
  reviewQuestions: [],
  finalSong: "Canción final y oración",
};
\`\`\`

## Reglas de contenido

- Usa \`answers: AnswerItem[]\` en estudios nuevos: 2-3 principales y 1-3 secundarias con \`secondary: true\`.
- Cada respuesta principal debe tener \`followUp\` breve para ayudar si nadie menciona la idea.
- Usa \`commentSuggestion\` para comentarios naturales, cortos y listos para decir.
- Usa \`biblicalCards\` para todos los textos citados en los párrafos de la pregunta, con texto TNM 2019 real.
- Registra textos de \`readText\` y referencias de recuadros en \`biblicalTextsMap\`.
- Usa \`paragraph.sidebar\` para recuadros laterales / \`boxSupplement\`; no improvises otro formato.
- Mantén ortografía correcta en español: acentos, signos de apertura y nombres bíblicos.
- No agregues \`flashcards\` ni nuevos campos legacy.

## LSM

- \`textLSM\`, \`sectionLSM\`, \`titleLSM\` y \`questionLSM\` usan glosas en MAYÚSCULAS.
- Si hay un archivo \`preguntas-LSM.md\`, úsalo como fuente para las glosas.
- Para videos LSM, sigue las skills \`lsm-video\` y \`lsm-question-clips\`.

## Imágenes y videos

- Las imágenes visibles en tarjetas van en \`question.image\`, no en \`paragraph.image\`.
- Para Imgur usa enlace directo: \`https://i.imgur.com/XXXXX.png\`.
- Los videos LSM se guardan por artículo en la carpeta correspondiente de \`public/videos/\`.
- Si eliminas un artículo antiguo, elimina también sus videos LSM asociados.

## Verificación ligera

Después de editar, revisa el diff y usa una validación ligera apropiada, por ejemplo \`git diff --check\`, \`npm run lint\` o \`npm run build\` según el alcance. No abras Browser, Chrome ni Playwright salvo que el usuario lo pida explícitamente.`;

  const studyProtocol = `# Protocolo de estudio por párrafos

Usa este protocolo como guía breve. La fuente de verdad sigue siendo \`AGENTS.md\` y las skills locales.

## Al recibir un estudio nuevo

1. Crea o edita el archivo \`data/articles/study-YYYY-MM-DD.ts\`.
2. Usa \`metadata.studyId\` con la fecha de inicio de semana.
3. Registra el estudio en \`data/articles/index.ts\`.
4. Actívalo en \`data/articles-config.ts\` solo si el usuario lo pide o el flujo lo requiere.
5. Si hay textos de lectura o recuadros, registra sus textos reales en \`biblicalTextsMap\`.

No agregues contenido en archivos legacy; usa el modelo actual por \`studyId\`.

## Para cada pregunta

1. Lee todos los párrafos vinculados en \`question.paragraphs\`.
2. Redacta \`answers\` siguiendo la skill \`respuestas-conductor\`:
   - 2-3 principales que contesten la pregunta.
   - 1-3 secundarias con \`secondary: true\` para detalles útiles.
   - \`followUp\` breve en las principales.
3. Agrega \`commentSuggestion\` si el usuario pidió comentarios o si el estudio lo requiere.
4. Crea \`biblicalCards\` para todos los textos bíblicos citados en esos párrafos.
5. Mantén \`summary\` en los párrafos con las ideas clave en negritas.

## Textos bíblicos

- Usa TNM 2019 real, no resúmenes propios.
- Si la pregunta tiene \`readText\`, la clave de \`biblicalTextsMap\` debe coincidir exactamente.
- Incluye referencias de \`paragraph.sidebar\` / boxSupplement para que sean clicables.
- En pasajes largos, usa los versículos clave según la guía del proyecto.

## Recuadros laterales

- Usa \`paragraph.sidebar\` para boxSupplement.
- Lee la skill \`box-supplement\` antes de crear o ajustar recuadros.
- No dupliques el recuadro en otro campo improvisado.

## Cierre

Antes de entregar, revisa \`git diff\` y una validación ligera razonable. No uses Browser, Chrome ni Playwright a menos que el usuario lo pida explícitamente en ese turno.`;

  const handleCopy = async () => {
    try {
      await copyToClipboard(promptInstructions);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch {
      alert('Error al copiar. Intenta de nuevo.');
    }
  };

  const handleCopyStudy = async () => {
    try {
      await copyToClipboard(studyProtocol);
      setShowCopiedStudy(true);
      setTimeout(() => setShowCopiedStudy(false), 2000);
    } catch {
      alert('Error al copiar. Intenta de nuevo.');
    }
  };

  const [showToolsMenu, setShowToolsMenu] = useState(false);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowToolsMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="fixed bottom-4 left-4 z-50 hidden xl:block">
      {/* Botón principal (siempre visible) */}
      <button
        onClick={() => setShowToolsMenu(!showToolsMenu)}
        className="p-3 bg-slate-700 text-white rounded-full shadow-lg hover:bg-slate-600 transition-all"
        title="Herramientas"
      >
        <span className="text-xl">{showToolsMenu ? '✕' : '📋'}</span>
      </button>

      {/* Menú expandible (hacia arriba) */}
      {showToolsMenu && (
        <div className="absolute bottom-14 left-0 bg-slate-700 rounded-xl shadow-xl overflow-hidden animate-slideUp min-w-[200px]">
          {/* Botón Copiar Instrucciones */}
          <div className="relative">
            <button
              onClick={() => { handleCopy(); setShowToolsMenu(false); }}
              className="flex items-center gap-2 px-4 py-3 text-white hover:bg-slate-600 w-full text-left text-sm font-medium"
              title="Copiar instrucciones completas para nueva conversación"
            >
              📋 Copiar Instrucciones
            </button>

            {showCopied && (
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-emerald-600 text-white px-3 py-1 rounded shadow-lg text-sm whitespace-nowrap">
                ✅ ¡Copiado!
              </div>
            )}
          </div>

          {/* Botón Copiar Protocolo de Estudio */}
          <div className="relative border-t border-slate-600">
            <button
              onClick={() => { handleCopyStudy(); setShowToolsMenu(false); }}
              className="flex items-center gap-2 px-4 py-3 text-white hover:bg-slate-600 w-full text-left text-sm font-medium"
              title="Copiar solo el protocolo de estudio"
            >
              📚 Copiar Protocolo
            </button>

            {showCopiedStudy && (
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-slate-500 text-white px-3 py-1 rounded shadow-lg text-sm whitespace-nowrap">
                ✅ ¡Copiado!
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
