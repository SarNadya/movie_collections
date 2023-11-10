import React from 'react';
import { movieAPI } from '../../services/MovieService';

const MainPage = () => {
  const { data } = movieAPI.useFetchAllMoviesQuery(20);
  return (
    <div>
      <h1>Фильмы</h1>
      <div>
        {data?.docs?.map((item) => <div key={item.id}>{item.name || item.alternativeName}</div>)}
      </div>
    </div>
  );
};

export default MainPage;
