import { Box, Container, Flex, Input, Text } from '@chakra-ui/react';

import Image from 'next/image';

import { ColorModeButton } from '@/components/chakra-ui/color-mode';

export default async function Page() {
  return (
    <Flex direction='column' minH='100vh'>
      {/* Header */}
      <Box w='full' borderBottomWidth={1} py={{ base: 3, md: 4 }} px={{ base: 4, md: 6 }}>
        <Container maxW='7xl'>
          <Flex gap={{ base: 4, md: 0 }} justify='space-between' align='stretch'>
            {/* Brand/Logo */}
            <Flex gap={3} align='center' justify='flex-start'>
              <Box boxSize={{ base: 8, md: 10 }} position='relative'>
                <Image src='/images/leonardo-logo.png' alt='Leonardo Logo' width='64' height='64' />
              </Box>
              <Text display={{ smDown: 'none' }} fontSize={{ base: 'lg', md: 'xl' }} fontWeight='bold'>
                Leonardo.Anime
              </Text>
            </Flex>

            {/* Search Box - Desktop */}
            <Box display={{ mdDown: 'none' }} flex={1} maxW='2xl' mx={8}>
              <Input
                placeholder='Search anime, manga or characters...'
                size='lg'
                variant='outline'
                borderRadius='full'
              />
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

          {/* Search Box - Desktop */}
          <Box display={{ md: 'none' }} flex={1} mt={2}>
            <Input placeholder='Search anime, manga or characters...' size='md' variant='outline' borderRadius='full' />
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Box flex={1} w='full' py={{ base: 8, md: 12 }}>
        <Container maxW='7xl' px={{ base: 4, md: 6 }}>
          <Flex direction='column' gap={{ base: 6, md: 8 }}>
            <Text
              fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight='bold'
              textAlign='center'
              lineHeight='shorter'
            >
              Discover Your Next Favorite Anime & Manga
            </Text>
            <Text
              color='gray.500'
              textAlign='center'
              fontSize={{ base: 'md', md: 'lg' }}
              px={{ base: 0, md: 8, lg: 16 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </Text>
          </Flex>
        </Container>
      </Box>

      {/* Footer */}
      <Box w='full' py={{ base: 4, md: 6 }} borderTopWidth={1}>
        <Container maxW='7xl' px={{ base: 4, md: 6 }}>
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
