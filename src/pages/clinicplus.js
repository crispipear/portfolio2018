import React, {Component} from 'react'
import PageTransition from 'gatsby-plugin-page-transitions';
import Header from '../components/proj/Header'
import Footer from '../components/proj/Footer'
import {getProjectData} from '../utils.js'

const Content = () => (
  <PageTransition>
    <Header project={getProjectData("clinicplus")}/>
    <section className="projectPage">

    </section>
    <Footer page={0}/>
  </PageTransition>
)

export default Content
