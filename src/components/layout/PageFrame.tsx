import { ReactNode } from 'react';

import { Flex } from '@chakra-ui/react';

import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';

export interface PageFrameProps {
  searchBar?: boolean;
  children?: ReactNode;
}

export function PageFrame({ searchBar, children }: PageFrameProps) {
  return (
    <Flex direction='column' minH='100vh'>
      <Header searchBar={searchBar} />
      <Main>{children}</Main>
      <Footer />
    </Flex>
  );
}
