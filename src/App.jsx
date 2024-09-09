// App.js
import React from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import { Hero } from './Components/Hero/Hero';
import { LatestArticles } from './Components/LatestArticles/LatestArticles';
import { About } from './Components/About/About';
import { CTASection } from './Components/CTASection/CTASection';
import { Footer } from './Components/Footer/Footer';
import './App.css';
import { DroneXP } from './Components/DroneXP/DroneXP';

function App() {
  return (
    <>
      <div className="Overlay">
        <DroneXP />
      </div>

      <Navbar />
      <Hero />
      <section id="about-section">
        <About />
      </section>
      <LatestArticles />
      <section id="cta-section"> {/* Fixed typo here */}
        <CTASection />
      </section>
      <Footer />
    </>
  );
}

export default App;
