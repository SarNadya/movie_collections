import React from 'react';
import s from './RegisterPage.module.sass';
import SignUp from '../../components/SignUp';

const RegisterPage = () => {
  return (
    <div className={s.wrap}>
      <SignUp />
    </div>
  );
};

export default RegisterPage;
