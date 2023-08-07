import React from "react";
import { motion } from "framer-motion";
import * as styles  from "../Styles/Hamburger.module.css";

export default function Hamburger({closeHam, isHamOpen}) {
    React.useEffect(() => {
        const hamburger = document.querySelector(`.${styles["hamburger"]}`);
        if (isHamOpen) {
            setTimeout(() => {
                hamburger.style.zIndex = 100;
            }, 2000);
        }else{
            hamburger.style.zIndex = -3;
        }
        
    }, [isHamOpen]);
  return (
    <div className={styles["hamburger"]}>
      {/* <button onClick={closeHam}>
        Close
      </button> */}
      {/* <div>Hamburger</div> */}
      
    </div>
  );
}
