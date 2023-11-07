import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import AuthorizationPage from './pages/MainPage/AuthorizationPage/AuthorizationPage';

function App() {
  return (
    <div>
      <NavLink to={'/'} >Главная</NavLink>
      <NavLink to={'/authorization'} >Авторизация</NavLink>
      <Routes>
        <Route
          path={'/'}
          element={<MainPage/>}
        />
        <Route
          path={'/authorization'}
          element={<AuthorizationPage/>}
        />
      </Routes>
    </div>
  );
}

export default App;
