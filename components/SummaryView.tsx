'use client';

import { useState, useMemo } from 'react';
import { ArticleData } from '@/types/atalaya';
import { getAnswerItems, getReviewAnswerItems } from '@/lib/answerItems';
import { copyToClipboard } from '@/lib/clipboard';
import { buildBiblicalComments, buildQuestionComment } from '@/lib/commentGuidance';
import { getBiblicalTextsForStudy } from '@/data/articles';
import { buildReferenceLookup, buildVerseIndex, resolveScriptureFromParenthetical } from '@/lib/resolveScriptureRef';
import { isFirstQuestionInSection } from '@/lib/sectionUtils';
import {
  getParagraphsWithSidebar,
  shouldShowSidebarInParagraphFlow,
  shouldShowSidebarOnQuestionCard,
} from '@/lib/sidebarPlacement';
import ParagraphSidebarBox from './ParagraphSidebarBox';

interface SummaryViewProps {
  article: ArticleData;
}

export default function SummaryView({ article }: SummaryViewProps) {
  const [bibleModal, setBibleModal] = useState<{ title: string; verses: { reference: string; text: string }[] } | null>(null);

  const verseIndex = useMemo(() => {
    const sources: { reference: string; text: string }[] = [];
    for (const verses of Object.values(getBiblicalTextsForStudy(article.metadata.studyId))) {
      sources.push(...verses);
    }
    return buildVerseIndex(sources);
  }, [article.metadata.studyId]);
  const referenceLookup = useMemo(() => {
    const sources: { reference: string; text: string }[] = [];
    for (const verses of Object.values(getBiblicalTextsForStudy(article.metadata.studyId))) {
      sources.push(...verses);
    }
    return buildReferenceLookup(sources);
  }, [article.metadata.studyId]);

  const biblicalTextsForStudy = useMemo(
    () => getBiblicalTextsForStudy(article.metadata.studyId),
    [article.metadata.studyId]
  );

  const resolveScriptureRef = (inner: string) =>
    resolveScriptureFromParenthetical(inner, verseIndex, biblicalTextsForStudy, referenceLookup, { fallbackToReference: true });

  const handleScriptureClick = (inner: string) => {
    const resolved = resolveScriptureRef(inner);
    if (resolved) setBibleModal(resolved);
  };

  const sidebarScriptureProps = {
    onScriptureClick: handleScriptureClick,
    resolveScriptureRef,
  };
  const getAnswerItemsForDisplay = (question: Parameters<typeof getAnswerItems>[0]) =>
    getAnswerItems(question);

  // Copiar todo al portapapeles
  const handleCopyAll = async () => {
    let text = `📖 ${article.title}\n`;
    text += `${article.metadata.week} — ${article.title}\n\n`;

    article.questions.forEach(q => {
      text += `[${q.number}] ${q.textEs}\n`;
      const answerItems = getAnswerItemsForDisplay(q);
      answerItems.forEach((item, i) => {
        const prefix = item.secondary ? '  · ' : `  ${i + 1}. `;
        text += `${prefix}${item.text}\n`;
      });
      const comment = buildQuestionComment(q, article.metadata.studyId);
      if (comment) {
        text += `  Cómo comentarlo: ${comment}\n`;
      }
      const relatedParagraphs = article.paragraphs.filter((paragraph) => q.paragraphs.includes(paragraph.number));
      const biblicalComments = buildBiblicalComments(q.biblicalCards, {
        questionText: q.textEs,
        paragraphs: relatedParagraphs,
      });
      if (biblicalComments.length > 0) {
        text += `  Cómo comentar textos bíblicos:\n`;
        biblicalComments.forEach((item) => {
          text += `    - ${item.reference}: ${item.contextNote}\n`;
        });
      }
      text += '\n';
    });

    try {
      await copyToClipboard(text);
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
      <div className="bg-surface border border-border rounded-xl p-6 mb-6 print:rounded-none print:mb-4 shadow-sm">
        <div className="flex items-center gap-2 text-text-muted text-sm mb-2">
          <span>{article.metadata.week}</span>
          <span>•</span>
          <span>{article.metadata.month} {article.metadata.year}</span>
        </div>
        <h1 className="text-2xl font-serif font-bold text-text-primary">{article.title}</h1>
        <p className="text-text-secondary mt-2 text-sm italic">{article.biblicalText}</p>
      </div>

      {/* Botones de acción */}
      <div className="flex gap-3 mb-6 no-print">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-surface-raised hover:bg-border rounded-lg text-text-body font-medium transition-colors"
        >
          <span>🖨️</span>
          Imprimir
        </button>
        <button
          onClick={handleCopyAll}
          className="flex items-center gap-2 px-4 py-2 bg-surface-raised hover:bg-border rounded-lg text-text-body font-medium transition-colors"
        >
          <span>📋</span>
          Copiar Todo
        </button>
      </div>

      {/* Lista de preguntas con respuestas */}
      <div className="space-y-4">
        {article.questions.map((question, qIndex) => {
          const answerItems = getAnswerItemsForDisplay(question);
          const relatedParagraphs = article.paragraphs.filter((paragraph) => question.paragraphs.includes(paragraph.number));
          const paragraphsWithSidebar = getParagraphsWithSidebar(relatedParagraphs);
          const showSidebarOnCard = shouldShowSidebarOnQuestionCard(question, paragraphsWithSidebar);
          const showSidebarInParagraphFlow = shouldShowSidebarInParagraphFlow(question, paragraphsWithSidebar);
          const questionComment = buildQuestionComment(question, article.metadata.studyId);
          const biblicalComments = buildBiblicalComments(question.biblicalCards, {
            questionText: question.textEs,
            paragraphs: relatedParagraphs,
          });

          return (
            <div key={qIndex} className="summary-card">
              {/* Sección (si existe) */}
              {isFirstQuestionInSection(article.questions, qIndex) && question.section && (
                <div className="bg-amber-50 dark:bg-[#332520] border-l-4 border-amber-500 px-4 py-2 mb-3 rounded-r-lg">
                  <h2 className="font-bold text-amber-800 dark:text-[#E8A68B] text-sm uppercase tracking-wide">
                    {question.section}
                  </h2>
                </div>
              )}

              {/* Tarjeta de pregunta */}
              <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-sm print:shadow-none print:border-border-strong">
                {/* Header de pregunta */}
                <div className="bg-surface-alt px-4 py-3 border-b border-border flex items-start gap-3">
                  <span className="flex-shrink-0 w-10 h-10 bg-blue-600 dark:bg-[#D97757] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {question.number}
                  </span>
                  <p className="text-text-primary font-medium leading-relaxed pt-1.5">
                    {question.textEs}
                  </p>
                </div>

                {question.image && (
                  <div className="px-4 py-3 border-b border-border bg-surface">
                    <div className="rounded-lg overflow-hidden border border-border shadow-sm">
                      <img
                        src={question.image}
                        alt={question.imageCaption || 'Ilustración de la pregunta'}
                        className="w-full h-auto object-cover"
                      />
                      {question.imageCaption && (
                        <p className="text-sm text-text-secondary italic p-3 bg-surface-alt text-center border-t border-border-subtle">
                          {question.imageCaption}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {showSidebarOnCard && (
                  <div className="px-4 py-3 border-b border-border bg-surface space-y-3">
                    {paragraphsWithSidebar.map((paragraph) => (
                      <ParagraphSidebarBox
                        key={paragraph.number}
                        sidebar={paragraph.sidebar!}
                        paragraphNumber={paragraph.number}
                        className="mt-0"
                        {...sidebarScriptureProps}
                      />
                    ))}
                  </div>
                )}

                {showSidebarInParagraphFlow && paragraphsWithSidebar.length > 0 && (
                  <div className="px-4 py-3 border-b border-border bg-amber-50/60 dark:bg-[#332520]/40 space-y-3">
                    {paragraphsWithSidebar.map((paragraph) => (
                      <ParagraphSidebarBox
                        key={paragraph.number}
                        sidebar={paragraph.sidebar!}
                        paragraphNumber={paragraph.number}
                        className="mt-0"
                        {...sidebarScriptureProps}
                      />
                    ))}
                  </div>
                )}

                {/* Oraciones clave de la respuesta */}
                {answerItems.length > 0 && (
                  <div className="px-4 py-3">
                    <div className="space-y-2">
                      {answerItems.map((item, sIndex) => (
                        <div key={sIndex} className="flex items-start gap-2 text-sm">
                          <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                            item.secondary
                              ? 'bg-surface-raised text-text-tertiary border border-border'
                              : 'bg-emerald-500 text-white'
                          }`}>
                            {sIndex + 1}
                          </span>
                          <span className={`leading-relaxed ${item.secondary ? 'text-text-secondary' : 'text-text-body'}`}>
                            {item.secondary && (
                              <span className="mr-2 text-[10px] font-bold uppercase tracking-[0.12em] text-text-muted">
                                Detalle
                              </span>
                            )}
                            {item.text.replace(/\*\*/g, '')}
                          </span>
                        </div>
                      ))}
                    </div>

                    {questionComment && (
                      <div className="mt-4 rounded-lg border border-border-subtle bg-surface-alt p-3">
                        <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted">
                          Cómo comentarlo
                        </p>
                        <p className="text-sm leading-relaxed text-text-body">
                          {questionComment}
                        </p>
                      </div>
                    )}

                    {biblicalComments.length > 0 && (
                      <div className="mt-3 rounded-lg border border-border-subtle bg-surface-alt p-3">
                        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-text-muted">
                          Cómo comentar textos bíblicos
                        </p>
                        <div className="space-y-2">
                          {biblicalComments.map((item, index) => (
                            <div key={`${item.reference}-${index}`} className="text-sm leading-relaxed text-text-secondary">
                              <span className="font-bold text-text-primary">{item.reference}:</span> {item.contextNote}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Si no hay respuesta */}
                {answerItems.length === 0 && (
                  <div className="px-4 py-3">
                    <p className="text-sm text-text-muted italic">
                      Sin respuesta disponible
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
          <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
            <span className="text-amber-500">❓</span>
            ¿Qué responderías?
          </h2>
          <div className="space-y-3">
            {article.reviewQuestions.map((rq, index) => (
              <div key={index} className="bg-amber-50 dark:bg-[#332520] border border-amber-200 dark:border-[#8B5A40] rounded-lg p-4">
                <p className="text-text-primary font-medium">{rq.question}</p>
                {rq.questionLSM && (
                  <>
                    <div className="w-12 h-px bg-amber-300 dark:bg-[#D97757] my-3"></div>
                    <p className="text-sm text-amber-700 dark:text-[#E09070] mb-1 font-semibold">🤟 LSM</p>
                    <p className="text-amber-900 dark:text-[#F0D0C0] font-bold uppercase whitespace-pre-line break-words">{rq.questionLSM}</p>
                  </>
                )}
                {getReviewAnswerItems(rq).length > 0 && (
                  <>
                    <div className="w-12 h-px bg-amber-300 dark:bg-[#D97757] my-3"></div>
                    <p className="text-sm text-amber-700 dark:text-[#E09070] mb-1 font-semibold">💬 Respuesta</p>
                    <div className="space-y-1.5">
                      {getReviewAnswerItems(rq).map((item, i) => (
                        <p key={i} className={`text-sm ${item.secondary ? 'text-text-secondary' : 'text-text-body'}`}>
                          [{i + 1}]{item.secondary ? ' Detalle:' : ''} {item.text.replace(/\*\*/g, '')}
                        </p>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-border text-center text-sm text-text-muted print:mt-4">
        <p>{article.finalSong}</p>
      </div>

      {bibleModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="summary-bible-title"
          className="fixed inset-0 z-50 bg-[var(--backdrop)] flex items-center justify-center p-4 no-print"
          onClick={() => setBibleModal(null)}
        >
          <div
            className="bg-surface rounded-xl shadow-xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-6 border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="summary-bible-title" className="font-bold text-text-primary mb-4">{bibleModal.title}</h3>
            <div className="space-y-4">
              {bibleModal.verses.map((v) => (
                <div key={v.reference}>
                  <p className="text-sm font-bold text-amber-600 dark:text-amber-500 mb-1">{v.reference}</p>
                  <p className="text-text-body text-sm leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setBibleModal(null)}
              className="mt-4 w-full py-2 rounded-lg bg-surface-raised text-text-body font-medium"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
