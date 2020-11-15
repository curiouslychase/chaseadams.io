---
title: Deploy Code with Git Push and a Post Receive Hook
date: "2014-01-22"
aliases:
  - /2014/01/deploy-code-with-git-push-and-a-post-receive-hook/
permalink: /posts/deploy-code-with-git-push-and-a-post-receive-hook/
description: Learn how to deploy code to a server by using git with post-receive hooks.
type: post
status: published
---


This is a handy trick for pushing your code and deploying it with the same command.

In your git repo on your remote server there's a directory called *`hooks`*. Create a new file in hooks called *`post-receive`* and set it as an executable by running **`chmod +x post-receive`**.

Now open post-receive and insert the following code:

```shell
#!/bin/sh

LOGFILE=./post-receive.log

DEPLOYDIR=$DEPLOYDIR # The place to deploy to.

echo -e "[log] Received push request at $( date +%F)" >> $LOGFILE
echo "[log] - Old SHA: $oldrev New SHA: $newrev Branch Name: $refname" >> $LOGFILE
echo "[log] Starting Deploy..." >> $LOGFILE

echo "[log] - Starting code update"
GIT_WORK_TREE="$DEPLOYDIR" git checkout -f
echo "[log] - Finished code update"

echo "[log] - Starting npm install..."
cd "$DEPLOYDIR"; npm install; cd -
echo "[log] - Finished npm install."

echo "[log] - Starting gulp build..."
cd "$DEPLOYDIR"; gulp build; cd -
echo "[log] - Finished gulp build."

echo "[log] - Building Hugo blog..."
cd "$DEPLOYDIR" && hugo
echo "[log] - Finished building hugo blog"

echo "[log] Finished Deploy" >> $LOGFILE
```

A few things to note:


- **`$RCA_THEME_PATH`** is an environment variable set to the absolute path to where I want my repo to checkout the code.
- **The file has to be modified to be executable.** If you don't do this, you're going to be banging your head against your keyboard until you realize you need to.

Now, once you've added your updated code and committed it, when you run **`git push origin master`** (replace *origin* with your remote name), you'll see your code change on your remote server.

## Issues with this technique

For the most part, this technique is a pretty good solution for pushing code and deploying it at the same time. One major drawback is that you have to version control your distribution directory (the compiled code for your js, css and templates), which is not generally considered a good practice.
