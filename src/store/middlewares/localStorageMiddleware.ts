import { type Middleware } from '@reduxjs/toolkit';

export const localStorageMiddleware: Middleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem('applicationState', JSON.stringify(getState()));
    return result;
  };
};

export const modifiedStore = () => {
  if (localStorage.getItem('applicationState')) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const saved: any = localStorage.getItem('applicationState');
    return JSON.parse(saved);
  }
};
