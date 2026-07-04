/* eslint-disable @typescript-eslint/ban-ts-comment, react-hooks/set-state-in-effect */
// @ts-nocheck
'use client';

import { useEffect, useLayoutEffect, useState, useRef, useCallback } from 'react';
import { toBlob } from 'html-to-image';
import { copyToClipboard as copiarAlPortapapeles } from '@/lib/clipboard';

/**
 * DevClickToSource - Inspector visual de elementos React (solo desarrollo).
 *
 * Activación:
 *  - Botón flotante esquina inferior derecha
 *  - Alt+Click sobre cualquier elemento de la app (atajo rápido: solo activa)
 *
 * Una vez activo:
 *  - Hover o ↑/↓ eligen el target con contorno cyan fino antes de capturar
 *  - ⌘+Click (Ctrl+Click fuera de inputs) acumula capturas sin copiar
 *  - Clic simple copia capturas acumuladas + target final (texto + imagen) y desactiva
 *  - Esc limpia capturas acumuladas; segundo Esc cierra el inspector
 *  - Botones, enlaces, selects y demás controles no ejecutan la app en clic simple
 *  - ↑ / ↓ suben o bajan de nivel (padre / hijo) antes de capturar
 *  - En inputs de texto: clic normal inspecciona; Ctrl/Cmd+clic o doble clic permiten escribir/seleccionar
 *  - Esc o el botón flotante desactiva el inspector
 */

const IS_DEV = process.env.NODE_ENV === 'development';
const CODEX_INSPECTOR_DEBUG = process.env.NEXT_PUBLIC_CODEX_INSPECTOR_DEBUG === 'true';
const PROJECT_SOURCE_ROOTS = ['app', 'components', 'lib', 'hooks', 'data', 'types'];

// Mapa ComponentName -> ruta del archivo. En Next se resuelve con /api/dev-inspector-locate.
const fileMap = {};

// ─── Helpers de extracción del fiber ───
const getFiberFromElement = (el) => {
  const key = Object.keys(el).find(
    (k) => k.startsWith('__reactFiber$') || k.startsWith('__reactInternalInstance$')
  );
  return key ? el[key] : null;
};

const findComponents = (fiber) => {
  let cur = fiber;
  const out = [];
  while (cur) {
    if ((cur.tag === 0 || cur.tag === 1) && cur.type) {
      const name = cur.type.displayName || cur.type.name;
      if (name && !name.startsWith('_') && name !== 'Fragment') out.push(name);
    }
    cur = cur.return;
  }
  return out;
};

