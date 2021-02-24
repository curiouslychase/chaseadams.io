const { redirect } = require("next/dist/next-server/server/api-utils");

module.exports = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: `/most-common-programming-case-types/`,
        destination: `/posts/most-common-programming-case-types/`,
        permanent: true,
      },
    ];
  },
};
