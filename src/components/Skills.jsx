import React from "react";
import styles, { layout } from "../style";
import { motion } from "framer-motion";
import Skill from "./Skill";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={`h-[105vh] flex flex-col relative text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center max-w-full overflow-hidden`}
    >
      <h3  className={`absolute top-20 uppercase tracking-[20px] ${styles.textColor500} text-2xl`}>Skills</h3>

      <h3 className={`absolute uppercase px-10 top-48 tracking-[3px]`}>
        Hover hover a skill fur current proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5 mt-5 md:mt-20 lg:mt-20">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
      </div>
    </motion.div>
  );
};

export default Skills;
