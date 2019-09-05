import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'cosha.js',
  output: {
    file: 'cosha.browser.js',
    format: 'iife',
    name: 'Cosha'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel(),
    terser()
  ]
};
