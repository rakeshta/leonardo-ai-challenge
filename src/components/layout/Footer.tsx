import { Box, Container, Flex, Text } from '@chakra-ui/react';

export function Footer() {
  return (
    <Box w='full' py={{ base: 4, md: 6 }} borderTopWidth={1}>
      <Container maxW='7xl' px={{ base: 4, md: 6 }} border={1}>
        <Flex direction='column' gap={2} align='center'>
          <Text fontSize='sm' color='gray.500'>
            Leonardo.AI coding challenge (v3.5)
          </Text>
          <Text fontSize='sm' color='gray.500'>
            Created by Rakesh Ayyaswami
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
