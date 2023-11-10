import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Movies } from '../types/Movies';

export const movieAPI = createApi({
  reducerPath: 'movieAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.kinopoisk.dev/v1.4' }),
  endpoints: (build) => ({
    fetchAllMovies: build.query<Movies, number>({
      query: (limit) =>
        `/movie?field=rating.imdb=8-10&limit=${limit}&token=FSRTNMB-XKQMXCW-P74X3PH-D4M76BC`,
    }),
  }),
});
