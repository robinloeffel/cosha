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
  input: 'src/index.js',
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
}];

if (!(watch || development)) {
  config.push({
    input: 'src/index.js',
    plugins: [
      resolve(),
      commonjs(),
      buble()
    ],
    output: {
      format: 'esm',
      file: 'dist/cosha.esm.js'
    }
  }, {
    input: 'src/index.js',
    plugins: [
      resolve(),
      commonjs(),
      buble()
    ],
    output: {
      format: 'cjs',
      file: 'dist/cosha.cjs.js',
      exports: 'default'
    }
  });
}

export default config;
