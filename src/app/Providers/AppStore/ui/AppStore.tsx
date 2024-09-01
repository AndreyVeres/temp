import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store.config';

export const AppStore: FC<PropsWithChildren> = ({ children }) => {
  const store = createReduxStore();
  return <Provider store={store}>{children}</Provider>;
};
