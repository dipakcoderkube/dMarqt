import React, { useEffect } from 'react'
import Header from './components/Header'
import Decentralized from './components/Decentralized'
import FeatureList from './components/FeatureList'
import WhyChoose from './components/WhyChoose'
import HowWorks from './components/HowWorks'
import About_us from './components/About_us'
import Footer from './components/Footer'
import Lenis from '@studio-freight/lenis'


const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 4,
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <Header />
      <Decentralized />
      <FeatureList />
      <WhyChoose />
      <HowWorks />
      <About_us />
      <Footer />
    </>
  )
}

export default App
