import { useFetchAllMoviesQuery } from '../../services/MovieService';
import { MovieList } from '../../components/MovieList';
import { Typography } from 'antd';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Loader from '../../components/UI/Loader';

const { Title } = Typography;

const MainPage = () => {
  const { moviesLimit } = useTypedSelector((state) => state.loadReducer);
  const { data, isLoading, error } = useFetchAllMoviesQuery(moviesLimit);

  return (
    <div
      style={{
        margin: '50px 20px',
        textAlign: 'center',
        minHeight: '100vh',
      }}
    >
      {isLoading && <Loader />}
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
