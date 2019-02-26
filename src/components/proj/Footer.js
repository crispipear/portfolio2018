import React, {Component} from 'react'
import './footer.scss'
import ProjectsData from '../../data/projects'
import Arrow from '../../../static/arrow_light.svg'
import Link from 'gatsby-link'
import {scrollTo} from '../../utils'

class Content extends Component{
  state = {
    next: 0
  }
  componentDidMount(){
    let next = (this.props.page + 1 > ProjectsData.length - 1) ? 0 : (this.props.page + 1)
    this.setState({next})
  }
  render(){
    let nextProj = ProjectsData[this.state.next]
    return(
      <section className='projFooter'>
          <div className='projFooter-see'>
            <h1>NEXT PROJECT</h1>
          </div>
          <div className='projFooter-block-container'>
            <Link className='projFooter-block' to={`/${nextProj.path}`} onClick={() => scrollTo(0, 0)}>
              <div className='projFooter-block-info'>
                <h1>{nextProj.name}</h1>
              </div>
              <div className='projFooter-block-bg' style={{backgroundImage: `url(${nextProj.header})`}}/>
            </Link>
          </div>
      </section>
    )
  }
}

export default Content
