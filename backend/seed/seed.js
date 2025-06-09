import db from '../models/database.js';

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, phone TEXT, password TEXT)');
  db.run('CREATE TABLE IF NOT EXISTS ai_tools(id INTEGER PRIMARY KEY, name TEXT, description TEXT, url TEXT)');
  db.run('CREATE TABLE IF NOT EXISTS coding_problems(id INTEGER PRIMARY KEY, title TEXT, difficulty TEXT, description TEXT)');

  const insertTool = db.prepare('INSERT INTO ai_tools(name, description, url) VALUES (?, ?, ?)');
  for (let i = 1; i <= 100; i++) {
    insertTool.run(`AI Tool ${i}`, `Description for AI Tool ${i}`, `https://example.com/tool${i}`);
  }
  insertTool.finalize();

  const insertProblem = db.prepare('INSERT INTO coding_problems(title, difficulty, description) VALUES (?, ?, ?)');
  for (let i = 1; i <= 50; i++) {
    const difficulty = i % 3 === 0 ? 'Hard' : i % 2 === 0 ? 'Medium' : 'Easy';
    insertProblem.run(`Problem ${i}`, difficulty, `Solve Problem ${i}`);
  }
  insertProblem.finalize();

  console.log('✅ Seed data inserted successfully.');
});

db.close();
