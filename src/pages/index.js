import React, {Component} from 'react'
import Background from '../components/background/Background2'
import LandPage from '../components/landpage/LandPage'
import PageTransition from 'gatsby-plugin-page-transitions';

const Home = () => (
  <PageTransition>
    <Background/>
    <LandPage/>
  </PageTransition>
)

export default Home
