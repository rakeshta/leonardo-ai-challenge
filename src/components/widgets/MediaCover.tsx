import Image from 'next/image';

import { AspectRatio, Box, Flex, Text } from '@chakra-ui/react';

export interface MediaCoverProps {
  title: string;
  thumbnailUrl: string;
}

export function MediaCover({ title, thumbnailUrl }: MediaCoverProps) {
  return (
    <Box position='relative' cursor='pointer'>
      <Flex direction='column' gap={2}>
        <AspectRatio ratio={460 / 650} width='100%' borderRadius='lg' overflow='hidden'>
          <Image src={thumbnailUrl} alt={title} fill style={{ objectFit: 'cover' }} priority={false} />
        </AspectRatio>
        <Text
          fontSize='md'
          fontWeight='semibold'
          overflow='hidden'
          textOverflow='ellipsis'
          width='100%'
          height='3em'
          paddingX={2}
          paddingY={1}
          textAlign='center'
        >
          {title}
        </Text>
      </Flex>
    </Box>
  );
}
