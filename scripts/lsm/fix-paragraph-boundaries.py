#!/usr/bin/env python3
"""Apply visually verified paragraph boundary fixes for study-2026-06-29."""
import json
from pathlib import Path

SEGMENTS = Path(__file__).parent / "segments-2026-06-29.json"

# Paragraph-only boundaries. Question clips marked with the lower-right "?"
# are kept out because questionVideoLSM clips are separate.
FIXES = {
    1: {"start": 24, "end": 51.5},
    2: {"start": 55, "end": 89},
    3: {"start": 98, "end": 116.1},
    4: {"start": 116.3, "end": 137.5},
    5: {"start": 142.5, "end": 178},
    6: {"start": 199.5, "end": 220},
    7: {"start": 220, "end": 259},
    8: {"start": 266, "end": 315.5},
    9: {"start": 315.5, "end": 336},
    10: {"start": 350, "end": 370},
    11: {"start": 374.5, "end": 400},
    12: {"start": 406, "end": 476},
    13: {"start": 476, "end": 522.5},
    14: {"start": 606, "end": 621.5},
    15: {"start": 621.5, "end": 663.5},
    16: {"start": 667, "end": 716},
    17: {"start": 757.5, "end": 789},
}

data = json.loads(SEGMENTS.read_text())
paras = {p["num"]: p for p in data["paragraphs"]}

print("Paragraph boundary updates:")
for n, bounds in FIXES.items():
    old = paras[n]
    print(
        f"  P{n:2d}: {old['start']}-{old['end']} ({old['end']-old['start']:.1f}s)"
        f" -> {bounds['start']}-{bounds['end']} ({bounds['end']-bounds['start']:.1f}s)"
    )
    paras[n]["start"] = bounds["start"]
    paras[n]["end"] = bounds["end"]

data["paragraphs"] = [paras[i] for i in range(1, 18)]
SEGMENTS.write_text(json.dumps(data, indent=2) + "\n")
print(f"Updated {SEGMENTS}")
