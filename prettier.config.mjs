/** @type {import('prettier').Options} */
const prettierConfig = {
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 120,
  tabWidth: 2,
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-sort-imports'],
};

export default prettierConfig;
