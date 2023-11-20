import { Movie } from '../types/Movie';
import { Movies } from '../types/Movies';

export const transformMoviesResponse = (response: Movies) => {
  return {
    ...response,
    docs: response.docs.map((item) => {
      return {
        name: item.name,
        alternativeName: item.alternativeName,
        poster: item.poster,
        rating: item.rating,
        year: item.year,
        id: item.id,
      };
    }),
  };
};

export const transformMoviesResponseDetails = (data: Movie) => {
  return {
    id: data.id,
    alternativeName: data.alternativeName,
    name: data.name,
    poster: data.poster,
    description: data.description || 'not found',
    year: data.year,
    rating: data.rating,
    ageRating: data.ageRating,
    genres: data.genres,
    countries: data.countries,
    videos: data.videos,
  };
};

export const transformSearchMovies = (response: Movies) => {
  const filteredMovies = response.docs.filter(
    (item) => item.poster && item.poster.previewUrl
  );
  return {
    ...response,
    docs: filteredMovies.map((item) => {
      return {
        name: item.name,
        alternativeName: item.alternativeName,
        poster: item.poster,
        rating: item.rating,
        year: item.year,
        id: item.id,
      };
    }),
  };
};
