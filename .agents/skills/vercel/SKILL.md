---
name: vercel
description: Despliega la aplicación a producción en Vercel. Úsalo cuando el usuario diga "vercel", "sube a producción", "despliega a producción", o "deploy a vercel".
disable-model-invocation: true
allowed-tools: Bash(vercel *)
---

# Deploy a Vercel

Despliega la aplicación a producción en Vercel. Sigue estos pasos:

1. Ejecuta `vercel --prod` para desplegar a producción
2. Espera a que termine el despliegue
3. Muestra la URL de producción al usuario cuando termine

Si hay algún error durante el despliegue, muestra el error completo al usuario.
NO pidas confirmación, ejecuta directamente.
