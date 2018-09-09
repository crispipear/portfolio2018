import React from 'react'
import './landpage.scss'
import DownIcon from '../../../static/back.svg'
const Content = ({scroll}) => (
  <section id="home" className='landpage'>
    <div className='container'>
      <div>
        <h1>{"Hey there, I'm Su"}</h1>
        <h1><span>Front End Developer</span> & <span>UX Designer</span></h1>
        <h3>I design and build things like apps and websites</h3>
        <h3>Just slightly obsessed with empty spaces</h3>
      </div>
      <div className='seeWork'>
        <a onClick={() => scroll()}>
          see my work
        </a>
        <img src={DownIcon}/>
      </div>
    </div>
  </section>
)

export default Content
