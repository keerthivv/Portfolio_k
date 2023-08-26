import React from 'react'
import './portfolio.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function Portfolio() {
  return (
    <div className='portfolio' id="portfolio">
      <h1>Projects</h1>
      <div className="container">
         <a href="https://github.com/keerthivv/CinemExplore/tree/master/" target="_blank" rel="noopener noreferrer" className="item">
            <img src="/images/cinemexplore.png" alt="cinemexplore"/> 
            <h3>CinemExplorer</h3>
         </a>
         <a href="https://647f1b8b5e1d3516f9bac5a2--merry-cascaron-759c5b.netlify.app/" target="_blank" rel="noopener noreferrer" className="item">
           <img src="/images/wordcraft.png" alt="wordcraft"/> 
           <h3>Wordcraft</h3>
         </a>
         <a href="https://github.com/keerthivv/Quiz_App/tree/master" target="_blank" rel="noopener noreferrer" className="item">
           <img src="/images/quiz.png" alt="quiz"/>
           <h3>Quiz</h3> 
        </a>
        <a href="https://github.com/keerthivv/Portfolio_k/blob/master/" target="_blank" rel="noopener noreferrer" className="item">
           <img src="/images/portfolio.png" alt="portfolio"/>
           <h3>Portfolio</h3> 
        </a>
        <a href="https://github.com/keerthivv/image-slider/tree/main" target="_blank" rel="noopener noreferrer" className="item">
           <img src="/images/slider.png" alt="slider"/> 
           <h3>Slider</h3>
        </a>
        <a href="https://github.com/keerthivv/Dental/tree/main" target="_blank" rel="noopener noreferrer" className="item">
           <img src="/images/dental.png" alt="dental"/> 
           <h3>Dental Webpage</h3>
        </a>
      </div>
      <a href='#contact'>
      <ExpandMoreIcon className='arrow'/>
      </a>
    </div>
  )
}
