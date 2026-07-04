---
name: deploy
description: Prepara commit y push de cambios al repositorio remoto. Úsalo SOLO cuando el usuario pida explícitamente "haz commit", "push", "sube los cambios" o "guarda en git". NO usar para desplegar a Vercel (usa la skill vercel).
allowed-tools: Bash(git *)
---

# Git — Commit y Push

**Política del proyecto:** NO hacer commit ni push automáticamente. Solo ejecutar cuando el usuario lo ordene **explícitamente**.

## Pasos

1. `git status` y `git diff --stat` — revisar cambios
2. **Confirmar con el usuario** qué incluir si hay dudas (videos grandes, archivos sensibles)
3. `git add` solo archivos relevantes (usar `git add -A` si el usuario pidió subir todo)
4. **Nunca** incluir: `.env`, credenciales, secrets
5. Commit con mensaje en español (título ≤70 caracteres + bullets en el body)
6. `git push` solo si el usuario lo pidió

## Excepciones

- Si no hay cambios pendientes, informar al usuario
- Si un hook pre-commit falla, corregir y crear un **nuevo** commit (no `--amend` salvo que el usuario lo pida)
- **Nunca** `push --force` a main/master sin confirmación explícita

## No confundir con Vercel

"Deploy" en producción = `vercel --prod` (ver skill `vercel` y `DEPLOY-VERCEL.md`).
