import eslint from "@rbnlffl/rollup-plugin-eslint";
import browserSync from "@rbnlffl/rollup-plugin-browser-sync";
import typescript from "@rollup/plugin-typescript";

/** @type {import("rollup").RollupOptions} */
export default {
	input: "source/index.ts",
	plugins: [
		eslint(),
		typescript(),
		browserSync({
      ui: false,
      notify: false,
      server: "demo"
    })
	].filter(Boolean),
	output: [{
		format: "esm",
		file: "dist/cosha.js",
		sourcemap: true
	}]
};
