import { Flex, Text } from '@chakra-ui/react';

import { PageFrame } from '@/components/layout/PageFrame';

export default async function Page() {
  return (
    <PageFrame>
      <Flex direction='column' gap={{ base: 6, md: 8 }}>
        <Text
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
          fontWeight='bold'
          textAlign='center'
          lineHeight='shorter'
        >
          Discover Your Next Favorite Anime & Manga
        </Text>
        <Text color='gray.500' textAlign='center' fontSize={{ base: 'md', md: 'lg' }} px={{ base: 0, md: 8, lg: 16 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </Text>
      </Flex>
    </PageFrame>
  );
}
