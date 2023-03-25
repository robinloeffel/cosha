import eslint from "@rbnlffl/rollup-plugin-eslint";
import typescript from "@rollup/plugin-typescript";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";

const watch = process.env.ROLLUP_WATCH === "true";

/** @type {import("rollup").RollupOptions} */
export default {
	input: "source/index.ts",
	plugins: [
		eslint(),
		typescript(),
		watch && serve({
			open: true,
			contentBase: "demo"
		}),
		watch && livereload("demo")
	].filter(Boolean),
	output: [{
		format: "esm",
		file: "dist/cosha.js",
		sourcemap: true
	}]
};
