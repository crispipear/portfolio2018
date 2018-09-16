import React, {Component} from 'react'
import './load.scss'
import {SiteConsumer} from '../SiteContext'

class Content extends Component{
  componentDidMount(){
    setTimeout(() => {
      this.props.update(true)
    }, 6000)
  }
  render(){
    return (
      <section className={'loadscreen'}>
        <div className='loadscreen-top'>
          <div className='loadscreen-bar'/>
          <div className='loadscreen-bar2'/>
        </div>
        <div className='loadscreen-bottom'>
          <div className='loadscreen-bar'/>
          <div className='loadscreen-bar2'/>
        </div>
      </section>
    )
  }
}
export default () => (
  <SiteConsumer>
    {({loadedSite, updateLoadStatus}) => (
      <Content update={updateLoadStatus}/>
    )}
  </SiteConsumer>
)
