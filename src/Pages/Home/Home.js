import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Hero from '../Home/Component/Hero/Hero'
import Faq from './Component/FAQ/Faq'
import Grid from './Component/Grid_sec/Grid'
import Section2 from './Component/Section_2/Section2'
import Section4 from './Component/Section_4/Section4'
import Section5 from './Component/Section_5/Section5'
import Section6 from './Component/Section_6/Section6'

const Home = () => {
  return (
    <>
      <Hero/>
      <Section2/>
      <Grid/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default Home
