---
title: Better Javascript Safety with Husky and Lint Staged
tags:
  - JavaScript
date: "2019-04-05"
type: post
status: draft
image: img/share/better-javascript-safety-husk-lint-staged.jpeg
aliases:
  - /2019-04-05-better-javascript-safety-with-husky-and-lint-staged/
  - /2019/2019-04-05-husky-javascript/
permalink: /posts/better-javascript-safety-with-husky-and-lint-staged/
---

Husky creates files for all of the .git/hooks so that instead of having to install a commit hook and write it in bash, you can write it right in your `package.json` and the commit hooks will run that command.

Let's look at what files are in .git/hooks

```shell
$ ls .git/hooks
applypatch-msg.sample     pre-applypatch.sample     pre-receive.sample
commit-msg.sample         pre-commit.sample         prepare-commit-msg.sample
fsmonitor-watchman.sample pre-push.sample           update.sample
post-update.sample        pre-rebase.sample
```

Now let's install Husky as a dev dependency:

```shell
yarn add -D husky
```

I see this in your `package.json`:

```diff
"eslint": "^5.13.0",
+   "husky": "^1.3.1"
```

And if I look in `.git/hooks` again:

```shell
$ ls .git/hooks
applypatch-msg            post-rewrite              pre-rebase
applypatch-msg.sample     post-update               pre-rebase.sample
commit-msg                post-update.sample        pre-receive
commit-msg.sample         pre-applypatch            pre-receive.sample
fsmonitor-watchman.sample pre-applypatch.sample     prepare-commit-msg
post-applypatch           pre-auto-gc               prepare-commit-msg.sample
post-checkout             pre-commit                push-to-checkout
post-commit               pre-commit.sample         sendemail-validate
post-merge                pre-push                  update
post-receive              pre-push.sample           update.sample
```

if we take a peek at the `pre-commit` file:

```shell
cat .git/hooks/pre-commit
#!/bin/sh
# husky

# Hook created by Husky
#   Version: 1.3.1
#   At: 2019-3-27 23:05:27
#   See: <https://github.com/typicode/husky#readme>

# From npm package
#   Name: husky
#   Directory: /Users/chaseadamsio/src/gitlab.com/chaseadamsio/chaseonsoftware/node_modules/husky
#   Homepage: <https://github.com/typicode/husky#readme>

scriptPath="node_modules/husky/run.js"
hookName=`basename "$0"`
gitParams="$*"

debug() {
    [ "${HUSKY_DEBUG}" = "true" ] && echo "husky:debug $1"
}

debug "$hookName hook started..."

if ! command -v node >/dev/null 2>&1; then
    echo "Can't find node in PATH, trying to find a node binary on your system"
fi

if [ -f "$scriptPath" ]; then
    # if [ -t 1 ]; then
    #   exec < /dev/tty
    # fi
    if [ -f ~/.huskyrc ]; then
    debug "source ~/.huskyrc"
    source ~/.huskyrc
    fi
    node_modules/run-node/run-node "$scriptPath" $hookName "$gitParams"
else
    echo "Can't find Husky, skipping $hookName hook"
    echo "You can reinstall it using 'npm install husky --save-dev' or delete this hook"
fi
```

You can see it does the following:

- checks if node exists (because otherwise it wouldn't work)
- checks if the file for `husky/run.js` exists
  - then checks for a user level `~/.huskyrc` and if it exists, sources it
  - runs node on `husky/run` with "pre-commit" and all the git parameters

So the really cool thing is that it handles setting up all of these hooks so that they *can* run if you decide to add one.

Let's add a pre-commit hook to run `lint-staged`.

Before we can setup the pre-commit hook, we need to install `lint-staged`:

```shell
yarn add -D lint-staged
```

```diff
"devDependencies": {
    "eslint": "^5.13.0",
    "husky": "^1.3.1",
+   "lint-staged": "^8.1.5"
    },
    "husky": {
    "hooks": {
        "pre-commit": "lint-staged"
    }
    }
```

Now let's add the pre-commit hook to run `lint-staged`. First, we need to add the `lint-staged` config:

```diff
"devDependencies": {
    "eslint": "^5.13.0",
    "husky": "^1.3.1",
    "lint-staged": "^8.1.5"
    },
+ "lint-staged": {
+   "**/*.{js,jsx}": "yarn test:lint"
+ },
```

Then we need to tell Husky that we want to run `lint-staged` on `pre-commit` hooks:

```diff
"lint-staged": {
    "**/*.{js,jsx}": "yarn test:lint"
    },
+ "husky": {
+   "hooks": {
+     "pre-commit": "lint-staged"
+ }
}
```

Now, to verify it's working, I'm going to remove a semi-colon from my `gatsby-node.js`. This will cause ESLint to throw an error:

```diff
-  let frontmatter = {};
+  let frontmatter = {}
```

Now I'm going to stage `gatsby-node.js` with `git add gatsby-node.js` and run:

```shell
npx lint-staged
```

This will run `lint-staged` with our configuration and we can see if it does what we want it to.

and sure enough Husky failed our commit as we expected:

```shell
↓ Stashing changes... [skipped]
    → No partially staged files found...
    ❯ Running linters...
    ❯ Running tasks for **/*.{js,jsx}
        ✖ yarn test:lint

✖ yarn test:lint found some errors. Please fix them and try committing again.
yarn run v1.13.0
```

```shell
$ eslint --ignore-path .gitignore --ext .js,.jsx . /Users/chaseadamsio/src/gitlab.com/chaseadamsio/chaseonsoftware/gatsby-node.js

/Users/chaseadamsio/src/gitlab.com/chaseadamsio/chaseonsoftware/gatsby-node.js
60:6  error  Missing semicolon  semi

✖ 1 problem (1 error, 0 warnings)
    1 error and 0 warnings potentially fixable with the `--fix` option.

info Visit <https://yarnpkg.com/en/docs/cli/run> for documentation about this command.

error Command failed with exit code 1.
```
