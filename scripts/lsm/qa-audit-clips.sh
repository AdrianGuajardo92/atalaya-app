#!/usr/bin/env bash
# QA audit: extract start/mid/end frames for all LSM clips + compare duration vs JSON
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
STUDY_ID="${STUDY_ID:-2026-06-29}"
OUT_DIR="$REPO_ROOT/public/videos/study-$STUDY_ID"
SEGMENTS="$SCRIPT_DIR/segments-${STUDY_ID}.json"
QA_DIR="$SCRIPT_DIR/qa-audit/${STUDY_ID}"
REPORT="$QA_DIR/report.csv"

mkdir -p "$QA_DIR"

if [[ ! -f "$SCRIPT_DIR/clip-at-time" ]]; then
  swiftc -O -o "$SCRIPT_DIR/clip-at-time" "$SCRIPT_DIR/clip-at-time.swift" \
    -framework AVFoundation -framework AppKit
fi

python3 - "$SEGMENTS" "$OUT_DIR" "$QA_DIR" "$REPORT" "$SCRIPT_DIR/clip-at-time" <<'PY'
import json, os, subprocess, sys

segments_path, out_dir, qa_dir, report_path, clip_at_time = sys.argv[1:6]

with open(segments_path) as f:
    data = json.load(f)

paras = {p["num"]: p for p in data["paragraphs"]}
questions = {q["num"]: q for q in data["questions"]}

JOINED = [(3,4),(6,7),(8,9),(12,13),(14,15)]
Q_KEYS = {
    1:"1",2:"2",3:"3-4",4:"3-4",5:"5",6:"6-7",7:"6-7",
    8:"8-9",9:"8-9",10:"10",11:"11",12:"12-13",13:"12-13",
    14:"14-15",15:"14-15",16:"16",17:"17",
}

def q_fname(n):
    key = Q_KEYS[n]
    if "-" in key:
        a,b = key.split("-")
        return f"study-{STUDY_ID}-q{a}-q{b}-lsm.mp4"
    return f"study-{STUDY_ID}-q{n:02d}-lsm.mp4"

STUDY_ID = "2026-06-29"

clips = []
for n in range(1, 18):
    clips.append((f"p{n:02d}", f"study-{STUDY_ID}-p{n:02d}-lsm.mp4", paras[n]["end"]-paras[n]["start"]))
for a,b in JOINED:
    start = paras[a]["start"]
    end = paras[b]["end"]
    clips.append((f"p{a:02d}-p{b:02d}", f"study-{STUDY_ID}-p{a:02d}-p{b:02d}-lsm.mp4", end-start))
seen_q = set()
for n in range(1, 18):
    key = Q_KEYS[n]
    if key in seen_q:
        continue
    seen_q.add(key)
    q = questions[key]
    fname = q_fname(n)
    clips.append((f"q-{key}", fname, q["end"]-q["start"]))

rows = ["clip,expected_dur,file_dur,delta,status"]
failures = []

for label, fname, expected in clips:
    path = os.path.join(out_dir, fname)
    subdir = os.path.join(qa_dir, label.replace(",", "_"))
    os.makedirs(subdir, exist_ok=True)
    if not os.path.isfile(path):
        rows.append(f"{label},{expected:.1f},MISSING,,FAIL")
        failures.append(label)
        continue
    # get duration via clip-at-time at 0
    r = subprocess.run([clip_at_time, path, "0", os.path.join(subdir, "start.png")],
                       capture_output=True, text=True)
    file_dur = None
    for line in r.stdout.splitlines():
        if line.startswith("OK clip="):
            file_dur = float(line.split("=")[1].split("s")[0].replace("clip=",""))
    if file_dur is None:
        # parse from swift output format "OK clip=40.0s at=..."
        import re
        m = re.search(r"clip=([\d.]+)s", r.stdout)
        if m:
            file_dur = float(m.group(1))
    if file_dur is None:
        rows.append(f"{label},{expected:.1f},?, ,FAIL")
        failures.append(label)
        continue
    delta = abs(file_dur - expected)
    status = "OK" if delta <= 0.5 else "DUR_MISMATCH"
    if status != "OK":
        failures.append(label)
    rows.append(f"{label},{expected:.1f},{file_dur:.1f},{delta:.1f},{status}")
    mid = max(0.3, file_dur / 2)
    end_t = max(0.3, file_dur - 0.5)
    subprocess.run([clip_at_time, path, str(mid), os.path.join(subdir, "mid.png")],
                   capture_output=True)
    subprocess.run([clip_at_time, path, str(end_t), os.path.join(subdir, "end.png")],
                   capture_output=True)

with open(report_path, "w") as f:
    f.write("\n".join(rows) + "\n")

print(f"Wrote {report_path}")
print(f"Clips checked: {len(clips)}, issues: {len(failures)}")
for r in rows[1:]:
    if "FAIL" in r or "DUR_MISMATCH" in r:
        print(" ", r)
PY
