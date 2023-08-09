import React from "react";
import { motion } from "framer-motion";
import HamburgerLinks from "./HamburgerLinks";
import * as styles from "../Styles/Hamburger.module.css";

import ignitionImg from "../images/ignition-full.jpg";
import galleryImg from "../images/gallery-full.jpg";
import archiveImg from "../images/archive-full.jpg";
import sponsorsImg from "../images/sponsors-full.jpg";
import developersImg from "../images/developers-full.jpg";

export default function Hamburger({
  isLoading,
  closeHam,
  isHamOpen,
  isAnimationComplete,
}) {
  // function setZIndex() {
  // const hamburger = document.querySelector(`.${styles["hamburger"]}`);
  // console.log(isHamOpen)
  // hamburger.style.zIndex = isHamOpen ? 100 : -3;
  // }

  React.useEffect(() => {
    const hamburger = document.querySelector(`.${styles["hamburger"]}`);
    if (isHamOpen && window.innerWidth > 711) {
      // console.log("Hamburger opened");
      // setTimeout(setZIndex, 2000);
    } else {
      hamburger.style.zIndex = -3;
      // document.documentElement.style.overflowY = "scroll";
    }
    if (isHamOpen) {
      // document.documentElement.style.overflow = "hidden";
      // document.documentElement.style.overflowY = "hidden";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // console.log("isHamOpen", isHamOpen);
  }, [isHamOpen]);

  React.useEffect(() => {
    const hamburger = document.querySelector(`.${styles["hamburger"]}`);
    if (isAnimationComplete) {
      hamburger.style.zIndex = 100;
    }
  }, [isAnimationComplete]);

  return (
    <>
    {!isLoading && <div className={styles["hamburger"]}>
      {/* <button onClick={closeHam}>
        Close
      </button> */}
      {/* <div>Hamburger</div> */}
      <HamburgerLinks
        img={ignitionImg}
        text="Ignition"
        color="#872424"
        align="left"
      />
      <HamburgerLinks
        img={galleryImg}
        text="Gallery"
        color="#AD912E"
        align="right"
      />
      <HamburgerLinks
        img={archiveImg}
        text="Archive"
        color="#397589"
        align="left"
      />
      <HamburgerLinks
        img={sponsorsImg}
        text="Sponsors"
        color="#458B2C"
        align="right"
      />
      <HamburgerLinks
        img={developersImg}
        text="Developers"
        color="#4B2280"
        align="left"
      />
    </div>}
    </>
  );
}
