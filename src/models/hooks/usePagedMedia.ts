import { useQuery } from '@apollo/client';

import { gql } from '@/__generated__';
import { MediaSort } from '@/__generated__/graphql';

// Query to fetch a page of media with minimal fields
const GQL_PAGED_MEDIA = gql(/* graphql */ `
query PagedMedia($page: Int, $perPage: Int, $search: String, $sort: [MediaSort]) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      currentPage
      hasNextPage
      total
      perPage
      lastPage
    }
    media(sort: $sort, search: $search) {
      id
      title {
        english
        native
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
   * Optional search term to filter media.
   */
  search?: string;

  /**
   * Sort order for the media.
   * @default When search term provided it iss [MediaSort.SearchMatch]; else it is [MediaSort.TrendingDesc]
   */
  sort?: MediaSort[];
}

/**
 * Fetches a page of media from the API.
 */
export function usePagedMedia({
  page,
  perPage = 20,
  search,
  sort = search ? [MediaSort.SearchMatch] : [MediaSort.TrendingDesc],
}: UsePagedMediaParams) {
  const res = useQuery(GQL_PAGED_MEDIA, {
    variables: {
      page,
      perPage,
      search,
      sort,
    },
  });
  return {
    ...res,
    data: res.data?.Page,
  };
}
