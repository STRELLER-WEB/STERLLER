#!/bin/bash
# Post-merge setup: runs automatically after a task merge.
set -e

# Install any new dependencies (no-op when lockfile is unchanged).
npm install --no-audit --no-fund

# SQLite schema is created/migrated in code at server startup (server/db.ts),
# so no separate migration step is needed here.
