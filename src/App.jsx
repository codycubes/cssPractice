import React from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import { Hero } from './Components/Hero/Hero'
import { LatestArticles } from './Components/LatestArticles/LatestArticles'
import { About } from './Components/About/About'
import { CTASection } from './Components/CTASection/CTASection'
import { Footer } from './Components/Footer/Footer'
import './App.css'
import { DroneXP } from './Components/DroneXP/DroneXP'

function App() {
  return (
    <>
      <div className='Overlay' style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        
      }}>
        <DroneXP />
        
      </div>

      
      <Navbar />
      <Hero />
      <div className="about-section">
        <About />
      </div>
      <LatestArticles />
      <div className="cta-section">
        <CTASection />
      </div>
      <Footer />
    </>
  )
}

export default App
