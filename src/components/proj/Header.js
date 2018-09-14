import React, {Component} from 'react'
import './proj.scss'
import {SiteConsumer} from '../SiteContext'

const Content = ({project}) => (
  <SiteConsumer>
    {({scroll}) => (
      <section className='projHeader'>
        <div className='explore-more' onClick={() => window.scrollTo(0, document.querySelector('.projectPage').getBoundingClientRect().top)}>
          <h2>MORE</h2>
          <div/>
        </div>
        <div className='projHeader-block1'/>
        <div className='projHeader-block2'/>
        <div className='container'>
          <div className='projHeader-image' style={Object.assign({backgroundImage: `url(${project.thumbnail})`}, scroll)}/>
          <div className="projHeader-info">
            <h1>{project.name}</h1>
            <p>{project.des}</p>
            <p><span>YEAR</span><br/>{project.year}</p>
            <p><span>ROLE</span><br/>{project.role.join(", ")}</p>
            <p><span>SCOPE</span><br/>{project.scope.join(", ")}</p>
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
