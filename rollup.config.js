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
		commonjs(),
		buble()
	],
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
	],
	output: {
		format: 'cjs',
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
		name: 'cosha',
		file: 'dist/cosha.iife.js'
	}
}];