const normalizeSourcePath = (fileName) => {
  if (!fileName) return '';
  const clean = String(fileName).replace(/\\/g, '/');
  const withoutDotPrefix = clean.replace(/^\.\//, '');
  if (PROJECT_SOURCE_ROOTS.some((root) => withoutDotPrefix.startsWith(`${root}/`))) {
    return withoutDotPrefix;
  }
  for (const root of PROJECT_SOURCE_ROOTS) {
    const marker = `/${root}/`;
    const index = clean.indexOf(marker);
    if (index >= 0) return clean.slice(index + 1);
  }
  const webpackMatch = clean.match(/(?:^|\/|\.\/)(app|components|lib|hooks|data|types)\//);
  if (webpackMatch?.[1]) {
    return clean.slice(webpackMatch.index || 0).replace(/^(?:\/|\.\/)+/, '');
  }
  return clean;
};

const isProjectSourcePath = (fileName) => {
  const normalized = normalizeSourcePath(fileName);
  return PROJECT_SOURCE_ROOTS.some((root) => normalized.startsWith(`${root}/`));
};

const getFiberDebugSource = (fiber, maxDepth = 16) => {
  let cur = fiber;
  let depth = 0;

  while (cur && depth < maxDepth) {
    const direct = cur._debugSource || cur.type?._debugSource;
    if (direct?.fileName && direct?.lineNumber && isProjectSourcePath(direct.fileName)) {
      return {
        file: normalizeSourcePath(direct.fileName),
        line: direct.lineNumber,
        column: direct.columnNumber || null,
        sourceKind: 'fiber',
      };
    }
    cur = cur._debugOwner || cur.return;
    depth += 1;
  }

  return null;
};

const formatSourceLocation = (source) => {
  if (!source?.file) return '';
  if (source.line) return `${source.file}:${source.line}`;
  return source.file;
};

const resolveElementSourceLocation = (el) => {
  const fiber = getFiberFromElement(el);
  return fiber ? getFiberDebugSource(fiber) : null;
};

const snapshotRect = (el) => {
  if (!el?.getBoundingClientRect) return null;
  const rect = el.getBoundingClientRect();
  return {
    top: rect.top,
    left: rect.left,
    width: rect.width,
    height: rect.height,
  };
};

const getElementClassNames = (el, maxLen = 80) => {
  const raw = el?.getAttribute?.('class') || '';
  const clean = String(raw).replace(/\s+/g, ' ').trim();
  if (!clean) return '';
  return clean.length > maxLen ? `${clean.slice(0, maxLen)}…` : clean;
};

const TECHNICAL_COMPONENT_WRAPPERS = new Set([
  'AnimatePresence',
  'AnimatePresenceChild',
  'PresenceChild',
  'PopChild',
  'PopChildMeasure',
  'LazyMotion',
  'MotionConfig',
  'PageTransition',
  'ContentStagger',
  'ForwardRef',
  'Memo',
  'Suspense',
  'SuspenseWrapper',
  'Fragment',
  'Outlet',
  'RenderedRoute',
  'Routes',
  'Router',
  'BrowserRouter',
  'RouterProvider',
]);

const isTechnicalComponent = (name) => (
  !name ||
  TECHNICAL_COMPONENT_WRAPPERS.has(name) ||
  name.startsWith('motion.') ||
  name.startsWith('Motion') ||
  name.startsWith('PopChild')
);

const getSemanticComponents = (components) => {
  const semantic = components.filter((name) => !isTechnicalComponent(name));
  const source = semantic.length ? semantic : components.filter(Boolean);
  return Array.from(new Set(source));
};

const isProviderComponent = (name) => (
  name?.endsWith('Provider') ||
  name?.endsWith('ContextProvider')
);

const LOW_SIGNAL_ANCESTOR_COMPONENTS = new Set([
  'MainLayout',
  'Layout',
  'App',
  'AppSimple',
  'AppWrapper',
  'AppProvider',
  'AppRouter',
  'DescargasProvider',
  'UserProvider',
  'ErrorBoundary',
  'RenderErrorBoundary',
  'DefaultErrorComponent',
]);

const ANCESTOR_GLOBAL_SHELL_STOPS = new Set([
  'App',
  'AppSimple',
  'AppWrapper',
  'AppProvider',
  'AppRouter',
  'MainLayout',
]);

const isGlobalShellAncestor = (name) => (
  !name ||
  ANCESTOR_GLOBAL_SHELL_STOPS.has(name) ||
  name.endsWith('Router') ||
  name.includes('RouterProvider') ||
  name.endsWith('Boundary') ||
  name.endsWith('Layout')
);

const isUsefulAncestorComponent = (name) => (
  name &&
  !LOW_SIGNAL_ANCESTOR_COMPONENTS.has(name) &&
  !name.endsWith('Boundary') &&
  !name.endsWith('Layout') &&
  !name.endsWith('Router') &&
  !name.includes('RouterProvider')
);

const getComponentSummary = (components) => {
  const semanticComponents = getSemanticComponents(components);
  const componentName = semanticComponents.find((name) => !isProviderComponent(name)) || semanticComponents[0] || components[0] || '';
  const usefulAncestors = [];
  for (const name of semanticComponents.slice(semanticComponents.indexOf(componentName) + 1)) {
    if (isGlobalShellAncestor(name)) break;
    if (isUsefulAncestorComponent(name)) usefulAncestors.push(name);
    if (usefulAncestors.length >= 4) break;
  }

  return {
    semanticComponents,
    componentName,
    usefulAncestors,
  };
};

const formatInspectorBlockTitle = (item, index) => {
  const location = item.exactLocation || item.componentDefinition || item.filePath || '';
  const lineMatch = location.match(/:(\d+)$/);
  const lineSuffix = lineMatch ? ` · L${lineMatch[1]}` : '';
  const shortLabel = item.visibleText
    ? trunc(String(item.visibleText).replace(/\s+/g, ' ').trim(), 28)
    : item.contextDesc
      ? trunc(normalizeInspectorZone(item.contextDesc), 28)
      : '';
  const labelSuffix = shortLabel ? ` · "${shortLabel}"` : '';
  return `#${index + 1} · ${item.componentName || 'Componente'}${lineSuffix}${labelSuffix}`;
};

const trunc = (s, n = 60) => {
  const clean = (s || '').replace(/\s+/g, ' ').trim();
  return clean.length > n ? clean.substring(0, n) + '…' : clean;
};

/** Acorta rutas de archivo preservando siempre el número de línea al final. */
const formatInspectorLocationCompact = (location) => {
  const raw = String(location || '').trim();
  if (!raw) return '';

  const match = raw.match(/^(.*?)(:\d+)$/);
  if (!match) return trunc(raw, 52);

  const [, file, line] = match;
  const shortFile = file.replace(/^src\//, '');
  const compact = `${shortFile}${line}`;
  if (compact.length <= 52) return compact;

  const fileName = shortFile.split('/').pop() || shortFile;
  const tail = `…/${fileName}${line}`;
  return tail.length <= 52 ? tail : `${trunc(fileName, 52 - line.length - 4)}${line}`;
};

const getInspectorLocationFile = (location) => {
  const raw = String(location || '').trim();
  if (!raw) return '';
  return raw.replace(/:\d+(?::\d+)?$/, '');
};

const getInspectorLocationShortName = (location) => {
  const raw = String(location || '').trim();
  if (!raw) return '';

  const lineMatch = raw.match(/(:\d+(?::\d+)?)$/);
  const file = getInspectorLocationFile(raw) || raw;
  const fileName = file.split('/').pop() || file;
  return `${fileName}${lineMatch?.[1] || ''}`;
};

const getInspectorZoneLabel = (value) => {
  const clean = normalizeInspectorZone(value)
    .replace(/\s+/g, ' ')
    .trim();
  if (!clean) return '';

  const labeled = clean.match(/^(?:Sección|Panel|Panel lateral|Zona|Tarjeta|Modal|Bloque):\s*"?(.+?)"?$/i);
  return labeled ? labeled[1].trim() : clean;
};

const sameInspectorFile = (a, b) => {
  const fileA = getInspectorLocationFile(a || '');
  const fileB = getInspectorLocationFile(b || '');
  return Boolean(fileA && fileB && fileA === fileB);
};

const getRelevantProps = (fiber) => {
  const props = new Set();
  let cur = fiber;
  let depth = 0;
  while (cur && depth < 4) {
    const p = cur.memoizedProps || cur.pendingProps;
    if (p) {
      if (p.onClick) props.add('onClick');
      if (p.onChange) props.add('onChange');
      if (p.onSubmit) props.add('onSubmit');
      if (p.disabled) props.add('disabled');
      if (p['aria-disabled']) props.add(`aria-disabled="${p['aria-disabled']}"`);
      if (p['data-disabled']) props.add(`data-disabled="${p['data-disabled']}"`);
      if (p['data-testid']) props.add(`data-testid="${p['data-testid']}"`);
      if (p.name) props.add(`name="${p.name}"`);
      if (p.id) props.add(`id="${p.id}"`);
      if (p.role) props.add(`role="${p.role}"`);
      if (p.type && typeof p.type === 'string') props.add(`type="${p.type}"`);
      if (p.placeholder) props.add(`placeholder="${trunc(p.placeholder, 30)}"`);
    }
    if (cur.key != null && cur.key !== '') props.add(`key="${cur.key}"`);
    cur = cur.return;
    depth++;
  }
  return Array.from(props);
};

const ACTIONABLE_SELECTOR = [
  'button',
  'a[href]',
  'input',
  'select',
  'textarea',
  '[role="button"]',
  '[role="link"]',
  '[role="menuitem"]',
  '[role="tab"]',
  '[disabled]',
  '[aria-disabled]',
  '[data-disabled]',
  '[onclick]',
].join(',');

const findActionableElement = (el) => {
  if (!el?.closest) return el;
  return el.closest(ACTIONABLE_SELECTOR) || el;
};

const INPUT_TYPES_SIN_EDICION = new Set([
  'button',
  'submit',
  'reset',
  'checkbox',
  'radio',
  'file',
  'image',
  'hidden',
  'color',
  'range',
]);

const isEditableFormControl = (el) => {
  const control = el?.closest?.('input, textarea, select, [contenteditable="true"]');
  if (!control) return false;

  const tag = control.tagName?.toLowerCase();
  if (tag === 'textarea' || tag === 'select' || control.isContentEditable) return true;
  if (tag !== 'input') return false;

  const type = (control.getAttribute('type') || 'text').toLowerCase();
  return !INPUT_TYPES_SIN_EDICION.has(type);
};

/**
 * Con inspector activo: clic normal inspecciona el control.
 * Ctrl/Cmd+clic o doble clic dejan pasar el evento para escribir/seleccionar texto.
 */
const shouldLetFormControlInteract = (e, el) => (
  isEditableFormControl(el) && (e.ctrlKey || e.metaKey || e.detail >= 2)
);

const getReadableText = (el, max = 70) => {
  if (!el) return '';
  let direct = '';
  for (const node of el.childNodes || []) {
    if (node.nodeType === 3) direct += node.textContent;
  }
  direct = trunc(direct, max);
  if (direct) return direct;
  return trunc(el.textContent, max);
};

const getNearbyVisibleTextFromIcon = (clickedEl) => {
  let current = clickedEl?.parentElement;
  let depth = 0;

  while (current && depth < 3) {
    const blockSelectors = ':scope > p, :scope > h1, :scope > h2, :scope > h3, :scope > h4, :scope > button, :scope > label';
    const blocks = current.querySelectorAll?.(blockSelectors) || [];
    for (const block of blocks) {
      const text = trunc((block.textContent || '').replace(/\s+/g, ' ').trim(), 90);
      if (text.length >= 8) {
        return { text, depth, blockTag: block.tagName?.toLowerCase() || '' };
      }
    }
    current = current.parentElement;
    depth += 1;
  }

  return null;
};

const describeElement = (el) => {
  if (!el) return '(none)';
  const tag = el.tagName?.toLowerCase() || '?';
  const text = getReadableText(el, 70);
  const aria = el.getAttribute?.('aria-label') || '';
  const role = el.getAttribute?.('role') || '';
  const dataTestId = el.getAttribute?.('data-testid') || '';
  const id = el.getAttribute?.('id') || '';
  const name = el.getAttribute?.('name') || '';
  const placeholder = el.getAttribute?.('placeholder') || '';
  const disabled = el.hasAttribute?.('disabled');
  const ariaDisabled = el.getAttribute?.('aria-disabled') || '';
  const dataDisabled = el.getAttribute?.('data-disabled') || '';

  const parts = [`<${tag}>`];
  if (text) parts.push(`text="${text}"`);
  if (aria) parts.push(`aria="${trunc(aria, 50)}"`);
  if (role) parts.push(`role="${role}"`);
  if (disabled) parts.push('disabled');
  if (ariaDisabled) parts.push(`aria-disabled="${ariaDisabled}"`);
  if (dataDisabled) parts.push(`data-disabled="${dataDisabled}"`);
  if (id) parts.push(`id="${id}"`);
  if (name) parts.push(`name="${name}"`);
  if (placeholder) parts.push(`placeholder="${trunc(placeholder, 40)}"`);
  if (dataTestId) parts.push(`data-testid="${dataTestId}"`);
  return parts.join(' ');
};

const getElementClassName = (el) => {
  const raw = el?.getAttribute?.('class') || '';
  return typeof raw === 'string' ? raw.toLowerCase() : '';
};

const getContextKind = (el) => {
  if (!el) return '';
  const tag = el.tagName?.toLowerCase() || '';
  const role = el.getAttribute?.('role') || '';
  const ariaModal = el.getAttribute?.('aria-modal') === 'true';
  const className = getElementClassName(el);

  if (tag === 'dialog' || ariaModal || role === 'dialog' || role === 'alertdialog') return 'Modal/Dialog';
  if (tag === 'form') return 'Formulario';
  if (tag === 'table' || role === 'table' || role === 'grid' || role === 'treegrid') return 'Tabla';
  if (role === 'toolbar' || className.includes('toolbar')) return 'Toolbar';
  if (role === 'tablist') return 'Tabs';
  if (role === 'menu' || role === 'menubar' || className.includes('dropdown')) return 'Menu/Dropdown';
  if (tag === 'nav') return 'Navegación';
  if (tag === 'aside') return 'Panel lateral';
  if (tag === 'section' || tag === 'article') return 'Sección';

  if (className.includes('modal') || className.includes('dialog')) return 'Modal/Dialog';
  if (className.includes('drawer')) return 'Drawer';
  if (className.includes('popover')) return 'Popover';
  if (className.includes('panel')) return 'Panel';
  if (className.includes('card')) return 'Card';
  if (className.includes('table')) return 'Tabla';

  return '';
};

const getTextFromLabelledBy = (el) => {
  const ids = (el?.getAttribute?.('aria-labelledby') || '').split(/\s+/).filter(Boolean);
  if (!ids.length || typeof document === 'undefined') return '';
  const text = ids
    .map((id) => document.getElementById(id)?.textContent || '')
    .filter(Boolean)
    .join(' ');
  return trunc(text, 90);
};

const getContextTitle = (el) => {
  if (!el?.querySelector) return '';
  const labelledBy = getTextFromLabelledBy(el);
  if (labelledBy) return labelledBy;

  const ownLabel = el.getAttribute?.('aria-label') || el.getAttribute?.('data-title') || el.getAttribute?.('title') || '';
  if (ownLabel) return trunc(ownLabel, 90);

  const heading = el.querySelector('h1, h2, h3, h4, [role="heading"], [data-heading], [data-title]');
  if (heading) return trunc(heading.textContent, 90);

  return '';
};

const findContextElement = (el) => {
  let current = el?.parentElement || null;
  let fallback = null;
  let depth = 0;

  while (current && current !== document.body && current !== document.documentElement && depth < 10) {
    const kind = getContextKind(current);
    const title = getContextTitle(current);
    if (kind) return { element: current, kind, title };
    if (!fallback && title) fallback = { element: current, kind: 'Zona cercana', title };
    current = current.parentElement;
    depth++;
  }

  return fallback;
};

const getControlLabel = (el) => {
  if (!el) return '';
  return trunc(
    el.getAttribute?.('aria-label') ||
    el.getAttribute?.('title') ||
    el.getAttribute?.('placeholder') ||
    getReadableText(el, 46) ||
    el.getAttribute?.('name') ||
    el.getAttribute?.('id') ||
    '',
    46
  );
};

const isVisibleForInspector = (el) => {
  if (!el?.getBoundingClientRect) return false;
  const rect = el.getBoundingClientRect();
  if (rect.width < 1 || rect.height < 1) return false;
  const style = window.getComputedStyle?.(el);
  return !style || (style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity || 1) > 0);
};

const isInspectorShellNode = (el) => (
  el === document.body ||
  el === document.documentElement ||
  el === document.head
);

const isInspectorExcludedNode = (el) => (
  !el ||
  el.nodeType !== 1 ||
  isInspectorShellNode(el) ||
  el.getAttribute?.('data-dev-inspector') != null
);

const isInspectorUiNode = (node) => {
  let current = node;
  while (current) {
    if (current.nodeType === 1 && current.getAttribute?.('data-dev-inspector') != null) {
      return true;
    }
    current = current.parentElement || current.parentNode || current.host;
  }
  return false;
};

const INSPECTOR_KEYBOARD_LOCK_MS = 300;

const INSPECTOR_CONTEXT_MIN_CAPTURE = 120;
const INSPECTOR_CONTEXT_SMALL_THRESHOLD = 80;
const INSPECTOR_CONTEXT_MAX_PARENT_LIFT = 3;

const resolveContextCaptureTarget = (el, minSize = INSPECTOR_CONTEXT_MIN_CAPTURE) => {
  if (!el?.getBoundingClientRect) return el;

  let current = el;
  let depth = 0;

  while (current && depth < INSPECTOR_CONTEXT_MAX_PARENT_LIFT) {
    const rect = current.getBoundingClientRect();
    if (rect.width >= minSize && rect.height >= minSize) return current;

    const parent = current.parentElement;
    if (!parent || isInspectorShellNode(parent) || isInspectorExcludedNode(parent)) break;

    current = parent;
    depth += 1;
  }

  return el;
};

const needsContextCapture = (el) => {
  if (!el?.getBoundingClientRect) return false;
  const rect = el.getBoundingClientRect();
  return rect.width < INSPECTOR_CONTEXT_SMALL_THRESHOLD || rect.height < INSPECTOR_CONTEXT_SMALL_THRESHOLD;
};

const MODAL_ROOT_SELECTORS = [
  '[role="dialog"][aria-modal="true"]',
  'dialog[open]',
  '[aria-modal="true"]',
];

const FLOATING_OVERLAY_ROLES = new Set(['menu', 'listbox', 'tooltip']);

const OVERLAY_MIN_Z_INDEX = 40;
const VIEWPORT_COVERAGE_RATIO = 0.9;
const INSPECTOR_SCOPE_OBSERVER_MS = 120;
const WIREFRAME_STROKE = 'rgba(148,163,184,0.16)';
const WIREFRAME_MAX_RECTS = 1800;
const WIREFRAME_MIN_SIZE = 2;
const WIREFRAME_FALLBACK_MIN_SIZE = 12;
const WIREFRAME_SHALLOW_SELECTORS = [
  '.tabla-excel-container',
  '.tabla-excel-header-row',
  '.tabla-excel-th-virtual',
  '.tabla-excel-virtual-body',
  '.tabla-excel-tr-virtual',
  '.tabla-excel-td-virtual',
].join(',');
const WIREFRAME_SHALLOW_SKIP_SELECTOR = [
  '.tabla-excel-td-content',
  '.tabla-excel-th-content',
  '.tabla-excel-th-label',
  'svg',
  'path',
  'button',
  'span',
].join(',');

const getElementStackIndex = (el) => {
  if (!el || typeof window === 'undefined') return 0;
  const style = window.getComputedStyle(el);
  const zIndex = Number.parseInt(style.zIndex, 10);
  return Number.isFinite(zIndex) ? zIndex : 0;
};

const getEffectiveZIndex = (el) => getElementStackIndex(el);

const coversMostOfViewport = (el) => {
  if (!el?.getBoundingClientRect) return false;
  const rect = el.getBoundingClientRect();
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  if (vw <= 0 || vh <= 0) return false;

  const marginX = vw * (1 - VIEWPORT_COVERAGE_RATIO) / 2;
  const marginY = vh * (1 - VIEWPORT_COVERAGE_RATIO) / 2;

  return (
    rect.width >= vw * VIEWPORT_COVERAGE_RATIO &&
    rect.height >= vh * VIEWPORT_COVERAGE_RATIO &&
    rect.left <= marginX + 1 &&
    rect.top <= marginY + 1
  );
};

const isFloatingOverlayRole = (el) => {
  const role = el?.getAttribute?.('role') || '';
  return FLOATING_OVERLAY_ROLES.has(role);
};

const isFullscreenFixedOverlay = (el) => {
  if (!el || isInspectorExcludedNode(el) || isInspectorUiNode(el)) return false;
  if (!isVisibleForInspector(el)) return false;
  if (isFloatingOverlayRole(el)) return false;

  const style = typeof window !== 'undefined' ? window.getComputedStyle?.(el) : null;
  if (style?.position !== 'fixed') return false;
  if (getEffectiveZIndex(el) < OVERLAY_MIN_Z_INDEX) return false;
  return coversMostOfViewport(el);
};

const findFullscreenOverlayRoots = () => {
  if (typeof document === 'undefined') return [];

  const candidates = [];
  for (const child of document.body.children) {
    if (child.nodeType !== 1) continue;
    if (isFullscreenFixedOverlay(child)) candidates.push(child);
  }
  return candidates;
};

const pickTopStackCandidate = (candidates) => {
  if (!candidates.length) return null;
  return candidates.reduce((best, el) => (
    getEffectiveZIndex(el) >= getEffectiveZIndex(best) ? el : best
  ));
};

const findActiveModalRoot = () => {
  if (typeof document === 'undefined') return null;

  const ariaCandidates = Array.from(document.querySelectorAll(MODAL_ROOT_SELECTORS.join(',')))
    .filter((el) => !isInspectorExcludedNode(el) && !isInspectorUiNode(el) && isVisibleForInspector(el));

  const overlayCandidates = findFullscreenOverlayRoots();
  return pickTopStackCandidate([...ariaCandidates, ...overlayCandidates]);
};

const isElementInsideRoot = (el, root) => {
  if (!el || !root) return false;
  return el === root || root.contains(el);
};

/** Menús/tooltips en portal (body), encima de un modal abierto — no el modal en sí. */
const isPortaledOverlayOutsideModal = (el) => {
  const modalRoot = findActiveModalRoot();
  if (!modalRoot || isElementInsideRoot(el, modalRoot)) return false;

  let cur = el;
  while (cur && cur !== document.documentElement) {
    const role = cur.getAttribute?.('role') || '';
    if (FLOATING_OVERLAY_ROLES.has(role)) return true;

    const style = typeof window !== 'undefined' ? window.getComputedStyle?.(cur) : null;
    if (style?.position === 'fixed' && cur.parentElement === document.body && !isFullscreenFixedOverlay(cur)) {
      return true;
    }

    cur = cur.parentElement;
  }
  return false;
};

const findMainInspectorScopeRoot = () => {
  if (typeof document === 'undefined') return null;

  const scopes = Array.from(document.querySelectorAll('[data-dev-inspector-main-scope]'))
    .filter((el) => !isInspectorExcludedNode(el) && !isInspectorUiNode(el) && isVisibleForInspector(el));

  if (!scopes.length) return null;
  return scopes.reduce((best, el) => {
    const bestRect = best.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    return rect.width * rect.height > bestRect.width * bestRect.height ? el : best;
  });
};

const resolveInspectorScopeRoot = () => (
  findActiveModalRoot() ||
  findMainInspectorScopeRoot() ||
  document.body
);

const getWireframeRectKey = (rect) => [
  Math.round(rect.left),
  Math.round(rect.top),
  Math.round(rect.width),
  Math.round(rect.height),
].join(':');

const addWireframeRect = (rects, seen, el, minSize) => {
  if (!el || isInspectorExcludedNode(el) || isInspectorUiNode(el)) return;
  if (!isVisibleForInspector(el)) return;

  const rect = el.getBoundingClientRect();
  if (rect.width < minSize || rect.height < minSize) return;
  if (rect.bottom < 0 || rect.right < 0 || rect.top > window.innerHeight || rect.left > window.innerWidth) return;

  const key = getWireframeRectKey(rect);
  if (seen.has(key)) return;

  seen.add(key);
  rects.push({
    top: rect.top,
    left: rect.left,
    width: rect.width,
    height: rect.height,
  });
};

const collectShallowWireframeRects = (root, rects, seen, minSize) => {
  addWireframeRect(rects, seen, root, minSize);

  const nodes = root.querySelectorAll?.(WIREFRAME_SHALLOW_SELECTORS) || [];
  for (const el of nodes) {
    if (el !== root && el.closest?.(WIREFRAME_SHALLOW_SKIP_SELECTOR)) continue;
    addWireframeRect(rects, seen, el, minSize);
  }
};

const collectWireframeRects = (root = document.body, { minSize = WIREFRAME_MIN_SIZE } = {}) => {
  if (!root?.querySelectorAll) return [];

  const rects = [];
  const seen = new Set();
  const walk = (el) => {
    if (!el || rects.length >= WIREFRAME_MAX_RECTS) return;
    if (isInspectorExcludedNode(el) || isInspectorUiNode(el)) return;
    if (!isVisibleForInspector(el)) return;

    if (el.getAttribute?.('data-dev-inspector-wireframe') === 'shallow') {
      collectShallowWireframeRects(el, rects, seen, minSize);
      return;
    }

    addWireframeRect(rects, seen, el, minSize);

    for (const child of el.children || []) {
      walk(child);
      if (rects.length >= WIREFRAME_MAX_RECTS) break;
    }
  };

  if (isInspectorShellNode(root)) {
    for (const child of root.children || []) {
      walk(child);
      if (rects.length >= WIREFRAME_MAX_RECTS) break;
    }
  } else {
    walk(root);
  }

  if (rects.length >= WIREFRAME_MAX_RECTS && minSize < WIREFRAME_FALLBACK_MIN_SIZE) {
    return collectWireframeRects(root, { minSize: WIREFRAME_FALLBACK_MIN_SIZE });
  }

  return rects;
};

const drawWireframeCanvas = (canvas, rects) => {
  if (!canvas || typeof window === 'undefined') return;

  const dpr = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = WIREFRAME_STROKE;
  ctx.lineWidth = 1;

  for (const rect of rects) {
    ctx.strokeRect(
      rect.left + 0.5,
      rect.top + 0.5,
      Math.max(0, rect.width - 1),
      Math.max(0, rect.height - 1)
    );
  }
};

const getInspectorHighlightInfo = (el) => {
  const rect = snapshotRect(el);
  if (!rect) return null;

  const tag = el.tagName?.toLowerCase?.() || '?';
  const classes = Array.from(el.classList || [])
    .filter(Boolean)
    .slice(0, 2)
    .join('.');
  const domLabel = classes ? `<${tag}>.${classes}` : `<${tag}>`;

  let componentLabel = '';
  let current = el;
  while (current && !componentLabel) {
    const fiber = getFiberFromElement(current);
    if (fiber) componentLabel = getComponentSummary(findComponents(fiber)).componentName || '';
    current = current.parentElement;
  }

  return {
    ...rect,
    label: componentLabel || domLabel,
    detail: componentLabel ? domLabel : '',
  };
};

const getDeepestChildTowardPoint = (parent, x, y) => {
  if (!parent?.children?.length) return null;

  let best = null;
  let bestArea = Infinity;

  for (const child of parent.children) {
    if (isInspectorExcludedNode(child) || isInspectorUiNode(child) || !isVisibleForInspector(child)) {
      continue;
    }

    const rect = child.getBoundingClientRect();
    if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) continue;

    const area = rect.width * rect.height;
    if (area < bestArea) {
      bestArea = area;
      best = child;
    }
  }

  return best;
};

const isViewportLayoutCandidate = (el) => {
  if (!el?.getBoundingClientRect || typeof window === 'undefined') return false;
  if (el.matches?.(ACTIONABLE_SELECTOR)) return false;

  const tag = el.tagName?.toLowerCase?.() || '';
  if (['button', 'input', 'textarea', 'select', 'a', 'label', 'h1', 'h2', 'h3', 'h4', 'p'].includes(tag)) {
    return false;
  }

  const rect = el.getBoundingClientRect();
  return (
    rect.width >= window.innerWidth * 0.75 &&
    rect.height >= window.innerHeight * 0.55
  );
};

const refineInspectableElementAtPoint = (el, x, y) => {
  if (!el) return null;

  let current = el;
  let depth = 0;
  while (current && depth < 8) {
    const child = getDeepestChildTowardPoint(current, x, y);
    if (!child || child === current) break;
    current = child;
    depth += 1;
  }

  if (isViewportLayoutCandidate(current)) return null;

  return current;
};

const resolveInspectableElementFromPoint = (x, y) => {
  if (typeof document.elementsFromPoint !== 'function') return null;

  const scopeRoot = findActiveModalRoot();
  const stack = document.elementsFromPoint(x, y).filter(
    (node) =>
      node?.nodeType === 1 &&
      !isInspectorExcludedNode(node) &&
      !isInspectorUiNode(node) &&
      isVisibleForInspector(node)
  );

  if (!stack.length) return null;

  const top = stack[0];
  if (!scopeRoot || isElementInsideRoot(top, scopeRoot)) {
    const refinedTop = refineInspectableElementAtPoint(top, x, y);
    if (refinedTop) return refinedTop;
  }

  if (isPortaledOverlayOutsideModal(top)) {
    const refinedOverlay = refineInspectableElementAtPoint(top, x, y);
    if (refinedOverlay) return refinedOverlay;
  }

  for (const el of stack) {
    if (isElementInsideRoot(el, scopeRoot)) {
      const refined = refineInspectableElementAtPoint(el, x, y);
      if (refined) return refined;
    }
  }

  return null;
};

const getControlLabels = (controls, target, {
  excludeInsideTarget = true,
  excludeLabels = [],
} = {}) => {
  const excluded = new Set(excludeLabels);
  const labels = controls
    .filter((control) => control !== target && !control.contains(target))
    .filter((control) => !excludeInsideTarget || !target?.contains?.(control))
    .filter(isVisibleForInspector)
    .map(getControlLabel)
    .filter(Boolean)
    .filter((label) => !excluded.has(label));

  return Array.from(new Set(labels));
};

const getDirectControls = (clickedEl, actionableEl) => {
  const target = actionableEl || clickedEl;
  const clickedIsActionable = clickedEl?.matches?.(ACTIONABLE_SELECTOR);
  const scopes = [];

  if (clickedEl?.querySelectorAll && !clickedIsActionable) scopes.push(clickedEl);
  if (target?.parentElement) scopes.push(target.parentElement);
  if (clickedEl?.parentElement && clickedEl.parentElement !== target?.parentElement) {
    scopes.push(clickedEl.parentElement);
  }

  for (const scope of scopes) {
    const controls = Array.from(scope.querySelectorAll?.(ACTIONABLE_SELECTOR) || []);
    const labels = getControlLabels(controls, target, { excludeInsideTarget: false });
    if (labels.length) return labels.slice(0, 5);
  }

  return [];
};

const getZoneControls = (clickedEl, actionableEl, contextEl, directControls) => {
  if (!contextEl?.querySelectorAll) return [];
  const target = actionableEl || clickedEl;
  const fallbackLabels = Array.from(contextEl.querySelectorAll(ACTIONABLE_SELECTOR))
    .filter((control) => control !== clickedEl);

  return getControlLabels(fallbackLabels, target, {
    excludeInsideTarget: false,
    excludeLabels: directControls,
  }).slice(0, 5);
};

const getPageContext = () => {
  if (typeof document === 'undefined') return '';
  const breadcrumb = Array.from(document.querySelectorAll('nav, [data-testid], [class]'))
    .find((el) => {
      const marker = `${el.getAttribute?.('aria-label') || ''} ${el.getAttribute?.('data-testid') || ''} ${el.getAttribute?.('class') || ''}`.toLowerCase();
      return marker.includes('breadcrumb') || marker.includes('miga');
    });
  const breadcrumbText = breadcrumb ? getReadableText(breadcrumb, 90) : '';
  const title = document.querySelector('[data-page-title], main h1, h1, [role="heading"][aria-level="1"]');
  const titleText = title ? getReadableText(title, 90) : '';

  if (breadcrumbText && titleText && !breadcrumbText.includes(titleText)) {
    return `${breadcrumbText} / ${titleText}`;
  }
  return breadcrumbText || titleText;
};

const getInspectorRoute = () => {
  if (typeof window === 'undefined') return '';
  const params = new URLSearchParams(window.location.search);
  for (const key of Array.from(params.keys())) {
    if (key.startsWith('codexInspector')) params.delete(key);
  }
  const query = params.toString();
  return `${window.location.pathname}${query ? `?${query}` : ''}`;
};

// ─── Captura de imagen ───
// Prioridad: copiar exactamente el DOM seleccionado. La imagen original es solo fallback.
const findSingleImage = (el) => {
  if (!el) return null;
  if (el.tagName === 'IMG') return el;
  const imgs = el.querySelectorAll?.('img');
  if (imgs && imgs.length === 1) return imgs[0];
  return null;
};

const fetchImageAsBlob = async (src) => {
  if (!src) return null;
  try {
    const res = await fetch(src, { mode: 'cors', credentials: 'omit' });
    if (!res.ok) return null;
    const blob = await res.blob();
    if (blob.type === 'image/png') return blob;
    // Convertir a PNG vía canvas (algunos navegadores solo aceptan PNG en clipboard)
    const url = URL.createObjectURL(blob);
    try {
      const img = await new Promise((resolve, reject) => {
        const i = new Image();
        i.crossOrigin = 'anonymous';
        i.onload = () => resolve(i);
        i.onerror = reject;
        i.src = url;
      });
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      canvas.getContext('2d').drawImage(img, 0, 0);
      return await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
    } finally {
      URL.revokeObjectURL(url);
    }
  } catch (err) {
    logInspectorDebug('[Inspector] fetch de <img> falló:', err?.message || err);
    return null;
  }
};

const captureDomScreenshot = async (el) => {
  if (!el) return { blob: null, failReason: 'missing-element' };
  if (!document.contains(el)) return { blob: null, failReason: 'not-in-document' };
  const rect = el.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) {
    return { blob: null, failReason: 'zero-size' };
  }

  if (rect.bottom < 0 || rect.top > window.innerHeight) {
    el.scrollIntoView({ block: 'nearest', behavior: 'instant' });
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  }

  const filter = (node) => node?.dataset?.devInspector == null;
  const imagePlaceholder =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

  const attempts = [
    { pixelRatio: 2, cacheBust: true, filter, skipAutoScale: true, skipFonts: true, imagePlaceholder },
    { pixelRatio: 1, cacheBust: true, filter, skipAutoScale: true, skipFonts: true, backgroundColor: '#0f172a', imagePlaceholder },
  ];
  for (let i = 0; i < attempts.length; i++) {
    try {
      const blob = await toBlob(el, attempts[i]);
      if (blob && blob.size > 0) return { blob, failReason: null };
    } catch (err) {
      logInspectorDebug(`[Inspector] screenshot intento ${i + 1}:`, err?.message || err);
    }
  }
  return { blob: null, failReason: 'dom-snapshot-failed' };
};

