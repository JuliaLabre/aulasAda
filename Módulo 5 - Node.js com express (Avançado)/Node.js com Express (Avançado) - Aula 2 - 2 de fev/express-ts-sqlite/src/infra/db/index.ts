import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('./database.db');
db.serialize(() => {
db.run("CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price INTEGER)");
});
export default db;