import { MovieItem } from './MovieItem';
import { movieAPI } from '../services/MovieService';
import { Space } from 'antd';

export const MovieList = () => {
  const { data } = movieAPI.useFetchAllMoviesQuery(20);

  return (
    <div>
      <Space size={16} wrap>
        {data?.docs?.map((item) => <MovieItem item={item} key={item.id} />)}
      </Space>
    </div>
  );
};
