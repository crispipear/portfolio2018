import React, {Component} from 'react'
import PageTransition from 'gatsby-plugin-page-transitions';
import Header from '../components/proj/Header'
import Footer from '../components/proj/Footer'
import {getProjectData} from '../utils.js'

const Content = () => (
  <PageTransition>
    <Header project={getProjectData("eatlixir")}/>
    <section className="projectPage">
      <img src={require('../data/eatlixir/1.png')}/>
      <div className="block-two">
          <div>
            <h3>the problem</h3>
            <h1>How might we design a platform for healthy diet resources?</h1>
            <p>
            The unhealthy eating phenomenon is very common in the fast-pace society today. Some people consume too much junk food and some people often skip meals. 
            These unhealthy eating habits often causes health problems such as indigestion, loss of sleep quality and loss of appetite.
             Unhealthy eating habits can also lead to major problems such as obesity, heart diseases, strokes and more.
            </p>
          </div>
          <img src={require('../data/eatlixir/fastFood.jpeg')}/>
      </div>
      <div className="block">
        <h3>target audience</h3>
        <h1>Who cares about this problem?</h1>
        <p>
          The target audience of this platform will include individuals looking to improve their diet or eating habits, individuals with health problems, nutritionists, doctors,
          and the general public interested looking for recipes.
        </p>
        <img src={require('../data/eatlixir/persona1.png')}/>
        <img src={require('../data/eatlixir/persona2.png')}/>
      </div>
      <div className="block-two">
          <img src={require('../data/eatlixir/herb.jpeg')}/>
          <div>
            <h3>potential solution</h3>
            <h1>Healthy, yet tasty and interesting food</h1>
            <p>
              Study has shown that medicinal diet is capable of subtly improving human body health conditions. 
              In addition, the Chinese herbology studies believe that some food ingredients have their own characteristics and perform different tasks on the human body. 
              A platform that allows users to find information that relieves health problems will be convenient for those who wish to explore different dietary options.  
            </p>
            <p>
              The goal of the platform will be <b>engage audience to improve eating habits and reduce junk food consumption</b>.
              It should also provide useful information and guidance to medicinal diet that help users relieve health problems.
            </p>
          </div>
      </div>
      <div className="block">
        <h3>the design</h3>
        <h1>General Flow</h1>
        <p>
          The anticipated features of the platform includes medicinal food ingredients information and diet recipes directory, personal body health test,
          personal page to store data and an online symptoms diagonsis tool.
        </p>
        <img src={require('../data/eatlixir/wf1.png')}/>
        <img src={require('../data/eatlixir/wf2.png')}/>
      </div>
      <div className="block">
        <h3>the product</h3>
        <h1>Web Prototype</h1>
        <img src={require('../data/eatlixir/web1.png')}/>
        <img src={require('../data/eatlixir/web2.png')}/>
        <img src={require('../data/eatlixir/web3.png')}/>
        <img src={require('../data/eatlixir/web4.png')}/>
      </div>
    </section>
    <Footer page={2}/>
  </PageTransition>
)

export default Content
