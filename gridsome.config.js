// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: "Chase Adams",
  templates: {
    Post: [
      {
        path: (node) => {
          return `${node.permalink}`;
        },
      },
    ],
    Tag: [
      {
        path: (node) => {
          return `/tags/${node.id.toLowerCase()}/`;
        },
      },
    ],
  },
  plugins: [
    {
      use: "gridsome-plugin-purgecss",
      // default options, the following will be included if you don't provide anything
      options: {
        content: [
          "./src/**/*.vue",
          "./src/**/*.js",
          "./src/**/*.jsx",
          "./src/**/*.pug",
          "./src/**/*.md",
        ],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/posts/*.md",
        typeName: "Post",
        refs: {
          tags: {
            typeName: `Tag`,
            create: true,
          },
        },
        remark: {
          plugins: ["@gridsome/remark-prismjs"],
        },
      },
    },
    {
      use: "gridsome-plugin-rss",
      options: {
        contentTypeName: "Post",
        feedOptions: {
          title: "Chase Adams",
          feed_url: "https://chaseadams.io/rss.xml",
          site_url: "https://chaseadams.io",
        },
        feedItemOptions: (node) => ({
          title: node.title,
          description: node.description,
          url: "https://chaseadams.io/post/" + node.path,
          author: "Chase Adams",
        }),
        output: {
          dir: "./static",
          name: "rss.xml",
        },
      },
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  },
};
