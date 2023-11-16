import { Spin } from 'antd';
import s from './PageLoader.module.sass';

const PageLoader = () => {
  return (
    <div className={s.loader}>
      <Spin size="large" />
    </div>
  );
};

export default PageLoader;
