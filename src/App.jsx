

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
    <LatestArticles />
    <About />
    <CTASection />
    <Footer />

    </>
  )
}

export default App
