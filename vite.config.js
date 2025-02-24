// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       // Bootstrap SCSS'in doğru çalışması için aşağıdaki gibi bir ayar ekleyin
  //       additionalData: `@import "src/styles/bootstrap";`,
  //     },
  //   },
  // },
});
