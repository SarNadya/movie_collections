import { Typography } from 'antd';
import React from 'react';

const FavoritesPage = () => {
  return (
    <div
      style={{
        margin: '30px 20px',
        textAlign: 'center',
        minHeight: '100vh',
      }}
    >
      <Typography.Title level={2}>Избранные фильмы</Typography.Title>
    </div>
  );
};

export default FavoritesPage;
