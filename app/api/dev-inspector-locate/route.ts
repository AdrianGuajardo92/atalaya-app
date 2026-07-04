import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type LocateResult = {
  file: string;
  line: number;
  kind: 'definition' | 'anchor' | 'jsx-usage';
  score?: number;
  matched?: string[];
  preview?: string;
};

const SOURCE_ROOTS = ['app', 'components', 'lib', 'hooks', 'data', 'types'];
const SOURCE_EXT_RE = /\.(tsx|ts|jsx|js)$/;
const TEST_FILE_RE = /\.(test|spec)\.(tsx|ts|jsx|js)$/;
const CACHE_TTL_MS = 60_000;
const locateCache = new Map<string, { at: number; result: LocateResult | null }>();

function isDevLocalRequest(request: NextRequest): boolean {
  if (process.env.NODE_ENV !== 'development') return false;
  const host = request.headers.get('host') || '';
  return (
    host.startsWith('localhost:') ||
    host.startsWith('127.0.0.1:') ||
    host.startsWith('[::1]:') ||
    host === 'localhost' ||
    host === '127.0.0.1' ||
    host === '[::1]'
  );
}

function isSourceRelFile(relFile: string): boolean {
  return SOURCE_ROOTS.some((root) => relFile === root || relFile.startsWith(`${root}/`));
}

function walkSourceFiles(dir: string, out: string[] = []): string[] {
  if (!existsSync(dir)) return out;

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.next') continue;
      walkSourceFiles(fullPath, out);
      continue;
    }
    if (!SOURCE_EXT_RE.test(entry.name)) continue;
    if (TEST_FILE_RE.test(entry.name)) continue;
    out.push(fullPath);
  }

  return out;
}

function getAllSourceFiles(): string[] {
  return SOURCE_ROOTS.flatMap((root) => walkSourceFiles(path.resolve(process.cwd(), root)));
}

function escapeRegExp(value: string): string {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function buildDefinitionPatterns(componentName: string): RegExp[] {
  const name = escapeRegExp(componentName);
  return [
    new RegExp(`^\\s*(?:export\\s+default\\s+)?function\\s+${name}\\s*[<(]`),
    new RegExp(`^\\s*export\\s+function\\s+${name}\\s*[<(]`),
    new RegExp(`^\\s*const\\s+${name}\\s*=`),
    new RegExp(`^\\s*let\\s+${name}\\s*=`),
    new RegExp(`^\\s*export\\s+default\\s+${name}\\s*;?`),
  ];
}

function locateComponentDefinition(componentName: string): LocateResult | null {
  const cacheKey = `component|${componentName}`;
  const cached = locateCache.get(cacheKey);
  if (cached && Date.now() - cached.at < CACHE_TTL_MS) return cached.result;

  const patterns = buildDefinitionPatterns(componentName);
  for (const filePath of getAllSourceFiles()) {
    const content = readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    for (let index = 0; index < lines.length; index += 1) {
      if (!patterns.some((pattern) => pattern.test(lines[index]))) continue;
      const relPath = path.relative(process.cwd(), filePath).replace(/\\/g, '/');
      const result: LocateResult = { file: relPath, line: index + 1, kind: 'definition' };
      locateCache.set(cacheKey, { at: Date.now(), result });
      return result;
    }
  }

  locateCache.set(cacheKey, { at: Date.now(), result: null });
  return null;
}

function resolveSourceFile(relFile: string): string | null {
  if (!isSourceRelFile(relFile) || !SOURCE_EXT_RE.test(relFile)) return null;

  const absPath = path.resolve(process.cwd(), relFile);
  const cwd = process.cwd();
  if (absPath !== cwd && !absPath.startsWith(`${cwd}${path.sep}`)) return null;
  if (!existsSync(absPath)) return null;
  return absPath;
}

function locateAnchorInFile(relFile: string, anchorList: string[]): LocateResult | null {
  const normalizedAnchors = anchorList
    .map((anchor) => String(anchor || '').trim())
    .filter((anchor) => anchor.length >= 3)
    .slice(0, 6);
  if (!normalizedAnchors.length) return null;

  const cacheKey = `anchor|${relFile}|${normalizedAnchors.join(',')}`;
  const cached = locateCache.get(cacheKey);
  if (cached && Date.now() - cached.at < CACHE_TTL_MS) return cached.result;

  const absPath = resolveSourceFile(relFile);
  if (!absPath) {
    locateCache.set(cacheKey, { at: Date.now(), result: null });
    return null;
  }

  const lines = readFileSync(absPath, 'utf8').split('\n');
  let bestLine: number | null = null;
  let bestScore = 0;
  let bestMatched: string[] = [];
  const tiedCandidates: Array<{ line: number; matched: string[]; preview: string }> = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const matched = normalizedAnchors.filter((anchor) => line.includes(anchor));
    const score = matched.length;
    if (score > bestScore) {
      bestScore = score;
      bestLine = index + 1;
      bestMatched = matched;
      tiedCandidates.length = 0;
      tiedCandidates.push({ line: index + 1, matched, preview: line.trim().slice(0, 120) });
    } else if (score === bestScore && score > 0) {
      tiedCandidates.push({ line: index + 1, matched, preview: line.trim().slice(0, 120) });
    }
  }

  if (tiedCandidates.length > 1) {
    const iconLineAnchors = new Set(bestMatched);
    const textAnchorLines: Array<{ anchor: string; line: number }> = [];

    for (const anchor of normalizedAnchors) {
      if (iconLineAnchors.has(anchor)) continue;
      for (let index = 0; index < lines.length; index += 1) {
        if (lines[index].includes(anchor)) {
          textAnchorLines.push({ anchor, line: index + 1 });
        }
      }
    }

    if (textAnchorLines.length > 0) {
      let bestDistance = Infinity;
      let bestDistanceLine = bestLine;

      for (const candidate of tiedCandidates) {
        for (const textAnchor of textAnchorLines) {
          const distance = Math.abs(textAnchor.line - candidate.line);
          if (distance < bestDistance) {
            bestDistance = distance;
            bestDistanceLine = candidate.line;
          }
        }
      }

      bestLine = bestDistanceLine;
      bestMatched = tiedCandidates.find((candidate) => candidate.line === bestLine)?.matched || bestMatched;
    }
  }

  const result = bestScore >= 2 && bestLine
    ? {
      file: relFile,
      line: bestLine,
      kind: 'anchor' as const,
      score: bestScore,
      matched: bestMatched,
    }
    : null;

  locateCache.set(cacheKey, { at: Date.now(), result });
  return result;
}

