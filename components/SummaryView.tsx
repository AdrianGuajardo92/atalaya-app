'use client';

import { ArticleData, Question } from '@/types/atalaya';

interface SummaryViewProps {
  article: ArticleData;
  lsmData: Record<string, string>;
}

export default function SummaryView({ article, lsmData }: SummaryViewProps) {
  // Función para obtener bullets (incluye personalizados del usuario)
  const getBullets = (question: Question): string[] => {
    // Primero intentar obtener bullets personalizados del usuario
    const customBulletsKey = `bullets-${question.number}`;
    const customBulletsStr = lsmData[customBulletsKey];

    if (customBulletsStr) {
      try {
        const parsed = JSON.parse(customBulletsStr);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch {
        // Si no se puede parsear, usar los originales
      }
    }

    // Usar bullets originales
    if (!question.answerBullets) return [];

    if (typeof question.answerBullets === 'string') {
      return question.answerBullets.split('\n').filter(b => b.trim());
    }

    return question.answerBullets;
  };

  // Función para formatear bullet (extraer título en negrita)
  const formatBullet = (bullet: string) => {
    // Buscar patrón **texto** - descripción
    const match = bullet.match(/^\*\*(.+?)\*\*\s*[-–]\s*(.*)$/);
    if (match) {
      return {
        title: match[1],
        description: match[2]
      };
    }
    // Si no tiene formato, devolver todo como descripción
    return {
      title: null,
      description: bullet
    };
  };

  // Copiar todo al portapapeles
  const handleCopyAll = async () => {
    let text = `📖 ${article.title}\n`;
    text += `Artículo ${article.metadata.articleNumber} | ${article.metadata.week} ${article.metadata.month}\n\n`;

    article.questions.forEach(q => {
      text += `[${q.number}] ${q.textEs}\n`;
      const bullets = getBullets(q);
      bullets.forEach(b => {
        const formatted = formatBullet(b);
        if (formatted.title) {
          text += `  • ${formatted.title}: ${formatted.description}\n`;
        } else {
          text += `  • ${formatted.description}\n`;
        }
      });
      text += '\n';
    });

    try {
      await navigator.clipboard.writeText(text);
      alert('Resumen copiado al portapapeles');
    } catch {
      alert('Error al copiar');
    }
  };

  // Imprimir
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 print:p-0">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-6 mb-6 print:rounded-none print:mb-4">
        <div className="flex items-center gap-2 text-blue-100 text-sm mb-2">
          <span>Artículo {article.metadata.articleNumber}</span>
          <span>•</span>
          <span>{article.metadata.week} {article.metadata.month}</span>
        </div>
        <h1 className="text-2xl font-bold">{article.title}</h1>
        <p className="text-blue-100 mt-2 text-sm italic">{article.biblicalText}</p>
      </div>

      {/* Botones de acción */}
      <div className="flex gap-3 mb-6 no-print">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 font-medium transition-colors"
        >
          <span>🖨️</span>
          Imprimir
        </button>
        <button
          onClick={handleCopyAll}
          className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 font-medium transition-colors"
        >
          <span>📋</span>
          Copiar Todo
        </button>
      </div>

      {/* Lista de preguntas con bullets */}
      <div className="space-y-4">
        {article.questions.map((question, qIndex) => {
          const bullets = getBullets(question);

          return (
            <div key={qIndex} className="summary-card">
              {/* Sección (si existe) */}
              {question.section && (
                <div className="bg-amber-50 border-l-4 border-amber-500 px-4 py-2 mb-3 rounded-r-lg">
                  <h2 className="font-bold text-amber-800 text-sm uppercase tracking-wide">
                    {question.section}
                  </h2>
                </div>
              )}

              {/* Tarjeta de pregunta */}
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm print:shadow-none print:border-slate-300">
                {/* Header de pregunta */}
                <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-start gap-3">
                  <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {question.number}
                  </span>
                  <p className="text-slate-800 font-medium leading-relaxed pt-1.5">
                    {question.textEs}
                  </p>
                </div>

                {/* Bullets */}
                {bullets.length > 0 && (
                  <div className="px-4 py-3">
                    <ul className="space-y-2">
                      {bullets.map((bullet, bIndex) => {
                        const { title, description } = formatBullet(bullet);
                        return (
                          <li key={bIndex} className="flex items-start gap-2 text-sm">
                            <span className="text-blue-500 mt-0.5">•</span>
                            <span className="text-slate-700">
                              {title && (
                                <strong className="text-slate-900">{title}:</strong>
                              )}{' '}
                              {description}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {/* Si no hay bullets pero hay respuesta */}
                {bullets.length === 0 && question.answer && (
                  <div className="px-4 py-3">
                    <p className="text-sm text-slate-600 italic">
                      {question.answer.substring(0, 150)}...
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Preguntas de repaso */}
      {article.reviewQuestions && article.reviewQuestions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span className="text-amber-500">❓</span>
            ¿Qué responderías?
          </h2>
          <div className="space-y-3">
            {article.reviewQuestions.map((rq, index) => (
              <div key={index} className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-slate-800 font-medium">{rq.question}</p>
                {rq.questionLSM && (
                  <>
                    <div className="w-12 h-px bg-amber-300 my-3"></div>
                    <p className="text-sm text-amber-700 mb-1 font-semibold">🤟 LSM</p>
                    <p className="text-amber-900 font-bold uppercase">{rq.questionLSM}</p>
                  </>
                )}
                {rq.answer && (
                  <>
                    <div className="w-12 h-px bg-amber-300 my-3"></div>
                    <p className="text-sm text-amber-700 mb-1 font-semibold">💬 Respuesta</p>
                    <p className="text-slate-700 text-sm">{rq.answer}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-slate-200 text-center text-sm text-slate-500 print:mt-4">
        <p>{article.finalSong}</p>
      </div>
    </div>
  );
}
