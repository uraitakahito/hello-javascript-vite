// Vitest supports the same extensions for your configuration file as Vite does:
// .js, .mjs, .cjs, .ts, .cts, .mts.

import { resolve } from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    cssMinify: false,
    polyfillModulePreload: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        counter: resolve(__dirname, 'src/counter/index.html'),
        importCheck10: resolve(__dirname, 'src/import-check/import-check-1.html'),

        // If you uncomment and enable importCheck11, both importCheck10 and importCheck11 will
        // import import-check-1-0.js.
        // As a result, the imported text.js will become a separate independent file, and the
        // transpiled importCheck10 and importCheck11 will import text.js.
        //
        // importCheck11: resolve(__dirname, 'src/import-check/import-check-1-1.js'),

        importCheck2: resolve(__dirname, 'src/import-check/import-check-2.html'),
      },
      output: {
        // https://rollupjs.org/configuration-options/#output-entryfilenames
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        // PreRenderedAsset:
        // https://github.com/rollup/rollup/blob/7a8ac460c62b0406a749e367dbd0b74973282449/src/rollup/types.d.ts#L855-L864
        assetFileNames: (preRenderedAsset) => {
          let extType = preRenderedAsset.name.split('.')[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images';
          }
          return `assets/${extType}/[name]-[hash].[ext]`;
        },
      },
    },
    minify: false,
  },
});
