import React from 'react'
import './sec6.css'
import children from '../../../../resource/section 6/children.png'

const Section6 = () => {
  return (
    <div className='sec6'>

        <div className="kids">
            <img src={children} alt="" />
        </div>

        <div className="sec6-content">
            <h1>Create profiles for children.</h1>
            <h2>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h2>
        </div>
      
    </div>
  )
}

export default Section6
