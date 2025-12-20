'use client';

import { useState } from 'react';
import { ArticleSummary } from '@/types/atalaya';

interface ArticleSummaryCardProps {
  summary: ArticleSummary;
  articleTitle: string;
}

function formatSummaryForClipboard(summary: ArticleSummary, title: string): string {
  const lines = [`RESUMEN: ${title}`, ''];

  summary.keyPoints.forEach((point, idx) => {
    let line = `${idx + 1}. ${point.statement}`;
    if (point.bibleReference) {
      line += ` (${point.bibleReference})`;
    }
    lines.push(line);
  });

  lines.push('');
  lines.push(`IDEA CENTRAL: "${summary.centralIdea}"`);

  return lines.join('\n');
}

export function ArticleSummaryCard({ summary, articleTitle }: ArticleSummaryCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = formatSummaryForClipboard(summary, articleTitle);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  return (
    <section className="my-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 shadow-sm">
      {/* Header con título y botón copiar */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-blue-900 flex items-center gap-2">
          <span>📝</span> Resumen para el Comentario Final
        </h3>
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
          title="Copiar resumen"
        >
          {copied ? (
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>

      {/* Lista de puntos clave */}
      <div className="space-y-3">
        <p className="text-sm text-blue-700 font-medium">Oraciones clave del artículo:</p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          {summary.keyPoints.map((point, idx) => (
            <li key={idx} className="leading-relaxed">
              {point.statement}
              {point.bibleReference && (
                <span className="text-blue-600 ml-1">({point.bibleReference})</span>
              )}
            </li>
          ))}
        </ol>
      </div>

      {/* Idea central destacada */}
      <div className="mt-6 p-4 bg-white/60 rounded-lg border-l-4 border-blue-400">
        <p className="text-sm text-blue-700 font-medium mb-1 flex items-center gap-1">
          <span>💡</span> Idea central:
        </p>
        <p className="text-gray-800 italic">&quot;{summary.centralIdea}&quot;</p>
      </div>
    </section>
  );
}
