import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@core': resolve(__dirname, 'src/js/core'),
      '@services': resolve(__dirname, 'src/js/services'),
      '@components': resolve(__dirname, 'src/js/components'),
      '@css': resolve(__dirname, 'src/css'),
      '@pages': resolve(__dirname, 'src/pages'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        landing: resolve(__dirname, 'src/pages/landing/landing.html'),
        auth: resolve(__dirname, 'src/pages/auth/auth.html'),
        'student-dashboard': resolve(__dirname, 'src/pages/student-dashboard/student-dashboard.html'),
        'employer-dashboard': resolve(__dirname, 'src/pages/employer-dashboard/employer-dashboard.html'),
        'skill-tree': resolve(__dirname, 'src/pages/skill-tree/skill-tree.html'),
        leaderboard: resolve(__dirname, 'src/pages/leaderboard/leaderboard.html'),
        chat: resolve(__dirname, 'src/pages/chat/chat.html'),
        profile: resolve(__dirname, 'src/pages/profile/profile.html'),
      },
    },
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  css: {
    devSourcemap: true,
  },
});
