const Database = require('better-sqlite3');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const dbPath = path.join(__dirname, '..', 'data', 'toolkit.db');
const dir = path.dirname(dbPath);
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
const db = new Database(dbPath);
db.pragma('journal_mode = WAL');
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY, email TEXT UNIQUE NOT NULL, name TEXT,
    password TEXT NOT NULL, avatar TEXT, plan TEXT DEFAULT 'free',
    stripe_id TEXT UNIQUE, created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
  );
  CREATE TABLE IF NOT EXISTS tool_usage (
    id TEXT PRIMARY KEY, user_id TEXT NOT NULL, tool_id TEXT NOT NULL,
    tool_name TEXT NOT NULL, input TEXT, output TEXT,
    created_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
  CREATE TABLE IF NOT EXISTS tools (
    id TEXT PRIMARY KEY, slug TEXT UNIQUE NOT NULL, name TEXT NOT NULL,
    description TEXT NOT NULL, category TEXT NOT NULL, icon TEXT,
    is_premium INTEGER DEFAULT 0, is_active INTEGER DEFAULT 1,
    "order" INTEGER DEFAULT 0, created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
  );
`);
const toolsData = [
  { slug: 'text-counter', name: '字数统计', description: '快速统计文本的字数、字符数、行数等', category: '文本工具', icon: 'Hash', is_premium: 0, order: 1 },
  { slug: 'json-formatter', name: 'JSON 格式化', description: '在线 JSON 格式化、压缩、验证', category: '开发工具', icon: 'Braces', is_premium: 0, order: 2 },
  { slug: 'qr-generator', name: '二维码生成器', description: '免费在线生成二维码', category: '生成工具', icon: 'QrCode', is_premium: 0, order: 3 },
  { slug: 'base64', name: 'Base64 编解码', description: '在线 Base64 编码和解码', category: '编码工具', icon: 'Binary', is_premium: 0, order: 4 },
  { slug: 'color-converter', name: '颜色转换器', description: 'HEX、RGB、HSL 颜色格式互转', category: '设计工具', icon: 'Palette', is_premium: 0, order: 5 },
  { slug: 'markdown-preview', name: 'Markdown 预览', description: '实时 Markdown 编辑和预览', category: '文本工具', icon: 'FileText', is_premium: 0, order: 6 },
  { slug: 'password-generator', name: '密码生成器', description: '生成安全随机密码', category: '安全工具', icon: 'Shield', is_premium: 0, order: 7 },
  { slug: 'text-diff', name: '文本对比', description: '在线文本差异对比', category: '文本工具', icon: 'GitCompare', is_premium: 1, order: 8 },
  { slug: 'hash-generator', name: '哈希生成器', description: 'SHA-1/256 哈希值计算', category: '安全工具', icon: 'Fingerprint', is_premium: 1, order: 9 },
  { slug: 'lorem-ipsum', name: '占位文本生成', description: '生成 Lorem Ipsum 占位文本', category: '生成工具', icon: 'Type', is_premium: 0, order: 10 },
  { slug: 'url-encoder', name: 'URL 编解码', description: '在线 URL 编码和解码', category: '编码工具', icon: 'Link', is_premium: 0, order: 11 },
  { slug: 'timestamp', name: '时间戳转换', description: 'Unix 时间戳与日期互转', category: '开发工具', icon: 'Clock', is_premium: 0, order: 12 },
];
const insert = db.prepare("INSERT OR REPLACE INTO tools (id, slug, name, description, category, icon, is_premium, \"order\") VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
const tx = db.transaction(() => {
  for (const t of toolsData) insert.run(uuidv4(), t.slug, t.name, t.description, t.category, t.icon, t.is_premium, t.order);
});
tx();
console.log("已预置 " + toolsData.length + " 个工具");
db.close();