/** @type {import('stylelint').Config} */
const config = {
  ignoreFiles: ['node_modules/**', 'dist/**', '.next/**'],
  plugins: ['stylelint-prettier'],
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'prettier/prettier': true,
  },
};

export default config;
