module.exports = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: `/most-common-programming-case-types/`,
        destination: `/posts/most-common-programming-case-types/`,
        permanent: true,
      },
      {
        source: `/gatsby-drafts/`,
        destination: `/posts/gatsby-drafts/`,
        permanent: true,
      },
      {
        source: `/blog/`,
        destination: `/posts/`,
        permanent: true,
      },
      {
        source: `/writing/`,
        destination: `/posts/`,
        permanent: true,
      },
    ];
  },
};
