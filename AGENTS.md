# AGENTS.md

Reglas raíz para trabajar en `atalaya-app`. Los detalles de dominio viven en skills locales; no dupliques aquí procedimientos extensos.

## Regla Crítica: Chrome / Browser / Playwright

No usar `@Chrome`, `@Navegador`/Browser ni `$playwright` por iniciativa propia.

Estas herramientas NO deben usarse automáticamente para:
- fixes o cambios de código.
- cambios visuales o de UI.
- screenshots.
- pruebas en `localhost`.
- pruebas en Google Chrome.
- Playground.
- verificar que algo "quedó bien".

La validación visual por defecto la hace el usuario. Codex debe implementar el cambio, revisar el diff y usar verificaciones ligeras cuando aplique (`git diff`, `git diff --check`, lint/test puntual). Si cree que hace falta ver la pantalla o automatizar un navegador, debe pedir permiso antes.

Sólo usar `@Chrome`, `@Navegador`/Browser o `$playwright` cuando el usuario lo pida explícitamente en ese turno, por ejemplo:
- "usa Chrome"
- "usa Playwright"
- "abre el Navegador"
- "pruébalo con Browser"
- "saca screenshot"
- "valídalo en localhost"

También pueden usarse si el usuario invoca explícitamente una skill operativa que las requiere y donde la sesión real del navegador sea parte del trabajo.

No cuenta como permiso que la herramienta esté disponible, que parezca útil, que el cambio sea visual, que haya un servidor local corriendo, que la app esté abierta o que Codex quiera confirmar por su cuenta el resultado.

Si no hay permiso explícito, cerrar el trabajo explicando qué cambió, qué verificación ligera se hizo y qué parte puede revisar visualmente el usuario.

## Git Policy

No hacer commit ni push automáticamente. Esperar a que el usuario lo ordene explícitamente.

No revertir cambios ajenos. El repositorio puede estar sucio por trabajo del usuario u otros agentes; trabajar sólo dentro del alcance pedido.

## Skills Locales

Fuente canónica: `.agents/skills/`.

Espejo Cursor: `.claude/skills/`. No editarlo manualmente.

Tras editar cualquier skill en `.agents/skills/`, ejecutar:

```bash
npm run skills:check
```

`skills:check` valida, sincroniza `.agents/skills/` hacia `.claude/skills/` y revisa que no quede diff entre ambos árboles. Si sólo necesitas sincronizar, usa `npm run skills:sync`; si sólo necesitas inspeccionar drift, usa `npm run skills:diff`.

Mantener `AGENTS.md` como raíz de gobernanza. Las reglas largas de dominio, flujos de artículos, LSM, diseño, KV, recuadros, comentarios y respuestas deben vivir en skills específicas.

## Ortografía y Acentos

Siempre escribir con ortografía correcta en español en todo texto visible al usuario y en datos de estudios.

Reglas mínimas:
- Usar acentos: á, é, í, ó, ú, ü, ñ.
- Usar signos de apertura y cierre: ¿...? ¡...!
- Escribir nombres bíblicos con acentos: Jehová, Satanás, Moisés, Josué, Edén.
- No usar transliteraciones sin acentos: "Jehova", "Satanas", "Moises".

## Comandos Base

```bash
npm run dev                         # servidor local en puerto 9000
npm run build                       # build de producción
npm run start                       # servidor de producción
npm run lint                        # ESLint
npm run test                        # Vitest
npm run skills:validate             # valida skills locales
npm run skills:sync                 # sincroniza .agents/skills -> .claude/skills
npm run skills:diff                 # compara .agents/skills y .claude/skills
npm run skills:check                # validate + sync + diff del espejo
npm run study:validate              # valida datos de estudios
npm run study:validate:active       # valida sólo estudios activos
npm run study:audit:bible-modals    # audita refs bíblicas/modales
npm run study:list                  # lista estudios por studyId
npm run study:remove <studyId>      # quita estudio del registro; borrar videos LSM aparte
npm run cleanup-kv -- --study=<id>  # limpia KV de un estudio eliminado
```

## Arquitectura Breve

- Next.js 16 con App Router, React 19, TypeScript 5 y Tailwind CSS 4.
- App principal en `app/page.tsx`; layout, tema y PWA en `app/layout.tsx`, `next.config.ts` y `public/manifest.json`.
- Datos de estudios en `data/articles/study-YYYY-MM-DD.ts`.
- Registro de estudios en `data/articles/index.ts`.
- Estudios activos en `data/articles-config.ts`.
- Componentes principales en `components/`; lógica compartida en `lib/`; hooks en `hooks/`; tipos en `types/atalaya.ts`.
- Persistencia con Vercel KV vía `lib/kv-store.ts`, con fallback en memoria si faltan `KV_REST_API_URL` / `KV_REST_API_TOKEN`; rutas en `app/api/favorites`, `app/api/hidden-cards`, `app/api/used-items` y `app/api/lsm`.
- Rutas `app/api/dev-inspector-*` son herramientas locales de desarrollo, no persistencia de usuario.
- PWA con `next-pwa` en `next.config.ts`; deshabilitada en desarrollo y con caches para videos LSM, APIs e imágenes.
- Videos LSM en `public/videos/study-YYYY-MM-DD/`, referenciados desde `questionVideoLSM` y `paragraph.videoLSM`.

## Reglas de Contenido y Dominio

Usar la skill local correspondiente antes de trabajar en flujos de dominio:
- `article-editor`: agregar o editar estudios.
- `atalaya-revista-importer`: importar revistas completas.
- `respuestas-conductor`: respuestas enriquecidas `answers`.
- `como-comentarlo`: comentarios naturales.
- `design-system`: cambios visuales o componentes.
- `study-lifecycle`: crear, registrar, activar o eliminar estudios.
- `lsm-video`, `lsm-question-clips`, `lsm-translations`: videos y glosas LSM.
- `box-supplement`: recuadros laterales.
- `kv-maintenance`: limpieza de Vercel KV.
- `build-check`: verificación ligera antes de cerrar.
- `atalaya-quality-gate`: auditoría final de estudios antes de cerrar cambios.
- `fix-bug`: errores de compilación, consola o comportamiento.
- `ui-review`: auditoría visual/responsiva/accesibilidad, respetando la regla de no navegador salvo permiso explícito.
- `code-conventions`: estructura, patrones, tipos, APIs y estilo del proyecto.
- `clean-code`, `optimize`: limpieza, refactor y rendimiento.
- `deploy`: commit/push sólo por pedido explícito.
- `vercel`: despliegue a producción sólo por pedido explícito.

## Videos LSM al Eliminar Estudios

Cuando se elimine un artículo de estudio antiguo, eliminar también los videos LSM asociados en `public/videos/`. No dejar videos huérfanos en el repositorio.
