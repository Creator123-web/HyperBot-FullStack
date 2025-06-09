import { useState } from 'react';

export default function PasscodeProtection() {
  const [passcode, setPasscode] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const correctPasscode = '1234'; // 🔐 You can update this to a dynamic one later

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passcode === correctPasscode) {
      setAccessGranted(true);
    } else {
      alert('❌ Wrong passcode!');
    }
  };

  if (accessGranted) {
    return (
      <div>
        <h2>✅ Access Granted!</h2>
        <p>Welcome to HyperBot AI Assistant 🎉</p>
      </div>
    );
  }

  return (
    <div>
      <h2>🔒 Enter Passcode to Continue:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={passcode}
          onChange={(e) => setPasscode(e.target.value)}
          placeholder="Enter passcode"
          required
          style={{
            padding: '8px',
            marginRight: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '8px 12px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Unlock
        </button>
      </form>
    </div>
  );
}
