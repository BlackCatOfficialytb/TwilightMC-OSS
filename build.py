#!/usr/bin/env python3
"""TwilightMC build helper - run with the Windows launcher: `py build.py <command>`.

  (default)  frontend dist + `cargo build` (debug profile)
  ui         frontend only (`npm run build` in crates/twilight-ui/ui)
  release    frontend dist + `cargo build --release`
  gates      the CI quality gates: fmt --check / clippy -D warnings / test
  pack       release + a CI-styled zip under `dist/` (exe + docs, sha256)
  all        gates + release + pack

Every step streams its output plainly; the first failing one aborts the script
with its exit code so `py build.py all` can stand in for a CI run locally.
"""

from __future__ import annotations

import argparse
import hashlib
import re
import shutil
import subprocess
import sys
import zipfile
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent
UI = ROOT / "crates" / "twilight-ui" / "ui"
DIST = ROOT / "dist"

# files a CI snapshot zip also carries (missing ones are skipped silently)
STAGED_DOCS = ("README.md", "LICENSE.md", "LICENSE_AGPL", "LICENSE_APACHE", "VERSION.md")


def which(name: str) -> str:
    """Full path of a tool; resolves npm.cmd / cargo.exe through PATHEXT."""
    path = shutil.which(name)
    if not path:
        sys.exit(f"error: `{name}` not found on PATH")
    return path


def run(cmd: list[str], cwd: Path = ROOT) -> None:
    print(f"$ {' '.join(cmd)}" + ("" if cwd == ROOT else f"  (cwd: {cwd.relative_to(ROOT)})"))
    try:
        proc = subprocess.run(cmd, cwd=cwd)
    except KeyboardInterrupt:
        sys.exit(130)
    if proc.returncode != 0:
        sys.exit(f"error: step failed with exit code {proc.returncode}")


def ui() -> None:
    run([which("npm"), "run", "build"], cwd=UI)


def build(release: bool) -> None:
    cmd = [which("cargo"), "build"]
    if release:
        cmd.append("--release")
    run(cmd)


def gates() -> None:
    run([which("cargo"), "fmt", "--all", "--", "--check"])
    run([which("cargo"), "clippy", "--workspace", "--all-targets", "--", "-D", "warnings"])
    run([which("cargo"), "test", "--workspace"])


def workspace_version() -> str:
    text = (ROOT / "Cargo.toml").read_text(encoding="utf-8")
    match = re.search(r'^version\s*=\s*"([^"]+)"', text, re.MULTILINE)
    if not match:
        sys.exit("error: no version key found in the root Cargo.toml")
    return match.group(1)


def platform_tag() -> str:
    # mirrors the CI suffix taxonomy for the host this runs on
    return {
        "win32": "windows-msvc-x86_64",
        "linux": "linux-gcc-x86_64",
        "darwin": "macos-aarch64",
    }.get(sys.platform, "local")


def binary_names() -> list[str]:
    return ["twilight-ui.exe", "twilight.exe"] if sys.platform == "win32" else ["twilight-ui", "twilight"]


def pack() -> None:
    version = workspace_version()
    date = datetime.now(timezone.utc).strftime("%d%m%Y")
    sha = subprocess.run(
        [which("git"), "rev-parse", "--short", "HEAD"],
        capture_output=True,
        text=True,
        check=True,
    ).stdout.strip()

    names = [n for n in binary_names() if (ROOT / "target" / "release" / n).exists()]
    if not names:
        sys.exit("error: no release binaries under target/release - build first")

    DIST.mkdir(exist_ok=True)
    zip_path = DIST / f"twilight-snapshot-v{version}-{date}-{sha}-{platform_tag()}.zip"
    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zf:
        for name in names:
            zf.write(ROOT / "target" / "release" / name, name)
        for doc in STAGED_DOCS:
            if (ROOT / doc).exists():
                zf.write(ROOT / doc, doc)

    digest = hashlib.sha256(zip_path.read_bytes()).hexdigest()
    print(f"\npacked  {zip_path}")
    print(f"sha256  {digest}")


def main() -> None:
    parser = argparse.ArgumentParser(description="TwilightMC build helper")
    parser.add_argument(
        "command",
        nargs="?",
        default="debug",
        choices=["debug", "ui", "release", "gates", "pack", "all"],
        help="debug (default) | ui | release | gates | pack | all",
    )
    parser.add_argument("--no-ui", action="store_true", help="skip the frontend build")
    args = parser.parse_args()

    if args.command == "gates":
        gates()
        return
    if args.command == "ui":
        ui()
        return

    release = args.command in ("release", "pack", "all")
    if args.command == "all":
        gates()
    if not args.no_ui:
        ui()
    build(release)
    if args.command in ("pack", "all"):
        pack()


if __name__ == "__main__":
    main()
