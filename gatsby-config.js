module.exports = {
  siteMetadata: {
    title: 'Su Li Portfolio — Front End Developer & UX Designer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 750
      }
    }
  ]
}
