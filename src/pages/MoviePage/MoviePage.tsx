import { Typography } from 'antd';
import { useFetchMovieByIdQuery } from '../../services/MovieService';
import { useParams } from 'react-router';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import PageLoader from '../../components/UI/PageLoader/PageLoader';

const { Title } = Typography;

const MoviePage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetchMovieByIdQuery(id);

  return (
    <div
      style={{
        margin: '40px 20px',
        textAlign: 'center',
        minHeight: '100vh',
      }}
    >
      {isLoading ? (
        <PageLoader />
      ) : (
        error && (
          <Title level={3} style={{ color: 'red' }}>
            Ошибка загрузки
          </Title>
        )
      )}
      {data && <MovieDetails item={data} />}
    </div>
  );
};

export default MoviePage;
