#!/usr/bin/env python3
"""Shared study configuration for local LSM video scripts."""

from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any


DEFAULT_CONFIG: dict[str, Any] = {
    "expectedParagraphCount": 17,
    "questionLabels": [
        "1",
        "2",
        "3-4",
        "5",
        "6-7",
        "8-9",
        "10",
        "11",
        "12-13",
        "14-15",
        "16",
        "17",
    ],
    "joinedParagraphs": [[3, 4], [6, 7], [8, 9], [12, 13], [14, 15]],
}


def study_id_from_segments(segments_path: str | Path) -> str | None:
    match = re.match(r"segments-(\d{4}-\d{2}-\d{2})\.json$", Path(segments_path).name)
    return match.group(1) if match else None


def load_study_config(study_id: str, script_dir: str | Path) -> dict[str, Any]:
    config = DEFAULT_CONFIG.copy()
    config_path = Path(script_dir) / "study-configs" / f"{study_id}.json"
    if config_path.is_file():
        config.update(json.loads(config_path.read_text()))

    config["expectedParagraphCount"] = int(config["expectedParagraphCount"])
    config["questionLabels"] = [str(label) for label in config["questionLabels"]]
    config["joinedParagraphs"] = [
        [int(pair[0]), int(pair[1])] for pair in config["joinedParagraphs"]
    ]
    return config


def question_key_map(question_labels: list[str]) -> dict[int, str]:
    mapping: dict[int, str] = {}
    for key in question_labels:
        if "-" in key:
            start, end = (int(part) for part in key.split("-", 1))
            for number in range(start, end + 1):
                mapping[number] = key
        else:
            mapping[int(key)] = key
    return mapping


def question_filename(study_id: str, key: str) -> str:
    if "-" in key:
        start, end = key.split("-", 1)
        return f"study-{study_id}-q{int(start)}-q{int(end)}-lsm.mp4"
    return f"study-{study_id}-q{int(key):02d}-lsm.mp4"


def parse_number_range(value: str, low: int, high: int) -> list[int]:
    if value == "all":
        return list(range(low, high + 1))
    if "-" in value:
        start, end = value.split("-", 1)
        return list(range(int(start), int(end) + 1))
    return [int(value)]
