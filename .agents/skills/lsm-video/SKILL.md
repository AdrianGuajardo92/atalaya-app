---
name: lsm-video
description: Convenciones y QA de videos LSM por párrafo, clips unidos de párrafos y referencias en public/videos/. Úsalo al recortar, auditar o corregir límites de p*.mp4 o p*-p*.mp4, al cablear question.videoLSM/paragraph.videoLSM, o al verificar que los clips de párrafos inicien y terminen correctamente sin tocar questionVideoLSM.
---

# Videos LSM

## Regla crítica

Mantener separadas dos superficies:

| Superficie | Campo | Archivos | Skill |
|------------|-------|----------|-------|
| Párrafos | `paragraph.videoLSM` y `question.videoLSM` | `p*.mp4`, `p*-p*.mp4` | esta skill |
| Preguntas señadas | `questionVideoLSM` | `q*.mp4` | [`lsm-question-clips`](../lsm-question-clips/SKILL.md) |

Al corregir párrafos: **no recortar, borrar, reemplazar ni ajustar `q*.mp4` ni `questionVideoLSM`**. El icono `?` en esquina inferior-derecha pertenece al clip de pregunta, no al clip de párrafo.

## Ubicación

`public/videos/study-YYYY-MM-DD/` (preferido) o legacy `public/videos/article-XX/`

## Convención de nombres

| Tipo | Archivo |
|------|---------|
| Párrafo individual | `study-2026-06-29-p01-lsm.mp4` |
| Párrafos unidos | `study-2026-06-29-p12-p13-lsm.mp4` |
| Pregunta señada (3-15s) | `study-2026-06-29-q01-lsm.mp4` |

## Campos en datos

```typescript
{ number: 1, videoLSM: "/videos/study-2026-06-29/study-2026-06-29-p01-lsm.mp4" }
{ number: "12, 13", videoLSM: "/videos/.../study-2026-06-29-p12-p13-lsm.mp4" }
{ number: "1", questionVideoLSM: "/videos/.../study-2026-06-29-q01-lsm.mp4" }
```

## Overrides KV en `QuestionCard`

`QuestionCard` carga overrides de videos por párrafo desde `/api/lsm` con `questionNumber=video-pN`.

| Clave KV | Valor | Efecto |
|----------|-------|--------|
| `video-p1` | URL string | Reemplaza `paragraph.videoLSM` del párrafo 1 en tarjetas/modales de párrafos |
| `video-p12` | URL string | Reemplaza `paragraph.videoLSM` del párrafo 12 |
| `video-pN` con `""` | string vacío | Elimina el override; vuelve a usar `paragraph.videoLSM` si existe |

Alcance:

- La clave vive dentro del objeto KV `atalaya-lsm-data:${articleId}`.
- `video-pN` solo afecta videos de párrafo (`p*.mp4` o URL externa equivalente).
- No sustituye `questionVideoLSM` (`q*.mp4`).
- No sustituye `question.videoLSM` unido para preguntas agrupadas; si `question.videoLSM` existe, el modal de grupo lo prefiere sobre videos individuales.

## Reglas

- Si una pregunta cubre 2+ párrafos: video unido en `question.videoLSM`; mantener clips individuales en `paragraph.videoLSM`
- El modal de párrafos prefiere `question.videoLSM`; si no existe, usa clips individuales
- Al eliminar estudio: **borrar todos los .mp4** de su carpeta
- Rutas TS siempre empiezan con `/videos/...`, nunca con `public/`

## Recorte desde fuente

```bash
# ffmpeg
ffmpeg -ss START -i SOURCE.mp4 -t DURATION -c copy OUTPUT.mp4

# macOS avconvert
avconvert --source SOURCE.mp4 --preset PresetPassthrough \
  --start START --duration DURATION \
  --output public/videos/study-YYYY-MM-DD/study-YYYY-MM-DD-p01-lsm.mp4 --replace
```

## Configuración por estudio

Cada estudio puede tener una cantidad distinta de párrafos, preguntas agrupadas y clips unidos. No hardcodear 17 párrafos, 12 preguntas ni grupos de un estudio anterior: la fuente de verdad debe ser `scripts/lsm/study-configs/${STUDY_ID}.json`.

Campos esperados:

```json
{
  "studyId": "2026-07-06",
  "expectedParagraphCount": 18,
  "questionLabels": ["1-2", "3", "4", "...", "18"],
  "joinedParagraphs": [[1, 2]]
}
```

| Campo | Uso |
|-------|-----|
| `expectedParagraphCount` | Total real de párrafos individuales que deben generar `p01`...`pNN` |
| `questionLabels` | Labels de preguntas señadas para `q*.mp4`; los grupos usan guion, por ejemplo `"1-2"` |
| `joinedParagraphs` | Pares o rangos unidos que requieren `question.videoLSM`, por ejemplo `[[1, 2]]` |

