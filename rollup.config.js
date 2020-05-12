import buble from '@rollup/plugin-buble';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import { eslint } from 'rollup-plugin-eslint';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';

const {
  ROLLUP_WATCH: watch,
  development
} = process.env;

export default [{
  input: 'index.js',
  plugins: [
    eslint(),
    resolve(),
    commonjs(),
    !development && buble(),
    !development && terser({
      output: {
        comments: false
      }
    }),
    watch && serve({
      open: true,
      contentBase: 'dist'
    }),
    watch && livereload('dist')
  ].filter(plugin => plugin),
  output: {
    format: 'iife',
    name: 'cosha',
    file: 'dist/cosha.iife.js',
    sourcemap: development
  }
}, !(watch || development) && {
  input: 'index.js',
  plugins: [
    resolve(),
    commonjs(),
    buble()
  ],
  output: {
    format: 'esm',
    file: 'dist/cosha.esm.js'
  }
}, !(watch || development) && {
  input: 'index.js',
  plugins: [
    resolve(),
    commonjs(),
    buble()
  ],
  output: {
    format: 'cjs',
    file: 'dist/cosha.cjs.js'
  }
} ].filter(bundle => bundle);