const captureElementImage = async (el) => {
  const domResult = await captureDomScreenshot(el);
  if (domResult.blob) {
    return { blob: domResult.blob, source: 'dom-snapshot', captureReason: null };
  }

  logInspectorDebug('[Inspector] dom-snapshot no produjo imagen:', domResult.failReason || 'unknown');

  const img = findSingleImage(el);
  if (!img?.src) {
    const imgCount = el?.querySelectorAll?.('img')?.length ?? 0;
    const imgReason = imgCount === 0 ? 'no-image-in-element' : 'multiple-images-in-element';
    const captureReason = ['zero-size', 'not-in-document', 'missing-element'].includes(domResult.failReason)
      ? domResult.failReason
      : imgReason;
    logInspectorDebug('[Inspector] fallback <img> no disponible:', captureReason, `count=${imgCount}`);
    return {
      blob: null,
      source: null,
      captureReason,
    };
  }

  const blob = await fetchImageAsBlob(img.src);
  if (blob) return { blob, source: 'img-original', captureReason: null };

  logInspectorDebug('[Inspector] fetch de <img> falló (posible CORS):', img.src);
  return {
    blob: null,
    source: null,
    captureReason: domResult.failReason === 'zero-size' || domResult.failReason === 'not-in-document'
      ? domResult.failReason
      : 'img-fetch-failed',
  };
};

const isEmbeddedPreview = () => {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
};

const isCodexLikePreview = () => {
  const userAgent = navigator?.userAgent || '';
  return isEmbeddedPreview() || /Electron|Codex|OpenAI/i.test(userAgent);
};

const shouldUseInspectorTextOnlyClipboard = () => {
  try {
    const userAgent = navigator?.userAgent || '';
    if (/Codex|OpenAI/i.test(userAgent)) return true;
    const params = new URLSearchParams(window.location.search);
    const queryMode = params.get('codexInspectorClipboard');
    const storageMode = window.localStorage?.getItem('codexInspectorClipboard');
    return [queryMode, storageMode].some((value) =>
      String(value || '').toLowerCase() === 'text'
    );
  } catch {
    return false;
  }
};

const getClipboardEnvironment = () => ({
  codexPreview: isCodexLikePreview(),
  embedded: isEmbeddedPreview(),
  userAgent: navigator?.userAgent || '',
  vendor: navigator?.vendor || '',
  platform: navigator?.platform || '',
  webdriver: Boolean(navigator?.webdriver),
});

const isInspectorDebugEnabled = () => {
  try {
    if (CODEX_INSPECTOR_DEBUG) return true;
    const params = new URLSearchParams(window.location.search);
    const queryDebug = params.get('codexInspectorDebug');
    const storageDebug = window.localStorage?.getItem('codexInspectorDebug');
    return [queryDebug, storageDebug].some((value) =>
      ['1', 'true', 'on'].includes(String(value || '').toLowerCase())
    );
  } catch {
    return false;
  }
};

const logInspectorDebug = (...args) => {
  if (isInspectorDebugEnabled()) console.info(...args);
};

const copyImageBlobToClipboard = async (blob) => {
  if (!blob) return 'error';
  if (typeof navigator === 'undefined' || !navigator.clipboard?.write || typeof ClipboardItem === 'undefined') {
    return 'unsupported';
  }
  if (ClipboardItem.supports && !ClipboardItem.supports('image/png')) return 'unsupported';
  if (isCodexLikePreview()) return 'codex-preview';

  const writePromise = navigator.clipboard
    .write([new ClipboardItem({ 'image/png': blob })])
    .then(() => 'ok')
    .catch((err) => {
      console.warn('[Inspector] clipboard image falló:', err?.name || err?.message || err);
      return 'blocked';
    });

  const timeoutPromise = new Promise((resolve) => {
    window.setTimeout(() => resolve('timeout'), 900);
  });

  const status = await Promise.race([writePromise, timeoutPromise]);
  if (status === 'timeout') {
    console.warn('[Inspector] clipboard image falló: timeout');
  }
  return status;
};

const loadImageFromBlob = async (blob) => {
  if (typeof createImageBitmap === 'function') return await createImageBitmap(blob);

  const url = URL.createObjectURL(blob);
  return await new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = (err) => {
      URL.revokeObjectURL(url);
      reject(err);
    };
    img.src = url;
  });
};

const canvasToPngBlob = (canvas) => new Promise((resolve) => {
  canvas.toBlob((blob) => resolve(blob), 'image/png');
});

const blobToDataUrl = (blob) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(reader.result);
  reader.onerror = reject;
  reader.readAsDataURL(blob);
});

const canUseNativeClipboardBridge = () => {
  if (!IS_DEV || typeof window === 'undefined') return false;
  return ['localhost', '127.0.0.1', '::1'].includes(window.location.hostname);
};

const copyImageBlobToNativeClipboard = async (blob, plainText = '', options = {}) => {
  const textOnly = options.textOnly === true;
  if (!canUseNativeClipboardBridge()) return 'unsupported';
  if (!textOnly && !blob) return 'unsupported';

  try {
    const normalizedText = String(plainText || '').normalize('NFC');
    const payload = textOnly
      ? { textOnly: true, plainText: normalizedText }
      : {
        imageBase64: await blobToDataUrl(blob),
        plainText: normalizedText,
      };
    const response = await fetch('/api/dev-inspector-clipboard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await response.json().catch(() => ({}));
    if (response.ok && data?.ok) return 'ok';
    console.warn('[Inspector] clipboard nativo falló:', data?.error || response.status);
    return 'blocked';
  } catch (err) {
    console.warn('[Inspector] clipboard nativo falló:', err?.message || err);
    return 'blocked';
  }
};

const copyPlainTextToNativeClipboard = async (plainText = '') => {
  const text = String(plainText || '').normalize('NFC');
  if (!text.trim()) return 'empty';
  return copyImageBlobToNativeClipboard(null, text, { textOnly: true });
};

const escapeHtml = (value) => String(value || '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const copyHtmlImageToClipboard = async (blob, text, htmlOverride) => {
  if (!blob || typeof document === 'undefined') return 'unsupported';

  try {
    const dataUrl = await blobToDataUrl(blob);
    const html = htmlOverride || [
      '<!doctype html><html><body>',
      `<img src="${dataUrl}" alt="Inspector" style="display:block;max-width:100%;height:auto;" />`,
      '</body></html>',
    ].join('');

    const holder = document.createElement('div');
    holder.contentEditable = 'true';
    holder.setAttribute('aria-hidden', 'true');
    holder.style.cssText = 'position:fixed;left:-99999px;top:0;width:1px;height:1px;overflow:hidden;';
    holder.innerHTML = html;
    document.body.appendChild(holder);

    const selection = window.getSelection?.();
    const range = document.createRange();
    range.selectNodeContents(holder);
    selection?.removeAllRanges();
    selection?.addRange(range);

    const onCopy = (event) => {
      event.preventDefault();
      event.clipboardData?.setData('text/html', html);
      event.clipboardData?.setData('text/plain;charset=utf-8', text || '');
    };

    document.addEventListener('copy', onCopy, true);
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } finally {
      document.removeEventListener('copy', onCopy, true);
      selection?.removeAllRanges();
      holder.remove();
    }

    return ok ? 'ok' : 'blocked';
  } catch (err) {
    console.warn('[Inspector] clipboard HTML falló:', err?.name || err?.message || err);
    return 'blocked';
  }
};

const drawRoundRect = (ctx, x, y, width, height, radius) => {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
};

const splitLongToken = (ctx, token, maxWidth) => {
  const chunks = [];
  let current = '';
  for (const char of token) {
    const next = current + char;
    if (current && ctx.measureText(next).width > maxWidth) {
      chunks.push(current);
      current = char;
    } else {
      current = next;
    }
  }
  if (current) chunks.push(current);
  return chunks;
};

const wrapCanvasLine = (ctx, line, maxWidth) => {
  if (!line) return [''];
  if (ctx.measureText(line).width <= maxWidth) return [line];

  const parts = String(line).split(/(\s+)/).filter(Boolean);
  const lines = [];
  let current = '';

  for (const part of parts) {
    const next = current + part;
    if (ctx.measureText(next).width <= maxWidth) {
      current = next;
      continue;
    }

    if (current.trim()) lines.push(current.trimEnd());
    current = '';

    if (ctx.measureText(part).width <= maxWidth) {
      current = part.trimStart();
    } else {
      const chunks = splitLongToken(ctx, part, maxWidth);
      lines.push(...chunks.slice(0, -1));
      current = chunks[chunks.length - 1] || '';
    }
  }

  if (current.trim()) lines.push(current.trimEnd());
  return lines;
};

const wrapCanvasText = (ctx, text, maxWidth) => {
  const lines = [];
  for (const rawLine of String(text || '').split('\n')) {
    lines.push(...wrapCanvasLine(ctx, rawLine, maxWidth));
  }
  return lines;
};

