import { NextRequest, NextResponse } from 'next/server';
import { kvGet, kvSet, usingMemoryStore } from '@/lib/kv-store';

// Base key para LSM data - se concatena con el articleId
const LSM_KEY_PREFIX = 'atalaya-lsm-data';
const DEFAULT_REMOTE_LSM_ORIGIN = 'https://atalaya-app.vercel.app';

function getRemoteLSMOrigin(): string | null {
  if (!usingMemoryStore()) return null;
  if (process.env.NODE_ENV === 'production') return null;

  const configuredOrigin = process.env.LSM_REMOTE_API_ORIGIN || DEFAULT_REMOTE_LSM_ORIGIN;

  try {
    const url = new URL(configuredOrigin);
    if (!['http:', 'https:'].includes(url.protocol)) return null;
    if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') return null;
    return url.origin;
  } catch {
    return null;
  }
}

async function proxyRemoteLSM(
  request: NextRequest,
  method: 'GET' | 'POST' | 'PUT',
  body?: unknown
): Promise<NextResponse | null> {
  const remoteOrigin = getRemoteLSMOrigin();
  if (!remoteOrigin) return null;

  try {
    const remoteUrl = new URL('/api/lsm', remoteOrigin);
    if (method === 'GET') {
      request.nextUrl.searchParams.forEach((value, key) => {
        remoteUrl.searchParams.set(key, value);
      });
    }

    const response = await fetch(remoteUrl, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: method === 'GET' ? undefined : JSON.stringify(body),
      cache: 'no-store',
    });

    const text = await response.text();
    return new NextResponse(text, {
      status: response.status,
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'application/json',
        'X-LSM-Source': 'remote-production',
      },
    });
  } catch (error) {
    console.error('Error proxying LSM data to remote production:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'No se pudo sincronizar LSM con producción. Revisa la conexión e intenta de nuevo.',
      },
      {
        status: 502,
        headers: { 'X-LSM-Source': 'remote-production-error' },
      }
    );
  }
}

// Funcion helper para construir la clave
function getLSMKey(articleId?: string): string {
  if (!articleId) {
    // Retrocompatibilidad: si no hay articleId, usar clave legacy
    return LSM_KEY_PREFIX;
  }
  return `${LSM_KEY_PREFIX}:${articleId}`;
}

export async function GET(request: NextRequest) {
  try {
    const remoteResponse = await proxyRemoteLSM(request, 'GET');
    if (remoteResponse) return remoteResponse;

    const searchParams = request.nextUrl.searchParams;
    const articleId = searchParams.get('articleId') || undefined;
    const questionNumber = searchParams.get('questionNumber') || undefined;
    const key = getLSMKey(articleId);
    const data = await kvGet<Record<string, string>>(key, {});

    if (questionNumber) {
      const lsmText = data[questionNumber];
      return NextResponse.json({ lsmText });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error loading LSM data:', error);
    return NextResponse.json({});
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const remoteResponse = await proxyRemoteLSM(request, 'POST', body);
    if (remoteResponse) return remoteResponse;

    const { articleId, questionNumber, lsmText } = body;

    // Validar que se proporcione articleId
    if (!articleId) {
      return NextResponse.json(
        { success: false, error: 'articleId is required' },
        { status: 400 }
      );
    }

    const key = getLSMKey(articleId);

    // Obtener datos actuales de almacenamiento para este articulo
    const currentData = await kvGet<Record<string, string>>(key, {});
    currentData[questionNumber] = lsmText;
    await kvSet(key, currentData);

    return NextResponse.json({ success: true, data: currentData });
  } catch (error) {
    console.error('Error saving LSM data:', error);
    const fallbackMessage = usingMemoryStore()
      ? 'KV is not configured. Data can only be stored in memory during this session.'
      : 'Failed to save';
    return NextResponse.json({ success: false, error: fallbackMessage }, { status: 500 });
  }
}

// PUT: Importación masiva de traducciones LSM
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const remoteResponse = await proxyRemoteLSM(request, 'PUT', body);
    if (remoteResponse) return remoteResponse;

    const { articleId, data, mode = 'merge' } = body;

    if (!articleId) {
      return NextResponse.json(
        { success: false, error: 'articleId is required' },
        { status: 400 }
      );
    }

    if (!data || typeof data !== 'object' || Array.isArray(data)) {
      return NextResponse.json(
        { success: false, error: 'data must be a non-null object' },
        { status: 400 }
      );
    }

    // Validar que todos los valores sean strings
    for (const [k, v] of Object.entries(data)) {
      if (typeof v !== 'string') {
        return NextResponse.json(
          { success: false, error: `El valor de la clave "${k}" debe ser string, recibió ${typeof v}` },
          { status: 400 }
        );
      }
    }

    const key = getLSMKey(articleId);

    let finalData: Record<string, string>;
    if (mode === 'replace') {
      finalData = data as Record<string, string>;
    } else {
      // merge: leer existentes, mezclar nuevos encima
      const currentData = await kvGet<Record<string, string>>(key, {});
      finalData = { ...currentData, ...data };
    }

    await kvSet(key, finalData);

    return NextResponse.json({
      success: true,
      data: finalData,
      imported: Object.keys(data).length,
      total: Object.keys(finalData).length
    });
  } catch (error) {
    console.error('Error bulk saving LSM data:', error);
    const fallbackMessage = usingMemoryStore()
      ? 'KV is not configured. Data can only be stored in memory during this session.'
      : 'Failed to save';
    return NextResponse.json({ success: false, error: fallbackMessage }, { status: 500 });
  }
}
