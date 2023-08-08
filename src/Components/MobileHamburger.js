import React from "react";
import closeHamIcon from "../images/closeHam.svg"

import * as styles from "../Styles/Hamburger.module.css";
import { Link } from "gatsby";

export default function Hamburger({ closeHam, isHamOpen }) {

  return (<>
    <div className={styles["mobileContainer"]}>
        
        <div className={styles["mobileLinks"]}>
            Ignition
        </div>
        <div className={styles["mobileLinks"]}>
            Gallery
        </div>
        <div className={styles["mobileLinks"]}>
            Archive
        </div>
        <div className={styles["mobileLinks"]}>
            Sponsors
        </div>
        <div className={styles["mobileLinks"]}>
            Developers
        </div>
    </div>
    <button className={styles["closeHam"]} onClick={closeHam}>
        <img src={closeHamIcon} alt="close" />
    </button>
    </>
  );
}
