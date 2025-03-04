/** @type {import('stylelint').Config} */
const config = {
  ignoreFiles: ['node_modules/**', 'dist/**', '.next/**'],
  plugins: ['stylelint-prettier'],
  extends: ['stylelint-config-standard'],
  rules: {
    'prettier/prettier': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
  },
};

export default config;
