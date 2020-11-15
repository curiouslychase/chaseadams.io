---
title: VS Code Stage Selected Ranges
date: "2019-07-05"
description: >-
  Learn how to curate your commit history with 'Git: Stage Selected Ranges'
  using VS Code
type: post
status: draft
aliases:
  - /2019/2019-07-05-vs-code-stage-selected-ranges/
  - /vscode-stage-selected-lines
permalink: /posts/vscode-stage-selected-lines/
---



When I work on a feature or implement some functionality, I almost always find that by the time I'm ready to commit it, I've changed enough code that I don't want to have a single commit to denote what changed.

As an example, recently I added ESLint, prettier, lint-staged and Husky to a personal project and even though I could have committed all of those changes with a single message (such as *"use pre-commit checks to reduce footguns"*), I wanted to capture each layer of changes in a way that someone who looked at the `git log` could see each commit in the order that I'd want them to see it. By doing this it essentially creates a fossil record of the changes to the codebase.

VS Code[^why-not-git-add] has core functionality for git that makes this really easy to do.

In this article, I'll use the example I shared above. We'll start out with a `package.json` file on a git branch called `betterPrecommitChecks` and the checklist of what I wanted to add looks like this:

- [ ]  add `test:lint` for `eslint` to `package.json:scripts`
- [ ]  add `prettier` to `package.json:devDependencies`
- [ ]  add `lint-staged` to `package.json:devDependencies`
- [ ]  add `package.json:lint-staged` object to lint all JavaScript (`.js` and `.jsx`) files that runs `prettier over the staged files
- [ ]  add `husky` to `package.json:devDependencies`
- [ ]  add `pre-commit` hook to run `lint-staged` and `yarn test:lint`

After I'd finished doing the tasks above, the `diff` of my `package.json` looked like this:

    "scripts": {
    +    "test:lint": "eslint --ignore-path .gitignore --ext .js,.jsx .",
       },
       "devDependencies": {
    -    "eslint": "^5.13.0"
    +    "eslint": "^5.13.0",
    +    "husky": "^1.3.1",
    +    "lint-staged": "^8.1.5",
    +     "prettier": "^1.16.4"
    +  },
    +  "lint-staged": {
    +    "**/*.js?(x)": [
    +      "prettier --write",
    +      "git add"
    +    ]
    +  },
    +  "husky": {
    +    "hooks": {
    +      "pre-commit": "lint-staged && yarn test:lint"
         }
       }
    }

One thing to note about my list of changes is that thinking about the changes I wanted to make at the task level made it really easy for me to decide the order I wanted to commit the code.

First, I added the `"test:lint"` change, because it stands alone and it's an important change worthy of it's own commit:

[^why-not-git-add]: I could still achieve the end goal by using `git add -i` in the terminal, but it's really nice to be able to do side-by-side diffs and view the whole file at once instead of stepping through each hunk.
