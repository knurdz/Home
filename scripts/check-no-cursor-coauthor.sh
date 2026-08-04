#!/usr/bin/env sh
# Fail if commit messages contain Cursor agent Co-authored-by trailers.
set -eu

RANGE="${1:-HEAD}"

if ! git rev-parse --verify "${RANGE}" >/dev/null 2>&1; then
  echo "ERROR: git ref not found: ${RANGE}" >&2
  exit 1
fi

offending="$(git log "${RANGE}" --format=%H | while read -r sha; do
  [ -n "${sha}" ] || continue
  if git log -1 --format=%B "${sha}" | grep -qE 'cursoragent@cursor\.com'; then
    echo "${sha}"
  fi
done)"

if [ -n "${offending}" ]; then
  echo "ERROR: Cursor co-author trailer found in commit message(s):" >&2
  echo "${offending}" | while read -r sha; do
    [ -n "${sha}" ] || continue
    echo "  ${sha}" >&2
    git log -1 --format=%B "${sha}" | grep -E 'cursoragent@cursor\.com' || true
  done >&2
  echo "Remove Co-authored-by lines referencing cursoragent@cursor.com before pushing." >&2
  exit 1
fi

echo "OK: no Cursor co-author trailers in ${RANGE}."
