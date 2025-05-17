import { registerApolloClient } from '@apollo/client-integration-nextjs';

import { makeClient } from './make-client';

export const { getClient: getApolloClient, query, PreloadQuery } = registerApolloClient(makeClient);
