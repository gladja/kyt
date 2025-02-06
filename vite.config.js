import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: glob.sync('./src/*.html'),
    },
    outDir: '../dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    minify: 'esbuild',
    esbuild: {
      drop: ['console', 'debugger'], // Удаляет console.log и debugger
      legalComments: 'none', // Убирает все комментарии
    },
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  optimizeDeps: {
    exclude: ['js-big-decimal'],
  },
});
