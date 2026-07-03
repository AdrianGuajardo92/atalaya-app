#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCE="${1:-/Users/adrianguajardo/Downloads/w_LSM_202604_05_r720P.mp4}"
CSV="$SCRIPT_DIR/question-scan.csv"
SEGMENTS="$SCRIPT_DIR/segments-2026-06-29.json"

if [[ ! -f "$SOURCE" ]]; then
  echo "Error: source not found: $SOURCE" >&2
  exit 1
fi

echo "Compiling detect-question-icon..."
swiftc -O -o "$SCRIPT_DIR/detect-question-icon" \
  "$SCRIPT_DIR/detect-question-icon.swift" \
  -framework AVFoundation -framework AppKit

echo "Scanning for ? icon (calibrate @ 18s)..."
"$SCRIPT_DIR/detect-question-icon" "$SOURCE" "$CSV" 18

echo "Building question segments..."
python3 "$SCRIPT_DIR/build-question-segments.py" "$CSV" "$SEGMENTS"

echo "Validation:"
python3 - "$SEGMENTS" <<'PY'
import json, sys
data = json.load(open(sys.argv[1]))
qs = data["questions"]
print(f"  {len(qs)} question segments")
bad = []
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
