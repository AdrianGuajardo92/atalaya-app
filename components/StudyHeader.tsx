import { ArticleData, ArticleOverview, Question, ReviewQuestion, Paragraph } from '@/types/atalaya';
import { getArticleId } from '@/data/articles';
import { isExecutiveDesign } from '@/data/design-config';
import { useState, useEffect } from 'react';

interface StudyHeaderProps {
  song: string;
  title: string;
  biblicalText: string;
  theme: string;
  // Nuevas props para manejo de artículos
  articleNumber?: number;
  week?: string;
  month?: string;
  year?: number;
  articles?: ArticleData[];
  currentArticleId?: string;
  onArticleChange?: (articleId: string) => void;
  // Props para LSM
  titleLSM?: string;
  onTitleLSMUpdate?: (text: string) => void;
  // Infografía principal del artículo
  headerInfographic?: string;
  // Vista previa del artículo
  overview?: ArticleOverview;
  // Props para copiar estructura del artículo
  questions?: Question[];
  reviewQuestions?: ReviewQuestion[];
  paragraphs?: Paragraph[];
  finalSong?: string;
}

export default function StudyHeader({
  song,
  title,
  biblicalText,
  theme,
  articleNumber,
  week,
  month,
  year,
  articles = [],
  currentArticleId,
  onArticleChange,
  titleLSM,
  onTitleLSMUpdate,
  headerInfographic,
  overview,
  questions = [],
  reviewQuestions = [],
  paragraphs = [],
  finalSong
}: StudyHeaderProps) {
  // Detectar si aplica diseño ejecutivo (usando configuración centralizada)
  const isArticle43 = articleNumber !== undefined && isExecutiveDesign(articleNumber);

  // Estado para feedback del botón copiar
  const [copyFeedback, setCopyFeedback] = useState<'idle' | 'copied'>('idle');

  // Función para generar el texto estructurado del artículo
  const generateArticleStructure = (): string => {
    const lines: string[] = [];

    // Canción inicial
    lines.push(song);
    lines.push('');

    // Título
    lines.push(title);
    lines.push('');

    // Texto bíblico
    lines.push(biblicalText);
    lines.push('');

    // Tema
    lines.push(theme);
    lines.push('');
    lines.push('---');
    lines.push('');

    // Preguntas con sus párrafos correspondientes
    let currentSection = '';
    questions.forEach((question) => {
      // Si hay un nuevo subtítulo de sección
      if (question.section && question.section !== currentSection) {
        currentSection = question.section;
        lines.push(question.section.toUpperCase());
        lines.push('');
      }

      // Número de pregunta y texto
      lines.push(`${question.number}. ${question.textEs}`);

      // Texto bíblico a leer si existe
      if (question.readText) {
        lines.push(question.readText);
      }

      lines.push('');

      // Párrafos correspondientes a esta pregunta
      const questionParagraphNumbers = question.paragraphs || [];
      questionParagraphNumbers.forEach((paragraphNum) => {
        const paragraph = paragraphs.find(p => p.number === paragraphNum);
        if (paragraph) {
          lines.push(`[${paragraph.number}] ${paragraph.content}`);
          lines.push('');
        }
      });
    });

    // Separador antes de preguntas de repaso
    lines.push('---');
    lines.push('');
    lines.push('¿QUÉ RESPONDERÍAS?');
    lines.push('');

    // Preguntas de repaso
    reviewQuestions.forEach((reviewQ, index) => {
      lines.push(`${index + 1}. ${reviewQ.question}`);
    });

    // Canción final
    if (finalSong) {
      lines.push('');
      lines.push('---');
      lines.push('');
      lines.push(finalSong);
    }

    return lines.join('\n');
  };

  // Función para copiar al portapapeles
  const handleCopyStructure = async () => {
    const text = generateArticleStructure();
    try {
      await navigator.clipboard.writeText(text);
      setCopyFeedback('copied');
      setTimeout(() => setCopyFeedback('idle'), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  // Estado para editar título LSM
  const [isEditingTitleLSM, setIsEditingTitleLSM] = useState(false);
  const [titleLSMEdit, setTitleLSMEdit] = useState(titleLSM || '');

  // Actualizar el estado local cuando cambia el prop
  useEffect(() => {
    setTitleLSMEdit(titleLSM || '');
  }, [titleLSM]);

  const handleSaveTitleLSM = async () => {
    if (onTitleLSMUpdate) {
      await onTitleLSMUpdate(titleLSMEdit);
    }
    setIsEditingTitleLSM(false);
  };

  const handleKeyPressTitleLSM = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSaveTitleLSM();
    }
  };

  // Guardar al perder foco (clic fuera)
  const handleBlurTitleLSM = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (relatedTarget && (relatedTarget.tagName === 'BUTTON')) {
      return; // No guardar si se hizo clic en un botón
    }
    handleSaveTitleLSM();
  };
  // Función para formatear el texto bíblico
  const formatBiblicalText = (text: string) => {
    const parts = text.split(/(".*?")/g);

    return parts.map((part, index) => {
      if (part.startsWith('"') && part.endsWith('"')) {
        return (
          <span key={index} className="text-slate-700 font-semibold">
            {part}
          </span>
        );
      }
      return <span key={index} className="text-slate-600">{part}</span>;
    });
  };

  // Renderizado para Artículo 43 - Diseño Ejecutivo
  if (isArticle43) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-8 md:p-10 mb-8 relative overflow-hidden">
        {/* Barra lateral decorativa */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-300 to-slate-400"></div>

        {/* Selector de Artículo - Diseño Ejecutivo */}
        {articles.length > 0 && onArticleChange && (
          <div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-3 pb-6 border-b border-slate-100">
            <label
              htmlFor="article-selector-exec"
              className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.15em]"
            >
              Seleccionar Artículo
            </label>
            <div className="flex items-center gap-2">
              <div className="relative">
                <select
                  id="article-selector-exec"
                  value={currentArticleId || ''}
                  onChange={(e) => onArticleChange(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-300 cursor-pointer hover:border-slate-300 hover:shadow-md transition-all text-sm shadow-sm min-w-[320px]"
                >
                  {articles
                    .filter((article) => article.title !== "")
                    .map((article) => {
                      const id = getArticleId(article);
                      const isSelected = id === currentArticleId;
                      return (
                        <option
                          key={id}
                          value={id}
                          className={isSelected ? 'font-semibold bg-slate-100' : ''}
                        >
                          {isSelected ? '● ' : '  '}
                          {`Artículo ${article.metadata.articleNumber} - ${article.title}`}
                          {` | ${article.metadata.week}`}
                        </option>
                      );
                    })}
                </select>
                {/* Flecha personalizada */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Botón Copiar Estructura */}
              <button
                onClick={handleCopyStructure}
                className={`p-2.5 rounded-lg border transition-all ${
                  copyFeedback === 'copied'
                    ? 'bg-green-50 border-green-300 text-green-600'
                    : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700'
                }`}
                title="Copiar estructura del artículo"
              >
                {copyFeedback === 'copied' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Información del Artículo - Badges Ejecutivos */}
        {articleNumber && week && month && year && (
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-bold text-sm shadow-sm">
              Artículo {articleNumber}
            </span>
            <span className="text-slate-300">•</span>
            <span className="px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-600 font-medium text-sm shadow-sm">
              {week}
            </span>
            <span className="text-slate-300">•</span>
            <span className="px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-500 font-medium text-sm shadow-sm">
              {month} {year}
            </span>
          </div>
        )}

        {/* Línea decorativa */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        </div>

        {/* Canción - Sin fondo, con ícono */}
        <div className="text-center mb-6">
          <p className="text-slate-500 font-medium flex items-center justify-center gap-2">
            <span className="text-lg">🎵</span>
            <span>{song}</span>
          </p>
        </div>

        {/* Título Principal - Azul oscuro, bold, sin fondo */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center text-slate-800 mb-8 leading-tight">
          {title}
        </h1>

        {/* Título LSM - Tarjeta blanca con borde sutil */}
        {onTitleLSMUpdate && (
          <div className="mb-8">
            {!isEditingTitleLSM ? (
              <div
                onClick={() => setIsEditingTitleLSM(true)}
                className="cursor-pointer bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0 mt-1">🤟</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">
                      Título LSM
                    </p>
                    {titleLSM ? (
                      <p className="text-xl lg:text-2xl font-bold text-slate-700 leading-relaxed break-words uppercase">
                        {titleLSM}
                      </p>
                    ) : (
                      <p className="text-base text-slate-400 italic group-hover:text-slate-500">
                        Toca para agregar el título en LSM
                      </p>
                    )}
                  </div>
                  <span className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                    ✏️
                  </span>
                </div>
              </div>
            ) : (
              <div className="bg-white border-2 border-slate-300 rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-2xl flex-shrink-0 mt-1">🤟</span>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] pt-1">
                    Editando Título LSM
                  </p>
                </div>
                <textarea
                  value={titleLSMEdit}
                  onChange={(e) => setTitleLSMEdit(e.target.value)}
                  onKeyPress={handleKeyPressTitleLSM}
                  onBlur={handleBlurTitleLSM}
                  placeholder="Escribe el título en LSM..."
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-300 text-xl lg:text-2xl font-bold text-slate-700 resize-none uppercase"
                  rows={3}
                  autoFocus
                />
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={handleSaveTitleLSM}
                    className="px-5 py-2.5 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors font-medium text-sm"
                  >
                    💾 Guardar
                  </button>
                  <button
                    onClick={() => {
                      setTitleLSMEdit(titleLSM || '');
                      setIsEditingTitleLSM(false);
                    }}
                    className="px-5 py-2.5 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors font-medium text-sm"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Texto Bíblico - Fondo gris muy claro con borde izquierdo */}
        <div className="bg-slate-50 border-l-4 border-slate-300 rounded-r-lg p-6 mb-8">
          <p className="text-lg lg:text-xl leading-relaxed italic text-slate-600 font-serif">
            {formatBiblicalText(biblicalText)}
          </p>
        </div>

        {/* Infografía Principal del Artículo */}
        {headerInfographic && (
          <div className="mb-8">
            <img
              src={headerInfographic}
              alt="Infografía del artículo"
              className="w-full rounded-xl shadow-md border border-slate-200"
            />
          </div>
        )}

        {/* Tema - Sin fondo, texto gris */}
        <div className="text-center">
          <p className="text-base lg:text-lg text-slate-500 leading-relaxed">
            {theme}
          </p>
        </div>

        {/* Vista previa del artículo - Diseño Ejecutivo */}
        {overview && (
          <div className="mt-10 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center gap-2">
              <span className="text-lg">📑</span>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
                Resumen del Estudio
              </h3>
            </div>

            <div className="p-6 grid gap-8 md:grid-cols-2">
              {overview.previousArticle && (
                <div className="relative">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-px flex-1 bg-slate-200"></div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                      Anteriormente
                    </span>
                    <div className="h-px flex-1 bg-slate-200"></div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-5 border border-slate-100 hover:border-slate-300 transition-colors group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded">
                        ARTÍCULO {overview.previousArticle.number}
                      </span>
                    </div>

                    <p className="text-slate-800 font-medium mb-3 group-hover:text-slate-900 transition-colors">
                      {overview.previousArticle.topic}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {overview.previousArticle.keywords.map((keyword, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-medium"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div>
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-px flex-1 bg-slate-200"></div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                    En este estudio
                  </span>
                  <div className="h-px flex-1 bg-slate-200"></div>
                </div>

                <div className="space-y-4">
                  {overview.whatWellSee.map((section, index) => (
                    <div key={index} className="flex gap-4 group">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 text-slate-600 font-bold flex items-center justify-center border border-slate-200 group-hover:bg-slate-200 transition-colors">
                        {index + 1}
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-slate-800 font-medium mb-2 group-hover:text-slate-900 transition-colors">
                          {section.section}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {section.keywords.map((keyword, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-medium uppercase tracking-tight"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Diseño normal para otros artículos
  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-10 mb-8">
      {/* Selector de Artículo (si hay múltiples artículos) */}
      {articles.length > 0 && onArticleChange && (
        <div className="mb-8 flex items-center justify-center gap-4 pb-6 border-b border-slate-200">
          <label htmlFor="article-selector" className="text-sm font-medium text-slate-600">
            Seleccionar Artículo:
          </label>
          <div className="flex items-center gap-2">
            <select
              id="article-selector"
              value={currentArticleId || ''}
              onChange={(e) => onArticleChange(e.target.value)}
              className="px-5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400 cursor-pointer hover:bg-slate-50 transition-all shadow-sm"
            >
              {articles
                .filter((article) => article.title !== "") // Solo mostrar artículos con contenido
                .map((article) => {
                  const id = getArticleId(article);

                  return (
                    <option key={id} value={id}>
                      {`Artículo ${article.metadata.articleNumber} - ${article.title}`}
                      {` | ${article.metadata.week}`}
                    </option>
                  );
                })}
            </select>

            {/* Botón Copiar Estructura */}
            <button
              onClick={handleCopyStructure}
              className={`p-2.5 rounded-lg border transition-all ${
                copyFeedback === 'copied'
                  ? 'bg-green-50 border-green-300 text-green-600'
                  : 'bg-white border-slate-300 text-slate-500 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-700'
              }`}
              title="Copiar estructura del artículo"
            >
              {copyFeedback === 'copied' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Información del Artículo Actual */}
      {articleNumber && week && month && year && (
        <div className="text-center mb-6 bg-slate-50 rounded-lg p-4 border border-slate-200">
          <p className="text-sm font-medium text-slate-700">
            <span className="text-slate-900 font-semibold">Artículo {articleNumber}</span>
            <span className="mx-2 text-slate-400">•</span>
            <span className="text-slate-700">{week}</span>
            <span className="mx-2 text-slate-400">•</span>
            <span className="text-slate-600">{month} {year}</span>
          </p>
        </div>
      )}

      {/* Canción */}
      <div className="text-center mb-5">
        <p className="text-base font-medium text-slate-600">{song}</p>
      </div>

      {/* Título */}
      <h1 className="text-3xl lg:text-4xl font-semibold text-center text-slate-900 mb-6 leading-tight">
        {title}
      </h1>

      {/* Título LSM - Editable */}
      {onTitleLSMUpdate && (
        <div className="mb-6">
          {!isEditingTitleLSM ? (
            <div
              onClick={() => setIsEditingTitleLSM(true)}
              className="cursor-pointer bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-lg p-5 hover:border-blue-400 transition-all group"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0 mt-1">🤟</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
                    Título LSM
                  </p>
                  {titleLSM ? (
                    <p className="text-xl lg:text-2xl font-bold text-blue-900 leading-relaxed break-words uppercase">
                      {titleLSM}
                    </p>
                  ) : (
                    <p className="text-lg text-blue-500 italic group-hover:text-blue-600">
                      Toca para agregar el título en LSM
                    </p>
                  )}
                </div>
                <button className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                  ✏️
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-400 rounded-lg p-5">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl flex-shrink-0 mt-1">🤟</span>
                <p className="text-xs font-bold text-blue-700 uppercase tracking-wider pt-1">
                  Editando Título LSM
                </p>
              </div>
              <textarea
                value={titleLSMEdit}
                onChange={(e) => setTitleLSMEdit(e.target.value)}
                onKeyPress={handleKeyPressTitleLSM}
                onBlur={handleBlurTitleLSM}
                placeholder="Escribe el título en LSM y presiona Enter para guardar..."
                className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 text-xl lg:text-2xl font-bold text-blue-900 resize-none uppercase"
                rows={3}
                autoFocus
              />
              <div className="flex gap-2 mt-3">
                <button
                  onClick={handleSaveTitleLSM}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                >
                  💾 Guardar
                </button>
                <button
                  onClick={() => {
                    setTitleLSMEdit(titleLSM || '');
                    setIsEditingTitleLSM(false);
                  }}
                  className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors font-medium text-sm"
                >
                  ❌ Cancelar
                </button>
              </div>
              <p className="text-xs text-blue-600 mt-2 italic">
                💡 Tip: Presiona Enter para guardar rápidamente
              </p>
            </div>
          )}
        </div>
      )}

      {/* Texto Bíblico */}
      <div className="text-center mb-7">
        <p className="text-lg lg:text-xl leading-relaxed">
          {formatBiblicalText(biblicalText)}
        </p>
      </div>

      {/* Tema */}
      <div className="bg-slate-50 border-l-2 border-slate-400 p-5 rounded-lg">
        <p className="text-base lg:text-lg text-slate-700 leading-relaxed">
          {theme}
        </p>
      </div>

      {/* Vista previa del artículo - Diseño Clásico Ejecutivo */}
      {overview && (
        <div className="mt-8 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          {/* Header de la sección */}
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center gap-2">
            <span className="text-lg">📑</span>
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
              Resumen del Estudio
            </h3>
          </div>

          <div className="p-6 grid gap-8 md:grid-cols-2">
            {/* Conexión con artículo anterior */}
            {overview.previousArticle && (
              <div className="relative">
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-px flex-1 bg-slate-200"></div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                    Anteriormente
                  </span>
                  <div className="h-px flex-1 bg-slate-200"></div>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-100 hover:border-slate-300 transition-colors group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded">
                      ARTÍCULO {overview.previousArticle.number}
                    </span>
                  </div>
                  
                  <p className="text-slate-800 font-medium mb-3 group-hover:text-blue-700 transition-colors">
                    {overview.previousArticle.topic}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {overview.previousArticle.keywords.map((keyword, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-medium"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Lo que veremos hoy */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <div className="h-px flex-1 bg-slate-200"></div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                  En este estudio
                </span>
                <div className="h-px flex-1 bg-slate-200"></div>
              </div>

              <div className="space-y-4">
                {overview.whatWellSee.map((section, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 text-slate-600 font-bold flex items-center justify-center border border-slate-200 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors">
                      {index + 1}
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-slate-800 font-medium mb-2 group-hover:text-blue-800 transition-colors">
                        {section.section}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {section.keywords.map((keyword, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-medium uppercase tracking-tight"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
