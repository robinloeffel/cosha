import eslint from '@rbnlffl/rollup-plugin-eslint';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';

const watch = process.env.ROLLUP_WATCH === 'true';
const development = process.env.development === 'true';

export default {
	input: 'src/index.ts',
	plugins: [
		development && eslint(),
		typescript(),
		watch && serve({
			open: true,
			contentBase: 'dist'
		}),
		watch && livereload('dist')
	],
	output: [{
		format: 'esm',
		file: 'dist/cosha.mjs',
		sourcemap: development
	}, {
		format: 'iife',
		file: 'dist/cosha.js',
		name: 'cosha',
		sourcemap: development,
		plugins: [
			!development && terser()
		]
	}]
};
