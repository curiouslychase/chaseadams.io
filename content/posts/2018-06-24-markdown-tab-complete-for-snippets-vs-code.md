---
title: Enable tab completion for Markdown Snippets in VS Code
description: A quick guide to enabling tab completion for Markdown Snippets in VS Code.
date: 2018-06-24T00:00:00.000Z
aliases:
  - /2018/markdown-tab-complete-vs-code/
  - /2018/2018-06-24-markdown-tab-complete-for-snippets-vs-code/
  - /markdown-tab-complete-vs-code/
tags:
  - markdown
  - VS Code
  - VS Code Snippets
permalink: /posts/markdown-tab-complete-vs-code/
type: post
status: published
---



While working on a frontmatter markdown snippet in VS Code I couldn't understand why tab completion wasn't working. It turns out that [some extensions (including Markdown) don't have snippet tab completion enabled by default](https://github.com/Microsoft/vscode/issues/1617) (you can however type `ctrl+Space` to show available snippets with what you've typed).

VS Code has a setting for `editor.tabCompletion` that has 3 options: `"on"`, `"off"` (default), `"onlySnippets"`. Let's go through how to enable snippet completion for all files first and how to enable it only for a specific file type.

## Enable snippet tab completion for all extensions

Open the **Command Pallete** (`⌘+shift+p` in MacOS, `ctrl+shift+p` in Windows)[^cmd-p], type **"Open Settings (JSON)"** and press return. This will open the file **settings.json**.

At the bottom of the file, add the following (don't forget to add a comma to the item before! Otherwise you'll get a syntax error):

```json
    "editor.tabCompletion": "onlySnippets"
```

Save your **User Setttings** configuration, open a Markdown file and type FM

![Markdown Snippet Tab Completion](/img/markdown-expand.gif)

[^cmd-p]: If you have your settings to default to **Open Settings (JSON)**, you can use `⌘+,` in MacOS, `ctrl+,` in Windows.
