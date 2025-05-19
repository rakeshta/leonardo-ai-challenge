'use client';

import { useForm } from 'react-hook-form';

import { Box, Button, Container, Field, Fieldset, Heading, Input, Stack, Text } from '@chakra-ui/react';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { PageFrame } from '@/components/layout/PageFrame';

// form validation schema
const profileSchema = yup.object({
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be less than 20 characters'),
  jobTitle: yup
    .string()
    .required('Job title is required')
    .min(2, 'Job title must be at least 2 characters')
    .max(100, 'Job title must be less than 100 characters'),
});

// type for our form data
type ProfileFormData = yup.InferType<typeof profileSchema>;

export default function Page() {
  // use react-hook-form to manage form state
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ProfileFormData>({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      username: '',
      jobTitle: '',
    },
  });

  // handle form submission
  const onSubmit = (data: ProfileFormData) => {
    console.log('Form submitted with values:', data);
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
            <Button variant='outline' minW='32'>
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
