import React from 'react'
import './landpage.scss'
import Link from 'gatsby-link'
import LoadScreen from '../loadscreen/Load'
import {SiteConsumer} from '../SiteContext'
const Content = () => (
    <SiteConsumer>
      {({loadedSite, updateLoadStatus}) => (
        <section className='landpage'>
          <LoadScreen loadedSite={loadedSite} update={updateLoadStatus}/>
          <div className='container'>
            <div>
              <h1>SU LI</h1>
              <h1><span>Front End Developer</span> & <span>UX Designer</span></h1>
              <h3>I design and build things like apps and websites</h3>
              <h3>Just slightly obsessed with empty spaces</h3>
            </div>
          </div>
          <div className='explore-work' onClick={() => window.scrollTo(0, document.querySelector('.work').getBoundingClientRect().top)}>
            <h2>WORK</h2>
            <div/>
          </div>
          <Link to="/about">
            <div className='explore-about'>
              <h2>ABOUT</h2>
              <div/>
            </div>
          </Link>
        </section>
      )}
    </SiteConsumer>
)

export default Content
