import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import './email.css'


const Email = () => {
  return (
    <div className='newsletter-component'>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
       <form action="" className='newsletter'>
            <input className='email' type="email" placeholder="Email address" />
            <button>Get Started <IoIosArrowForward/> </button>
        </form>
    </div>
  )
}

export default Email
