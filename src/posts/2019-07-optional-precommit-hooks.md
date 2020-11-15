---
title: Optional Pre-commit hooks for Husky
date: "2019-07-08"
type: post
status: ideation
aliases:
  - /2019-07-08-optional-pre-commit-hooks-for-husky/
  - /2019/2019-07-optional-precommit-hooks/
permalink: /posts/optional-pre-commit-hooks-for-husky/
---



Recently on twitter there was a thread about precommit hooks and whether or not they should be required:

[https://mobile.twitter.com/kentcdodds/status/1137336585907662848](https://mobile.twitter.com/kentcdodds/status/1137336585907662848)

Precommit checks can help you move faster in CI but they can be stifling if they're required.

One of the things we've done at Webflow is to make a few things (like prettier formatting) a default pre commit hook and provided a way for devs to include the checks they care about and easily disable those by commenting them out.

Here's how we do it:

- husky runs lint staged on pre commit
- lint staged is a js file that checks for a git ignored file and requires it if it's present, then merges our default config with the local Developer config
- we provide an examples config so that people can cherry pick the checks they care about from it
