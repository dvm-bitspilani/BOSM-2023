import React from "react";
import * as styles from "../Styles/Navbar.module.css";
import Logo from "../images/logo.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className={styles["navbarContainer"]}>
        <motion.div
          className={styles["navLogo"]}
          animate={{ opacity: [0, 0.8, 1], y: [-100, 0, 0] }}
          transition={{
            delay: "3",
            duration: "1",
            ease: "easeInOut",
            times: [0, 0.7, 1],
          }}
        >
          <img src={Logo} alt="logo" />
        </motion.div>
        <motion.nav
          className={styles["navbarLeft"]}
          animate={{ opacity: [0, 0.8, 1], x: [-100, 0, 0] }}
          transition={{
            delay: "4",
            duration: ".5",
            ease: "easeInOut",
            times: [0, 0.7, 1],
          }}
        >
          <ul>
            <li className={styles["navLinks"]}>ABOUT US</li>
            <li className={styles["navLinks"]}>EVENTS</li>
          </ul>
        </motion.nav>
        <motion.nav
          className={styles["navbarRight"]}
          animate={{ opacity: [0, 0.8, 1], x: [100, 0, 0] }}
          transition={{
            delay: "4.5",
            duration: ".5",
            ease: "easeInOut",
            times: [0, 0.7, 1],
          }}
        >
          <ul>
            <li className={styles["navLinks"]}>CONTACT US</li>
            <li className={styles["navLinks"]}>SPONSORS</li>
          </ul>
        </motion.nav>
        <motion.div className={styles["registerBtn"]}
        animate={{ opacity: [0, 0.8, 1], y: [-100, 0, 0] }}
        transition={{
          delay: "3",
          duration: "1",
          ease: "easeInOut",
          times: [0, 0.7, 1],
        }}
        >
          <p>REGISTER</p>
        </motion.div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
