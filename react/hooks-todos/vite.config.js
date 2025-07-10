import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    //别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});