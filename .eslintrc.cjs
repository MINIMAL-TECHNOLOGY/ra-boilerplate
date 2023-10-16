module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-refresh'],
  overrides: [
    { files: ['**/*.cjs', 'vite.config.js'], env: { node: true } },
    {
      files: ['*.ts', '*.tsx', '*.d.ts', '*.js'],
      rules: {
        semi: 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-debugger': 'off',
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'warn',
        'react/jsx-boolean-value': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-shadow': 'warn',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
      },
    },
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
