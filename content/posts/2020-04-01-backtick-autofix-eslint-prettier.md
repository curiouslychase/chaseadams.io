---
title: Autofix Backticks with ESLint and Prettier in VS Code
date: 2020-04-01
description: "Learn how to autofix backticks in JavasScript with ESLint and Prettier in VS Code."
tags: ["JavaScript", "ESLint", "Developer Experience"]
type: post
status: published
permalink: /posts/fix-strings-to-backticks-in-javascript-with-eslint-on-save-with-vs-code/
---

If you're using Prettier and want to have backticks be the character that wraps strings, you need to do the following:

Install the following ESLint npm packages:

- eslint-config-prettier
- eslint-plugin-prettier

Update your eslintrc.js with this rule:

```js
module.exports = {
  rules: {
    quotes: ["error", "backtick"],
  },
}
```


and your `.prettierrc.js` with this config:

```js
module.exports = {
  singleQuote: false,
}
```

Add this to `settings.json` in VS Code:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
}
```
