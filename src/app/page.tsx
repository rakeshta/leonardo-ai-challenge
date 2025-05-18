// 'use client';
import { Flex, Grid, GridItem, Heading } from '@chakra-ui/react';

import { MediaSort } from '@/__generated__/graphql';
import { query } from '@/components/apollo';
import { MediaCover } from '@/components/content/MediaCover';
import { PageFrame } from '@/components/layout/PageFrame';
import { GQL_PAGED_MEDIA } from '@/models/queries/paged-media';

export default async function Page() {
  const { data, loading, error } = await query({
    query: GQL_PAGED_MEDIA,
    variables: {
      page: 1,
      perPage: 20,
      sort: [MediaSort.TrendingDesc],
    },
  });
  console.debug('--paged media query', { data, loading, error });

  // const { data, loading, error } = useQuery(GQL_PAGED_MEDIA, {
  //   variables: {
  //     page: 1,
  //     perPage: 20,
  //     sort: [MediaSort.TrendingDesc],
  //   },
  // });
  // console.debug('--paged media query', { data: data?.Page?.media?.[0], loading, error });

  return (
    <PageFrame>
      <Flex direction='column' gap={{ base: 6, md: 8 }}>
        <Heading
          as='h1'
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
          fontWeight='bold'
          textAlign='center'
          lineHeight='shorter'
        >
          Trending Now
        </Heading>
        <Grid
          templateColumns={{
            base: 'repeat(2, 1fr)', // 2 items per row on mobile
            sm: 'repeat(3, 1fr)', // 3 items per row on small devices
            md: 'repeat(4, 1fr)', // 3 items per row on medium devices
            lg: 'repeat(6, 1fr)', // 6 items per row on large devices
          }}
          gap={4}
        >
          {data?.Page?.media?.map(
            (media) =>
              media && (
                <GridItem key={media.id}>
                  <MediaCover media={media} />
                </GridItem>
              ),
          )}
        </Grid>
      </Flex>
    </PageFrame>
  );
}
