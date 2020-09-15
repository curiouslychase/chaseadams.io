"use strict";
const fs = require(`fs`).promises;
const yaml = require(`js-yaml`);

module.exports = generateRedirects;

async function generateRedirects(redirects) {
  const _redirects = [];
  await readDirRecursive(`content/posts`, _redirects, ``);
  await readDirRecursive(`content/pages`, _redirects, ``);
  _redirects.push(`/posts/ /blog/ 301`);
  _redirects.push(`/topics/ /tags/ 301`);
  _redirects.push(`/topics/ci/cd/ /tags/ 301`);
  _redirects.push(`/topics/* /tags/:splat 301`);
  _redirects.push(
    `/eslint-disable-rules-with-comment-syntax https://eslint-disable-comment-syntax.webflow.io/ 301`
  );
  _redirects.push(
    `/eslint-disable-comment-syntax https://eslint-disable-comment-syntax.webflow.io/ 301`
  );

  await fs.writeFile(`dist/_redirects`, _redirects.join(`\n`), `utf-8`);
}

async function readDirRecursive(path, _redirects = [], prefix = ``) {
  const files = await fs.readdir(path);
  return await Promise.all(
    files
      .map((file) => `${path}/${file}`)
      .map(async (file) => {
        const stat = await fs.stat(file);
        if (stat.isDirectory()) {
          await readDirRecursive(file, _redirects);
        } else if (file.endsWith(`.md`)) {
          const frontmatter = await getFrontmatterAsJSON(file);
          if (frontmatter.aliases) {
            frontmatter.aliases.forEach((alias) => {
              _redirects.push(`${alias} ${prefix}${frontmatter.permalink} 301`);
            });
          }
        }
      })
  );
}

async function getFileContents(path) {
  return await fs.readFile(path, `utf-8`);
}

function splitContents(contents) {
  return contents.split(/^(?:-{3}(?:\n|\r)([\w\W]+?)(?:\n|\r)-{3})?([\w\W]*)*/);
}

function getYamlFromSplitContent(splitContent) {
  return splitContent[1].replace(/---/g, ``);
}

async function getFrontmatterAsJSON(path) {
  return await getFileContents(path)
    .then(splitContents)
    .then(getYamlFromSplitContent)
    .then((yamlStr) => yaml.safeLoad(yamlStr))
    .catch((err) => console.error(`unable to parse yaml: ${err}`));
}
