---
title: "Install dig and nslookup dependencies on Docker Containers"
description: How to install dig on Ubuntu.
date: 2020-02-28
type: post
status: published
tags:
    - Docker
    - Linux
    - Developer Experience
aliases:
    - posts/installing-linux-dependencies/
permalink: /posts/install-dig-and-nslookup-linux/
image: img/share/install-dig-and-nslookup-docker.jpeg
---

I often find myself working in Docker containers interactively and when I do, the images I use don't usually have `dig` or `nslookup` installed. This is further complicated by the fact that those utilities aren't standalone packages, so I forget which collection of utilities they belong to. Here's how to install `dig` and `nslookup` with a few Linux flavored package managers.


## Install dig and nslookup on Ubuntu (Debian)

`dig` and `nslookup` are in `dnsutils` on Ubuntu (debian):

```shell
apt update && apt install dnsutils
```

## Install dig and nslookup on ArchLinux

`dig` and `nslookup` are in `bind-tools` on ArchLinux:

```shell
pacman -Syu && pacman -Sy dnsutils
```

## Install dig and nslookup on OpenSUSE

`dig` and `nslookup` are in `bind-tools` on OpenSUSE:

```shell
zypper update && zypper install dnsutils
```

## Install dig and nslookup on Alpine

`dig` and `nslookup` are in `bind-tools` on Alpine:

```shell
apk update && apk add bind-tools
```

## Verify Install

Now that they're installed you can run `dig -v` and `nslookup -v` to verify they're present.
