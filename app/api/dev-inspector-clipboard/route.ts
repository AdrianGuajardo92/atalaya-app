import { execFile, spawn } from 'node:child_process';
import { writeFile, unlink } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { promisify } from 'node:util';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const execFileAsync = promisify(execFile);
const MAX_IMAGE_BYTES = 8 * 1024 * 1024;

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

function normalizeClipboardText(value: unknown): string {
  return String(value || '').normalize('NFC');
}

function copyTextWithPbcopy(plainText: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn('pbcopy', [], { stdio: ['pipe', 'ignore', 'pipe'] });
    let stderr = '';

    child.stderr.on('data', (chunk) => {
      stderr += chunk;
    });
    child.on('error', reject);
    child.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(stderr.trim() || `pbcopy exited ${code}`));
    });
    child.stdin.write(plainText, 'utf8');
    child.stdin.end();
  });
}

async function copyImageToClipboard(pngPath: string): Promise<void> {
  const escapedPath = pngPath.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  await execFileAsync('osascript', [
    '-e',
    `set the clipboard to (read (POSIX file "${escapedPath}") as «class PNGf»)`,
  ]);
}

export async function POST(request: NextRequest) {
  if (!isDevLocalRequest(request)) {
    return NextResponse.json({ ok: false, error: 'local_dev_only' }, { status: 403 });
  }

  if (process.platform !== 'darwin') {
    return NextResponse.json({ ok: false, error: 'unsupported_platform' }, { status: 501 });
  }

  let tmpPath = '';

  try {
    const payload = await request.json().catch(() => ({}));
    const textOnly = payload?.textOnly === true;
    const plainText = normalizeClipboardText(payload?.plainText);

    if (textOnly) {
      if (!plainText.trim()) {
        return NextResponse.json({ ok: false, error: 'missing_text' }, { status: 400 });
      }

      await copyTextWithPbcopy(plainText);
      return NextResponse.json({ ok: true, mode: 'text_only', chars: plainText.length });
    }

    const rawImage = String(payload?.imageBase64 || '');
    const base64 = rawImage.includes(',') ? rawImage.slice(rawImage.indexOf(',') + 1) : rawImage;
    const imageBuffer = base64 ? Buffer.from(base64, 'base64') : Buffer.alloc(0);

    if (!imageBuffer.length || imageBuffer.length > MAX_IMAGE_BYTES) {
      return NextResponse.json({ ok: false, error: 'invalid_image' }, { status: 400 });
    }

    tmpPath = path.join(os.tmpdir(), `atalaya-inspector-${Date.now()}.png`);
    await writeFile(tmpPath, imageBuffer);
    await copyImageToClipboard(tmpPath);

    return NextResponse.json({
      ok: true,
      mode: 'png_only',
      bytes: imageBuffer.length,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'unknown_error';
    console.error('[dev-inspector-clipboard] Error:', error);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  } finally {
    if (tmpPath) {
      await unlink(tmpPath).catch(() => {});
    }
  }
}
