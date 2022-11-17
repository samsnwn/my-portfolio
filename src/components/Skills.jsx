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
      className={`${layout.section} mx-w-[2000px] xl:px-10 xl:flex-row min-h-screen xl:space-y-0 mx-auto`}
    >
      <h3 className={`${styles.heading1}`}>Skills</h3>

      <h3 className={`absolute uppercase top-36 tracking-[3px]`}>
        Hover hover a skill fur current proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
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
