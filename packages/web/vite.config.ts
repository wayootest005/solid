import { defineConfig } from 'vite';
import { resolve } from 'path'


export default defineConfig({
  plugins: [],

  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'build-tsplus/index.js'),
      name: 'MyLib',
      // the proper extensions will be added
      fileName: 'my-lib'
    },
  },

});
