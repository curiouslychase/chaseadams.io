const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = ({ config }) => {
  // allows us to use ~ for starting paths from our TS config
  config.resolve.plugins.push(new TsconfigPathsPlugin());

  return config;
};
