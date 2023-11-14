import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  moviesLimit: 30,
};

export const loadSlice = createSlice({
  name: 'load',
  initialState,
  reducers: {
    loadMoreMovies: (state) => {
      state.moviesLimit += 30;
    },
  },
});

export const { loadMoreMovies } = loadSlice.actions;

export const loadReducer = loadSlice.reducer;
