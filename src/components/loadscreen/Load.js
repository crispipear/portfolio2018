import React, {Component} from 'react'
import './load.scss'
import {SiteConsumer} from '../SiteContext'

class Content extends Component{
  componentDidMount(){
    setTimeout(() => {
      this.props.update(true)
    }, 500)
  }
  render(){
    return (
      <section className={!this.props.loadedSite?'loadscreen':'loadscreen loaddone'}>
        <div className='loadscreen-top'>
          <div className='loadscreen-bar'/>
        </div>
        <div className='loadscreen-bottom'>
          <div className='loadscreen-bar'/>
        </div>
      </section>
    )
  }
}
export default () => (
  <SiteConsumer>
    {({loadedSite, updateLoadStatus}) => (
      <Content update={updateLoadStatus} loadedSite={loadedSite}/>
    )}
  </SiteConsumer>
)
