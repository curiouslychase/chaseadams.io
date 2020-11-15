---
title: Delete Command from Bash History
date: "2019-02-01"
tags:
  - Bash
  - Shell
  - Linux
  - MacOS
aliases:
  - /2019/2019-02-01-tips-delete-item-from-bash-history/
  - /tips/delete-command-from-bash-history/
permalink: /posts/delete-command-from-bash-history/
type: post
status: published
---



I spend a lot of time in the Terminal typing bash commands, but it never fails that I want to re-run a command or **most** of a command and can't remember what it is (anyone else forget how to spell the word am...end when typing `git commit --amend -m "change my commit message"`?! (yeah, I always add an extra "m" the first time))

If you use the reverse search functionality, you've probably used your history to do this. The only way to determine if that command was maybe the right command is by running it and seeing it fail or succeed.

The best way to keep your bash `history` from potentially giving you bad info is to delete the command from your history after you've done it wrong. As an example, here are the last 4 items from my bash history:

```bash
$ history 4
 4449  ls
 4450  mkdire foo
 4451  mkdir foo
 4452  history 4
```

`history` gives you the entry number and the command that was run. Passing `history` a 4 means I only want the last 4 commands that were executed (it'll include itself in this list because it was executed).

I want to remove `mkdire foo` because `mkdire` should be `mkdir` and I don't want to ever accidentally re-run it with reverse search. You can pass `-d` and the entry number to delete the entry:

```bash
$ history -d 4450
```

Now if I run `history 4` again, I get the following results:

```bash
$ history 4
 4450  mkdir foo
 4451  history 3
 4452  history -d 4450
 4453  history 4
```

Now when I do a reverse search, I won't find that result again! 🎉
