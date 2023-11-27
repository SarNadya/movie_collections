import { Space, Typography } from 'antd';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import HistoryItem from '../../components/HistoryItem/HistoryItem';

const HistoryPage = () => {
  const { history } = useTypedSelector((state) => state.userReducer);
  return (
    <div
      style={{
        margin: '30px 20px',
        textAlign: 'center',
        minHeight: '100vh',
      }}
    >
      {history.length ? (
        <Typography.Title level={2}>История поиска</Typography.Title>
      ) : (
        <Typography.Title level={3}>История поиска пуста</Typography.Title>
      )}
      <Space
        size={16}
        direction="vertical"
        style={{ justifyContent: 'center' }}
      >
        {history.map((item) => (
          <HistoryItem key={item} value={item} />
        ))}
      </Space>
    </div>
  );
};

export default HistoryPage;
