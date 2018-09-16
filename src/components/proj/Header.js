import React, {Component} from 'react'
import './header.scss'
import {SiteConsumer} from '../SiteContext'

const Content = ({project}) => (
  <SiteConsumer>
    {({scroll}) => (
      <section className='projHeader'>
        <div className='explore-more' onClick={() => window.scrollTo(0, document.querySelector('.projectPage').offsetTop+100)}>
          <h2>MORE</h2>
          <div/>
        </div>
        <div className='projHeader-block1'/>
        <div className='projHeader-block2'/>
        <div className='container'>
          <div className='projHeader-image' style={Object.assign({backgroundImage: `url(${project.thumbnail})`}, scroll('.projHeader-image'))}/>
          <div className="projHeader-info">
            <h1>{project.name}</h1>
            <p className="projHeader-overview">{project.overview}</p><br/>
            <p><span>YEAR</span> — {project.year}</p>
            <p><span>ROLE</span> — {project.role.join(", ")}</p>
            <p><span>SCOPE</span> — {project.scope.join(", ")}</p>
            {project.hasOwnProperty("link")&&
              <p><a className="button" href={project.link} target="_blank">SEE PRODUCT</a></p>
            }
          </div>
        </div>
      </section>
    )}
  </SiteConsumer>
)


export default Content
