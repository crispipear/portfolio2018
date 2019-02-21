import React, {Component} from 'react'
import './menu.scss'
import Link from 'gatsby-link'

const menuItems = [
  {
    path: "/",
    name: "HOME"
  },
  {
    path: "/work",
    name: "WORK"
  },
  {
    path: "/about",
    name: "ABOUT"
  }
]

export default class Menu extends Component {
  _clickLink = () => {
    scrollTo(0, 0)
  }
  _getPathName = () => {
    return typeof document !== `undefined` && window.location.pathname
  }
  render(){
    return (
      <nav>
          <span className="topLine"></span>
          {
            menuItems.map((m, key) => 
              <Link key={key} to={m.path} onClick={this._clickLink} className={this._getPathName() == '/'?"menu_home":"menu_pages"}>{m.name}</Link>
            )
          }
      </nav>
    )
  }
}
