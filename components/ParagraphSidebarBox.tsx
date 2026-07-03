'use client';

import { ParagraphSidebar } from '@/types/atalaya';
import { formatSidebarRichText, ScriptureClickHandler } from '@/lib/formatSidebarRichText';

interface ParagraphSidebarBoxProps {
  sidebar: ParagraphSidebar;
  paragraphNumber?: number;
  className?: string;
  onScriptureClick?: ScriptureClickHandler;
  resolveScriptureRef?: (inner: string) => { title: string; verses: { reference: string; text: string }[] } | null;
}

export default function ParagraphSidebarBox({
  sidebar,
  paragraphNumber,
  className = '',
  onScriptureClick,
  resolveScriptureRef,
}: ParagraphSidebarBoxProps) {
  const richTextOptions = { onScriptureClick, resolveScriptureRef };

  return (
    <div
      id={paragraphNumber ? `sidebar-p${paragraphNumber}` : undefined}
      className={`mt-4 rounded-lg border-t-4 border-cyan-900 dark:border-cyan-600 bg-amber-50 dark:bg-[#332520] px-4 py-4 ${className}`.trim()}
    >
      <h3 className="text-base md:text-lg font-bold text-cyan-900 dark:text-cyan-300 mb-3 leading-snug">
        {sidebar.title}
      </h3>
      {sidebar.intro && (
        <p className="text-sm text-text-body dark:text-[#C2C0B6] leading-relaxed mb-3">
          {formatSidebarRichText(sidebar.intro, { variant: 'intro', ...richTextOptions })}
        </p>
      )}
      {sidebar.items && sidebar.items.length > 0 && (
        <ol className="list-decimal list-outside ml-5 space-y-3 text-sm text-text-body dark:text-[#C2C0B6] leading-relaxed">
          {sidebar.items.map((item, index) => (
            <li key={index}>{formatSidebarRichText(item, { variant: 'listItem', ...richTextOptions })}</li>
          ))}
        </ol>
      )}
    </div>
  );
}
