import { redirect } from 'next/navigation';

import { Box, Text } from '@chakra-ui/react';

import { PageFrame } from '@/components/layout/PageFrame';

export default function Page() {
  // redirect to /media
  redirect('/media');

  return (
    <PageFrame>
      <Box alignItems='center' justifyItems='center' px={6} py={20}>
        <Text>Redirecting...</Text>
      </Box>
    </PageFrame>
  );
}
