import eslint from '@rbnlffl/rollup-plugin-eslint';
import buble from '@rollup/plugin-buble';
import { terser } from 'rollup-plugin-terser';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';

const watch = process.env.ROLLUP_WATCH === 'true';
const development = process.env.development === 'true';

export default {
  input: 'source/index.js',
  plugins: [
    development && eslint(),
    !development && buble(),
    watch && serve({
      open: true,
      contentBase: 'public'
    }),
    watch && livereload('public')
  ].filter(plugin => plugin),
  output: [{
    format: 'esm',
    file: 'public/cosha.esm.js',
    sourcemap: true
  }, !development && {
    format: 'cjs',
    file: 'public/cosha.cjs.js',
    exports: 'default',
    sourcemap: true
  }, !development && {
    format: 'iife',
    file: 'public/cosha.iife.js',
    name: 'cosha',
    plugins: [
      terser()
    ]
  } ].filter(output => output)
};
