import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, { phone, password })
      .then(res => alert('User registered!'))
      .catch(err => alert('Error registering user'));
  };

  return (
    <div className="p-4">
      <input type="text" placeholder="Phone" className="border p-2 mb-2 w-full"
        value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input type="password" placeholder="Password" className="border p-2 mb-2 w-full"
        value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister} className="bg-blue-600 text-white p-2 w-full">Register</button>
    </div>
  );
}
