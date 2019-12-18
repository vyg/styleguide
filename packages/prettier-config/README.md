# @voyage.studio/prettier-config

![npm](https://img.shields.io/npm/v/@voyage.studio/prettier-config.svg)

A Prettier shareable config for projects using Prettier and JavaScript Standard Style as ESLint rules or separate processes.

## Installation

Install with `yarn add --dev @voyage.studio/prettier-config`

_This is only a shareable configuration. It does not install Prettier, Standard, ESLint, or any other part of the tool chain._

## Usage

Reference it in `package.json` using the `prettier` property:

```json
{
  "name": "my-projects-name",
  "prettier": "@voyage.studio/prettier-config",
  "devDependencies" : {
    "@voyage.studio/prettier-config": "^1.0.0"
  }
}
```

If you don't want to use `package.json`, you can use any of the supported
extensions to export a string:

```jsonc
// `.prettierrc.json`
"@voyage.studio/prettier-config"
```

```javascript
// `prettier.config.js` or `.prettierrc.js`
module.exports = '@voyage.studio/prettier-config'
```

> **Sharing configurations**
> 
> Note: The above method does **not** offer a way to _extend_ the configuration to
> overwrite some properties from the shared configuration. If you need to do
> that, import the file in a `.prettierrc.js` file and export the
> modifications, e.g:
> 
> ```js
> module.exports = {
>   ...require("@voyage.studio/prettier-config"),
>   semi: false
> };
> ```
> 
> _source: <https://github.com/prettier/prettier/blob/cacaa92a3f0acf9618f54cd60c9b36b37744dbde/docs/configuration.md>_