function locateComponentUsageInFile(
  relFile: string,
  componentName: string,
  anchorList: string[] = [],
): LocateResult | null {
  const normalizedAnchors = anchorList
    .map((anchor) => String(anchor || '').trim())
    .filter((anchor) => anchor.length >= 3)
    .slice(0, 6);

  const cacheKey = `usage|${relFile}|${componentName}|${normalizedAnchors.join(',')}`;
  const cached = locateCache.get(cacheKey);
  if (cached && Date.now() - cached.at < CACHE_TTL_MS) return cached.result;

  const absPath = resolveSourceFile(relFile);
  if (!absPath) {
    locateCache.set(cacheKey, { at: Date.now(), result: null });
    return null;
  }

  const lines = readFileSync(absPath, 'utf8').split('\n');
  const usagePattern = new RegExp(`<${escapeRegExp(componentName)}(?:\\s|>|\\.)`);
  const candidates: LocateResult[] = [];

  for (let index = 0; index < lines.length; index += 1) {
    if (!usagePattern.test(lines[index])) continue;

    const start = index;
    const end = Math.min(lines.length, index + 120);
    const block = lines.slice(start, end).join('\n');
    const matched = normalizedAnchors.filter((anchor) => block.includes(anchor));
    const closeScore = matched.reduce((score, anchor) => {
      const anchorLineIndex = lines.findIndex((line, lineIndex) => (
        lineIndex >= start && lineIndex < end && line.includes(anchor)
      ));
      if (anchorLineIndex < 0) return score;
      const distance = Math.abs(anchorLineIndex - index);
      if (distance <= 8) return score + 4;
      if (distance <= 32) return score + 3;
      if (distance <= 80) return score + 2;
      return score + 1;
    }, 0);

    const usageLineScore = normalizedAnchors.filter((anchor) => lines[index].includes(anchor)).length * 5;
    const score = 10 + usageLineScore + closeScore + matched.length;
    candidates.push({
      file: relFile,
      line: index + 1,
      kind: 'jsx-usage',
      score,
      matched,
      preview: lines[index].trim().slice(0, 120),
    });
  }

  if (!candidates.length) {
    locateCache.set(cacheKey, { at: Date.now(), result: null });
    return null;
  }

  candidates.sort((a, b) => (b.score || 0) - (a.score || 0) || a.line - b.line);
  const result = candidates[0];
  locateCache.set(cacheKey, { at: Date.now(), result });
  return result;
}

function json(data: unknown, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: {
      'Cache-Control': 'no-store',
    },
  });
}

export async function GET(request: NextRequest) {
  if (!isDevLocalRequest(request)) {
    return json({ ok: false, error: 'local_dev_only' }, 403);
  }

  const { searchParams } = request.nextUrl;
  const relFile = String(searchParams.get('file') || '').trim();
  const anchorsRaw = String(searchParams.get('anchors') || '').trim();
  const usageComponent = String(searchParams.get('usageComponent') || '').trim();

  if (relFile && usageComponent) {
    if (!resolveSourceFile(relFile)) return json({ ok: false, error: 'invalid_file' }, 400);
    if (!/^[A-Z][A-Za-z0-9_]*$/.test(usageComponent)) {
      return json({ ok: false, error: 'invalid_component' }, 400);
    }

    const anchors = anchorsRaw
      .split(',')
      .map((anchor) => anchor.trim())
      .filter((anchor) => anchor.length >= 3)
      .slice(0, 6);
    const located = locateComponentUsageInFile(relFile, usageComponent, anchors);
    if (!located) return json({ ok: false, error: 'not_found', file: relFile, usageComponent, anchors }, 404);
    return json({ ok: true, ...located, component: usageComponent });
  }

  if (relFile && anchorsRaw) {
    if (!resolveSourceFile(relFile)) return json({ ok: false, error: 'invalid_file' }, 400);

    const anchors = anchorsRaw
      .split(',')
      .map((anchor) => anchor.trim())
      .filter((anchor) => anchor.length >= 3)
      .slice(0, 6);
    if (!anchors.length) return json({ ok: false, error: 'invalid_anchors' }, 400);

    const located = locateAnchorInFile(relFile, anchors);
    if (!located) return json({ ok: false, error: 'not_found', file: relFile, anchors }, 404);
    return json({ ok: true, ...located });
  }

  const componentName = String(searchParams.get('component') || '').trim();
  if (!/^[A-Z][A-Za-z0-9_]*$/.test(componentName)) {
    return json({ ok: false, error: 'invalid_component' }, 400);
  }

  const located = locateComponentDefinition(componentName);
  if (!located) return json({ ok: false, error: 'not_found', component: componentName }, 404);

  return json({ ok: true, ...located, component: componentName });
}
