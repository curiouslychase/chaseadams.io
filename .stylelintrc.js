module.exports = {
  processors: ["stylelint-processor-styled-components"],
  plugins: ["stylelint-order"],
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-styled-components",
  ],
  rules: {
    "property-disallowed-list": [
      "/background$/",
      "/border$/",
      "/font$/",
      "/list$/",
      "/margin$/",
      "/outline$/",
      "/padding$/",
    ],
  },
};
