import React, {Component} from 'react'
import Content from '../components/about/About'
import PageTransition from 'gatsby-plugin-page-transitions';


const About = () => (
  <PageTransition>
    <Content/>
  </PageTransition>
)

export default About
