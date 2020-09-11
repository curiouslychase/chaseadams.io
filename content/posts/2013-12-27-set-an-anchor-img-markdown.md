---
date: 2013-12-27T00:00:00.000Z
title: Set An Anchor Link On An Image In Markdown
aliases:
  - /2013/12/set-an-anchor-link-on-an-image-in-markdown/
permalink: /posts/set-an-anchor-link-on-an-image-in-markdown/
description: Learn how to create an anchor link on an image in Markdown.
type: post
status: published
---


Markdown. I use it daily in writing blog posts, README's or answering questions on [stackoverflow.com](https://www.stackoverflow.com). One undocumented capability of markdown is how to create an image inside an anchor.

This week, I was drafting a post where I wanted to use book covers and have them link to their Amazon product page. I haven't done it before, but I figured, "Hey, this should be simple, I'll check the docs!" 30 minutes after <em>scouring</em> the docs, I realized it wasn't there. So I decided to experiment.

I knew how to create anchors using both inline and reference styles:

```md
<!-- Reference -->
[1]: https://www.bower.io
[My Bower Link][1]

<!-- Inline -->
[My Bower Link](https://www.bower.io)
```

As well as how to create Images using both inline and reference styles:

```md
<!-- Reference -->
[2]: https://bower.io/img/bower-logo.png
![Bower.io: A Frontend Package Manager. logo][2]

<!-- Inline -->
![Bower.io: A Frontend Package Manager. logo](https://bower.io/img/bower-logo.png)
```

 So I decided to wrap a referenced image within an referenced anchor, making the image the link content:

```md
<!-- The link we want our bower bird to point to -->
[1]: https://www.bower.io
<!-- The image url we want to use for our img tag source -->
[2]: https://bower.io/img/bower-logo.png

<!--
This will compile to two html nodes:
  Anchor:   [linked item][1]: <a href="1">linked item</a>
  Image:    ![alt text][2]: <img src="2" alt="alt text" />
The image node will be nested inside of the anchor node.
-->
[![Bower.io: A Frontend Package Manager. logo][2]][1]
```

and voila, here's the output:

[<img src="https://bower.io/img/bower-logo.png" alt="Bower.io: A Frontend Package Manager. logo" width="200" />](https://www.bower.io)

If you hover over the Bower bird, you'll see that it is, indeed, a link.
