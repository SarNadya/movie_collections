import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { movieAPI } from '../services/MovieService';
import { loadReducer } from './reducers/loadSlice';
import { searchReducer } from './reducers/searchSlice';

const rootReducer = combineReducers({
  [movieAPI.reducerPath]: movieAPI.reducer,
  loadReducer,
  searchReducer,
});

export const initStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(movieAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof initStore>;
export type AppDispatch = AppStore['dispatch'];
