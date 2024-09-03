import { AppRouter } from './Providers/AppRouter';
import { AppStore } from './Providers/AppStore';

export const App = () => {
  return (
    <AppStore>
      <AppRouter />
    </AppStore>
  );
};
