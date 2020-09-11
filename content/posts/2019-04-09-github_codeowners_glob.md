---
title: GitHub CODEOWNERS Directory Pattern Match Cheatsheet
description: >-
  A cheatsheet for GitHub CODEOWNERS pattern for matching a directory and all of
  its contents
date: 2019-04-09T00:00:00.000Z
tags:
  - github
aliases:
  - /notes_to_self/github_codeowners_glob/
  - /github-codeowners-pattern-match-cheatsheet
permalink: /posts/github-codeowners-pattern-match-cheatsheet/
type: post
status: published
---



A cheatsheet for the pattern to use to match certain [paths for a GitHub CODEOWNERS file](https://help.github.com/en/articles/about-code-owners).

The cheatsheet uses `<ROOT>/.buildkite` as an example. `<ROOT>` in the "I want to match" section is the `git` root of your project.

| I want to match...                             | Pattern              |
| :--------------------------------------------- | :------------------- |
| all files in `<ROOT>/.buildkite`               | `.buildkite/**`      |
| `.buildkite` directory anywhere in the project | `**/.buildkite`      |
| everything _but_ `<ROOT>/.buildkite`           | `!.buildkite`        |
| `.buildkite` anywhere in `test`                | `test/**/.buildkite` |
