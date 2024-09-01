import { MainLayout } from 'app/Layouts/MainLayout';
import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppRoutesProps } from '../config/router.types';
import { GET_APP_ROUTE } from '../config/router.appRoutes';
import { ROUTER_CONFIG } from '../config/router.config';

const renderWithWrapper = (route: AppRoutesProps) => {
  const { element, path } = route;
  const lazyPage = <Suspense fallback={null}>{element}</Suspense>;
  return (
    <Route key={path}>
      <Route element={<MainLayout />}>
        <Route path={path} element={lazyPage} />
      </Route>
    </Route>
  );
};

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to={GET_APP_ROUTE.HOME()} />} />
      {Object.values(ROUTER_CONFIG).map(renderWithWrapper)}
    </Routes>
  </BrowserRouter>
);
