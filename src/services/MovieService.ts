import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Movies } from '../types/Movies';
import { API_KEY, API_URL } from '../constants/api';

export const movieAPI = createApi({
  reducerPath: 'movieAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    fetchAllMovies: build.query<Movies, number>({
      query: (limit) => `/movie?field=rating.imdb=8-10&limit=${limit}&token=${API_KEY}`,
    }),
  }),
});
