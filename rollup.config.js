import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import pkgjson from './package.json';

const prod = process.env.prod === 'true';
const copyConfig = {
  targets: [{
    src: 'dist/cosha.browser.js',
    dest: 'page'
  }],
  hook: 'writeBundle'
};

export default [{
  input: pkgjson.entry,
  output: {
    file: pkgjson.browser,
    format: 'iife',
    name: 'Cosha'
  },
  plugins: [
    resolve(),
    commonjs(),
    prod && terser(),
    copy(copyConfig)
  ]
}, {
  input: pkgjson.entry,
  output: {
    file: pkgjson.module,
    format: 'esm'
  },
  plugins: [
    resolve(),
    commonjs()
  ]
}];
