import React from "react";
import * as styles from "../Styles/Navbar.module.css";
import Logo from "../images/logo.svg";
import hamIcon from "../images/Ham Icon.svg";
import { motion, transform } from "framer-motion";
import { navigate } from "gatsby";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

const Navbar = ({ setRegPage, setShowBlackScreen, isHamOpen, setIsHamOpen }) => {
  const goToNextPage = () => {
    setShowBlackScreen(true);
    setTimeout(() => {
      setShowBlackScreen(false);
    }, 2000);

    setTimeout(() => {
      setRegPage(true);
    }, 1000);
  };

  const navbarVariants = {
    open: {
      y: 0,
      transition: {
        delay : 0,
        duration: 1,
        ease: "easeInOut",
      },
    },
    closed: {
      y: -150,
      transition: {
        delay : 1,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <React.Fragment>
      <motion.div
        className={styles["navbarContainer"]}
        initial={{ y: [-150] }}
        animate={isHamOpen ? "closed" : "open"}
        variants={navbarVariants}
      >
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

        <div className={styles["navbarRightCorner"]}>
          <div className={styles["registerBtn"]} onClick={goToNextPage}>
            <p>REGISTER</p>
          </div>
          <div className={styles["hamburger"]} onClick={setIsHamOpen}>
            <img src={hamIcon} alt="hamIcon" />
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default Navbar;
