import Image from 'next/image';

import { AspectRatio, Box, Flex, Text } from '@chakra-ui/react';

import { DeepPartial } from '@apollo/client/utilities';

import { Media } from '@/__generated__/graphql';

export interface MediaCoverProps {
  media: DeepPartial<Media>;
}

export function MediaCover({ media }: MediaCoverProps) {
  return (
    <Box position='relative' cursor='pointer'>
      <Flex direction='column' gap={2}>
        <AspectRatio ratio={460 / 650} width='100%' borderRadius='lg' overflow='hidden'>
          <Image
            src={media.coverImage?.extraLarge ?? ''}
            alt={media.title?.english ?? 'Cover image'}
            fill
            style={{ objectFit: 'cover' }}
            priority={false}
          />
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
          {media.title?.english ?? 'Unknown Title'}
        </Text>
      </Flex>
    </Box>
  );
}
