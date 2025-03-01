import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            '@styles': '/src/assets/styles',
            '@icon': '/src/assets/icons',
            '@api': '/src/API/queries'
        }
    },
    server: {
        proxy: {
            '/path': {
                target: 'http://34.64.253.116:8080',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/path/, ''),
                secure: false,
                ws: true
            }
        }
    }
});
