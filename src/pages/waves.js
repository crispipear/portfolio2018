import React, {Component} from 'react'
import PageTransition from 'gatsby-plugin-page-transitions';
import Header from '../components/proj/Header'
import Footer from '../components/proj/Footer'
import {getProjectData} from '../utils.js'

const Content = () => (
  <PageTransition>
    <Header project={getProjectData("waves")}/>
    <section className="projectPage">
      <div className="container block-video">
        <iframe src="https://player.vimeo.com/video/258755013" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen={true}></iframe>
      </div>
      <div className="block-two">
        <div>
          <h3>the problem</h3>
          <h1>Stress is also a mental health issue.</h1>
          <p>
            Mental health is an underlying issue within our society. While depression is one of the highest cause suicidal deaths among youth,
            stress is also a mental health issue among the general public especially students. College students often feel anxious and stressed trying to balance school, work,
            friends and family while also trying to figure out other life problems. Since stress is common in the society,
            people usually do not see stress as a serious mental health issue and do not deal with it properly.
          </p>
        </div>
        <img src={require('../data/waves/image.png')}/>
      </div>
      <div className="block">
        <h3>research</h3>
        <h1>It is healthier to talk about stress.</h1>
        <p>
          We decided to focus on college students as our primary target audience. Based on our research, more than half of the college students feel overwhelmed by school and 1/3 of
          the students were negatively impacted by stress. Stress can also lead to bigger issues such as depression, insomnia, fatigue, anxiety and more. There are
          dangerous things people do to distress, for example, alcohol and drug abuse.
          It is important to deal with stress properly before it brings more negative impacts. Study has shown that sharing thoughts is a healthy way to deal with stress.
        </p>
        <img src={require('../data/waves/res1.png')}/>
      </div>
      <div className="block">
        <h3>inspiration</h3>
        <h1>Ways to visualize data</h1>
        <p>
          We also researched other related projects that visualize thoughts and ideas using the public space.
        </p>
        <div className="block-three">
          <div>
            <img src={require('../data/waves/ins1.png')}/>
            <a href="http://candychang.com/work/confessions/" target="_blank">Confessions</a>
          </div>
          <div>
            <img src={require('../data/waves/ins2.png')}/>
            <a href="http://www.notabenevisual.com/#/works/in-order-to-control/" target="_blank">In Order to Control</a>
          </div>
          <div>
            <img src={require('../data/waves/ins3.png')}/>
            <a href="https://hearingvoicesofsupport.org/" target="_blank">Hearing Voices of Support</a>
          </div>
        </div>
      </div>
    </section>
    <Footer page={1}/>
  </PageTransition>
)

export default Content
