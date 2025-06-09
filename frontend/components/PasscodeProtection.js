import React, { useState } from 'react';

const PasscodeProtection = ({ onUnlock }) => {
  const [passcode, setPasscode] = useState('');

  const handleUnlock = () => {
    if (passcode === '1234') {
      onUnlock();
    } else {
      alert('Incorrect passcode!');
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <input
        type="password"
        className="border p-2 mb-4"
        placeholder="Enter Passcode"
        value={passcode}
        onChange={(e) => setPasscode(e.target.value)}
      />
      <button onClick={handleUnlock} className="bg-blue-500 text-white px-4 py-2 rounded">
        Unlock
      </button>
    </div>
  );
};

export default PasscodeProtection;
