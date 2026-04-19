module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'brace-style': ['error', '1tbs'],
    'arrow-parens': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
    'no-console': 'off',
  },
}
