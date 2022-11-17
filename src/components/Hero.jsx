import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Navbar from "./Navbar";
import myImg from '../assets/images/DSCF6458.JPG'
import styles from '../style'


const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      'const name = "Samuel C. Glantz"',
      "let job = Full Stack Web Developer",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src={myImg}
        alt="My picture"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className={`text-sm uppercase ${styles.textColor500} pb-2 tracking-[15px]`}>
          Full Stack Web Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="var(--main-color)" />
        </h1>

       <Navbar/>
      </div>
    </div>
  );
};

export default Hero;
