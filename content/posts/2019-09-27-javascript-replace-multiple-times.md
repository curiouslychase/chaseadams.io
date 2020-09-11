---
title: Replace Multiple Instances of Pattern in JavaScript
date: 2019-09-27T00:00:00.000Z
type: post
status: draft
aliases:
  - /2019-09-27-replace-multiple-instances-of-pattern-in-javascript/
  - /2019/2019-09-27-javascript-replace-multiple-times/
permalink: /posts/replace-multiple-instances-of-pattern-in-javascript/
---



If you want to replace a pattern multiple times with the JavaScript `replace` method, you have to use a regular expression with the global flag.

Replacing **the first found instance** is achieved with the following:

```js
"this is a string".replace(" ", "-");
```

Result:

```
"this-is a string"
```

When calling the `replace` method with a string as the first argument, it will only replace the first instance with the replace value (in this case `"-"`).

Replacing **all found instances** is achieved with a regular expression and global flag:

```js
"this is a string".replace(/ /g, "-");
```

Result:

```
"this-is-a-string"
```

When the `replace` method with a regular expression and the global flag, it will replace all instances with the replace value.
