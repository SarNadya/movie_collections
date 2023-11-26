import { Button, Typography } from 'antd';
import React from 'react';
import s from './PageError.module.sass';

const PageError = () => {
  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={s.err}>
      <Typography.Title level={3} style={{ color: 'red' }}>
        Произошла непредвиденная ошибка
      </Typography.Title>
      <Button onClick={reloadPage}>Обновить страницу</Button>
    </div>
  );
};

export default PageError;
