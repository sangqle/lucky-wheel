import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    root: './src',
    plugins: [reactRefresh()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
}
