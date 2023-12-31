import { FC, useContext } from 'react';
import { Card } from 'antd';
import { StarTwoTone } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { TransformedMovie } from '../types/Movie';
import logo from '../components/MovieHeader/img/logo.png';
import FavoritesButton from './UI/FavoritesButton';
import { AuthContext } from '../context/AuthContext';

interface MovieItemProps {
  item: TransformedMovie;
  isLoading: boolean;
}

export const MovieItem: FC<MovieItemProps> = ({ item, isLoading }) => {
  const { isAuth } = useContext(AuthContext);
  const { name, alternativeName, poster, rating, year, id } = item;
  const { Meta } = Card;
  let posterImg;

  if (poster === null || poster.previewUrl === null) {
    posterImg = logo;
  } else {
    posterImg = poster.previewUrl;
  }

  return (
    <div style={{ position: 'relative' }}>
      {isAuth && <FavoritesButton id={id} />}
      <NavLink to={`/movie/${id}`}>
        <Card
          loading={isLoading}
          hoverable
          size="small"
          style={{ width: 200 }}
          cover={<img alt="poster" src={posterImg} />}
        >
          <p style={{ color: '#1E90FF' }}>
            <StarTwoTone />
            {rating?.imdb} <span style={{ color: '#696969' }}>{year}</span>
          </p>
          <Meta title={name || alternativeName} />
        </Card>
      </NavLink>
    </div>
  );
};
