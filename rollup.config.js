import buble from '@rollup/plugin-buble';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import { eslint } from 'rollup-plugin-eslint';

export default [{
    input: 'index.js',
    plugins: [
        eslint(),
        resolve(),
        commonjs()
    ].filter(p => p),
    output: {
        format: 'esm',
        file: 'dist/cosha.esm.js'
    }
}, {
    input: 'index.js',
    plugins: [
        resolve(),
        commonjs(),
        buble()
    ].filter(p => p),
    output: {
        format: 'cjs',
        sourcemap: true,
        file: 'dist/cosha.cjs.js'
    }
}, {
    input: 'index.js',
    plugins: [
        resolve(),
        commonjs(),
        buble(),
        terser({
            output: { comments: false }
        })
    ],
    output: {
        format: 'iife',
        sourcemap: true,
        name: 'cosha',
        file: 'dist/cosha.iife.js'
    }
}];
