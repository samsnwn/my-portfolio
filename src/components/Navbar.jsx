import React from "react";
import styles from '../style'

const Navbar = () => {
  return (
    <nav className={`${styles.paddingX} flex justify-between w-full h-10 items-center`}>
      <div>
        Logo
      </div>

      <div>
        <ul className={`${styles.flexCenter} ${styles.paddingX}`}>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
