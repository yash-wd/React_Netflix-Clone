import React, { useState } from 'react'
import './accordion.css'
import {accord} from '../../data'
import{AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import {motion} from 'framer-motion'


const Accordion = () => {

    const [clicked, setClick] = useState(false);

    const toggle = (index)=>{
        if(clicked === index){
            return setClick(null);
        }
        else{
            setClick(index)
        }
    }

  return (
    <div className='accordion'>
        {accord.map((item, index)=>{
            return(
                <div className='accord-content' onClick={()=> toggle(index)} key={index}>
                    <button className='accord-qustion'>{item.question}
                    <span>{clicked === index ? <AiOutlineMinus/> : <AiOutlinePlus/>}</span>
                    </button>
                    <hr />
                    <motion.div className= {clicked === index ? 'answer' : 'answer close'} >
                     <p className='accord-answer'>{item.answer}</p>
                    </motion.div>
                </div>
            )
        })}
      
    </div>
  )
}

export default Accordion
