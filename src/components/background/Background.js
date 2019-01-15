import React, { Component } from 'react'
import bgImgDesktop from './desktop.png'
import bgImgLaptop from './laptop.png'
import bgImgMobile from './mobile.png'
import './background.scss'

export default class Background extends Component {
  constructor(){
    super()
    this.state = {
      renderCanvas: true,
      windowWidth: 0,
      windowHeight: 0,
      center: {},
      mouseRadius:0,
      mouse:{}
    }
  }
  componentDidMount(){
    this._drawBackground()
    this.setState({
      renderCanvas: true,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      center: {
        x: window.innerWidth/2,
        y: window.innerHeight/2
      },
      mouseRadius: Math.pow(75,2),
      mouse: {
        x: 0,
        y: 0
      }
    })
    document.addEventListener('mousemove', this._handleEvents, false)
    document.addEventListener('touchstart', this._handleEvents, false)
    document.addEventListener('touchmove', this._handleEvents, false)
    document.addEventListener('touchend', this._handleEvents, false)
    window.addEventListener('resize', this._handleWindowResize, false)
  }
  componentWillUnmount(){
    document.removeEventListener('mousemove', this._handleEvents, false)
    document.removeEventListener('touchstart', this._handleEvents, false)
    document.removeEventListener('touchmove', this._handleEvents, false)
    document.removeEventListener('touchend', this._handleEvents, false)
    window.removeEventListener('resize', this._handleWindowResize, false)
  }

  _handleWindowResize = () => {
    //TODO: need to make background dynamic based on window resize


    // this.setState({
    //   windowWidth: window.innerWidth,
    //   windowHeight: window.innerHeight,
    //   center: {
    //     x: window.innerWidt/2,
    //     y: window.innerHeight/2
    //   }
    // }, this._drawBackground())
  }
  _handleEvents = e => {
    let x,y
    x = y = 0
    switch (e.type) {
      case 'mousemove':
        x = e.clientX
        y = e.clientY
        break;
      case 'touchstart':
        x = e.changedTouches[0].clientX
        y = e.changedTouches[0].clientY
        break;
      case 'touchmove':
        e.preventDefault()
        x = e.targetTouches[0].clientX
        y = e.targetTouches[0].clientY
        break;
      case 'touchend':
        e.preventDefault()
        break;
    }
    this.setState({
      mouse: {
        x: x,
        y: y
      }
    })
  }

  _drawBackground = () => {
    var interactive = this.refs.interactive.getContext('2d'),
      reference = this.refs.reference.getContext('2d'),
      image = this.refs.backgroundImage,
      logoDimension,
      logoLocation,
      particleArr = [],
      particleAttr = {
        friction:1,
        ease: 0.075,
        spacing: 5,
        size: 1,
        color: '#5888f4'
      }

    function Particle(x, y) {
      this.x = this.originX = x;
      this.y = this.originY = y;
      this.rx = 0;
      this.ry = 0;
      this.vx = 0;
      this.vy = 0;
      this.force = 0;
      this.angle = 0;
      this.distance = 0;
    }
    Particle.prototype.update = function(mouse, radius){
      this.rx = mouse.x - this.x;
      this.ry = mouse.y - this.y;
      this.distance = this.rx * this.rx + this.ry * this.ry;
      this.force = -radius / this.distance;
      if(this.distance < radius) {
           this.angle = Math.atan2(this.ry, this.rx);
           this.vx += this.force * Math.cos(this.angle);
           this.vy += this.force * Math.sin(this.angle);
      }
      this.x += (this.vx *= particleAttr.friction) + (this.originX - this.x) * particleAttr.ease;
      this.y += (this.vy *= particleAttr.friction) + (this.originY - this.y) * particleAttr.ease;
    }

    const init = () => {
      reference.drawImage(image, logoLocation.x*1.75, logoLocation.y)
      var pixels = reference.getImageData(0, 0, this.state.windowWidth, this.state.windowHeight).data
      var index
      for (var y = 0; y < this.state.windowHeight; y += particleAttr.spacing) {
        for (var x = 0; x < this.state.windowWidth; x += particleAttr.spacing) {
          index = (y * this.state.windowWidth + x) * 4;
          if (pixels[++index] > 0) {
            particleArr.push(new Particle(x, y))
          }
        }
      }
    }

    const render = () => {
      interactive.clearRect(0, 0, this.state.windowWidth, this.state.windowHeight)
      for (var i = 0; i < particleArr.length; i++){
        let p = particleArr[i]
        interactive.fillStyle = particleAttr.color
        interactive.fillRect(p.x, p.y, particleAttr.size, particleAttr.size)
      }
    }

    const update = () => {
      for (var i = 0; i < particleArr.length; i++){
        var p = particleArr[i]
        p.update(this.state.mouse, this.state.mouseRadius)
      }
    }

    const animate = () => {
      update()
      render()
      requestAnimationFrame(animate)
    }

    const load = () => {
      interactive.clearRect(0, 0, this.state.windowWidth, this.state.windowHeight)
      reference.clearRect(0, 0, this.state.windowWidth, this.state.windowHeight)
      logoDimension = {
        x: image.width,
        y: image.height
      }
      logoLocation = {
        x: this.state.center.x - logoDimension.x / 2,
        y: this.state.center.y - logoDimension.y / 2
      }
      init()
      animate()
    }

    image.onload = () => {
      load()
    }
  }

  render(){
    let image
    if (this.state.windowWidth>1550){
      image = <img ref='backgroundImage' src={bgImgDesktop}/>
    }else if(this.state.windowWidth>1024){
      image = <img ref='backgroundImage' src={bgImgLaptop}/>
    }else if(this.state.windowWidth<=1023){
      image = <img ref='backgroundImage' src={bgImgMobile}/>
    }
    return(
      <div className='bgContainer'>
        {image}
        <canvas ref='interactive' width={this.state.windowWidth} height={this.state.windowHeight}/>
        <canvas ref='reference' width={this.state.windowWidth} height={this.state.windowHeight}/>
      </div>
    )
  }
}
