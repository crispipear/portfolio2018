import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.scss'
import favicon from '../../static/favicon.ico'
import Footer from '../components/Footer'
import Menu from '../components/menu/Menu'
import Up from '../components/menu/Up'
import {SiteProvider} from '../components/SiteContext'
import LoadScreen from '../components/loadscreen/Load'
import Mobile from '../components/Mobile'


if (typeof window !== `undefined`) {
  const scrollLib = require('really-smooth-scroll')
  scrollLib.shim()
  scrollLib.config({
    mousewheelSensitivity: 7,
    keydownSensitivity: 7
  })
}

const Layout = ({ children, data }) => (
    <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'author', content: 'Su Li'},
            { name: 'description', content: 'Front End Developer and UX Designer from Greater Seattle Area.' },
            { name: 'keywords', content: 'Su Li, Portfolio, Front End Developer, Web Developer, Design, Design Portfolio, UX Designer' },
            { name: 'viewport', content: 'width=device-width,initial-scale=1.0'}
          ]}
          link={[
            { rel: 'icon', href: favicon}
          ]}
        />
          {typeof window !== `undefined` && window.visualViewport.width <= 750
            ?
            <Mobile/>
            :
            <SiteProvider>
              <LoadScreen/>
              {/* <Up/> */}
              <Menu/>
              {children()}
              <Footer/>
            </SiteProvider>
         }
    </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
