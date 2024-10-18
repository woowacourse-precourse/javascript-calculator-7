module.exports = {
  env: {
    jest: true,
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "no-restricted-syntax": "off",
    "no-await-in-loop": "off",
    "no-return-await": "off",
    "no-console": "off",
    "no-restricted-globals": "off",
    "class-methods-use-this": "off",
  },
};
