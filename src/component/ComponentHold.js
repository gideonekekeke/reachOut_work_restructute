import React from 'react'
import CardProps from './CardProps/CardProps'
import CountDown from './Countdown/CountDown'
import { HeroCard } from './HeroCard'
import HeroSection from './HeroSection'
import Home from './Home'
import MapComp from './MapComp/MapComp'
import AboutRap from "./qubator/AboutRap/AboutRap"
import Mission from "./qubator/Mission/Mission"


const ComponentHold = () => {
  return (
      <div>
      
      
      <HeroSection />
      
      {/* <HeroCard/> */}
       <AboutRap/>
      {/* <Home/> */}
       <br/>
       <MapComp />
      <br/>
      <br/>
      <Mission/>
    
          <CardProps/>
          <br/>
          <br/>
         
          <CountDown/>
    </div>
  )
}

export default ComponentHold