import React from 'react'
import { faLinkedinIn, faDribbble, faCodepen, faGithub} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const content = [
  {
    icon: faLinkedinIn,
    href: 'https://linkedin.com/in/suyingli/'
  },
  {
    icon: faDribbble,
    href: 'https://dribbble.com/crispipear'
  },
  {
    icon: faCodepen,
    href: 'https://codepen.io/crispipear/'
  },
  {
    icon: faGithub,
    href: 'https://github.com/crispipear'
  }
]

const Footer = () => (
  <div className='footer'>
       {content.map((c, key) => 
          <a key={key} href={c.href} target="_blank"><FontAwesomeIcon icon={c.icon}/></a>
        )}
       <span className="bottomLine"></span>
  </div>
)

export default Footer
