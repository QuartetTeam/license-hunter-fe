import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@icon': '/src/assets/icons',
      '@type': '/src/common/types',
      '@store': '/src/common/store',
      '@component': '/src/components',
      '@api': '/src/api',
      '@feature': '/src/features',
      '@hook': '/src/hooks',
      '@constant': '/src/constants',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.sudomenda.site/api/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        ws: true,
        cookieDomainRewrite: 'localhost',
      },
    },
  },
});
