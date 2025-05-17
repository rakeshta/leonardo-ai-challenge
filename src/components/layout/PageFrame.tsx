import { Flex } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';

export function PageFrame({ children }: PropsWithChildren) {
  return (
    <Flex direction='column' minH='100vh'>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Flex>
  );
}
