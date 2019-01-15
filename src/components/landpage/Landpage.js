import React, {Component} from 'react'
import './landpage.scss'
import {SiteConsumer} from '../SiteContext'

export default class Content extends Component{
  render(){
    return (
      <SiteConsumer>
      {({loadedSite}) => (
          <section className={loadedSite?'landpage landpagedone':'landpage'}>
            <div className='container'>
              <div className='landpage-info'>
                <h1>Hello, my name is <span>Su Li</span>.</h1>
                <h1>I am a <span>Front End Engineer</span> & <span>UX Designer</span>.</h1>
                <h3>I design and build things like apps and websites.</h3>
                <h3>Just slightly obsessed with empty spaces.</h3>
              </div>
            </div>
          </section>
        )}
      </SiteConsumer>
    )
  }
}
