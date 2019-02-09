module.exports = {
  siteMetadata: {
    title: 'Su Li Portfolio — Front End Engineer & UX Designer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 250
      }
    }
  ]
}
