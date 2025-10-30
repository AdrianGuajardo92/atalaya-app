import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

// Ahora tanto desarrollo como producción usan la misma base de datos Vercel KV
// Usamos una clave única para este proyecto: 'atalaya-lsm-data'
const LSM_KEY = 'atalaya-lsm-data';

export async function GET() {
  try {
    const data = await kv.get(LSM_KEY) || {};
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

    // Obtener datos actuales de Vercel KV
    const currentData: Record<string, string> = await kv.get(LSM_KEY) || {};
    currentData[questionNumber] = lsmText;
    await kv.set(LSM_KEY, currentData);

    return NextResponse.json({ success: true, data: currentData });
  } catch (error) {
    console.error('Error saving LSM data:', error);
    return NextResponse.json({ success: false, error: 'Failed to save' }, { status: 500 });
  }
}
