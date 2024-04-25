eslint-config
=============

### Jelmerro's eslint config

This is my personal eslint config that I aim to use for all my projects in the future.
It contains a very large number of rules that are enabled, many with custom config.
It also combines different plugins into one easy to install repository.
The main components are:

- The main eslint config, with all the rules, see `./index.js`
- JSDoc rules, based on [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)
- Padding line rules, based on [eslint-plugin-padding-lines](https://github.com/Jelmerro/eslint-plugin-padding-lines)
- Sort object keys, based on [eslint-plugin-sort-keys](https://github.com/namnm/eslint-plugin-sort-keys)

The config is currently updated to eslint 9 and supports `eslint.config.js`.
You can install and use it in your own projects with the following steps:

- `npm i -D https://github.com/Jelmerro/eslint-config`
- Add `module.exports = require("eslint-config")` or similar to `eslint.config.js`

Since the config depends on eslint, you only need to install the config, not eslint itself.
This has the advantage that the config will always use a compatible eslint version.
In case you want to customize the rules, you can split the require and export.
I work on Electron projects a lot so I opted for CommonJS, but an ESM eslint config works too.

## Rationale

This config was created over many years of trial and error.
I have been using my own custom config since 2018 and it has grown in size a lot since.
As such, it seemed about time to standardize my config for all projects.
This was the main reason for making this repository/project after all these years.
It also helps removing a lot of unrelated eslint config/code from projects.
With this project it is just a single line of config to use my standard eslint config.
