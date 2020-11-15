---
title: Guide to NPM and Lerna
date: "2019-05-15"
type: post
status: ideation
aliases:
  - /2019-05-15-guide-to-npm-and-lerna/
  - /2019/2019-05-15-learn-npm-and-lerna/
permalink: /posts/guide-to-npm-and-lerna/
---

## Tools

- *npm* for package management
- *Lerna* for managing project packages/workspace definition

## Some Good Guidelines

- Install *non-cli devDependencies* in the project root
- Install *cli devDependencies* (such as Babel or Webpack) in the project root
- Install *dependencies* at the package root
- Babel should use ~babel src -d lib --root-mode upward~ so that it knows to look at the root-level babel.config.js

## Gotchas

- For Jest, I had to add babel.config.js to each package and module.exports a require of the root babel.config.js to make Jest happy. This feels...weird. I'm pretty sure I can create a transformer manually in the jest.config.js, but I didn't try that yet.

Think about it as if you were to split a package out into its own thing and never have to maintain it again. Its dependencies should always be installable but the devDependencies shouldn't be necessary per-package.

## Up & Running

Initialize the repository:

```shell
npm init -y
```

Install Lerna to the project root:

```shell
npm install lerna --save-dev
```

Initialize the project as a lerna project:

```shell
npx lerna init
```

This will scaffold out a =lerna.json= that looks like this:

```json
{
    "npmClient": "npm",
    "packages": [
        "packages/*"
    ],
    "version": "0.0.0"
}
```

Create your first package:
```shell
npx lerna create @orglnd/org-parse
```

Which creates a package in =packages/org-parse= with a =package.json= with the following:
```json
{
    "name": "@orglnd/org-parse",
    "version": "0.0.0",
    "description": "parser for org-mode",
    "keywords": [
        "org-mode"
    ],
    "author": "Chase Adams [realchaseadams@gmail.com](mailto:realchaseadams@gmail.com)",
    "homepage": "",
    "license": "MIT",
    "main": "lib/index.js",
    "directories": {
        "lib": "lib",
        "test": "**tests**"
    },
    "files": [
        "lib"
    ],
    "publishConfig": {
        "access": "public"
    },
    "scripts": {
        "test": "echo \"Error: run tests from root\" && exit 1"
    }
}
```

=publishConfig= is important because it allows =lerna= to create root level package releases.

In this project we'll be using the following tools that need to be installed at the project root:

- [ ]  babel
- [ ]  typescript
- [ ]  jest
- [ ]  prettier
- [ ]  eslint

```shell
npm install --save-dev \
@babel/cli \
@babel/core \
@babel/preset-env \
@babel/preset-react \
@babel/preset-typescript \
@babel/plugin-transform-typescript \
@babel/plugin-transform-modules-commonjs \
@babel/plugin-proposal-export-default-from \
@babel/plugin-proposal-export-namespace-from \
@babel/plugin-proposal-object-rest-spread \
prettier \
eslint \
@typescript-eslint/parser \
@typescript-eslint/eslint-plugin \
eslint-config-prettier \
eslint-plugin-prettier \
typescript \
@types/node \
jest \
@types/jest \
babel-jest
```

Making Jest work with Typescript and Babel, add this to the root level =jest.config.js=:
```js
module.exports = {
testMatch: [`**/*/__tests__/**/*.ts?(x)`],
transform: {
"^.+\\.tsx?$": `babel-jest`,
},
};
```

I use the same VS Code for Flow as I do for this TypeScript application. I have typescript validation disabled by default and enable it for this specific project in =.vscode/settings.json= with the following config:
```json
{
"typescript.validate.enable": true
}
```

Installing a package (example is =@babel/cli=) to all workspaces:```
yarn lerna add @babel/cli
```

Installing a package to one workspace:```
yarn lerna add unified --scope @chaseadamsio/markdown-to-org
```
