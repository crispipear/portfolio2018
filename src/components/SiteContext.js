import React, {Component} from 'react'

const SiteContext = React.createContext({
  loadedSite: false,
  updateLoadStatus: () => null,
  currentPage: 0,
  updateCurrentPage: () => null,
  scroll: () => null,
  showScrollUp: false
})

export const SiteConsumer = SiteContext.Consumer

export class SiteProvider extends Component {
  state = {
    loadedSite: false,
    currentage: 0,
    showScrollUp: false
  }
  componentDidMount(){
    document.addEventListener('scroll', this._updateScroll)
  }
  _updateScroll = () => {
    if(window.scrollY > window.innerHeight/2){
      this.setState({showScrollUp: true})
    }else if(window.scrollY <= window.innerHeight/2){
      this.setState({showScrollUp: false})
    }
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
  getScroll = obj => {
    let p = 0
    if(document.querySelector(obj) != null){
      let objPos = document.querySelector(obj).offsetTop
      p = (objPos-window.scrollY) / 25
    }
    let scroll = {
      transform: `translateY(${p}%)`
    }
    return scroll
  }

  render(){
    return(
      <SiteContext.Provider
        value={{
          loadedSite: this.state.loadedSite,
          updateLoadStatus: this.updateLoadStatus,
          currentPage: this.state.currentPage,
          updateCurrentPage: this.updateCurrentPage,
          scroll: this.getScroll,
          showScrollUp: this.state.showScrollUp
        }}
      >
        {this.props.children}
      </SiteContext.Provider>
    )
  }
}
