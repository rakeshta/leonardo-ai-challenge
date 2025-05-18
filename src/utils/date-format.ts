import { FuzzyDate } from '@/__generated__/graphql';

/** Simple date formatting utilities */
export const dateFormat = {
  /** Format as medium length date. */
  mediumDate(val: Date | FuzzyDate) {
    const date = val instanceof Date ? val : new Date(val.year ?? 1970, (val.month ?? 1) - 1, val.day ?? 0);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  },
};
