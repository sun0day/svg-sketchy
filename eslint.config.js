import antfu from '@antfu/eslint-config'

export default antfu(
  {
    typescript: true,
    vue: true,
    ignores: ['docs'],
  },
  {
    files: ['**/__tests__/**'],
    rules: {
      'no-restricted-globals': 'off',
      'antfu/no-import-dist': 'off',
      'ts/no-var-requires': 'off',
      'ts/no-require-imports': 'off',
    },
  },
  {
    rules: {
      'no-console': 'warn',
    },
  },
)
