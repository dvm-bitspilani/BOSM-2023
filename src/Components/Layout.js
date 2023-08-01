import React from "react";
import Navbar from "./Navbar";
import "../Styles/globals.css";
import { motion } from "framer-motion";

const Layout = ({ content, navbar }) => {
  return (
    <section className="layout-section">
      <div className="fixed-bg">
        <div className="fixed-bg-red"></div>
        <div className="fixed-bg-blue"
          // animate={{
          //   y: [500, 500, -250, 0, 0, 0, 0],
          //   x: [0, 0, 0, 0, 0, 300, 0],
          //   scaleY: [2, 2, 2, 2, 2, 1],
          //   scaleX: [3, 3, 3, 3, 2, 1],
          //   rotate: [90, 90, 90, 90, 105, -10, 0],
          //   transformOrigin: [
          //     "center left",
          //     "center left",
          //     "center left",
          //     "center left",
          //     "center left",
          //   ],
          //   borderRadius: ["0%", "0%", "0%", "0%", "0%"],
          // }}
          // transition={{
          //   duration: 3,
          //   ease: "easeInOut",
          //   times: [0, 0.1, 0.3, 0.45, 0.6, 0.8, 1],
          //   repeat: 0,
          //   repeatDelay: 1,
          // }}
        />{" "}
      </div>
      {navbar && <Navbar />}
      <div>{content}</div>
    </section>
  );
};

export default Layout;
