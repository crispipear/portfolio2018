import React, {Component} from 'react'

const SiteContext = React.createContext({
  loadedSite: false,
  updateLoadStatus: () => null
})

export const SiteConsumer = SiteContext.Consumer

export class SiteProvider extends Component {
  state = {
    loadedSite: false
  }
  updateLoadStatus = status => {
    this.setState({loadedSite: status})
  }
  render(){
    return(
      <SiteContext.Provider
        value={{
          loadedSite: this.state.loadedSite,
          updateLoadStatus: this.updateLoadStatus
        }}
      >
        {this.props.children}
      </SiteContext.Provider>
    )
  }
}
