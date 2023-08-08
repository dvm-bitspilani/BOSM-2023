import React from "react";
import Navbar from "./Navbar";
import "../Styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "./Hamburger";
import MobileHamburger from "./MobileHamburger";

const Layout = ({
  content,
  fixedbg,
  navbar,
  setRegPage,
  setShowBlackScreen,
  isHamOpen,
  setIsHamOpen,
  overflow,
  sectionId,
}) => {
  const redBgVariants = {
    open: {
      x: 0,
      transition: {
        delay: 1,
        duration: 1,
        ease: "easeInOut",
      },
    },
    closed: {
      x: "-25vw",
      transition: {
        delay: 0,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const blueBgVariants = {
    open: {
      x: 0,
      transition: {
        delay: 1,
        duration: 1,
        ease: "easeInOut",
      },
    },
    closed: {
      x: "25vw",
      transition: {
        delay: 0,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const blackScreenVariants = {
    open: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 0,
      transition: {
        delay: 0.5,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const isBrowser = typeof window !== "undefined";

  return (
    <section data-scroll-section
      id={sectionId}
      className="layout-section"
      style={{ overflow: overflow ? "visible" : "hidden" }}
    >
      {fixedbg && (
        <div className="fixed-bg">
          <motion.div
            className="fixed-bg-red"
            animate={isHamOpen ? "closed" : "open"}
            variants={isBrowser && window.innerWidth > 731 && redBgVariants}
          ></motion.div>
          <motion.div
            className="fixed-bg-blue"
            animate={isHamOpen ? "closed" : "open"}
            variants={isBrowser && window.innerWidth > 731 && blueBgVariants}
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
      )}
      {navbar && (
        <Navbar
          setRegPage={setRegPage}
          setShowBlackScreen={setShowBlackScreen}
          isHamOpen={isHamOpen}
          setIsHamOpen={() => setIsHamOpen(!isHamOpen)}
        />
      )}
      <Hamburger closeHam={() => setIsHamOpen(false)} isHamOpen={isHamOpen} />

      <AnimatePresence>
        {isHamOpen && isBrowser && window.innerWidth > 711 && (
          <>
            <motion.div
              onMouseDown={() => setIsHamOpen(false)}
              className="ham-black-screen-right"
              initial={{ opacity: 0 }}
              animate={isHamOpen ? "open" : "closed"}
              variants={blackScreenVariants}
              exit={{ opacity: 0 }}
            />
            <motion.div
              onClick={() => setIsHamOpen(false)}
              className="ham-black-screen-left"
              initial={{ opacity: 0 }}
              animate={isHamOpen ? "open" : "closed"}
              variants={blackScreenVariants}
              exit={{ opacity: 0 }}
            />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isHamOpen && window.innerWidth < 711 && (
          <motion.div
            className="mobileHamburger"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          >
            <MobileHamburger
              closeHam={() => setIsHamOpen(false)}
              isHamOpen={isHamOpen}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <React.Fragment>{content}</React.Fragment>
    </section>
  );
};

export default Layout;
