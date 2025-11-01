import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

// Clave única para almacenar tarjetas ocultas
const HIDDEN_CARDS_KEY = 'atalaya-hidden-cards';

export async function GET() {
  try {
    const data = await kv.get(HIDDEN_CARDS_KEY) || {};
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading hidden cards data:', error);
    return NextResponse.json({});
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { cardId, isHidden } = body;

    // Obtener datos actuales de Vercel KV
    const currentData: Record<string, boolean> = await kv.get(HIDDEN_CARDS_KEY) || {};

    if (isHidden) {
      currentData[cardId] = true;
    } else {
      delete currentData[cardId];
    }

    await kv.set(HIDDEN_CARDS_KEY, currentData);

    return NextResponse.json({ success: true, data: currentData });
  } catch (error) {
    console.error('Error saving hidden cards data:', error);
    return NextResponse.json({ success: false, error: 'Failed to save' }, { status: 500 });
  }
}
