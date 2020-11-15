---
title: Learning Rust
date: "2019-11-16"
aliases:
  - /2019-11-19-learning-rust/
permalink: /posts/learning-rust/
type: post
status: draft
---


I've started learning Rust recently. This is a roundup of links, learnings and things I'm working on.

## Learning
- Cargo doesn't come with a "add" or "remove" command for packages by default, so you have to add that with the `cargo-edit` crate. [cargo-edit](https://github.com/killercup/cargo-edit). `cargo install cargo-edit` adds the `cargo add <crate>` command so that you can easily add crates to your project dependencies.
