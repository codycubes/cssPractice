

import './App.css'
import { About } from './Components/About/About'
import { CTASection } from './Components/CTASection/CTASection'
import { Footer } from './Components/Footer/Footer'
import { Hero } from './Components/Hero/Hero'
import { LatestArticles } from './Components/LatestArticles/LatestArticles'
import { Navbar } from './Components/Navbar/Navbar'

function App() {


  return (
    <>
    <Navbar />
    <Hero />
    <section id='articles'>
    <LatestArticles />
    </section>
   
   <section id='about'>
   <About />
   </section>
    
    <CTASection />
    <Footer />

    </>
  )
}

export default App
