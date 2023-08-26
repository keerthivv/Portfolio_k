import React from 'react'
import {Person,Mail} from '@mui/icons-material';

import './topbar.scss'
export default function Topbar({menuOpen,setMenuOPen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")} id="topbar">
      <div className="wrapper">
        <div className="left">
            <a href="#intro" className='logo'>KEERTHI V</a>
            <div className="itemContainer">
                <Person className='icon'/><span>+91 9846288952</span>
            </div>
            <div className="itemContainer">
                <Mail className='icon'/><span>keerthyvasudevan.v@gmail.com</span>
            </div>
        </div>
      
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOPen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>

      </div>

      
    </div>
  )
}
