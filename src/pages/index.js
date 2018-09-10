import React, {Component} from 'react'
import Background from '../components/background/Background'
import LandPage from '../components/landpage/LandPage'
import Work from '../components/landpage/Work'
import PageTransition from 'gatsby-plugin-page-transitions';

const Home = () => (
  <PageTransition>
    <Background/>
    <LandPage/>
    <Work/>
  </PageTransition>
)

export default Home
