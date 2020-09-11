---
title: Share Specific Lines in a Markdown file with GitHub
description: Learn the trick I use to share a Markdown file with GitHub
date: 2019-03-24T00:00:00.000Z
tags:
  - markdown
  - github
  - collaboration
image: img/share/share-line-markdown-github.jpeg
video_id: EEo3QbW9kRE
aliases:
  - /2019/2019-03-24-share-specific-location-in-markdown-with-github/
  - /share-markdown-lines-with-github
permalink: /posts/share-markdown-lines-with-github/
type: post
status: published
---



In the past, when I needed to share a specific line in a Markdown file from GitHub, I'd usually share a link to the Markdown file or a link to the fragment for the header closest to what I wanted to share and say, "look for X".

In this short GitHub protip, I'll share the hack I discovered that allows you to share specific lines from a Markdown file.

I'm using Hashicorps HCL repo as an example, but the concepts work with any Markdown file on GitHub. We're going to be sharing specific lines about how to write comments in HCL.

## Sharing a line with GitHub UI

First, open a GitHub project and find the `README.md` [^1]. (If you don't have one handy, feel free to follow along [in the hashicorp/HCL repo](https://github.com/hashicorp/hcl)).

You can see that the `README.md` is rendered as Markdown instead of source. In the file viewer, find and click `README.md`. The view this takes us to is _also_ rendered as Markdown:

![GitHub rendered README.md](/img/gh-md-readme-view.png)

For our example, the part of the Markdown file that we want to share is "Single line comments start with # or //" and as you can see, there's not a way to do that from this view.

**To select a specific line, we're going to use the Blame view.** Click the **Blame** button in the top right corner of the content view:

![GitHub button for Blame for README.md](/img/gh-md-blame.png)

The new view that we see has the source of the Markdown file, along with the line numbers! Now we can look for "Single line comments start with # or //" and to the left, click the line number (54 as of writing).

You should notice that the URL Location has changed to include a fragment at the end of it:

```
https://github.com/hashicorp/hcl/blame/master/README.md#L54
```

When you share this link, it will take the recipient to this page, at this line number and add highlighting to the line you referenced.

## Sharing multiple lines with GitHub UI

If you wanted to share _all_ of the lines regarding comments instead of just the single line comment, you can do that too! Click the line number you want to start on (again, line 54) and shift+click the line you want to end on (in this case, line 58).

This adds a URL fragment that looks like this:

```
https://github.com/hashicorp/hcl/blame/master/README.md#L54-L58
```

Now when the recipient follows this link it will take them to the file, go to line 54 and highlight lines 54-58.

## Conclusion

This is currently the best way I know of to share specific lines in a Markdown file with GitHub. Hopefully they'll be listening and push out the change I've shared below so this post can become obselete!

## For GitHub, if you're listening...

You've already nailed this UI with GitHub Actions, so if you're looking for small easy wins, consider applying the switcher for rendered blob and source blob:

![GitHub rendered README.md](/img/gh-md-better-buttons.png)

[^1]: This works for all markdown files, but this is the one that is most prolific/consistent.
