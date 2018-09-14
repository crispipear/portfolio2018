import React, {Component} from 'react'
import './work.scss'
import Background from '../../data/waves/thumbnail.png'
import Link from 'gatsby-link'
import ProjectsData from '../../data/projects'
import Arrow from '../../../static/arrow_light.svg'
import {SiteConsumer} from '../SiteContext'

const Content = () => (
  <SiteConsumer>
    {({scroll}) => (
      <section id="work" className='work'>
        <div className="container">
          {
            ProjectsData.map((project, key) => {
              let parallax = {}
              if(key % 2){
                parallax = scroll
              }
              return(
                <Link key={key} className="proj-div" to={`/${project.path}`} style={Object.assign(parallax)}>
                  <div className="proj-overlay"/>
                  <div className="proj-see">
                    <img src={Arrow}/>
                    <h2>SEE PROJECT</h2>
                  </div>
                  <div className="proj-thumbnail-container">
                    <div className="proj-thumbnail" style={{backgroundImage: `url(${project.thumbnail})`}}/>
                  </div>
                  <div className="proj-info">
                    <h2>{project.name}</h2>
                    <p>{`{${project.type}}`}</p>
                    <p>{project.des}</p>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </section>
    )}
  </SiteConsumer>
)


export default Content
