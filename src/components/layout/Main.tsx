import { Box, Container } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export function Main({ children }: PropsWithChildren) {
  return (
    <Box flex={1} w='full' py={{ base: 8, md: 12 }}>
      <Container maxW='7xl' px={{ base: 4, md: 6 }}>
        {children}
      </Container>
    </Box>
  );
}
