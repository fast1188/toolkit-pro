const Database = require('better-sqlite3');
const path = require('path');
const dbPath = process.argv[2] + '/dev.db';
const db = new Database(dbPath, { readonly: true });
const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
console.log('=== 数据库表 ===');
tables.forEach(t => console.log('  - ' + t.name));
for (const t of tables) {
  console.log('\n=== ' + t.name + ' ===');
  try {
    const rows = db.prepare('SELECT * FROM ' + t.name).all();
    console.log('记录数: ' + rows.length);
    if (rows.length > 0) {
      console.log('列: ' + Object.keys(rows[0]).join(', '));
      rows.forEach((r, i) => console.log('  [' + (i+1) + '] ' + JSON.stringify(r)));
    } else {
      console.log('  (空表)');
    }
  } catch (e) {
    console.log('  读取失败: ' + e.message);
  }
}
db.close();