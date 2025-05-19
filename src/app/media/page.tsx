'use client';

import Link from 'next/link';
import { redirect, useSearchParams } from 'next/navigation';

import { Suspense } from 'react';

import { Alert, Box, Grid, GridItem, Stack, Text } from '@chakra-ui/react';

import { MediaCover } from '@/components/content/MediaCover';
import { MediaDetailsDialog } from '@/components/content/MediaDetailsDialog';
import { PageFrame } from '@/components/layout/PageFrame';
import { Paginator } from '@/components/widgets/Paginator';
import { usePagedMedia } from '@/models/hooks/usePagedMedia';

const PAGE_SIZE = 24;

function MediaPage() {
  // extract search params
  const searchParams = useSearchParams();
  const extractParam = (key: string) => {
    const param = searchParams.get(key);
    return param ? parseInt(param) : undefined;
  };

  const search = searchParams.get('search') || undefined;
  const page = extractParam('page') || 1;
  const mediaId = extractParam('id');

  // helper to generate a URL with modified search params
  const formSearchWith = (key: string, value: string | undefined) => {
    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    return `?${params.toString()}`;
  };

  // fetch the current page of media
  const { data, loading, error } = usePagedMedia({ search, page, perPage: PAGE_SIZE });

  // render page
  return (
    <PageFrame searchBar={true}>
      <Stack gap={{ base: 6, md: 8 }}>
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
                      search: formSearchWith('id', String(media.id)),
                    }}
                  >
                    <MediaCover media={media} />
                  </Link>
                </GridItem>
              ),
          )}
        </Grid>

        {/* pagination control */}
        <Box justifyItems='center'>
          {data?.pageInfo && (
            <Paginator
              page={page}
              count={data.pageInfo.total ?? 0}
              onPageChange={(nextPage) => redirect(formSearchWith('page', String(nextPage)))}
            />
          )}
        </Box>
      </Stack>

      {/* media details dialog */}
      <MediaDetailsDialog mediaId={mediaId} onClose={() => redirect(formSearchWith('id', undefined))} />
    </PageFrame>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MediaPage />
    </Suspense>
  );
}
