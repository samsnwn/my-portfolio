import React from "react";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="bg-discount-gradient text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header />
      <main>
        <section id="hero" className="snap-center">
          <Hero />
        </section>

        <section id="about" className="snap-start">
          <About />
        </section>

        {/* <section id="experience" className="snap-center">
          <Experience />
        </section> */}

        <section id="projects" className="snap-center">
          <Projects />
        </section>

        <section>
          <Skills />
        </section>

        <section>
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Home;
