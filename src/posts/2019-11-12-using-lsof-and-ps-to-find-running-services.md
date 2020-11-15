---
title: Use lsof and ps to Find Running Services
type: post
status: published
modified_on: '2019-11-18'
date: "2019-11-12"
description: Learn how to use the lsof and ps utilities to find running services when debugging EADDRINUSE in NodeJS logs.
tags:
  - Bash
  - Debugging
  - NodeJS
aliases:
  - /2019-11-12-using-lsof-and-ps-to-find-running-services/
  - /2019-11-12-using-lsofand-ps-to-find-running-services/
  - /posts/using-lsof-and-ps-to-find-running-services/
permalink: /posts/how-to-use-lsof-and-ps-to-find-running-services/
image: img/share/using-lsof-and-ps-to-find-running-services.jpeg
---

Sometimes when attempting to run a NodeJS server locally, you may see an error with:

```bash
Error: listen EADDRINUSE: address already i use 127.0.0.1:4567
```

To determine what's listening on this port (and potentially stop it), you can use a combination of the `lsof` and `ps` commands.

First, use `lsof -P -i :<PORT>`  replacing `<PORT>` with the port you want to check.

We use the `-P` with `lsof` since we likely don't need the mapping for the port to a name in the network files[^1].

Take the `PID` from `lsof` and run `ps <PID>` to find what's running on this port. If it's okay to kill it, run `kill <PID>` and try to re-run your command again.

[^1]: By using `lsof -P`, it ignores the host machines conversion of port numbers to port names for network files. For example, if we ran `lsof` without `-P`, the `NAME` column would contain services that run on those ports, such as port 4567 for `bcm-reporting` or 4568 for `tram`. If you're interested in seeing what service MacOS expects to be serving on a specific port, you can run the following command and replace `4567` with the port you're curious about: `cat /etc/services | grep " 4567/tcp"`.
