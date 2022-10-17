module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [ '@typescript-eslint' ],
	extends: [
		'sweet',
		'plugin:@typescript-eslint/recommended'
	],
	overrides: [{
		files: [ '.eslintrc.cjs' ],
		extends: 'sweet/node'
	}]
};
