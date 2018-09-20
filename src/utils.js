import Projects from './data/projects.js'

const getProjectData = projPath => {
  return Projects.find(proj => {
    return proj.path == projPath
  })
}

const scrollTo = (coord1, coord2) => {
  if (typeof window !== `undefined`) {
    window.scrollTo(coord1, coord2)
  }
}

module.exports = {
  getProjectData: getProjectData,
  scrollTo: scrollTo
}
