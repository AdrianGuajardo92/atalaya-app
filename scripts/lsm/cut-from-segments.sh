#!/usr/bin/env bash
# Cut LSM clips from segments JSON using avconvert
# Usage: cut-from-segments.sh [segments.json] [source.mp4] [--only TYPE:range]

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
SEGMENTS="${1:-$SCRIPT_DIR/segments-2026-06-29.json}"
SOURCE="${2:-/Users/adrianguajardo/Downloads/w_LSM_202604_05_r720P.mp4}"
STUDY_ID="2026-06-29"
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

python3 - "$SEGMENTS" "$SOURCE" "$OUT_DIR" "$STUDY_ID" "$ONLY" <<'PY'
import json, sys, subprocess, os

segments_path, source, out_dir, study_id, only = sys.argv[1:6]

with open(segments_path) as f:
    data = json.load(f)

paras = {p["num"]: p for p in data["paragraphs"]}
questions = {q["num"]: q for q in data["questions"]}

JOINED = [(3, 4), (6, 7), (8, 9), (12, 13), (14, 15)]

# Map question index to segment key in JSON
Q_KEYS = {
    1: "1", 2: "2", 3: "3-4", 4: "3-4",
    5: "5", 6: "6-7", 7: "6-7",
    8: "8-9", 9: "8-9", 10: "10", 11: "11",
    12: "12-13", 13: "12-13", 14: "14-15", 15: "14-15",
    16: "16", 17: "17",
}

def q_filename(n):
    key = Q_KEYS[n]
    if "-" in key:
        a, b = key.split("-")
        return f"study-{study_id}-q{a}-q{b}-lsm.mp4"
    return f"study-{study_id}-q{n:02d}-lsm.mp4"

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

def parse_range(s, lo, hi):
    if s == "all":
        return list(range(lo, hi + 1))
    if "-" in s:
        a, b = s.split("-", 1)
        return list(range(int(a), int(b) + 1))
    return [int(s)]

tasks = []

if only == "all" or only.startswith("p:"):
    r = only.split(":", 1)[1] if only.startswith("p:") else "1-17"
    for n in parse_range(r, 1, 17):
        if n in paras:
            p = paras[n]
            tasks.append((p["start"], p["end"], f"study-{study_id}-p{n:02d}-lsm.mp4"))

if only == "all" or only.startswith("q:"):
    r = only.split(":", 1)[1] if only.startswith("q:") else "1-17"
    seen = set()
    for n in parse_range(r, 1, 17):
        key = Q_KEYS[n]
        if key in seen:
            continue
        seen.add(key)
        if key in questions:
            q = questions[key]
            tasks.append((q["start"], q["end"], q_filename(n)))

if only == "all" or only.startswith("j:"):
    r = only.split(":", 1)[1] if only.startswith("j:") else "all"
    for a, b in JOINED:
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
