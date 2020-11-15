---
title: Install NPM Dependency From GitHub URL
date: "2019-10-26"
type: post
status: draft
aliases:
  - /2019-10-26-install-npm-dependency-from-github-url/
  - /2019/2019-10-26-install-npm-dependencies-git-source/
permalink: /posts/install-npm-dependency-from-github-url/
---



I often find myself wanting to use changes that I've made for NPM dependency in a personal fork. NPM (and yarn) have a useful convention for pointing to a git repository instead in a project's `package.json` `dependencies` by pointing to the fork and optionally using a specific branch instead of giving it a version number. Here's how to set that up in a `package.json` for SSH and HTTPS. This example uses the `isomorphic-fetch` package.


Convention for a basic configuration for a package using git:

```
git+{protocol}://{user}@{hostname}:{project owner}/{project}.git#{branch name}
```

- protocol can be `ssh` or `https`.
- user and hostname for logging in via `git`. Usually the user is `git`, especially for github.com and gitlab.com
- project owner is either an organization or user
- project is the repo
- branch name (optional) is the branch you want to work off of

## Install NPM dependency from GitHub via SSH

Following the example, a basic version composition for SSH looks like this:

```
git+ssh://git@github.com:matthew-andrews/isomorphic-fetch.git
```

By branch:

```
git+ssh://git@github.com:matthew-andrews/isomorphic-fetch.git#some-branch
```

## Install NPM dependency from GitHub via HTTPS

Following the example, a basic version composition for HTTPS looks like this:

```
git+https://git@github.com:matthew-andrews/isomorphic-fetch.git
```

By branch:

```
git+https://git@github.com:matthew-andrews/isomorphic-fetch.git#some-branch
```

## Example in the package.json

This is what the JSON would look like for `dependencies` in `package.json`:

```json
{
    "dependencies": {
        "isomorphic-fetch": "git@github.com:matthew-andrews/isomorphic-fetch.git"
    }
}
```
