import eslint from '@rbnlffl/rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';

const watch = process.env.ROLLUP_WATCH === 'true';
const development = process.env.development === 'true';

export default {
  input: 'source/index.js',
  plugins: [
    development && eslint(),
    watch && serve({
      open: true,
      contentBase: 'public'
    }),
    watch && livereload('public')
  ],
  output: [{
    format: 'esm',
    file: 'public/cosha.esm.js',
    sourcemap: development
  }, {
    format: 'iife',
    file: 'public/cosha.iife.js',
    name: 'cosha',
    sourcemap: development,
    plugins: [
      !development && terser()
    ]
  }]
};
