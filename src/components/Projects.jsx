import React from "react";
import styles, { layout } from "../style";
import { motion } from "framer-motion";
import projects from "../assets/api/projects";

import myImg from "../assets/images/DSCF6458.JPG";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={`${layout.section} max-w-full overflow-hidden`}
    >
      <h3 className={`${styles.heading1}`}>Projects</h3>

      <div className="relative w-full flex overflow-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src=""
              alt="Image"
              className="object-cover"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                {project.name}
              </h4>
              <p className="text-lg text-center md:text-left">
                {project.description}
              </p>
            </div>
            <div className="">
              <button className="mainBtn">
                <a href={project.github}>Github project</a>
              </button>
              <button className="mainBtn">
                <a href={project.live}>Live version</a>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
