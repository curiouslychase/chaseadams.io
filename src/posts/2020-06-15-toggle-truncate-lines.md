---
title: "How to REALLY enable word wrapping in Emacs"
date: "2020-06-15"
permalink: /posts/emacs-enable-word-wrapping/
description: "A quick tip on how to enable word wrap in Emacs."
tags: ["Emacs"]
type: post
status: published
---

I thought `toggle-word-wrap` would enable wrapping a line when it was at the edge of a buffer, but it turns out what I wanted was `toggle-truncate-lines`.

If you want to enable word-wrapping in Emacs, use `M-x toggle truncate-lines`.

![Using toggle-truncate-lines to enable truncating lines](/img/emacs_toggle-truncate-lines.gif)
