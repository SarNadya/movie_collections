import React from 'react';
import { movieAPI } from '../../services/MovieService';
import { MovieList } from '../../components/MovieList';
import { Spin, Typography } from 'antd';

const { Title } = Typography;

const MainPage = () => {
  const { data, isLoading, error } = movieAPI.useFetchAllMoviesQuery(60);

  return (
    <div
      style={{ margin: '40px 20px', textAlign: 'center', minHeight: '100vh' }}
    >
      {isLoading && <Spin size="large" />}
      {error && (
        <Title level={3} style={{ color: 'red' }}>
          Ошибка загрузки
        </Title>
      )}
      {data && <Title level={2}>Лучшие фильмы</Title>}
      <MovieList />
    </div>
  );
};

export default MainPage;
