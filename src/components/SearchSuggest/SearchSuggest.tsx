import { Card, Space, Spin } from 'antd';
import { useFetchSearchSuggestQuery } from '../../services/MovieService';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NavLink } from 'react-router-dom';

const SearchSuggest = () => {
  const { search } = useTypedSelector((state) => state.searchReducer);
  const { data, isLoading, isFetching } = useFetchSearchSuggestQuery(search);

  return (
    <div>
      <Card
        style={{
          position: 'absolute',
          top: '38px',
          width: '200px',
          zIndex: '10',
          textAlign: 'center',
        }}
      >
        {isLoading || isFetching ? (
          <Spin />
        ) : data?.docs.length ? (
          <Space size={16} wrap style={{ justifyContent: 'center' }}>
            {data?.docs?.map((item) => (
              <NavLink to={`/movie/${item.id}`} key={item.id}>
                <img
                  alt="poster"
                  src={item.poster.previewUrl}
                  style={{ width: '60px' }}
                />
              </NavLink>
            ))}
          </Space>
        ) : (
          <div>Not Found</div>
        )}
      </Card>
    </div>
  );
};

export default SearchSuggest;
