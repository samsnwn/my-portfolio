import React from "react";
import { motion } from "framer-motion";
import myImg from "../assets/images/DSCF6458.JPG";
import styles from "../style";

const About = () => {
  return (
    <motion.div
      className=" h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3
        className={`absolute top-[15%] uppercase tracking-[20px] ${styles.textColor500} text-2xl`}
      >
        About
      </h3>

      <motion.img
        src={myImg}
        alt="My picture"
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        view={{ once: true }}
        className=" about-img md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:h-[600px] relative sm:top-20 top-20"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="secondary-header text-2xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[var(--main-color)]">
            little
          </span>{" "}
          about myself
        </h4>
        <p className="max-[346px]:text-sm max-[346px]:mt-5">
          After the recent completion of my studies as Full Stack Web Developer,
          my next challenge is to begin an intership that provides me the tools
          to continue growing as a developer, giving me as well the chance to
          share my skills and knowledge with a team, gaining experience and
          achieving desired results. I have developed over the year a strong
          passion in creating web applications with the best possible user
          experience, as well as ensuring best security practices, improving one
          day at a time using different technologies and methods, as well as
          working as a team in big projects with specific tasks for each member.
          My goal is to deliver enterprise-level digital products, providing
          solution-orientated approaches, as well a customer-level applications,
          making daily tasks easier to accomplish.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
