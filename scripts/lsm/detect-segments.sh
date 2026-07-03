#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCE="${1:-/Users/adrianguajardo/Downloads/w_LSM_202604_05_r720P.mp4}"
OUTPUT="${2:-$SCRIPT_DIR/segments-2026-06-29.json}"

if [[ ! -f "$SOURCE" ]]; then
  echo "Error: source video not found: $SOURCE" >&2
  exit 1
fi

echo "Compiling detect-segments.swift..."
swiftc -O -o "$SCRIPT_DIR/detect-segments" "$SCRIPT_DIR/detect-segments.swift" \
  -framework AVFoundation -framework Vision -framework AppKit

echo "Detecting segments from: $SOURCE"
"$SCRIPT_DIR/detect-segments" "$SOURCE" "$OUTPUT"

echo "Validating segments..."
python3 - "$OUTPUT" <<'PY'
import json, sys
path = sys.argv[1]
with open(path) as f:
    data = json.load(f)

paras = data.get("paragraphs", [])
questions = data.get("questions", [])
nums = [p["num"] for p in paras]

print(f"Duration: {data['duration']:.1f}s")
print(f"Paragraphs: {len(paras)} segments, nums={nums}")
print(f"Questions: {len(questions)} segments")

errors = []
if len(paras) != 17:
    errors.append(f"Expected 17 paragraph segments, got {len(paras)}")
if nums != list(range(1, 18)):
    errors.append(f"Paragraph numbers not 1-17 consecutive: {nums}")
if len(questions) < 12:
    errors.append(f"Expected ~17 question segments, got {len(questions)}")

for i, p in enumerate(paras):
    dur = p["end"] - p["start"]
    if dur < 1:
        errors.append(f"Paragraph {p['num']} too short: {dur:.1f}s")

if errors:
    print("WARNINGS:")
    for e in errors:
        print(f"  - {e}")
    sys.exit(2)
else:
    print("Validation OK")
PY
