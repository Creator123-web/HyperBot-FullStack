import sqlite3 from 'sqlite3';
sqlite3.verbose();

const db = new sqlite3.Database('./hyperbot.db', (err) => {
  if (err) return console.error(err.message);
  console.log('✅ Connected to the Hyperbot SQLite database.');
});

export default db;
