import type { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'Atendimento online',
  robots: {
    index: false,
    follow: true,
  },
};

export default function ChatPage() {
  return <ClientPage />;
}