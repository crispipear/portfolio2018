import React, {Component} from 'react'
import './about.scss'
import Profile from '../../../static/avatar.jpg'
import {SiteConsumer} from '../SiteContext'

const skills = [
  {
    cat: 'General',
    content: ['Front End Development', 'UI/UX Design', 'Application Prototyping', 'Video Prototyping', 'Design/Art Direction']
  },
  {
    cat: 'Technical',
    content: ['JavaScript', 'React & React Native', 'jQuery', 'Express.js', 'HTML/CSS', '(...and more)']
  }
]

export default class Content extends Component {
  render(){
    return(
      <SiteConsumer>
      {({scroll}) => (
          <section id="about" className='about'>
            <div className='container'>
              <div className='aboutImage' style={scroll('.aboutImage')}>
                <div className='img'>
                  <img src={Profile}/>
                </div>
                <p><a href="mailto:lisuy97@gmail.com">lisuy97@gmail.com</a></p>
              </div>
              <div className='aboutContent'>
                <p>
                  I am a <span>Front End Engineer/Developer</span> and <span>UX Designer</span> from the Greater Seattle Area. Focused on creating beautiful products, building intuitive user interfaces and designing user experiences that provide efficient
                  human-centered solutions.
                </p>
                <p>
                  Currently a Front End Developer at <span>iSoftStone North America</span>, working on UI development, native applications, and IoT network visualization at <span>Boeing: Everett</span> ✈️.
                  I am also a senior in the department of Interactive Media Design at <span>University of Washington Bothell</span> with concentrations in Front End Development and UI/UX Design.
                </p>
                <h2>I am experienced with —</h2>
                <div className='skillsContainer'>
                {
                  skills.map((skill, key) => (
                    <div className='skills' key={key}>
                    <h2>{skill.cat}</h2>
                    <div>
                    {
                      skill.content.map((skill, key) => (
                        <span key={key}>{skill}</span>
                      ))
                    }
                    </div>
                    </div>
                  ))
                }
                </div>
                <p>
                  Originally my primary focus was visual communication, but over the years technology has inspired me to keep learning about development.
                  I also like to experiment and break some stuff in the back end. When I am not breaking stuff I like to play games and eat good food :^)
                </p>
                <p>
                  This site was built with GatsbyJS with a sprinkle of three.js ✨
                </p>
              </div>
            </div>
          </section>
        )}
      </SiteConsumer>
    )
  }
}
