/* eslint-disable no-undef */
// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parserOptions: {
		parser: '@typescript-eslint/parser',
		project: ['./tsconfig.json'],
	},
	env: {
		browser: true,
		es6: true,
	},
	globals: {
		$: true,
		module: true,
		require: true,
	},
	plugins: ['vue', 'prefer-arrow', '@typescript-eslint'],
	extends: [
		'plugin:vue/essential',
		'eslint:recommended',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'comma-dangle': 'off',
		'lines-between-class-members': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/comma-dangle': 'off',
		'@typescript-eslint/explicit-function-return-type': [
			'warn',
			{
				allowExpressions: true,
				allowTypedFunctionExpressions: true,
				allowHigherOrderFunctions: true,
				allowDirectConstAssertionInArrowFunctions: true,
				allowConciseArrowFunctionExpressionsStartingWithVoid: true,
			},
		],
		'@typescript-eslint/lines-between-class-members': [
			'error',
			'always',
			{ exceptAfterSingleLine: true },
		],
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: [
					'accessor',
					'classMethod',
					'classProperty',
					'enumMember',
					'function',
					'objectLiteralMethod',
					'objectLiteralProperty',
					'parameter',
					'typeMethod',
					'typeProperty',
					'variable',
				],
				format: ['camelCase', 'UPPER_CASE', 'StrictPascalCase'],
				leadingUnderscore: 'allow',
				trailingUnderscore: 'allow',
			},
			{
				selector: ['class', 'enum', 'interface', 'typeAlias', 'typeParameter'],
				format: ['StrictPascalCase'],
				leadingUnderscore: 'forbid',
				trailingUnderscore: 'forbid',
			},
		],
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/typedef': [
			'warn',
			{
				arrayDestructuring: true,
				arrowParameter: true,
				memberVariableDeclaration: true,
				objectDestructuring: true,
				parameter: true,
				propertyDeclaration: true,
				variableDeclaration: true,
				variableDeclarationIgnoreFunction: true,
			},
		],
		'generator-star-spacing': 'off',
		'import/order': 'off',
		'newline-before-return': 'warn',
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
		quotes: 'off',
		semi: ['error', 'always'],
		'sort-imports': 'off',
		'space-before-function-paren': 'off',
		'vue/comment-directive': 'off',
	},
	overrides: [
		{
			files: ['*.spec.ts'],
			rules: {
				'@typescript-eslint/explicit-function-return-type': 'off',
			},
		},
	],
};
