import { Suspense } from 'react';
import PageLoader from './UI/PageLoader/PageLoader';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/routes';

const AppRouter = () => {
  const isAuth = false;

  return (
    <Suspense fallback={<PageLoader />}>
      {isAuth ? (
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              element={route.component}
              path={route.path}
              key={route.path}
            />
          ))}
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              element={route.component}
              path={route.path}
              key={route.path}
            />
          ))}
        </Routes>
      )}
    </Suspense>
  );
};

export default AppRouter;
