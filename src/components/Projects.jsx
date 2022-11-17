import React from "react";
import styles, { layout } from "../style";
import { motion } from "framer-motion";

import myImg from "../assets/images/DSCF6458.JPG";

const Projects = () => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={`${layout.section} max-w-full overflow-hidden`}
    >
      <h3 className={`${styles.heading1}`}>Projects</h3>

      <div className="relative w-full flex overflow-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{once:true}}
              src=""
              alt="Image"
              className="object-cover"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">
                  {" "}
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                Slack clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                et debitis laboriosam eveniet amet ad, quod modi fugit
                cupiditate sed distinctio maxime non ab unde reiciendis cumque
                quos doloremque eius praesentium dolore tempora molestias
                dolorem fugiat veniam. Libero dicta nostrum aspernatur assumenda
                corrupti at? Doloribus reiciendis tenetur quia, vel minus
                nesciunt inventore quod sit natus assumenda nostrum recusandae
                facilis aut perferendis saepe. Blanditiis aperiam ipsum maxime
                ullam mollitia. Eveniet tempore sequi nobis fugit quas quasi
                voluptatem quod iusto et aspernatur, debitis ipsam ipsum autem
                blanditiis assumenda, delectus officia id repudiandae non
                nesciunt eius provident. Dolorem perspiciatis itaque doloribus a
                reiciendis?
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
