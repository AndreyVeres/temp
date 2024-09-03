import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      entities: '/src/entities',
      features: '/src/features',
      pages: '/src/pages',
      shared: '/src/shared',
      widgets: '/src/widgets',
      app: '/src/app',
    },
  },
});
