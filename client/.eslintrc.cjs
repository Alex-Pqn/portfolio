module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-typescript',
    'plugin:react-hooks/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        mjs: 'never',
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
}
