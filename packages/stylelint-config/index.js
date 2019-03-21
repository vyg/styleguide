'use strict';

module.exports = {
    extends: 'stylelint-config-standard',
    plugins: [
        // stylelint plugin to sort CSS rules content with specified order
        // https://github.com/hudochenkov/stylelint-order
        "stylelint-order",
        "stylelint-scss"
    ],
    rules: {
        "at-rule-no-unknown": null,
        "scss/at-rule-no-unknown": true,
        "selector-pseudo-class-no-unknown": [
          true,
          {
            ignorePseudoClasses: [
              // CSS Modules :global scope
              // https://github.com/css-modules/css-modules#exceptions
              "global",
              "local"
            ]
          }
        ],
    
        // Opinionated rule, you can disable it if you want
        "string-quotes": "single",
    
        // https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md
        "order/order": [
          "custom-properties",
          "dollar-variables",
          "declarations",
          "at-rules",
          "rules"
        ],
    
        // https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md
        "order/properties-order": []
    }
}