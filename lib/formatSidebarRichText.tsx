import React from 'react';

export type SidebarTextVariant = 'intro' | 'listItem';

export type ScriptureClickHandler = (
  title: string,
  verses: { reference: string; text: string }[]
) => void;

const SCRIPTURE_REF_PATTERN =
  /\d+:\d+|Filip\.|Mat\.|Mar\.|Hech\.|Gén\.|Efes\.|1\s+Tim\.|2\s+Tim\.|Génesis|Apoc\.|Sal\.|Prov\.|compare con/i;

const SCRIPTURE_REF_CLASS =
  'text-[#006FB3] dark:text-sky-400 font-medium underline-offset-2';

const SCRIPTURE_REF_CLICKABLE_CLASS = `${SCRIPTURE_REF_CLASS} cursor-pointer hover:underline`;

const LIST_LABEL_MAX_LENGTH = 55;

function isScriptureParenthetical(inner: string): boolean {
  return SCRIPTURE_REF_PATTERN.test(inner);
}

function splitListItemLabel(text: string): { label: string; body: string } | null {
  const match = text.match(/^(.+?\.\s+)([\s\S]+)$/);
  if (!match) return null;
  const label = match[1].trim();
  if (label.length > LIST_LABEL_MAX_LENGTH || label.includes('(')) return null;
  return { label: match[1], body: match[2] };
}

function renderMarkdownSegments(text: string, keyPrefix: string): React.ReactNode[] {
  const parts = text.split(/(\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('***') && part.endsWith('***')) {
      return (
        <span key={`${keyPrefix}-bi-${index}`} className="font-bold italic text-text-primary">
          {part.slice(3, -3)}
        </span>
      );
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={`${keyPrefix}-b-${index}`} className="text-text-primary">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (!part) return null;
    return <span key={`${keyPrefix}-t-${index}`}>{part}</span>;
  });
}

function renderScriptureAwareText(
  text: string,
  keyPrefix: string,
  onScriptureClick?: ScriptureClickHandler,
  resolveScriptureRef?: (inner: string) => { title: string; verses: { reference: string; text: string }[] } | null
): React.ReactNode[] {
  const parts = text.split(/(\([^)]+\))/g);
  const nodes: React.ReactNode[] = [];
  parts.forEach((part, index) => {
    if (!part.startsWith('(') || !part.endsWith(')')) {
      nodes.push(...renderMarkdownSegments(part, `${keyPrefix}-md-${index}`));
      return;
    }
    const inner = part.slice(1, -1).trim();
    if (isScriptureParenthetical(inner)) {
      const resolved = resolveScriptureRef?.(inner);
      if (onScriptureClick && resolved) {
        nodes.push(
          <button
            key={`${keyPrefix}-ref-${index}`}
            type="button"
            onClick={() => onScriptureClick(resolved.title, resolved.verses)}
            className={`inline ${SCRIPTURE_REF_CLICKABLE_CLASS} bg-transparent border-0 p-0 text-left`}
          >
            {part}
          </button>
        );
        return;
      }
      nodes.push(
        <span key={`${keyPrefix}-ref-${index}`} className={SCRIPTURE_REF_CLASS}>
          {part}
        </span>
      );
      return;
    }
    nodes.push(<span key={`${keyPrefix}-paren-${index}`}>{part}</span>);
  });
  return nodes;
}

export function formatSidebarRichText(
  text: string,
  options: {
    variant?: SidebarTextVariant;
    onScriptureClick?: ScriptureClickHandler;
    resolveScriptureRef?: (inner: string) => { title: string; verses: { reference: string; text: string }[] } | null;
  } = {}
): React.ReactNode {
  const { variant = 'intro', onScriptureClick, resolveScriptureRef } = options;

  if (variant === 'listItem') {
    const split = splitListItemLabel(text);
    if (split) {
      return (
        <>
          <span className="font-bold italic text-text-primary">{split.label}</span>
          {renderScriptureAwareText(split.body, 'list-body', onScriptureClick, resolveScriptureRef)}
        </>
      );
    }
  }

  return <>{renderScriptureAwareText(text, 'intro', onScriptureClick, resolveScriptureRef)}</>;
}
