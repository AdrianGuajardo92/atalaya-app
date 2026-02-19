import { kv } from '@vercel/kv';

type GlobalStore = typeof globalThis & {
  __atalayaMemoryStore?: Map<string, unknown>;
};

const globalStore = globalThis as GlobalStore;
const memoryStore = globalStore.__atalayaMemoryStore ?? new Map<string, unknown>();

if (!globalStore.__atalayaMemoryStore) {
  globalStore.__atalayaMemoryStore = memoryStore;
}

function hasKVConfig(): boolean {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

export async function kvGet<T>(key: string, fallback: T): Promise<T> {
  if (hasKVConfig()) {
    const value = await kv.get<T>(key);
    return (value ?? fallback) as T;
  }

  const value = memoryStore.get(key) as T | undefined;
  return value ?? fallback;
}

export async function kvSet<T>(key: string, value: T): Promise<void> {
  if (hasKVConfig()) {
    await kv.set(key, value);
    return;
  }

  memoryStore.set(key, value);
}

export function usingMemoryStore(): boolean {
  return !hasKVConfig();
}
