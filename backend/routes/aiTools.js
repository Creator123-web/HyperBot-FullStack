import express from 'express';
import db from '../models/database.js';
const router = express.Router();

router.get('/', (req, res) => {
  db.all('SELECT * FROM ai_tools', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

export default router;
