import React from "react";
import * as styles from "../Styles/Hamburger.module.css";
import { motion } from "framer-motion";

export default function HamburgerLinks({ img, text, color }) {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className={styles["container"]}
    >
      <img src={img} alt={text} />
      <motion.div style={{ backgroundColor: `${color}` }} className={styles["text"]}
      whileHover={{
        scale: 1.1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
      }}
      >
        {text}
      </motion.div>
    </div>
  );
}
