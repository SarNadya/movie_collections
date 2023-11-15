import { useFetchMovieByIdQuery } from '../services/MovieService';
import { useParams } from 'react-router';

export const MovieDetails = () => {
  const { id } = useParams();
  const { data } = useFetchMovieByIdQuery(id);

  return (
    <div>
      <div>{data?.name}</div>
      <div>{data?.shortDescription}</div>
    </div>
  );
};
