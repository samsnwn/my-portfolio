import React from "react";
import styles from '../style'

const Navbar = () => {
  return (
    <nav className={`z-100`}>
       <div className="pt-5">
          <a href='#about'>
            <button className="heroBtn">About</button>
          </a>
          <a href='#projects'>
            <button className="heroBtn">Projects</button>
          </a>
          <a href='#skills'>
            <button className="heroBtn">Skills</button>
          </a>
          <a href='#contact'>
            <button className="heroBtn">Contact</button>
          </a>
        </div>
    </nav>
  );
};

export default Navbar;
