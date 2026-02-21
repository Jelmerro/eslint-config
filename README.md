eslint-config
=============

Jelmerro's eslint config

## Features

This is my personal eslint config that I aim to use for all my projects in the future.
It contains a very large number of rules that are enabled, many with custom config.
It also combines different plugins into one easy to install repository.
The main components are:

- The main eslint config, with all the rules, see `./index.js`
- JSDoc rules, based on [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc/)
- Padding line rules, based on [eslint-plugin-padding-lines](https://github.com/Jelmerro/eslint-plugin-padding-lines/)
- Sort rules, based on [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist/)
- Stylistic rules, based on [eslint-stylistic](https://github.com/eslint-community/eslint-stylistic/)
- JSON rules, based on [@eslint/json](https://github.com/eslint/json/) and [eslint-plugin-jsonc](https://github.com/ota-meshi/eslint-plugin-jsonc/)
- Package.json rules, based on [eslint-plugin-package-json](https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/)
- Node.js rules, based on [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n/)
- Misc gotchas and guidelines, based on [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn/)
- Gitignore support, based on [eslint-config-flat-gitignore](https://github.com/antfu/eslint-config-flat-gitignore/)

The config is currently updated to eslint 10 and supports `eslint.config.js`.
Since the config depends on eslint, you only need to install the config, not eslint itself.
This has the advantage that the config will always use a compatible eslint version.

## Install

### ESM

- `npm i -D jelmerro/eslint-config`
- Add the following to `eslint.config.js`:

```js
export {default} from "eslint-config"
```

In case you want to customize any rules, you can do so with:

```js
import eslintConfig, {JS} from "eslint-config"
eslintConfig[JS].rules["example-rule"] = "error"
export default eslintConfig
```

You are free to customize this, the above snippets simply serve as examples.
The JS global points to the right index for updating the main JS rules,
but there's also JSON and PACKAGE exports that point to rules linting those.

### CommonJS

- `npm i -D jelmerro/eslint-config`
- Add the following to `eslint.config.js`:

```js
"use strict"
const {"default": eslintConfig, JS} = require("eslint-config")
eslintConfig[JS].languageOptions.sourceType = "commonjs"
module.exports = eslintConfig
```

Customizing rules works the same as for ESM, simply edit `eslintConfig[JS].rules`.

## Contribute

You can support my work on [ko-fi](https://ko-fi.com/Jelmerro) or [Github sponsors](https://github.com/sponsors/Jelmerro).
Another way to help is to report issues or suggest new features.
Please try to follow the linter styling when developing, see `npm run lint`.
For an example vimrc that can auto-format based on the included linters,
you can check out my personal [vimrc](https://github.com/Jelmerro/vimrc).

## Rationale

I have been using my own custom config since 2018 and it has grown in size a lot since.
As such, in 2024 it seemed about time to standardize my config for all projects.
This was the main reason for making this repository/project after all these years.
It also helps removing a lot of unrelated eslint config/code from projects.
With this project it is just a couple of config lines to use my standard eslint config.
