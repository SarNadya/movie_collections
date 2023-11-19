import { Navigate } from 'react-router-dom';
import { AuthorizationPageAsync } from '../pages/AuthorizationPage/AuthorizationPage.async';
import { FavoritesPageAsync } from '../pages/FavoritesPage/FavoritesPage.async';
import { HistoryPageAsync } from '../pages/HistoryPage/HistoryPage.async';
import { MainPageAsync } from '../pages/MainPage/MainPage.async';
import { MoviePageAsync } from '../pages/MoviePage/MoviePage.async';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

export const publicRoutes = [
  { path: '/', component: <MainPageAsync /> },
  {
    path: '/authorization',
    component: <AuthorizationPageAsync />,
  },
  { path: '/movie/:id', component: <MoviePageAsync /> },
  { path: '*', component: <NotFoundPage /> },
  { path: '/favorites', component: <Navigate replace to="/authorization" /> },
  { path: '/history', component: <Navigate replace to="/authorization" /> },
];

export const privateRoutes = [
  { path: '/', component: <MainPageAsync /> },
  {
    path: '/authorization',
    component: <Navigate replace to="/" />,
  },
  { path: '/movie/:id', component: <MoviePageAsync /> },
  { path: '*', component: <NotFoundPage /> },
  { path: '/favorites', component: <FavoritesPageAsync /> },
  { path: '/history', component: <HistoryPageAsync /> },
];
