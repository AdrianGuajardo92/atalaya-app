# QA LSM — study-2026-06-29 (post-corrección)

## Problema detectado

Los clips de párrafo **p10–p17** tenían límites desfasados ~1–4 s: el frame `end` mostraba el párrafo **N+1** o pantalla negra (p17).

Causa: timestamps enteros en `segments-2026-06-29.json` sin recorte de 0,5 s en transiciones OCR.

## Corrección aplicada

Script: `scripts/lsm/fix-paragraph-boundaries.py` + re-corte con `cut-from-segments.sh`.

| Párrafo | Antes | Después |
|---------|-------|---------|
| p10 | 350–375 | 350–373.5 |
| p11 | 375–410 | 374–405.5 |
| p12 | 410–480 | 406–475.5 |
| p13 | 480–610 | 476–605.5 |
| p14 | 610–625 | 606–621.5 |
| p15 | 625–670 | 621.5–665.5 |
| p16 | 670–760 | 665.5–754 |
| p17 | 760–800 | **758–797.5** |

Clips re-generados: p10–p17, p12-p13, p14-p15.

## Resultado QA

- **34/34** clips presentes; duraciones coinciden con JSON (`report.csv`).
- **12/12** clips `q*` con `?` visible en frame mid.
- **p01–p09** sin cambios (start correcto en auditoría previa).
- **p17** start muestra párrafo 17; end ya no es pantalla negra.

## Herramientas añadidas

- `scripts/lsm/clip-at-time.swift` — frame en timestamp arbitrario
- `scripts/lsm/qa-audit-clips.sh` — QA masivo start/mid/end + duraciones
- `scripts/lsm/para-scan.csv` — OCR por segundo del video fuente
