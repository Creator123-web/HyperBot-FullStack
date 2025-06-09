import PasscodeProtection from '@/components/PasscodeProtection';
import { useState } from 'react';

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);

  if (!unlocked) {
    return <PasscodeProtection onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Hyperbot AI Assistant 🚀</h1>
      <ul className="space-y-2">
        <li><a className="text-blue-600 underline" href="/tools">AI Tools Directory</a></li>
        <li><a className="text-blue-600 underline" href="/coding">Coding Practice</a></li>
        <li><a className="text-blue-600 underline" href="/shorts">Shorts Maker</a></li>
        <li><a className="text-blue-600 underline" href="/scanner">QR Code Scanner</a></li>
        <li><a className="text-blue-600 underline" href="/login">User Login</a></li>
      </ul>
    </div>
  );
}
