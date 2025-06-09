import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, { phone, password })
      .then(res => alert('Logged in!'))
      .catch(err => alert('Invalid credentials'));
  };

  return (
    <div className="p-4">
      <input type="text" placeholder="Phone" className="border p-2 mb-2 w-full"
        value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input type="password" placeholder="Password" className="border p-2 mb-2 w-full"
        value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin} className="bg-green-600 text-white p-2 w-full">Login</button>
    </div>
  );
}
