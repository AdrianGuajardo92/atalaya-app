import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

// Base key para tarjetas ocultas - se concatena con el articleId
const HIDDEN_CARDS_KEY_PREFIX = 'atalaya-hidden-cards';

// Función helper para construir la clave
function getHiddenCardsKey(articleId?: string): string {
  if (!articleId) {
    // Retrocompatibilidad: si no hay articleId, usar clave legacy
    return HIDDEN_CARDS_KEY_PREFIX;
  }
  return `${HIDDEN_CARDS_KEY_PREFIX}:${articleId}`;
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const articleId = searchParams.get('articleId') || undefined;
    const key = getHiddenCardsKey(articleId);
    const data = await kv.get(key) || {};
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({});
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { articleId, cardId, isHidden } = body;

    // Validar que se proporcione articleId
    if (!articleId) {
      return NextResponse.json(
        { success: false, error: 'articleId is required' },
        { status: 400 }
      );
    }

    const key = getHiddenCardsKey(articleId);

    // Obtener datos actuales de Vercel KV para este artículo
    const currentData: Record<string, boolean> = await kv.get(key) || {};

    if (isHidden) {
      currentData[cardId] = true;
    } else {
      delete currentData[cardId];
    }

    await kv.set(key, currentData);

    return NextResponse.json({ success: true, data: currentData });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to save' }, { status: 500 });
  }
}
