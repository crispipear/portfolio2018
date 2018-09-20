import React, {Component} from 'react'
import './menu.scss'
import Link from 'gatsby-link'
import {scrollTo} from '../../utils'


export default class Menu extends Component {
  state = {
    active: false
  }
  _clickLink = () => {
    this.setState({
      active: false
    })
    scrollTo(0, 0)
  }
  _toggleMenu = () => {
    this.setState({
      active: !this.state.active
    })
  }
  render(){
    return (
      <nav className={this.state.active?'open-menu':'close-menu'}>
        <div onClick={this._toggleMenu} className="burger"><span></span><span></span><span></span></div>
        <div className="menu">
          <Link to="/" onClick={this._clickLink}>HOME</Link>
          <Link to="/about" onClick={this._clickLink}>ABOUT</Link>
        </div>
      </nav>
    )
  }
}
