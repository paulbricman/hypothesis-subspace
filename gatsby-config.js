module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/hello`,
      },
    },
  ],
  siteMetadata: {
    title: `Hypothesis Subspace`,
  },
  pathPrefix: "/hypothesis-subspace",
}
