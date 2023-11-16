import { FC } from 'react';
// import { TransformedMovie } from '../types/Movie';
import { Card } from 'antd';
import { StarTwoTone } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { TransformedMovie } from '../types/Movie';

interface MovieItemProps {
  item: TransformedMovie;
}

export const MovieItem: FC<MovieItemProps> = ({ item }) => {
  const { name, alternativeName, poster, rating, year, id } = item;
  const { Meta } = Card;
  return (
    <NavLink to={`/movie/${id}`}>
      <Card
        hoverable
        size="small"
        style={{ width: 200 }}
        cover={<img alt="poster" src={poster.previewUrl} />}
      >
        <p style={{ color: '#1E90FF' }}>
          <StarTwoTone />
          {rating?.imdb} <span style={{ color: '#696969' }}>{year}</span>
        </p>
        <Meta title={name || alternativeName} />
      </Card>
    </NavLink>
  );
};
