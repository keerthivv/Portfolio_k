import React from 'react'
import './about.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function About() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='about' id="about">
      <div className="left">
        <h2>Get to Know Me</h2>
        <p>I am a Fullstack webdeveloper with a Master's 
          degree in Computer Science and Engineering. 
          Check out some of my work in the Projects section. 
          Skilled in HTML, CSS, JavaScript, MySQL, ReactJS, 
          Java and Springboot. 
           I'm open to Job opportunities where I can 
           contribute, learn and grow. If you have a good 
           opportunity that matches my skills and experience
            then don't hesitate to contact me.</p>
            <div className="button">
            <button onClick={scrollToContact}>Contact</button>
            <a href="/images/KEERTHI V WEBDEVELOPER.pdf" download>
              <button>Resume</button>
            </a>
            </div>
      </div>
      <div className="right">
        <h2>My skills</h2>
        <div className="skills-grid">
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">JAVASCRIPT</div>
            <div className="skill">REACT JS</div>
            <div className="skill">JAVA</div>
            <div className="skill">SPRING BOOT</div>
        </div>
      </div>

      <a href='#portfolio' className="arrow-container">
      <ExpandMoreIcon className='arrow'/>
      </a>

    </div>
  )
}