const getLineColor = (line) => {
  const normalizedLine = String(line || '').replace(/^- /, '');
  if (normalizedLine === 'Referencia técnica:' || normalizedLine === 'Pistas para ubicarlo:') return ACCENT;
  if (
    normalizedLine.startsWith('Resumen rápido:') ||
    normalizedLine.startsWith('Ubicación exacta:') ||
    normalizedLine.startsWith('Ubicación:') ||
    normalizedLine.startsWith('Archivo inicial:') ||
    normalizedLine.startsWith('Archivo probable para editar:') ||
    normalizedLine.startsWith('Editar:') ||
    normalizedLine.startsWith('Inicial:') ||
    normalizedLine.startsWith('Control:') ||
    normalizedLine.startsWith('Definición del componente:') ||
    normalizedLine.startsWith('Archivo:') ||
    normalizedLine.startsWith('Archivo detectado por inspector:')
  ) return FILE_GREEN;
  if (
    normalizedLine.startsWith('Props/handlers:') ||
    normalizedLine.startsWith('Handler/props:') ||
    normalizedLine.startsWith('Clases CSS:')
  ) return '#fbbf24';
  if (normalizedLine.startsWith('Ruta:') || normalizedLine.startsWith('Ruta app:')) return TEXT_DIM;
  if (
    normalizedLine.startsWith('Zona:') ||
    normalizedLine.startsWith('Página:') ||
    normalizedLine.startsWith('Buscar en archivo:') ||
    normalizedLine.startsWith('Ancestros útiles:') ||
    normalizedLine.startsWith('Buscar textos cercanos:')
  ) return '#c4b5fd';
  if (
    normalizedLine.startsWith('Elemento DOM:') ||
    normalizedLine.startsWith('Elemento:') ||
    normalizedLine.startsWith('Texto visible:') ||
    normalizedLine.startsWith('Texto del control padre:') ||
    normalizedLine.startsWith('Texto cercano:') ||
    normalizedLine.startsWith('Componente React:')
  ) return TEXT_MUTED;
  return TEXT;
};

const addInspectorField = (lines, label, value) => {
  if (value == null) return;
  const cleanValue = Array.isArray(value)
    ? value.filter(Boolean).join(' → ')
    : String(value).trim();
  if (cleanValue) lines.push(`- ${label}: ${cleanValue}`);
};

const normalizeInspectorZone = (value) => {
  const cleanValue = String(value || '').trim();
  const nearbyZoneMatch = cleanValue.match(/^Zona cercana:\s*"?(.+?)"?$/i);
  return nearbyZoneMatch ? nearbyZoneMatch[1].trim() : cleanValue;
};

const INSPECTOR_WRAPPER_COMPONENTS = new Set([
  'PanelDorado',
  'Panel',
  'Card',
  'CardBase',
  'Container',
  'Wrapper',
  'Surface',
  'Shell',
  'Frame',
  'Box',
  'Stack',
]);

const isLikelyInspectorWrapperComponent = (name, filePath = '') => {
  const cleanName = String(name || '');
  if (!cleanName) return false;
  if (INSPECTOR_WRAPPER_COMPONENTS.has(cleanName)) return true;
  if (/^(?:Base|Ui)?(?:Panel|Card|Container|Wrapper|Surface|Shell|Frame|Box|Stack)$/i.test(cleanName)) {
    return true;
  }
  if (/Panel(?:Dorado|Base)?$/i.test(cleanName)) return true;

  const cleanFile = String(filePath || '');
  return cleanFile.includes('/components/') && /(?:Panel|Card|Container|Wrapper|Surface)$/i.test(cleanName);
};

const getProbableEditTargetFiles = (item) => {
  const candidates = [];
  const addByName = (name) => {
    const file = fileMap[name];
    if (file && !candidates.includes(file)) candidates.push(file);
  };

  for (const ancestor of item?.usefulAncestors || []) {
    if (!isLikelyInspectorWrapperComponent(ancestor, fileMap[ancestor])) addByName(ancestor);
  }
  for (const ancestor of item?.usefulAncestors || []) addByName(ancestor);

  return candidates;
};

