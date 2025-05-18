import { gql } from '@/__generated__';

export const GQL_PAGED_MEDIA = gql(/* graphql */ `
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
