/* eslint-disable */
const { resolve } = require('path');

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',

    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',

    '@vue/typescript',
    'plugin:vue/essential',

    'airbnb-base',

    'eslint-config-prettier',
  ],
  parserOptions: {
    extraFileExtensions: ['.vue'],
    parser: '@typescript-eslint/parser',
    project: resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'unknown',
          'internal',
          ['parent', 'sibling'],
          'index',
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'internal',
            pattern: '@/**',
          },
          {
            group: 'internal',
            pattern: '@components/**',
          },
        ],
        pathGroupsExcludedImportTypes: [],
      },
    ],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-underscore-dangle': 'off',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: '*',
        prev: ['const', 'let', 'export', 'if'],
      },
      {
        blankLine: 'any',
        next: ['const', 'let', 'export'],
        prev: ['const', 'let', 'export'],
      },
    ],
    quotes: ['error', 'single'],
  },
};