Conteo esperado para QA: `expectedParagraphCount + joinedParagraphs.length + questionLabels.length`.

Si no existe config para un estudio, los scripts conservan un default legacy compatible con `study-2026-06-29`; para estudios nuevos, crear siempre el JSON explícito antes de detectar, recortar o auditar.

## Flujo para corregir párrafos

### 1. Preparar variables

```bash
export STUDY_ID="2026-06-29"
export SOURCE="/path/to/w_LSM_source.mp4"
export SEGMENTS="scripts/lsm/segments-${STUDY_ID}.json"
export OUT_DIR="public/videos/study-${STUDY_ID}"
```

### Estado real de scripts

- `cut-from-segments.sh` acepta `SEGMENTS` y `SOURCE`; deriva `STUDY_ID` desde `segments-YYYY-MM-DD.json` o usa `STUDY_ID` del entorno.
- `detect-segments.sh` acepta `STUDY_ID` por entorno y escribe `scripts/lsm/segments-${STUDY_ID}.json` si no se pasa output explícito.
- `qa-audit-clips.sh` acepta `STUDY_ID` del entorno y lee `expectedParagraphCount`, `questionLabels` y `joinedParagraphs` desde la config del estudio.
- `lsm_config.py` centraliza defaults, nombres `q*.mp4`, rangos `--only` y mapeos de preguntas; si cambia la estructura de un estudio, ajustar la config, no los scripts.
- `detect-questions.sh` pertenece a `lsm-question-clips`; acepta `STUDY_ID`, `SEGMENTS`, `CSV` y `CALIBRATE_SECOND` por entorno.
- `build-segments.py` es legacy para preguntas: su `questions[]` usa OCR/`br > 500` y no debe usarse para `questionVideoLSM`.

### 2. Detectar o ajustar límites

- Detectar números de párrafo en esquina superior-izquierda con `scripts/lsm/detect-segments.sh`.
- Ajustar manualmente `paragraphs[]` en `segments-${STUDY_ID}.json` cuando el OCR incluya una pregunta, el siguiente párrafo o una pantalla negra.
- Para afinar fronteras, extraer frames del video fuente con `scripts/lsm/clip-at-time` alrededor de la transición.
- Las capturas con duraciones esperadas ayudan, pero **no son requisito**. Si el usuario no da duraciones, alinear por fotogramas del video fuente hasta que el clip empiece y termine limpio.
- El límite correcto de un párrafo:
  - empieza cuando el número del párrafo correcto ya está visible y el señante está completo, justo antes de la primera seña o en su primer movimiento;
  - termina antes de que aparezca el siguiente número o el icono `?`;
  - no incluye clips de pregunta, aunque la pregunta esté entre párrafos.

#### Sin captura de duraciones

Cuando no haya captura con tiempos:

1. Tomar el video fuente correcto y revisar frames cada `0.5s`, luego afinar a `0.1s` cerca de la frontera.
2. Para el inicio: escoger el primer frame útil con el número correcto visible y el señante listo; no aceptar un inicio donde la seña ya va avanzada.
3. Para el final: escoger el último frame del párrafo antes del siguiente número, pantalla de pregunta o icono `?`.
4. Calcular duración desde esos límites y actualizar `segments-${STUDY_ID}.json`.
5. Recortar solo los clips afectados y volver a revisar `start.png`, `mid.png` y `end.png`.

Ejemplo probado en `study-2026-06-29`: `p06` estaba en `199.5–220` y empezaba tarde. Se revisaron frames `182.0–183.0`; el inicio limpio fue `182.5` porque ya se veía el número 6 y el señante completo antes de la primera seña. Luego se recortaron solo `p06` y `p06-p07`.

### 3. Recortar solo párrafos

Si se re-recortan clips existentes, quitar únicamente clips de párrafo para que `cut-from-segments.sh` no los omita. No borrar `q*.mp4`.

```bash
rm -f "${OUT_DIR}"/study-"${STUDY_ID}"-p*.mp4
bash scripts/lsm/cut-from-segments.sh "$SEGMENTS" "$SOURCE" --only p:all
bash scripts/lsm/cut-from-segments.sh "$SEGMENTS" "$SOURCE" --only j:all
```

`p:all` usa `expectedParagraphCount`; `j:all` usa `joinedParagraphs`. Para recortes parciales, usar `p:N`, `p:N-M` o `j:N-M` según el grupo configurado.

Si solo se corrige una frontera, recortar únicamente los clips afectados con `avconvert --replace`: los dos individuales vecinos y cualquier unido que dependa de ellos.

Recorte parcial probado:

