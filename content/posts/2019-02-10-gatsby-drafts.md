---
title: Writing Drafts in GatsbyJS
description: Learn an alternative solution for writing drafts with GatsbyJS
date: 2019-02-10T00:00:00.000Z
aliases:
  - /2019/gatsby-drafts/
  - /2019/2019-02-10-gatsby-drafts/
  - /gatsby-drafts/
tags:
  - GatsbyJS
  - JavaScript
  - Writing
image: /img/writing-drafts-in-gatsby.png
permalink: /posts/gatsby-drafts/
type: post
status: published
---



There are a few solutions out there for keeping drafts in GatsbyJS, but none achieved what I wanted. The ones I've found required `graphql` to do the heavy lifting to filter out drafts which meant a lot of filtering out anything where drafts was false. **If you don't care about the justification, you can skip to [the code for how I write drafts in GatsbyJS](/gatsby-drafts/#how-i-write-drafts-in-gatsby).**

## Justification

These were the specifications that led me to the solution I use:

- Easy to infer which articles are in draft state.
- Single author not using Netlify CMS (works for multiple authors as well, but not required for me).
- The production build/runtime of my site should be totally unaware of drafts.

### Finding Drafts is Clear

I'm a huge advocate for reducing the friction of finding content that has a state of "Work in Progress". Having a separate directory explicitly for drafts helps me do that.

One of the downsides of using `drafts` in frontmatter is that you usually have to _search_ through the frontmatter with a tool that can tell if a file is a draft (grep, ripgrep, etc) _or_ keep the state in your brain (which is a bad use of a brain).

### Single Author Hosting Content on Dropbox

I'm the only author on my Gatsby sites and use Dropbox to host my content. I think this solution could easily work for multiple authors using git as the "backend" (the way you might use Netlify CMS), but I haven't tried that with this solution so mileage may vary.

I also use Dropbox to _host_ my content and builds are done as a result of changes to files. Having a separate drafts folder allows me to write content without triggering unnecessary Dropbox/Netlify hooks.

### Production Safety

I don't want to have a bunch of drafts filters in my GraphQL. I can't think of a compelling reason for GraphQL to filter drafts when I know that I don't want drafts in production). Having a separate drafts folder reduces a lot of the complexity (and potential bugs) that would come with using GraphQL to do the same filtering.

## How I Write Drafts in Gatsby

Now to the fun part: configuring Gatsby!

I have two content folders in my src directory:

- `content` - the content ready for production
- `drafts` - the content that I'm still working on

There are 3 "stages" of the content lifecycle:

| Stage                  | `content` present   | `drafts` present    |
| ---------------------- | ------------------- | ------------------- |
| Local Development      | ✅ (symlink)         | ✅ (symlink)         |
| Non-Production Netlify | ✅ (pulled at build) | ✅ (pulled at build) |
| Production Netlify     | ✅ (pulled at build) | ❌                   |

The goal is to have a `gatsby-source-filesystem` for `drafts` in any non-production stage and to not even worry about it in production.

### Setup for Gatsby Config

In my `gatsby-config.js` I have a Gatsby config object (rather than setting the object directly on `module.exports`):

```js
const cfg = {
  /* ...my default configuration */
};

module.exports = cfg;
```

Then do a conditional check for the environment where Gatsby is building the site (based on Netlify's deploy contexts):

```js
if (process.env.CONTEXT !== "production") {
  const draftsCfg = {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `drafts`,
      path: `${__dirname}/src/drafts`
    }
  };
  cfg.plugins.push(draftsCfg);
}
```

If `process.env.CONTEXT` isn't `production`, provide `drafts` as a filesystem source.

- `draftsCfg` is a `gatsby-source-filesystem` plugin configuration object, where the `sourceInstanceName` of the content is `drafts` and the path to the content is the `src/drafts` directory inside  of the project root.

Next we push the `draftsCfg` into the `plugins` object that Gatsby will use when it builds the site.

Now whenever Gatsby is run locally or in a non-production branch (because Netlify's preview branches are AWESOME!) and the build in the production environment is totally unaware of the fact that we have a `drafts` folder.

### Caveat

A lot of this looks like it's dependent on using Netlify, but every hosting provider worth its salt provides a way to set environment variables. Netlify does it out of the box, so it was super convenient to hook into that, but it's not a show stopper if you're using another hosting provider.

Big ❤️ to GatsbyJS and Netlify for making this process super easy!
