import { MovieItem } from './MovieItem';
import { movieAPI } from '../services/MovieService';
import { Space } from 'antd';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ButtonLoadMore } from './ButtonLoadMore';

export const MovieList = () => {
  const { moviesLimit } = useTypedSelector((state) => state.loadReducer);
  const { data, isFetching, isLoading } =
    movieAPI.useFetchAllMoviesQuery(moviesLimit);
  const { loadMoreMovies } = useActions();
  const endingList = data?.docs?.length === data?.total;

  return (
    <div>
      {data && (
        <div>
          <Space size={16} wrap style={{ justifyContent: 'center' }}>
            {data?.docs?.map((item) => (
              <MovieItem item={item} key={item.id} isLoading={isLoading} />
            ))}
          </Space>
          {!endingList && (
            <ButtonLoadMore
              isFetching={isFetching}
              onClick={() => loadMoreMovies()}
            />
          )}
        </div>
      )}
    </div>
  );
};
