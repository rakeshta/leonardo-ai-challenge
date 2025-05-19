import { useCallback, useRef, useSyncExternalStore } from 'react';

/**
 * Custom hook to manage a value in localStorage.
 *
 * @param key - The key under which the value is stored in localStorage.
 * @template T - The type of the value stored in localStorage.
 * @returns A tuple with a value and a setter function.
 *
 * @example
 * const [myValue, setMyValue] = useLocalStorageValue<string>('myKey');
 * setMyValue('newValue'); // sets 'newValue' in localStorage under 'myKey'
 */
export function useLocalStorageValue<T>(key: string): [T | undefined, (newValue: T | undefined) => void] {
  // ref to cache the previous value & parsed result
  const previousValueRef = useRef<string>(undefined);
  const parsedValueRef = useRef<T>(undefined);

  // getter
  const getValue = useCallback(() => {
    // get value & abort if none found
    const value = localStorage.getItem(key);
    if (!value) {
      return undefined;
    }

    // if value is same as previous, return cached parsed value
    if (value === previousValueRef.current) {
      return parsedValueRef.current;
    }

    // parse value & cache it
    try {
      const parsed = JSON.parse(value) as T;
      previousValueRef.current = value;
      parsedValueRef.current = parsed;
      return parsed;
    } catch (error) {
      console.error(`Error parsing localStorage value for key "${key}":`, error);
      return undefined;
    }
  }, [key]);

  // dummy server snapshot function
  const getServerSnapshot = useCallback(() => undefined, []);

  // setter
  const setValue = useCallback(
    (newValue: T | undefined) => {
      if (newValue === undefined) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    },
    [key],
  );

  // subscribe
  const subscribe = useCallback(
    (callback: () => void): (() => void) => {
      // listen for changes to localStorage & notify when the value for the given key changes
      window.addEventListener('storage', (event) => {
        if (event.key === key) {
          callback();
        }
      });

      // return unsubscribe function
      return () => window.removeEventListener('storage', callback);
    },
    [key],
  );

  // sync external store
  const value = useSyncExternalStore(subscribe, getValue, getServerSnapshot);

  // return value and setter
  return [value, setValue];
}
