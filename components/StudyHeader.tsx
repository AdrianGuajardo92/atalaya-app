import { ArticleData } from '@/types/atalaya';
import { getArticleId } from '@/data/atalaya-data';
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
  onTitleLSMUpdate
}: StudyHeaderProps) {
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

  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-10 mb-8">
      {/* Selector de Artículo (si hay múltiples artículos) */}
      {articles.length > 0 && onArticleChange && (
        <div className="mb-8 flex items-center justify-center gap-4 pb-6 border-b border-slate-200">
          <label htmlFor="article-selector" className="text-sm font-medium text-slate-600">
            Seleccionar Artículo:
          </label>
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
    </div>
  );
}
