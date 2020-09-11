---
title: "Your First Deno Script (JavaScript)"
type: post
status: draft
date: 2020-02-20
permalink: /posts/deno/
---

## What You'll Learn

- An overview of what Deno is
- How to setup a development environment for Deno
- How imports work
- Deno security concepts

### Exercise

We'll be building out a small script for making a request to Dropbox for a ZIP file and writing that ZIP file to the disk.

#### Concepts

- Environment Variables
- Filesystem modification
- HTTP requests

## Notes for Post

### Installing Deno

Deno is a secure JavaScript and TypeScript runtime ([website](https://github.com/denoland/deno)), built by Ryan Dhal, the original developer of Node.js.

I wanted to write a small utility in Deno that covers some of the fundamental concepts I'd want to know in any programming language, so in this article, I'll be building a utility that fetches a Zip directory from Dropbox, writes it to disk and unzips the Zip into a directory.

First, I visited the [Deno homepage to find the installation instructions page](https://deno.land/). Deno recommends a "curl | bash" script to install it using Shell (there is also a Homebrew formula for Mac and Linux).
