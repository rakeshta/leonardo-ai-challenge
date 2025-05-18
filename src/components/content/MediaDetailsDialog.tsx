import Image from 'next/image';

import { Alert, AspectRatio, Box, CloseButton, Dialog, Flex, HStack, Portal, Stack, Tag, Text } from '@chakra-ui/react';

import { Prose } from '@/components/chakra-ui/prose';
import { useMediaDetails } from '@/models/hooks/useMediaDetails';
import { dateFormat } from '@/utils/date-format';

export interface MediaDetailsDialogProps {
  mediaId?: number;
  onClose?: () => void;
}

export function MediaDetailsDialog({ mediaId, onClose }: MediaDetailsDialogProps) {
  // fetch media details
  const { data: media, loading, error } = useMediaDetails({ mediaId });
  console.debug('--paged media details query', { media, loading, error });

  // do not render if mediaId is not provided
  if (!mediaId) return null;

  // render dialog
  return (
    <Dialog.Root open={true} placement='center' size='xl' onOpenChange={(open) => open && onClose?.()}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content position='relative' overflow='hidden' m={{ base: 4, md: 6 }}>
            <Dialog.CloseTrigger position='absolute' top='1' right='1' zIndex={999} asChild>
              <CloseButton size='sm' />
            </Dialog.CloseTrigger>

            {/* loading indicator */}
            {loading && (
              <Box alignItems='center' justifyItems='center' px={6} py={20}>
                <Text fontSize='lg' color='gray.500'>
                  Loading...
                </Text>
              </Box>
            )}

            {/* error message */}
            {error && (
              <Box alignItems='center' justifyContent='center' px={6} py={20}>
                <Alert.Root status='error'>
                  <Alert.Indicator />
                  <Alert.Content>
                    <Alert.Title>Not Found</Alert.Title>
                    <Alert.Description>The item you&apos;re looking for could not be found.</Alert.Description>
                  </Alert.Content>
                </Alert.Root>
              </Box>
            )}

            {/* media details */}
            {media && (
              <>
                {/* banner */}
                {media.bannerImage && (
                  <AspectRatio ratio={20 / 6} width='full' overflow='hidden'>
                    <Image
                      src={media.bannerImage}
                      alt={media.title?.english || ''}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </AspectRatio>
                )}

                {/* body */}
                <Flex p={6} gap={6} alignItems='flex-start'>
                  {/* cover image */}
                  {media.coverImage?.extraLarge && (
                    <AspectRatio display={{ mdDown: 'none' }} ratio={2 / 3} width='200px' flexShrink={0}>
                      <Image
                        src={media.coverImage.extraLarge}
                        alt={media.title?.english || ''}
                        fill
                        style={{ objectFit: 'cover', borderRadius: '8px' }}
                      />
                    </AspectRatio>
                  )}

                  <Stack gap={4} flex={1}>
                    {/* title */}
                    <Text as='h2' fontSize='2xl' fontWeight='bold'>
                      {media.title?.english}
                    </Text>

                    {/* type, adult rating, score & tags */}
                    <Flex gap={2} wrap='wrap'>
                      <Tag.Root variant='solid'>
                        <Tag.Label>{media.type}</Tag.Label>
                      </Tag.Root>

                      {media.isAdult && (
                        <Tag.Root variant='solid' colorPalette='red'>
                          <Tag.Label>18+</Tag.Label>
                        </Tag.Root>
                      )}

                      {media.meanScore && (
                        <Tag.Root variant='solid' colorPalette={media.meanScore > 70 ? 'green' : 'yellow'}>
                          <Tag.Label>{media.meanScore}%</Tag.Label>
                        </Tag.Root>
                      )}

                      {media.genres?.map(
                        (genre) =>
                          genre && (
                            <Tag.Root key={genre} variant='subtle'>
                              <Tag.Label>{genre}</Tag.Label>
                            </Tag.Root>
                          ),
                      )}
                    </Flex>

                    {/* description */}
                    {media.description && <Prose dangerouslySetInnerHTML={{ __html: media.description }} />}

                    {/* start date */}
                    {media.startDate && (
                      <HStack>
                        <Text fontWeight='medium' color='gray.500'>
                          Released:
                        </Text>
                        <Text>{dateFormat.mediumDate(media.startDate)}</Text>
                      </HStack>
                    )}
                  </Stack>
                </Flex>
              </>
            )}
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
