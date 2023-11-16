import { Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { AuthorizationPageAsync } from '../pages/AuthorizationPage/AuthorizationPage.async';
import { MainPageAsync } from '../pages/MainPage/MainPage.async';
import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import '../styles/index.sass';
import { MoviePageAsync } from '../pages/MoviePage/MoviePage.async';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import PageLoader from './UI/PageLoader/PageLoader';

function App() {
  return (
    <div className="app">
      <Layout>
        <Header>
          <NavLink to={'/'}>Главная</NavLink>
          <NavLink to={'/authorization'}>Авторизация</NavLink>
        </Header>
        <Content>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path={'/'} element={<MainPageAsync />} />
              <Route
                path={'/authorization'}
                element={<AuthorizationPageAsync />}
              />
              <Route path={'/movie/:id'} element={<MoviePageAsync />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
