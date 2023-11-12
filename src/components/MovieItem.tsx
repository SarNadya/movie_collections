import { FC } from 'react';
import { Movie } from '../types/Movie';

interface MovieItemProps {
  item: Movie;
}

export const MovieItem: FC<MovieItemProps> = ({ item }) => {
  const { name, alternativeName, shortDescription } = { ...item };
  return (
    <div>
      <div>
        <h3>{name || alternativeName}</h3>
        <div>{shortDescription}</div>
      </div>
    </div>
  );
};
