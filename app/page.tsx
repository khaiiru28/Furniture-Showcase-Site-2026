import App from '@/src/App';
import { headers } from 'next/headers';

// Force dynamic rendering for SSR
export const dynamic = 'force-dynamic';

export default function Home() {
  return <App />;
}

