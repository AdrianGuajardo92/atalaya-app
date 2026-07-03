#!/usr/bin/env bash
# Sincroniza skills canónicas (.agents/skills/) al espejo de Cursor (.claude/skills/).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/.agents/skills"
DEST="$ROOT/.claude/skills"

if [[ ! -d "$SRC" ]]; then
  echo "Error: no existe $SRC" >&2
  exit 1
fi

mkdir -p "$DEST"

rsync -a --delete \
  --exclude '.DS_Store' \
  "$SRC/" "$DEST/"

echo "Skills sincronizadas: $SRC -> $DEST"
