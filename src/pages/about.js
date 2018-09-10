import React, {Component} from 'react'
import Background from '../components/background/Background'
import Content from '../components/about/About'
import PageTransition from 'gatsby-plugin-page-transitions';


const About = () => (
  <PageTransition>
    <Background/>
    <Content/>
  </PageTransition>
)

export default About
