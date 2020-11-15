---
title: Full Page Webpage Screenshots with Chrome DevTools
description: Learn how to take full page screenshots of a webpage using Chrome DevTools
date: "2018-07-29"
aliases:
  - /2018/chrome-full-page-website-snapshot/
  - /2018/2018-07-29-chrome-full-page-website-snapshot/
  - /chrome-full-page-website-snapshot/
tags:
  - Chrome
  - Screenshots
  - Software Development
permalink: /posts/chrome-full-page-website-snapshot/
type: post
status: published
---



Taking full-length screenshots of a webpage is useful for client work, keeping historical references of a website or when you want to have a webpage round-up gallery to show sites that you've found around the web.

In the past, if you needed to do this, you likely did it incrementally and stitched it together or installed a separate extension in your browser (most had varying results).

Recently when I was doing some mobile web development and checking how my site looked for various devices with Chrome DevTools, I noticed that Chrome has a baked in way of taking a full length screenshot!

1. **Open DevTools.** In the application menu click **"View"**, then **"Develop"**, then **Developer Tools** (Alternatively you can save some clicks with cmd+option+i on a Mac). You should have a new pane that has tabs for "Elements", "Console", "Sources" and more and below that you will likely see the HTML of the page you're currently on.

![How to open Chrome DevTools](/img/chromescreencap_1.gif)

1. **Toggle Device Toolbar.** In the top left corner of the new pane, click the second icon from the left for **"Toggle Device Toolbar"**. A new toolbar should open at the top of the browser's window with options to change the page to be emulate displaying different devices.

![How to toggle device toolbar](/img/chromescreencap_2.gif)

1. **Take The Screenshot.** In the new device toolbar, click the **"More Options"** button (3 vertical dots) in the far right corner and click **"Capture Full Size screenshot"**.

![Now to take a full-screen screenshot of a website with Chrome DevTools](/img/chromescreencap_3.gif)

Now you can take full size screenshots with ease and natively in the browser!
