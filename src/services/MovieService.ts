import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Movies } from '../types/Movies';
import { API_KEY, API_URL } from '../constants/api';
import { transformMoviesResponse } from '../utils/transformResponse';
import { Movie } from '../types/Movie';

export const movieAPI = createApi({
  reducerPath: 'movieAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    fetchAllMovies: build.query<Movies, number>({
      query: (limit) =>
        `/movie?field=rating.imdb=8-10&limit=${limit}&token=${API_KEY}`,
      transformResponse: transformMoviesResponse,
    }),
    fetchMovieById: build.query<Movie, string | string[] | undefined>({
      query: (id) => `/movie/${id}?field&token=${API_KEY}`,
    }),
  }),
});

export const { useFetchAllMoviesQuery, useFetchMovieByIdQuery } = movieAPI;
