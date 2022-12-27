import React from 'react'
import Translation from '../translate/Translation'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>

        <p className='call_num'>Questions? Call <a className='number' href="tel:000-800-040-1843">000-800-040-1843 </a></p>

        <div className='foot-elements'>
            <div className='footer-list'>
                <p>FAQ</p>
                <p>Investor Relations</p>
                <p>Privacy</p>
                <p>Speed Test</p>
                <Translation/>
                <p>Netflix India</p>
            </div>
            <div className='footer-list'>
                <p>Help Centre</p>
                <p>Jobs</p>
                <p>Cookie Preferences</p>
                <p>Legal Notices</p>
            </div>
            <div className='footer-list'>
                <p>Account</p>
                <p>Ways to Watch</p>
                <p>Corporate Information</p>
                <p>Only on Netflix</p>
            </div>
            <div className='footer-list'>
                <p>Media Centre</p>
                <p>Terms of Use</p>
                <p>Contact Us</p>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
