import { Space, Typography } from 'antd';
import { useFetchMoviesBySearchQuery } from '../../services/MovieService';
import { MovieItem } from '../../components/MovieItem';
import { useParams } from 'react-router-dom';
import PageLoader from '../../components/UI/PageLoader/PageLoader';

const { Title } = Typography;

const SearchResult = () => {
  const { value } = useParams();
  const { data, isLoading, error } = useFetchMoviesBySearchQuery(value);

  return (
    <div
      style={{
        margin: '30px 20px',
        textAlign: 'center',
        minHeight: '100vh',
      }}
    >
      {isLoading ? (
        <PageLoader />
      ) : error ? (
        <Title level={3} style={{ color: 'red' }}>
          Ошибка загрузки
        </Title>
      ) : data?.docs.length ? (
        <Title level={2}>Результат поиска</Title>
      ) : (
        <Title level={2}>Ничего не нашлось</Title>
      )}
      <Space size={16} wrap style={{ justifyContent: 'center' }}>
        {data?.docs?.map((item) => (
          <MovieItem item={item} key={item.id} isLoading={isLoading} />
        ))}
      </Space>
    </div>
  );
};

export default SearchResult;
