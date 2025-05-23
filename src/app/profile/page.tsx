'use client';

import { redirect, useSearchParams } from 'next/navigation';

import { Suspense, useCallback } from 'react';

import { useForm } from 'react-hook-form';

import { Box, Button, Container, Field, Fieldset, Heading, Input, Stack, Text } from '@chakra-ui/react';

import { yupResolver } from '@hookform/resolvers/yup';

import { PageFrame } from '@/components/layout/PageFrame';
import { USER_PROFILE_VALIDATION_SCHEMA, UserProfile } from '@/models/data/user-profile';
import { useUserProfile } from '@/models/hooks/useUserProfile';

const DEFAULT_VALUES: UserProfile = {
  username: '',
  jobTitle: '',
};

function UserProfilePage() {
  // use local storage to persist the user profile
  const [userProfile, setUserProfile] = useUserProfile();

  // use react-hook-form to manage form state
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<UserProfile>({
    resolver: yupResolver(USER_PROFILE_VALIDATION_SCHEMA),
    values: userProfile || DEFAULT_VALUES,
    defaultValues: DEFAULT_VALUES,
  });

  // the path to redirect to after saving or cancelling
  const searchParams = useSearchParams();
  const returnTo = searchParams.get('return') || '/media';

  // handle cancellation
  const onCancel = useCallback(() => {
    // abort if no user profile
    if (!userProfile) {
      return;
    }

    // reset form values to saved state
    setValue('username', userProfile.username);
    setValue('jobTitle', userProfile.jobTitle);

    // return to the previous page
    redirect(returnTo);
  }, [userProfile, setValue, returnTo]);

  // handle form submission
  const onSubmit = (data: UserProfile) => {
    // save the user profile to local storage
    setUserProfile(data);

    // return to the previous page
    redirect(returnTo);
  };

  // render page
  return (
    <PageFrame>
      <Container maxW='2xl'>
        <Box as='form' onSubmit={handleSubmit(onSubmit)} padding={8} borderRadius='md' boxShadow='md'>
          <Fieldset.Root invalid={!isValid}>
            {/* legend / title */}
            <Fieldset.Legend>
              <Heading as='h1' size='xl' textAlign='center'>
                User Profile
              </Heading>
            </Fieldset.Legend>

            {/* fields */}
            <Fieldset.Content>
              {/* username */}
              <Field.Root invalid={!!errors.username}>
                <Field.Label>Username</Field.Label>
                <Input id='username' placeholder='Enter username' autoComplete='username' {...register('username')} />
                {errors.username && (
                  <Text color='red.500' fontSize='sm' mt={1}>
                    {errors.username.message}
                  </Text>
                )}
              </Field.Root>

              {/* job title */}
              <Field.Root invalid={!!errors.jobTitle}>
                <Field.Label>Job Title</Field.Label>
                <Input id='jobTitle' placeholder='Enter job title' {...register('jobTitle')} />
                {errors.jobTitle && (
                  <Text color='red.500' fontSize='sm' mt={1}>
                    {errors.jobTitle.message}
                  </Text>
                )}
              </Field.Root>
            </Fieldset.Content>
          </Fieldset.Root>

          {/* action buttons */}
          <Stack
            direction={{ base: 'column-reverse', sm: 'row' }}
            mt={4}
            gap={4}
            justifyContent='flex-end'
            paddingTop={4}
          >
            <Button variant='outline' minW='32' disabled={!userProfile} onClick={onCancel}>
              Cancel
            </Button>
            <Button type='submit' minW='32' loading={isSubmitting}>
              Save
            </Button>
          </Stack>
        </Box>
      </Container>
    </PageFrame>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserProfilePage />
    </Suspense>
  );
}
