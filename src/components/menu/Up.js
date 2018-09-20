import React from 'react'
import './menu.scss'
import {SiteConsumer} from '../SiteContext'
import Arrow from '../../../static/arrow_dark.svg'
import {scrollTo} from '../../utils'

export default () => (
  <SiteConsumer>
    {({showScrollUp}) => (
      <img src={Arrow} className={showScrollUp?'nav-top show':'nav-top hide'} onClick={() => scrollTo(0, 0)}/>
    )}
  </SiteConsumer>
)
