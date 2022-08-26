module.exports = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://curiouslychase.com/:path*",
        permanent: true,
      },
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
        destination: `https://curiouslychase.com/blog/`,
        permanent: true,
      },
      {
        source: `/posts/`,
        destination: `https://curiouslychase.com/blog/`,
        permanent: true,
      },
      {
        source: `/about-me/`,
        destination: `https://curiouslychase.com/about/`,
        permanent: true,
      },
      {
        source: `/writing/`,
        destination: `https://curiouslychase.com/blog/`,
        permanent: true,
      },
    ];
  },
};
