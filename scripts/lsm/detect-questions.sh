#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCE="${1:-/Users/adrianguajardo/Downloads/w_LSM_202604_05_r720P.mp4}"
STUDY_ID="${STUDY_ID:-2026-06-29}"
CSV="${CSV:-$SCRIPT_DIR/question-scan.csv}"
SEGMENTS="${SEGMENTS:-$SCRIPT_DIR/segments-${STUDY_ID}.json}"
CALIBRATE_SECOND="${CALIBRATE_SECOND:-18}"

if [[ ! -f "$SOURCE" ]]; then
  echo "Error: source not found: $SOURCE" >&2
  exit 1
fi

echo "Compiling detect-question-icon..."
swiftc -O -o "$SCRIPT_DIR/detect-question-icon" \
  "$SCRIPT_DIR/detect-question-icon.swift" \
  -framework AVFoundation -framework AppKit

echo "Scanning for ? icon (calibrate @ ${CALIBRATE_SECOND}s)..."
"$SCRIPT_DIR/detect-question-icon" "$SOURCE" "$CSV" "$CALIBRATE_SECOND"

echo "Building question segments..."
python3 "$SCRIPT_DIR/build-question-segments.py" "$CSV" "$SEGMENTS"

echo "Validation:"
python3 - "$SEGMENTS" "$SCRIPT_DIR" "$STUDY_ID" <<'PY'
import json, sys
data = json.load(open(sys.argv[1]))
script_dir, study_id = sys.argv[2:4]
sys.path.insert(0, script_dir)
from lsm_config import load_study_config

expected_count = len(load_study_config(study_id, script_dir)["questionLabels"])
qs = data["questions"]
print(f"  {len(qs)} question segments")
bad = []
if len(qs) != expected_count:
    print(f"  [BAD] expected {expected_count} question segments")
    bad.append("count")
for q in qs:
    d = q["end"] - q["start"]
    ok = 3 <= d <= 25
    flag = "OK" if ok else "BAD"
    print(f"  [{flag}] Q{q['num']:>5}: {q['start']:6.1f}-{q['end']:6.1f} ({d:4.1f}s)")
    if not ok:
        bad.append(q["num"])
if bad:
    sys.exit(2)
PY
