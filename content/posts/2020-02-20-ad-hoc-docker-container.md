---
title: "Create an ad hoc interactive Docker container"
date: 2020-02-20
type: snippet
status: published
description: Learn how to create an ad hoc interactive Docker container.
tags:
    - Docker
    - Developer Experience
permalink: /posts/ad-hoc-interactive-docker-container/
---

Often times I find myself wanting to spin up an ephemeral Docker container. This is the structure of the command I'll use:

```shell
docker container run --rm --interactive --tty <IMAGE> <COMMAND>
```

An example if I want to spin up an [Alpine Linux](https://alpinelinux.org/) container:

```shell
docker container run --rm --interactive --tty alpine sh
```

Running this command will open a new shell inside of my existing terminal window with the ability to interact with the container.

This command can be run more tersely with the shorthand flags for `interactive` and `tty` as well:

```shell
docker container run --rm -it alpine sh
```

The composition of the command:

- `container run`: Runs a command in a new container
- `--rm`: Automatically removes the container when it exits (when I'm done, this is really nice so that Docker doesn't end up with a bunch of dangling Docker processes [you can experiment with removing this flag, running this command a few time and exiting and running `docker ps -a` to see what that means])
- `-interactive`: Keep STDIN open even if not attached
- `-tty`: Allocate a pseudo-TTY
