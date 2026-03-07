'use client';

import { useState } from 'react';
import { ArticleSummary } from '@/types/atalaya';
import { copyToClipboard } from '@/lib/clipboard';

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
      await copyToClipboard(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  return (
    <section className="my-8 p-6 bg-surface-alt rounded-xl border border-border shadow-sm">
      {/* Header con título y botón copiar */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
          <span>📝</span> Resumen para el Comentario Final
        </h3>
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg border border-border hover:bg-surface-raised transition-colors"
          title="Copiar resumen"
        >
          {copied ? (
            <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>

      {/* Lista de puntos clave */}
      <div className="space-y-3">
        <p className="text-sm text-text-secondary font-medium">Oraciones clave del artículo:</p>
        <ol className="list-decimal list-inside space-y-2 text-text-body">
          {summary.keyPoints.map((point, idx) => (
            <li key={idx} className="leading-relaxed">
              {point.statement}
              {point.bibleReference && (
                <span className="text-text-muted ml-1">({point.bibleReference})</span>
              )}
            </li>
          ))}
        </ol>
      </div>

      {/* Idea central destacada */}
      <div className="mt-6 p-4 bg-surface/60 rounded-lg border-l-4 border-amber-400 dark:border-amber-500">
        <p className="text-sm text-text-secondary font-medium mb-1 flex items-center gap-1">
          <span>💡</span> Idea central:
        </p>
        <p className="text-text-primary italic">&quot;{summary.centralIdea}&quot;</p>
      </div>
    </section>
  );
}
