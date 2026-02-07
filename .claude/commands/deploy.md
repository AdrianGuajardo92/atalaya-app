Haz commit y push de TODOS los cambios pendientes. Sigue estos pasos:

1. Ejecuta `git status` y `git diff --stat` para ver todos los cambios
2. Analiza TODOS los cambios: archivos modificados, nuevos (untracked) y eliminados
3. Haz `git add` de TODOS los archivos pendientes, incluyendo archivos nuevos (untracked). Usa `git add -A` para no dejar nada fuera. Las ÚNICAS excepciones son: .env, credenciales, secrets, o archivos con información sensible.
4. Crea un commit con mensaje detallado en español que:
   - Tenga un título corto y descriptivo (máx 70 caracteres)
   - Liste los cambios principales como bullet points en el body
   - Termine con Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
5. Haz `git push` al remoto

Si no hay cambios pendientes, informa al usuario.
NO pidas confirmación, ejecuta todo directamente.
NUNCA dejes archivos fuera del commit a menos que sean credenciales o .env.
