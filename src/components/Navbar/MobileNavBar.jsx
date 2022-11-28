import React, { useEffect, useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import MobileLinks from "./MobileLinks";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const MobileNavBar = () => {
  const [open, setOpen] = useState(false);
  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="mobile-nav">
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col bg-black"
        >
          <MobileLinks closeMobileMenu={closeMobileMenu} />
        </motion.div>
      )}
      <Hamburger
        direction="left"
        toggled={open}
        toggle={setOpen}
        className="hamburger"
        color="#7a7a7a"
      />
    </nav>
  );
};

export default MobileNavBar;
