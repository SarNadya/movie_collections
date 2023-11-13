import { Movies } from '../types/Movies';

export const transformMoviesResponse = (response: Movies) => {
  return {
    ...response,
    docs: response.docs.map((item) => {
      return {
        ...item,
        type: (item.type = 'фильм'),
      };
    }),
  };
};