const extractInspectorAnchorPhrases = (value) => {
  const clean = String(value || '')
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
  if (!clean) return [];

  const phrases = [];
  const add = (phrase) => {
    const normalized = String(phrase || '')
      .replace(/\s+/g, ' ')
      .replace(/^["']|["']$/g, '')
      .trim();
    if (normalized.length >= 3 && !phrases.includes(normalized)) phrases.push(normalized);
  };

  add(clean);

  const quoted = clean.match(/"([^"]+)"/);
  if (quoted?.[1]) add(quoted[1]);

  const label = getInspectorZoneLabel(clean);
  if (label && label !== clean) add(label);

  const beforeNumber = clean.replace(/([A-Za-zÁÉÍÓÚÜÑáéíóúüñ])(\d)/g, '$1 $2')
    .split(/\d+/)[0]
    .trim();
  add(beforeNumber);

  const sentence = clean.split(/[·|•—–\-:]/)[0]?.trim();
  add(sentence);

  return phrases.slice(0, 4);
};

const buildProbableEditAnchors = (item) => {
  const anchors = [];
  const add = (value) => {
    for (const phrase of extractInspectorAnchorPhrases(value)) {
      if (!anchors.includes(phrase)) anchors.push(phrase);
    }
  };

  add(item?.contextDesc);
  add(item?.visibleText);
  add(item?.pageContext);
  for (const control of [...(item?.directControls || []), ...(item?.zoneControls || [])]) add(control);

  return anchors.filter((anchor) => anchor !== item?.componentName).slice(0, 6);
};

const buildInspectorQuickSummaryLine = (item, index = null) => {
  if (!item) return '';

  const prefix = Number.isInteger(index) ? `#${index + 1} ` : '';
  const component = item.componentName || 'Componente';
  const editLocation =
    item.probableEditLocation ||
    item.exactLocation ||
    item.componentDefinition ||
    item.filePath ||
    '';
  const file = getInspectorLocationShortName(editLocation) || 'archivo por confirmar';
  const zone = getInspectorZoneLabel(item.contextDesc);
  const control = item.visibleText ? trunc(item.visibleText, 34) : '';
  const target = zone || control || item.route || '';

  return [prefix + component, file, target].filter(Boolean).join(' / ');
};

const GENERIC_ANCHOR_CLASSES = new Set([
  'lucide',
  'shrink-0',
  'mx-auto',
  'truncate',
  'group',
  'flex',
  'inline-flex',
  'block',
  'relative',
  'absolute',
  'w-full',
  'h-full',
]);

const lucideClassToComponentName = (className) => {
  const match = String(className || '').match(/^lucide-([a-z0-9-]+)$/);
  if (!match) return '';
  return match[1]
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
};

const buildJsxLocateAnchors = (clickedEl, { visibleText, cssClasses, componentName }) => {
  const anchors = [];
  if (visibleText) anchors.push(visibleText);

  if (clickedEl) {
    const nearbyBlock = getNearbyVisibleTextFromIcon(clickedEl);
    if (nearbyBlock?.text && nearbyBlock.text !== visibleText) {
      anchors.push(nearbyBlock.text);
    }
  }

  const classes = String(cssClasses || '').split(/\s+/).filter(Boolean);
  for (const cls of classes) {
    const lucideName = lucideClassToComponentName(cls);
    if (lucideName) {
      anchors.push(lucideName);
      continue;
    }
    if (!GENERIC_ANCHOR_CLASSES.has(cls) && cls.length >= 3) {
      anchors.push(cls);
    }
  }

  if (clickedEl) {
    const testId = clickedEl.getAttribute?.('data-testid');
    const id = clickedEl.getAttribute?.('id');
    const placeholder = clickedEl.getAttribute?.('placeholder');
    if (testId) anchors.push(testId);
    if (id) anchors.push(id);
    if (placeholder) anchors.push(placeholder);
  }

  if (componentName) anchors.push(componentName);

  return Array.from(new Set(anchors.filter(Boolean))).slice(0, 6);
};

const buildSearchAnchors = (args) => buildJsxLocateAnchors(args.clickedEl, args).slice(0, 4);

const getVisibleTextInfo = (clickedEl, actionableEl) => {
  const direct = getReadableText(clickedEl, 90);
  if (direct) return { text: direct, fromParent: false, fromNearby: false };

  const parentText = actionableEl !== clickedEl ? getReadableText(actionableEl, 90) : '';
  if (parentText) return { text: parentText, fromParent: true, fromNearby: false };

  const tag = clickedEl?.tagName?.toLowerCase() || '';
  const className = clickedEl?.getAttribute?.('class') || '';
  const isIconLike = tag === 'svg' || tag === 'path' || className.includes('lucide');
  if (isIconLike) {
    const nearbyBlock = getNearbyVisibleTextFromIcon(clickedEl);
    if (nearbyBlock?.text) {
      return { text: nearbyBlock.text, fromParent: false, fromNearby: true };
    }

    let current = clickedEl.parentElement;
    let depth = 0;
    while (current && depth < 3) {
      const nearbyText = getReadableText(current, 90);
      if (nearbyText && nearbyText !== parentText) {
        return { text: nearbyText, fromParent: false, fromNearby: true };
      }
      current = current.parentElement;
      depth += 1;
    }
  }

  return { text: '', fromParent: false, fromNearby: false };
};

const quoteInspectorText = (text) => `"${String(text).replace(/"/g, "'")}"`;

const describeReferenceElement = (el) => {
  if (!el) return '';
  const tag = el.tagName?.toLowerCase() || '?';
  const parts = [tag];
  const role = el.getAttribute?.('role') || '';
  const type = el.getAttribute?.('type') || '';
  const name = el.getAttribute?.('name') || '';
  const id = el.getAttribute?.('id') || '';
  const placeholder = el.getAttribute?.('placeholder') || '';
  const dataTestId = el.getAttribute?.('data-testid') || '';
  const disabled = el.hasAttribute?.('disabled');
  const ariaDisabled = el.getAttribute?.('aria-disabled') || '';
  const dataDisabled = el.getAttribute?.('data-disabled') || '';

  if (role) parts.push(`role="${role}"`);
  if (type) parts.push(`type="${type}"`);
  if (name) parts.push(`name="${name}"`);
  if (id) parts.push(`id="${id}"`);
  if (placeholder) parts.push(`placeholder="${trunc(placeholder, 40)}"`);
  if (dataTestId) parts.push(`data-testid="${dataTestId}"`);
  if (disabled) parts.push('disabled');
  if (ariaDisabled) parts.push(`aria-disabled="${ariaDisabled}"`);
  if (dataDisabled) parts.push(`data-disabled="${dataDisabled}"`);

  return parts.join(' ');
};

const getReferenceElementDesc = (clickedEl, actionableEl) => {
  const clickedDesc = describeReferenceElement(clickedEl);
  if (!actionableEl || actionableEl === clickedEl) return clickedDesc;

  const actionableDesc = describeReferenceElement(actionableEl);
  if (!actionableDesc || actionableDesc === clickedDesc) return clickedDesc;
  return `${clickedDesc} dentro de ${actionableDesc}`;
};

const isActionableReference = (referenceElementDesc = '') => (
  /\b(button|a|input|select|textarea)\b/.test(referenceElementDesc) ||
  /role="(button|link|menuitem|tab)"/.test(referenceElementDesc)
);

const isBehaviorProp = (prop = '') => (
  /^on[A-Z]/.test(prop) ||
  prop === 'disabled' ||
  prop.startsWith('aria-disabled=') ||
  prop.startsWith('data-disabled=')
);

const isControlIdentityProp = (prop = '') => (
  prop.startsWith('type=') ||
  prop.startsWith('name=') ||
  prop.startsWith('placeholder=') ||
  prop.startsWith('role=')
);

const getContextualHandlerProps = (props = [], referenceElementDesc = '') => {
  const behaviorProps = props.filter(isBehaviorProp);
  if (!behaviorProps.length && !isActionableReference(referenceElementDesc)) return [];

  const identityProps = isActionableReference(referenceElementDesc)
    ? props.filter(isControlIdentityProp)
    : [];

  return Array.from(new Set([...behaviorProps, ...identityProps])).slice(0, 5);
};

const buildInspectorText = ({
  componentName,
  exactLocation,
  probableEditLocation,
  quickSummary,
  componentDefinition,
  filePath,
  usefulAncestors,
  contextDesc,
  referenceElementDesc,
  cssClasses,
  visibleText,
  visibleTextFromParent,
  visibleTextFromNearby,
  props,
  pageContext,
  route,
  searchAnchors,
}) => {
  const handlerProps = getContextualHandlerProps(props, referenceElementDesc);
  const initialLocation = exactLocation || componentDefinition || filePath;
  const hasExactLine = /:\d+$/.test(String(initialLocation || ''));
  const targetFile = hasExactLine
    ? String(initialLocation).replace(/:\d+$/, '')
    : (filePath || '');
  const hasResolvedFile = Boolean(targetFile);
  const hasProbableEditLocation = Boolean(
    probableEditLocation &&
    !sameInspectorFile(probableEditLocation, initialLocation)
  );

  const lines = ['Referencia técnica:'];
  addInspectorField(lines, 'Resumen rápido', quickSummary);
  addInspectorField(lines, 'Archivo inicial', initialLocation || filePath);
  if (hasProbableEditLocation) {
    addInspectorField(lines, 'Archivo probable para editar', probableEditLocation);
  }
  addInspectorField(lines, 'Componente React', componentName);
  addInspectorField(lines, 'Definición del componente', componentDefinition);
  addInspectorField(lines, 'Zona', normalizeInspectorZone(contextDesc));
  addInspectorField(lines, 'Elemento DOM', referenceElementDesc);
  if (cssClasses) addInspectorField(lines, 'Clases CSS', cssClasses);
  if (visibleText) {
    const visibleTextLabel = visibleTextFromParent
      ? 'Texto del control padre'
      : visibleTextFromNearby
        ? 'Texto cercano'
        : 'Texto visible';
    addInspectorField(lines, visibleTextLabel, quoteInspectorText(visibleText));
  }
  if (handlerProps.length)   addInspectorField(lines, 'Handler/props', handlerProps.join(', '));
  addInspectorField(lines, 'Ruta app', route);
  if (!route) addInspectorField(lines, 'Página', pageContext);

  const hints = [];
  if (!hasResolvedFile && !hasExactLine) {
    hints.push('- Confirmar el archivo del componente detectado con la ruta o el mapa de componentes.');
  }
  if (!hasResolvedFile && !hasExactLine && usefulAncestors?.length) {
    hints.push(`- Ancestros útiles: ${usefulAncestors.join(' → ')}.`);
  }
  if (hasProbableEditLocation) {
    hints.push('- El archivo inicial parece un wrapper visual; para cambios de contenido o comportamiento, empezar por el archivo probable.');
  }
  if ((hasExactLine || hasResolvedFile) && searchAnchors?.length) {
    const searchTarget = hasProbableEditLocation ? 'archivo probable' : 'archivo';
    hints.push(`- Buscar en ${searchTarget}: ${searchAnchors.map(quoteInspectorText).join(', ')}.`);
  }
  if (hints.length) {
    lines.push('');
    lines.push('Pistas para ubicarlo:');
    lines.push(...hints);
  }

  return lines.join('\n');
};

const canUseDevInspectorBridge = () => {
  if (!IS_DEV || typeof window === 'undefined') return false;
  return ['localhost', '127.0.0.1', '::1'].includes(window.location.hostname);
};

const fetchComponentDefinition = async (componentName) => {
  if (!componentName || !canUseDevInspectorBridge()) return null;

  try {
    const response = await fetch(
      `/api/dev-inspector-locate?component=${encodeURIComponent(componentName)}`
    );
    const data = await response.json().catch(() => ({}));
    if (response.ok && data?.ok) return data;
    return null;
  } catch (err) {
    logInspectorDebug('[Inspector] locate componente falló:', err?.message || err);
    return null;
  }
};

const fetchJsxAnchorLocation = async (file, anchors) => {
  if (!file || !anchors?.length || !canUseDevInspectorBridge()) return null;

  try {
    const response = await fetch(
      `/api/dev-inspector-locate?file=${encodeURIComponent(file)}&anchors=${encodeURIComponent(anchors.join(','))}`
    );
    const data = await response.json().catch(() => ({}));
    if (response.ok && data?.ok) return data;
    return null;
  } catch (err) {
    logInspectorDebug('[Inspector] locate anclas falló:', err?.message || err);
    return null;
  }
};

const fetchJsxUsageLocation = async (file, componentName, anchors) => {
  if (!file || !componentName || !canUseDevInspectorBridge()) return null;

  try {
    const params = new URLSearchParams({
      file,
      usageComponent: componentName,
    });
    const cleanAnchors = (anchors || [])
      .map((anchor) => String(anchor || '').trim())
      .filter((anchor) => anchor.length >= 3)
      .slice(0, 6);
    if (cleanAnchors.length) params.set('anchors', cleanAnchors.join(','));

    const response = await fetch(`/api/dev-inspector-locate?${params.toString()}`);
    const data = await response.json().catch(() => ({}));
    if (response.ok && data?.ok) return data;
    return null;
  } catch (err) {
    logInspectorDebug('[Inspector] locate uso JSX falló:', err?.message || err);
    return null;
  }
};

const getAnchorTargetFiles = (item, locatedDefinition) => {
  const candidates = [];
  const add = (file) => {
    const clean = String(file || '').trim();
    if (!clean || candidates.includes(clean)) return;
    candidates.push(clean);
  };

  add(item?.elementSource?.file);
  add(locatedDefinition?.file);
  add(item?.filePath);
  for (const name of item?.semanticComponents || []) {
    if (fileMap[name]) add(fileMap[name]);
  }

  return candidates;
};

const resolveProbableEditLocation = async (item, exactLocation) => {
  if (!item || !isLikelyInspectorWrapperComponent(item.componentName, item.filePath)) return '';
  if (exactLocation && item.filePath && !sameInspectorFile(exactLocation, item.filePath)) return '';

  const targetFiles = getProbableEditTargetFiles(item)
    .filter((file) => file && !sameInspectorFile(file, exactLocation || item.filePath));
  if (!targetFiles.length) return '';

  const anchors = buildProbableEditAnchors(item);
  for (const targetFile of targetFiles) {
    const locatedUsage = await fetchJsxUsageLocation(targetFile, item.componentName, anchors);
    if (locatedUsage?.file && locatedUsage?.line) {
      return `${locatedUsage.file}:${locatedUsage.line}`;
    }
  }

  return targetFiles[0];
};

const enrichInspectorItem = async (item) => {
  if (!item) return item;

  let componentDefinition = '';
  const located = await fetchComponentDefinition(item.componentName);
  if (located?.file && located?.line) {
    componentDefinition = `${located.file}:${located.line}`;
  } else if (item.filePath && item.fileComponentName === item.componentName) {
    componentDefinition = item.filePath;
  }

  let elementSource = item.elementSource;
  let exactLocation = item.exactLocation;

  if (!elementSource?.line) {
    const anchors = item.jsxLocateAnchors || buildJsxLocateAnchors(item.element, {
      visibleText: item.visibleText,
      cssClasses: item.cssClasses,
      componentName: item.componentName,
    });

    const targetFiles = getAnchorTargetFiles(item, located);

    for (const targetFile of targetFiles) {
      if (!anchors.length) break;
      const resolved = await fetchJsxAnchorLocation(targetFile, anchors);
      if (resolved?.file && resolved?.line) {
        elementSource = {
          file: resolved.file,
          line: resolved.line,
          sourceKind: resolved.kind || 'anchor',
        };
        exactLocation = formatSourceLocation(elementSource);
        break;
      }
    }
  }

  const probableEditLocation = await resolveProbableEditLocation(item, exactLocation);
  const quickSummary = buildInspectorQuickSummaryLine({
    ...item,
    componentDefinition,
    elementSource,
    exactLocation,
    probableEditLocation,
  });

  const compactText = buildInspectorText({
    componentName: item.componentName,
    exactLocation,
    probableEditLocation,
    quickSummary,
    componentDefinition,
    filePath: item.filePath,
    usefulAncestors: item.usefulAncestors,
    contextDesc: item.contextDesc,
    referenceElementDesc: item.referenceElementDesc,
    cssClasses: item.cssClasses,
    visibleText: item.visibleText,
    visibleTextFromParent: item.visibleTextFromParent,
    visibleTextFromNearby: item.visibleTextFromNearby,
    props: item.props,
    pageContext: item.pageContext,
    route: item.route,
    searchAnchors: item.searchAnchors,
  });

  return {
    ...item,
    componentDefinition,
    elementSource,
    exactLocation,
    probableEditLocation,
    quickSummary,
    compactText,
  };
};

const buildInspectorCompositeImage = async (item, imageBlob) => {
  if (!item || !imageBlob) return null;

  const image = await loadImageFromBlob(imageBlob);
  const sourceWidth = image.width || image.naturalWidth || 1;
  const sourceHeight = image.height || image.naturalHeight || 1;
  const padding = 28;
  const gap = 22;
  const maxImageWidth = 1120;
  const maxImageHeight = 1400;
  const scale = Math.min(1, maxImageWidth / sourceWidth, maxImageHeight / sourceHeight);
  const imageWidth = Math.max(1, Math.round(sourceWidth * scale));
  const imageHeight = Math.max(1, Math.round(sourceHeight * scale));
  const canvasWidth = Math.max(680, imageWidth + padding * 2);
  const textMaxWidth = canvasWidth - padding * 2 - 28;

  const measureCanvas = document.createElement('canvas');
  const measureCtx = measureCanvas.getContext('2d');
  measureCtx.font = '15px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
  const infoLines = wrapCanvasText(measureCtx, item.compactText, textMaxWidth);
  const lineHeight = 22;
  const cardPadding = 18;
  const headerHeight = 28;
  const cardHeight = cardPadding * 2 + headerHeight + 8 + infoLines.length * lineHeight;
  const canvasHeight = padding + imageHeight + gap + cardHeight + padding;

  const canvas = document.createElement('canvas');
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = PANEL_BG;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  const imageX = Math.round((canvasWidth - imageWidth) / 2);
  drawRoundRect(ctx, imageX - 1, padding - 1, imageWidth + 2, imageHeight + 2, 8);
  ctx.fillStyle = '#020617';
  ctx.fill();
  ctx.drawImage(image, imageX, padding, imageWidth, imageHeight);

  if (item.exactTargetOverlay && item.contextCaptureRect) {
    const ctxRect = item.contextCaptureRect;
    const exact = item.exactTargetOverlay;
    if (ctxRect.width > 0 && ctxRect.height > 0) {
      const scaleX = imageWidth / ctxRect.width;
      const scaleY = imageHeight / ctxRect.height;
      const overlayX = imageX + (exact.left - ctxRect.left) * scaleX;
      const overlayY = padding + (exact.top - ctxRect.top) * scaleY;
      const overlayW = exact.width * scaleX;
      const overlayH = exact.height * scaleY;
      ctx.save();
      ctx.strokeStyle = INSPECTOR_TARGET_BORDER;
      ctx.lineWidth = Math.max(2, 2.5 * Math.min(scaleX, scaleY));
      ctx.strokeRect(overlayX + 0.5, overlayY + 0.5, Math.max(0, overlayW - 1), Math.max(0, overlayH - 1));
      ctx.restore();
    }
  }

  const cardY = padding + imageHeight + gap;
  drawRoundRect(ctx, padding, cardY, canvasWidth - padding * 2, cardHeight, 12);
  ctx.fillStyle = '#111827';
  ctx.fill();
  ctx.strokeStyle = PANEL_BORDER_STRONG;
  ctx.lineWidth = 1;
  ctx.stroke();

  const textX = padding + cardPadding;
  let y = cardY + cardPadding + 18;
  ctx.font = '800 14px ui-sans-serif, system-ui, sans-serif';
  ctx.fillStyle = ACCENT;
  ctx.fillText('INSPECTOR', textX, y);

  ctx.font = '700 18px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
  ctx.fillStyle = TEXT;
  ctx.fillText(trunc(item.componentName, 42), textX + 96, y);

  y += headerHeight;
  ctx.font = '15px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
  for (const line of infoLines) {
    ctx.fillStyle = getLineColor(line);
    ctx.fillText(line, textX, y);
    y += lineHeight;
  }

  if (typeof image.close === 'function') image.close();
  return await canvasToPngBlob(canvas);
};

const captureInspectorCard = async (item) => {
  const captureEl = item.contextCaptureTarget || item.captureTarget;
  const result = await captureElementImage(captureEl);
  if (!result?.blob) {
    return {
      blob: null,
      source: null,
      captureReason: result?.captureReason || 'missing-element',
    };
  }

  const compositeBlob = await buildInspectorCompositeImage(item, result.blob);
  if (!compositeBlob) {
    logInspectorDebug('[Inspector] composición de tarjeta falló');
    return { blob: null, source: null, captureReason: 'composite-failed' };
  }

  return {
    blob: compositeBlob,
    source: result.source,
    captureReason: null,
  };
};

const copyInspectorCardToClipboard = async (item) => {
  const plainText = String(item.compactText || '').normalize('NFC');

  if (shouldUseInspectorTextOnlyClipboard()) {
    logInspectorDebug('[Inspector] modo Codex: copia solo texto');
    const nativeStatus = await copyPlainTextToNativeClipboard(plainText);
    logInspectorDebug('[Inspector] clipboard Codex texto:', nativeStatus);
    if (nativeStatus === 'ok') return { status: 'codex-text', card: null };

    const ok = await copiarAlPortapapeles(plainText);
    return { status: ok !== false ? 'text' : 'blocked', card: null };
  }

  const card = await captureInspectorCard(item);
  if (!card?.blob) {
    logInspectorDebug(
      '[Inspector] captura imagen+texto no disponible:',
      card?.captureReason || 'unknown',
      item?.componentName || '',
    );
    return {
      status: 'no-image',
      card: null,
      captureReason: card?.captureReason || 'unknown',
    };
  }

  logInspectorDebug('[Inspector] tarjeta visual generada:', JSON.stringify({
    source: card.source,
    bytes: card.blob.size,
    type: card.blob.type,
  }));
  logInspectorDebug('[Inspector] entorno clipboard:', JSON.stringify(getClipboardEnvironment()));

  const nativeStatus = await copyImageBlobToNativeClipboard(card.blob, plainText);
  logInspectorDebug('[Inspector] clipboard nativo:', nativeStatus);
  if (nativeStatus === 'ok') return { status: 'native', card };

  const htmlStatus = await copyHtmlImageToClipboard(card.blob, plainText);
  logInspectorDebug('[Inspector] fallback HTML:', htmlStatus);
  if (htmlStatus === 'ok') return { status: 'html', card };

  const imageStatus = await copyImageBlobToClipboard(card.blob);
  if (imageStatus === 'ok') return { status: 'ok', card };

  const ok = await copiarAlPortapapeles(plainText);
  return { status: ok !== false ? 'text' : 'blocked', card };
};

const INSPECTOR_ACCUMULATE_SOFT_MAX = 5;
const INSPECTOR_ACCUMULATE_HARD_MAX = 8;
const INSPECTOR_MULTI_MAX_OUTPUT_BYTES = 7_500_000;

const buildAccumulatedBatchItem = (entry) => ({
  ...entry.item,
  preCapturedImageBlob: entry.imageBlob || null,
  preCapturedImageSource: entry.imageSource || null,
  preCapturedImagePromise: entry.capturePromise || null,
  preCaptureFailed: entry.captureFailed === true,
  preCapturedAt: entry.capturedAt || null,
});

const buildFinalizeBatch = (accumulatedOrder, accumulatedById, finalInfo) => {
  const batch = [];
  const seen = new Set();

  for (const id of accumulatedOrder) {
    const entry = accumulatedById.get(id);
    if (!entry?.item || seen.has(id)) continue;
    batch.push(buildAccumulatedBatchItem(entry));
    seen.add(id);
  }

  if (!finalInfo) return batch;

  if (seen.has(finalInfo.id)) return batch;
  return [...batch, finalInfo];
};

const getInspectorCellSummaryLines = (item, maxLines = 6) => {
  const lines = [];
  const initialLocation = item.exactLocation || item.componentDefinition || item.filePath || '';
  const editLocation = item.probableEditLocation || initialLocation;
  if (editLocation) lines.push(`- Editar: ${formatInspectorLocationCompact(editLocation)}`);
  if (initialLocation && item.probableEditLocation && !sameInspectorFile(editLocation, initialLocation)) {
    lines.push(`- Inicial: ${formatInspectorLocationCompact(initialLocation)}`);
  }
  if (item.visibleText) lines.push(`- Control: "${trunc(item.visibleText, 36)}"`);
  if (item.componentName) {
    const ancestors = item.usefulAncestors?.slice(0, 2).filter(Boolean) || [];
    const compLabel = ancestors.length
      ? `${item.componentName} ← ${ancestors.join(' ← ')}`
      : item.componentName;
    lines.push(`- Componente: ${compLabel}`);
  }
  if (item.contextDesc) lines.push(`- Zona: ${normalizeInspectorZone(item.contextDesc)}`);
  if (item.route) lines.push(`- Ruta app: ${item.route}`);
  return lines.slice(0, maxLines);
};

const getInspectorMultiQuickSummaryLines = (items) => (
  items.map((item, index) => buildInspectorQuickSummaryLine(item, index)).filter(Boolean)
);

const buildInspectorMultiPlainText = (items) => {
  if (!items?.length) return '';
  if (items.length === 1) return items[0].compactText || '';

  const route = items.find((item) => item.route)?.route || getInspectorRoute();
  const header = [
    `INSPECTOR · ${items.length} capturas`,
    route ? `Ruta app: ${route}` : '',
    items[0]?.pageContext ? `Página: ${items[0].pageContext}` : '',
  ].filter(Boolean);

  const quickSummary = [
    'Resumen rápido:',
    ...getInspectorMultiQuickSummaryLines(items),
  ];

  const blocks = items.map((item, index) => {
    const separator = '═'.repeat(38);
    return [
      separator,
      formatInspectorBlockTitle(item, index),
      separator,
      item.compactText || '',
    ].join('\n');
  });

  return [...header, '', ...quickSummary, '', ...blocks].join('\n');
};

const drawInspectorScreenshotInCell = (ctx, item, image, cellX, cellY, imageAreaW, imageAreaH) => {
  const sourceWidth = image.width || image.naturalWidth || 1;
  const sourceHeight = image.height || image.naturalHeight || 1;
  const scale = Math.min(1, imageAreaW / sourceWidth, imageAreaH / sourceHeight);
  const imageWidth = Math.max(1, Math.round(sourceWidth * scale));
  const imageHeight = Math.max(1, Math.round(sourceHeight * scale));
  const imageX = cellX + Math.round((imageAreaW - imageWidth) / 2);
  const imageY = cellY + Math.round((imageAreaH - imageHeight) / 2);

  drawRoundRect(ctx, imageX - 1, imageY - 1, imageWidth + 2, imageHeight + 2, 6);
  ctx.fillStyle = '#020617';
  ctx.fill();
  ctx.drawImage(image, imageX, imageY, imageWidth, imageHeight);

  if (item.exactTargetOverlay && item.contextCaptureRect) {
    const ctxRect = item.contextCaptureRect;
    const exact = item.exactTargetOverlay;
    if (ctxRect.width > 0 && ctxRect.height > 0) {
      const scaleX = imageWidth / ctxRect.width;
      const scaleY = imageHeight / ctxRect.height;
      const overlayX = imageX + (exact.left - ctxRect.left) * scaleX;
      const overlayY = imageY + (exact.top - ctxRect.top) * scaleY;
      const overlayW = exact.width * scaleX;
      const overlayH = exact.height * scaleY;
      ctx.save();
      ctx.strokeStyle = INSPECTOR_TARGET_BORDER;
      ctx.lineWidth = Math.max(1.5, 2 * Math.min(scaleX, scaleY));
      ctx.strokeRect(overlayX + 0.5, overlayY + 0.5, Math.max(0, overlayW - 1), Math.max(0, overlayH - 1));
      ctx.restore();
    }
  }
};

const buildInspectorMultiCompositeImage = async (entries) => {
  if (!entries?.length) return null;
  if (entries.length === 1 && entries[0].imageBlob && !entries[0].captureFailed) {
    return buildInspectorCompositeImage(entries[0].item, entries[0].imageBlob);
  }

  const padding = 24;
  const gap = 16;
  const cols = entries.length <= 2 ? entries.length : 2;
  const rows = Math.ceil(entries.length / cols);
  const cellImageMaxW = 480;
  const cellImageMaxH = 240;
  const cellHeaderH = 26;
  const cellTextMaxLines = 6;
  const lineHeight = 16;
  const cellPad = 12;
  const quickSummaryLines = getInspectorMultiQuickSummaryLines(entries.map((entry) => entry.item));
  const summaryLineHeight = 16;
  const summaryBlockH = quickSummaryLines.length
    ? 20 + quickSummaryLines.length * summaryLineHeight + 12
    : 0;
  const headerH = 32 + summaryBlockH;

  const measureCanvas = document.createElement('canvas');
  const measureCtx = measureCanvas.getContext('2d');
  measureCtx.font = '12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';

  const cellTextHeights = entries.map((entry) => {
    const summaryLines = getInspectorCellSummaryLines(entry.item, cellTextMaxLines);
    return summaryLines.length * lineHeight + 8;
  });

  const cellInnerW = cellImageMaxW + cellPad * 2;
  const cellHeights = entries.map((_, i) => cellHeaderH + cellImageMaxH + cellTextHeights[i] + cellPad * 2);
  const rowHeights = [];
  for (let row = 0; row < rows; row += 1) {
    const start = row * cols;
    const slice = cellHeights.slice(start, start + cols);
    rowHeights.push(Math.max(...slice, cellHeaderH + cellImageMaxH + cellPad * 2));
  }

  const canvasWidth = padding * 2 + cols * cellInnerW + (cols - 1) * gap;
  const canvasHeight = padding + headerH + padding
    + rowHeights.reduce((sum, h) => sum + h, 0)
    + (rows - 1) * gap
    + padding;

  const canvas = document.createElement('canvas');
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = PANEL_BG;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  const route = entries[0]?.item?.route || getInspectorRoute();
  ctx.font = '600 13px ui-sans-serif, system-ui, sans-serif';
  ctx.fillStyle = TEXT_DIM;
  ctx.fillText(
    trunc(`INSPECTOR · ${entries.length} capturas${route ? ` · ${route}` : ''}`, 90),
    padding,
    padding + 18
  );

  if (quickSummaryLines.length) {
    const summaryY = padding + 30;
    drawRoundRect(ctx, padding, summaryY, canvasWidth - padding * 2, summaryBlockH, 8);
    ctx.fillStyle = 'rgba(255,255,255,0.035)';
    ctx.fill();
    ctx.strokeStyle = PANEL_BORDER_STRONG;
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.font = '800 11px ui-sans-serif, system-ui, sans-serif';
    ctx.fillStyle = ACCENT;
    ctx.fillText('RESUMEN RÁPIDO', padding + 12, summaryY + 14);

    ctx.font = '12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
    let summaryTextY = summaryY + 32;
    for (const line of quickSummaryLines) {
      ctx.fillStyle = TEXT;
      ctx.fillText(trunc(line, 118), padding + 12, summaryTextY);
      summaryTextY += summaryLineHeight;
    }
  }

  const loadedImages = await Promise.all(
    entries.map(async (entry) => {
      if (!entry.imageBlob || entry.captureFailed) return null;
      try {
        return await loadImageFromBlob(entry.imageBlob);
      } catch {
        return null;
      }
    })
  );

  let y = padding + headerH + padding;
  for (let row = 0; row < rows; row += 1) {
    const rowH = rowHeights[row];
    for (let col = 0; col < cols; col += 1) {
      const index = row * cols + col;
      if (index >= entries.length) break;

      const entry = entries[index];
      const cellX = padding + col * (cellInnerW + gap);
      const cellY = y;
      const cellH = rowH;

      drawRoundRect(ctx, cellX, cellY, cellInnerW, cellH, 10);
      ctx.fillStyle = '#111827';
      ctx.fill();
      ctx.strokeStyle = PANEL_BORDER_STRONG;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.fillStyle = ACCENT;
      ctx.font = '800 11px ui-sans-serif, system-ui, sans-serif';
      ctx.fillStyle = TEXT;
      ctx.font = '700 12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
      ctx.fillText(trunc(formatInspectorBlockTitle(entry.item, entry.index - 1), 58), cellX + cellPad, cellY + 16);

      const imageAreaY = cellY + cellHeaderH;
      const image = loadedImages[index];
      if (image) {
        drawInspectorScreenshotInCell(
          ctx,
          entry.item,
          image,
          cellX + cellPad,
          imageAreaY,
          cellImageMaxW,
          cellImageMaxH
        );
      } else {
        ctx.fillStyle = TEXT_DIM;
        ctx.font = '12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
        ctx.fillText('(captura no disponible)', cellX + cellPad, imageAreaY + cellImageMaxH / 2);
      }

      const summaryLines = getInspectorCellSummaryLines(entry.item, cellTextMaxLines);
      let textY = imageAreaY + cellImageMaxH + 10;
      ctx.font = '12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
      for (const line of summaryLines) {
        ctx.fillStyle = getLineColor(line);
        const maxChars = line.startsWith('- Ubicación:') ? 64 : 58;
        ctx.fillText(trunc(line, maxChars), cellX + cellPad, textY);
        textY += lineHeight;
      }
    }
    y += rowH + gap;
  }

  for (const image of loadedImages) {
    if (image && typeof image.close === 'function') image.close();
  }

  const blob = await canvasToPngBlob(canvas);
  if (blob && blob.size > INSPECTOR_MULTI_MAX_OUTPUT_BYTES) {
    console.warn('[Inspector] PNG multi supera límite; se entrega igual para fallback texto/HTML');
  }
  return blob;
};

const buildInspectorMultiHtml = async (entries, heroBlob) => {
  if (!entries?.length) return '';

  const route = entries[0]?.item?.route || getInspectorRoute();
  const count = entries.length;
  let heroImg = '';
  if (heroBlob) {
    const heroDataUrl = await blobToDataUrl(heroBlob);
    heroImg = `<img src="${heroDataUrl}" alt="Inspector ${count} capturas" style="display:block;max-width:100%;height:auto;margin:12px 0;border-radius:8px;" />`;
  }

  const sections = await Promise.all(entries.map(async (entry) => {
    const { index, item, imageBlob } = entry;
    let imgHtml = '';
    if (imageBlob) {
      const dataUrl = await blobToDataUrl(imageBlob);
      imgHtml = `<img src="${dataUrl}" alt="#${index} ${escapeHtml(item.componentName)}" style="max-width:100%;border:1px solid rgba(255,255,255,.12);border-radius:8px;display:block;margin:8px 0;" />`;
    }
    return [
      `<section data-inspector-index="${index}">`,
      `<h3 style="color:#38bdf8;margin:16px 0 8px;">#${index} · ${escapeHtml(item.componentName)}</h3>`,
      imgHtml,
      `<pre style="white-space:pre-wrap;font-size:13px;line-height:1.45;color:#e2e8f0;">${escapeHtml(item.compactText || '')}</pre>`,
      '</section>',
      '<hr style="border-color:rgba(255,255,255,.12);" />',
    ].join('');
  }));

  return [
    '<!doctype html><html><body style="background:#0a0e14;color:#e2e8f0;font-family:ui-monospace,monospace;padding:12px;">',
    `<p><strong>Inspector · ${count} capturas</strong>${route ? ` · ${escapeHtml(route)}` : ''}</p>`,
    heroImg,
    sections.join(''),
    '</body></html>',
  ].join('');
};

const captureInspectorEntries = async (items, onProgress) => {
  const entries = [];
  for (let i = 0; i < items.length; i += 1) {
    const item = items[i];
    onProgress?.(i + 1, items.length);
    const captureEl = item.contextCaptureTarget || item.captureTarget;
    let imageBlob = item.preCapturedImageBlob || null;
    let source = item.preCapturedImageSource || null;

    if (!imageBlob && item.preCapturedImagePromise) {
      try {
        const preCaptured = await item.preCapturedImagePromise;
        imageBlob = preCaptured?.imageBlob || null;
        source = preCaptured?.imageSource || null;
      } catch (err) {
        console.warn('[Inspector] captura acumulada no disponible:', err?.message || err);
      }
    }

    if (!imageBlob && captureEl && document.contains(captureEl)) {
      const result = await captureElementImage(captureEl);
      if (result?.blob) {
        imageBlob = result.blob;
        source = result.source;
      }
    }
    entries.push({
      index: i + 1,
      item,
      imageBlob,
      source,
      captureFailed: !imageBlob,
    });
  }
  return entries;
};

const copyInspectorMultiToClipboard = async (items, onProgress) => {
  if (!items?.length) return { status: 'no-items', blob: null, failed: 0 };

  const plainText = buildInspectorMultiPlainText(items).normalize('NFC');

  if (shouldUseInspectorTextOnlyClipboard()) {
    logInspectorDebug('[Inspector] modo Codex multi: copia solo texto');
    const nativeStatus = await copyPlainTextToNativeClipboard(plainText);
    if (nativeStatus === 'ok') return { status: 'codex-text', blob: null, failed: 0 };

    const ok = await copiarAlPortapapeles(plainText);
    return { status: ok !== false ? 'text' : 'blocked', blob: null, failed: 0 };
  }

  const entries = await captureInspectorEntries(items, onProgress);
  const failed = entries.filter((entry) => entry.captureFailed).length;
  const compositeBlob = await buildInspectorMultiCompositeImage(entries);
  const html = compositeBlob ? await buildInspectorMultiHtml(entries, compositeBlob) : '';

  if (compositeBlob) {
    logInspectorDebug('[Inspector] tarjeta multi generada:', JSON.stringify({
      count: items.length,
      bytes: compositeBlob.size,
      failed,
    }));

    const nativeStatus = await copyImageBlobToNativeClipboard(compositeBlob, plainText);
    if (nativeStatus === 'ok') return { status: 'native', blob: compositeBlob, failed };

    const htmlStatus = await copyHtmlImageToClipboard(compositeBlob, plainText, html);
    if (htmlStatus === 'ok') return { status: 'html', blob: compositeBlob, failed };

    const imageStatus = await copyImageBlobToClipboard(compositeBlob);
    if (imageStatus === 'ok') return { status: 'ok', blob: compositeBlob, failed };
  }

  const ok = await copiarAlPortapapeles(plainText);
  return { status: ok !== false ? 'text' : 'blocked', blob: compositeBlob, failed };
};

// ─── Captura de info completa del elemento inspeccionado ───
const captureElement = (clickedEl) => {
  let element = clickedEl;
  let components = [];
  let firstFiber = null;
  while (element && components.length === 0) {
    const fiber = getFiberFromElement(element);
    if (fiber) {
      if (!firstFiber) firstFiber = fiber;
      components = findComponents(fiber);
    }
    element = element.parentElement;
  }
  if (components.length === 0) return null;

  const propsClicked = firstFiber ? getRelevantProps(firstFiber) : [];
  const actionableEl = findActionableElement(clickedEl);
  const actionableFiber = actionableEl !== clickedEl ? getFiberFromElement(actionableEl) : null;
  const propsActionable = actionableFiber ? getRelevantProps(actionableFiber) : [];
  const props = Array.from(new Set([...propsClicked, ...propsActionable]));

  const { semanticComponents, componentName, usefulAncestors } = getComponentSummary(components);

  let filePath = null;
  let fileComponentName = '';
  for (const c of semanticComponents) {
    if (fileMap[c]) {
      filePath = fileMap[c];
      fileComponentName = c;
      break;
    }
  }
  if (!filePath) {
    for (const c of [componentName, ...components]) {
      if (fileMap[c]) {
        filePath = fileMap[c];
        fileComponentName = c;
        break;
      }
    }
  }

  const componentChain = [componentName, ...usefulAncestors].filter(Boolean).join(' → ');
  const elementDesc = describeElement(clickedEl);
  const referenceElementDesc = getReferenceElementDesc(clickedEl, actionableEl);
  const actionableDesc = actionableEl !== clickedEl ? describeElement(actionableEl) : null;
  const context = findContextElement(actionableEl || clickedEl);
  const contextDesc = context
    ? `${context.kind}${context.title ? `: "${context.title}"` : ''}`
    : '';
  const directControls = getDirectControls(clickedEl, actionableEl);
  const zoneControls = getZoneControls(clickedEl, actionableEl, context?.element, directControls);
  const pageContext = getPageContext();
  const route = getInspectorRoute();
  const visibleTextInfo = getVisibleTextInfo(clickedEl, actionableEl);
  const elementSource = resolveElementSourceLocation(clickedEl);
  const exactLocation = formatSourceLocation(elementSource);
  const cssClasses = getElementClassNames(clickedEl);
  const contextCaptureTarget = needsContextCapture(clickedEl)
    ? resolveContextCaptureTarget(clickedEl)
    : clickedEl;
  const contextCaptureRect = snapshotRect(contextCaptureTarget);
  const exactTargetOverlay = contextCaptureTarget !== clickedEl ? snapshotRect(clickedEl) : null;
  const searchAnchors = buildSearchAnchors({
    clickedEl,
    visibleText: visibleTextInfo.text,
    cssClasses,
    componentName,
  });
  const jsxLocateAnchors = buildJsxLocateAnchors(clickedEl, {
    visibleText: visibleTextInfo.text,
    cssClasses,
    componentName,
  });
  const id = `${componentName}|${exactLocation || filePath || ''}|${contextDesc}|${elementDesc}|${actionableDesc || ''}`;

  const compactText = buildInspectorText({
    componentName,
    exactLocation,
    componentDefinition: '',
    filePath,
    usefulAncestors,
    contextDesc,
    referenceElementDesc,
    cssClasses,
    visibleText: visibleTextInfo.text,
    visibleTextFromParent: visibleTextInfo.fromParent,
    visibleTextFromNearby: visibleTextInfo.fromNearby,
    props,
    pageContext,
    route,
    searchAnchors,
  });

  return {
    id,
    componentName,
    componentChain,
    semanticComponents,
    usefulAncestors,
    filePath,
    fileComponentName,
    contextDesc,
    directControls,
    zoneControls,
    pageContext,
    elementDesc,
    referenceElementDesc,
    visibleText: visibleTextInfo.text,
    visibleTextFromParent: visibleTextInfo.fromParent,
    visibleTextFromNearby: visibleTextInfo.fromNearby,
    actionableDesc,
    props,
    compactText,
    exactLocation,
    elementSource,
    cssClasses,
    searchAnchors,
    jsxLocateAnchors,
    element: clickedEl,
    actionableElement: actionableEl,
    captureTarget: clickedEl,
    contextCaptureTarget,
    contextCaptureRect,
    exactTargetOverlay,
    route,
  };
};

// ─── Estilos compartidos ───
const PANEL_BG = '#0a0e14';
const PANEL_BORDER_STRONG = 'rgba(255,255,255,0.12)';
const ACCENT = '#38bdf8';
const ACCENT_MUTED = 'rgba(56,189,248,0.16)';
const INSPECTOR_TARGET_BORDER = '#fbbf24';
const TEXT = '#e2e8f0';
const TEXT_MUTED = '#94a3b8';
const TEXT_DIM = '#64748b';
const FILE_GREEN = '#86efac';
const INSPECTOR_ACTIVATION_GRACE_MS = 300;

/** X09 · Cruz compacta — SVG 32×32, trazo 0.85 px, brazos 5 px, hotspot 16 16 */
const buildInspectorCursorCss = () => {
  const svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">',
    `<path d="M16 11v5M16 16v5M11 16h5M16 16h5" stroke="${ACCENT}" stroke-width="0.85" stroke-linecap="round"/>`,
    '</svg>',
  ].join('');
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}") 16 16, crosshair`;
};

