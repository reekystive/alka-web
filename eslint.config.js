import eslintConfigPrettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import { FlatCompat } from '@eslint/eslintrc';
import tsEslint from 'typescript-eslint';
import eslintJsPlugin from '@eslint/js';

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const typescriptConfigs = /** @type {import('eslint').Linter.Config[]} */ (
  tsEslint.config({
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
    },
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    extends: [tsEslint.configs.strictTypeChecked, tsEslint.configs.stylisticTypeChecked],
  })
);

/**
 * @type {import('eslint').Linter.Config[]}
 */
const eslintConfig = [
  { ignores: ['node_modules', '.next', 'dist'] },
  eslintJsPlugin.configs.recommended,
  ...compat.config({
    extends: ['next', 'next/core-web-vitals', 'next/typescript'],
  }),
  ...typescriptConfigs,
  eslintConfigPrettier,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
];

export default eslintConfig;
