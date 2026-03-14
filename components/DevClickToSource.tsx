'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

// ─── React Fiber helpers ───────────────────────────────────────────────────────

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
    if (current._debugSource) return { fileName: current._debugSource.fileName, lineNumber: current._debugSource.lineNumber };
    if (current._debugOwner?._debugSource) return { fileName: current._debugOwner._debugSource.fileName, lineNumber: current._debugOwner._debugSource.lineNumber };
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
      if (name && !chain.includes(name)) chain.push(name);
    }
    current = current.return;
  }
  return chain;
}

// ─── DOM helpers ──────────────────────────────────────────────────────────────

function getTextPreview(el: HTMLElement, maxLen = 60): string {
  const directText = Array.from(el.childNodes).filter(n => n.nodeType === Node.TEXT_NODE).map(n => n.textContent?.trim()).filter(Boolean).join(' ');
  if (directText) return directText.slice(0, maxLen);
  return (el.textContent?.trim() || '').slice(0, maxLen);
}

function getSignificantClasses(el: HTMLElement): string {
  const classes = (el.className?.toString() || '').split(/\s+/).filter(Boolean);
  return classes.filter(c =>
    /^(w-|h-|min-h|max-w|p-|px-|py-|m-|mx-|my-|mb-|mt-|ml-|mr-)/.test(c) ||
    /^(absolute|relative|fixed|sticky|flex|grid|block|inline|hidden)$/.test(c) ||
    /^(bg-|text-|border-|rounded|shadow|overflow|opacity)/.test(c) ||
    /^\[.*\]/.test(c) ||
    /^(gap-|space-|items-|justify-)/.test(c)
  ).slice(0, 8).join(' ');
}

