/** @type {import('stylelint').Config} */
const config = {
  ignoreFiles: ['node_modules/**', 'dist/**', '.next/**'],
  plugins: ['stylelint-prettier'],
  extends: ['stylelint-config-standard'],
  rules: {
    'prettier/prettier': true,
    'import-notation': 'string',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['theme', 'plugin', 'custom-variant', 'apply'],
      },
    ],
    'at-rule-no-deprecated': [
      true,
      {
        ignoreAtRules: ['apply'],
      },
    ],
  },
};

export default config;
