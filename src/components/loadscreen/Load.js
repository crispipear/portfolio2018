import React, {Component} from 'react'
import './load.scss'

class Content extends Component{
  componentDidMount(){
    setTimeout(() => {
      this.props.update(true)
    }, 2000)
  }
  render(){
    return (
      <section className={!this.props.loadedSite?'loadscreen':'loadscreen loaddone'}>
        <h2>WELCOME</h2>
      </section>
    )
  }
}
export default Content
