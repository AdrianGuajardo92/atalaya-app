#!/usr/bin/env python3
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SKILLS_DIR = ROOT / ".agents" / "skills"
VALIDATOR = SKILLS_DIR / "skill-creator" / "scripts" / "quick_validate.py"


def main() -> int:
    failed: list[str] = []

    if not SKILLS_DIR.is_dir():
        print(f"Error: no existe el directorio de skills: {SKILLS_DIR}", file=sys.stderr)
        return 1

    if not VALIDATOR.is_file():
        print(f"Error: no existe el validador base: {VALIDATOR}", file=sys.stderr)
        return 1

    skill_dirs = sorted(path for path in SKILLS_DIR.iterdir() if path.is_dir())
    if not skill_dirs:
        print(f"Error: no hay skills en {SKILLS_DIR}", file=sys.stderr)
        return 1

    for skill_dir in skill_dirs:
        skill_md = skill_dir / "SKILL.md"
        if not skill_md.exists():
            failed.append(skill_dir.name)
            print(f"FAIL {skill_dir.name}")
            print("Falta SKILL.md en la carpeta raíz de la skill.")
            continue

        result = subprocess.run(
            [sys.executable, str(VALIDATOR), str(skill_dir)],
            cwd=ROOT,
            text=True,
            capture_output=True,
            check=False,
        )
        if result.returncode == 0:
            print(f"OK {skill_dir.name}")
        else:
            failed.append(skill_dir.name)
            print(f"FAIL {skill_dir.name}")
            print((result.stdout + result.stderr).strip())

    if failed:
        print(f"\nskills:validate falló en: {', '.join(failed)}")
        return 1

    print("\nskills:validate limpio.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
