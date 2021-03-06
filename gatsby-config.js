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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pageData',
        path: 'src/pageData'}
    },
    'gatsby-transformer-remark'
  ]
};
