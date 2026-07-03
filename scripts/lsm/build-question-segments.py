#!/usr/bin/env python3
"""Merge question-scan.csv into segments JSON (questions array only)."""
import csv
import json
import sys
from pathlib import Path

CSV = Path(sys.argv[1] if len(sys.argv) > 1 else "question-scan.csv")
SEGMENTS = Path(sys.argv[2] if len(sys.argv) > 2 else "segments-2026-06-29.json")

Q_LABELS = ["1", "2", "3-4", "5", "6-7", "8-9", "10", "11", "12-13", "14-15", "16", "17"]

rows = []
with CSV.open() as f:
    for r in csv.DictReader(f):
        rows.append({
            "sec": float(r["second"]),
            "has": r["hasIcon"] == "1",
        })

# Merge consecutive hasIcon=true segments (allow gaps <= 0.5s)
segments = []
i = 0
while i < len(rows):
    if not rows[i]["has"]:
        i += 1
        continue
    start = rows[i]["sec"]
    end = start
    j = i + 1
    while j < len(rows):
        if rows[j]["has"]:
            end = rows[j]["sec"] + 0.5
            j += 1
        elif j + 1 < len(rows) and rows[j + 1]["has"] and (rows[j + 1]["sec"] - end) <= 1.0:
            j += 1
        else:
            break
    if end - start >= 2.5:
        segments.append({"start": start, "end": end})
    i = j

# Pad end to next sample if needed
for seg in segments:
    seg["end"] = round(seg["end"], 1)

print(f"Found {len(segments)} question segments:")
for s in segments:
    print(f"  {s['start']:.1f}-{s['end']:.1f} ({s['end']-s['start']:.1f}s)")

if len(segments) != 12:
    print(f"WARN: expected 12 segments, got {len(segments)}", file=sys.stderr)

questions = []
for idx, label in enumerate(Q_LABELS[: len(segments)]):
    seg = segments[idx]
    questions.append({
        "num": label,
        "start": seg["start"],
        "end": seg["end"],
    })

data = json.loads(SEGMENTS.read_text())
data["questions"] = questions
SEGMENTS.write_text(json.dumps(data, indent=2) + "\n")
print(f"Updated {SEGMENTS} with {len(questions)} questions")
