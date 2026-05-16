---
name: atalaya-revista-importer
description: Importa revistas de estudio de La Atalaya por mes y año en este proyecto. Úsalo cuando el usuario pida agregar todos los estudios de una revista, por ejemplo marzo de 2026, con artículos, preguntas, párrafos, respuestas, textos bíblicos TNM, imágenes oficiales de jw.org e integración en data/articles.
---

# Importador de Revistas de La Atalaya

Esta skill reproduce el flujo usado para importar la revista de estudio de marzo de 2026. Sirve para que el usuario diga: “quiero la revista de marzo de 2026” y Codex agregue todos los artículos de estudio que falten en la app.

## Alcance

- Fuente oficial: páginas públicas de jw.org en español.
- Entrada típica: mes y año de la revista, por ejemplo `marzo 2026`.
- Salida esperada:
  - `data/articles/article-XX.ts` por cada artículo nuevo.
  - Imágenes oficiales en `question.image`, no en párrafos.
  - `biblicalTextsXX` para cada `readText`.
  - `biblicalCards` con textos reales de la Traducción del Nuevo Mundo.
  - `data/articles/index.ts` actualizado.
  - `data/articles-config.ts` actualizado.

## Reglas Críticas

1. No hagas commit ni push salvo que el usuario lo pida explícitamente.
2. Usa siempre ortografía correcta en español: Jehová, Satanás, Moisés, Josué, Edén, ¿...?, ¡...!
3. No inventes textos bíblicos. Si falta un texto, vuelve a consultarlo en jw.org.
4. Las imágenes visibles van en `question.image`. Usa la URL directa de mayor tamaño disponible, normalmente `data-zoom` con `_xl.jpg`.
5. Las respuestas (`answer`) deben ser arrays de oraciones breves con negritas en conceptos clave.
6. Los resúmenes de párrafo (`summary`) deben ser resúmenes reales, no copias ni recortes del párrafo.
7. El contenido completo del párrafo (`content`) no lleva negritas.
8. Si una revista incluye material que no sea artículo de estudio, como “Personaje bíblico”, no lo importes como artículo de estudio.

## Resúmenes de Párrafos

El campo `summary` es para que el conductor vea de un vistazo qué aporta ese párrafo a la respuesta. No debe parecer el párrafo repetido en corto.

Reglas obligatorias:

- Escribe cada `summary` en lenguaje sencillo, como explicación para estudiar, no como copia editorial.
- Hazlo de 1 oración clara; usa 2 solo si el párrafo tiene dos ideas fuertes.
- Manténlo normalmente entre 20 y 40 palabras.
- Conecta el resumen con la pregunta y con el `answer` de esa tarjeta.
- En preguntas con varios párrafos, cada `summary` debe explicar qué aporta ese párrafo específico, no repetir el mismo resumen general.
- Usa negritas útiles en 1 a 3 conceptos clave: `**Jehová**`, `**confianza**`, `**Palabra de Dios**`, etc.
- No copies las primeras frases del párrafo como resumen.
- No dejes preguntas como resumen, por ejemplo `¿Cómo demostramos...?`.
- No dejes frases cortadas, puntos suspensivos por truncamiento ni resúmenes que terminen en `...`.

Ejemplo correcto:
```typescript
summary: "Para enseñar mejor, debemos **comprender las preocupaciones** de las personas y pensar en cómo la esperanza bíblica puede ayudarlas."
```

Ejemplo incorrecto:
```typescript
summary: "¿Cómo demostramos que nos interesamos por las personas? Tratando de comprender sus preocupaciones."
```

## Flujo Recomendado

1. Inspecciona el estado actual:
   - `git status --short`
   - `ls data/articles`
   - `sed -n '1,220p' data/articles/index.ts`
   - `sed -n '1,180p' data/articles-config.ts`

2. Ejecuta el importador en modo diagnóstico:
   ```bash
   python3 .agents/skills/atalaya-revista-importer/scripts/import_watchtower_issue.py --month marzo --year 2026 --dry-run
   ```

3. Verifica la numeración antes de escribir:
   - Para marzo de 2026, jw.org usa documentos `2026320` a `2026324`, que corresponden a artículos 60 a 64.
   - Si la inferencia automática no coincide con el repo, pasa `--first-article-number`.
   - Si ya existe el primer artículo de la revista, el script debe saltarlo y escribir solo los faltantes.

4. Escribe los artículos:
   ```bash
   python3 .agents/skills/atalaya-revista-importer/scripts/import_watchtower_issue.py --month marzo --year 2026 --write
   ```

5. Revisa y pule el resultado antes de cerrar:
   - Abre cada archivo nuevo y confirma título, semana, canción, tema, preguntas, párrafos, imágenes y repaso.
   - Asegúrate de que todos los `readText` tengan entrada en `biblicalTextsXX`.
   - Asegúrate de que todos los textos citados en los párrafos estén en `biblicalCards`.
   - Reescribe todos los `summary` como resúmenes reales: sencillos, breves, ligados a la respuesta y con negritas útiles.
   - Verifica que ningún `summary` sea una copia larga del `content`, una pregunta, una frase cortada o un recorte con `...`.

6. Ejecuta verificación técnica:
   ```bash
   npx tsc --noEmit
   npm run build
   npm run lint
   ```

7. Si `npm run lint` falla por errores preexistentes en componentes que no tocaste, repórtalo con claridad y no lo mezcles con la importación.

## Comandos Útiles

Importar una revista por mes y año:
```bash
python3 .agents/skills/atalaya-revista-importer/scripts/import_watchtower_issue.py --month marzo --year 2026 --write
```

Usar URL explícita:
```bash
python3 .agents/skills/atalaya-revista-importer/scripts/import_watchtower_issue.py --issue-url https://www.jw.org/es/biblioteca/revistas/atalaya-estudio-marzo-2026/ --write
```

Forzar número inicial si hace falta:
```bash
python3 .agents/skills/atalaya-revista-importer/scripts/import_watchtower_issue.py --month marzo --year 2026 --first-article-number 60 --write
```

Generar solo archivos en una carpeta temporal para inspección:
```bash
python3 .agents/skills/atalaya-revista-importer/scripts/import_watchtower_issue.py --month marzo --year 2026 --write --output-dir /tmp/atalaya-import-test --no-integrate
```

## Checklist Final

- [ ] Se agregaron solo artículos de estudio (`docClass-40`).
- [ ] Se omitieron artículos no estudiables (`docClass-79` u otros).
- [ ] No se sobrescribieron cambios del usuario.
- [ ] Cada archivo nuevo exporta `biblicalTextsXX` y `articleXX`.
- [ ] Cada párrafo tiene un `summary` real, breve, sencillo y conectado con su pregunta.
- [ ] Ningún `summary` es una copia de las primeras frases del párrafo ni termina con `...`.
- [ ] `index.ts` importa, mapea y reexporta los nuevos artículos.
- [ ] `articles-config.ts` muestra los artículos activos correctos.
- [ ] `npx tsc --noEmit` pasa.
- [ ] `npm run build` pasa.
- [ ] Se reportan con honestidad errores de lint preexistentes si aparecen.
