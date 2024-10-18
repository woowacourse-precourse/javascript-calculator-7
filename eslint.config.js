import globals from 'globals';
import pluginJs from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import jestPlugin from 'eslint-plugin-jest';

const airbnbBaseRules = {
  'import/no-unresolved': 'error',
  'import/named': 'error',
  'import/namespace': 'error',
  'import/default': 'error',
  'import/export': 'error',
  'no-console': 'warn',
  'no-debugger': 'error',
};

const prettierRules = {
  'prettier/prettier': 'error',
};

const jestRules = {
  'jest/no-disabled-tests': 'warn',
  'jest/no-focused-tests': 'error',
  'jest/no-identical-title': 'error',
};

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 2022,
      sourceType: 'module',
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
      jest: jestPlugin,
    },
    rules: {
      ...airbnbBaseRules,
      ...prettierRules,
      ...jestRules,
      'max-depth': ['error', 2],
      'max-lines-per-function': ['error', 16],
      'operator-linebreak': ['error', 'before'],
      'no-unused-expressions': ['error', { allowTernary: true }],
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },

  {
    files: ['**/__tests__/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'max-lines-per-function': 'off',
    },
  },
];
