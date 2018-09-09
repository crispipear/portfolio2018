import React from 'react'
import ProjectsData from '../data/projects'
import Background from '../components/landpage/Background'
import LandPage from '../components/landpage/LandPage'
import Work from '../components/landpage/Work'
import About from '../components/landpage/About'

export default () => {
  const list = ProjectsData.map((project, key) => (
    <p key={key}>{project.name}</p>
  ))

  const scrollToWork = () => window.scrollTo(0, document.querySelector('.work').getBoundingClientRect().top)
  return(
    <div>
      <Background/>
      <LandPage scroll={scrollToWork}/>
      <Work/>
      <About/>
    </div>
  )
}
