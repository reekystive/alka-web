/** @type {import('stylelint').Config} */
const config = {
  ignoreFiles: ['node_modules/**', 'dist/**', '.next/**'],
  plugins: ['stylelint-prettier'],
  extends: ['stylelint-config-standard'],
  rules: {
    'prettier/prettier': true,
    'import-notation': 'string',
  },
};

export default config;
