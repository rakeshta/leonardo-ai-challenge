import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import { ApolloWrapper } from '@/components/apollo';
import { Provider } from '@/components/chakra-ui/provider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Leonardo.Anime',
  description: 'Discover Your Next Favorite Anime & Manga',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={inter.className} suppressHydrationWarning>
      <head />
      <body>
        <Provider>
          <ApolloWrapper>{children}</ApolloWrapper>
        </Provider>
      </body>
    </html>
  );
}
