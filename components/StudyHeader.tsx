import { ArticleData } from '@/types/atalaya';
import { getArticleId } from '@/data/atalaya-data';

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
  onArticleChange
}: StudyHeaderProps) {
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
