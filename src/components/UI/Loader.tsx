import { Spin } from 'antd';

const Loader = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Spin size="large" />
    </div>
  );
};

export default Loader;
