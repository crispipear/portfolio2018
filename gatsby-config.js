module.exports = {
  pathPrefix: "/portfolio2018",
  siteMetadata: {
    title: 'Su Li Portfolio — Front End & UX Developer',
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
