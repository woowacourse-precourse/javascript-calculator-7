module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 2022,
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended', 'prettier'],
    rules: {
        'max-depth': ['error', 2],
        'no-unused-expressions': ['error', { allowTernary: true }],
        'class-methods-use-this': 'off',
        'import/extensions': 'off',
    },
};
