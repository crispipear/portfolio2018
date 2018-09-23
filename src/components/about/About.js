import React, {Component} from 'react'
import './about.scss'
import Profile from '../../../static/avatar.jpg'
import Resume from '../../../static/suli_resume.pdf'
import {SiteConsumer} from '../SiteContext'

const skills = [
  {
    cat: 'General',
    content: ['Front End Development', 'UI/UX Design', 'Application Prototyping', 'Video Prototyping', 'Design/Art Direction']
  },
  {
    cat: 'Technical',
    content: ['Javascript', 'React & React Native', 'Redux', 'jQuery', 'Node', 'HTML/CSS', '(...and more)']
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
                <p><a href="mailto:hiiamsuli@gmail.com">SAY HELLO</a> &#x1f4ac;</p>
                <p><a href={Resume} target="_blank">SEE RESUME</a> &#x1f648;</p>
              </div>
              <div className='aboutContent'>
                <h1>Hi, my name is Su Li / 李素莹</h1>
                <p>
                  I am a <span>Front End Developer & UX Designer</span> from the Greater Seattle Area. Focused on building beautiful products and designing user experiences that offers efficient
                  human centered solutions to problems.
                </p>
                <p>
                  Currently a Front End Developer <span>iSoftStone North America</span>, working on UI development, native applications, and IoT network visualization at <span>Boeing: Everett</span> ✈️.
                  Also an Interactive Media Design student at <span>UW Bothell</span>.
                </p>
                <h2>Skills —</h2>
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
                  Originally my primary focus was visual communication, but over the years technology has influenced me to the development path.
                  My experience of collaborating with engineers and building application supports to deliver consumer experiences was one of the highlights in
                  my life. It has inspired me to keep learning about design and development. 
                </p>
                <p>
                  You can see more of my visual design work on <a href="https://dribbble.com/crispipear" target="_blank">Dribbble</a>. I also like to experiment and break some stuff in the back end.
                  When I am not breaking stuff I like to play games and eat good food :^)
                </p>
              </div>
            </div>
          </section>
        )}
      </SiteConsumer>
    )
  }
}
