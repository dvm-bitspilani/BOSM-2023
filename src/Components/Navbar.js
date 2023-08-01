import React from "react";
import * as styles from "../Styles/Navbar.module.css";
import Logo from "../images/logo.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <React.Fragment>
      <motion.div className={styles["navbarContainer"]}
      initial={{y: [-150]}}
      animate={{ y: [-150, 0] }}
      transition={{
        delay: "0",
        duration: "1",
        ease: "easeInOut",
        times: [0, 1],
      }}>
        <div className={styles["navLogo"]}>
          <img src={Logo} alt="logo" />
        </div>
        <nav className={styles["navbarLeft"]}>
          <ul>
            <li className={styles["navLinks"]}>ABOUT US</li>
            <li className={styles["navLinks"]}>EVENTS</li>
          </ul>
        </nav>
        <nav className={styles["navbarRight"]}>
          <ul>
            <li className={styles["navLinks"]}>CONTACT US</li>
            <li className={styles["navLinks"]}>SPONSORS</li>
          </ul>
        </nav>
        <div className={styles["registerBtn"]}>
          <p>REGISTER</p>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default Navbar;
