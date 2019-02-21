import React, { Component } from 'react';
import * as THREE from 'three';
import SmokeTexturePic from './smoke.png'
import './background.scss'

class ThreeScene extends Component{
  componentDidMount(){
    this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
    })
    const width = window.innerWidth
    const height = window.innerHeight

    this.clock = new THREE.Clock()
    this.renderer = new THREE.WebGLRenderer()
    // this.renderer.setClearColor('#000000', 0 );
    this.renderer.setSize(width, height)
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(
        75,
        width / height,
        1,
        10000
    )
    this.camera.position.z = 1000
    this.scene.add(this.camera)

    const light = new THREE.DirectionalLight('#ffffff', 0.5)
    light.position.set(-1, 0, 1)
    this.scene.add(light)
    
    const smokeTexture = THREE.ImageUtils.loadTexture(SmokeTexturePic)
    const smokeMaterial = new THREE.MeshLambertMaterial({
        color: '#ff4916',
        map: smokeTexture,
        transparent: true,
        opacity: 0.25
    })
    const smokeGeometry = new THREE.PlaneGeometry(300,300)
    this.smokeParticles = []

    for(let p = 0; p < 125; p++){
        let particle = new THREE.Mesh(smokeGeometry, smokeMaterial)
        particle.position.set(
            Math.random() * 450 - 200,
            Math.random() * 450 - 200,
            Math.random() * 1000 - 100
        )
        particle.rotation.z = Math.random() * 360
        this.scene.add(particle)
        this.smokeParticles.push(particle)
    }

    this.mount.appendChild(this.renderer.domElement)

    this.start()
  }
componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }
start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }
stop = () => {
    cancelAnimationFrame(this.frameId)
  }
animate = () => {
    this.delta = this.clock.getDelta()
    this.frameId = window.requestAnimationFrame(this.animate)
    this.evolve()
    this.renderScene()
 }
evolve = () => {
    let sp = this.smokeParticles.length
    while (sp--){
        this.smokeParticles[sp].rotation.z += (this.delta * 0.35)
    }
}
renderScene = () => {
  this.renderer.render(this.scene, this.camera)
}
render(){
    return(
      <div
        className="smokeBg"
        style={this.state && { width: this.state.innerWidth, height: this.state.innerHeight, zIndex: -1 }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}
export default ThreeScene