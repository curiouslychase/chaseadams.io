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
        source: "/posts/:path*",
        destination: "https://chaseignited.com/posts/:path*",
        permanent: true,
      },
      {
        source: `/gatsby-drafts/`,
        destination: `/posts/gatsby-drafts/`,
        permanent: true,
      },
      {
        source: `/blog/`,
        destination: `https://chaseignited.com/blog/`,
        permanent: true,
      },
      {
        source: `/posts/`,
        destination: `https://chaseignited.com/blog/`,
        permanent: true,
      },
      {
        source: `/about-me/`,
        destination: `https://chaseignited.com/about/`,
        permanent: true,
      },
      {
        source: `/writing/`,
        destination: `https://chaseignited.com/blog/`,
        permanent: true,
      },
    ];
  },
};
