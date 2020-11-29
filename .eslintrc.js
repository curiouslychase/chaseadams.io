module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  plugins: ["import", "prettier"],
  rules: {
    /*
     * "import/order" sorts the order of import declarations, ie:
     *
     * import b from "b";
     * import { z, a } from "x";
     */
    "import/order": [
      "warn",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        groups: [
          ["external", "builtin"],
          ["internal"],
          ["index", "sibling", "parent"],
        ],
        "newlines-between": "always",
        pathGroups: [
          {
            group: "internal",
            pattern: "~/**",
          },
        ],
      },
    ],
    /*
     * Then, "sort-imports" complements "import/order" by sorting named imports,
     * like so:
     *
     * import b from "b";
     * import { a, z } from "x";
     */
    "sort-imports": [
      "warn",
      {
        ignoreCase: true,
        /*
         * This option turns off declaration sorting, as this is already handled
         * by "import/order".
         */
        ignoreDeclarationSort: true,
      },
    ],
    "prettier/prettier": "warn",
    // The front-end normalization layers relies on inferring return types, so
    // we need to disable this rule.
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
