module.exports = {
  extends: ['airbnb', 'plugin:@next/next/recommended'],
  env: {
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'max-len': [
      'error',
      120,
      {
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
      },
    ],

    'react/prop-types': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-pascal-case': 'off',
    'react/jsx-curly-newline': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-nested-ternary': 'off',
    'default-case': 'off',
    'arrow-parens': 'off',
    'function-paren-newline': 'off',
    'newline-per-chained-call': 'off',
    'no-restricted-syntax': 'off',
    'no-cond-assign': 'off',
    'no-bitwise': 'off',
    'no-param-reassign': 'off',
    'no-unused-expressions': 'off',
    'no-await-in-loop': 'off',
    camelcase: 'off',
    'react/jsx-indent': 'off',
    'react/jsx-wrap-multilines': 'off',
    'no-confusing-arrow': 'off',
    'operator-linebreak': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'spaced-comment': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],

    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/static-property-placement': 'off',
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-unused-prop-types': 'off',
    'react/self-closing-comp': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/sort-comp': 'off',
    'react/no-danger': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'import/prefer-default-export': 'off',
    'react/no-array-index-key': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@/styles', './src/assets/styles'],
          ['@/images', './src/assets/images'],
          ['@/icons', './src/assets/icons'],
          ['@', './src'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
