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
            source = source.replace(/url\((\/[^)]*)\)/g, 'url(./$1)');
            source = source.replace(/(src|href)="\/([^"]*)"/g, '$1="./$2"');
            console.log(`Transformed ${fileName}:`, source);
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
