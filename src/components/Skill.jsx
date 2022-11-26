import React from "react";
import { motion } from "framer-motion";
import skills from "../assets/api/skills";

const Skill = () => {
  let directionLeft = true;
  return (
    <div className="group relative flex cursor-pointer">
      {skills.map((skill, i) => (
        <div key={i}></div>
      ))}
      <motion.div
        initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border border-gray-500 object-cover w-16 h-16 min-[500px]:w-28 min-[500px]:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16
       min-[500px]:w-28 min-[500px]:h-28 xl:h-32 xl:w-32 z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-lg md:text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
