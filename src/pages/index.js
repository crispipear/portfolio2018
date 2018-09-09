import React from 'react'
import Link from 'gatsby-link'
import ProjectsData from '../data/projects'
import Background from '../components/landpage/Background'
import LandPage from '../components/landpage/LandPage'
import Work from '../components/work/Work'

export default () => {
  const list = ProjectsData.map((project, key) => (
    <p key={key}>{project.name}</p>
  ))

  const scrollToWork = () => window.scrollTo(0, document.querySelector('.work').getBoundingClientRect().top)
  // <Link to="/page-2">Go to page 2</Link>
  return(
    <div>
      <Background/>
      <LandPage scroll={scrollToWork}/>
      <Work/>
    </div>
  )
}
