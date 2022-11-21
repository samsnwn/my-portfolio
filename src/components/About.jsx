import React from "react";
import { motion } from "framer-motion";
import myImg from "../assets/images/DSCF6458.JPG";
import styles from "../style";

const About = () => {
  return (
    <motion.div
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3
        className={`absolute top-24 uppercase tracking-[20px] ${styles.textColor500} text-2xl`}
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
        className="-mb-20 md:mb-0 flex-shrink-0w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[var(--main-color)]">
            little
          </span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          vitae numquam reiciendis dicta at excepturi libero molestias magnam
          perspiciatis assumenda id eos debitis iste sint corrupti quos itaque
          non quibusdam, molestiae saepe aspernatur sunt nostrum veniam aliquam?
          Neque hic sunt non quidem, a numquam ipsam in facere dignissimos
          maiores nisi fuga quaerat doloribus impedit tenetur cupiditate cumque.
          Omnis reprehenderit modi esse deleniti nesciunt ullam delectus
          debitis, ea fuga sint impedit repellat vero beatae error eos eius
          nihil ratione adipisci aliquid voluptas maxime? Odio enim saepe sint,
          repudiandae, nihil inventore sit tempora est impedit nisi, excepturi
          totam et tempore accusamus. Quis optio saepe quas ea ratione quasi
          cumque aliquam, enim quos.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
