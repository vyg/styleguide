'use strict';

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    require.resolve('./shared'),
  ],
  rules: {
    // We forbid the use of the any proptypes
    'react/forbid-prop-types': ['error', { forbid: ['any'] }],

    // A JSX closure tag doesn't have to be on its own line
    'react/jsx-closing-tag-location': 0,

    // Enforce consistency of spacing around equal signs in JSX attributes
    'react/jsx-equals-spacing': [2, 'never'],

    // A `.jsx` extension is not required for files containing JSX.
    'react/jsx-filename-extension': 0,

    // We warn about using propTypes
    'react/prop-types': 'warn',

    // We don't force the use of stateless function when no refs, props, etc… are used
    'react/prefer-stateless-function': 0,

    // We don't care about using defaultProps
    'react/require-default-props': 0,

    // This rule struggles with flow and class properties.
    'react/sort-comp': 0,

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/339
    'jsx-a11y/anchor-is-valid': ['error', { components: ['a'] }],

    // JSX attributes must have double quotes
    'jsx-quotes': [2, 'prefer-double'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.json',
          '.scss',
        ],
        moduleDirectory: [
          'node_modules',
          'shared',
        ],
      },
    },
  },
};