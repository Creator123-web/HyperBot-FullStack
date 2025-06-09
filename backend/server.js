import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';
import aiToolsRoutes from './routes/aiTools.js';
import codingRoutes from './routes/coding.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/ai-tools', aiToolsRoutes);
app.use('/coding', codingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
