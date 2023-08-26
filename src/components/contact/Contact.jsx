import React from 'react'
import './contact.scss'


export default function Contact() {

  
  return (
    <div className='contact' id="contact">
      <div className="left">
          <img src="/images/hello.webp" alt="shakehand" />
      </div>
      <div className="right">
          <h2>Contact</h2>
          <form action="https://getform.io/f/e706cf96-5a47-438e-a8a1-f4d6e91ae21f" method="POST">
            <input type="text" name="name" placeholder='Name'/>
            <input type="email" name="email" placeholder='Email'/>
            <textarea name="message" placeholder='Message'></textarea>
            <button type="submit">Send</button>
        </form>
                 

      </div>
     
    </div>
  )
}
