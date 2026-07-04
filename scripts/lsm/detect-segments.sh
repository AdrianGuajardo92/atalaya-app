#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCE="${1:-/Users/adrianguajardo/Downloads/w_LSM_202604_05_r720P.mp4}"
STUDY_ID="${STUDY_ID:-2026-06-29}"
OUTPUT="${2:-$SCRIPT_DIR/segments-${STUDY_ID}.json}"
CONFIG="${LSM_CONFIG:-$SCRIPT_DIR/study-configs/${STUDY_ID}.json}"

if [[ ! -f "$SOURCE" ]]; then
  echo "Error: source video not found: $SOURCE" >&2
  exit 1
fi

echo "Compiling detect-segments.swift..."
swiftc -O -o "$SCRIPT_DIR/detect-segments" "$SCRIPT_DIR/detect-segments.swift" \
  -framework AVFoundation -framework Vision -framework AppKit

echo "Detecting segments from: $SOURCE"
if [[ -f "$CONFIG" ]]; then
  "$SCRIPT_DIR/detect-segments" "$SOURCE" "$OUTPUT" "$CONFIG"
else
  "$SCRIPT_DIR/detect-segments" "$SOURCE" "$OUTPUT"
fi

echo "Validating segments..."
python3 - "$OUTPUT" "$SCRIPT_DIR" "$STUDY_ID" <<'PY'
import json, sys
from pathlib import Path

path, script_dir, study_id = sys.argv[1:4]
sys.path.insert(0, script_dir)
from lsm_config import load_study_config

config = load_study_config(study_id, Path(script_dir))
expected_paras = config["expectedParagraphCount"]
expected_question_count = len(config["questionLabels"])

with open(path) as f:
    data = json.load(f)

paras = data.get("paragraphs", [])
questions = data.get("questions", [])
nums = [p["num"] for p in paras]

print(f"Duration: {data['duration']:.1f}s")
print(f"Paragraphs: {len(paras)} segments, nums={nums}")
print(f"Questions: {len(questions)} segments")

errors = []
warnings = []
if len(paras) != expected_paras:
    errors.append(f"Expected {expected_paras} paragraph segments, got {len(paras)}")
if nums != list(range(1, expected_paras + 1)):
    errors.append(f"Paragraph numbers not 1-{expected_paras} consecutive: {nums}")
if len(questions) < expected_question_count:
    warnings.append(f"Expected ~{expected_question_count} question segments, got {len(questions)}")

for i, p in enumerate(paras):
    dur = p["end"] - p["start"]
    if dur < 1:
        errors.append(f"Paragraph {p['num']} too short: {dur:.1f}s")

if warnings:
    print("WARNINGS:")
    for e in warnings:
        print(f"  - {e}")

if errors:
    print("WARNINGS:")
    for e in errors:
        print(f"  - {e}")
    sys.exit(2)
else:
    print("Validation OK")
PY
