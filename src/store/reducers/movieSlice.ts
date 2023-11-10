import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Movie } from '../../types/Movie';

interface MovieState {
  movies: Movie[];
  isLoading: boolean;
  error: string;
}

const initialState: MovieState = {
  movies: [],
  isLoading: false,
  error: '',
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    moviesFetching(state) {
      state.isLoading = true;
    },
    moviesFetchingSuccess(state, action: PayloadAction<Movie[]>) {
      state.isLoading = false;
      state.error = '';
      state.movies = action.payload;
    },
    moviesFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default movieSlice.reducer;
