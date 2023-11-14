import { Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { AuthorizationPageAsync } from '../pages/AuthorizationPage/AuthorizationPage.async';
import { MainPageAsync } from '../pages/MainPage/MainPage.async';
import { Layout, Spin } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import '../styles/index.sass';

function App() {
  return (
    <div className="app">
      <Layout>
        <Header>
          <NavLink to={'/'}>Главная</NavLink>
          <NavLink to={'/authorization'}>Авторизация</NavLink>
        </Header>
        <Content>
          <Suspense fallback={<Spin />}>
            <Routes>
              <Route path={'/'} element={<MainPageAsync />} />
              <Route
                path={'/authorization'}
                element={<AuthorizationPageAsync />}
              />
            </Routes>
          </Suspense>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
