---
name: skill-creator
description: Crear o actualizar skills locales de atalaya-app para Codex/agentes. Usar cuando se agreguen, editen, sincronicen o empaqueten skills bajo .agents/skills, sus scripts, referencias o assets.
---

# Skill Creator

## Gobernanza local

La fuente canónica de skills del proyecto es `.agents/skills/`. No editar manualmente `.claude/skills/`; es un espejo generado para compatibilidad.

Después de editar cualquier skill local, ejecutar:

```bash
npm run skills:check
```

Mantener `AGENTS.md` corto: reglas raíz, política de herramientas, Git, ortografía, comandos base y rutas de skills. Las reglas largas de dominio deben vivir en skills específicas.

## Reglas de herramientas

No agregar permisos automáticos para Chrome, Browser, Playwright ni Chrome DevTools. Si una skill operativa realmente necesita navegador, debe decirlo de forma explícita y depender del permiso del usuario en ese turno.

No crear instrucciones que sugieran validar visualmente por cuenta propia en `localhost`, screenshots o navegador. La validación visual por defecto la hace el usuario; el cierre normal usa diff, `git diff --check` y lint/test puntual cuando aplique.

## Estructura esperada

```text
.agents/skills/<skill-name>/
├── SKILL.md
├── scripts/      # opcional: automatizaciones determinísticas
├── references/   # opcional: material que se lee sólo cuando hace falta
└── assets/       # opcional: plantillas o archivos reutilizables
```

Usar nombres kebab-case. El `description` del frontmatter debe explicar qué hace la skill y cuándo se activa; no depender de una sección "cuándo usar" en el cuerpo.

## Flujo para crear o editar

1. Entender el caso concreto y revisar skills vecinas antes de inventar estructura nueva.
2. Crear skills nuevas con:

```bash
.agents/skills/skill-creator/scripts/init_skill.py <skill-name> --path .agents/skills
```

3. Editar `SKILL.md` con instrucciones cortas, accionables y propias del repo.
4. Mover detalles largos a `references/` y scripts repetibles a `scripts/`.
5. Borrar placeholders o recursos de ejemplo que no aporten.
6. Validar la skill:

```bash
.agents/skills/skill-creator/scripts/quick_validate.py .agents/skills/<skill-name>
```

7. Ejecutar `npm run skills:check`.

## Criterios de contenido

Escribir para otro agente que ya sabe programar, pero no conoce las decisiones locales de atalaya-app.

Incluir sólo contexto que cambie decisiones reales:
- rutas canónicas.
- comandos exactos.
- invariantes de dominio.
- pasos donde equivocarse sería caro.
- límites de alcance y permisos.

Evitar:
- lenguaje genérico de proveedor o asistente.
- copiar secciones enteras de `AGENTS.md`.
- crear README, guías auxiliares o changelogs dentro de la skill.
- explicaciones largas que no afecten la ejecución.

## Recursos opcionales

Usar `scripts/` cuando una operación sea repetitiva, frágil o convenga ejecutar igual cada vez. Probar los scripts nuevos o editados con una muestra mínima.

Usar `references/` cuando el detalle sea útil sólo para variantes específicas. En `SKILL.md`, enlazar cada referencia y decir cuándo abrirla.

Usar `assets/` sólo para plantillas, imágenes, datos o archivos que el agente deba reutilizar como insumo.

Para patrones de diseño de workflows y salidas consistentes, consultar sólo si aplica:
- `references/workflows.md`
- `references/output-patterns.md`

## Empaquetado

Empaquetar sólo si el usuario lo pide o si se necesita distribuir la skill fuera del repo:

```bash
.agents/skills/skill-creator/scripts/package_skill.py .agents/skills/<skill-name> ./dist
```

El paquete `.skill` es un zip con extensión `.skill`. No hace falta empaquetar para uso local normal en atalaya-app.
