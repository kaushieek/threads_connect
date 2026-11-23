import type { Metadata } from 'next';
import '@threads-connect/ui/styles.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'threads_connect — Beyond Graduation. Beyond Connections.',
  description:
    'A premium institutional community connecting alumni, students, faculty and administrators through a lifetime of opportunity and belonging.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
