import { CloseOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';
import { FC } from 'react';
import { useActions } from '../../hooks/useActions';

interface HistoryItemProps {
  value: string;
}

const HistoryItem: FC<HistoryItemProps> = ({ value }) => {
  const { removeHistory } = useActions();

  const deletItem = () => {
    removeHistory(value);
  };

  return (
    <div>
      <Card
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
        extra={<a href={`/search/${value}`}>{value}</a>}
      >
        <Button
          shape="circle"
          icon={<CloseOutlined style={{ color: 'red' }} />}
          onClick={deletItem}
        />
      </Card>
    </div>
  );
};

export default HistoryItem;
