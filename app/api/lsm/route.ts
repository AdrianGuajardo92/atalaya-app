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
    console.log('🔍 LSM API: GET request received');
    // Obtener articleId y questionNumber de query params
    const searchParams = request.nextUrl.searchParams;
    const articleId = searchParams.get('articleId') || undefined;
    const questionNumber = searchParams.get('questionNumber') || undefined;
    console.log('📝 LSM API: articleId =', articleId);
    console.log('📝 LSM API: questionNumber =', questionNumber);

    const key = getLSMKey(articleId);
    console.log('🔑 LSM API: key =', key);

    console.log('🔄 LSM API: Calling kv.get()...');
    const data: Record<string, string> = await kv.get(key) || {};
    console.log('✅ LSM API: Data retrieved successfully', data);

    // Si se proporciona questionNumber, devolver solo ese campo
    if (questionNumber) {
      const lsmText = data[questionNumber];
      console.log(`📤 LSM API: Returning specific field '${questionNumber}':`, lsmText);
      return NextResponse.json({ lsmText });
    }

    // Si no se proporciona questionNumber, devolver todo el objeto
    return NextResponse.json(data);
  } catch (error) {
    console.error('❌ LSM API: Error reading LSM data:', error);
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
  } catch (error) {
    console.error('Error saving LSM data:', error);
    return NextResponse.json({ success: false, error: 'Failed to save' }, { status: 500 });
  }
}
