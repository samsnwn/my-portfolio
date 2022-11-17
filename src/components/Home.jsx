import React from 'react'
import Header from './Header'
import Hero from './Hero'

const Home = () => {
  return (
    <div className="bg-discount-gradient text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
        <Header/>

        <section id="hero" className="snap-center">
            <Hero/>
        </section>
    </div>
  )
}

export default Home