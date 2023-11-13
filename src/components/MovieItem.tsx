import { FC } from 'react';
import { Movie } from '../types/Movie';
import { Card } from 'antd';
import { StarTwoTone } from '@ant-design/icons';

interface MovieItemProps {
  item: Movie;
}

export const MovieItem: FC<MovieItemProps> = ({ item }) => {
  const { name, alternativeName, poster, rating, year } = item;
  const { Meta } = Card;
  return (
    <Card
      hoverable
      size="small"
      style={{ width: 300 }}
      cover={<img alt="poster" src={poster.previewUrl} />}
    >
      <p style={{ color: '#1E90FF' }}>
        <StarTwoTone />
        {rating?.imdb} <span style={{ color: '#696969' }}>{year}</span>
      </p>
      <Meta title={name || alternativeName} />
    </Card>
  );
};
