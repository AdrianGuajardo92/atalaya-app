---
name: vercel
description: Despliega la aplicación a producción en Vercel. Úsalo cuando el usuario pida explícitamente "vercel", "sube a producción", "despliega a producción" o "deploy a vercel".
disable-model-invocation: true
allowed-tools: Bash(npm run build), Bash(vercel *)
---

# Deploy a Vercel (producción)

Documentación completa: [`DEPLOY-VERCEL.md`](../../DEPLOY-VERCEL.md) y [`CONFIGURAR-BASE-DATOS.md`](../../CONFIGURAR-BASE-DATOS.md).

## Pre-requisitos

- Variables KV en el proyecto Vercel: `KV_REST_API_URL`, `KV_REST_API_TOKEN`
- Build local limpio antes de desplegar

## Pasos

1. Ejecutar `npm run build` — si falla, **no** desplegar
2. Ejecutar `vercel --prod`
3. Mostrar la URL de producción al terminar
4. Si hay error, mostrar el log completo

## Notas del proyecto

- **PWA:** `next-pwa` genera service worker en build; deshabilitada en dev (`next.config.ts`)
- **Videos LSM:** `public/videos/` aumenta tamaño del deploy y ancho de banda — no subir videos "fantasma"
- **Puerto dev:** `localhost:9000` (no 3000)
- **Persistencia:** favoritos, LSM, hidden-cards y used-items usan Vercel KV vía `/api/*`

## Política git

No hacer commit ni push automáticamente. Si el usuario quiere subir cambios a git antes de Vercel, usar la skill `deploy` solo bajo petición explícita.
