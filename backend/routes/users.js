import express from 'express';
import db from '../models/database.js';
const router = express.Router();

// Register
router.post('/register', (req, res) => {
  const { phone, password } = req.body;
  db.run('INSERT INTO users(phone, password) VALUES(?, ?)', [phone, password], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'User registered successfully' });
  });
});

// Login
router.post('/login', (req, res) => {
  const { phone, password } = req.body;
  db.get('SELECT * FROM users WHERE phone = ? AND password = ?', [phone, password], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(401).json({ error: 'Invalid credentials' });
    res.json({ token: 'fake-jwt-token', user: row });
  });
});

export default router;
