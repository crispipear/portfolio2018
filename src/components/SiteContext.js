import React, {Component} from 'react'

const SiteContext = React.createContext({
  loadedSite: false,
  updateLoadStatus: () => null,
  currentPage: 0,
  updateCurrentPage: () => null,
  scrollY: 0
})

export const SiteConsumer = SiteContext.Consumer

export class SiteProvider extends Component {
  state = {
    loadedSite: false,
    currentage: 0,
    prevScroll: 0,
    scroll: 0
  }
  componentDidMount(){
    document.addEventListener('scroll', this._updateScrollVal)
  }
  _updateScrollVal = () => {
    this.setState({scrollY: window.scrollY})
  }
  updateLoadStatus = status => {
    this.setState({loadedSite: status})
  }
  updateCurrentPage = page => {
    //projects: by index
    //homepage: 99
    //notfound: 404
    this.setState({currentPage: page})
  }
  _updateScrollVal = () => {
    let p = 0
    if(this.state.prevScroll > window.scrollY){
      p = -7.5
    }else if(this.state.prevScroll < window.scrollY){
      p = 7.5
    }
    let scroll = {
      transform: `translateY(${p}%)`
    }
    this.setState({
      prevScroll: window.scrollY,
      scroll: scroll
    })
  }

  render(){
    return(
      <SiteContext.Provider
        value={{
          loadedSite: this.state.loadedSite,
          updateLoadStatus: this.updateLoadStatus,
          currentPage: this.state.currentPage,
          updateCurrentPage: this.updateCurrentPage,
          scroll: this.state.scroll,
        }}
      >
        {this.props.children}
      </SiteContext.Provider>
    )
  }
}
