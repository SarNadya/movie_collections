import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { movieAPI } from '../services/MovieService';

const rootReducer = combineReducers({
  [movieAPI.reducerPath]: movieAPI.reducer,
});

export const initStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof initStore>;
export type AppDispatch = AppStore['dispatch'];
