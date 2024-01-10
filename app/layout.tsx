import { cn } from '@/lib/utils';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    template: '%s | Punch',
    default: 'Punch',
  },
  description: 'The next generation streaming platform.',
  metadataBase: new URL('https://punch.coreyburns.dev'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            `${inter.variable} min-h-screen bg-background font-sans antialiased`
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
