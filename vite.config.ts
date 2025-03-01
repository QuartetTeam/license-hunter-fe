import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            '@styles': '/src/assets/styles',
            '@icon': '/src/assets/icons'
        }
    },
    server: {
        proxy: {
            '/api': {
                target: 'https://127.0.0.1:8080',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
                secure: false,
                ws: true
            }
        }
    }
});
