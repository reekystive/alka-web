/** @type {import('prettier').Options} */
const prettierConfig = {
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 120,
  tabWidth: 2,
  // tailwind plugin must be the last one
  plugins: ['prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
};

export default prettierConfig;
