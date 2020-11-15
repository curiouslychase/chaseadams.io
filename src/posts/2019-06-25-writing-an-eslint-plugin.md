---
title: Writing An ESLint Plugin
date: "2019-06-25"
tags:
  - JavaScript
  - ESLint
aliases:
  - /2019/2019-06-25-writing-an-eslint-plugin/
  - /writing-eslint-plugins/
permalink: /posts/writing-eslint-plugins/
type: post
status: draft
---



## Outline

- what is ESLint
- ESLint conventions
- Plugin Naming
- Directory Structure
- Creating an ESLint Plugin Directory
- Using AST Explorer to Explore the code
- Brief Introduction to AST
- Rule structure
- Passing Options
- testing ESLint Rules
- Using ESLint RuleTester

- [ESLint `RuleTester` docs](https://eslint.org/docs/developer-guide/nodejs-api#ruletester)
- [ESLint `RuleTester` on GitHub](https://github.com/eslint/eslint/blob/master/lib/testers/rule-tester.js)

## publishing ESLint Rules to npm

## ESLint Plugins in mono-repos

## Why You Might Need a Custom ESLint Plugin

Every JavaScript codebase I've ever worked on has had rules that are specific to how the company does things. A recent example I've come across is "don't import from folder X into folder Y". This makes sense when you stop to think about the fact that folder X might be backend code (NodeJS) and folder Y might be client code (DOM).

The problem with rules like these is that as they grow, even if they're written somewhere, it's hard to keep them straight in your brain and it becomes institutional or tribal knowledge.

Enter ESLint: A tool for linting JavaScript. It comes with sensible defaults, but it was built with the goal to allow any developer to extend it to cover their use cases.

## Writing An ESLint Plugin

Learn how to write an ESLINT Plugin from scratch.

In this tutorial I'll walk through all of the things I learned about to build an ESLint Plugin for the engineering group at Webflow.

With a monorepo architecture, especially one where you have frontend and backend code colocated, it's easy to accidentally import code from one to the other without any errors at development time and to see those errors in CI or worse, production!

We're going to use ESLint to check for these "dangerous imports".

In creating this plugin, you'll learn:

- some basics about creating an npm package for others to consume
- specifics about what to need in order to create an ESLint Plugin
- a tool to use to inspect the Abstract Syntax Tree of code and how to use it to determine what to call in your Plugin
- How to test your rules for ESLint plugins
- Publishing your Plugin to npm

## Defining the Plugin Requirements

Th goal of this plugin is to notify developers when they've attempted to import or require a file *in* a certain path *from* a certain path.

As an example, let's say we have the following directory structure:

    | --src |
    | ----- |     | components |
    | ----- | --- | ---------- || Button.jsx |
    | ---------- |     | server |
    | ---------- | --- | ------ |utils.js

And in `src/components/Button.jsx` we attempt the following import:

    import { someUtil } from "../../server/utils";

or using `require`:

    const utils = require("../../server/utils");

This could lead to lots of problems, so we want to help our development team know when they may have unintentionally attempted this.

This is where the ESLint Plugin comes in!

## Creating the Project

First, let's make a new directory for this plugin. Since we can do this as a standalone plugin, we can create a directory called `eslint-plugin-no-dangerous-imports`:

    mkdir eslint-plugin-no-dangerous-imports

The directory name isn't important, but to keep it consistent with the ESLint Plugin requirements, we're naming it the same thing that we want to name the ESLint Plugin.

### Initialize the JS Repo

Now that we have the directory, let's setup the project structure. Change into the newly created project directory and run `npm init`. When it asks you to set it up, make sure to keep the name the same as the directory.

**ESLint recognizes plugins because they are prefixed with `eslint-plugin-`, so it's critical to always name your plugin in your `package.json`.**

Next we're going to create
