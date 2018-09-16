import React from 'react'
import './menu.scss'
import {SiteConsumer} from '../SiteContext'
import Arrow from '../../../static/arrow_dark.svg'

export default () => (
  <SiteConsumer>
    {({showScrollUp}) => (
      <img src={Arrow} className={showScrollUp?'nav-top show':'nav-top hide'} onClick={() => window.scrollTo(0, 0)}/>
    )}
  </SiteConsumer>
)
