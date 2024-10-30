import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier'; // 新增

export default [
	{
		ignores: ['**/node_modules', '**/dist', '**/output', '.vscode', '/public', '.stylelintrc.js']
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,vue}','**/*.vue']
	},
	{
		languageOptions: {
			ecmaVersion: "latest",
            sourceType: "module",
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2021
			},
			parserOptions: {
				parser: tseslint.parser
			}
		}
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs['flat/essential'],
	eslintConfigPrettier,
	{
		rules: {
			'@typescript-eslint/no-unused-vars': 'off',
			'vue/multi-word-component-names': [
				'error',
				{
					ignores: ['Index', 'Header', 'tag', 'Tag', 'index'] //需要忽略的组件名
				}
			],
			'@typescript-eslint/no-var-requires': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			semi: 'off',
			'@typescript-eslint/no-this-alias': 'off',
			'eslintno-debugger': 'off',
			'vue/no-unused-vars': 'off',
			'vue/no-template-shadow': 'off',
			'vue/require-v-for-key': 'off',
			'vue/no-textarea-mustache': 'off',
			'vue/no-v-html': 'off',
			'no-constant-condition': 'off',
			// 不允许console
			'no-console': 'warn',
			// 禁止使用debugger
			'no-debugger': 'error',
			// 不允许使用 var
			'no-var': 'error',
			// 强制使用 const
			'prefer-const': 'warn'
		}
	}
];
