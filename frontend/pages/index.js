import PasscodeProtection from '@/components/PasscodeProtection';
import api from '../utils/api'

export default function Home() {
  return (
    <div>
      <h1>HyperBot AI Assistant</h1>
      <PasscodeProtection />
    </div>
  );
}
