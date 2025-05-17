/** @type {import("prettier").Config} */
const config = {
  tabWidth: 2,
  printWidth: 120,
  singleQuote: true,
  jsxSingleQuote: true,
  experimentalTernaries: true,

  importOrder: [
    '^next$',
    '^next/(.*)$',
    '^react$',
    '^react(.*)$',
    '^@chakra-ui/react$',
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  plugins: ['@trivago/prettier-plugin-sort-imports'],
};

module.exports = config;
