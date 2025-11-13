module.exports = {
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: 'module',
		ecmaFeatures: { jsx: true },
	},
	env: { browser: true, es2022: true },
	extends: ['eslint:recommended'],
	plugins: ['react-refresh'],
	rules: {
		'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		'react-refresh/only-export-components': 'warn',
	},
}


