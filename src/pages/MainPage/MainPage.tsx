import React from 'react';
import { movieAPI } from '../../services/MovieService';
import { MovieItem } from '../../components/MovieItem';

const MainPage = () => {
  const { data, isLoading, error } = movieAPI.useFetchAllMoviesQuery(20);

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1 style={{ color: 'red' }}>Error</h1>}
      {data && <h1>Лучшие фильмы</h1>}
      <div>{data?.docs?.map((item) => <MovieItem item={item} key={item.id} />)}</div>
    </div>
  );
};

export default MainPage;
