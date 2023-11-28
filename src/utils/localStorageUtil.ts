import { User } from '../types/User';

export const localStorageUtil = {
  getUser: (key: string): User | null => {
    const user = localStorage.getItem(key);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  },
  setUser: (key: string, value: User): void => {
    const item = JSON.stringify(value);
    localStorage.setItem(key, item);
  },
  setAuth: (): void => localStorage.setItem('auth', 'true'),
  getAuth: (): string | null => localStorage.getItem('auth'),
  clearAuth: (): void => localStorage.removeItem('auth'),
};
