import { Button, Card, Divider, Flex, Image, Spin, Typography } from 'antd';
import { useFetchMovieByIdQuery } from '../services/MovieService';
import { useParams } from 'react-router';

const { Title, Text } = Typography;

export const MovieDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetchMovieByIdQuery(id);
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
  } = {
    ...data,
  };

  return (
    <div
      style={{
        margin: '40px 20px',
        textAlign: 'center',
        minHeight: '100vh',
      }}
    >
      {isLoading && <Spin size="large" />}
      {error && (
        <Title level={3} style={{ color: 'red' }}>
          Ошибка загрузки
        </Title>
      )}
      {data && (
        <div style={{ padding: '20px' }}>
          <Flex align="start" wrap="wrap" justify="space-evenly">
            <Image width={280} src={poster?.previewUrl} />
            <Card
              style={{ width: '60%', minWidth: '270px', textAlign: 'left' }}
            >
              <Flex justify="space-between" wrap="wrap">
                <Flex vertical>
                  <Title level={3}>{name || alternativeName}</Title>
                  <p>
                    <Text type="secondary">{alternativeName}</Text>
                  </p>
                </Flex>
                <Button>Добавить в избранное</Button>
              </Flex>
              <Divider />
              <p>
                <Text type="secondary">
                  Возрастное ограничение: {ageRating}+
                </Text>
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
          <div>
            <iframe
              width="620px"
              height="415px"
              src={videos?.trailers[0].url}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};
