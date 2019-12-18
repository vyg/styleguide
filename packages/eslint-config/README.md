# @voyage.studio/eslint-config

![npm](https://img.shields.io/npm/v/@voyage.studio/eslint-config.svg)

### Installation

#### 1. Install dependencies & config

`yarn add --dev eslint eslint-plugin-import prettier @voyage.studio/eslint-config`

#### 2. Configure ESLint

Reference the config in your `.eslintrc`

_For Vanilla JS_

```json
{
    extends: "@voyage.studio/eslint-config/vanilla"
}
```

_React JS_

```json
{
    extends: "@voyage.studio/eslint-config/react"
}
```

#### 3. Configure Prettier

Add `.prettierrc` 


#### 4. Configure scripts

```json
{
    "scripts": {
        "eslint": "eslint .",
        "lint": "eslint . --cache"
    }
}
```