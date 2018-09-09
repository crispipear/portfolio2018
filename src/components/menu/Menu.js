import React, {Component} from 'react'
import './menu.scss'
import { HashLink as Link } from 'react-router-hash-link'

export default class Content extends Component {
  constructor(){
    super()
    this.state = {
      active: false
    }
  }
  _closeMenu = () => {
    this.setState({
      active: false
    })
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
          <Link smooth to="/#home" onClick={this._closeMenu}>HOME</Link>
          <Link smooth to="/#work" onClick={this._closeMenu}>WORK</Link>
          <Link smooth to="/#about" onClick={this._closeMenu}>ABOUT</Link>
        </div>
      </nav>
    )
  }
}
