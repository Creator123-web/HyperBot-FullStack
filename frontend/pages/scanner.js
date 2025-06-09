import QRCodeScanner from '@/components/QRCodeScanner';
import api from '../utils/api'

export default function ScannerPage() {
  return (
    <div>
      <h1>QR Code Scanner</h1>
      <QRCodeScanner />
    </div>
  );
}
