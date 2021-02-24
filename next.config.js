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
