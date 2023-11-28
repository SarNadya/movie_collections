import { Card, Empty } from 'antd';
import { FC } from 'react';
import { useFetchMovieByIdQuery } from '../../services/MovieService';
import { NavLink } from 'react-router-dom';
import Meta from 'antd/es/card/Meta';
import FavoritesButton from '../UI/FavoritesButton';
import PropTypes from 'prop-types';

interface Props {
  id: number;
}

const FavoritesItem: FC<Props> = ({ id }) => {
  const { data, isLoading, error } = useFetchMovieByIdQuery(String(id));

  let posterImg;

  if (error || data?.poster === null || data?.poster.previewUrl === null) {
    posterImg = <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  } else {
    posterImg = <img alt="poster" src={data?.poster.previewUrl} />;
  }

  return (
    <div style={{ position: 'relative' }}>
      <FavoritesButton id={id} />
      <NavLink to={`/movie/${id}`}>
        <Card
          loading={isLoading}
          hoverable
          size="small"
          style={{ width: 200 }}
          cover={posterImg}
        >
          <Meta title={data?.name || data?.alternativeName} />
        </Card>
      </NavLink>
    </div>
  );
};

FavoritesItem.propTypes = {
  id: PropTypes.number.isRequired,
};

export default FavoritesItem;
