'use client';

import Link from 'next/link';
import { redirect, useSearchParams } from 'next/navigation';

import { Alert, Box, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react';

import { MediaCover } from '@/components/content/MediaCover';
import { MediaDetailsDialog } from '@/components/content/MediaDetailsDialog';
import { PageFrame } from '@/components/layout/PageFrame';
import { usePagedMedia } from '@/models/hooks/usePagedMedia';

export default function Page() {
  // extract search params
  const searchParams = useSearchParams();
  const mediaIdStr = searchParams.get('id');

  // fetch the current page of media
  const { data, loading, error } = usePagedMedia({ page: 1, perPage: 24 });

  // render page
  return (
    <PageFrame>
      <Stack gap={{ base: 6, md: 8 }}>
        {/* heading */}
        <Heading
          as='h1'
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
          fontWeight='bold'
          textAlign='center'
          lineHeight='shorter'
        >
          Trending Now
        </Heading>

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
                <Alert.Title>Error Loading Page</Alert.Title>
                <Alert.Description>There was an error loading the page. Please try again later.</Alert.Description>
              </Alert.Content>
            </Alert.Root>
          </Box>
        )}

        {/* media grid */}
        <Grid
          templateColumns={{
            base: 'repeat(2, 1fr)', // 2 items per row on mobile
            sm: 'repeat(3, 1fr)', // 3 items per row on small devices
            md: 'repeat(4, 1fr)', // 3 items per row on medium devices
            lg: 'repeat(6, 1fr)', // 6 items per row on large devices
          }}
          gap={4}
        >
          {data?.media?.map(
            (media) =>
              media && (
                <GridItem key={media.id}>
                  <Link
                    href={{
                      search: `id=${media.id}`,
                    }}
                  >
                    <MediaCover media={media} />
                  </Link>
                </GridItem>
              ),
          )}
        </Grid>
      </Stack>

      {/* media details dialog */}
      <MediaDetailsDialog
        mediaId={mediaIdStr ? parseInt(mediaIdStr) : undefined}
        onClose={() => {
          // remove the id param to close the dialog
          const params = new URLSearchParams(window.location.search);
          params.delete('id');
          redirect(`?${params.toString()}`);
        }}
      />
    </PageFrame>
  );
}
