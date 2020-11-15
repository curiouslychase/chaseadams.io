---
title: >-
   Fix Docker Error: Failed Port Allocation
description: How to fix a failed Docker port allocation error.
date: "2019-05-07"
tags:
  - Docker
aliases:
  - /2019-05-07-fix-a-failed-docker-port-allocation/
  - /notes_to_self/docker-failed-port-allocation/
  - /notes_to_self/docker_failed_port_allocation/
  - posts/fix-a-failed-docker-port-allocation/
permalink: /posts/fix-docker-error-failed-port-allocation/
type: post
status: published
image: img/share/failed-port-allocation.jpeg
---



When attempting to run a Docker container with `docker container run ...`, you may see this error:

```shell
Bind for 0.0.0.0:8000 failed: port is already allocated
```

Whenever you see this error, it means that the container is unable to bind the container's exposed port to the port on the host machine.

## Solution

This is an easy fix with two steps:

1. run `lsof -i :8000` (replace `8000` with the port that's allocated in your error).

   ```shell
   lsof -i :8000
   COMMAND    PID         USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
   com.docke 1596 chaseadamsio   20u  IPv4 0x677313baaeffcfd7      0t0  TCP *:irdmi (LISTEN)
   com.docke 1596 chaseadamsio   21u  IPv6 0x677313ba9b203357      0t0  TCP localhost:irdmi (LISTEN)
   ```

   If the output has `COMMAND` of `com.docker` (as above), proceed to step 2.

   ```shell
   lsof -i :8000
   COMMAND   PID         USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
   node    46205 chaseadamsio   19u  IPv4 0x677313ba9d523357      0t0  TCP localhost:irdmi (LISTEN)
   ```

   If the output has `COMMAND` that's anything else, make a note of the `PID` for the process serving on that port and proceed to step 3.

2. run `docker ps` to get a list of running containers.

   ```shell
    docker ps
    CONTAINER ID        IMAGE                  COMMAND                   CREATED             STATUS                            PORTS                    NAMES
    20c6837d446e        crccheck/hello-world   "/bin/sh -c 'trap \"e…"   4 seconds ago       Up 3 seconds (health: starting)   0.0.0.0:8000->8000/tcp   web-test
   ```

   Under `PORT` you'll see a mapping of the `HOST PORT` (0.0.0.0:8000) -> `CONTAINER PORT` (8000/tcp). The port from your failure will be on one of the containers. Make a note of the `CONTAINER ID` and run `docker stop <CONTAINER ID>`. If you no longer need the container, run `docker rm <CONTAINER ID>` to clean it up.

3. With the `PID` from step 1 in hand, run `ps <PID>` to make sure the process serving on that port is okay to kill.

   If it is, first, check any open Terminal windows to make sure the process isn't running as a part of some other script. If it is, `ctrl-c` to send a `SIGINT`. If it isn't running in a Terminal window and you're confident that it's okay to kill, run `kill <PID>`. If you're not sure what it is, restart your host machine and see if it restarts. If the process restarts on machine booting, consider running your container on a different port.

After you've gone through the steps above, when you attempt to run `docker container run...` you should make it a little further through starting up your container.
