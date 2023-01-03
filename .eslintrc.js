module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/array-type': ['error', {
      default: 'generic'
    }],
    'prettier/prettier': ['error', {
      singleQuote: true,
      endOfLine: 'auto'
    }]
  }
};