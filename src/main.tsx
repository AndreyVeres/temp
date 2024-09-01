import { createRoot } from 'react-dom/client';
import 'shared/config/i18n/i18n.config';
import { App } from './app/App';

const container = document.getElementById('root');

if (!container) {
  throw new Error('The root container was not found.');
}

const root = createRoot(container);

root.render(<App />);
