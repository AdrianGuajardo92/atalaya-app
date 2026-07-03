---
name: lsm-video
description: Convenciones de videos LSM por párrafo, preguntas agrupadas y clips cortos de pregunta (questionVideoLSM). Úsalo al recortar, nombrar o referenciar videos en public/videos/.
---

# Videos LSM

## Ubicación

`public/videos/study-YYYY-MM-DD/` (preferido) o legacy `public/videos/article-XX/`

## Convención de nombres

| Tipo | Archivo |
|------|---------|
| Párrafo individual | `study-2026-06-29-p01-lsm.mp4` |
| Pregunta multi-párrafo | `study-2026-06-29-p12-p13-lsm.mp4` |
| Pregunta señada (3-15s) | `study-2026-06-29-q01-lsm.mp4` |

## Campos en datos

```typescript
{ number: 1, videoLSM: "/videos/study-2026-06-29/study-2026-06-29-p01-lsm.mp4" }
{ number: "12, 13", videoLSM: "/videos/.../study-2026-06-29-p12-p13-lsm.mp4" }
{ number: "1", questionVideoLSM: "/videos/.../study-2026-06-29-q01-lsm.mp4" }
```

## Reglas

- Si una pregunta cubre 2+ párrafos: video unido en `question.videoLSM`; mantener clips individuales en `paragraph.videoLSM`
- Al eliminar estudio: **borrar todos los .mp4** de su carpeta
- Modal de párrafos prefiere `question.videoLSM`; si no existe, usa clips individuales

## Recorte desde fuente

```bash
# ffmpeg
ffmpeg -ss START -i SOURCE.mp4 -t DURATION -c copy OUTPUT.mp4

# macOS avconvert
avconvert --source SOURCE.mp4 --preset PresetPassthrough \
  --start START --duration DURATION \
  --output public/videos/study-YYYY-MM-DD/study-YYYY-MM-DD-p01-lsm.mp4 --replace
```

## Identificar timestamps

1. OCR en esquina superior-izquierda (número de párrafo) cada 1s
2. Icono `?` en esquina inferior-derecha = clip de pregunta (`questionVideoLSM`)

## Checklist por estudio nuevo

- [ ] Clip por cada párrafo
- [ ] Video unido por pregunta multi-párrafo
- [ ] Clip corto de pregunta señada (opcional pero recomendado)
- [ ] Referencias en `study-*.ts` coinciden con rutas reales
