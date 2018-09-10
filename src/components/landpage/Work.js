import React, {Component} from 'react'
import './work.scss'
import Background from '../../data/waves/thumbnail.png'
import Link from 'gatsby-link'
import ProjectsData from '../../data/projects'

export default class Content extends Component {
  render(){
    return(
      <section id="work" className='work'>
        <div className="container">
          {
            ProjectsData.map((project, key) => (
              <div key={key} className="proj-div">
                <div className="proj-thumbnail" style={{background: `url(${require(`../../data/${project.path}/thumbnail.png`)}) no-repeat center`}}/>
                <div className="proj-info">
                  <h2>{project.name}</h2>
                  <p>/{project.type}</p>
                  <p>{project.des}</p>
                  <Link to={`/${project.path}`}>SEE PROJECT</Link>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    )
  }
}
