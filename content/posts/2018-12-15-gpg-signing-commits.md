---
title: GPG Signing Commits
date: 2018-12-15T00:00:00.000Z
type: post
status: ideation
aliases:
  - /2018-12-15-gpg-signing-commits/
  - /2018/2018-12-15-gpg-signing-commits/
permalink: /posts/gpg-signing-commits/
---



This guide could use a lot of love, but it's been low on my list of priorities. If you're interested in me elaborating, let me know on [Twitter at chaseadamsio](https://twitter.com/chaseadamsio).

- when setting up gpg on a new machine, if you see this error: "Inappropriate ioctl for device", add this to the `.bashrc` (source: [gnupg2: gpg: public key decryption failed: Inappropriate ioctl for device · Issue #14737 · Homebrew/homebrew-core](https://github.com/Homebrew/homebrew-core/issues/14737)):

    ```shell
    GPG_TTY=$(tty)
    export GPG_TTY
    ```

    Extra Resources:
      - [Verifying GitHub Commits with Keybase.io](https://www.promptworks.com/blog/verifying-github-commits-with-keybase)
      - [gnupg - Git error - gpg failed to sign data - Stack Overflow](https://stackoverflow.com/questions/41052538/git-error-gpg-failed-to-sign-data)
      - [Git - Signing Your Work](https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work)
      - [Using Keybase with GPG on macOS - Scott's Weblog - The weblog of an IT pro focusing on cloud computing, Kubernetes, Linux, containers, and networking](https://blog.scottlowe.org/2017/09/06/using-keybase-gpg-macos/)
- how to setup a [Pretty iTerm2 with a modern titlebar 💄💅](https://www.felixjung.io/posts/pretty-iterm2-with-a-modern-titlebar/)
  - build nightly iterm2 in brew:

    ```shell
    tap "homebrew/cask-versions"
    cask "iterm2-nightly"
    ```

## Resources:

- [GPG and git on macOS](https://gist.github.com/danieleggert/b029d44d4a54b328c0bac65d46ba4c65)

[github - gpg failed to sign the data fatal: failed to write commit object [Git 2.10.0] - Stack Overflow](https://stackoverflow.com/questions/39494631/gpg-failed-to-sign-the-data-fatal-failed-to-write-commit-object-git-2-10-0) - this is the best resource for setting up your keychain so that you don't have to continually put the key in every time.

[pstadler/keybase-gpg-github: Step-by-step guide on how to create a GPG key on keybase.io, adding it to a local GPG setup and use it with Git and GitHub.](https://github.com/pstadler/keybase-gpg-github)

[Sign your commits on GitHub with GPG – Timmy – Medium](https://medium.com/@timmywil/sign-your-commits-on-github-with-gpg-566f07762a43)

[Signing your Git Commits using GPG on MacOS Sierra/High Sierra](https://gist.github.com/troyfontaine/18c9146295168ee9ca2b30c00bd1b41e)

[How to verify an imported GPG key - Server Fault](https://serverfault.com/questions/569911/how-to-verify-an-imported-gpg-key)

[A Git Horror Story: Repository Integrity With Signed Commits](https://mikegerwitz.com/papers/git-horror-story)

[[Keybase.io] Add another E-Mail to your Keybase.io Public Key - Nico Maas](https://www.nico-maas.de/?p=1522)

[Using Keybase with GPG on macOS - Scott's Weblog - The weblog of an IT pro focusing on](https://blog.scottlowe.org/2017/09/06/using-keybase-gpg-macos/)

[cloud computing, Kubernetes, Linux, containers, and networking](https://blog.scottlowe.org/2017/09/06/using-keybase-gpg-macos/)

[Keybase can't find the secret key, although it claims it's stored · Issue #2800 · keybase/keybase-issues](https://github.com/keybase/keybase-issues/issues/2800)

[GPG - How to trust an imported key - Pang Yan Han's blog](https://yanhan.github.io/posts/2014-03-04-gpg-how-to-trust-imported-key.html)
