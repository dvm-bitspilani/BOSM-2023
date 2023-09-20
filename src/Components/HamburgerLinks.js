import React from "react";
import * as styles from "../Styles/Hamburger.module.css";
import { motion } from "framer-motion";
import { Link } from "gatsby";
export default function HamburgerLinks({ img, text, color }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const variants = {
    hovered: {
      top: 0,
      bottom: 0,
      transition: {
        delay: 0,
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    notHovered: {
      top: "70%",
      bottom: "0%",
      transition: {
        delay: 0,
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  let toText;
  if (text === "Ignition") {
    toText = "/ignition";
  } else if (text === "Gallery") {
    toText = "/gallery";
  } else if (text === "Sponsors") {
    toText = "/sponsors";
  } else {
    toText = "/";
  }

  return (
    <div
      aria-hidden="true"
      style={{ backgroundImage: `url(${img})` }}
      className={styles["container"]}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={img} alt={text} />
      <motion.div
        style={{ backgroundColor: `${color}` }}
        className={styles["text"]}
        variants={variants}
        animate={isHovered ? "hovered" : "notHovered"}
      >
        {text}
      </motion.div>
    </div>
  );
}
