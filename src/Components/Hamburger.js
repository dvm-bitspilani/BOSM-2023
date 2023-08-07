import React from "react";
import { motion } from "framer-motion";
import HamburgerLinks from "./HamburgerLinks";
import * as styles from "../Styles/Hamburger.module.css";

import galleryImg from "../images/gallery.png";
import archiveImg from "../images/archive.png";
import loginImg from "../images/login.png";
import developersImg from "../images/developers.png";

export default function Hamburger({ closeHam, isHamOpen }) {
  React.useEffect(() => {
    const hamburger = document.querySelector(`.${styles["hamburger"]}`);
    if (isHamOpen) {
      setTimeout(() => {
        hamburger.style.zIndex = 100;
      }, 2000);
      document.documentElement.style.overflow = "hidden";
    } else {
      hamburger.style.zIndex = -3;
      document.documentElement.style.overflow = "scroll";
    }
  }, [isHamOpen]);

  return (
    <div className={styles["hamburger"]}>
      {/* <button onClick={closeHam}>
        Close
      </button> */}
      {/* <div>Hamburger</div> */}
      {/* <HamburgerLinks img={galleryImg} text="Gallery" color="#AD912E" /> */}
      <HamburgerLinks img={archiveImg} text="Archive" color="#458B2C" />
      <HamburgerLinks img={loginImg} text="Login" color="#872424" />
      <HamburgerLinks img={developersImg} text="Developers" color="#397589" />
    </div>
  );
}
