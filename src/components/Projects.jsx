import React from "react";
import styles, { layout } from "../style";
import { motion } from "framer-motion";
import projects from "../assets/api/projects";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={`h-[120vh] flex flex-col relative bottom-5 text-center md:text-left md:flex-row px-5 md:px-10 justify-evenly mx-auto items-center max-w-full overflow-hidden`}
    >
      <h3 className={`absolute bottom-[82%] uppercase tracking-[15px] md:tracking-[20px] ${styles.textColor500} text-2xl xl:top-20`}>Projects</h3>

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
              src={project.image}
              alt="Image"
              className="project-image object-cover max-w-[90%] md:max-w-[70%] lg:max-w-[50%] mt-40 md:mt-[10rem] mb-5 md:mb-10 xl:max-w-[40%] lg:mt-[3rem]"
            />
            <motion.div  initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }} className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-3xl md:text-4xl font-semibold text-center">
                {project.name}
              </h4>
              <p className="text-m md:text-lg text-center md:text-left">
                {project.description}
              </p>
            </motion.div>
            <div className="flex gap-5 md:gap-10 flex-col min-[600px]:flex-row">
              <button className="mainBtn">
                <a href={project.github} target="_blank">Github project</a>
              </button>
              <button className="mainBtn">
                <a href={project.live} target="_blank">Live version</a>
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
