import React, {Component} from 'react'
import Content from '../components/about/About'
import Background from '../components/background/Background2'
import PageTransition from 'gatsby-plugin-page-transitions';


const About = () => (
  <PageTransition>
    <Background/>
    <Content/>
  </PageTransition>
)

export default About
