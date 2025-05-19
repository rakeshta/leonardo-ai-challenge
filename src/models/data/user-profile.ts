import * as yup from 'yup';

/** Form validation schema for the user profile. */
export const USER_PROFILE_VALIDATION_SCHEMA = yup.object({
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

/** User profile data. */
export type UserProfile = yup.InferType<typeof USER_PROFILE_VALIDATION_SCHEMA>;
