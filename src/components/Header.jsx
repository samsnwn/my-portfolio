import React, { useContext, useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import styles, { layout } from "../style";
import Hamburger from "hamburger-react";
import { Context } from "../store/Context";
import NavBar from "./Navbar/NavBar";
import MobileNavBar from "./Navbar/MobileNavBar";
import { FaDownload } from "react-icons/fa";

const Header = () => {
  const [fix, setFix] = useState(false);

  const { desktop, setDesktop } = useContext(Context);

  // const handleScroll = () => {
  //   console.log(window.scrollY);
  //   if (window.scrollY >= 200) {
  //     setFix(true);
  //   } else {
  //     setFix(false);
  //   }
  // };

  // window.addEventListener("scroll", handleScroll);

  return (
    <>
      <header
        className={`sticky top-0 flex items-center justify-between max-w-7xl mx-auto z-[5000] p-5 `}
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
          <div className="flex items-center ml-3 cursor-pointer" onClick={{}}>
            <FaDownload className={`text-[#808080] mr-2 text-lg bg-transparent`} />
            <p
              className={`uppercase hidden md:inline-flex text-sm ${styles.textColor400}`}
            >
              Download my CV
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.7 }}
        >
          <MobileNavBar />
        </motion.div>
      </header>
    </>
  );
};

export default Header;
