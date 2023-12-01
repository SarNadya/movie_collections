import { CloseOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';
import { FC } from 'react';
import { useActions } from '../../hooks/useActions';
import PropTypes from 'prop-types';

interface Props {
  value: string;
}

const HistoryItem: FC<Props> = ({ value }) => {
  const { setSearch, removeHistory } = useActions();

  const handleClick = () => {
    setSearch(value);
  };

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
        extra={
          <a href={`/search/${value}`} onClick={handleClick}>
            {value}
          </a>
        }
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

HistoryItem.propTypes = {
  value: PropTypes.string.isRequired,
};

export default HistoryItem;