const getNowMs = () => (
  typeof performance !== 'undefined' && typeof performance.now === 'function'
    ? performance.now()
    : Date.now()
);

const DevClickToSource = () => {
  const [active, setActive] = useState(false);
  const [highlightRect, setHighlightRect] = useState(null);
  const [accumulatedSnapshot, setAccumulatedSnapshot] = useState([]);
  const [toast, setToast] = useState(null); // { text, x, y, kind }

  const activeRef = useRef(false);
  const toggleButtonRef = useRef(null);
  const suppressCaptureUntilRef = useRef(0);
  const swallowNextClickRef = useRef(false);
  const toastTimerRef = useRef(null);
  const inspectionTargetRef = useRef(null);
  const hoverRafRef = useRef(null);
  const highlightRafRef = useRef(null);
  const wireframeCanvasRef = useRef(null);
  const wireframeRafRef = useRef(null);
  const pendingHoverPointRef = useRef(null);
  const keyboardLockedUntilRef = useRef(0);
  const inspectorScopeRootRef = useRef(null);
  const scopeObserverTimerRef = useRef(null);
  const accumulatedOrderRef = useRef([]);
  const accumulatedByIdRef = useRef(new Map());
  const copyInFlightRef = useRef(false);
  const captureSeqRef = useRef(0);
  useEffect(() => { activeRef.current = active; }, [active]);
  useEffect(() => () => clearTimeout(toastTimerRef.current), []);

  const syncAccumulatedSnapshot = useCallback(() => {
    const snapshot = accumulatedOrderRef.current
      .map((id, index) => {
        const entry = accumulatedByIdRef.current.get(id);
        if (!entry?.item) return null;
        const el = entry.element;
        const stale = !el || !document.contains(el);
        const rect = stale ? entry.frozenRect : snapshotRect(el);
        return {
          id,
          order: index + 1,
          componentName: entry.item.componentName,
          label: trunc(entry.item.visibleText || entry.item.componentName, 28),
          rect,
          stale,
          capturePending: entry.capturePending === true,
          captureFailed: entry.captureFailed === true,
          hasImage: Boolean(entry.imageBlob),
        };
      })
      .filter(Boolean);
    setAccumulatedSnapshot(snapshot);
  }, []);

  const clearAccumulated = useCallback(() => {
    accumulatedOrderRef.current = [];
    accumulatedByIdRef.current = new Map();
    setAccumulatedSnapshot([]);
  }, []);

  const toggleAccumulated = useCallback((info, element) => {
    const id = info.id;
    const byId = accumulatedByIdRef.current;
    const order = accumulatedOrderRef.current;

    if (byId.has(id)) {
      byId.delete(id);
      accumulatedOrderRef.current = order.filter((entryId) => entryId !== id);
      syncAccumulatedSnapshot();
      return { added: false, count: accumulatedOrderRef.current.length };
    }

    if (order.length >= INSPECTOR_ACCUMULATE_HARD_MAX) {
      return { added: false, blocked: true, count: order.length };
    }

    byId.set(id, {
      item: info,
      element,
      frozenRect: snapshotRect(element),
      imageBlob: null,
      imageSource: null,
      capturePromise: null,
      capturePending: false,
      captureFailed: false,
      captureToken: null,
      capturedAt: null,
    });
    accumulatedOrderRef.current = [...order, id];
    syncAccumulatedSnapshot();

    return {
      added: true,
      count: accumulatedOrderRef.current.length,
      softWarn: accumulatedOrderRef.current.length >= INSPECTOR_ACCUMULATE_SOFT_MAX,
    };
  }, [syncAccumulatedSnapshot]);

  const primeAccumulatedCapture = useCallback((id) => {
    const entry = accumulatedByIdRef.current.get(id);
    if (!entry || entry.capturePromise || entry.imageBlob) return;

    const token = captureSeqRef.current + 1;
    captureSeqRef.current = token;
    entry.captureToken = token;
    entry.capturePending = true;
    entry.captureFailed = false;
    syncAccumulatedSnapshot();

    const captureEl = entry.item.contextCaptureTarget || entry.item.captureTarget || entry.element;
    const capturePromise = (async () => {
      if (!captureEl || !document.contains(captureEl)) {
        return { imageBlob: null, imageSource: null, captureFailed: true };
      }

      const result = await captureElementImage(captureEl);
      return {
        imageBlob: result?.blob || null,
        imageSource: result?.source || null,
        captureFailed: !result?.blob,
      };
    })();

    entry.capturePromise = capturePromise;

    capturePromise
      .then((result) => {
        const current = accumulatedByIdRef.current.get(id);
        if (!current || current.captureToken !== token) return result;

        current.imageBlob = result.imageBlob;
        current.imageSource = result.imageSource;
        current.captureFailed = result.captureFailed;
        current.capturePending = false;
        current.capturePromise = null;
        current.capturedAt = result.imageBlob ? Date.now() : null;
        syncAccumulatedSnapshot();
        return result;
      })
      .catch((err) => {
        const current = accumulatedByIdRef.current.get(id);
        if (!current || current.captureToken !== token) return;

        current.capturePending = false;
        current.captureFailed = true;
        current.capturePromise = null;
        console.warn('[Inspector] captura acumulada falló:', err?.message || err);
        syncAccumulatedSnapshot();
      });
  }, [syncAccumulatedSnapshot]);

  const removeAccumulatedById = useCallback((id) => {
    if (!accumulatedByIdRef.current.has(id)) return;
    accumulatedByIdRef.current.delete(id);
    accumulatedOrderRef.current = accumulatedOrderRef.current.filter((entryId) => entryId !== id);
    syncAccumulatedSnapshot();
  }, [syncAccumulatedSnapshot]);

  const showToast = useCallback((text, e, kind = 'ok') => {
    clearTimeout(toastTimerRef.current);
    setToast({ text, x: e?.clientX ?? window.innerWidth - 200, y: e?.clientY ?? 60, kind });
    toastTimerRef.current = setTimeout(() => setToast(null), 1300);
  }, []);

  const suppressCaptureMomentarily = useCallback(() => {
    suppressCaptureUntilRef.current = getNowMs() + INSPECTOR_ACTIVATION_GRACE_MS;
  }, []);

  const deactivateInspector = useCallback(() => {
    activeRef.current = false;
    suppressCaptureMomentarily();
    setActive(false);
    inspectionTargetRef.current = null;
    setHighlightRect(null);
    clearAccumulated();
    if (hoverRafRef.current) {
      cancelAnimationFrame(hoverRafRef.current);
      hoverRafRef.current = null;
    }
    if (highlightRafRef.current) {
      cancelAnimationFrame(highlightRafRef.current);
      highlightRafRef.current = null;
    }
    if (wireframeRafRef.current) {
      cancelAnimationFrame(wireframeRafRef.current);
      wireframeRafRef.current = null;
    }
    pendingHoverPointRef.current = null;
  }, [clearAccumulated, suppressCaptureMomentarily]);

  const activateInspector = useCallback(() => {
    activeRef.current = true;
    suppressCaptureMomentarily();
    setActive(true);
    inspectionTargetRef.current = null;
    setHighlightRect(null);
    clearAccumulated();
  }, [clearAccumulated, suppressCaptureMomentarily]);

  const isCaptureSuppressed = useCallback(() => (
    activeRef.current && getNowMs() < suppressCaptureUntilRef.current
  ), []);

  const closeInspector = useCallback(() => {
    deactivateInspector();
  }, [deactivateInspector]);

  const isPointInsideToggleButton = useCallback((event) => {
    const rect = toggleButtonRef.current?.getBoundingClientRect();
    if (!rect) return false;

    const hitSlop = 10;
    return (
      event.clientX >= rect.left - hitSlop &&
      event.clientX <= rect.right + hitSlop &&
      event.clientY >= rect.top - hitSlop &&
      event.clientY <= rect.bottom + hitSlop
    );
  }, []);

  const handleToggleButtonPointerDown = useCallback((event) => {
    event.stopPropagation();
    suppressCaptureMomentarily();
  }, [suppressCaptureMomentarily]);

  const handleToggleButtonClick = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    suppressCaptureMomentarily();
    if (activeRef.current) closeInspector();
    else activateInspector();
  }, [activateInspector, closeInspector, suppressCaptureMomentarily]);

  const refreshHighlightGeometry = useCallback(() => {
    const el = inspectionTargetRef.current;
    if (!el) {
      setHighlightRect(null);
    } else if (!document.contains(el)) {
      inspectionTargetRef.current = null;
      setHighlightRect(null);
    } else {
      setHighlightRect(getInspectorHighlightInfo(el));
    }
    syncAccumulatedSnapshot();
  }, [syncAccumulatedSnapshot]);

  const scheduleHighlightRefresh = useCallback(() => {
    if (highlightRafRef.current) cancelAnimationFrame(highlightRafRef.current);
    highlightRafRef.current = requestAnimationFrame(() => {
      highlightRafRef.current = null;
      refreshHighlightGeometry();
    });
  }, [refreshHighlightGeometry]);

  const applyInspectionTarget = useCallback((el) => {
    if (inspectionTargetRef.current === el) return;

    if (!el || isInspectorExcludedNode(el) || isInspectorUiNode(el)) {
      inspectionTargetRef.current = null;
      setHighlightRect(null);
      return;
    }

    inspectionTargetRef.current = el;
    setHighlightRect(getInspectorHighlightInfo(el));
  }, []);

  const refreshWireframe = useCallback(() => {
    if (!activeRef.current) return;

    const scopeRoot = resolveInspectorScopeRoot();
    const rects = collectWireframeRects(scopeRoot);
    drawWireframeCanvas(wireframeCanvasRef.current, rects);
    logInspectorDebug('[Inspector] wireframe rects:', rects.length);
  }, []);

  const scheduleWireframeRefresh = useCallback(() => {
    if (wireframeRafRef.current) cancelAnimationFrame(wireframeRafRef.current);
    wireframeRafRef.current = requestAnimationFrame(() => {
      wireframeRafRef.current = null;
      refreshWireframe();
    });
  }, [refreshWireframe]);

  const processHoverPoint = useCallback(() => {
    hoverRafRef.current = null;
    if (!activeRef.current) return;
    if (getNowMs() < keyboardLockedUntilRef.current) return;

    const point = pendingHoverPointRef.current;
    if (!point) return;

    const raw = resolveInspectableElementFromPoint(point.x, point.y);
    applyInspectionTarget(raw);
  }, [applyInspectionTarget]);

  const scheduleHoverUpdate = useCallback((x, y) => {
    pendingHoverPointRef.current = { x, y };
    if (hoverRafRef.current != null) return;
    hoverRafRef.current = requestAnimationFrame(processHoverPoint);
  }, [processHoverPoint]);

  const lockKeyboardSelection = useCallback(() => {
    keyboardLockedUntilRef.current = getNowMs() + INSPECTOR_KEYBOARD_LOCK_MS;
  }, []);

  const getCaptureTarget = useCallback((fallbackEl) => (
    inspectionTargetRef.current || fallbackEl
  ), []);

  const handleCaptureBatch = useCallback((items, e) => {
    if (!items?.length || copyInFlightRef.current) return;

    copyInFlightRef.current = true;
    try { window.focus(); } catch {
      // El foco puede fallar en algunos contenedores del navegador; la copia sigue igual.
    }

    const count = items.length;
    const showProgressToast = (current, total) => {
      if (total <= 1) return;
      showToast(`Capturando ${current}/${total}…`, e, 'ok');
    };

    Promise.resolve()
      .then(async () => {
        if (count === 1) {
          const enriched = await enrichInspectorItem(items[0]);
          const { status: imageStatus, captureReason } = await copyInspectorCardToClipboard(enriched);
          if (imageStatus === 'codex-text') return { status: 'codex-text', failed: 0 };
          if (imageStatus === 'text') return { status: 'text', failed: 0 };
          if (imageStatus === 'blocked') return { status: 'blocked', failed: 0 };
          if (imageStatus === 'ok') return { status: 'card', failed: 0 };
          if (imageStatus === 'native') return { status: 'card-native', failed: 0 };
          if (imageStatus === 'html') return { status: 'card-html', failed: 0 };
          if (imageStatus === 'no-image') {
            logInspectorDebug('[Inspector] fallback a solo texto (imagen no disponible):', captureReason || 'unknown');
            const ok = await copiarAlPortapapeles(enriched.compactText);
            return { status: ok !== false ? 'text-no-image' : 'blocked', failed: 0 };
          }
          logInspectorDebug('[Inspector] copia de tarjeta imagen+texto no disponible:', imageStatus);
          const ok = await copiarAlPortapapeles(enriched.compactText);
          return { status: ok !== false ? 'text' : 'blocked', failed: 0 };
        }

        const enriched = await Promise.all(items.map((item) => enrichInspectorItem(item)));
        const { status, failed } = await copyInspectorMultiToClipboard(enriched, showProgressToast);
        if (status === 'codex-text' || status === 'text' || status === 'blocked') {
          return { status, failed };
        }
        if (status === 'native' || status === 'ok' || status === 'html') {
          return { status, failed };
        }
        logInspectorDebug('[Inspector] copia multi imagen+texto no disponible:', status);
        const ok = await copiarAlPortapapeles(buildInspectorMultiPlainText(enriched));
        return {
          status: ok !== false ? (failed > 0 ? 'text-no-image' : 'text') : 'blocked',
          failed,
        };
      })
      .then(({ status, failed }) => {
        const partial = failed > 0 ? ` (${count - failed}/${count} con imagen)` : '';
        const multiLabel = count > 1 ? `${count} capturas` : '';
        showToast(
          status === 'card' || status === 'card-native' || status === 'card-html'
            ? (count > 1 ? `Texto + imagen copiados · ${multiLabel}${partial}` : 'Texto + imagen copiados')
            : status === 'native' || status === 'ok' || status === 'html'
              ? (count > 1 ? `Texto + imagen copiados · ${multiLabel}${partial}` : 'Texto + imagen copiados')
              : status === 'text-no-image'
                ? (count > 1
                  ? `Texto copiado (imagen no disponible) · ${multiLabel}${partial}`
                  : 'Texto copiado (imagen no disponible)')
              : status === 'codex-text' || status === 'text'
                ? (count > 1 ? `Texto copiado · ${multiLabel}` : 'Texto copiado')
                : 'Copia bloqueada por el navegador',
          e,
          status === 'blocked' ? 'err' : 'ok'
        );
      })
      .catch((err) => {
        console.warn('[Inspector] copia automática de tarjeta falló:', err?.message || err);
        showToast('Error al copiar', e, 'err');
      })
      .finally(() => {
        copyInFlightRef.current = false;
        clearAccumulated();
        deactivateInspector();
      });
  }, [clearAccumulated, deactivateInspector, showToast]);

  useLayoutEffect(() => {
    if (!IS_DEV || !active) return;
    refreshHighlightGeometry();
    refreshWireframe();
  }, [active, refreshHighlightGeometry, refreshWireframe]);

  useLayoutEffect(() => {
    if (!IS_DEV || !active || typeof document === 'undefined') return undefined;

    const cursor = buildInspectorCursorCss();
    const styleEl = document.createElement('style');
    styleEl.setAttribute('data-dev-inspector', '');
    styleEl.textContent = [
      'html[data-dev-inspector-active],',
      'html[data-dev-inspector-active] *:not([data-dev-inspector]) {',
      `  cursor: ${cursor} !important;`,
      '}',
      'html[data-dev-inspector-active] button[data-dev-inspector] {',
      '  cursor: pointer !important;',
      '}',
    ].join('\n');

    document.documentElement.setAttribute('data-dev-inspector-active', '');
    document.head.appendChild(styleEl);

    return () => {
      document.documentElement.removeAttribute('data-dev-inspector-active');
      styleEl.remove();
    };
  }, [active]);

  useEffect(() => {
    if (!IS_DEV || !active) return undefined;
    scheduleHighlightRefresh();
    scheduleWireframeRefresh();
    return () => {
      if (highlightRafRef.current) {
        cancelAnimationFrame(highlightRafRef.current);
        highlightRafRef.current = null;
      }
      if (wireframeRafRef.current) {
        cancelAnimationFrame(wireframeRafRef.current);
        wireframeRafRef.current = null;
      }
    };
  }, [active, scheduleHighlightRefresh, scheduleWireframeRefresh]);

  // Recalcular scope cuando se abren/cierran overlays con inspector activo
  useEffect(() => {
    if (!IS_DEV || !active || typeof document === 'undefined') return undefined;

    inspectorScopeRootRef.current = findActiveModalRoot();

    const syncScopeRoot = () => {
      const nextRoot = findActiveModalRoot();
      const prevRoot = inspectorScopeRootRef.current;
      const rootChanged = prevRoot !== nextRoot;

      if (rootChanged) inspectorScopeRootRef.current = nextRoot;

      const currentTarget = inspectionTargetRef.current;
      const targetInvalid = currentTarget && (
        !document.contains(currentTarget) ||
        !isVisibleForInspector(currentTarget) ||
        (nextRoot && !isElementInsideRoot(currentTarget, nextRoot))
      );
      if (targetInvalid) {
        applyInspectionTarget(null);
      }

      scheduleWireframeRefresh();
      const lastPoint = pendingHoverPointRef.current;
      if (lastPoint) scheduleHoverUpdate(lastPoint.x, lastPoint.y);
    };

    const scheduleScopeSync = () => {
      if (scopeObserverTimerRef.current != null) return;
      scopeObserverTimerRef.current = window.setTimeout(() => {
        scopeObserverTimerRef.current = null;
        syncScopeRoot();
      }, INSPECTOR_SCOPE_OBSERVER_MS);
    };

    const observer = new MutationObserver(scheduleScopeSync);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'style', 'hidden', 'aria-hidden', 'open'],
    });

    return () => {
      observer.disconnect();
      if (scopeObserverTimerRef.current != null) {
        clearTimeout(scopeObserverTimerRef.current);
        scopeObserverTimerRef.current = null;
      }
    };
  }, [active, applyInspectionTarget, scheduleHoverUpdate, scheduleWireframeRefresh]);

  // ─── Listeners globales ───
  useEffect(() => {
    if (!IS_DEV) return;

    const onMouseMove = (e) => {
      if (!activeRef.current) return;
      if (isInspectorUiNode(e.target)) return;
      if (getNowMs() < keyboardLockedUntilRef.current) return;

      scheduleHoverUpdate(e.clientX, e.clientY);
    };

    const onMouseDown = (e) => {
      const el = e.target;
      if (isInspectorUiNode(el)) return;
      if (!activeRef.current) return;
      if (shouldLetFormControlInteract(e, el)) return;

      e.preventDefault();
      e.stopPropagation();
    };

    const onPointerDown = (e) => {
      const el = e.target;
      if (isInspectorUiNode(el)) return;

      if (e.altKey) {
        e.preventDefault();
        e.stopPropagation();
        swallowNextClickRef.current = true;
        if (activeRef.current) closeInspector();
        else activateInspector();
        return;
      }

      if (activeRef.current) {
        if (shouldLetFormControlInteract(e, el)) {
          return;
        }

        e.preventDefault();
        e.stopPropagation();

        if (isPointInsideToggleButton(e)) {
          swallowNextClickRef.current = true;
          closeInspector();
          return;
        }

        if (copyInFlightRef.current) {
          return;
        }

        swallowNextClickRef.current = true;

        const isAccumulate = (e.metaKey || e.ctrlKey) && !shouldLetFormControlInteract(e, el);
        const hasAccumulated = accumulatedOrderRef.current.length > 0;
        const suppressed = isCaptureSuppressed();
        if (suppressed && !isAccumulate && !hasAccumulated) {
          return;
        }

        const captureEl = getCaptureTarget(el);
        const info = captureElement(captureEl);
        if (!info) {
          return;
        }

        if (isAccumulate) {
          const result = toggleAccumulated(info, captureEl);
          applyInspectionTarget(captureEl);
          if (result.blocked) {
            showToast(`Máximo ${INSPECTOR_ACCUMULATE_HARD_MAX} capturas`, e, 'err');
            return;
          }
          if (result.added) {
            primeAccumulatedCapture(info.id);
            showToast(
              result.softWarn
                ? `${result.count} capturas (máx. recomendado ${INSPECTOR_ACCUMULATE_SOFT_MAX}) · clic copia`
                : `${result.count} captura${result.count === 1 ? '' : 's'} · clic sin ⌘ copia`,
              e,
              'ok'
            );
          } else {
            showToast(
              `${result.count} captura${result.count === 1 ? '' : 's'} · clic sin ⌘ copia`,
              e,
              'ok'
            );
          }
          return;
        }

        const batch = buildFinalizeBatch(
          accumulatedOrderRef.current,
          accumulatedByIdRef.current,
          info
        );
        handleCaptureBatch(batch, e);
        return;
      }
    };

    const onClick = (e) => {
      if (swallowNextClickRef.current) {
        swallowNextClickRef.current = false;
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      const el = e.target;
      if (isInspectorUiNode(el)) return;

      if (activeRef.current && isPointInsideToggleButton(e)) {
        e.preventDefault();
        e.stopPropagation();
        closeInspector();
        return;
      }

      if (e.altKey) {
        e.preventDefault();
        e.stopPropagation();
        if (activeRef.current) closeInspector();
        else activateInspector();
      }
    };

    const onScroll = () => {
      if (activeRef.current) {
        scheduleHighlightRefresh();
        scheduleWireframeRefresh();
      }
    };

    const onResize = () => {
      if (activeRef.current) {
        scheduleHighlightRefresh();
        scheduleWireframeRefresh();
      }
    };

    const onKeyDown = (e) => {
      if (!activeRef.current) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        if (accumulatedOrderRef.current.length > 0) {
          const count = accumulatedOrderRef.current.length;
          clearAccumulated();
          showToast(`Selección cancelada (${count})`, null, 'ok');
          return;
        }
        closeInspector();
        return;
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        const current = inspectionTargetRef.current;
        if (!current) return;

        const parent = current.parentElement;
        if (!parent || isInspectorShellNode(parent) || isInspectorExcludedNode(parent)) return;

        const modalRoot = findActiveModalRoot();
        if (modalRoot && !isElementInsideRoot(parent, modalRoot)) return;

        lockKeyboardSelection();
        applyInspectionTarget(parent);
        return;
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const current = inspectionTargetRef.current;
        if (!current) return;

        const rect = current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const child = getDeepestChildTowardPoint(current, cx, cy);
        if (!child || child === current) return;

        lockKeyboardSelection();
        applyInspectionTarget(child);
      }
    };

    document.addEventListener('pointermove', onMouseMove, true);
    document.addEventListener('mousedown', onMouseDown, true);
    document.addEventListener('pointerdown', onPointerDown, true);
    document.addEventListener('click', onClick, true);
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('scroll', onScroll, true);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('pointermove', onMouseMove, true);
      document.removeEventListener('mousedown', onMouseDown, true);
      document.removeEventListener('pointerdown', onPointerDown, true);
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('scroll', onScroll, true);
      window.removeEventListener('resize', onResize);
    };
  }, [
    activateInspector,
    applyInspectionTarget,
    clearAccumulated,
    closeInspector,
    getCaptureTarget,
    handleCaptureBatch,
    isCaptureSuppressed,
    isPointInsideToggleButton,
    lockKeyboardSelection,
    primeAccumulatedCapture,
    scheduleHighlightRefresh,
    scheduleHoverUpdate,
    scheduleWireframeRefresh,
    showToast,
    toggleAccumulated,
  ]);

  if (!IS_DEV) return null;

  return (
    <>
      {active && (
        <canvas
          ref={wireframeCanvasRef}
          data-dev-inspector
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 2147483643,
          }}
        />
      )}

      {active && accumulatedSnapshot.map((entry) => entry.rect && (
        <div
          key={entry.id}
          data-dev-inspector
          aria-hidden="true"
          style={{
            position: 'fixed',
            top: entry.rect.top,
            left: entry.rect.left,
            width: entry.rect.width,
            height: entry.rect.height,
            border: `1px solid rgba(56,189,248,0.55)`,
            borderRadius: 8,
            background: ACCENT_MUTED,
            pointerEvents: 'none',
            zIndex: 2147483644,
            boxSizing: 'border-box',
            opacity: entry.stale ? 0.45 : 1,
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: -10,
              left: -1,
              padding: '1px 6px',
              borderRadius: 4,
              background: ACCENT,
              color: PANEL_BG,
              fontSize: 10,
              fontWeight: 700,
              lineHeight: '14px',
              fontFamily: 'ui-sans-serif, system-ui, sans-serif',
            }}
          >
            #{entry.order}
          </span>
        </div>
      ))}

      {active && highlightRect && (
        <div
          data-dev-inspector
          aria-hidden="true"
          style={{
            position: 'fixed',
            top: highlightRect.top,
            left: highlightRect.left,
            width: highlightRect.width,
            height: highlightRect.height,
            border: `2px solid ${INSPECTOR_TARGET_BORDER}`,
            borderRadius: 8,
            background: 'rgba(251,191,36,0.12)',
            pointerEvents: 'none',
            zIndex: 2147483646,
            boxSizing: 'border-box',
            boxShadow: '0 0 0 2px rgba(251,191,36,0.26), 0 0 18px rgba(251,191,36,0.25), inset 0 0 0 1px rgba(255,255,255,0.08)',
          }}
        >
          {(highlightRect.label || highlightRect.detail) && (
            <span
              style={{
                position: 'absolute',
                left: -2,
                top: highlightRect.top < 34 ? highlightRect.height + 4 : -28,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                maxWidth: 'min(440px, calc(100vw - 24px))',
                border: '1px solid rgba(251,191,36,0.65)',
                borderRadius: 7,
                background: 'rgba(10,14,20,0.96)',
                color: TEXT,
                fontSize: 11,
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                fontWeight: 700,
                lineHeight: '16px',
                padding: '5px 8px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                boxShadow: '0 8px 22px rgba(0,0,0,0.38)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {highlightRect.label && (
                <span style={{ color: INSPECTOR_TARGET_BORDER, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {highlightRect.label}
                </span>
              )}
              {highlightRect.detail && (
                <span
                  style={{
                    color: TEXT_DIM,
                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                    fontWeight: 500,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {highlightRect.detail}
                </span>
              )}
            </span>
          )}
        </div>
      )}

      {active && accumulatedSnapshot.length > 0 && (
        <div
          data-dev-inspector
          style={{
            position: 'fixed',
            bottom: 60,
            right: 16,
            maxWidth: 'min(420px, calc(100vw - 32px))',
            borderRadius: 10,
            border: `1px solid ${PANEL_BORDER_STRONG}`,
            background: PANEL_BG,
            padding: '8px 10px',
            zIndex: 2147483647,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 6,
            boxShadow: '0 4px 16px rgba(0,0,0,0.45)',
          }}
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: ACCENT,
              fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              marginRight: 2,
            }}
          >
            {accumulatedSnapshot.length}
          </span>
          {accumulatedSnapshot.map((entry) => (
            <span
              key={entry.id}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                padding: '2px 6px',
                borderRadius: 6,
                border: `1px solid rgba(56,189,248,0.35)`,
                background: ACCENT_MUTED,
                fontSize: 10,
                color: TEXT,
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                opacity: entry.stale ? 0.5 : 1,
                textDecoration: entry.stale ? 'line-through' : 'none',
              }}
            >
              <span style={{ color: ACCENT, fontWeight: 700 }}>#{entry.order}</span>
              <span
                aria-hidden="true"
                title={
                  entry.capturePending
                    ? 'Capturando'
                    : entry.hasImage
                      ? 'Captura lista'
                      : entry.captureFailed
                        ? 'Captura no disponible'
                        : 'Pendiente'
                }
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: entry.capturePending
                    ? '#f5c518'
                    : entry.hasImage
                      ? '#22c55e'
                      : entry.captureFailed
                        ? '#ef4444'
                        : TEXT_DIM,
                  boxShadow: entry.capturePending ? '0 0 0 2px rgba(245,197,24,0.12)' : 'none',
                }}
              />
              {entry.label}
              <button
                type="button"
                aria-label={`Quitar ${entry.componentName}`}
                onPointerDown={(event) => event.stopPropagation()}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  removeAccumulatedById(entry.id);
                }}
                style={{
                  border: 'none',
                  background: 'transparent',
                  color: TEXT_MUTED,
                  cursor: 'pointer',
                  padding: 0,
                  fontSize: 11,
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            </span>
          ))}
          <span
            style={{
              fontSize: 10,
              color: TEXT_DIM,
              fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              marginLeft: 'auto',
            }}
          >
            Clic sin ⌘ copia sesión
          </span>
        </div>
      )}

      {/* Botón flotante toggle */}
      <button
        ref={toggleButtonRef}
        data-dev-inspector
        onPointerDown={handleToggleButtonPointerDown}
        onClick={handleToggleButtonClick}
        style={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: `1px solid ${active ? ACCENT : PANEL_BORDER_STRONG}`,
          background: active ? ACCENT_MUTED : PANEL_BG,
          color: active ? ACCENT : TEXT_MUTED,
          cursor: 'pointer',
          zIndex: 2147483647,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: active ? `0 0 0 4px rgba(56,189,248,0.08), 0 0 18px rgba(56,189,248,0.22)` : '0 2px 8px rgba(0,0,0,0.4)',
          padding: 0,
          transition: 'all 0.15s',
        }}
        title={active
          ? 'Inspector activo — ⌘+Click acumula · clic copia · ↑/↓ nivel · Esc limpia/cierra'
          : 'Activar inspector (Alt+Click también lo activa sin copiar)'}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" />
          <line x1="12" y1="3" x2="12" y2="6" />
          <line x1="12" y1="18" x2="12" y2="21" />
          <line x1="3" y1="12" x2="6" y2="12" />
          <line x1="18" y1="12" x2="21" y2="12" />
        </svg>
      </button>

      {/* Toast breve junto al cursor al copiar texto automáticamente */}
      {toast && (
        <div
          data-dev-inspector
          style={{
            position: 'fixed',
            left: Math.min(toast.x + 14, window.innerWidth - 220),
            top: Math.max(toast.y - 32, 8),
            background: PANEL_BG,
            border: `1px solid ${toast.kind === 'err' ? 'rgba(239,68,68,0.5)' : 'rgba(34,197,94,0.5)'}`,
            borderRadius: 8,
            padding: '5px 11px',
            fontSize: 11,
            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
            fontWeight: 600,
            color: toast.kind === 'err' ? '#fca5a5' : '#86efac',
            zIndex: 2147483647,
            pointerEvents: 'none',
            boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
            whiteSpace: 'nowrap',
          }}
        >
          {toast.kind === 'err' ? '✗' : '✓'} {toast.text}
        </div>
      )}
    </>
  );
};

export default DevClickToSource;
