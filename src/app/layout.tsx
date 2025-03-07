import { ThemeProvider } from '@/components/theme/theme-provider';
import { ThemeEffect } from '@/components/theme/theme-effect';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/utils/component';
import { ReactNode } from 'react';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EatWise',
  description: 'EatWise web app.',
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'h-screen overflow-clip')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <>
            <ThemeEffect />
            {children}
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
