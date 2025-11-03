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
  // Función para formatear el texto bíblico en azul
  const formatBiblicalText = (text: string) => {
    const parts = text.split(/(".*?")/g);

    return parts.map((part, index) => {
      if (part.startsWith('"') && part.endsWith('"')) {
        return (
          <span key={index} className="text-blue-600 font-bold">
            {part}
          </span>
        );
      }
      return <span key={index} className="text-gray-800 font-semibold">{part}</span>;
    });
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white rounded-lg shadow-md p-8 mb-6">
      {/* Selector de Artículo (si hay múltiples artículos) */}
      {articles.length > 0 && onArticleChange && (
        <div className="mb-6 flex items-center justify-center gap-4">
          <label htmlFor="article-selector" className="text-sm font-semibold text-gray-600">
            Seleccionar Artículo:
          </label>
          <select
            id="article-selector"
            value={currentArticleId || ''}
            onChange={(e) => onArticleChange(e.target.value)}
            className="px-4 py-2 bg-white border-2 border-blue-400 rounded-lg text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 cursor-pointer hover:bg-blue-50 transition-colors"
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
        <div className="text-center mb-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-3">
          <p className="text-sm font-bold text-gray-700">
            <span className="text-blue-700">Artículo {articleNumber}</span>
            {' | '}
            <span className="text-purple-700">{week}</span>
            {' | '}
            <span className="text-gray-600">{month} {year}</span>
          </p>
        </div>
      )}

      {/* Canción */}
      <div className="text-center mb-4">
        <p className="text-lg font-semibold text-gray-600">{song}</p>
      </div>

      {/* Título */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        {title}
      </h1>

      {/* Texto Bíblico */}
      <div className="text-center mb-6">
        <p className="text-xl leading-relaxed">
          {formatBiblicalText(biblicalText)}
        </p>
      </div>

      {/* Tema */}
      <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded">
        <p className="text-lg text-gray-800 leading-relaxed">
          {theme}
        </p>
      </div>
    </div>
  );
}
