module.exports = {
  siteMetadata: {
    title: 'The Super Book Club'
  },

  plugins: [
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: 'src/blog'
      }
    },
    'gatsby-transformer-remark'
  ]
};
