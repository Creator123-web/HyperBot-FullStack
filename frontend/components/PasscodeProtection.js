import { useState } from 'react';

export default function PasscodeProtection({ onUnlock }) {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');

  const checkPasscode = () => {
    if (passcode === '1234') {
      onUnlock();
    } else {
      setError('Incorrect passcode!');
    }
  };

  return (
    <div className="p-4 border rounded w-80 mx-auto mt-20 text-center">
      <input
        type="password"
        value={passcode}
        onChange={(e) => setPasscode(e.target.value)}
        placeholder="Enter passcode"
        className="p-2 border mb-2 w-full"
      />
      <button onClick={checkPasscode} className="p-2 bg-blue-500 text-white w-full">Unlock</button>
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
}
