import React from "react";

const MobileLinks = ({closeMobileMenu}) => {

  return (
    <ul className="z-[2000] min-h-screen py-5" >
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

export default MobileLinks;
