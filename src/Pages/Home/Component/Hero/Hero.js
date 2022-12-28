import React from 'react'
import './hero.css'
import Navbar from '../../../../Components/Navbar/Navbar'
import {motion} from 'framer-motion'
import Email from '../../../../Components/email_form/Email'

const Hero = () => {
  return (
    <motion.div initial={{y: -800}} animate={{y:0}} transition={{duration:2}} className='hero'>
      <Navbar/>

    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2}} className="content-container">
    <div className='hero-content'>
        <h1>Unlimited movies, TV shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2> 
        <Email/>
      </div>

    </motion.div>
      

    </motion.div>
  )
}

export default Hero
