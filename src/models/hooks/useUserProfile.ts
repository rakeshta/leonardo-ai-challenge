import { UserProfile } from '@/models/data/user-profile';
import { useLocalStorageValue } from '@/models/hooks/useLocalStorageValue';

/** Convenience hook that wraps {@link useLocalStorageValue} to access the {@link UserProfile}. */
export function useUserProfile() {
  return useLocalStorageValue<UserProfile>('userProfile');
}
