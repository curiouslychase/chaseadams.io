---
title: >-
  Fix Docker Error: GitHub Actions Entrypoint Executable Error
date: "2019-05-04"
tags:
  - GitHub Actions
  - Docker
aliases:
  - /2019-05-04-catching-a-github-actions-entrypoint-executable-error/
  - /notes_to_self/permission_denied_entrypoint/
  - posts/catching-a-github-actions-entrypoint-executable-error/
permalink: /posts/fix-docker-error-github-actions-entrypoint-executable-error/
type: post
status: published
---

## Error

```shell
Error response from daemon: OCI runtime create failed: container_linux.go:348: starting container process caused "exec: \"/entrypoint.sh\": permission denied": unknown
```

## Solution

If you're using GitHub Actions, you'll get this when you've forgotten to set the `entrypoint.sh` as an executable. You can fix this error by running `chmod +x </path/to/>entrypoint.sh` (replacing `</path/to>` with the directory path from the proectx root) and committing it.

## When Have I see this?

When I'm creating a GitHub Action and I forget to set the `entrypoint.sh` as an executable, I'll see this error when the Actions container runs.
