import React, {Component} from 'react';
import './work.scss';
import Link from 'gatsby-link';
import ProjectsData from '../../data/projects';
import Arrow from '../../../static/arrow_light.svg';


class Content extends Component{
    state = {
      image: ""
    }
    componentDidMount(){
      this.setState({
        image: ProjectsData[0].thumbnail
      })
    }
    _handleHover = src => {
      this.setState({
        image: src
      })
    }
    render(){
      return(
          <section id="work" className='work'>
          <div className="container2">
            {
              ProjectsData.map((project, key) => {
                return(
                  <Link key={key} className="proj-div2" to={`/${project.path}`} onMouseOver={() => this._handleHover(project.thumbnail)}>
                    <h2>0{key+1}</h2>
                    <h1>{project.name}</h1>
                    <h3>{project.type}</h3>
                  </Link>
                )
              })
            }
          </div>
          <div className="container-image">
            <div style={{backgroundImage: `url(${this.state.image})`}}/>
          </div>
        </section>
      )
    }
  }


export default Content
