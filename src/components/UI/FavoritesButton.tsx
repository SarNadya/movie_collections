import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { FC } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface FavoritesButtonProps {
  id: number;
}

const FavoritesButton: FC<FavoritesButtonProps> = ({ id }) => {
  const { favorites } = useTypedSelector((state) => state.userReducer);
  const { addFavorites, removeFavorites } = useActions();

  const isFavorites = favorites.includes(id);

  const toggleFavorites = () => {
    if (favorites.includes(id)) {
      removeFavorites(id);
    } else {
      addFavorites(id);
    }
  };

  return (
    <div>
      <Button
        shape="circle"
        icon={
          isFavorites ? (
            <HeartFilled style={{ color: 'red' }} />
          ) : (
            <HeartOutlined style={{ color: 'red' }} />
          )
        }
        style={{ position: 'absolute', top: '7px', right: '9px', zIndex: '9' }}
        onClick={toggleFavorites}
      />
    </div>
  );
};

export default FavoritesButton;
