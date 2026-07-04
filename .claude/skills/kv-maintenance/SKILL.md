---
name: kv-maintenance
description: Mantenimiento de Vercel KV al crear o eliminar estudios. Claves de favorites, lsm, hidden-cards y used-items.
---

# Mantenimiento KV

## Prefijos de claves

| API | Prefijo KV |
|-----|------------|
| Favorites | `atalaya-favorites-data:*` |
| LSM | `atalaya-lsm-data:*` |
| Hidden cards | `atalaya-hidden-cards:*` |
| Used items | `atalaya-used-items:*` |

Las claves reales se construyen como `{prefijo}:{studyId}` (ej. `atalaya-lsm-data:2026-06-29`). Algunos endpoints conservan una clave legacy sin `studyId` sólo por retrocompatibilidad; no usarla para datos nuevos.

## Endpoint `/api/lsm` — claves especiales

Además de glosas LSM por pregunta, guarda JSON con prefijos:
- `bullets-{n}`, `bullet-types-{n}`
- `reflections-{n}`, `applications-{n}`
- `video-p{n}`, `review-{n}`

## Fallback local de LSM

Cuando faltan `KV_REST_API_URL` / `KV_REST_API_TOKEN`, `lib/kv-store.ts` usa memoria del proceso. En desarrollo, `/api/lsm` puede usar `LSM_REMOTE_API_ORIGIN` para leer/escribir contra un origen remoto no local; si no está definida, cae a `https://atalaya-app.vercel.app`. Este fallback sólo aplica cuando KV no está configurado, no corre en producción y rechaza `localhost` / `127.0.0.1`.

## Limpiar al eliminar estudio

```bash
npm run cleanup-kv -- --study=2026-06-29
npm run cleanup-kv -- --all   # elimina KV de estudios no activos
```

Antes de ejecutar, confirmar que el script está usando estos cuatro prefijos: `atalaya-favorites-data`, `atalaya-lsm-data`, `atalaya-hidden-cards`, `atalaya-used-items`.

## Dev local

Sin `KV_REST_API_URL` / `KV_REST_API_TOKEN`, `lib/kv-store.ts` usa memoria (no persiste entre reinicios). Para probar LSM contra datos reales sin KV local, definir `LSM_REMOTE_API_ORIGIN` con un origen remoto seguro.

## Variables requeridas en producción

- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`
