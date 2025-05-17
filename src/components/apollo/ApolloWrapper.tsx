'use client';

import { PropsWithChildren } from 'react';

import { ApolloNextAppProvider } from '@apollo/client-integration-nextjs';

import { makeClient } from './make-client';

export function ApolloWrapper({ children }: PropsWithChildren) {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
}
