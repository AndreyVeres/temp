import { ErrorBoundary } from 'app/Providers/ErrorBoundary';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => (
  <ErrorBoundary>
    <Outlet />
  </ErrorBoundary>
);
