import React from 'react'
import './herosection.css'
import{ ReactComponent as HeroBanner } from '../Common/Utils/hero_section_banner.svg'
function HeroSection() {
  return (
    <div className='hero-section'>
      <p className='hero-section-headline'>
        Connecting Global Leaders To Aspiring Minds
      </p>
       <div className="hero-section-banner-slider">
            <HeroBanner/>
       </div>
         
     
      <div className='hero-section-headline-tabs' >
        <ul>
            <li>Talent Visa</li>
            <li>Career Guidance</li>
            <li>Marketing</li>
            <li>Startup Mentor</li>
        </ul>
      </div>
      <div className='hero-section-footer'>
        <p>Explore your interest with expert mentorship from leaders around the globe.</p>
        <button>Find</button>
      </div>
    </div>
  )
}

export default HeroSection
