import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import styles from "./style.js";

const App = () => {
  return (
    <div>
      <Home/>
      <main>
        {/* <Header />

        <section id="hero">
          <Hero />
        </section> */}
        {/* <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </main>
    </div>
  );
};

export default App;
