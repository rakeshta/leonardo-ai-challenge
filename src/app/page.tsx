import { Box, Container, Flex, Input, Text } from '@chakra-ui/react';

import Image from 'next/image';

import { ColorModeButton } from '@/components/ui/color-mode';

export default async function Page() {
  return (
    <Flex direction='column' minH='100vh'>
      {/* Header */}
      <Box w='full' borderBottomWidth={1} py={4} px={6}>
        <Container maxW='7xl'>
          <Flex justify='space-between' align='center'>
            {/* Brand/Logo */}
            <Flex gap={3} align='center'>
              <Box boxSize={10} position='relative'>
                <Image src='/images/leonardo-logo.png' alt='Leonardo Logo' width='64' height='64' />
              </Box>
              <Text fontSize='xl' fontWeight='bold'>
                Leonardo.Anime
              </Text>
            </Flex>

            {/* Search Box */}
            <Box flex={1} maxW='2xl' mx={8}>
              <Input
                placeholder='Search for anime, manga or characters...'
                size='lg'
                variant='outline'
                borderRadius='full'
              />
            </Box>

            {/* Profile & Theme */}
            <Flex gap={4} align='center'>
              <Flex direction='column' align='flex-end'>
                <Text fontWeight='semibold'>Guest User</Text>
                <Text fontSize='sm' color='gray.500'>
                  My Profile
                </Text>
              </Flex>
              <ColorModeButton />
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Box flex={1} w='full' py={12}>
        <Container maxW='7xl'>
          <Flex direction='column' gap={8}>
            <Text fontSize={{ base: '2xl', md: '4xl' }} fontWeight='bold' textAlign='center'>
              Discover Your Next Favorite Anime & Manga
            </Text>
            <Text color='gray.500' textAlign='center' fontSize='lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </Text>
          </Flex>
        </Container>
      </Box>

      {/* Footer */}
      <Box w='full' py={6} borderTopWidth={1}>
        <Container maxW='7xl'>
          <Flex direction='column' gap={2} align='center'>
            <Text fontSize='sm' color='gray.500'>
              Leonardo.AI coding challenge v3.5
            </Text>
            <Text fontSize='sm' color='gray.500'>
              Created by Rakesh Ayyaswami
            </Text>
          </Flex>
        </Container>
      </Box>
    </Flex>
  );
}
