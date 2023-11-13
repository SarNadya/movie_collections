import React from 'react';
import { movieAPI } from '../../services/MovieService';
import { MovieList } from '../../components/MovieList';
import { Typography } from 'antd';

const { Title } = Typography;

const MainPage = () => {
  const { data, isLoading, error } = movieAPI.useFetchAllMoviesQuery(20);

  return (
    <div style={{ margin: '20px 30px', textAlign: 'center' }}>
      {isLoading && <h1>Loading...</h1>}
      {error && <Title style={{ color: 'red' }}>Error</Title>}
      {data && <Title>Лучшие фильмы</Title>}
      <MovieList />
    </div>
  );
};

export default MainPage;
