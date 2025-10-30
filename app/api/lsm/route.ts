import { NextRequest, NextResponse } from 'next/server';

// Almacenamiento temporal en memoria (solo para desarrollo local)
let localStore: Record<string, string> = {};

export async function GET() {
  try {
    // En desarrollo local, usar almacenamiento en memoria
    if (process.env.NODE_ENV === 'development') {
      return NextResponse.json(localStore);
    }

    // En producción, usar Vercel KV
    const { kv } = await import('@vercel/kv');
    const data = await kv.get('lsm-data') || {};
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading LSM data:', error);
    return NextResponse.json({});
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { questionNumber, lsmText } = body;

    // En desarrollo local
    if (process.env.NODE_ENV === 'development') {
      localStore[questionNumber] = lsmText;
      return NextResponse.json({ success: true, data: localStore });
    }

    // En producción, usar Vercel KV
    const { kv } = await import('@vercel/kv');
    const currentData: Record<string, string> = await kv.get('lsm-data') || {};
    currentData[questionNumber] = lsmText;
    await kv.set('lsm-data', currentData);

    return NextResponse.json({ success: true, data: currentData });
  } catch (error) {
    console.error('Error saving LSM data:', error);
    return NextResponse.json({ success: false, error: 'Failed to save' }, { status: 500 });
  }
}
