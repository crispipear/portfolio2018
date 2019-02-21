import React, {Component} from 'react'
import './about.scss'
import Profile from '../../../static/avatar.jpg'
import {SiteConsumer} from '../SiteContext'

const skills = [
  {
    cat: "The things I am good at —",
    content: ['Front End Development', 'Web/App Development', 'UI/UX Design', 'Rapid Prototyping', 'Video Production']
  },
  {
    cat: "Few things in my skillbox —",
    content: ['JavaScript', 'HTML', 'CSS/SCSS', 'React.js', 'React Native', 'Node.js', 'jQuery']
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
                <h1>Yes, I design and I code</h1>
                <p>
                  I am a <span>Front End Developer</span> and <span>UX Designer</span> based in the Greater Seattle Area. Focused on creating beautiful products, building intuitive user interfaces and designing user experiences that provide efficient
                  human-centered solutions.
                </p>
                <p>
                  Currently at <span>iSoftStone North America</span>, working on UI development, native applications, and IoT network visualization at <span>Boeing: Everett</span> ✈️.
                </p>
                <p>
                  I am also a senior in the department of Interactive Media Design at <span>University of Washington</span> with concentrations in Front End Development and UI/UX Design.
                </p>
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

                <h1>My story</h1>
                <p>
                  I started out as a visual designer during the beginning of college. As I learned more in the topics relative to design, I was intrigued by the idea of designing 
                  solutions for problems through technology, which inspired me to explore the human-centered design and engineering aspect.
                </p>
                <p>
                  Over the years I find myself enjoy coding more and being able to build out my own designs is fun. I also like to experiment with data-driven projects and break some stuff in the back end. 
                  When I am not breaking stuff I like to play games and eat good food :^)
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
