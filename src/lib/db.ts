import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const DB_PATH = process.env.DATABASE_URL?.replace("file:", "") || path.join(process.cwd(), "data", "toolkit.db");
let db: any = null;
let dbAvailable = false;

try {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  db = new Database(DB_PATH);
  db.pragma("journal_mode = WAL");
  db.pragma("foreign_keys = ON");
  dbAvailable = true;
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY, email TEXT UNIQUE NOT NULL, name TEXT,
      password TEXT NOT NULL, avatar TEXT, plan TEXT DEFAULT "free",
      created_at TEXT DEFAULT (datetime('now')), updated_at TEXT DEFAULT (datetime('now'))
    );
  `);
} catch (e) {
  console.warn("SQLite not available, using JWT-only mode");
}

export interface User {
  id: string; email: string; name: string | null; password: string;
  avatar: string | null; plan: string; created_at: string; updated_at: string;
}
export interface UserPublic {
  id: string; email: string; name: string | null;
  plan: string; avatar: string | null; created_at: string;
}

export const users = {
  findByEmail(email: string): User | undefined {
    if (!dbAvailable) return undefined;
    return db.prepare("SELECT * FROM users WHERE email = ?").get(email) as User | undefined;
  },
  findById(id: string): User | undefined {
    if (!dbAvailable) return undefined;
    return db.prepare("SELECT * FROM users WHERE id = ?").get(id) as User | undefined;
  },
  create(data: { id: string; email: string; name?: string; password: string }): User {
    if (!dbAvailable) {
      return { id: data.id, email: data.email, name: data.name || null, password: data.password, avatar: null, plan: "free", created_at: new Date().toISOString(), updated_at: new Date().toISOString() };
    }
    db.prepare("INSERT INTO users (id, email, name, password) VALUES (?, ?, ?, ?)").run(data.id, data.email, data.name || null, data.password);
    return this.findByEmail(data.email)!;
  },
};

export default db;
