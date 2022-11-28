import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import styles from "../style";
import MobileNavBar from "./Navbar/MobileNavBar";
import { FaDownload } from "react-icons/fa";

const Header = () => {

  return (
    <div className=" sticky top-0 bg-[var(--black-gradient)] z-[5000]">
      <header
        className={`flex items-center justify-between max-w-7xl mx-auto  p-5`}
      >
        <motion.div
          className="flex flex-row items-center"
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
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
          {/* <a download href="../assets/cv/Samuel Castillo Glantz_Resume.pdf">
            <div className="flex items-center ml-3 cursor-pointer">
              <FaDownload
                className={`text-[#808080] mr-2 text-lg bg-transparent`}
              />
              <p
                className={`uppercase hidden md:inline-flex text-sm ${styles.textColor400}`}
              >
                Download my CV
              </p>
            </div>
          </a> */}
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.7 }}
        >
          <MobileNavBar />
        </motion.div>
      </header>
    </div>
  );
};

export default Header;
