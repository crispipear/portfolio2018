import React, {Component} from 'react'
import PageTransition from 'gatsby-plugin-page-transitions';
import Header from '../components/proj/Header'
import Footer from '../components/proj/Footer'
import {getProjectData} from '../utils.js'

const Content = () => (
  <PageTransition>
    <Header project={getProjectData("pockethusky")}/>
    <section className="projectPage">
    <h1>testing 123</h1>
    </section>
    <Footer page={3}/>
  </PageTransition>
)

export default Content
