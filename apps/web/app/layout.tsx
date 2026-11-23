import type { Metadata } from 'next';
import '@threads-connect/ui/styles.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'threads_connect — conversations, connected',
  description: 'A calmer way to bring conversations, context, and people together.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
