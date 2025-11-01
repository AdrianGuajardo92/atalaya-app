import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

// Clave única para almacenar favoritos
const FAVORITES_KEY = 'atalaya-favorites-data';

export async function GET() {
  try {
    const data = await kv.get(FAVORITES_KEY) || {};
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading favorites data:', error);
    return NextResponse.json({});
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { favoriteId, isFavorite } = body;

    // Obtener datos actuales de Vercel KV
    const currentData: Record<string, boolean> = await kv.get(FAVORITES_KEY) || {};

    if (isFavorite) {
      currentData[favoriteId] = true;
    } else {
      delete currentData[favoriteId];
    }

    await kv.set(FAVORITES_KEY, currentData);

    return NextResponse.json({ success: true, data: currentData });
  } catch (error) {
    console.error('Error saving favorites data:', error);
    return NextResponse.json({ success: false, error: 'Failed to save' }, { status: 500 });
  }
}
