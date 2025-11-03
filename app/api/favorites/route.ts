import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

// Base key para favoritos - se concatena con el articleId
const FAVORITES_KEY_PREFIX = 'atalaya-favorites-data';

// Función helper para construir la clave
function getFavoritesKey(articleId?: string): string {
  if (!articleId) {
    // Retrocompatibilidad: si no hay articleId, usar clave legacy
    return FAVORITES_KEY_PREFIX;
  }
  return `${FAVORITES_KEY_PREFIX}:${articleId}`;
}

export async function GET(request: NextRequest) {
  try {
    console.log('🔍 Favorites API: GET request received');
    // Obtener articleId de query params
    const searchParams = request.nextUrl.searchParams;
    const articleId = searchParams.get('articleId') || undefined;
    console.log('📝 Favorites API: articleId =', articleId);

    const key = getFavoritesKey(articleId);
    console.log('🔑 Favorites API: key =', key);

    console.log('🔄 Favorites API: Calling kv.get()...');
    const data = await kv.get(key) || {};
    console.log('✅ Favorites API: Data retrieved successfully', data);

    return NextResponse.json(data);
  } catch (error) {
    console.error('❌ Favorites API: Error reading favorites data:', error);
    return NextResponse.json({});
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { articleId, favoriteId, isFavorite } = body;

    // Validar que se proporcione articleId
    if (!articleId) {
      return NextResponse.json(
        { success: false, error: 'articleId is required' },
        { status: 400 }
      );
    }

    const key = getFavoritesKey(articleId);

    // Obtener datos actuales de Vercel KV para este artículo
    const currentData: Record<string, boolean> = await kv.get(key) || {};

    if (isFavorite) {
      currentData[favoriteId] = true;
    } else {
      delete currentData[favoriteId];
    }

    await kv.set(key, currentData);

    return NextResponse.json({ success: true, data: currentData });
  } catch (error) {
    console.error('Error saving favorites data:', error);
    return NextResponse.json({ success: false, error: 'Failed to save' }, { status: 500 });
  }
}
