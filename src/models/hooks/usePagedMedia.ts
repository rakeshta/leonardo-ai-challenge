import { useQuery } from '@apollo/client';

import { gql } from '@/__generated__';
import { MediaSort } from '@/__generated__/graphql';

// Query to fetch a page of media with minimal fields
const GQL_PAGED_MEDIA = gql(/* graphql */ `
query PagedMedia($page: Int, $perPage: Int, $sort: [MediaSort]) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      currentPage
      hasNextPage
      total
      perPage
      lastPage
    }
    media(sort: $sort) {
      id
      title {
        english
      }
      description
      genres
      isAdult
      meanScore
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      type
      coverImage {
        color
        extraLarge
      }
      bannerImage
    }
  }
}
`);

/** Parameters for the {@link usePagedMedia} query. */
export interface UsePagedMediaParams {
  /** The page to fetch. */
  page: number;

  /**
   * Number of items per page.
   * @default 20
   */
  perPage?: number;

  /**
   * Sort order for the media.
   * @default [MediaSort.TrendingDesc]
   */
  sort?: MediaSort[];
}

/**
 * Fetches a page of media from the API.
 */
export function usePagedMedia({ page, perPage = 20, sort = [MediaSort.TrendingDesc] }: UsePagedMediaParams) {
  const res = useQuery(GQL_PAGED_MEDIA, {
    variables: {
      page,
      perPage,
      sort,
    },
  });
  return {
    ...res,
    data: res.data?.Page,
  };
}
