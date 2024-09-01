import { MainPage } from 'pages/MainPage';
import { GET_APP_ROUTE } from './router.appRoutes';
import { AppRoutes, RouterConfig } from './router.types';

export const ROUTER_CONFIG: RouterConfig = {
  [AppRoutes.HOME]: {
    path: GET_APP_ROUTE.HOME(),
    element: <MainPage />,
  },
};
