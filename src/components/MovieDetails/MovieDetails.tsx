import { FC, useContext } from 'react';
import { TransformedMovie } from '../../types/Movie';
import { Card, Divider, Flex, Image, Typography } from 'antd';
import FavoritesButton from '../UI/FavoritesButton';
import { AuthContext } from '../../context/AuthContext';
import s from './MovieDetails.module.sass';

const { Title, Text } = Typography;

interface MovieDetailsProps {
  item: TransformedMovie;
}

const MovieDetails: FC<MovieDetailsProps> = ({ item }) => {
  const { isAuth } = useContext(AuthContext);

  const {
    alternativeName,
    name,
    poster,
    description,
    year,
    rating,
    ageRating,
    genres,
    countries,
    videos,
  } = item;

  return (
    <div className={s.container}>
      <Flex align="start" wrap="wrap" justify="space-evenly">
        <Image width={280} src={poster?.previewUrl} />
        <Card style={{ width: '60%', minWidth: '270px', textAlign: 'left' }}>
          <Flex justify="space-between" wrap="wrap">
            <Flex vertical>
              <Title level={3}>{name || alternativeName}</Title>
              <p>
                <Text type="secondary">{alternativeName}</Text>
              </p>
            </Flex>
            {isAuth && <FavoritesButton id={item.id} />}
          </Flex>
          <Divider />
          <p>
            <Text type="secondary">Возрастное ограничение: {ageRating}+</Text>
          </p>
          <p>
            <Text type="secondary">Рейтинг: {rating?.imdb}</Text>
          </p>
          <p>
            <Text type="secondary">Год: {year}</Text>
          </p>
          <p>
            <Text type="secondary">
              Жанр:{' '}
              {genres?.map((item) => (
                <Text type="secondary" key={item.name}>
                  {item.name},
                </Text>
              ))}
            </Text>
          </p>
          <p>
            <Text type="secondary">
              Страна:{' '}
              {countries?.map((item) => (
                <Text type="secondary" key={item.name}>
                  {item.name},
                </Text>
              ))}
            </Text>
          </p>
          <p>
            <Text type="secondary">Описание: </Text>
          </p>
          <p>{description}</p>
        </Card>
      </Flex>
      <Title level={3} style={{ margin: '20px 0' }}>
        Трейлер:
      </Title>
      {videos?.trailers.length ? (
        <div className={s.video_container}>
          <div>
            <iframe
              width="300"
              height="200"
              src={videos?.trailers[0].url}
            ></iframe>
          </div>
        </div>
      ) : (
        <Title level={4} style={{ color: 'red' }}>
          Not Found
        </Title>
      )}
    </div>
  );
};

export default MovieDetails;
