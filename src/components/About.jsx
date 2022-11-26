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
          background
        </h4>
        <p className="max-[346px]:text-sm">
        My goal is to deliver enterprise-level digital products, providing solution-orientated approaches, as well a customer-level applications, making daily tasks easier to accomplish. My goal is to deliver enterprise-level digital products, providing solution-orientated approaches, as well a customer-level applications, making daily tasks easier to accomplish. My goal is to deliver enterprise-level digital products, providing solution-orientated approaches, as well a customer-level applications, making daily tasks easier to accomplish. My goal is to deliver enterprise-level digital products, providing solution-orientated approaches, as well a customer-level applications, making daily tasks easier to accomplish.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