function getNearbyContext(el: HTMLElement): string {
  const parts: string[] = [];
  const parent = el.parentElement;
  if (parent) {
    for (const sib of parent.children) {
      if (sib === el) continue;
      const tag = sib.tagName.toLowerCase();
      if (tag[0] === 'h' || tag === 'label' || tag === 'span') {
        const txt = sib.textContent?.trim().slice(0, 30);
        if (txt) { parts.push(`sibling-${tag}="${txt}"`); break; }
      }
    }
  }
  const sectionEl = el.closest('[class*="uppercase"]') as HTMLElement | null;
  if (sectionEl && sectionEl !== el) {
    const txt = sectionEl.textContent?.trim().slice(0, 40);
    if (txt) parts.push(`section="${txt}"`);
  }
  if (!parts.some(p => p.startsWith('section='))) {
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
  parts.push(`<${tag}>`);
  if (tag === 'button' || tag === 'input' || tag === 'select') {
    const type = el.getAttribute('type');
    const title = el.getAttribute('title');
    const ariaLabel = el.getAttribute('aria-label');
    if (type) parts.push(`type="${type}"`);
    if (title) parts.push(`title="${title}"`);
    if (ariaLabel) parts.push(`aria="${ariaLabel}"`);
  }
  const dataAttrs = Array.from(el.attributes).filter(a => a.name.startsWith('data-')).map(a => `${a.name}="${a.value.slice(0, 20)}"`);
  if (dataAttrs.length) parts.push(dataAttrs.join(' '));
  const text = getTextPreview(el, 50);
  if (text) parts.push(`text="${text}"`);
  const classes = getSignificantClasses(el);
  if (classes) parts.push(`classes="${classes}"`);
  return parts.join(' ');
}

function getParentPath(el: HTMLElement, maxDepth = 4): string {
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
  if (fiber) {
    const chain = getComponentChain(fiber);
    if (chain.length) lines.push(`Component: ${chain.slice(0, 4).join(' → ')}`);
    const source = getDebugSource(fiber);
    if (source) {
      const shortPath = source.fileName.replace(/^.*?(app|components|data)\//, '$1/');
      lines.push(`Source: ${shortPath}:${source.lineNumber}`);
    }
  }
  lines.push(`Element: ${getElementIdentity(target)}`);
  const parentPath = getParentPath(target);
  if (parentPath) lines.push(`Path: ${parentPath}`);
  const childPreview = getChildrenPreview(target);
  if (childPreview) lines.push(`Children: ${childPreview}`);
  const nearby = getNearbyContext(target);
  if (nearby) lines.push(`Context: ${nearby}`);
  const style = window.getComputedStyle(target);
  const bgColor = style.backgroundColor;
  if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
    lines.push(`Style: bg=${bgColor} position=${style.position} display=${style.display}`);
  }
  return lines.join('\n');
}

// ─── Screenshot helper ────────────────────────────────────────────────────────

async function captureScreenshot(el: HTMLElement): Promise<string | null> {
  try {
    const html2canvas = (await import('html2canvas')).default;
    const canvas = await html2canvas(el, {
      backgroundColor: null,
      useCORS: true,
      allowTaint: true,
      logging: false,
      scale: window.devicePixelRatio || 1,
    });
    return canvas.toDataURL('image/png');
  } catch {
    return null;
  }
}

async function copyImageToClipboard(dataUrl: string): Promise<void> {
  try {
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
  } catch {
    // Fallback: copy as link text
  }
}

// ─── Inspector overlay label ──────────────────────────────────────────────────

interface HoverInfo {
  rect: DOMRect;
  label: string;
}

// ─── Main component ───────────────────────────────────────────────────────────

interface CapturedElement {
  context: string;
  screenshot: string | null;
  label: string;
}

export default function DevClickToSource() {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState<HoverInfo | null>(null);
  const [captured, setCaptured] = useState<CapturedElement[]>([]);
  const [copyFeedback, setCopyFeedback] = useState(false);

  const activeRef = useRef(false);
  const hoverRef = useRef<HTMLElement | null>(null);
  const dismissTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { activeRef.current = active; }, [active]);

  // Cursor crosshair cuando el inspector está activo
  useEffect(() => {
    document.documentElement.style.cursor = active ? 'crosshair' : '';
    return () => { document.documentElement.style.cursor = ''; };
  }, [active]);

  const isInspectorEl = useCallback((el: HTMLElement) => {
    return el.closest('[data-dev-inspector]') !== null;
  }, []);

  // ─── Hover handler
  useEffect(() => {
    if (!active) { setHover(null); return; }

    function onMouseMove(e: MouseEvent) {
      const el = e.target as HTMLElement;
      if (isInspectorEl(el)) { setHover(null); hoverRef.current = null; return; }
      hoverRef.current = el;
      const rect = el.getBoundingClientRect();
      const tag = el.tagName.toLowerCase();
      const cls = getSignificantClasses(el).split(' ')[0] || '';
      const fiber = getReactFiber(el);
      const chain = fiber ? getComponentChain(fiber) : [];
      const componentName = chain[0] ? ` [${chain[0]}]` : '';
      setHover({ rect, label: `<${tag}>${cls ? '.' + cls : ''}${componentName}` });
    }

    function onMouseLeave() { setHover(null); hoverRef.current = null; }

    document.addEventListener('mousemove', onMouseMove, true);
    document.addEventListener('mouseleave', onMouseLeave, true);
    return () => {
      document.removeEventListener('mousemove', onMouseMove, true);
      document.removeEventListener('mouseleave', onMouseLeave, true);
    };
  }, [active, isInspectorEl]);

  // ─── Alt+Click toggle (mousedown para capturar antes que click)
  useEffect(() => {
    function handleAltToggle(e: MouseEvent) {
      if (!e.altKey) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      const wasActive = activeRef.current;
      setActive(!wasActive);
      if (wasActive) { setCaptured([]); setHover(null); }
    }
    document.addEventListener('mousedown', handleAltToggle, true);
    return () => document.removeEventListener('mousedown', handleAltToggle, true);
  }, []);

  // ─── Click handler (inspección de elementos)
  useEffect(() => {
    async function handleClick(e: MouseEvent) {
      // Ignorar Alt+Click (manejado en mousedown)
      if (e.altKey) { e.preventDefault(); e.stopImmediatePropagation(); return; }
      if (!activeRef.current) return;
      const el = e.target as HTMLElement;
      // Dejar pasar clicks en elementos del inspector (botón lupa, panel, etc.)
      if (isInspectorEl(el)) return;
      e.preventDefault();
      e.stopPropagation();

      const context = buildRichContext(el);
      const screenshot = await captureScreenshot(el);

      const tag = el.tagName.toLowerCase();
      const cls = getSignificantClasses(el).split(' ')[0] || '';
      const label = `<${tag}>${cls ? '.' + cls : ''}`;

      if (e.ctrlKey || e.metaKey) {
        // Multi-selection — sin auto-dismiss
        if (dismissTimer.current) clearTimeout(dismissTimer.current);
        setCaptured(prev => [...prev, { context, screenshot, label }]);
      } else {
        // Click simple — desaparece a los 2.5s
        if (dismissTimer.current) clearTimeout(dismissTimer.current);
        setCaptured([{ context, screenshot, label }]);
        dismissTimer.current = setTimeout(() => setCaptured([]), 2500);
      }

      // Copy text to clipboard
      navigator.clipboard.writeText(context).catch(() => {});
      // Copy image if available
      if (screenshot) await copyImageToClipboard(screenshot).catch(() => {});
    }

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [isInspectorEl]);

  // ─── Keyboard handler
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') { setActive(false); setCaptured([]); setHover(null); }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleCopyAll = async () => {
    const text = captured.map(c => c.context).join('\n\n---\n\n');
    await navigator.clipboard.writeText(text).catch(() => {});
    // Copy last screenshot
    const lastWithShot = [...captured].reverse().find(c => c.screenshot);
    if (lastWithShot?.screenshot) await copyImageToClipboard(lastWithShot.screenshot).catch(() => {});
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 1500);
  };

  if (process.env.NODE_ENV === 'production') return null;

  return (
    <>
      {/* Hover highlight overlay */}
      {active && hover && (
        <div
          data-dev-inspector
          style={{
            position: 'fixed',
            top: hover.rect.top,
            left: hover.rect.left,
            width: hover.rect.width,
            height: hover.rect.height,
            outline: '2px solid #facc15',
            outlineOffset: '1px',
            backgroundColor: 'rgba(250,204,21,0.08)',
            pointerEvents: 'none',
            zIndex: 99996,
            borderRadius: 2,
          }}
        />
      )}

      {/* Hover label */}
      {active && hover && (
        <div
          data-dev-inspector
          style={{
            position: 'fixed',
            top: Math.max(hover.rect.top - 26, 4),
            left: hover.rect.left,
            background: '#facc15',
            color: '#1a1a1a',
            fontSize: 11,
            fontFamily: 'ui-monospace, "Fira Code", monospace',
            fontWeight: 700,
            padding: '2px 7px',
            borderRadius: 4,
            pointerEvents: 'none',
            zIndex: 99997,
            whiteSpace: 'nowrap',
            maxWidth: '60vw',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {hover.label}
        </div>
      )}

      {/* Toggle button */}
      <button
        data-dev-inspector
        onClick={() => { setActive(v => !v); if (active) { setCaptured([]); setHover(null); } }}
        title={active ? 'Desactivar inspector (Esc)' : 'Activar inspector (Alt+Click)'}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: active ? '#facc15' : '#1e1e1c',
          color: active ? '#1a1a1a' : '#facc15',
          border: `2px solid ${active ? '#f59e0b' : '#facc15'}`,
          cursor: 'pointer',
          zIndex: 99998,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
          boxShadow: active ? '0 0 12px rgba(250,204,21,0.6)' : '0 2px 8px rgba(0,0,0,0.4)',
          transition: 'all 0.15s',
        }}
      >
        🔍
      </button>

      {/* Info panel */}
      {captured.length > 0 && (
        <div
          data-dev-inspector
          style={{
            position: 'fixed',
            bottom: 70,
            right: 20,
            width: 380,
            maxHeight: '60vh',
            overflowY: 'auto',
            background: '#0f0f0e',
            border: '1px solid rgba(250,204,21,0.25)',
            borderRadius: 10,
            zIndex: 99998,
            boxShadow: '0 8px 32px rgba(0,0,0,0.7)',
            fontFamily: 'ui-monospace, "Fira Code", monospace',
            fontSize: 11,
          }}
        >
          {/* Panel header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: '#1a1a18' }}>
            <span style={{ color: '#facc15', fontWeight: 700, fontSize: 11 }}>
              🔍 {captured.length === 1 ? captured[0].label : `${captured.length} elementos`}
            </span>
            <div style={{ display: 'flex', gap: 6 }}>
              <button
                data-dev-inspector
                onClick={handleCopyAll}
                style={{ background: copyFeedback ? '#15803d' : '#292927', color: copyFeedback ? '#86efac' : '#a3a39a', border: 'none', borderRadius: 5, padding: '3px 8px', cursor: 'pointer', fontSize: 10, fontFamily: 'inherit' }}
              >
                {copyFeedback ? '✓ Copiado' : '📋 Copiar todo'}
              </button>
              <button
                data-dev-inspector
                onClick={() => setCaptured([])}
                style={{ background: '#292927', color: '#7d7b73', border: 'none', borderRadius: 5, padding: '3px 8px', cursor: 'pointer', fontSize: 10, fontFamily: 'inherit' }}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Captured items */}
          {captured.map((item, i) => (
            <div key={i} style={{ borderBottom: i < captured.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
              {/* Screenshot thumbnail */}
              {item.screenshot && (
                <div style={{ padding: '8px 12px 0' }}>
                  <img
                    src={item.screenshot}
                    alt="screenshot"
                    style={{ width: '100%', borderRadius: 6, border: '1px solid rgba(250,204,21,0.2)', display: 'block' }}
                  />
                </div>
              )}
              {/* Context text */}
              <pre style={{ margin: 0, padding: '8px 12px', color: '#c2c0b6', lineHeight: 1.6, whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontSize: 10.5 }}>
                {item.context}
              </pre>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
