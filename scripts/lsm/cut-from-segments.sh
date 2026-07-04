#!/usr/bin/env bash
# Cut LSM clips from segments JSON using avconvert
# Usage: cut-from-segments.sh [segments.json] [source.mp4] [--only TYPE:range]

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
SEGMENTS="${1:-}"
SOURCE="${2:-/Users/adrianguajardo/Downloads/w_LSM_202604_05_r720P.mp4}"
STUDY_ID="${STUDY_ID:-}"
if [[ -z "$STUDY_ID" && -n "$SEGMENTS" ]]; then
  segment_file="$(basename "$SEGMENTS")"
  if [[ "$segment_file" =~ ^segments-([0-9]{4}-[0-9]{2}-[0-9]{2})\.json$ ]]; then
    STUDY_ID="${BASH_REMATCH[1]}"
  fi
fi
STUDY_ID="${STUDY_ID:-2026-06-29}"
SEGMENTS="${SEGMENTS:-$SCRIPT_DIR/segments-${STUDY_ID}.json}"
OUT_DIR="$REPO_ROOT/public/videos/study-$STUDY_ID"
ONLY="all"

if [[ "${3:-}" == "--only" ]]; then
  ONLY="${4:-all}"
fi

if [[ ! -f "$SEGMENTS" ]]; then
  echo "Error: segments file not found: $SEGMENTS" >&2
  exit 1
fi
if [[ ! -f "$SOURCE" ]]; then
  echo "Error: source video not found: $SOURCE" >&2
  exit 1
fi

mkdir -p "$OUT_DIR"

python3 - "$SEGMENTS" "$SOURCE" "$OUT_DIR" "$STUDY_ID" "$ONLY" "$SCRIPT_DIR" <<'PY'
import json, sys, subprocess, os

segments_path, source, out_dir, study_id, only, script_dir = sys.argv[1:7]
sys.path.insert(0, script_dir)
from lsm_config import (
    load_study_config,
    parse_number_range,
    question_filename,
    question_key_map,
)

with open(segments_path) as f:
    data = json.load(f)

paras = {p["num"]: p for p in data["paragraphs"]}
questions = {q["num"]: q for q in data["questions"]}
config = load_study_config(study_id, script_dir)
paragraph_count = config["expectedParagraphCount"]
joined = [tuple(pair) for pair in config["joinedParagraphs"]]
q_keys = question_key_map(config["questionLabels"])
question_high = max(q_keys)

def cut(start, end, fname):
    dur = end - start
    if dur <= 0.5:
        print(f"  SKIP {fname}: duration {dur:.2f}s")
        return False
    out = os.path.join(out_dir, fname)
    if os.path.isfile(out) and os.path.getsize(out) > 1000:
        print(f"  skip (exists): {fname}")
        return True
    print(f"  cut {fname}: start={start:.3f}s dur={dur:.3f}s")
    r = subprocess.run([
        "avconvert", "--source", source, "--preset", "PresetPassthrough",
        "--start", str(start), "--duration", str(dur),
        "--output", out, "--replace"
    ], capture_output=True, text=True)
    if r.returncode != 0:
        print(f"  ERROR {fname}: {r.stderr[:200]}")
        return False
    return True

tasks = []

if only == "all" or only.startswith("p:"):
    r = only.split(":", 1)[1] if only.startswith("p:") else f"1-{paragraph_count}"
    for n in parse_number_range(r, 1, paragraph_count):
        if n in paras:
            p = paras[n]
            tasks.append((p["start"], p["end"], f"study-{study_id}-p{n:02d}-lsm.mp4"))

if only == "all" or only.startswith("q:"):
    r = only.split(":", 1)[1] if only.startswith("q:") else f"1-{question_high}"
    seen = set()
    for n in parse_number_range(r, 1, question_high):
        key = q_keys.get(n)
        if not key:
            continue
        if key in seen:
            continue
        seen.add(key)
        if key in questions:
            q = questions[key]
            tasks.append((q["start"], q["end"], question_filename(study_id, key)))

if only == "all" or only.startswith("j:"):
    r = only.split(":", 1)[1] if only.startswith("j:") else "all"
    for a, b in joined:
        key = f"{a}-{b}"
        if r != "all" and r != key:
            continue
        if a in paras and b in paras:
            tasks.append((paras[a]["start"], paras[b]["end"],
                f"study-{study_id}-p{a:02d}-p{b:02d}-lsm.mp4"))

print(f"Cutting {len(tasks)} clips (only={only})...")
ok = 0
for start, end, fname in tasks:
    if cut(start, end, fname):
        ok += 1
print(f"Done: {ok}/{len(tasks)} clips ready.")
PY
