import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";

const DATA_DIR = path.resolve(process.cwd(), "data");
fs.mkdirSync(DATA_DIR, { recursive: true });

const db = new Database(path.join(DATA_DIR, "inquiries.db"));
db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE IF NOT EXISTS inquiries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TEXT NOT NULL,
    name TEXT NOT NULL,
    organisation TEXT NOT NULL,
    email TEXT NOT NULL,
    location TEXT,
    inquiry_type TEXT NOT NULL,
    message TEXT NOT NULL,
    locale TEXT NOT NULL,
    user_agent TEXT,
    status TEXT NOT NULL DEFAULT 'new'
  );
`);

export interface InquiryRecord {
  name: string;
  organisation: string;
  email: string;
  location: string | null;
  inquiryType: string;
  message: string;
  locale: string;
  userAgent: string | null;
}

const insertStmt = db.prepare(`
  INSERT INTO inquiries (created_at, name, organisation, email, location, inquiry_type, message, locale, user_agent, status)
  VALUES (@createdAt, @name, @organisation, @email, @location, @inquiryType, @message, @locale, @userAgent, 'new')
`);

export function saveInquiry(record: InquiryRecord): number {
  const result = insertStmt.run({
    createdAt: new Date().toISOString(),
    ...record,
  });
  return Number(result.lastInsertRowid);
}

/**
 * GDPR retention: the published privacy policy promises inquiry data is
 * deleted within 24 months. Enforce it here — runs at startup and daily.
 */
const RETENTION_MONTHS = 24;
const deleteExpiredStmt = db.prepare(`DELETE FROM inquiries WHERE created_at < ?`);

export function purgeExpiredInquiries(): number {
  const cutoff = new Date();
  cutoff.setMonth(cutoff.getMonth() - RETENTION_MONTHS);
  const result = deleteExpiredStmt.run(cutoff.toISOString());
  if (result.changes > 0) {
    console.log(`Retention: deleted ${result.changes} inquiries older than ${RETENTION_MONTHS} months.`);
  }
  return result.changes;
}

export function startRetentionSchedule(): void {
  purgeExpiredInquiries();
  const timer = setInterval(purgeExpiredInquiries, 24 * 60 * 60 * 1000);
  timer.unref();
}
