module.exports = {
  stories: ["../src/components/**/*.stories.@(ts|mdx)"], // glob for finding stories.
  addons: [
    "@storybook/addon-docs", // enables use of MDX to write stories
  ],
};
