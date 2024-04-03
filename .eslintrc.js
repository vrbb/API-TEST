module.exports = {
  env: {
    es2021: true,
    node: true,
  },
	extends: ['airbnb-base', 'prettier'],
	plugins:['prettier'],
	global: {
		Atomics: 'readonly',
		SharedArrayBuffer:'readonly'
	},
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
	rules: {
		"prettier/prettier": "error",
		"class-methods-use-this": "off",
		"no-param-reassign": "off",
		"camelcase": "off",
		"no-underscore-dangle": "off",
		"no-unused-vars": ["error", { argsIdnorePattern: "next" }],
  },
};
