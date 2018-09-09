import React, {Component} from 'react'
import './about.scss'
import Profile from '../../../static/avatar.jpg'
import Resume from '../../../static/suli_resume.pdf'

const skills = [
  {
    cat: 'General',
    content: ['Front End Development', 'UI/UX Design', 'Video Prototyping', 'Design/Art Direction']
  },
  {
    cat: 'Technical',
    content: ['Javascript', 'React & React Native', 'Redux', 'Jquery', 'Node', 'HTML/CSS', '(...see more in resume)']
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
            <p><a href="mailto:hiiamsuli@gmail.com">CONTACT</a> </p>
            <p><a href={Resume} target="_blank">RESUME</a></p>
          </div>
          <div className='aboutContent'>
            <h1>Hey there, my name is Su Li / 李素莹</h1>
            <p>
              Currently a <span>Front End Developer & Designer</span> at iSoftStone North America and breaking stuff somewhere in Everett.
              Also an Interactive Media Design Student at University of Washington, Bothell.
            </p>
            <p>
              I am passionate about creating beautiful products that connect the users and technology together.
              My experience of collaborating with engineers to build applications support to deliver consumer experiences was one of the highlights in
              my life that inspired me to keep learning about design and development.
            </p>
            <h2>Skills —</h2>
            <div className='skillsContainer'>
            {
              skills.map((skill, key) => (
                <div className='skills' key={key}>
                  <h2>{skill.cat}</h2>
                  <div>
                  {
                    skill.content.map(skill => (
                      <span>{skill}</span>
                    ))
                  }
                  </div>
                </div>
              ))
            }
            </div>
            <p>
              When I am not breaking stuff I like to play games and eat good food :^)
            </p>
          </div>
        </div>
      </section>
    )
  }
}
