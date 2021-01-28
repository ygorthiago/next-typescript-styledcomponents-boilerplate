module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    "plugin:@typescript-eslint/recommended",
    'airbnb',
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    "react-hooks",
    "prettier",
  ],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: false,
        variables: false,
        typedefs: false,
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'no-unused-expressions': 'off',
    'react/jsx-props-no-spreading': 'off',
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
    "import/prefer-default-export": "off",
    "camelcase": "off",
    "@typescript-eslint/ban-types": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "prettier/prettier": "error",
  },
  settings: {
    "import/resolver": {
      "typescript": {}
    }
  }
};
