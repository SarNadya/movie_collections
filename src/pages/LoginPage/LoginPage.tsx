import React from 'react';
import SignIn from '../../components/SignIn';
import s from './LoginPage.module.sass';

const LoginPage = () => {
  return (
    <div className={s.wrap}>
      <SignIn />
    </div>
  );
};

export default LoginPage;
