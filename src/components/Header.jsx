import React from "react";
import { SocialIcon } from "react-social-icons";
import {motion} from 'framer-motion'
import styles from "../style"

const Header = () => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      <motion.div className="flex flex-row items-center" initial={{x: -500, opacity: 0, scale: 0.5}} animate={{x:0, opacity: 1, scale:1}} transition={{duration:1.5}}>
        {/* Social Icons */}
        <SocialIcon
          url="https://www.github.com/samsnwn"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/samuelcglantz/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
        network='youtube'
          url="https://www.linkedin.com/in/samuelcglantz/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div className={`flex flex-row items-center ${styles.textColor300} cursor-pointer`} initial={{x:500, opacity:0.5, scale:0.5}} animate={{x:0, opacity: 1, scale:1}} transition={{duration:1.5}} >
        <SocialIcon
          url="https://www.linkedin.com/in/samuelcglantz/"
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className={`uppercase hidden md:inline-flex text-sm ${styles.textColor400}`}>
          Get in touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
