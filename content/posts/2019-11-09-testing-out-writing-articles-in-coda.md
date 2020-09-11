---
title: Testing out writing articles in Coda
type: post
status: archived
modified_on: '2019-11-11'
date: 2019-11-10T00:00:00.000Z
tags:
  - Experimentation
  - Writing
aliases:
  - /2019-11-09-testing-out-writing-articles-in-coda/
permalink: /posts/testing-out-writing-articles-in-coda/
---



My co-worker and friend Andrew Nelsen introduced me to Coda this week during a 1:1. As he was showing me how he manages his life and work in Coda, the gears in my brain started to turn!

I decided I'd give Coda a shot as a place to write (instead of Dropbox for these reasons):

- It has powerful tables that make it really easy to keep post meta
- The data can be viewed in different layouts based on what I want to see
- It has a solid API for grabbing my posts and generating Markdown files (like I do today with Dropbox)
- It seems to have a well-thought out offline mode (I tested by going into airplane mode and writing a post)
- It has the ability to do complex formulas, which means I don't have to have as much custom code to get a markdown file generated well

It took me about 2 hours to create a table with the same data my markdown files have and write a script that pulls and generates markdown files that are published to chaseadams.io from that table. (In fact, this post is a row in my Coda writing table!)

I was able to use the Coda API to upload all of my existing posts from Dropbox and write a little script that gets my content from coda when my daily Netlify job runs.

Overall, I think Coda has a lot to offer for this model of creating content, so I'm excited to try it out!

**Update [2019/11/09]**: I've found that when pulling data from the API, all rich-text comes across as plain-text without Markdown formatting. I'm getting around that right now by hitting "delete" whenever I type something that auto-formats to rich-text so that it becomes plain-text (that's okay for me right now since I don't care how it displays as I'm writing, it's just an inconvenience). It'd be nice if there was a plain-text column type.
