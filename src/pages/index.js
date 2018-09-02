import React from 'react'
import Link from 'gatsby-link'
import ProjectsData from '../data/projects'
import Background from '../components/landpage/Background'
import Content from '../components/landpage/Content'

export default () => {
  const list = ProjectsData.map((project, key) => (
    <p key={key}>{project.name}</p>
  ))
  // <Link to="/page-2/">Go to page 2</Link>
  return(
    <div>
      <Background/>
      <Content/>
    </div>
  )
}
