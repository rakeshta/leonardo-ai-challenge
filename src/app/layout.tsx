import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import { Provider } from '@/components/ui/provider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Leonardo.Anime',
  description: 'A coding challenge by Rakesh Ayyaswami',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={inter.className} suppressHydrationWarning>
      <head />
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
