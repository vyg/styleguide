# Voyage styleguides

This is a [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md) for the following packages

* [eslint-config](./packages/eslint-config/README.md)
* [stylelint-config](./packages/stylelint-config/README.md)
* [prettier-config](./packages/prettier-config/README.md)

### Create a new package

```
npx lerna create project-name
```

### Publishing

To publish all packages run the following

```
npm run publish
```

or to publish a single package

```
npm run publish --scope="@voyage.studio/xxxxxx
```

> Note: make sure you run the commands with npm. Yarn will fail and give you a hard time.


### Credits

This is heavily inspired by the awesome team at [ueno.](https://github.com/ueno-llc/styleguide)