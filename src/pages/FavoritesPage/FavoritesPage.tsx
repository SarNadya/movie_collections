import { Space, Typography } from 'antd';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import FavoritesItem from '../../components/FavoritesItem/FavoritesItem';

const FavoritesPage = () => {
  const { favorites } = useTypedSelector((state) => state.userReducer);

  return (
    <div
      style={{
        margin: '30px 20px',
        textAlign: 'center',
        minHeight: '100vh',
      }}
    >
      {favorites.length ? (
        <Typography.Title level={2}>Избранные фильмы</Typography.Title>
      ) : (
        <Typography.Title level={3}>Список избранного пуст</Typography.Title>
      )}
      <Space size={16} wrap style={{ justifyContent: 'center' }}>
        {favorites.map((favor) => (
          <FavoritesItem key={favor} id={favor} />
        ))}
      </Space>
    </div>
  );
};

export default FavoritesPage;
