import { Button } from 'antd';
import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonLoadMoreProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isFetching: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonLoadMore: FC<ButtonLoadMoreProps> = ({
  isFetching,
  onClick,
}) => {
  return (
    <div style={{ marginTop: '30px' }}>
      <Button
        type="primary"
        size="large"
        loading={isFetching}
        onClick={onClick}
      >
        {isFetching ? 'Загрузка' : 'Показать ещё'}
      </Button>
    </div>
  );
};
