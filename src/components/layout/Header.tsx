'use client';

import Image from 'next/image';
import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';

import { useState } from 'react';

import { Box, Button, Container, Flex, Input, Stack, Text } from '@chakra-ui/react';

import debounce from 'lodash/debounce';

import { ColorModeButton } from '@/components/chakra-ui/color-mode';
import { useUserProfile } from '@/models/hooks/useUserProfile';

export interface HeaderProps {
  searchBar?: boolean;
}

export function Header({ searchBar }: HeaderProps) {
  // search string. initially set from URL params
  const [search, setSearch] = useState(() => {
    // no window in SSR
    if (typeof window === 'undefined') {
      return '';
    }

    // extract search param from URL
    const params = new URLSearchParams(window.location.search);
    return params.get('search') || '';
  });

  // url updater with debounce
  // the debounce ensures that the API is not called too often
  const updateUrlSearch = debounce((value: string) => {
    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    redirect(`?${params.toString()}`);
  }, 500);

  // handle search change
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    setSearch(value);
    updateUrlSearch(value); // update URL params with a debounce to avoid too many API calls
  };

  // user profile
  const [userProfile] = useUserProfile();

  // if user profile not set, redirect to profile page
  const pathname = usePathname();
  if (!userProfile && pathname !== '/profile') {
    redirect('/profile?return=' + encodeURIComponent(pathname + window.location.search));
  }

  // render header
  return (
    <Box w='full' borderBottomWidth={1} py={{ base: 3, md: 4 }} px={{ base: 4, md: 6 }}>
      <Container maxW='7xl'>
        <Flex gap={{ base: 4, md: 0 }} justify='space-between' align='stretch'>
          {/* Brand/Logo */}
          <Link href='/media'>
            <Flex gap={3} align='center' justify='flex-start'>
              <Box boxSize={{ base: 8, md: 10 }} position='relative'>
                <Image src='/images/leonardo-logo.png' alt='Leonardo Logo' width='64' height='64' />
              </Box>
              <Text display={{ smDown: 'none' }} fontSize={{ base: 'lg', md: 'xl' }} fontWeight='bold'>
                Leonardo.Anime
              </Text>
            </Flex>
          </Link>

          {/* Search Box - Desktop */}
          {searchBar && (
            <Box display={{ mdDown: 'none' }} flex={1} maxW='2xl' mx={8}>
              <Input
                placeholder='Search anime or manga...'
                size='lg'
                variant='outline'
                borderRadius='full'
                value={search}
                onChange={onSearchChange}
              />
            </Box>
          )}

          {/* Profile & Theme */}
          <Flex gap={4} align='center' justify='flex-end'>
            {/* Profile */}
            {userProfile && (
              <Button asChild variant='ghost' px={2} py={6}>
                <Link href='/profile'>
                  <Stack gap={0} align={{ base: 'center', md: 'flex-end' }}>
                    <Text fontWeight='semibold'>{userProfile.username}</Text>
                    <Text fontSize='sm' color='gray.500'>
                      {userProfile.jobTitle}
                    </Text>
                  </Stack>
                </Link>
              </Button>
            )}

            {/* Theme Toggle Button */}
            <ColorModeButton />
          </Flex>
        </Flex>

        {/* Search Box - Mobile */}
        {searchBar && (
          <Box display={{ md: 'none' }} flex={1} mt={2}>
            <Input
              placeholder='Search anime or manga...'
              size='md'
              variant='outline'
              borderRadius='full'
              value={search}
              onChange={onSearchChange}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
}
