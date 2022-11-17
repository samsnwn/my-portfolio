import React from "react";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Header from "./Header";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="bg-discount-gradient text-white h-screen overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
      <Header />
      <main className="">
        <section id="hero" className="items-center">
          <Hero />
        </section>

        <section id="about" className="snap-start items-center">
          <About />
        </section>

        {/* <section id="experience" className="snap-center">
          <Experience />
        </section> */}

        <section id="projects" className="snap-center">
          <Projects />
        </section>

        <section id="skills" className="snap-center">
          <Skills />
        </section>

        <section id="contact" className="snap-start">
          <Contact />
        </section>
      </main>
      <a href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer ">
        <div className="flex items-center justify-center">
          <img className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" src="https://i.imgur.com/e2yvD6A.png" alt="" />
        </div>
      </footer>
      </a>
    </div>
  );
};

export default Home;
