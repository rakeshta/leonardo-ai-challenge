import { redirect } from 'next/navigation';

import { Box } from '@chakra-ui/react';

export default async function Page() {
  // redirect to /media
  redirect('/media');

  return (
    <Box>
      <h1>Redirecting...</h1>
    </Box>
  );
}
