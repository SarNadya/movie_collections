import { Card, Space, Spin } from 'antd';
import { useFetchSearchSuggestQuery } from '../../services/MovieService';
import SearchItem from '../SearchItem/SearchItem';
import PropTypes from 'prop-types';

interface Props {
  value: string;
}

const SearchSuggest = ({ value }: Props) => {
  const { data, isLoading, isFetching } = useFetchSearchSuggestQuery(value);

  return (
    <div>
      <Card
        style={{
          position: 'absolute',
          top: '50px',
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
              <SearchItem key={item.id} item={item} />
            ))}
          </Space>
        ) : (
          <div>Not Found</div>
        )}
      </Card>
    </div>
  );
};

SearchSuggest.propTypes = {
  value: PropTypes.string.isRequired,
};

export default SearchSuggest;
