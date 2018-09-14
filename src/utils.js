import Projects from './data/projects.js'

const getProjectData = projPath => {
  return Projects.find(proj => {
    return proj.path == projPath
  })
}

module.exports = {
  getProjectData: getProjectData
}
