---
title: Apply Language Modes to Files With Non-Standard Filenames in VS Code
description: >-
  Learn how to setup syntax highlighting and other language modes with file
  associations
date: "2019-02-13"
aliases:
  - /2019/vscode-file-associations/
  - /2019/2019-02-13-vscode-file-associations/
  - /vscode-file-associations/
tags:
  - VS Code
  - Developer Productivity Tips
permalink: /posts/vscode-file-associations/
type: post
status: published
---



Have you ever opened a file in VS Code that doesn't have a standard language extension or filename and noticed that the syntax highlighting and other language mode features is missing?

As a trivial example, you might have a `Brewfile` and want it to have syntax highlighting. Despite being Ruby, without a `.rb` extension syntax highlighting won't be applied because VS Code doesn't have a way to determine the `Brewfile` is Ruby. Another example is an AlfredApp Theme file, it has the naming convention of `*.alfredappearance` but is JSON, so syntax highligthing won't be applied to this file either.

VS Code makes it easy to associate a file with a language mode by adding `files.associations` to your `settings.json`. To demonstrate, here's what a configuration for the above examples would look like:

```json
{
  "files.associations": {
    "Brewfile": "ruby",
    "*.alfredappearance": "json"
  }
}
```

`files.associations` is an object where each key is a filename or a pattern (glob) of the filename with the value set to the language mode that it represents.

Now whenever you open a `Brewfile` or an Alfred theme that ends in `.alfredappearance`, the file will get the correct syntax highlighting and all the features that are available to the language mode!

In the examples I've given for `files.associations`, syntax highlighting was the only feature highlighted, but setting a file to a language mode gives it access to any functionality that's associated with that language.

![Gif of adding Syntax Highlighting to Files Without Extensions in VS Code](https://user-images.githubusercontent.com/1024544/52688212-4f697300-2f0a-11e9-8621-5763dd263082.gif)
