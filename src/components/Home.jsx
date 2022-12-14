import React, { useContext } from "react";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import {TbArrowBigUpLines} from 'react-icons/tb'
import { motion } from "framer-motion";
import Footer from "./Footer";
import { Context } from "../store/Context";


const Home = () => {

  const {open} = useContext(Context)

  return (
    <>
        <div className={`home bg-discount-gradient text-white h-screen overflow-x-hidden ${open && 'overflow-y-hidden'}  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 relative`}>
          <Header/>
          <main className="">
            <section id="hero" className="items-center">
              <Hero />
            </section>

            <section id="about" className="snap-start items-center">
              <About />
            </section>

            <section id="projects" className="snap-center">
              <Projects />
            </section>

            <section id="skills" className="snap-center">
              <Skills />
            </section>

            <section id="contact" className="snap-start">
              <Contact />
            </section>
            <section>
              <Footer/>
            </section>
          </main>
          <a href="#hero">
            <footer className="sticky bottom-5 w-full cursor-pointer z-[6000]">
              <motion.div className="flex items-center justify-center" >
                <TbArrowBigUpLines className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer text-[#808080]"/>
              </motion.div>
            </footer>
          </a>
        </div>
    </>
  );
};

export default Home;
