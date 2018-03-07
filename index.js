'use strict';

module.exports = {
	'extends': 'eslint:recommended',
	'rules': {
		'no-console': 'off',
		'semi': 2,
		'semi-style': 2,
		'no-var': 2,
		'no-whitespace-before-property': 2,
		'no-eval': 2,
		'no-implied-eval': 2,
		'eqeqeq': 2,
		'no-implicit-globals': 2,
		'no-invalid-this': 2,
		'no-labels': 2,
		'no-with': 2,
		'no-void': 2,
		'strict': 2,
		'no-duplicate-imports': 2,
		'prefer-rest-params': 2,
		'rest-spread-spacing': 2,
		'func-call-spacing': 2,
		'func-style': 2,
		'wrap-iife': 2,
		'new-parens': 2,
		'require-await': 2,
		'no-array-constructor': 2,
		'no-new-object': 2,
		'no-throw-literal': 2,
		'prefer-promise-reject-errors': 2,
		'comma-dangle': 1,
		'no-lone-blocks': 1,
		'dot-notation': 1,
		'prefer-arrow-callback': 1,
		'prefer-spread': 1,
		'no-unneeded-ternary': 1,
		'no-useless-call': 1,
		'no-useless-concat': 1,
		'no-useless-escape': 1,
		'no-useless-return': 1,
		'no-useless-computed-key': 1,
		'no-useless-constructor': 1,
		'no-useless-rename': 1,
		'object-shorthand': 1,
		'arrow-parens': [1, 'as-needed'],
		'yoda': 1,
		'no-trailing-spaces': 1,
		'eol-last': 1,
		'no-multi-spaces': 1,
		'no-floating-decimal': 1,
		'quotes': [1, 'single'],
		'indent': [1, 'tab'],
		'no-mixed-spaces-and-tabs': [1, 'smart-tabs'],
		'arrow-spacing': 1,
		'generator-star-spacing': 1,
		'template-curly-spacing': 1,
		'array-bracket-newline': [1, { multiline: true }],
		'array-bracket-spacing': 1,
		'block-spacing': 1,
		'brace-style': [1, '1tbs', { 'allowSingleLine': true }],
		'comma-spacing': 1,
		'comma-style': 1,
		'computed-property-spacing': 1,
		'function-paren-newline': 1,
		'implicit-arrow-linebreak': 1,
		'key-spacing': 1,
		'keyword-spacing': 1,
		'no-lonely-if': 1,
		'no-mixed-operators': 1,
		'no-multiple-empty-lines': [1, { max: 2, maxEOF: 1, maxBOF: 1 }],
		'nonblock-statement-body-position': 1,
		'object-curly-spacing': [1, 'always'],
		'operator-linebreak': 1,
		'semi-spacing': 1,
		'space-before-blocks': 1,
		'space-before-function-paren': [1, 'never'],
		'space-in-parens': 1,
		'space-unary-ops': 1,
		'spaced-comment': 1,
		'switch-colon-spacing': 1,
		'prefer-template': 1
	},
	'env': {
		'es6': true,
		'browser': true
	}
};