```bash
rm -f "${OUT_DIR}/study-${STUDY_ID}-p06-lsm.mp4" \
      "${OUT_DIR}/study-${STUDY_ID}-p06-p07-lsm.mp4"
bash scripts/lsm/cut-from-segments.sh "$SEGMENTS" "$SOURCE" --only p:6
bash scripts/lsm/cut-from-segments.sh "$SEGMENTS" "$SOURCE" --only j:6-7
```

El `rm -f` es necesario porque `cut-from-segments.sh` omite archivos existentes. Si cambia una frontera interna entre dos párrafos, recortar los individuales vecinos; si cambia el inicio del primer párrafo o el final del último, recortar también el unido.

### 4. QA visual obligatorio

Este QA es con artefactos locales (`report.csv` y PNG), no con Browser/Chrome/Playwright.

```bash
bash scripts/lsm/qa-audit-clips.sh
```

Verificar:

- `scripts/lsm/qa-audit/${STUDY_ID}/report.csv`: todos los `p*` y `p*-p*` en `OK`.
- `pNN/start.png`, `pNN/mid.png`, `pNN/end.png`: cada inicio/final conserva el número de párrafo correcto.
- `pNN-pMM/start.png`, `pNN-pMM/mid.png`, `pNN-pMM/end.png`: cada clip unido empieza en el primer párrafo del grupo y termina en el último, sin entrar al `?` ni al siguiente párrafo.
- `report.csv` confirma duración contra el JSON, pero no basta solo. La aprobación real requiere inspección visual de `start.png` y `end.png` para confirmar que no empieza tarde ni termina en otro segmento.

`qa-audit-clips.sh` no genera contact sheets por sí solo. Si existen `paragraph-boundaries-contact.png` o `joined-paragraph-boundaries-contact.png`, son artefactos manuales o de corridas previas; se pueden usar como ayuda, pero el script sólo garantiza `report.csv` y los PNG por carpeta.

### 5. Verificar en la app cuando esté autorizado

Por regla de `AGENTS.md`, no usar Navegador/Chrome/Playwright por iniciativa propia. Si el usuario lo pide explícitamente, abrir cada modal de "Párrafos", confirmar que carga el archivo `p*` esperado, que el párrafo inicia completo y que no invade el siguiente párrafo ni el `?`. Si hay captura de duraciones, cotejar también contra `report.csv`.

## Ejemplo real: `study-2026-06-29`

Patrón específico de ese estudio, mantenido como ejemplo histórico, no como regla universal:

- `p01`-`p17`: clips individuales limpios.
- Unidos necesarios: `p03-p04`, `p06-p07`, `p08-p09`, `p12-p13`, `p14-p15`.
- `p06`: inicio corregido a `182.5s` tras revisar frames del fuente; duración final `37.5s`.
- El QA final mostró `34 clips checked, issues: 0` incluyendo preguntas, pero esta skill solo corrige los `p*`.
- Cuando un final mostraba el siguiente número o el `?`, se movió el límite hacia atrás y se recortaron solo los derivados afectados.

## Ejemplo real: `study-2026-07-06`

Patrón específico del estudio “¿Por qué son importantes los principios bíblicos?”:

- `expectedParagraphCount: 18`.
- `questionLabels`: `["1-2", "3", ..., "18"]`.
- `joinedParagraphs`: `[[1, 2]]`.
- QA esperado: 18 clips individuales + 1 unido + 17 clips de pregunta = 36 clips.

## Preguntas (`questionVideoLSM`)

Clip corto (3-15 s) con icono `?` en esquina inferior-derecha. Flujo completo de detección, recorte en lotes, QA visual y cableado TS: skill [`lsm-question-clips`](../lsm-question-clips/SKILL.md).

## Checklist por estudio nuevo

- [ ] Existe `scripts/lsm/study-configs/${STUDY_ID}.json` para cualquier patrón que no sea el default legacy
- [ ] `expectedParagraphCount` coincide con la cantidad real de párrafos del estudio
- [ ] Clip por cada párrafo `p01`...`pNN` definido por `expectedParagraphCount`
- [ ] Video unido por cada entrada de `joinedParagraphs`
- [ ] QA visual de inicio/final revisado para individuales y unidos
- [ ] Si no hay captura de duraciones, límites alineados por fotogramas del video fuente
- [ ] Inicio/final muestran el número de párrafo correcto y no entran al siguiente párrafo ni al icono `?`
- [ ] `question.videoLSM` apunta al unido si la pregunta cubre 2+ párrafos
- [ ] `paragraph.videoLSM` mantiene los clips individuales
- [ ] Clips `q*.mp4` y `questionVideoLSM` intactos salvo que se use `lsm-question-clips`
- [ ] Referencias en `study-*.ts` coinciden con rutas reales
