import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';

const prod = process.env.prod === 'true';
const copyConfig = {
  targets: [{
    src: 'dist/cosha.browser.*',
    dest: 'page'
  }],
  hook: 'writeBundle'
};

export default {
  input: 'src/cosha.js',
  output: {
    file: 'dist/cosha.browser.js',
    format: 'iife',
    name: 'Cosha'
  },
  plugins: [
    resolve(),
    commonjs(),
    prod && terser(),
    copy(copyConfig)
  ]
};
