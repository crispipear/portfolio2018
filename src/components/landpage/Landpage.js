import React, {Component} from 'react'
import './landpage.scss'
import Link from 'gatsby-link'
import LoadScreen from '../loadscreen/Load'
import {SiteConsumer} from '../SiteContext'
import {scrollTo} from '../../utils'

export default class Content extends Component{
  state = {
    pos: null
  }
  componentDidMount(){
    this.setState({
      pos: document.querySelector('.work').offsetTop
    })
  }
  render(){
    return (
      <SiteConsumer>
      {({loadedSite}) => (
          <section className={loadedSite?'landpage landpagedone':'landpage'}>
            <div className='container'>
              <div className='landpage-info'>
                <h1>SU LI</h1>
                <h1><span>Front End Developer</span> & <span>UX Designer</span></h1>
                <h3>I design and build things like apps and websites</h3>
                <h3>Just slightly obsessed with empty spaces</h3>
              </div>
            </div>
            <div className='explore-work' onClick={() => scrollTo(0, this.state.pos)}>
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
  }
}
