'use client';

import Link from 'next/link';
import { redirect, useSearchParams } from 'next/navigation';

import { Flex, Grid, GridItem, Heading } from '@chakra-ui/react';

import { MediaCover } from '@/components/content/MediaCover';
import { MediaDetailsDialog } from '@/components/content/MediaDetailsDialog';
import { PageFrame } from '@/components/layout/PageFrame';
import { usePagedMedia } from '@/models/hooks/usePagedMedia';

export default function Page() {
  // fetch the current page of media
  const { data, loading, error } = usePagedMedia({ page: 1 });
  console.debug('--paged paged media query', { data, loading, error });

  // extract search params
  const searchParams = useSearchParams();
  const mediaIdStr = searchParams.get('id');

  // render page
  return (
    <PageFrame>
      <Flex direction='column' gap={{ base: 6, md: 8 }}>
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
      </Flex>

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
