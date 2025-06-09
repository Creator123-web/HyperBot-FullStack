import React from 'react';
import PasscodeProtection from '@/components/PasscodeProtection';

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Hyperbot AI Assistant 🚀</h1>
      <PasscodeProtection onUnlock={() => alert('Unlocked!')} />
    </div>
  );
}
