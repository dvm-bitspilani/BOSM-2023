import React from "react";
import * as styles from "../Styles/Navbar.module.css";
import Logo from "../images/logo.svg";
import hamIcon from "../images/Ham Icon.svg";
import { motion, transform } from "framer-motion";
import { navigate } from "gatsby";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

const Navbar = ({
  setRegPage,
  setShowBlackScreen,
  isHamOpen,
  setIsHamOpen,
}) => {
  const goToNextPage = () => {
    setShowBlackScreen(true);
    setTimeout(() => {
      setShowBlackScreen(false);
    }, 2000);

    setTimeout(() => {
      setRegPage(true);
    }, 1000);
  };

  const isBrowser = typeof window !== "undefined";

  const navbarUpVariants = {
    open: {
      y: 0,
      transition: {
        delay: 0,
        duration: 1,
        ease: "easeInOut",
      },
    },
    closed: {
      y: -150,
      transition: {
        delay: 1,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const navbarDownVariants = {
    open: {
      y: 0,
      x: "-50%",
      opacity: 1,
      transition: {
        delay: 0,
        duration: 1,
        ease: "easeInOut",
      },
    },
    closed: {
      y: 150,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <React.Fragment>
      <motion.div className={styles["navbarContainer"]}>
        <motion.div
          className={styles["navLogo"]}
          initial={{ y: [-150] }}
          animate={isHamOpen ? "closed" : "open"}
          variants={navbarUpVariants}
        >
          <img src={Logo} alt="logo" />
        </motion.div>
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
          <motion.div
            className={styles["registerBtn"]}
            onClick={goToNextPage}
            initial={{ y: [-150] }}
            animate={isHamOpen ? "closed" : "open"}
            variants={navbarUpVariants}
          >
            <p>REGISTER</p>
          </motion.div>
          <motion.div
            className={styles["hamburger"]}
            onClick={setIsHamOpen}
            initial={{ y: [-150] }}
            animate={isHamOpen ? "closed" : "open"}
            variants={navbarUpVariants}
          >
            <img src={hamIcon} alt="hamIcon" />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className={styles["registerBtnMobile"]}
        onClick={goToNextPage}
        initial={{ y: 0, x: "-50%", opacity: 0 }}
        animate={isHamOpen ? "closed" : "open"}
        variants={navbarDownVariants}
      >
        <p>REGISTER</p>
      </motion.div>
    </React.Fragment>
  );
};

export default Navbar;
