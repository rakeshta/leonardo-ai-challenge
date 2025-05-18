import Image from 'next/image';
import Link from 'next/link';

import { Box, Container, Flex, Input, Text } from '@chakra-ui/react';

import { ColorModeButton } from '@/components/chakra-ui/color-mode';

export function Header() {
  return (
    <Box w='full' borderBottomWidth={1} py={{ base: 3, md: 4 }} px={{ base: 4, md: 6 }}>
      <Container maxW='7xl'>
        <Flex gap={{ base: 4, md: 0 }} justify='space-between' align='stretch'>
          {/* Brand/Logo */}
          <Link href='/media'>
            <Flex gap={3} align='center' justify='flex-start'>
              <Box boxSize={{ base: 8, md: 10 }} position='relative'>
                <Image src='/images/leonardo-logo.png' alt='Leonardo Logo' width='64' height='64' />
              </Box>
              <Text display={{ smDown: 'none' }} fontSize={{ base: 'lg', md: 'xl' }} fontWeight='bold'>
                Leonardo.Anime
              </Text>
            </Flex>
          </Link>

          {/* Search Box - Desktop */}
          <Box display={{ mdDown: 'none' }} flex={1} maxW='2xl' mx={8}>
            <Input placeholder='Search anime or manga...' size='lg' variant='outline' borderRadius='full' />
          </Box>

          {/* Profile & Theme */}
          <Flex gap={4} align='center' justify='flex-end'>
            {/* Profile */}
            <Flex direction='column' align={{ base: 'center', md: 'flex-end' }}>
              <Text fontWeight='semibold'>Guest User</Text>
              <Text fontSize='sm' color='gray.500'>
                My Profile
              </Text>
            </Flex>

            {/* Theme Toggle Button */}
            <ColorModeButton />
          </Flex>
        </Flex>

        {/* Search Box - Mobile */}
        <Box display={{ md: 'none' }} flex={1} mt={2}>
          <Input placeholder='Search anime or manga...' size='md' variant='outline' borderRadius='full' />
        </Box>
      </Container>
    </Box>
  );
}
