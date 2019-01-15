import React, {Component} from 'react'
import './menu.scss'
import Link from 'gatsby-link'
import {scrollTo} from '../../utils'


export default class Menu extends Component {
  state = {
    workPos: null
  }
  componentDidMount(){
    this.setState({
       workPos: document.querySelector('.work').offsetTop + 50
    })
  }
  _clickLink = () => {
    scrollTo(0, 0)
  }
  _clickWork = () => {
    setTimeout(()=>{scrollTo(0, this.state.workPos)}, 600)
  }
  render(){
    return (
      <nav>
          <span className="topLine"></span>
          <span className="bottomLine"></span>
          <Link to="/" onClick={this._clickLink}>HOME</Link>
          {window.location.pathname == '/' ? <a onClick={this._clickWork}>WORK</a> : <Link to="/" onClick={this._clickWork}>WORK</Link>}
          <Link to="/about" onClick={this._clickLink}>ABOUT</Link>
      </nav>
    )
  }
}
