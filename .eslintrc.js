module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'script',
  },
  plugins: ['@typescript-eslint'],
  rules: {},
};
