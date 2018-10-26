import React, {Component} from 'react'
import './carousel.scss'
import Arrow from '../../../static/arrow_dark.svg'

export default class Carousel extends Component{
  state = {index: 0}
  _handleClick = type => {
    let i = this.state.index
    if(type == 'l'){
      i--
      if(i < 0){
        i = this.props.images.length-1
      }
    }else if(type == 'r'){
      i++
      if(i >= this.props.images.length){
        i = 0
      }
    }

    this.setState({
      index: i
    }, ()=>{console.log(this.state.index)})
  }
  render(){
    return(
      <div className='carousel'>
        <div className='imageContainer'>
          <img src={Arrow} className='arrows' onClick={() => this._handleClick('l')}/>
          <img src={this.props.images[this.state.index]}/>
          <img src={Arrow} className='arrows' onClick={() => this._handleClick('r')}/>
        </div>
        <div className='count'>
          {
            this.props.images.map((image, key) => (
              <span key={key} index={key} className={this.state.index==key ? 'countShow' : undefined}>&#x25CF;</span>
            ))
          }
        </div>
      </div>
    )
  }
}
