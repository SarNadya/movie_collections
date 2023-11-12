import { Movies } from '../types/Movies';

export const transformMoviesResponse = (response: Movies) => {
  const transformedReponse = response.docs.map((item) => {
    return {
      type: (item.type = 'фильм'),
    };
  });
  return { ...response, transformedReponse };
};
