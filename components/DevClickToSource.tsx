'use client';

import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getReactFiber(element: HTMLElement): any {
  const key = Object.keys(element).find(
    k => k.startsWith('__reactFiber$') || k.startsWith('__reactInternalInstance$')
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return key ? (element as any)[key] : null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getDebugSource(fiber: any): { fileName: string; lineNumber: number } | null {
  let current = fiber;
  while (current) {
    if (current._debugSource) {
      return {
        fileName: current._debugSource.fileName,
        lineNumber: current._debugSource.lineNumber,
      };
    }
    if (current._debugOwner?._debugSource) {
      return {
        fileName: current._debugOwner._debugSource.fileName,
        lineNumber: current._debugOwner._debugSource.lineNumber,
      };
    }
    current = current.return;
  }
  return null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getComponentChain(fiber: any): string[] {
  const chain: string[] = [];
  let current = fiber;
  while (current) {
    if (typeof current.type === 'function' || (typeof current.type === 'object' && current.type !== null)) {
      const name = current.type.displayName || current.type.name;
      if (name && !chain.includes(name)) {
        chain.push(name);
      }
    }
    current = current.return;
  }
  return chain;
}

function getTextPreview(el: HTMLElement, maxLen: number = 60): string {
  // Direct text nodes only (no children text)
  const directText = Array.from(el.childNodes)
    .filter(n => n.nodeType === Node.TEXT_NODE)
    .map(n => n.textContent?.trim())
    .filter(Boolean)
    .join(' ');
  if (directText) return directText.slice(0, maxLen);

  // Fallback: full textContent
  const full = el.textContent?.trim() || '';
  return full.slice(0, maxLen);
}

function getSignificantClasses(el: HTMLElement): string {
  const raw = el.className?.toString() || '';
  if (!raw) return '';

  const classes = raw.split(/\s+/).filter(Boolean);

  // Prioritize classes that give structural/visual meaning
  const prioritized = classes.filter(c =>
    // Size/layout
    /^(w-|h-|min-h|max-w|p-|px-|py-|m-|mx-|my-|mb-|mt-|ml-|mr-)/.test(c) ||
    // Position/display
    /^(absolute|relative|fixed|sticky|flex|grid|block|inline|hidden)$/.test(c) ||
    // Visual identity
    /^(bg-|text-|border-|rounded|shadow|overflow|opacity)/.test(c) ||
    // Specific sizes that identify elements
    /^\[.*\]/.test(c) ||
    /^(gap-|space-|items-|justify-)/.test(c)
  );

  // Take the most identifying classes (max 8)
  const selected = prioritized.slice(0, 8);
  return selected.join(' ');
}

function getNearbyContext(el: HTMLElement): string {
  const parts: string[] = [];

  // Check for nearby headings or labels within parent
  const parent = el.parentElement;
  if (parent) {
    for (const sib of parent.children) {
      if (sib === el) continue;
      const tag = sib.tagName.toLowerCase();
      if (tag[0] === 'h' || tag === 'label' || tag === 'span') {
        const txt = sib.textContent?.trim().slice(0, 30);
        if (txt) {
          parts.push(`sibling-${tag}="${txt}"`);
          break;
        }
      }
    }
  }

  // Use closest() to find nearest section heading ancestor efficiently
  const sectionEl = el.closest('[class*="uppercase"]') as HTMLElement | null;
  if (sectionEl && sectionEl !== el) {
    const txt = sectionEl.textContent?.trim().slice(0, 40);
    if (txt) parts.push(`section="${txt}"`);
  }
  if (!parts.some(p => p.startsWith('section='))) {
    // Fallback: find nearest heading in ancestors
    let ancestor = el.parentElement;
    let depth = 0;
    while (ancestor && depth < 6) {
      const heading = ancestor.querySelector(':scope > h1, :scope > h2, :scope > h3, :scope > h4');
      if (heading && heading !== el) {
        const txt = heading.textContent?.trim().slice(0, 40);
        if (txt) { parts.push(`section="${txt}"`); break; }
      }
      ancestor = ancestor.parentElement;
      depth++;
    }
  }

  return parts.join(' | ');
}

function getElementIdentity(el: HTMLElement): string {
  const parts: string[] = [];
  const tag = el.tagName.toLowerCase();

  // Tag
  parts.push(`<${tag}>`);

  // Role/type for interactive elements
  if (tag === 'button' || tag === 'input' || tag === 'select') {
    const type = el.getAttribute('type');
    const title = el.getAttribute('title');
    const ariaLabel = el.getAttribute('aria-label');
    if (type) parts.push(`type="${type}"`);
    if (title) parts.push(`title="${title}"`);
    if (ariaLabel) parts.push(`aria="${ariaLabel}"`);
  }

  // Data attributes
  const dataAttrs = Array.from(el.attributes)
    .filter(a => a.name.startsWith('data-'))
    .map(a => `${a.name}="${a.value.slice(0, 20)}"`);
  if (dataAttrs.length) parts.push(dataAttrs.join(' '));

  // Direct text preview
  const text = getTextPreview(el, 50);
  if (text) parts.push(`text="${text}"`);

  // Key classes
  const classes = getSignificantClasses(el);
  if (classes) parts.push(`classes="${classes}"`);

  return parts.join(' ');
}

function getParentPath(el: HTMLElement, maxDepth: number = 4): string {
  const path: string[] = [];
  let current = el.parentElement;
  let depth = 0;

  while (current && depth < maxDepth) {
    const tag = current.tagName.toLowerCase();
    if (tag === 'body' || tag === 'html') break;

    const text = getTextPreview(current, 25);
    const keyClass = getSignificantClasses(current).split(' ')[0] || '';

    let label = tag;
    if (keyClass) label += `.${keyClass}`;
    if (text && text.length > 2) label += `("${text}")`;

    path.push(label);
    current = current.parentElement;
    depth++;
  }

  return path.reverse().join(' > ');
}

function getChildrenPreview(el: HTMLElement): string {
  const children = Array.from(el.children).slice(0, 4);
  if (!children.length) return '';

  const previews = children.map(child => {
    const c = child as HTMLElement;
    const tag = c.tagName.toLowerCase();
    const text = c.textContent?.trim().slice(0, 20) || '';
    const firstClass = c.className?.toString().split(' ')[0] || '';
    return `${tag}${firstClass ? '.' + firstClass : ''}${text ? '("' + text + '")' : ''}`;
  });

  return `children=[${previews.join(', ')}]`;
}

function buildRichContext(target: HTMLElement): string {
  const fiber = getReactFiber(target);
  const lines: string[] = [];

  // 1. Component chain
  if (fiber) {
    const chain = getComponentChain(fiber);
    if (chain.length) lines.push(`Component: ${chain.slice(0, 4).join(' → ')}`);

    // Source file
    const source = getDebugSource(fiber);
    if (source) {
      const shortPath = source.fileName.replace(/^.*?(app|components|data)\//, '$1/');
      lines.push(`Source: ${shortPath}:${source.lineNumber}`);
    }
  }

  // 2. Element identity (tag, text, key classes, attributes)
  lines.push(`Element: ${getElementIdentity(target)}`);

  // 3. Parent DOM path
  const parentPath = getParentPath(target);
  if (parentPath) lines.push(`Path: ${parentPath}`);

  // 4. Children preview
  const childPreview = getChildrenPreview(target);
  if (childPreview) lines.push(`Children: ${childPreview}`);

  // 5. Nearby context (section headers, sibling labels)
  const nearby = getNearbyContext(target);
  if (nearby) lines.push(`Context: ${nearby}`);

  // 6. Computed styles that help identify the element
  const style = window.getComputedStyle(target);
  const bgColor = style.backgroundColor;
  const position = style.position;
  const display = style.display;
  if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
    lines.push(`Style: bg=${bgColor} position=${position} display=${display}`);
  }

  return lines.join('\n');
}

export default function DevClickToSource() {
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') return;

    function handleClick(e: MouseEvent) {
      if (!e.altKey) return;
      e.preventDefault();
      e.stopPropagation();

      const target = e.target as HTMLElement;
      const context = buildRichContext(target);

      navigator.clipboard.writeText(context);
      setToast(context);
      setTimeout(() => setToast(null), 5000);
    }

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  if (process.env.NODE_ENV === 'production') return null;
  if (!toast) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#1a1a2e',
        color: '#e2e8f0',
        padding: '12px 18px',
        borderRadius: 10,
        fontSize: 12,
        fontFamily: 'ui-monospace, "Cascadia Code", "Fira Code", monospace',
        zIndex: 99999,
        boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
        maxWidth: '92vw',
        whiteSpace: 'pre-wrap',
        lineHeight: 1.6,
        border: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {toast}
    </div>
  );
}
