import { MovieItem } from './MovieItem';
import { movieAPI } from '../services/MovieService';
import { Space } from 'antd';

export const MovieList = () => {
  const { data } = movieAPI.useFetchAllMoviesQuery(60);

  return (
    <div>
      <Space size={16} wrap style={{ justifyContent: 'center' }}>
        {data?.docs?.map((item) => <MovieItem item={item} key={item.id} />)}
      </Space>
    </div>
  );
};
