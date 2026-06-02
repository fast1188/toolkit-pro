import Database from 'better-sqlite3';
import path from 'path';

const DB_PATH = process.env.DATABASE_URL?.replace('file:', '') || path.join(process.cwd(), 'data', 'toolkit.db');

// Ensure data directory exists
import fs from 'fs';
const dir = path.dirname(DB_PATH);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const db = new Database(DB_PATH);

// Enable WAL mode for better concurrent performance
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

// Initialize tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    name TEXT,
    password TEXT NOT NULL,
    avatar TEXT,
    plan TEXT DEFAULT 'free',
    stripe_id TEXT UNIQUE,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS tool_usage (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    tool_id TEXT NOT NULL,
    tool_name TEXT NOT NULL,
    input TEXT,
    output TEXT,
    created_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS subscriptions (
    id TEXT PRIMARY KEY,
    user_id TEXT UNIQUE NOT NULL,
    stripe_sub_id TEXT UNIQUE,
    plan TEXT DEFAULT 'free',
    status TEXT DEFAULT 'active',
    current_period_end TEXT,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS tools (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    icon TEXT,
    is_premium INTEGER DEFAULT 0,
    is_active INTEGER DEFAULT 1,
    "order" INTEGER DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
  );
`);

// Type-safe helper functions
export interface User {
  id: string;
  email: string;
  name: string | null;
  password: string;
  avatar: string | null;
  plan: string;
  stripe_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserPublic {
  id: string;
  email: string;
  name: string | null;
  plan: string;
  avatar: string | null;
  created_at: string;
}

export const users = {
  findByEmail(email: string): User | undefined {
    return db.prepare('SELECT * FROM users WHERE email = ?').get(email) as User | undefined;
  },

  findById(id: string): User | undefined {
    return db.prepare('SELECT * FROM users WHERE id = ?').get(id) as User | undefined;
  },

  findByIdPublic(id: string): UserPublic | undefined {
    return db.prepare('SELECT id, email, name, plan, avatar, created_at FROM users WHERE id = ?').get(id) as UserPublic | undefined;
  },

  create(data: { id: string; email: string; name?: string; password: string }): User {
    const stmt = db.prepare('INSERT INTO users (id, email, name, password) VALUES (?, ?, ?, ?)');
    stmt.run(data.id, data.email, data.name || null, data.password);
    return this.findById(data.id)!;
  },
};

export const toolUsage = {
  create(data: { id: string; userId: string; toolId: string; toolName: string; input?: string; output?: string }) {
    const stmt = db.prepare('INSERT INTO tool_usage (id, user_id, tool_id, tool_name, input, output) VALUES (?, ?, ?, ?, ?, ?)');
    stmt.run(data.id, data.userId, data.toolId, data.toolName, data.input || null, data.output || null);
  },

  findByUserId(userId: string) {
    return db.prepare('SELECT * FROM tool_usage WHERE user_id = ? ORDER BY created_at DESC').all(userId);
  },

  countByUserId(userId: string) {
    return (db.prepare('SELECT COUNT(*) as count FROM tool_usage WHERE user_id = ?').get(userId) as { count: number }).count;
  },
};

export default db;
