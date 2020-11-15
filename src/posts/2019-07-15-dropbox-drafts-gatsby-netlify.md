---
title: 'Using DropBox, Gatsby & Netlify for Scheduled Posts'
date: "2019-07-15"
type: post
status: ideation
aliases:
  - /2019-07-15-using-dropbox-gatsby-netlify-for-scheduled-posts/
  - /2019/2019-07-15-dropbox-drafts-gatsby-netlify/
permalink: /posts/using-dropbox-gatsby-and-netlify-for-scheduled-posts/
---



This was originally going to be a post on how to use file name magic and a daily Zapier scheduled task to setup content to be published on a specific day. I'm no longer pursuing a ["publishing schedule"](/posts/back-to-writing-content-in-dropbox/), so this post isn't high priority, but if you're interested in me elaborating, let me know on [Twitter at chaseadamsio](https://twitter.com/chaseadamsio).

## Development

- setup Dropbox locally
- create a task to link Dropbox

## Deployment

- call Dropbox API to get content
- Use Zapier scheduled zap to trigger a daily Netlify job

```js
/**
    * utility I used to rename all of my files based on the date
    * so that I can use netlify+dropbox to "schedule" posts
    */
const fs = require("fs");
const path = require("path");

const root = "./Apps/chaseadams.io/articles";

walkTree(root);

function walkTree(prevPath) {
    fs.readdir(prevPath, (err, files) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    files.forEach(filepath => {
        const newPath = path.join(prevPath, filepath);
        fs.stat(newPath, (err, stats) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        if (stats.isDirectory()) {
            walkTree(newPath);
        } else {
            if (!newPath.match(/\\d{4}-\\d{2}-\\d{2}/)) {
            fs.readFile(newPath, "utf8", (err, contents) => {
                const frontmatter = contents
                .split("---", 2)
                .splice(1)[0]
                .split("\\n")
                .forEach(date => {
                    if (date.startsWith("date: "")) {"
                    date = date.split(": ")[1].replace(/"/g, "");
                    if (date.match(/T/)) {
                        date = date.split("T")[0];
                    }
                    let newNewPath = newPath.split("/");
                    newNewPath[newNewPath.length - 1] = `${date}-${
                        newNewPath[newNewPath.length - 1]
                    }`;
                    newNewPath = newNewPath.join("/");
                    fs.rename(newPath, newNewPath, err => {
                        if (err) {
                        console.error(err);
                        process.exit(1);
                        }
                        console.log(
                        `${newPath} successfully renamed to ${newNewPath}`
                        );
                    });
                    }
                });
            });
            }
        }
        });
    });
    });
}
```
