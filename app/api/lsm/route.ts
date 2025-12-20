import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

// Base key para LSM data - se concatena con el articleId
const LSM_KEY_PREFIX = 'atalaya-lsm-data';

// Función helper para construir la clave
function getLSMKey(articleId?: string): string {
  if (!articleId) {
    // Retrocompatibilidad: si no hay articleId, usar clave legacy
    return LSM_KEY_PREFIX;
  }
  return `${LSM_KEY_PREFIX}:${articleId}`;
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const articleId = searchParams.get('articleId') || undefined;
    const questionNumber = searchParams.get('questionNumber') || undefined;
    const key = getLSMKey(articleId);
    const data: Record<string, string> = await kv.get(key) || {};

    if (questionNumber) {
      const lsmText = data[questionNumber];
      return NextResponse.json({ lsmText });
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({});
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { articleId, questionNumber, lsmText } = body;

    // Validar que se proporcione articleId
    if (!articleId) {
      return NextResponse.json(
        { success: false, error: 'articleId is required' },
        { status: 400 }
      );
    }

    const key = getLSMKey(articleId);

    // Obtener datos actuales de Vercel KV para este artículo
    const currentData: Record<string, string> = await kv.get(key) || {};
    currentData[questionNumber] = lsmText;
    await kv.set(key, currentData);

    return NextResponse.json({ success: true, data: currentData });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to save' }, { status: 500 });
  }
}
