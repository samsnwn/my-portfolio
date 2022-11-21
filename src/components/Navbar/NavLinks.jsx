import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({closeMobileMenu}) => {
  return (
    <ul className="flex items-center z-[2000]" >
      <li onClick={closeMobileMenu}>
        {" "}
        <a href="#hero">
          <button className="heroBtn">Home</button>
        </a>
      </li>
      <li onClick={closeMobileMenu}>
        <a href="#about">
          <button className="heroBtn">About</button>
        </a>
      </li>
      <li onClick={closeMobileMenu}>
        {" "}
        <a href="#projects">
          <button className="heroBtn">Projects</button>
        </a>
      </li>
      <li onClick={closeMobileMenu}>
        {" "}
        <a href="#skills">
          <button className="heroBtn">Skills</button>
        </a>
      </li>
      <li onClick={closeMobileMenu}>
        <a href="#contact">
          <button className="heroBtn">Contact</button>
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
