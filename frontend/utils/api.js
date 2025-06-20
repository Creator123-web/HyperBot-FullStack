import axios from 'axios';

// Set your backend base URL here (use your Render backend URL)
const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
});

export default API;
