import crypto from "node:crypto";

/**
 * Simple in-memory rate limiter for a single instance.
 * IPs are never stored raw — only salted SHA-256 hashes kept in memory.
 */
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_PER_WINDOW = 5;

// Salt is per-process; SESSION_SECRET is used when available so hashes are
// stable across restarts within one deployment, but never reversible.
const SALT = process.env.SESSION_SECRET ?? crypto.randomBytes(16).toString("hex");

interface Bucket {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Bucket>();

export function hashIp(ip: string): string {
  return crypto.createHash("sha256").update(`${SALT}:${ip}`).digest("hex");
}

export function isRateLimited(ip: string): boolean {
  const key = hashIp(ip);
  const now = Date.now();
  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  bucket.count += 1;
  if (bucket.count > MAX_PER_WINDOW) return true;
  return false;
}

// Periodic cleanup so the map cannot grow without bound.
setInterval(() => {
  const now = Date.now();
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}, WINDOW_MS).unref();
