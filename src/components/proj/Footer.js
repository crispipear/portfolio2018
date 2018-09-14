import React, {Component} from 'react'
import './proj.scss'
import {SiteConsumer} from '../SiteContext'
import ProjectsData from '../../data/projects'
import Arrow from '../../../static/arrow_light.svg'
import Link from 'gatsby-link'

class Content extends Component{
  state = {
    prev: 0,
    next: 0
  }
  componentDidMount(){
    let p, n
    p = (this.props.page - 1 < 0) ? (ProjectsData.length - 1) : (this.props.page - 1)
    n = (this.props.page + 1 > ProjectsData.length - 1) ? 0 : (this.props.page + 1)
    this.setState({
      prev: p,
      next: n
    })
  }
  render(){
    let prevProj = ProjectsData[this.state.prev]
    let nextProj = ProjectsData[this.state.next]

    return(
      <section className='projFooter'>
        <div className='container'>
          <div className='projFooter-see'>
            <h1>SEE MORE PROJECTS</h1>
          </div>
          <div className='projFooter-block-container'>
            <Link className='projFooter-block' to={`/${prevProj.path}`}>
              <div className='projFooter-block-info'>
                <img src={Arrow}/>
                <h1>{prevProj.name}</h1>
              </div>
              <div className='projFooter-block-bg' style={{backgroundImage: `url(${prevProj.thumbnail})`}}/>
            </Link>
            <Link className='projFooter-block' to={`/${nextProj.path}`}>
              <div className='projFooter-block-info'>
                <img src={Arrow} style={{transform: 'scale(-1)'}}/>
                <h1>{nextProj.name}</h1>
              </div>
              <div className='projFooter-block-bg' style={{backgroundImage: `url(${nextProj.thumbnail})`}}/>
            </Link>
          </div>
        </div>
      </section>
    )
  }
}

export default Content
