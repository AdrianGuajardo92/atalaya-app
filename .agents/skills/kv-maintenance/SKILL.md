---
name: kv-maintenance
description: Mantenimiento de Vercel KV al crear o eliminar estudios. Claves de favorites, lsm, hidden-cards y used-items.
---

# Mantenimiento KV

## Prefijos de claves

| API | Prefijo KV |
|-----|------------|
| Favorites | `atalaya-favorites:*` |
| LSM | `atalaya-lsm:*` |
| Hidden cards | `atalaya-hidden-cards:*` |
| Used items | `atalaya-used-items:*` |

Las claves incluyen el `studyId` (ej. `2026-06-29`).

## Endpoint `/api/lsm` — claves especiales

Además de glosas LSM por pregunta, guarda JSON con prefijos:
- `bullets-{n}`, `bullet-types-{n}`
- `reflections-{n}`, `applications-{n}`
- `video-p{n}`, `review-{n}`

## Limpiar al eliminar estudio

```bash
npm run cleanup-kv -- --study=2026-06-29
npm run cleanup-kv -- --all   # elimina KV de estudios no activos
```

## Dev local

Sin `KV_REST_API_URL` / `KV_REST_API_TOKEN`, `lib/kv-store.ts` usa memoria (no persiste entre reinicios).

## Variables requeridas en producción

- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`
