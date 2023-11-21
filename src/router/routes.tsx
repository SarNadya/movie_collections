import { Navigate } from 'react-router-dom';
import { FavoritesPageAsync } from '../pages/FavoritesPage/FavoritesPage.async';
import { HistoryPageAsync } from '../pages/HistoryPage/HistoryPage.async';
import { MainPageAsync } from '../pages/MainPage/MainPage.async';
import { MoviePageAsync } from '../pages/MoviePage/MoviePage.async';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import SearchResult from '../pages/SearchResult/SearchResult';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';

export const publicRoutes = [
  { path: '/', component: <MainPageAsync /> },
  {
    path: '/login',
    component: <LoginPage />,
  },
  {
    path: '/register',
    component: <RegisterPage />,
  },
  { path: '/movie/:id', component: <MoviePageAsync /> },
  { path: '*', component: <NotFoundPage /> },
  { path: '/favorites', component: <Navigate replace to="/login" /> },
  { path: '/history', component: <Navigate replace to="/login" /> },
  { path: '/search/:value', component: <SearchResult /> },
];

export const privateRoutes = [
  { path: '/', component: <MainPageAsync /> },
  {
    path: '/login',
    component: <Navigate replace to="/" />,
  },
  {
    path: '/register',
    component: <Navigate replace to="/" />,
  },
  { path: '/movie/:id', component: <MoviePageAsync /> },
  { path: '*', component: <NotFoundPage /> },
  { path: '/favorites', component: <FavoritesPageAsync /> },
  { path: '/history', component: <HistoryPageAsync /> },
  { path: '/search/:value', component: <SearchResult /> },
];
