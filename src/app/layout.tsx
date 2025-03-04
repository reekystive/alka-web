import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alka',
  description: 'Alka web app.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`bg-well-read-50 text-slate-950
        dark:bg-well-read-950 dark:text-well-read-100 ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
