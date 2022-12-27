import React from 'react'
import './sec2.css'
import tv from '../../../../resource/section 2/tv.png'
import video1 from '../../../../resource/videos/video1.mp4'


const Section2 = () => {
  return (
    <div className='sec2'>

      <div className='sec2-content'>
        <h1>Enjoy on your TV.</h1>
        <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
      </div>

      <div className='tv'>
        <img src={tv} alt="" />
        <div className='video1'>
          <video src={video1} autoPlay muted loop></video>
        </div>
      </div>
      
    </div>
  )
}

export default Section2
