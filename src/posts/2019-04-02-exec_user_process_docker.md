---
title: >-
  Fix Docker Error: exec user process caused "no such file or directory"
date: "2019-04-02"
tags:
  - GitHub Actions
  - Docker
aliases:
  - /2019-04-02-error-standardinitlinuxgo207-exec-user-process-caused-no-such-file-or-directory/
  - /notes_to_self/exec_user_process_docker/
  - /posts/error-standard_init_linux.go-207-exec-user-process-caused-no-such-file-or-directory/
permalink: /posts/fix-docker-error-exec-user-process-caused-no-such-file-or-directory/
type: post
status: published
image: img/share/docker-exec-user-process-no-such-file-or-directory.jpeg
---

## Error

```shell
standard_init_linux.go:207: exec user process caused "no such file or directory"
```

## Solution

Make sure all of the scripts that are being run in the container (this is especially true for `entrypoint.sh`) are using a process that exists.

If it is an `entrypoint.sh`, you probably need to make sure to do this:

```diff
- #!/bin/bash
+ #!/bin/sh
```

If you need `bash` features, use an Alpine distro with `bash` already installed or install it in the `Dockerfile`.

### When Do I See It Most?

When I'm using Docker and the `Dockerfile` is `alpine` linux, I sometimes forget that it doesn't have `bash` installed and accidentally add the sha-bang for `#!/bin/bash`. 99.9% of the time that's okay, so I change it to `#!/bin/sh`.

This is especially true when I'm making a GitHub Action.
