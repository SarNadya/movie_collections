import { FC } from 'react';
import { TransformedMovie } from '../types/Movie';
import { Card, Divider, Flex, Image, Typography } from 'antd';
import FavoritesButton from './UI/FavoritesButton';

const { Title, Text } = Typography;

interface MovieDetailsProps {
  item: TransformedMovie;
}

const MovieDetails: FC<MovieDetailsProps> = ({ item }) => {
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
    <div style={{ padding: '20px' }}>
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
            <FavoritesButton id={item.id} />
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
        <div>
          <iframe
            width="620px"
            height="415px"
            src={videos?.trailers[0].url}
          ></iframe>
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
