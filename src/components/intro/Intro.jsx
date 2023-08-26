import React from 'react'
import './intro.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Intro() {
  return (
    <div className='intro' id="intro" >
      <div className="wrapper">
        <h2>Hi There, I am</h2>
        <h1> KEERTHI </h1>
        <h3>Passionate Webdeveloper </h3>
      </div>
      <div className="icons">
        <a href="https://github.com/keerthivv" target='_blank' rel="noreferrer">
          <GitHubIcon className='git'/>
        </a>
        <a href="https://linkedin.com/in/keerthi-v-26349a254" target='_blank' rel="noreferrer">
          <LinkedInIcon className='link'/>
        </a>
      </div>
      <a href='#about'>
      <ExpandMoreIcon className='arrow'/>
      </a>
    </div>
  )
}
