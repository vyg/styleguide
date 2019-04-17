'use strict';

module.exports = {
  rules: {
    // Don't force the use of this in classes
    "class-methods-use-this": 0,
    // Ensure there's a blank line after imports block
    "import/newline-after-import": 2,
    // Allow useful console logging
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    // Only one empty line allow
    'no-multiple-empty-lines': ['error', { max: 1 }],
    // Allow ++ in for loops
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    "space-before-function-paren": [ "error", { named: "always", anonymous: "always", asyncArrow: "always" },
    ],

  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
      browser: true,
      node: true,
      es6: true,
      jest: true,
  }
};