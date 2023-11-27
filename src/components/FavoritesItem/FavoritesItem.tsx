import { Card, Empty } from 'antd';
import { FC } from 'react';
import { useFetchMovieByIdQuery } from '../../services/MovieService';
import { NavLink } from 'react-router-dom';
import Meta from 'antd/es/card/Meta';
import FavoritesButton from '../UI/FavoritesButton';

interface FavoritesItemProps {
  id: number;
}

const FavoritesItem: FC<FavoritesItemProps> = ({ id }) => {
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

export default FavoritesItem;
