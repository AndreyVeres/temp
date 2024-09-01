import { RouteObject } from 'react-router-dom';

export type RouterConfig = Record<AppRoutes, AppRoutesProps>;

export enum AppRoutesAccessType {
  PUBLIC = 'public',
  PRIVATE = 'private',
  ANY = 'any',
}

export enum AppRoutes {
  HOME = 'home',
}

export type AppRoutesProps = RouteObject & {
  accessType?: AppRoutesAccessType;
};
