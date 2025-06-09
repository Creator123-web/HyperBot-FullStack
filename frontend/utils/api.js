import axios from 'axios';

// Set your backend base URL here (use your Render backend URL)
const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://hyperbot-fullstack.onrender.com'
});

export default API;
