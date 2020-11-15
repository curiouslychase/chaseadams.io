---
title: "Site Guide"
description: "Learn about the site topology for chaseadams.io."
permalink: /site-guide/
date: "2018-07-01"
updated: "2019-04-02"
aliases: ["/site-architecture"]
---

# chaseadams.io

[![Netlify Status](https://api.netlify.com/api/v1/badges/fc1a29b4-b583-4ed0-9771-9ef2bb285a6b/deploy-status)](https://app.netlify.com/sites/chaseadams.io/deploys)

[chaseadams.io](https://chaseadams.io) is a statically generated site built with [Eleventy](https://www.11ty.dev/) and deployed with [Netlify](https://netlify.com).

## Uses

Tools:

- [Eleventy (build tool)](https://www.11ty.dev/)
- [React](https://reactjs.org/)
- [MDX (markdown+jsx)](https://mdxjs.com/)
- [Emotion (css-in-js)](https://emotion.sh/)
- [PrismJS (code highlighting)](https://prismjs.com/)

Hosting/Deployment:

- [Netlify (deploy/hosting)](https://www.netlify.com/)
- [GitHub (git hosting/continuous integration/deploy scheduler)](https://github.com/)

Gates:

- Lint: [ESLint](https://eslint.org/)
- Testing Framework: [Jest](https://jestjs.io/)
- Code Formatting: [Prettier](https://prettier.io/)
- Static Type Checker: [Flow](http://flow.org/)
- Git Hooks: [Husky](https://github.com/typicode/husky) and [Lint Staged](https://github.com/okonet/lint-staged)

## Contributing to chaseadams.io

Thanks for your interest in contributing!

Find something that needs fixing? [Submit an issue on GitHub](https://github.com/chaseadamsio/chaseadams.io/issues)

Want to submit a patch? [Submit a Merge Request](https://github.com/chaseadamsio/chaseadams.io/merge_requests)

## Development

Running [chaseadams.io](https://chaseadams.io) requires NodeJS and npm.

### Requirements

- [NodeJS ^10.1.0 (JavaScript runtime)](https://nodejs.org/en/)

### Install NodeJS with NVM

I recommend using [`nvm` (node version manager)](https://github.com/creationix/nvm) to install NodeJS and npm. You can find [instructions for installing `nvm` in the GitHub README.md](https://github.com/creationix/nvm#install--update-script)

Once installed, you'll notice that there is an [`.nvmrc`](/.nvmrc) in this project. `nvm` will use this file to determine the version of NodeJS to use.

If you haven't installed the verison required in the `.nmvrc`, you can do so by run `nvm install` without the version while in this directory and it will install it. Then you can run `nvm use` and it will use the current version.

Once you've followed the instructions for cloning the project, you can run the following to install and use the correct `node` version:


### Getting Started

Clone the source from GitHub:

```shell
git clone git@github.com:chaseadamsio/chaseadams.io.git && cdchaseadams.io
```

Use the correct node version:

```shell
nvm install && nvm use
```

Note: _When changing into other project directories, run `nvm use` to use the required version for those projects._

Install the `node` dependencies:

```shell
npm install
```

Start the Eleventy development server & open `http://localhost:8080`:

```shell
npm run dev && open http://localhost:8080
```

Now you should be up and running!

## Tasks

- `dev` - run the Eleventy development server.
