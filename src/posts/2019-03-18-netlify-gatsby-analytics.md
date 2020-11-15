---
title: Production Only Google Analytics in GatsbyJS with Netlify
description: >-
  Learn how to use Netlify's Deploy Context to only include Google Analytics in
  production in your GatsbyJS site.
date: "2019-03-18"
aliases:
  - /2019/netlify-gatsby-analytics/
  - /2019/2019-03-18-netlify-gatsby-analytics/
  - /netlify-gatsby-analytics/
tags:
  - Netlify
  - GatsbyJS
  - Google Analytics
image: /img/google-analytics-gatsby-netlify.jpeg
permalink: /posts/netlify-gatsby-analytics/
type: post
status: published
---



Earlier I shared how I [use Netlify's Deploy Context to safely write drafts in GatsbyJS that never land in production](/2019/gatsby-drafts).

Now I want to share another use of Netlify's Deploy Context to only include Google Analytics on a GatsbyJS site when it's in production. Using this solution guarantees Google Analytics tracking won't ever be included in a non-production preview environment without tribal knowledeg workarounds or hacks.

**This solution requires that 1) you're building your site with GatsbyJS and 2) you're using Netlify for build/deploy/hosting.**

It's a simple two step process:

- Install the Google Analytics GatsbyJS plugin
- Add logic to `gatsby-config.js` to only include the plugin in production

## Add Google Analytics to GatsbyJS

With all things GatsbyJS, there's a [plugin for Google Analytics](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics) and it's easy to setup.

From within your project, install `gatsby-plugin-google-analytics` (the code below is using `yarn`. You can install it with `npm install --save` as well):

```shell
$ yarn add gatsby-plugin-google-analytics
```

Now, if you open your `package.json`, you should see it in your list of `dependencies`.

## Configure GatsbyJS to use Netlify's Deploy Context

Since we want our analytics to be as accurate as possible, we're going to check that Netlify's deploy context is `production` so the Google Analytics plugin is only included in production. (By default, this plugin checks for `NODE_ENV === production`, so it won't include Analytics during `gatsby develop` but `gatsby build` sets `NODE_ENV` to `production`, so anything that's built and served will include it)

In the `gatsby-config.js`, create an object called `cfg` and set the file's `module.exports` to that object:

```js
const cfg = {
  plugins: []
  /* the rest of your config */
};

module.exports = cfg;
```

Now, between the `cfg` definition and `module.exports`, add a condition for when the `CONTEXT` is `production` that will creat a configuration for the Google Analytics plugin, followed by pushing the configuration to `cfg.plugins`.

```js
// cfg = {...}

if (process.env.CONTEXT === "production") {
  const googleAnalyticsCfg = {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: "UA-XXXXXXXXX-X" // <- your tracking ID
    }
  };
  cfg.plugins.push(googleAnalyticsCfg);
}

// modules.exports = cfg;
```

## Test Google Analytics

To test, we're going to...

- Install the ["Block Yourself from Analytics" extension for Chrome](https://chrome.google.com/webstore/detail/block-yourself-from-analy/fadgflmigmogfionelcpalhohefbnehm?hl=en)
- Create a pull request to the repo. Open the Netlify deploy preview and verify that the extension shows that there are no analytics coming through.
- Merge the PR and check that your production URL is still serving Google Analytics.

Now you know how to use Netlify's Deploy Context to bend GatsbyJS to your will (and keep your Google Analytics stats clean)!

## Footnotes

- You can use Netlify's deploy context to follow the same pattern for only including Google Analytics with Hugo and likely other platforms.
- This isn't exclusive to Netlify, you can use this pattern anywhere that has preview URLs (GitHub for example) and a way to determine the context of the environment.
