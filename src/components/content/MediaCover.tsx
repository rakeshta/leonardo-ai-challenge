import Image from 'next/image';

import { AspectRatio, Flex, Text } from '@chakra-ui/react';

import { DeepPartial } from '@apollo/client/utilities';

import { Media } from '@/__generated__/graphql';

export interface MediaCoverProps {
  media: DeepPartial<Media>;
}

export function MediaCover({ media }: MediaCoverProps) {
  return (
    <Flex
      direction='column'
      gap={2}
      cursor='pointer'
      transition='all 0.3s ease'
      transform={{ _hover: 'translateY(-5px)' }}
    >
      <AspectRatio ratio={460 / 650} width='100%' borderRadius='lg' overflow='hidden' position='relative'>
        <Image
          style={{ objectFit: 'cover' }}
          src={media.coverImage?.extraLarge ?? ''}
          alt={media.title?.english ?? media.title?.native ?? 'Cover image'}
          fill
          sizes='(max-width: 480px) 50vw, (max-width: 768px) 30vw, (max-width: 1024) 25vw, 18vw'
          priority
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
        {media.title?.english ?? media.title?.native ?? 'Unknown Title'}
      </Text>
    </Flex>
  );
}
