import React, {Component} from 'react'
import Work from '../components/work/Work'
import PageTransition from 'gatsby-plugin-page-transitions';

const WorkPage = () => (
  <PageTransition>
    <Work/>
  </PageTransition>
)

export default WorkPage
