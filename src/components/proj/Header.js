import React, {Component} from 'react'
import './header.scss'
import {SiteConsumer} from '../SiteContext'
import {scrollTo} from '../../utils'

export default class Content extends Component{
  state = {
    pos: null
  }
  componentDidMount(){
    this.setState({
      pos: document.querySelector('.projectPage').offsetTop+100
    })
  }
  render(){
    return (
      <SiteConsumer>
        {({scroll}) => (
          this.props.project &&
          <section className='projHeader2'>
            <div className='explore-more' onClick={() => scrollTo(0, this.state.pos)}>
              <h2>MORE</h2>
            </div>
            <div className='info'>
              <h1>{this.props.project.name}</h1>
              <div>
                <h2>year</h2>
                <p>{this.props.project.year}</p>
              </div>
              <div>
                <h2>role</h2>
                <p>{this.props.project.role.join(", ")}</p>
              </div>
              <div>
                <h2>scope</h2>
                <p>{this.props.project.tags.join(", ")}</p>
              </div>
              <div>
                <h2></h2>
                <p className='overview'>{this.props.project.overview}</p>
              </div>
              
            </div>
            <div className='background' style={{backgroundImage: `url(${this.props.project.header})`}}/>
            {/* <div className='explore-more' onClick={() => scrollTo(0, this.state.pos)}>
              <h2>MORE</h2>
              <div/>
            </div>
            <div className='container'>
              <div className="projHeader-info">
                <h1>{this.props.project.name}</h1>
                <p className="projHeader-overview">{this.props.project.overview}</p><br/>
                <p><span>YEAR</span> — {this.props.project.year}</p>
                <p><span>ROLE</span> — {this.props.project.role.join(", ")}</p>
                <p><span>TAGS</span> — {this.props.project.tags.join(", ")}</p>
                {this.props.project.hasOwnProperty("link")&&
                  <p><a className="button" href={this.props.project.link} target="_blank">SEE PRODUCT</a></p>
                }
              </div>
              <div className='projHeader-image' style={Object.assign({backgroundImage: `url(${this.props.project.thumbnail})`}, scroll('.projHeader-image'))}/>
            </div> */}
          </section>
        )}
      </SiteConsumer>
    )
  }
}
