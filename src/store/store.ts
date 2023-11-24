import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { movieAPI } from '../services/MovieService';
import { loadReducer } from './reducers/loadSlice';
import { searchReducer } from './reducers/searchSlice';
import { userReducer } from './reducers/userSlice';
import {
  localStorageMiddleware,
  modifiedStore,
} from './middlewares/localStorageMiddleware';

const rootReducer = combineReducers({
  [movieAPI.reducerPath]: movieAPI.reducer,
  loadReducer,
  searchReducer,
  userReducer,
});

export const initStore = () => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: modifiedStore(),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(movieAPI.middleware)
        .concat(localStorageMiddleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof initStore>;
export type AppDispatch = AppStore['dispatch'];
