import { configureStore } from '@reduxjs/toolkit';

export const createReduxStore = () => {
  const rootReducers = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    test: {} as any,
  };

  const store = configureStore({
    reducer: rootReducers,
  });

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

