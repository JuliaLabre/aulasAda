const sqlite3 = require('sqlite3').verbose(); 

const db = new sqlite3.Database("exemplo.db");

db.serialize(() => {
  db.run(`
        CREATE TABLE IF NOT EXISTS exemplo (
            id INTEGER PRIMARY KEY,
            nome TEXT,
            idade INTEGER,
            email TEXT UNIQUE
        )
    `);
});

db.close();