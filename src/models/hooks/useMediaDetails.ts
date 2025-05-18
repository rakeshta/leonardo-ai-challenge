import { useQuery } from '@apollo/client';

import { gql } from '@/__generated__';

// query to fetch media details
const GQL_MEDIA_DETAILS = gql(/* graphql */ `
query Media($mediaId: Int) {
  Media(id: $mediaId) {
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
`);

/** Parameters for the {@link useMediaDetails} query. */
export interface MediaDetailsDialogProps {
  /** The media id. */
  mediaId?: number;
}

/**
 * Fetches the details of a media item from the API.
 */
export function useMediaDetails({ mediaId }: MediaDetailsDialogProps) {
  const res = useQuery(GQL_MEDIA_DETAILS, {
    variables: {
      mediaId,
    },
    skip: !mediaId,
  });
  return {
    ...res,
    data: res.data?.Media,
  };
}
