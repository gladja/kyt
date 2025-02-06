import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

// plagin add dot before
function addDotToPaths() {
  return {
    name: 'add-dot-to-paths',
    enforce: 'post',
    apply: 'build',
    transformIndexHtml(html) {
      const transformedHtml = html
        .replace(/(src|href)="\/([^"]*)"/g, '$1="./$2"')
        .replace(/url\((\/[^)]*)\)/g, 'url(./$1)');
      console.log('Transformed HTML:', transformedHtml);
      return transformedHtml;
    },
    generateBundle(options, bundle) {
      for (const [fileName, asset] of Object.entries(bundle)) {
        if (asset.type === 'asset' && asset.source) {
          if (fileName.endsWith('.css') || fileName.endsWith('.js') || fileName.endsWith('.html')) {
            let source = asset.source.toString();
            if (fileName.endsWith('.css')) {
              // CSS: "/assets/img.jpg" -> "../assets/img.jpg"
              source = source.replace(/url\(["']?\/(assets\/[^)"']+)["']?\)/g, 'url(../$1)');
            } else if (fileName.endsWith('.js') || fileName.endsWith('.html')) {
              // HTML и JS: "/path" -> "./path"
              source = source.replace(/(src|href)="\/([^"]*)"/g, '$1="./$2"');
            }
            asset.source = source;
          }
        }
      }
    },
  };
}

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
  plugins: [
    injectHTML(),
    FullReload(['./src/**/**.html']),
    addDotToPaths(), // add custom plugin
  ],
  optimizeDeps: {
    exclude: ['js-big-decimal'],
  },
});
