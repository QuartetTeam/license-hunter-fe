import { defineConfig } from 'vite';

export default defineConfig({
  projectId: '53s32p',
  e2e: {
    baseUrl: 'http://localhost:5173/',
    viewportWidth: 1440,
    viewportHeight: 720,
  },
});
