import { useState } from 'react';
import { QRCode } from 'qrcode.react';

export default function QRCodeScanner() {
  const [text, setText] = useState('');

  return (
    <div className="p-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text for QR"
        className="p-2 border mb-2"
      />
      <div>
        {text && <QRCode value={text} />}
      </div>
    </div>
  );
}
