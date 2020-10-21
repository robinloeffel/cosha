import buble from '@rollup/plugin-buble';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import eslint from '@rbnlffl/rollup-plugin-eslint';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';

const watch = process.env.ROLLUP_WATCH === 'true';
const development = process.env.development === 'true';

const config = [{
  input: 'source',
  plugins: [
    eslint(),
    resolve(),
    commonjs(),
    !development && buble(),
    !development && terser({
      format: {
        comments: false
      }
    }),
    watch && serve({
      open: true,
      contentBase: 'public'
    }),
    watch && livereload('public')
  ].filter(plugin => plugin),
  output: {
    format: 'iife',
    name: 'cosha',
    file: 'public/cosha.iife.js',
    sourcemap: development
  }
}];

if (!(watch || development)) {
  config.push({
    input: 'source',
    plugins: [
      resolve(),
      commonjs(),
      buble()
    ],
    output: {
      format: 'esm',
      file: 'public/cosha.esm.js'
    }
  }, {
    input: 'source',
    plugins: [
      resolve(),
      commonjs(),
      buble()
    ],
    output: {
      format: 'cjs',
      file: 'public/cosha.cjs.js',
      exports: 'default'
    }
  });
}

export default config;
