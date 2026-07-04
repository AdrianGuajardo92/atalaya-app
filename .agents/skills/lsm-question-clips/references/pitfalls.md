# Pitfalls — clips de pregunta LSM

Errores frecuentes al detectar, recortar y cablear `questionVideoLSM`. Flujo canónico: `scripts/lsm/detect-questions.sh` con icono `?`, no heurísticas legacy de OCR.

## Errores comunes

### 1. Referencias bíblicas en top-left como proxy

**Síntoma:** el clip empieza cuando aparece `PROV. 18:22`, `Mateo 19:6` u otra ref en top-left.

**Por qué falla:** OCR detecta **texto bíblico en pantalla**, no el icono `?`.

**Regla:** clip de pregunta = tramo con círculo gris + `?` en **inferior-derecha** (86%×82%).

### 2. OCR de párrafo confundido con pregunta

**Síntoma:** el clip arranca al cambiar número de párrafo o incluye contenido del párrafo.

**Por qué falla:** `detect-segments.sh` detecta límites de párrafo, no tramos de pregunta.

**Regla:** párrafos y preguntas son pipelines separados.

### 3. Umbral `br > 500` / `build-segments.py` (legacy)

**Síntoma:** falsos positivos en intro (0–13 s), tramos largos o clips sin `?`.

**Por qué falla:** sin icono `pngBytes ≈ 590–620`; con icono `≈ 4500–7300`. Intro 0–13 s da `≈ 6700+` por panel lateral.

**Regla:** usar `detect-question-icon.swift` (umbral dinámico, exclusión 0–13,5 s) y `build-question-segments.py`.

`build-segments.py` conserva `questions[]` legacy basadas en OCR/`br > 500` para orientación histórica, pero esas preguntas no son fuente válida para `questionVideoLSM`.

### 4. No borrar `q*.mp4` viejos

**Síntoma:** tras corregir JSON, los clips en la app siguen mal.

**Por qué falla:** `cut-from-segments.sh` hace skip si el archivo existe.

```bash
rm -f public/videos/study-YYYY-MM-DD/*q*.mp4
bash scripts/lsm/cut-from-segments.sh scripts/lsm/segments-YYYY-MM-DD.json SOURCE --only q:all
```

### 5. Tramo Proverbios 18:24 (intro)

En `study-2026-06-29`, `PROV. 18:24` aparece en intro (0–13 s). El detector excluye 0–13,5 s.

**Riesgo adicional:** Q12–13 (~20,5 s) puede incluir contenido de párrafo si el merge fue permisivo. Revisar tramos >10 s manualmente.

## Diagnosticar clip incorrecto

1. **Validación automática:** `detect-questions.sh` debe mostrar `questionLabels.length` segmentos `[OK]`, 3–25 s cada uno.
2. **Frame al 50 %:** `clip-frame.swift clip.mp4 /tmp/qa.png` — debe verse `?` en bottom-right.
3. **`question-scan.csv`:** filas con `hasIcon=1` deben venir del detector del icono `?`; revisar `score`/ratios contra la calibración del estudio.
4. **Contraste TS:** ¿`textEs` coincide con lo señado en el clip?
5. **Rutas:** ¿nombre del archivo corresponde al `number` (`"3, 4"` → `q3-q4-lsm.mp4`)?

## Cuándo recalibrar

| Señal | Acción |
|-------|--------|
| `expected X segments, got N` | Revisar `questionLabels`, CSV y calibración con segundo donde `?` es inequívoco |
| Clips sin `?` en QA | Cambiar `calibrateSecond` (default 18 s) |
| Falsos positivos en intro | Confirmar exclusión `sec >= 13,5` |
| Tramos fusionados >15 s | Endurecer merge o editar `start`/`end` en JSON |
| Video fuente distinto | Recompilar Swift y recalibrar |
| Tras editar JSON manualmente | Siempre `rm *q*.mp4` + re-corte |

```bash
bash scripts/lsm/detect-questions.sh /path/to/source.mp4
# Tercer arg de detect-question-icon: segundo con ? visible (default 18)
```
