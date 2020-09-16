---
title: Using Current Date and Time In VS Code Snippets
description: Learn how to use current date and time in VS Code Snippets.
date: 2018-07-24T00:00:00.000Z
role: software developer
tags:
  - Markdown
  - VS Code
  - VS Code Snippets
aliases:
  - /2018-07-24-using-current-date-and-time-in-vs-code-snippets/
  - /2018/vscode-current-date-time-in-snippets/
  - /2018/2018-07-24-vscode-current-date-time-in-snippets/
permalink: /posts/using-current-date-and-time-in-vs-code-snippets/
type: post
status: published
---



Previously when generating new blog articles, adding dates to Markdown frontmatter was a manual step that required me to:

- Determine the date
- Convert what I read into the date format I use for frontmatter

As of [VS Code release 1.20](https://code.visualstudio.com/updates/v1_20#_more-snippet-variables), Snippets have access to the current date and time with one of the following variables:

- `CURRENT_YEAR`
- `CURRENT_YEAR_SHORT`
- `CURRENT_MONTH`
- `CURRENT_DATE`
- `CURRENT_HOUR`
- `CURRENT_MINUTE`
- `CURRENT_SECOND`

Now if I want a frontmatter "date" for Markdown for the current year, month and day (`YYYY-MM-DD`), I can add the following to my snippet:

```yaml
date: \"$CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE\"
```

Using the published date of this post, the expanded snippet produces:

```yaml
date: 2018-07-24
```

![Markdown snippet with current date and time automatically inserted](/img/vscode-current-date-time-in-snippets.gif)

