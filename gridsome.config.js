// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: "Chase Adams",
  siteUrl: "https://chaseadams.io",
  icon: "./src/assets/favicon.png",
  templates: {
    Sitepage: [
      {
        path: (node) => {
          return `${node.permalink}`;
        },
      },
    ],
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
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-62564031-1",
      },
    },
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
        presetEnvConfig: {},
        shouldImport: true,
        shouldTimeTravel: true,
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
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/pages/**/*.md",
        typeName: "Sitepage",

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
          dir: "./dist",
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
