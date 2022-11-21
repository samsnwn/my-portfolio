import React, { useState } from "react";
import { Spin as Hamburger } from 'hamburger-react'
import NavLinks from "./NavLinks";



const MobileNavBar = () => {

  const [open, setOpen] = useState(false)
  const closeMobileMenu = () => setOpen(false)

  return (
    <nav className="mobile-nav">
      {open && <div className="flex flex-col"><NavLinks closeMobileMenu={closeMobileMenu}/></div> }
      <Hamburger direction="left" toggled={open} toggle={setOpen} className="hamburger" color="#7a7a7a"/>
    </nav>
  );
};

export default MobileNavBar;
