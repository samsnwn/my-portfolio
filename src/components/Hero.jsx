import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import myImg from '../assets/images/DSCF6458.JPG'
import styles from '../style'
import { motion } from "framer-motion";
import NavBar from "./Navbar/NavBar";




const Hero = () => {

  const [text, count] = useTypewriter({
    words: [
      "Samuel C. Glantz",
      "samsnwn"
    ],
    loop: false,
    delaySpeed: 3000,
  });

  
  return (
    <div className="h-[75vh] md:h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src={myImg}
        alt="My picture"
        className="relative rounded-full h-32 w-32 top-2 mx-auto object-cover"
      />
      <div className="z-10">
        <h2 className={`text-sm uppercase ${styles.textColor500} pb-2 tracking-[15px]`}>
          Full Stack Web Developer
        </h2>
        <h1 className="text-3xl min-[600px]:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-2">{text}</span>
          <Cursor cursorColor="var(--main-color)" />
        </h1>
      </div>
      <motion.div
        initial={{ y: -500, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        id='navbar'
        className={`z-50 overflow-hidden`}
      >
        <NavBar/>
      </motion.div>
    </div>
  );
};

export default Hero;
