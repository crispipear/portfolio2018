import React from 'react'
import './landpage.scss'

const Content = () => (
    <section className='landpage'>
      <div className='container'>
        <div>
          <h1>{"Hey there, I'm Su"}</h1>
          <h1><span>Front End Developer</span> & <span>UX Designer</span></h1>
          <h3>I design and build things like apps and websites</h3>
          <h3>Just slightly obsessed with empty spaces</h3>
        </div>
      </div>
      <div className='explore' onClick={() => window.scrollTo(0, document.querySelector('.work').getBoundingClientRect().top)}>
        <h2>EXPLORE</h2>
        <div/>
      </div>
    </section>
)

export default Content
