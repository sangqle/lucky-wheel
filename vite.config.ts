import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    // Configure your build options here
  },
  server: {
    // Configure your server options here
  },
});
