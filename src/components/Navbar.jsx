import React from "react";
import { NavLink } from "react-router-dom";
import styles from '../style'

const Navbar = () => {
  return (
    <nav className={`z-100`}>
       <div className="pt-5">
          <NavLink to='#about'>
            <button className="heroBtn">About</button>
          </NavLink>
          <NavLink to='#experience'>
            <button className="heroBtn">Experience</button>
          </NavLink>
          <NavLink to='#skills'>
            <button className="heroBtn">Skills</button>
          </NavLink>
          <NavLink to='#projects'>
            <button className="heroBtn">Projects</button>
          </NavLink>
        </div>
    </nav>
  );
};

export default Navbar;
