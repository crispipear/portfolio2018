import React, {Component} from 'react'
import './about.scss'
import Profile from '../../../static/avatar.jpg'
import Resume from '../../../static/suli_resume.pdf'

const skills = [
  {
    cat: 'General',
    content: ['Front End Development', 'UI/UX Design', 'Software Prototyping', 'Video Prototyping', 'Design/Art Direction']
  },
  {
    cat: 'Technical',
    content: ['Javascript', 'React & React Native', 'Redux', 'jQuery', 'Node', 'HTML/CSS', '(...see more in resume)']
  }
]

export default class Content extends Component {
  render(){
    return(
      <section id="about" className='about'>
        <div className='container'>
          <div className='aboutImage'>
            <div className='img'>
              <img src={Profile}/>
            </div>
            <p><a href="mailto:hiiamsuli@gmail.com">SAY HELLO</a> &#x1f4ac;</p>
            <p><a href={Resume} target="_blank">DOWNLOAD RESUME</a> &#x1F649;</p>
          </div>
          <div className='aboutContent'>
            <h1>Hi, my name is Su Li / 李素莹</h1>
            <p>
              I am a <span>Front End Developer & UX Designer</span> from the Greater Seattle Area in Washington.
            </p>
            <p>
              Currently working at <span>iSoftStone North America</span> breaking stuff somewhere in Everett ✈️
              <br/>Also an undergraduate student at University of Washington, Bothell studying Interactive Media Design.
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
              I am passionate about creating beautiful products that connect the users and technology together.
              My experience of collaborating with engineers to build applications support to deliver consumer experiences was one of the highlights in
              my life that inspired me to keep learning about design and development.
            </p>
            <p>
              Even though I am focused on the front end I also like to experiment and break some stuff in the back end. When I am not breaking stuff I like to play games and eat good food :^)
            </p>
          </div>
        </div>
      </section>
    )
  }
}
