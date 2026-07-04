#!/usr/bin/env python3
"""Build legacy paragraph segments JSON from dump-scan.csv with robust smoothing.

The generated questions[] use old OCR/br heuristics for orientation only.
Do not use them as the source of truth for questionVideoLSM; use
detect-questions.sh + build-question-segments.py, which detect the ? icon.
"""
import csv
import json
import sys
from pathlib import Path

CSV = Path(sys.argv[1] if len(sys.argv) > 1 else "scan.csv")
OUT = Path(sys.argv[2] if len(sys.argv) > 2 else "segments-2026-06-29.json")
DURATION = float(sys.argv[3] if len(sys.argv) > 3 else 827.861)

rows = []
with CSV.open() as f:
    reader = csv.DictReader(f)
    for r in reader:
        rows.append({
            "sec": int(r["second"]),
            "para": int(r["para"]),
            "question": int(r["question"]),
            "br": int(r["br"]),
            "tl": r["tl"],
        })

n = len(rows)

# Smooth paragraph: 5s window mode of non-zero para readings
para_smooth = [0] * n
for i in range(n):
    counts = {}
    for j in range(max(0, i - 2), min(n, i + 3)):
        p = rows[j]["para"]
        if p > 0:
            counts[p] = counts.get(p, 0) + 1
    if counts:
        para_smooth[i] = max(counts, key=counts.get)

# Forward-fill paragraph numbers
last = 0
for i in range(n):
    if para_smooth[i] > 0:
        last = para_smooth[i]
    elif last > 0:
        para_smooth[i] = last

# Detect paragraph boundaries: when smoothed para increases (monotonic expected)
# Build segments from increases in paragraph number
boundaries = [0]
current = para_smooth[0] if para_smooth[0] else 1
for i in range(1, n):
    p = para_smooth[i]
    if p > current and p == current + 1:
        boundaries.append(i)
        current = p
    elif p > current + 1:
        # jumped - accept if stable for 5s
        stable = all(para_smooth[j] == p for j in range(i, min(n, i + 5)))
        if stable:
            boundaries.append(i)
            current = p

boundaries.append(n)

# If not 17 segments, use fixed split from known change points via diff
if len(boundaries) - 1 != 17:
    # Find all seconds where para changes after smoothing with min segment 20s
    boundaries = [0]
    current = para_smooth[0] or 1
    last_boundary = 0
    for i in range(1, n):
        p = para_smooth[i]
        if p > 0 and p != current and (i - last_boundary) >= 15:
            boundaries.append(i)
            current = p
            last_boundary = i
    boundaries.append(n)

    # Renumber sequentially to 17
    segs = []
    for idx in range(len(boundaries) - 1):
        start = boundaries[idx]
        end = boundaries[idx + 1]
        segs.append({"num": idx + 1, "start": float(start), "end": float(end)})

    # Adjust count to exactly 17
    if len(segs) > 17:
        # merge smallest adjacent segments
        while len(segs) > 17:
            min_i = min(range(len(segs) - 1), key=lambda i: segs[i]["end"] - segs[i]["start"])
            segs[min_i]["end"] = segs[min_i + 1]["end"]
            segs.pop(min_i + 1)
        for i, s in enumerate(segs):
            s["num"] = i + 1
    elif len(segs) < 17:
        # split longest segments
        while len(segs) < 17:
            i = max(range(len(segs)), key=lambda j: segs[j]["end"] - segs[j]["start"])
            mid = (segs[i]["start"] + segs[i]["end"]) / 2
            new = {"num": 0, "start": mid, "end": segs[i]["end"]}
            segs[i]["end"] = mid
            segs.insert(i + 1, new)
        for i, s in enumerate(segs):
            s["num"] = i + 1

    paragraphs = segs
else:
    paragraphs = [
        {"num": i + 1, "start": float(boundaries[i]), "end": float(boundaries[i + 1])}
        for i in range(17)
    ]

# Fix last end to duration
paragraphs[-1]["end"] = DURATION

# Legacy question segments: kept for old/manual orientation only.
# Do not use this br > 500 heuristic for questionVideoLSM.
Q_LABELS = ["1", "2", "3-4", "5", "6-7", "8-9", "10", "11", "12-13", "14-15", "16", "17"]
questions = []
for i, label in enumerate(Q_LABELS):
    p_start = paragraphs[i]["start"] if i < len(paragraphs) else 0
    # Question precedes paragraph: look back from paragraph start
    q_end = p_start
    q_start = max(0, q_end - 20)
    # Refine: find question flag or br spike before paragraph
    search_from = max(0, int(p_start) - 30)
    search_to = int(p_start)
    best_start = q_start
    for j in range(search_from, search_to):
        if rows[j]["question"] or rows[j]["br"] > 500:
            best_start = j
            break
    if i == 0:
        best_start = 0
    questions.append({
        "num": label,
        "start": float(best_start),
        "end": float(max(best_start + 3, min(q_end, best_start + 18))),
    })

output = {"duration": DURATION, "paragraphs": paragraphs, "questions": questions}
OUT.write_text(json.dumps(output, indent=2))
print(f"Wrote {OUT}: {len(paragraphs)} paragraphs, {len(questions)} questions")
for p in paragraphs:
    dur = p["end"] - p["start"]
    print(f"  P{p['num']:2d}: {p['start']:6.0f}-{p['end']:6.0f} ({dur:5.0f}s)")
