import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Modern Sass API'sini kullanmak için 'api' seçeneğini 'modern-compiler' olarak ayarlayın
        api: 'modern-compiler',
      },
    },
  },
});
